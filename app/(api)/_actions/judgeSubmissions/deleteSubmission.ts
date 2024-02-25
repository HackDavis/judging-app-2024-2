'use server';

import { deleteSubmission } from 'app/(api)/_datalib/submissions/deleteSubmission';
import { revalidatePath } from 'next/cache';

export default async function DeleteSubmission(
  judge_id: string,
  team_id: string
) {
  await deleteSubmission(judge_id, team_id);
  revalidatePath('/judges');
}
