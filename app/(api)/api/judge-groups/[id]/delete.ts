import { NextRequest } from 'next/server';
import { DeleteJudgeGroup } from '@datalib/judgeGroups/deleteJudgeGroup';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return DeleteJudgeGroup(params.id);
}
