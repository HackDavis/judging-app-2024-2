'use server';

import { verifyAuthToken } from '@datalib/auth/authToken';

export default async function VerifyToken(token: string) {
  return verifyAuthToken(token);
}
