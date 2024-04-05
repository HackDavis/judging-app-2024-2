'use client';

import { useInvite } from '@hooks/useInvite';

export default function InviteOnlyRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending, data } = useInvite();

  if (pending) {
    return 'Loading...';
  }
  if (data === null) {
    return 'Bad Invite Link';
  } else {
    return children;
  }
}
