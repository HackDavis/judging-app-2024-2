import { getSubmission } from '@datalib/submissions/getSubmissions';
import { NextRequest } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: { judge_id: string; team_id: string } }
) {
  return getSubmission(params.judge_id, params.team_id);
}
