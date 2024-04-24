import { NextResponse } from 'next/server';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { HttpError, NotFoundError } from '@utils/response/Errors';
import { ObjectId } from 'mongodb';

export const GetJudge = async (id: string) => {
  try {
    const object_id = new ObjectId(id);
    const db = await getDatabase();

    const judge = await db.collection('judges').findOne({
      _id: object_id,
    });

    if (judge === null) {
      throw new NotFoundError(`judge with id: ${id} not found.`);
    }

    return NextResponse.json(
      { ok: true, body: judge, error: null },
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

export const GetManyJudges = async (query: object = {}) => {
  try {
    const db = await getDatabase();

    const judge = await db.collection('judges').find(query).toArray();
    return NextResponse.json(
      { ok: true, body: judge, error: null },
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
