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

// temp
const discordDark = {
  background: '217.5 9.09% 17.25%',
  foreground: '334 34% 98%',
  muted: '210 9.09% 12.94%',
  muted_foreground: '334 0% 60.77%',
  popover: '210 9.09% 12.94%',
  popover_foreground: '334 34% 98%',
  card: '210 9.09% 12.94%',
  card_foreground: '334 34% 98%',
  border: '334 0% 18.46%',
  input: '214.29 5.04% 27.25%',
  primary: '226.73 58.43% 65.1%',
  primary_foreground: '0 0% 100%',
  secondary: '214.29 5.04% 27.25%',
  secondary_foreground: '334 0% 100%',
  accent: '217.5 9.09% 17.25%',
  accent_foreground: '226.73 58.43% 65.1%',
  destructive: '0 86.89% 48.16%',
  destructive_foreground: '0 0% 0%',
  ring: '217.5 9.09% 17.25%',
  chart_1: '226.73 58.43% 65.1%',
  chart_2: '214.29 5.04% 27.25%',
  chart_3: '217.5 9.09% 17.25%',
  chart_4: '214.29 5.04% 30.25%',
  chart_5: '226.73 61.43% 65.1%',
};

console.log(
  Object.keys(discordDark)
    .map((k) => [
      k,
      formatColor(`hsl(${discordDark[k].split(' ').join(', ')})`, 'oklch'),
    ])
    .reduce(
      (acc, curr) => acc + `\n--${curr[0]?.replace('_', '-')}: ${curr[1]};`,
      '',
    ),
);
