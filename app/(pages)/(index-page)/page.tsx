import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HackDavis Judging Portal',
};

export default function Home() {
  return (
    <main>
      <div>
        <h2>hi</h2>
        <br />
        <Link href="/hackers">{'[ Hacker View ]'}</Link>
        <br />
        <Link href="/judges">{'[ Judge View ]'}</Link>
        <br />
      </div>
    </main>
  );
}
