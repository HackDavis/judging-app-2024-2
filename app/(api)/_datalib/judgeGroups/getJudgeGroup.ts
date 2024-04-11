import { cache } from 'react';

import { NextResponse } from 'next/server';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { HttpError, NotFoundError } from '@utils/response/Errors';
import { ObjectId } from 'mongodb';

export const GetJudgeGroup = cache(async (id: string) => {
  try {
    const object_id = new ObjectId(id);
    const db = await getDatabase();
    const judgeGroup = await db
      .collection('judgeGroups')
      .findOne({ _id: object_id });

    if (judgeGroup === null) {
      throw new NotFoundError(`judgeGroup with id: ${id} not found.`);
    }

    return NextResponse.json(
      { ok: true, body: judgeGroup, error: null },
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

export const GetManyJudgeGroups = cache(async (query: object = {}) => {
  try {
    const db = await getDatabase();

    const judgeGroups = await db
      .collection('judgeGroups')
      .aggregate([
        {
          $match: query,
        },
        {
          $lookup: {
            from: 'judges',
            localField: '_id',
            foreignField: 'judge_group_id',
            as: 'judges',
          },
        },
      ])
      .project({
        'judges.judge_pair_id': 0,
      })
      .toArray();

    return NextResponse.json(
      { ok: true, body: judgeGroups, error: null },
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
