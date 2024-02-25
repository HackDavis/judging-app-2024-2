'use server';

import { deleteTeam } from 'app/(api)/_datalib/teams/deleteTeam';
import { revalidatePath } from 'next/cache';

export default async function DeleteTeam(id: string) {
  await deleteTeam(id);
  revalidatePath('/judges');
}
