import { NextRequest } from 'next/server';
import { CreateJudgePair } from '@datalib/judgePairs/createJudgePair';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = CreateJudgePair(body);
  revalidatePath('/judges');
  return res;
}
