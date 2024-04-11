import { NextRequest } from 'next/server';
import { CreateJudgeGroup } from '@datalib/judgeGroups/createJudgeGroup';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = await CreateJudgeGroup(body);
  revalidatePath('/judges');
  return res;
}
