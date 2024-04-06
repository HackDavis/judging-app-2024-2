'use client';
import { useAuth } from '@hooks/useAuth';

export default function AdminProtected({
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
  if (user === null || user?.role !== 'admin') {
    return failDisplay;
  } else {
    return children;
  }
}
