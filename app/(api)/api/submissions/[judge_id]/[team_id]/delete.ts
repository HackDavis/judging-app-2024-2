import { NextRequest } from 'next/server';
import { deleteSubmission } from '@datalib/submissions/deleteSubmission';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { judge_id: string; team_id: string } }
) {
  return deleteSubmission(params.judge_id, params.team_id);
}
