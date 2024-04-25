'use client';
import { AuthProvider } from '../_contexts/AuthContext';

import ProtectedDisplay from '@components/ProtectedDisplay/ProtectedDisplay';
import LoginPage from './_components/LoginPage/LoginPage';

type Props = {
  children: React.ReactNode;
};

export default function JudgesLayout({ children }: Props) {
  return (
    <AuthProvider>
      <ProtectedDisplay
        loadingDisplay={'loading...'}
        failDisplay={<LoginPage />}
      >
        {children}
      </ProtectedDisplay>
    </AuthProvider>
  );
}
