import { Geist, Ubuntu, Ubuntu_Mono, Space_Grotesk } from 'next/font/google';

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
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const geist = Geist({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-geist',
});
