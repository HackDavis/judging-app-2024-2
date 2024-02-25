import Footer from '@components/Footer/Footer';

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
