import { Metadata } from 'next';
import { AuthProvider } from '../_contexts/AuthContext';

export const metadata: Metadata = {
  title: 'HackDavis Judge View',
};

export default function JudgesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
