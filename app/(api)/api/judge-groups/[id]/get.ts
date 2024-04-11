import { NextRequest } from 'next/server';
import { GetJudgeGroup } from '@datalib/judgeGroups/getJudgeGroup';

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return GetJudgeGroup(params.id);
}
