'use server';
import { revalidatePath } from 'next/cache';
import FormToJSON from '../../_utils/form/FormToJSON';
import { createSubmission } from 'app/(api)/_datalib/submissions/createSubmission';

export default async function CreateSubmission(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await createSubmission(dataJSON);
  revalidatePath('/judges');
}
