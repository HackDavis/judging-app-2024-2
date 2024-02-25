import { type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { deleteTeam } from '@datalib/teams/deleteTeam';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const team = deleteTeam(params.id);
  revalidatePath('/judges');
  return team;
}
