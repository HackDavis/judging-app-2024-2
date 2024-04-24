import { CreateSubmission } from '@datalib/submissions/createSubmission';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  return CreateSubmission(body);
}
