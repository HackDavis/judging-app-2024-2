import { type NextRequest } from 'next/server';
import { updateTeam } from '@datalib/teams/updateTeam';
import { revalidatePath } from 'next/cache';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const team = updateTeam(params.id, request);
  revalidatePath('/judges');
  return team;
}
