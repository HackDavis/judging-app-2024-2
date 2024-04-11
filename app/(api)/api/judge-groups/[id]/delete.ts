import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { DeleteJudgeGroup } from '@datalib/judgeGroups/deleteJudgeGroup';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = DeleteJudgeGroup(params.id);
  revalidatePath('/judges');
  return res;
}
