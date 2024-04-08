import { cache } from 'react';

import { NextResponse } from 'next/server';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { HttpError, NotFoundError } from '@utils/response/Errors';
import { ObjectId } from 'mongodb';

export const getTeam = cache(async (id: string) => {
  try {
    const object_id = new ObjectId(id);
    const db = await getDatabase();
    const team = await db.collection('teams').findOne({
      _id: object_id,
    });

    if (team === null) {
      throw new NotFoundError(`Team with id: ${id} not found.`);
    }

    return NextResponse.json(
      { ok: true, body: team, error: null },
      { status: 200 }
    );
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, body: null, error: error.message },
      { status: error.status || 400 }
    );
  }
});

export const getTeams = cache(async (query: object = {}) => {
  try {
    const db = await getDatabase();
    // const teams = await db.collection('teams').find(query).toArray();
    const teams = await db
      .collection('teams')
      .aggregate([
        {
          $match: query,
        },
        {
          $lookup: {
            from: 'submissions',
            localField: '_id',
            foreignField: 'team_id',
            as: 'submissions',
          },
        },
      ])
      .project({
        'submissions.team_id': 0,
      })
      .toArray();

    return NextResponse.json({ ok: true, body: teams }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
});
