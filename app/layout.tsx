import './globals.css';
import type { Metadata } from 'next';

import { Footer } from '@app/components';
import { fontsClassName } from '@app/constants/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Kelvin Mai',
    default: 'Kelvin Mai',
  },
  description:
    'Kelvin Mai is a self taught full stack developer, aspiring functional programming polyglot, content creator and full time nerd.',
};

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${fontsClassName} font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
