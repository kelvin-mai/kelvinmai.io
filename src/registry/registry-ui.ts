import type { Registry } from 'shadcn/registry';

export const ui: Registry['items'] = [
  {
    name: 'color-picker',
    type: 'registry:component',
    title: 'Color Picker',
    description: 'A color picker component',
    files: [
      {
        path: 'default/ui/color-picker.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['react-colorful', 'lucide-react'],
    registryDependencies: ['button', 'input', 'popover', 'tabs'],
  },
  {
    name: 'theme-switch',
    type: 'registry:component',
    title: 'Theme Switch',
    description: 'Animated theme switch',
    files: [
      {
        path: 'default/ui/theme-switch.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['next-themes', 'lucide-react', 'motion'],
    registryDependencies: [],
  },
];
