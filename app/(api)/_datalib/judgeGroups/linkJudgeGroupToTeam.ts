import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import NoContentError from '@utils/response/NoContentError';
import HttpError from '@utils/response/HttpError';
import { NotFoundError, DuplicateError } from '@utils/response/Errors';

export const LinkManyJudgeGroupsToTeams = async (body: object[]) => {
  try {
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = parseAndReplace(body);

    const db = await getDatabase();
    const creationStatus = await db
      .collection('judgeGroupToTeams')
      .insertMany(parsedBody);

    const links = await db
      .collection('judgeGroupToTeams')
      .find({
        _id: {
          $in: Object.values(creationStatus.insertedIds).map((id: any) => id),
        },
      })
      .toArray();

    return NextResponse.json(
      { ok: true, body: await links, error: null },
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

export const LinkJudgeGroupToTeam = async (body: {
  judge_group_id: string;
  team_id: string;
}) => {
  try {
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = {
      judge_group_id: new ObjectId(body.judge_group_id),
      team_id: new ObjectId(body.team_id),
    };

    const db = await getDatabase();

    const judgeGroup = await db.collection('judgeGroups').findOne({
      _id: parsedBody.judge_group_id,
    });

    if (judgeGroup === null) {
      throw new NotFoundError(
        `judge group with id: ${body.judge_group_id} not found.`
      );
    }

    const team = await db.collection('teams').findOne({
      _id: parsedBody.team_id,
    });

    if (team === null) {
      throw new NotFoundError(`team with id: ${body.team_id} not found.`);
    }

    const existingJudgeGroupToTeam = await db
      .collection('judgeGroupToTeams')
      .findOne({
        judge_group_id: parsedBody.judge_group_id,
        team_id: parsedBody.team_id,
      });

    if (existingJudgeGroupToTeam) {
      throw new DuplicateError('JudgeGroupToTeam already exists');
    }

    const creationStatus = await db
      .collection('judgeGroupToTeams')
      .insertOne(parsedBody);

    const judgeGroupToTeam = await db.collection('judgeGroupToTeams').findOne({
      _id: new ObjectId(creationStatus.insertedId),
    });

    return NextResponse.json(
      { ok: true, body: judgeGroupToTeam, error: null },
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
