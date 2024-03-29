'use server';

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { Register } from '@datalib/auth/register';
import { HttpError, NotAuthenticatedError } from '@utils/response/Errors';
import FormToJSON from '@utils/form/FormToJSON';

import type AuthTokenInt from '@typeDefs/authToken';

export default async function RegisterAction(
  prevState: any,
  formData: FormData
) {
  try {
    const body = FormToJSON(formData) as { email: string; password: string };

    const res = await Register(body);
    const data = await res.json();

    if (!data.ok) {
      throw new NotAuthenticatedError(data.error);
    }

    const payload = jwt.decode(data.body) as AuthTokenInt;

    cookies().set({
      name: 'auth_token',
      value: data.body,
      expires: payload.exp,
      secure: true,
      httpOnly: true,
    });

    return { ok: true, body: payload };
  } catch (e) {
    const error = e as HttpError;
    return { ok: false, error: error.message };
  }
}
