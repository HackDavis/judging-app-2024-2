import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import NoContentError from '@utils/response/NoContentError';
import HttpError from '@utils/response/HttpError';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    body.judge_id = new ObjectId(body.judge_id);
    body.team_id = new ObjectId(body.team_id);

    const db = await getDatabase();

    const submission = await db.collection('submissions').insertOne(body);

    return NextResponse.json({ ok: true, body: submission }, { status: 201 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
