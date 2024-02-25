import { NextRequest } from 'next/server';
import { CreateJudge } from '@datalib/judges/createJudge';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = CreateJudge(body);
  revalidatePath('/judges');
  return res;
}
