import { NextRequest } from 'next/server';
import { UpdateJudgePair } from '@datalib/judgePairs/updateJudgePair';
import { revalidatePath } from 'next/cache';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  revalidatePath('/judges');
  return UpdateJudgePair(params.id, body);
}
