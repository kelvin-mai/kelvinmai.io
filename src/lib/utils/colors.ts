import * as culori from 'culori';
import type { Hsl } from 'culori';

export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';
type TailwindVersion = '3' | '4';
export type ColorShades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

const SHADE_VALUES = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

const LIGHTNESS_TARGETS = {
  50: 0.98, // Almost white
  100: 0.94,
  200: 0.88,
  300: 0.82,
  400: 0.76,
  500: 0.65, // Medium lightness
  600: 0.55,
  700: 0.45,
  800: 0.35,
  900: 0.25,
  950: 0.15, // Very dark
};

const formatNumber = (num?: number) => {
  if (!num) return '0';
  return num % 1 === 0 ? num : num.toFixed(2);
};

const formatHsl = (hsl: Hsl, tailwindVersion: TailwindVersion = '4') => {
  if (tailwindVersion === '4') {
    return `hsl(${formatNumber(hsl.h)} ${formatNumber(
      hsl.s * 100,
    )}% ${formatNumber(hsl.l * 100)}%)`;
  }
  return `${formatNumber(hsl.h)} ${formatNumber(hsl.s * 100)}% ${formatNumber(
    hsl.l * 100,
  )}%`;
};

export const formatColor = (
  value: string,
  format: ColorFormat = 'hsl',
  tailwindVersion: TailwindVersion = '4',
) => {
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
        return `oklch(${formatNumber(oklch.l)} ${formatNumber(
          oklch.c,
        )} ${formatNumber(oklch.h)})`;
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

const findClosestShade = (lightness: number) => {
  return Object.entries(LIGHTNESS_TARGETS)
    .map(([shade, target]) => [shade, Math.abs(lightness - target)])
    .reduce(
      (closest, current) =>
        (current[1] as number) < (closest[1] as number) ? current : closest,
      [500, Number.MAX_VALUE],
    );
};

export const generateShades = (value: string) => {
  const parsed = culori.parse(value);
  const oklch = culori.oklch(parsed);
  if (!oklch) {
    throw new Error('Could not convert color');
  }
  const detected = findClosestShade(oklch.l);
  return SHADE_VALUES.reduce((acc, shade) => {
    if (shade === Number(detected[0])) {
      return {
        ...acc,
        [shade]: culori.formatHex(parsed),
      };
    } else {
      const clamped = culori.clampChroma(
        {
          mode: 'oklch',
          l: LIGHTNESS_TARGETS[shade as keyof typeof LIGHTNESS_TARGETS],
          c: oklch.c * (shade <= 100 ? 0.7 : 0.9),
          h: oklch.h,
        },
        'oklch',
      );
      return {
        ...acc,
        [shade]: culori.formatHex(clamped),
      };
    }
  }, {}) as ColorShades;
};
