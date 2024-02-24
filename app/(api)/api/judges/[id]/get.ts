import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import NotFoundError from '@utils/response/NotFoundError';
import HttpError from '@utils/response/HttpError';

export async function GET(_: any, { params }: { params: { id: string } }) {
  try {
    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const judge = await db.collection('judges').findOne({
      _id: id,
    });

    if (judge === null) {
      throw new NotFoundError(`judge with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: judge }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
