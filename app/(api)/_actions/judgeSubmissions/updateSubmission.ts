'use server';
import FormToJSON from '@utils/form/FormToJSON';
import { updateSubmission } from '@datalib/submissions/updateSubmission';

export default async function UpdateSubmission(formData: FormData) {
  const { judge_id, team_id, ...rest } = FormToJSON(formData);
  await updateSubmission(judge_id, team_id, rest);
}
