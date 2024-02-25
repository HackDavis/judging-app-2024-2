import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import {
  NotFoundError,
  NoContentError,
  HttpError,
} from '@utils/response/Errors';

export const UpdateJudgePair = async (id: string, body: object) => {
  try {
    const object_id = new ObjectId(id);

    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = await parseAndReplace(body);

    const db = await getDatabase();

    const judge_pair = await db.collection('judge-pairs').updateOne(
      {
        _id: object_id,
      },
      parsedBody
    );

    if (judge_pair.matchedCount === 0) {
      throw new NotFoundError(`Judge-pair with id: ${id} not found.`);
    }

    return NextResponse.json({ ok: true, body: judge_pair }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
};
