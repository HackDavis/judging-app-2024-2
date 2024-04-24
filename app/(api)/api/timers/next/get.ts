import { type NextRequest } from 'next/server';
import { GetNextTimer } from '@datalib/helpTimers/getHelpTimer';

export async function GET(_: NextRequest) {
  return GetNextTimer();
}
