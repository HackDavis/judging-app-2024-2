import { type NextRequest } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { getTeams } from '@datalib/teams/getTeam';

export async function GET(request: NextRequest) {
  const queries = getQueries(request);
  return getTeams(queries);
}
