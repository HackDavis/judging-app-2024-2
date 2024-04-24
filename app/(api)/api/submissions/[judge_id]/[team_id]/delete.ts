import { NextRequest } from 'next/server';
import { DeleteSubmission } from '@datalib/submissions/deleteSubmission';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { judge_id: string; team_id: string } }
) {
  return DeleteSubmission(params.judge_id, params.team_id);
}
