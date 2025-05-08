import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ubuntu, ubuntuMono } from '@/lib/fonts';
import { resume } from '@/lib/constants';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://kelvinmai.io',
    process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | Kelvin Mai',
    default: 'Kelvin Mai',
  },
  description: resume.basics.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
