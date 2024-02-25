'use client';

import ProtectedDisplay from '@components/ProtectedDisplay/ProtectedDisplay';
import LoginPage from './_components/LoginPage/LoginPage';

export default function Judges() {
  return (
    <ProtectedDisplay loadingDisplay={'loading...'} failDisplay={<LoginPage />}>
      Judging Page
    </ProtectedDisplay>
  );
}
