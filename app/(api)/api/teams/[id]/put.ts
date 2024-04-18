import { type NextRequest } from 'next/server';
import { updateTeam } from '@datalib/teams/updateTeam';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  return updateTeam(params.id, body);
}
