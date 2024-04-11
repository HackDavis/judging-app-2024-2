import { type NextRequest } from 'next/server';
import { updateTeam } from '@datalib/teams/updateTeam';
import { revalidatePath } from 'next/cache';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const team = await updateTeam(params.id, body);
  revalidatePath('/judges');
  return team;
}
