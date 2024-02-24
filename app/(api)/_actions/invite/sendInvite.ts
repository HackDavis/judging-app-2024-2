'use server';

import FormToJSON from '@utils/form/FormToJSON';
import { generateHMACSignature } from '@utils/invite/hmac';

export default async function sendInvite(prevState: any, formData: FormData) {
  const { email } = FormToJSON(formData);

  const hmac_sig = generateHMACSignature(email as string);
  const hmac_url = `${process.env.BASE_URL}/judges/invite/test?email=${email}&sig=${hmac_sig}`;
  return hmac_url;
}
