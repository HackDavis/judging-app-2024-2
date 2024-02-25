import { NextRequest } from 'next/server';
import { CreateJudgePair } from '@datalib/judgePairs/createJudgePair';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const body = await request.json();
  revalidatePath('/judge-pairs');
  return CreateJudgePair(body);
}
