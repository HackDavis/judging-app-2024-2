import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import NotFoundError from '@utils/response/NotFoundError';
import HttpError from '@utils/response/HttpError';

export async function GET(_: any, { params }: { params: { id: string } }) {
  try {
    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const judge_pair = await db.collection('judge-pairs').findOne({ _id: id });

    if (judge_pair === null) {
      throw new NotFoundError(`judge_pair with id: ${params.id} not found.`);
    }

    const judges = await db
      .collection('judges')
      .find({ judge_pair_id: id })
      .project({ judge_pair_id: 0 })
      .toArray();
    const teams = await db
      .collection('teams')
      .find({ judge_pairs: id })
      .project({ judge_pairs: 0, judge_submissions: 0 })
      .toArray();
    judge_pair.judges = judges;
    judge_pair.teams = teams;

    return NextResponse.json({ ok: true, body: judge_pair }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
