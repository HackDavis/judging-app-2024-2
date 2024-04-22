import Footer from '@components/Footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HackDavis Hacker View',
};

export default function HackerViewLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
