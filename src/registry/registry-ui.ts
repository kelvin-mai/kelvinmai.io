import type { Registry } from 'shadcn/registry';

export const ui: Registry['items'] = [
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
