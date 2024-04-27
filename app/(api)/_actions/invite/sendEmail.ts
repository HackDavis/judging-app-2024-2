'use server';

import nodemailer from 'nodemailer';
import FormToJSON from '@utils/form/FormToJSON';
import { generateHMACSignature } from '@utils/invite/hmac';
import HttpError from '@utils/response/HttpError';

const senderEmail = process.env.SENDER_EMAIL;
const password = process.env.SENDER_PWD;
const targetEmail = process.env.TARGET_EMAIL;

interface Response {
  ok: boolean;
  body: string | null;
  error: string | null;
}

export default async function sendEmail(
  prevState: any,
  formData: FormData
): Promise<Response> {
  try {
    const data = FormToJSON(formData);
    data['exp'] =
      Date.now() +
      1000 * 60 * (parseInt(process.env.INVITE_TIMEOUT as string) ?? 30);
    const data_encoded = btoa(JSON.stringify(data));

    const hmac_sig = generateHMACSignature(data_encoded);
    const hmac_url = `${process.env.BASE_URL}/judges${data.slug}?data=${data_encoded}&sig=${hmac_sig}`;

    const { name, email } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: password,
      },
    });

    const msg = `
      <div class="mail-container">
        <p>Welcome ${name}</p>
        <p>Your invite link is: ${hmac_url}</p>
      </div>
      <style>
          .mail_container {
              display: flex;
              flex-direction: column;
              gap: 16px;
          }
      </style>
    `;
    const mailOptions = {
      from: `${name} <${senderEmail}>`,
      to: targetEmail,
      subject: `HackDavis Judging App Invite`,
      replyTo: email,
      html: msg,
    };

    const output = await new Promise<Response>((resolve, _) => {
      transporter.sendMail(mailOptions, function (error, _) {
        if (error) {
          resolve({ ok: false, body: null, error: error.message });
        } else {
          resolve({ ok: true, body: hmac_url, error: null });
        }
      });
    });
    return output;
  } catch (e) {
    const error = e as HttpError;
    return {
      ok: false,
      body: null,
      error: error.message,
    };
  }
}
