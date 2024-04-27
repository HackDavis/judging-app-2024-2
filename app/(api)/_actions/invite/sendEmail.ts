'use server';

import FormToJSON from '@utils/form/FormToJSON';
import { generateHMACSignature } from '@utils/invite/hmac';

export default async function sendEmail(prevState: any, formData: FormData) {
  const data = FormToJSON(formData);
  data['exp'] =
    Date.now() +
    1000 * 60 * (parseInt(process.env.INVITE_TIMEOUT as string) ?? 30);
  const data_encoded = btoa(JSON.stringify(data));

  const hmac_sig = generateHMACSignature(data_encoded);
  const hmac_url = `${process.env.BASE_URL}/judges${data.slug}?data=${data_encoded}&sig=${hmac_sig}`;
  return hmac_url;
}
