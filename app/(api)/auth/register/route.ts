'use server';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import jwt from 'jsonwebtoken';
import { HttpError } from '@utils/response/Errors';
import type AuthTokenInt from '@typeDefs/authToken';
import { Register } from '@datalib/auth/register';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const res = await Register(body);
    const data = await res.json();

    if (!data.ok) {
      throw new HttpError(data.error);
    }

    const payload = jwt.decode(data.body) as AuthTokenInt;

    cookies().set({
      name: 'auth_token',
      value: data.body,
      expires: payload.exp * 1000,
      secure: true,
      httpOnly: true,
    });

    return NextResponse.json({ ok: true, body: payload }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
