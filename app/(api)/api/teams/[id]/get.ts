import { type NextRequest } from 'next/server';
import { GetTeam } from '@datalib/teams/getTeam';

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return GetTeam(params.id);
}
