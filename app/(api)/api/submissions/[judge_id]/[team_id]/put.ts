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
  { params }: { params: { judge_id: string; team_id: string } }
) {
  try {
    const body = await request.json();
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = await parseAndReplace(body);

    const judge_id = new ObjectId(params.judge_id);
    const team_id = new ObjectId(params.team_id);
    const db = await getDatabase();

    const submission = await db.collection('submissions').updateOne(
      {
        judge_id: judge_id,
        team_id: team_id,
      },
      parsedBody
    );

    if (submission === null) {
      throw new NotFoundError(
        `submission with judge id: ${params.judge_id} and team id: ${params.team_id} not found.`
      );
    }

    return NextResponse.json({ ok: true, body: submission }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
