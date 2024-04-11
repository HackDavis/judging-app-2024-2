import { NextRequest } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { getSubmissions } from '@datalib/submissions/getSubmissions';
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
  const queries = getQueries(request);
  const submissions = await getSubmissions(queries);
  revalidatePath('/judges');
  return submissions;
}
