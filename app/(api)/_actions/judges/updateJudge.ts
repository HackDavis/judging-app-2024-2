'use server';
import { UpdateJudge } from '@datalib/judges/updateJudge';
import FormToJSON from '@utils/form/FormToJSON';
import { revalidatePath } from 'next/cache';

export default async function updateJudge(id: string, formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await UpdateJudge(id, dataJSON);
  revalidatePath('/judges');
}
