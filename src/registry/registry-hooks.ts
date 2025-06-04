import type { Registry } from 'shadcn/registry';

export const hooks: Registry['items'] = [
  {
    name: 'use-boolean',
    type: 'registry:hook',
    title: 'use-boolean',
    description:
      'A hook to manage boolean states with common methods to set the value to true, false or toggle between them',
    files: [
      {
        path: 'default/hooks/use-boolean.ts',
        type: 'registry:hook',
      },
    ],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'use-clipboard',
    type: 'registry:hook',
    title: 'use-clipboard',
    description: 'A hook to copy text to clipboard',
    files: [
      {
        path: 'default/hooks/use-clipboard.ts',
        type: 'registry:hook',
      },
    ],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'use-file-upload',
    type: 'registry:hook',
    title: 'use-file-upload',
    description:
      'A flexible and feature-rich React hook for handling file uploads with drag-and-drop support, file validation, and preview generation.',
    files: [
      {
        path: 'default/hooks/use-file-upload.ts',
        type: 'registry:hook',
      },
    ],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'use-mounted',
    type: 'registry:hook',
    title: 'use-mounted',
    description:
      'A hook that returns a boolean to check when the component has mounted',
    files: [
      {
        path: 'default/hooks/use-mounted.ts',
        type: 'registry:hook',
      },
    ],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'use-interval',
    type: 'registry:hook',
    title: 'use-interval',
    description:
      'A hook that executes a callback function at specified delays using the useInterval API',
    files: [
      {
        path: 'default/hooks/use-interval.ts',
        type: 'registry:hook',
      },
    ],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'use-theme',
    type: 'registry:hook',
    title: 'use-theme',
    description:
      "An extension to next-theme's use-theme hook to manage multiple shadcn color theme",
    files: [
      {
        path: 'default/hooks/use-theme.ts',
        type: 'registry:hook',
      },
    ],
    dependencies: ['next-themes'],
    registryDependencies: [],
  },
  {
    name: 'use-timeout',
    type: 'registry:hook',
    title: 'use-interval',
    description:
      'A hook that executes a callback function after a specified delay using the setTimeout API',
    files: [
      {
        path: 'default/hooks/use-interval.ts',
        type: 'registry:hook',
      },
    ],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'use-unmount',
    type: 'registry:hook',
    title: 'use-unmount',
    description:
      'A hook that runs a cleanup function when the component is unmounted',
    files: [
      {
        path: 'default/hooks/use-unmount.ts',
        type: 'registry:hook',
      },
    ],
    dependencies: [],
    registryDependencies: [],
  },
];
