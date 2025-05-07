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
  {
    name: 'color-picker-demo',
    type: 'registry:example',
    registryDependencies: ['https://kelvinmai.io/r/color-picker.json'],
    files: [
      {
        path: 'default/examples/color-picker-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
];
