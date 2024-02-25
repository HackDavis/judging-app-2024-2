import { createSubmission } from 'app/(api)/_datalib/submissions/createSubmission';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const submission = createSubmission(body);
  revalidatePath('/judges');
  return submission;
}
