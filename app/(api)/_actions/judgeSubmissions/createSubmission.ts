'use server';
import { revalidatePath } from 'next/cache';
import FormToJSON from '@utils/form/FormToJSON';
import { createSubmission } from '@datalib/submissions/createSubmission';

export default async function CreateSubmission(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await createSubmission(dataJSON);
  revalidatePath('/judges');
}
