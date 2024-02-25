import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import {
  HttpError,
  NoContentError,
  NotFoundError,
  DuplicateError,
} from '@utils/response/Errors';

export const CreateJudge = async (body: object) => {
  try {
    // empty
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = await parseAndReplace(body);
    if (parsedBody.judge_pair_id) {
      parsedBody.judge_pair_id = new ObjectId(parsedBody.judge_pair_id);
    }

    if (parsedBody.submission_ids) {
      parsedBody.submission_ids.forEach(
        async (submission_id: string, index: number) => {
          parsedBody.submission_ids[index] = new ObjectId(submission_id);
        }
      );
    }

    const db = await getDatabase();

    // judgePairs dont exists
    if (parsedBody.judge_pair_id) {
      const judgePairExist = await db
        .collection('judge-pairs')
        .findOne({ _id: parsedBody.judge_pair_id });

      if (judgePairExist === null) {
        throw new NotFoundError(`judge_pair not found.`);
      }
    }

    // submissions dont exists
    if (parsedBody.submission_ids) {
      const submission_ids = parsedBody.submission_ids;
      const submissionsExist = await db
        .collection('submissions')
        .find({
          _id: { $in: submission_ids },
        })
        .toArray();
      if (submissionsExist.length !== submission_ids.length) {
        throw new NotFoundError('One or more submissions not found.');
      }
    }

    // duplicate
    const existingJudge = await db.collection('judges').findOne({
      name: parsedBody.name,
      email: parsedBody.email,
      specialty: parsedBody.specialty,
    });
    if (existingJudge) {
      throw new DuplicateError('Duplicate: judge already exists.');
    }

    const creationStatus = await db.collection('judges').insertOne(parsedBody);

    const judge = await db.collection('judges').findOne({
      _id: new ObjectId(creationStatus.insertedId),
    });

    // update judgePairs if exist
    if (parsedBody.judge_pair_id) {
      await db.collection('judge-pairs').updateOne(
        { _id: parsedBody.judge_pair_id },
        {
          $push: {
            judge_ids: {
              $each: [new ObjectId(creationStatus.insertedId)],
            },
          },
        }
      );
    }

    // update submissions if exist
    if (parsedBody.submission_ids) {
      const submission_ids = parsedBody.submission_ids;
      await db
        .collection('submissions')
        .updateMany(
          { _id: { $in: submission_ids } },
          { $set: { judge_id: new ObjectId(creationStatus.insertedId) } }
        );
    }

    return NextResponse.json({ ok: true, body: judge }, { status: 201 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
};
