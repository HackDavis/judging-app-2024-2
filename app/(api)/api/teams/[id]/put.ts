import { type NextRequest } from 'next/server';
import { UpdateTeam } from '@datalib/teams/updateTeam';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  return UpdateTeam(params.id, body);
}
