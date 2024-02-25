import { NextRequest } from 'next/server';
import { DeleteJudgePair } from '@datalib/judgePairs/deleteJudgePair';
import { revalidatePath } from 'next/cache';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  revalidatePath('/judges');
  return DeleteJudgePair(params.id);
}
