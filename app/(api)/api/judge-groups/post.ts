import { NextRequest } from 'next/server';
import { CreateJudgeGroup } from '@datalib/judgeGroups/createJudgeGroup';

export async function POST(request: NextRequest) {
  const body = await request.json();
  return CreateJudgeGroup(body);
}
