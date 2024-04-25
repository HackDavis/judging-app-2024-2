import { NextRequest } from 'next/server';
import getQueries from '@utils/request/getQueries';
import { GetManyJudgeGroups } from '@datalib/judgeGroups/getJudgeGroup';

export async function GET(request: NextRequest) {
  const queries = await getQueries(request);
  return GetManyJudgeGroups(queries);
}
