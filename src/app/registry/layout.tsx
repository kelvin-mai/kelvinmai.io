import { BuyMeCofffeeBanner } from '@/components/common';
import { Footer } from '@/components/layout';

export default function RegistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='container pb-4'>
        {children}
        <BuyMeCofffeeBanner />
      </main>
      <Footer />
    </>
  );
}
