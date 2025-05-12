'use client';

import * as React from 'react';

import { ColorPicker } from '@/registry/default/ui/color-picker';

export default function ColorPickerDemo() {
  const [color, setColor] = React.useState<string>('#06b6d4');
  return <ColorPicker value={color} onChange={setColor} />;
}
