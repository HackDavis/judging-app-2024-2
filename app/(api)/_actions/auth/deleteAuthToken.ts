'use server';

import { cookies } from 'next/headers';

export default async function DeleteAuthToken() {
  cookies().delete('auth_token');
}
