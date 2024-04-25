import { NextRequest } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { GetManySubmissions } from '@datalib/submissions/getSubmissions';

export async function GET(request: NextRequest) {
  const queries = await getQueries(request);
  console.log(queries);
  return GetManySubmissions(queries);
}
