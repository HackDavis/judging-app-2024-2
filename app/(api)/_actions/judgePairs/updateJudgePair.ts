'use server';
import { UpdateJudgePair } from '@datalib/judgePairs/updateJudgePair';
import FormToJSON from '../../_utils/form/FormToJSON';
import { revalidatePath } from 'next/cache';

export default async function updateJudgePairs(id: string, formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await UpdateJudgePair(id, dataJSON);
  revalidatePath('/judges');
}
