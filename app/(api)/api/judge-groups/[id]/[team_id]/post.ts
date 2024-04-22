import { NextRequest } from 'next/server';
import { LinkJudgeGroupToTeam } from '@datalib/judgeGroups/linkJudgeGroupToTeam';

export async function POST(
  _: NextRequest,
  { params }: { params: { id: string; team_id: string } }
) {
  return LinkJudgeGroupToTeam({
    judge_group_id: params.id,
    team_id: params.team_id,
  });
}
