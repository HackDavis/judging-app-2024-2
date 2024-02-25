import { type NextRequest } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { getTeams } from 'app/(api)/_datalib/teams/getTeam';
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
  const queries = getQueries(request);
  const teams = getTeams(queries);
  revalidatePath('/judges');
  return teams;
}
