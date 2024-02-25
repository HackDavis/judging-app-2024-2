import { NextRequest } from 'next/server';
import getQueries from '@utils/request/getQueries';
import { GetManyJudgePairs } from '@datalib/judgePairs/getJudgePair';

export async function GET(request: NextRequest) {
  const queries = getQueries(request);
  return GetManyJudgePairs(queries);
}
