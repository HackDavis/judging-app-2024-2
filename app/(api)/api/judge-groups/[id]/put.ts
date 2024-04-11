import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { UpdateJudgeGroup } from '@datalib/judgeGroups/updateJudgePair';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const res = UpdateJudgeGroup(params.id, body);
  revalidatePath('/judges');
  return res;
}
