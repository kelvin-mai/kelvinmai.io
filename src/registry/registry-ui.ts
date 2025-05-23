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
    dependencies: ['react-colorful'],
    registryDependencies: ['input'],
  },
  {
    name: 'floating-label-input',
    type: 'registry:component',
    title: 'Floating Label Input',
    description: 'Material UI floating label input',
    files: [
      {
        path: 'default/ui/floating-label-input.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['@radix-ui/react-label'],
    registryDependencies: ['input'],
  },
  {
    name: 'image-cropper',
    type: 'registry:component',
    title: 'Image Cropper',
    description: '',
    files: [
      {
        path: 'default/ui/image-cropper.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['@origin-space/image-cropper'],
    registryDependencies: [],
  },
  {
    name: 'overflow-tooltip',
    type: 'registry:component',
    title: 'Overflow Tooltip',
    description: '',
    files: [
      {
        path: 'default/ui/overflow-tooltip.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: [],
    registryDependencies: ['tooltip'],
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
