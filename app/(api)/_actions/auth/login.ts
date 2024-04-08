'use server';

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { Login } from '@datalib/auth/login';
import { HttpError, NotAuthenticatedError } from '@utils/response/Errors';
import FormToJSON from '@utils/form/FormToJSON';

import type AuthTokenInt from '@typeDefs/authToken';
import JudgeInt from '@typeDefs/judges';

export default async function LoginAction(
  prevState: any,
  formData: FormData
): Promise<{
  ok: boolean;
  body?: AuthTokenInt | null;
  error?: string | null;
}> {
  try {
    const body = FormToJSON(formData) as JudgeInt;
    const res = await Login(body);
    const data = await res.json();

    if (!data.ok) {
      throw new NotAuthenticatedError(data.error);
    }

    const payload = jwt.decode(data.body) as AuthTokenInt;

    cookies().set({
      name: 'auth_token',
      value: data.body,
      expires: payload.exp * 1000,
      secure: true,
      httpOnly: true,
    });

    return { ok: true, body: payload || null };
  } catch (e) {
    const error = e as HttpError;
    return { ok: false, error: error.message };
  }
}
