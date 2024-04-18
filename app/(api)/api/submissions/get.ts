import { NextRequest } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { getSubmissions } from '@datalib/submissions/getSubmissions';

export async function GET(request: NextRequest) {
  const queries = getQueries(request);
  return getSubmissions(queries);
}
