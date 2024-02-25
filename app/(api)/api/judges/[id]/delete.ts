import { NextRequest } from 'next/server';
import { DeleteJudge } from '@datalib/judges/deleteJudge';
import { revalidatePath } from 'next/cache';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  revalidatePath('/judges');
  return DeleteJudge(params.id);
}
