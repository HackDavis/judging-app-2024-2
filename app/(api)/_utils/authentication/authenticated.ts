import type { NextRequest, NextResponse } from 'next/server';
import authenticate from './authenticate';
import { HttpError } from '@utils/response/Errors';

export default function authenticated(
  handler: (request: NextRequest, params: any) => Promise<NextResponse>
) {
  return async (request: NextRequest, params: object) => {
    try {
      await authenticate(request);
    } catch (e) {
      const error = e as HttpError;
      return Response.json(
        { ok: false, body: null, error: error.message },
        { status: error.status || 401 }
      );
    }
    return handler(request, params);
  };
}
