'use server';

import { CreateJudgePair } from '@datalib/judgePairs/createJudgePair';
import FormToJSON from '@utils/form/FormToJSON';
import { revalidatePath } from 'next/cache';

export default async function createJudgePair(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await CreateJudgePair(dataJSON);
  revalidatePath('/judge-pairs');
}
