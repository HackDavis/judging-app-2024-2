import { type NextRequest } from 'next/server';
import { deleteTeam } from '@datalib/teams/deleteTeam';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return deleteTeam(params.id);
}
