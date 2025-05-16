'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import {
  useTheme,
  colorThemes,
  type ColorTheme,
} from '@/registry/default/hooks/use-theme';
import { ThemeSwitch } from '@/registry/default/ui/theme-switch';

export default function UseThemeDemo() {
  const { colorTheme, setColorTheme } = useTheme();
  return (
    <div className='bg-card text-card-foreground space-y-2 rounded-lg border p-4 shadow-sm'>
      <div className='flex items-center justify-center'>
        <ThemeSwitch />
      </div>
      <div className='flex flex-col gap-2'>
        <Select
          value={colorTheme}
          onValueChange={(v: ColorTheme) => setColorTheme(v)}
        >
          <SelectTrigger className='capitalize'>
            <SelectValue placeholder='Choose a theme' />
          </SelectTrigger>
          <SelectContent>
            {colorThemes.map((theme) => (
              <SelectItem key={theme} className='capitalize' value={theme}>
                {theme}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
