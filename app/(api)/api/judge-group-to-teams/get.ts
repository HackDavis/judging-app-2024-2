import { NextRequest } from 'next/server';
import getQueries from '@utils/request/getQueries';
import { GetManyJudgeGroupToTeams } from '@datalib/judgeGroups/getJudgeGroupToTeam';

export async function GET(request: NextRequest) {
  const queries = getQueries(request);
  return GetManyJudgeGroupToTeams(queries);
}
