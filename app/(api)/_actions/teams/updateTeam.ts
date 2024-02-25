'use server';
import FormToJSON from '@utils/form/FormToJSON';
import { updateTeam } from 'app/(api)/_datalib/teams/updateTeam';
import { revalidatePath } from 'next/cache';

export default async function UpdateTeam(id: string, formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await updateTeam(id, dataJSON);
  revalidatePath('/judges');
}
