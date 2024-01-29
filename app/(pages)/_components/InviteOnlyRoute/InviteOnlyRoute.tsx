'use client';

import { useInvite } from '@hooks/useInvite';

export default function InviteOnlyRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pending, email] = useInvite();

  if (pending) {
    return 'Loading...';
  }
  if (email === null) {
    return 'Bad Invite Link';
  } else {
    return children;
  }
}
