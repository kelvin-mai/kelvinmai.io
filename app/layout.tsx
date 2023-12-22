import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { ubuntu, ubuntuMono } from '@app/constants/fonts';
import { Providers } from '@app/components/providers';
import { cn } from '@app/lib/utils';

export const metadata: Metadata = {
  title: {
    template: '%s | Kelvin Mai',
    default: 'Kelvin Mai',
  },
  description:
    'Kelvin Mai is a self taught full stack developer, aspiring functional programming polyglot, content creator and full time nerd.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(ubuntu.variable, ubuntuMono.variable, 'font-sans')}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
