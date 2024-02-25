'use client';

import ProtectedDisplay from '@components/ProtectedDisplay/ProtectedDisplay';
import LoginPage from './_components/LoginPage/LoginPage';
import JudgingHub from './_components/JudgingHub/JudgingHub';

export default function Judges() {
  return (
    <ProtectedDisplay loadingDisplay={'loading...'} failDisplay={<LoginPage />}>
      <JudgingHub />
    </ProtectedDisplay>
  );
}
