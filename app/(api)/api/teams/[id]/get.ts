import { type NextRequest } from 'next/server';
import { getTeam } from '@datalib/teams/getTeam';
import { revalidatePath } from 'next/cache';

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const team = getTeam(params.id);
  revalidatePath('/judges');
  return team;
}
