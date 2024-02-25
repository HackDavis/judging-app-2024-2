import { NextResponse } from 'next/server';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { ObjectId } from 'mongodb';

import { prependAllAttributes } from '@utils/request/prependAttributes';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import {
  HttpError,
  NoContentError,
  NotFoundError,
} from '@utils/response/Errors';

export const updateTeam = async (id: string, body: object) => {
  try {
    const object_id = new ObjectId(id);
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }
    const parsedBody = await parseAndReplace(body);

    const db = await getDatabase();
    const team = await db.collection('teams').updateOne(
      {
        _id: object_id,
      },
      parsedBody
    );

    const subDocumentUpdate = prependAllAttributes(body, 'teams.$[team].');
    const judge_pair = await db
      .collection('judge-pairs')
      .updateMany({}, subDocumentUpdate, {
        arrayFilters: [{ 'team._id': object_id }],
      });

    if (team.matchedCount === 0) {
      throw new NotFoundError(`Team with id: ${id} not found.`);
    }

    return NextResponse.json(
      { ok: true, body: [team, judge_pair] },
      { status: 200 }
    );
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
};
