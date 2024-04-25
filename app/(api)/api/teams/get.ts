import { type NextRequest } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { GetManyTeams } from '@datalib/teams/getTeam';

export async function GET(request: NextRequest) {
  const queries = await getQueries(request);
  return GetManyTeams(queries);
}
