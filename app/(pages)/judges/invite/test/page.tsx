'use client';

import InviteOnlyRoute from '@components/InviteOnlyRoute/InviteOnlyRoute';
import { useInvite } from '@hooks/useInvite';

export default function Test() {
  const [pending, email] = useInvite();
  return (
    <InviteOnlyRoute>hello there {pending ? '...' : email}</InviteOnlyRoute>
  );
}
