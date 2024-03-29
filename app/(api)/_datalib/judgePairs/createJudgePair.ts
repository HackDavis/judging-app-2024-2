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

export const CreateJudgePair = async (body: object) => {
  try {
    // empty
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = await parseAndReplace(body);
    parsedBody.judge_ids.forEach(async (judge_id: string, index: number) => {
      parsedBody.judge_ids[index] = new ObjectId(judge_id);
    });

    if (parsedBody.team_ids) {
      parsedBody.team_ids.forEach(async (team_id: string, index: number) => {
        parsedBody.team_ids[index] = new ObjectId(team_id);
      });
    }

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
    const existingJudgePair = await db.collection('judge-pairs').findOne({
      judge_ids: { $all: judge_ids },
    });
    if (existingJudgePair) {
      throw new DuplicateError(
        'Duplicate: judge pair with these judges already exists.'
      );
    }

    const creationStatus = await db
      .collection('judge-pairs')
      .insertOne(parsedBody);

    const judge_pair = await db.collection('judge-pairs').findOne({
      _id: new ObjectId(creationStatus.insertedId),
    });

    // update judges
    await db
      .collection('judges')
      .updateMany(
        { _id: { $in: judge_ids } },
        { $set: { judge_pair_id: new ObjectId(creationStatus.insertedId) } }
      );

    // update teams
    if (parsedBody.team_ids) {
      const team_ids = parsedBody.team_ids;
      await db.collection('teams').updateMany(
        { _id: { $in: team_ids } },
        {
          $push: {
            judge_pair_ids: {
              $each: [new ObjectId(creationStatus.insertedId)],
            },
          },
        }
      );
    }

    return NextResponse.json({ ok: true, body: judge_pair }, { status: 201 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
};
