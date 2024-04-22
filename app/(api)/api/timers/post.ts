import { CreateHelpTimer } from '@datalib/helpTimers/createHelpTimer';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  return CreateHelpTimer(body);
}
