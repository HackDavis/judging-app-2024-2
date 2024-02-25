import { NextResponse } from 'next/server';
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

    const teams = await db.collection('teams').find({
      _id: {
        $in: Object.values(creationStatus.insertedIds).map((id: any) => id),
      },
    });

    return NextResponse.json(
      { ok: true, body: await teams.toArray() },
      { status: 201 }
    );
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
};
