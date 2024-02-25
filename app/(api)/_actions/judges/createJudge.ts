'use server';
import { CreateJudge } from '@datalib/judges/createJudge';
import FormToJSON from '@utils/form/FormToJSON';
import { revalidatePath } from 'next/cache';

export default async function createJudge(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await CreateJudge(dataJSON);
  revalidatePath('/judges');
}
