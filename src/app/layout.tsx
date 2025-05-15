import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/globals.css';
import { RootProvider } from '@/providers';
import { fontVariables } from '@/lib/fonts';
import { resume, SITE_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | Kelvin Mai',
    default: 'Kelvin Mai',
  },
  description: resume.basics.summary,
  creator: 'kelvin-mai',
  authors: [{ name: 'kelvin-mai', url: SITE_URL }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(fontVariables, 'antialiased')}>
        <RootProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </RootProvider>
      </body>
    </html>
  );
}
