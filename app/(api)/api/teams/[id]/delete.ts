import { type NextRequest } from 'next/server';
import { DeleteTeam } from '@datalib/teams/deleteTeam';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return DeleteTeam(params.id);
}
