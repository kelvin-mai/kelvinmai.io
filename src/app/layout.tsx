import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import { ubuntu, ubuntuMono } from '@/lib/fonts';
import { resume } from '@/lib/constants';

export const metadata: Metadata = {
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
    <html lang='en'>
      <body className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
