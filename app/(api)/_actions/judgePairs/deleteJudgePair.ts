'use server';

import { DeleteJudgePair } from '@datalib/judgePairs/deleteJudgePair';
import { revalidatePath } from 'next/cache';

export default async function deleteJudgePairs(id: string) {
  await DeleteJudgePair(id);
  revalidatePath('/judges');
}
