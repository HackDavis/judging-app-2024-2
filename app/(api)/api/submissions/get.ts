import { NextRequest, NextResponse } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import HttpError from '@utils/response/HttpError';

export async function GET(request: NextRequest) {
  try {
    const queries = getQueries(request);
    const db = await getDatabase();

    const submissions = await db
      .collection('submissions')
      .find(queries)
      .toArray();

    return NextResponse.json({ ok: true, body: submissions }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
