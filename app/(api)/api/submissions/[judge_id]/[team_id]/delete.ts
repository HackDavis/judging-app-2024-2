import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import NotFoundError from '@utils/response/NotFoundError';
import HttpError from '@utils/response/HttpError';

export async function DELETE(
  _: any,
  { params }: { params: { judge_id: string; team_id: string } }
) {
  try {
    const judge_id = new ObjectId(params.judge_id);
    const team_id = new ObjectId(params.team_id);
    const db = await getDatabase();

    const deleteStatus = await db.collection('submissions').deleteOne({
      judge_id: judge_id,
      team_id: team_id,
    });

    if (deleteStatus.deletedCount === 0) {
      throw new NotFoundError(
        `submission with judge id: ${params.judge_id} and team id: ${params.team_id} not found.`
      );
    }

    return NextResponse.json(
      { ok: true, body: 'submission deleted' },
      { status: 200 }
    );
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status }
    );
  }
}
