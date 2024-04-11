import { NextRequest } from 'next/server';
import { createTeams } from '@datalib/teams/createTeams';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const teams = await createTeams(body);
  revalidatePath('/judges');
  return teams;
}
