import type { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'theme-switch-demo',
    type: 'registry:example',
    registryDependencies: ['https://kelvinmai.io/r/theme-switch.json'],
    files: [
      {
        path: 'default/examples/theme-switch-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
];
