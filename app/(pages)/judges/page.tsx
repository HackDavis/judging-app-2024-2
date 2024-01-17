'use client';

import { useAuth } from '@hooks/useAuth';

export default function Judges() {
  const { user, loading } = useAuth();
  if (loading) {
    return 'LOADING...';
  }
  return JSON.stringify(user);
}
