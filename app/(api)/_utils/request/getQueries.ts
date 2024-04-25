import { type NextRequest } from 'next/server';
import parseAndReplace from './parseAndReplace';

export default async function getQueries(request: NextRequest) {
  const query_entries = request.nextUrl.searchParams.entries();
  const output: { [key: string]: string } = {};
  for (const [key, val] of query_entries) {
    output[key] = JSON.parse(val);
  }
  return parseAndReplace(output);
}
