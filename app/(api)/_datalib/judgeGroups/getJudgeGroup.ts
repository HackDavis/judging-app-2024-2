import { cache } from 'react';

import { NextResponse } from 'next/server';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { HttpError, NotFoundError } from '@utils/response/Errors';
import { ObjectId } from 'mongodb';

export const GetJudgeGroup = cache(async (id: string) => {
  try {
    const judge_group_id = new ObjectId(id);
    const db = await getDatabase();

    const judgeGroups = await db
      .collection('judgeGroups')
      .aggregate([
        {
          $match: {
            _id: judge_group_id,
          },
        },
        {
          $lookup: {
            from: 'judgeGroupToTeams',
            localField: '_id',
            foreignField: 'judge_group_id',
            as: 'judgeGroupsToTeams',
          },
        },
        {
          $lookup: {
            from: 'teams',
            localField: 'judgeGroupsToTeams.team_id',
            foreignField: '_id',
            as: 'teams',
          },
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
      .project({ judgeGroupsToTeams: 0, 'judges.judge_group_id': 0 })
      .toArray();

    if (judgeGroups.length === 0) {
      throw new NotFoundError('Judge group not found');
    }

    return NextResponse.json(
      { ok: true, body: judgeGroups[0], error: null },
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
            from: 'judgeGroupToTeams',
            localField: '_id',
            foreignField: 'judge_group_id',
            as: 'judgeGroupsToTeams',
          },
        },
        {
          $lookup: {
            from: 'teams',
            localField: 'judgeGroupsToTeams.team_id',
            foreignField: '_id',
            as: 'teams',
          },
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
      .project({ judgeGroupsToTeams: 0, 'judges.judge_group_id': 0 })
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
