import { getSubmission } from 'app/(api)/_datalib/submissions/getSubmissions';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: { judge_id: string; team_id: string } }
) {
  const submission = getSubmission(params.judge_id, params.team_id);
  revalidatePath('/judges');
  return submission;
}
