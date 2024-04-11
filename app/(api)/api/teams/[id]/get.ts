import { type NextRequest } from 'next/server';
import { getTeam } from '@datalib/teams/getTeam';

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return getTeam(params.id);
}
