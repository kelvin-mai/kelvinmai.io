import * as culori from 'culori';
import type { Hsl } from 'culori';

type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';

const formatNumber = (num?: number) => {
  if (!num) return '0';
  return num % 1 === 0 ? num : num.toFixed(2);
};

const formatHsl = (hsl: Hsl, tailwindVersion: '3' | '4' = '4') => {
  if (tailwindVersion === '4') {
    return `hsl(${formatNumber(hsl.h)} ${formatNumber(hsl.s * 100)}% ${formatNumber(hsl.l * 100)}%)`;
  }
  return `${formatNumber(hsl.h)} ${formatNumber(hsl.s * 100)}% ${formatNumber(hsl.l * 100)}%`;
};

export const formatColor = (
  value: string,
  format: ColorFormat = 'hsl',
  tailwindVersion: '3' | '4' = '4',
): string => {
  try {
    const color = culori.parse(value);
    if (!color) throw new Error('Invalid color input');
    switch (format) {
      case 'hsl': {
        const hsl = culori.converter('hsl')(color);
        return formatHsl(hsl, tailwindVersion);
      }
      case 'rgb':
        return culori.formatRgb(color);
      case 'oklch': {
        const oklch = culori.converter('oklch')(color);
        return `oklch(${formatNumber(oklch.l)} ${formatNumber(oklch.c)} ${formatNumber(oklch.h)})`;
      }
      case 'hex':
        return culori.formatHex(color);
      default:
        return value;
    }
  } catch (error) {
    console.error(`Failed to convert color: ${value}`, error);
    return value;
  }
};

export const convertToHsl = (value: string): string =>
  formatColor(value, 'hsl');
