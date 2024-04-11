import { createSubmission } from '@datalib/submissions/createSubmission';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const submission = await createSubmission(body);
  revalidatePath('/judges');
  return submission;
}
