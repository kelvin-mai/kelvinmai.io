import type { Registry } from 'shadcn/registry';

export const hooks: Registry['items'] = [
  {
    name: 'use-theme',
    type: 'registry:hook',
    title: 'use-theme',
    description: '',
    files: [
      {
        path: 'default/hooks/use-theme.tsx',
        type: 'registry:hook',
      },
    ],
    dependencies: ['next-themes'],
    registryDependencies: [],
  },
];
