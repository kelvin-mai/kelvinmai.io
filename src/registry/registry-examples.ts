import type { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
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
  {
    name: 'color-picker-alpha-demo',
    type: 'registry:example',
    registryDependencies: ['https://kelvinmai.io/r/color-picker.json'],
    files: [
      {
        path: 'default/examples/color-picker-alpha-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'color-picker-popover-demo',
    type: 'registry:example',
    registryDependencies: ['https://kelvinmai.io/r/color-picker.json'],
    files: [
      {
        path: 'default/examples/color-picker-popover-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'floating-label-input-demo',
    type: 'registry:example',
    registryDependencies: ['https://kelvinmai.io/r/floating-label-input.json'],
    files: [
      {
        path: 'default/examples/floating-label-input-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
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
    name: 'use-interval-demo',
    type: 'registry:example',
    registryDependencies: ['https://kelvinmai.io/r/use-interval.json'],
    files: [
      {
        path: 'default/examples/use-interval-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'use-theme-demo',
    type: 'registry:example',
    registryDependencies: ['https://kelvinmai.io/r/use-theme.json'],
    files: [
      {
        path: 'default/examples/use-theme-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'use-timeout-demo',
    type: 'registry:example',
    registryDependencies: ['https://kelvinmai.io/r/use-timeout.json'],
    files: [
      {
        path: 'default/examples/use-timeout-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
];
