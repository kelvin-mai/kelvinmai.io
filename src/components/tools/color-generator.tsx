'use client';

import * as React from 'react';
import { HexColorPicker } from 'react-colorful';
import * as culori from 'culori';

import { ColorSwatch } from './color-swatch';
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../ui';
import {
  type ColorFormat,
  type ColorShades,
  generateShades,
  formatColor,
} from '@/lib/utils/colors';
import { DynamicCode } from '../mdx/code';

type ColorGenatorState = {
  color: string;
  format: ColorFormat;
  name?: string;
  shades?: ColorShades;
};

const cssVariablesFromShades = (shades: ColorShades, format: ColorFormat) => {
  return `:root {
${Object.keys(shades)
  .map(
    (shade) =>
      `  --color-${shade}: ${formatColor(
        shades[shade as unknown as keyof typeof shades],
        format,
        '4',
      )};`,
  )
  .join('\n')}
}`;
};

const tailwindVariablesFromShades = (
  shades: ColorShades,
  format: ColorFormat,
) => {
  return `{
  'color': {
${Object.keys(shades)
  .map(
    (shade) =>
      `    '${shade}': '${formatColor(
        shades[shade as unknown as keyof typeof shades],
        format,
        '4',
      )}',`,
  )
  .join('\n')}
  }
}`;
};

export const ColorGenerator = () => {
  const [mounted, setMounted] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [state, setState] = React.useState<ColorGenatorState>({
    color: '',
    format: 'hex',
  });
  const { color, shades, format } = state;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleUpdate = (value: string) => {
    if (value) {
      const shades = generateShades(value);
      setState({
        ...state,
        color: value,
        shades,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const color = culori.parse(e.target.value);
    if (color) {
      handleUpdate(e.target.value);
    }
  };

  const handleRandomize = () => {
    const color = culori.formatHex(culori.random());
    const shades = generateShades(color);
    setState({
      ...state,
      color,
      shades,
    });
  };

  return (
    <div className='space-y-2 pb-4'>
      <div className='flex gap-2'>
        <div className='grow space-y-1'>
          <Label htmlFor='color-input'>Base Color</Label>
          <Input
            id='color-input'
            placeholder='Please enter a valid color string.'
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className='space-y-1'>
          <Label>Color Format</Label>
          <Select
            value={format}
            onValueChange={(v) =>
              setState({ ...state, format: v as ColorFormat })
            }
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Choose a color format' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='hex'>HEX</SelectItem>
              <SelectItem value='rgb'>RGB</SelectItem>
              <SelectItem value='hsl'>HSL</SelectItem>
              <SelectItem value='oklch'>OKLCH</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='mb-4 flex flex-col gap-2 md:flex-row'>
        {mounted ? (
          <div className='flex flex-col gap-2'>
            <HexColorPicker color={color} onChange={(v) => handleUpdate(v)} />
            <Button onClick={handleRandomize}>Randomize</Button>
          </div>
        ) : (
          <Skeleton className='h-64 w-50' />
        )}
        {shades && Object.keys(shades).length > 0 ? (
          <div className='w-full'>
            <ColorSwatch colors={shades} selected={color} fullHeight />
          </div>
        ) : (
          <div className='bg-card flex w-full flex-col items-center justify-center rounded-lg border shadow-sm'>
            <p className='text-xl'>Preview will be shown here</p>
            <p className='text-muted-foreground text-lg'>
              Please choose a color
            </p>
          </div>
        )}
      </div>
      {shades && Object.keys(shades).length > 0 ? (
        <Tabs defaultValue='css'>
          <TabsList>
            <TabsTrigger value='css'>CSS Variables</TabsTrigger>
            <TabsTrigger value='tailwind'>Tailwind Config</TabsTrigger>
          </TabsList>
          <TabsContent value='css'>
            <DynamicCode
              className='my-0'
              codeblock={{
                lang: 'css',
                meta: '',
                value: cssVariablesFromShades(shades, format),
              }}
            />
          </TabsContent>
          <TabsContent value='tailwind'>
            <DynamicCode
              className='my-0'
              codeblock={{
                lang: 'ts',
                meta: '',
                value: tailwindVariablesFromShades(shades, format),
              }}
            />
          </TabsContent>
        </Tabs>
      ) : (
        <div className='bg-card flex h-50 w-full flex-col items-center justify-center rounded-lg border shadow-sm'>
          <p className='text-xl'>Code will be shown here.</p>
          <p className='text-muted-foreground text-lg'>Please choose a color</p>
        </div>
      )}
    </div>
  );
};
