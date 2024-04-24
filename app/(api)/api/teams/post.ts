import { NextRequest } from 'next/server';
import { CreateManyTeams } from '@datalib/teams/createTeams';

export async function POST(request: NextRequest) {
  const body = await request.json();
  return CreateManyTeams(body);
}
