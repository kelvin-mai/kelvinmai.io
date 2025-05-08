import {
  Geist,
  Geist_Mono,
  Ubuntu,
  Ubuntu_Mono,
  Space_Grotesk,
} from 'next/font/google';
import { cn } from './utils';

export const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubunut-mono',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const geistmono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const fontVariables = cn(
  ubuntu.variable,
  ubuntuMono.variable,
  spaceGrotesk.variable,
  geist.variable,
);
