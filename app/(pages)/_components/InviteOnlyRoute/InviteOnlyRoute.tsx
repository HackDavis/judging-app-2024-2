'use client';

import { useInvite } from '@hooks/useInvite';
import { useFirstUser } from '@hooks/useFirstUser';

export default function InviteOnlyRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending: pendingInvite, data } = useInvite();
  const { pending: pendingFirst, noUsers } = useFirstUser();

  if (pendingInvite || pendingFirst) {
    return 'Loading...';
  }
  if (!noUsers && data === null) {
    return 'Bad Invite Link';
  } else {
    return children;
  }
}
