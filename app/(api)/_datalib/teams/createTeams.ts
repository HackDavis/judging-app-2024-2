import { NextResponse } from 'next/server';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import {
  NoContentError,
  HttpError,
  BadRequestError,
} from '@utils/response/Errors';
import Team from '@typeDefs/teams';
import tracks from '../../_data/tracks.json' assert { type: 'json' };

export const createTeams = async (body: object[]) => {
  try {
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }
    const parsedBody = await parseAndReplace(body);

    parsedBody.forEach((team: Team) => {
      const seenTracks = new Set();
      team.tracks.forEach((chosenTrack) => {
        const foundTrack = tracks.find((track) => track.name === chosenTrack);
        if (foundTrack == undefined) {
          throw new BadRequestError('Invalid track');
        } else if (seenTracks.has(foundTrack.name)) {
          throw new BadRequestError('Duplicate track');
        } else if (foundTrack.name === 'Best Hack for Social Good') {
          throw new BadRequestError(
            'Remove default track: Best Hack for Social Good'
          );
        }
        seenTracks.add(chosenTrack);
      });

      // automatically add Best Hack for Social Good
      team.tracks.push('Best Hack for Social Good');
    });

    const db = await getDatabase();
    const creationStatus = await db.collection('teams').insertMany(parsedBody);

    const teams = await db
      .collection('teams')
      .find({
        _id: {
          $in: Object.values(creationStatus.insertedIds).map((id: any) => id),
        },
      })
      .toArray();

    return NextResponse.json(
      { ok: true, body: await teams, error: null },
      { status: 201 }
    );
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, body: null, error: error.message },
      { status: error.status || 400 }
    );
  }
};
