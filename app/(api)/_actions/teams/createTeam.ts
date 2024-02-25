'use server';
import { revalidatePath } from 'next/cache';
import FormToJSON from '@utils/form/FormToJSON';
import { createTeams } from '@datalib/teams/createTeams';

export default async function CreateTeams(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await createTeams(dataJSON);
  revalidatePath('/judges');
}
