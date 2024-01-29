'use client';

import { useSearchParams } from 'next/navigation';

import verifyInvite from '@actions/invite/verifyInvite';
import { useState, useEffect } from 'react';

export function useInvite() {
  const searchParams = useSearchParams();

  const [pending, setPending] = useState(true);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = searchParams.get('email');
    const sig = searchParams.get('sig');

    const verifyInviteWrapper = async () => {
      const verified = await verifyInvite(email as string, sig as string);
      if (verified) {
        setEmail(email);
      }
      setPending(false);
    };

    verifyInviteWrapper();
  }, [searchParams]);
  return [pending, email];
}
