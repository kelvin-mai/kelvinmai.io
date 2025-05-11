import '@/styles/globals.css';

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { fontVariables } from '@/lib/fonts';
import { resume, siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | Kelvin Mai',
    default: 'Kelvin Mai',
  },
  description: resume.basics.summary,
  creator: 'kelvin-mai',
  authors: [{ name: 'kelvin-mai', url: siteConfig.url }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(fontVariables, 'antialiased')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
