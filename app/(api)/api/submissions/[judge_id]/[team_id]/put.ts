import { NextRequest } from 'next/server';
import { UpdateSubmission } from '@datalib/submissions/updateSubmission';

export async function PUT(
  request: NextRequest,
  { params }: { params: { judge_id: string; team_id: string } }
) {
  const body = await request.json();
  return UpdateSubmission(params.judge_id, params.team_id, body);
}
