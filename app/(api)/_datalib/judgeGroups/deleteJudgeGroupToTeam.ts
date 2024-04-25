import { NextResponse } from 'next/server';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { HttpError } from '@utils/response/Errors';

export const DeleteManyJudgeGroupsToTeams = async (query: object = {}) => {
  try {
    const db = await getDatabase();

    await db.collection('judgeGroupToTeams').deleteMany(query);

    return NextResponse.json(
      { ok: true, body: 'Judge Group to Teams deleted', error: null },
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
