import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import NotFoundError from '@utils/response/NotFoundError';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import NoContentError from '@utils/response/NoContentError';
import parseAndReplace from '@utils/request/parseAndReplace';
import HttpError from '@utils/response/HttpError';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = await parseAndReplace(body);

    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const judge_pair = await db.collection('judge-pairs').updateOne(
      {
        _id: id,
      },
      parsedBody
    );

    if (judge_pair === null) {
      throw new NotFoundError(`Judge-pair with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: judge_pair }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
