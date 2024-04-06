'use client';
import { useAuth } from '@hooks/useAuth';

export default function ProtectedDisplay({
  loadingDisplay,
  failDisplay,
  children,
}: {
  loadingDisplay: React.ReactNode;
  failDisplay: React.ReactNode;
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  if (loading) {
    return loadingDisplay;
  }
  if (user === null) {
    return failDisplay;
  } else {
    return children;
  }
}
