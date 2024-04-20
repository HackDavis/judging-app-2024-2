'use server';
import FormToJSON from '@utils/form/FormToJSON';
import { UpdateSubmission } from '@datalib/submissions/updateSubmission';

export default async function updateSubmission(formData: FormData) {
  const { judge_id, team_id, ...rest } = FormToJSON(formData);
  await UpdateSubmission(judge_id, team_id, rest);
}
