import { NextRequest } from 'next/server';
import { deleteSubmission } from 'app/(api)/_datalib/submissions/deleteSubmission';
import { revalidatePath } from 'next/cache';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { judge_id: string; team_id: string } }
) {
  const submission = deleteSubmission(params.judge_id, params.team_id);
  revalidatePath('/judges');
  return submission;
}
