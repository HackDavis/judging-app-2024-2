import { NextResponse } from 'next/server';

import { getDatabase } from '@utils/mongodb/mongoClient';
import getQueries from '@utils/request/getQueries';

export async function GET(request) {
  try {
    const queries = getQueries(request);
    const db = await getDatabase();

    const judge = await db.collection('judges').find(queries).toArray();

    return NextResponse.json({ ok: true, body: judge }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
