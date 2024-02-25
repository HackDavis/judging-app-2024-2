'use server';

import { DeleteJudge } from '@datalib/judges/deleteJudge';
import { revalidatePath } from 'next/cache';

export default async function deleteJudge(id: string) {
  await DeleteJudge(id);
  revalidatePath('/judges');
}
