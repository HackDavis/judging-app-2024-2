'use server';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(_: NextRequest) {
  cookies().delete('auth_token');
  return NextResponse.json(
    { ok: true, body: null, error: null },
    { status: 200 }
  );
}
