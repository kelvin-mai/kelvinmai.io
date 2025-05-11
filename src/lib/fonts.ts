import {
  Geist,
  Geist_Mono,
  Ubuntu,
  Ubuntu_Mono,
  Space_Grotesk,
} from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from './utils';

const zxProto = localFont({
  src: [
    {
      path: '../../public/fonts/0xProto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/0xProto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/0xProto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-0xproto',
});

export const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu-mono',
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
  geist.variable,
  ubuntu.variable,
  ubuntuMono.variable,
  spaceGrotesk.variable,
  zxProto.variable,
);
