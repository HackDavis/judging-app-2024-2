import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { updateSubmission } from '@datalib/submissions/updateSubmission';

export async function PUT(
  request: NextRequest,
  { params }: { params: { judge_id: string; team_id: string } }
) {
  const body = await request.json();
  const submission = await updateSubmission(
    params.judge_id,
    params.team_id,
    body
  );
  revalidatePath('/judges');
  return submission;
}
