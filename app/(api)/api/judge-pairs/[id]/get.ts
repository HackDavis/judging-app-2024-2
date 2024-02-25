import { NextRequest } from 'next/server';
import { GetJudgePair } from '@datalib/judgePairs/getJudgePair';

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return GetJudgePair(params.id);
}
