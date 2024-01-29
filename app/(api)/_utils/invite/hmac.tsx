import crypto from 'crypto';

export function verifyHMACSignature(email: string, signature: string) {
  try {
    const data = email;
    const recreatedSignature = generateHMACSignature(data);
    return crypto.timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(recreatedSignature as string, 'hex')
    );
  } catch {
    return false;
  }
}

export function generateHMACSignature(email: string) {
  try {
    const hmac = crypto.createHmac(
      'sha256',
      process.env.HMAC_INVITE_SECRET as string
    );
    hmac.update(email);
    return hmac.digest('hex');
  } catch {
    return null;
  }
}
