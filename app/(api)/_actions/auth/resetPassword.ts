'use server';

import { ResetPassword } from '@datalib/auth/resetPassword';
import { HttpError } from '@utils/response/Errors';
import FormToJSON from '@utils/form/FormToJSON';

export default async function ResetPasswordAction(
  prevState: any,
  formData: FormData
): Promise<{
  ok: boolean;
  body?: any;
  error?: string | null;
}> {
  try {
    const body = FormToJSON(formData) as { email: string; password: string };
    const res = await ResetPassword(body);
    const data = await res.json();

    if (!data.ok) {
      throw new HttpError(data.error);
    }

    return { ok: true, body: data || null, error: null };
  } catch (e) {
    const error = e as HttpError;
    return { ok: false, body: null, error: error.message };
  }
}
