import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import { NoContentError, HttpError } from '@utils/response/Errors';

export const createTeams = async (body: object) => {
  try {
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }
    const parsedBody = await parseAndReplace(body);

    const db = await getDatabase();
    const creationStatus = await db.collection('teams').insertMany(parsedBody);

    const teams = await db.collection('teams').findMany({
      _id: {
        $in: creationStatus.insertedIds.map((id: string) => new ObjectId(id)),
      },
    });

    return NextResponse.json({ ok: true, body: teams }, { status: 201 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
};
