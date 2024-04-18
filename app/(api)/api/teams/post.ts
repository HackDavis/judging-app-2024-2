import { NextRequest } from 'next/server';
import { createTeams } from '@datalib/teams/createTeams';

export async function POST(request: NextRequest) {
  const body = await request.json();
  return createTeams(body);
}
