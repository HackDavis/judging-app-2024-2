import { cache } from 'react';

import { NextResponse } from 'next/server';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { HttpError, NotFoundError } from '@utils/response/Errors';
import { ObjectId } from 'mongodb';

export const GetJudgePair = cache(async (id: string) => {
  try {
    const object_id = new ObjectId(id);
    const db = await getDatabase();
    const judge_pair = await db
      .collection('judge-pairs')
      .findOne({ _id: object_id });

    if (judge_pair === null) {
      throw new NotFoundError(`judge_pair with id: ${id} not found.`);
    }

    return NextResponse.json(
      { ok: true, body: judge_pair, error: null },
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

export const GetManyJudgePairs = cache(async (query: object = {}) => {
  try {
    const db = await getDatabase();

    const judge_pair = await db
      .collection('judge-pairs')
      .aggregate([
        {
          $match: query,
        },
        {
          $lookup: {
            from: 'judges',
            localField: '_id',
            foreignField: 'judge_pair_id',
            as: 'judges',
          },
        },
        {
          $lookup: {
            from: 'teams',
            localField: '_id',
            foreignField: 'judge_pair_ids',
            as: 'teams',
          },
        },
      ])
      .project({
        'judges.judge_pair_id': 0,
        'teams.judge_pair_ids': 0,
        'teams.submission_ids': 0,
      })
      .toArray();

    return NextResponse.json(
      { ok: true, body: judge_pair, error: null },
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
