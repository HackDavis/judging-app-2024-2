import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import {
  NoContentError,
  HttpError,
  NotFoundError,
  DuplicateError,
} from '@utils/response/Errors';

export const CreateJudgeGroup = async (body: object) => {
  try {
    // empty
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = await parseAndReplace(body);
    const db = await getDatabase();

    // judges dont exist
    const judge_ids = parsedBody.judge_ids;
    const judgesExist = await db
      .collection('judges')
      .find({
        _id: { $in: judge_ids },
      })
      .toArray();
    if (judgesExist.length !== judge_ids.length) {
      throw new NotFoundError('One or more judges not found.');
    }

    // teams dont exist
    if (parsedBody.team_ids) {
      const team_ids = parsedBody.team_ids;
      const teamsExist = await db
        .collection('teams')
        .find({
          _id: { $in: team_ids },
        })
        .toArray();
      if (teamsExist.length !== team_ids.length) {
        throw new NotFoundError('One or more teams not found.');
      }
    }

    // duplicate
    const existingJudgeGroup = await db.collection('judgeGroups').findOne({
      judge_ids: { $all: judge_ids },
    });
    if (existingJudgeGroup) {
      throw new DuplicateError(
        'Duplicate: judge group with these judges already exists.'
      );
    }

    const creationStatus = await db
      .collection('judgeGroups')
      .insertOne(parsedBody);

    const judge_pair = await db.collection('judgeGroups').findOne({
      _id: new ObjectId(creationStatus.insertedId),
    });

    const judgeGroupId = new ObjectId(creationStatus.insertedId);

    // update judges
    await db
      .collection('judges')
      .updateMany(
        { _id: { $in: judge_ids } },
        { $set: { judge_group_id: judgeGroupId } }
      );

    return NextResponse.json(
      { ok: true, body: judge_pair, error: null },
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
