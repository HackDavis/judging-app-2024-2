import { type NextRequest } from 'next/server';

import { createTeams } from 'app/(api)/_datalib/teams/createTeams';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const teams = createTeams(body);
  revalidatePath('/judges');
  return teams;
}
