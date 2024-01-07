import '@globals/globals.scss';
import fonts from 'app/(pages)/_globals/fonts';
import metadata from '@globals/metadata.json';

import { navLinks } from 'app/(pages)/_data/navLinks';
import Navbar from 'app/(pages)/_components/Navbar/Navbar';
import Footer from './_components/Footer/Footer';

export { metadata };

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Navbar navLinks={navLinks} />
        {children}
        <Footer navLinks={navLinks} />
      </body>
    </html>
  );
}
