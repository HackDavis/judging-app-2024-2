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

export const UpdateJudgeGroup = async (id: string, body: object) => {
  try {
    const object_id = new ObjectId(id);

    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = await parseAndReplace(body);

    const db = await getDatabase();

    const judgeGroup = await db.collection('judgeGroups').updateOne(
      {
        _id: object_id,
      },
      parsedBody
    );

    if (judgeGroup.matchedCount === 0) {
      throw new NotFoundError(`Judge Group with id: ${id} not found.`);
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
};
