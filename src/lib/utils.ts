import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

export const renderDates = (start: string, end?: string | null) =>
  `${formatDate(start)} - ${end ? formatDate(end) : 'Present'}`;
