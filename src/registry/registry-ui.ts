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
    description: 'An image cropper built on top of @origin-space/image-cropper',
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
    description: 'A tooltip that only shows when text is too long',
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
    name: 'pagination',
    type: 'registry:component',
    title: 'Pagination',
    description: 'A pre composed pagination component',
    files: [
      {
        path: 'default/ui/pagination.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dropdown-menu'],
  },
  {
    name: 'password-input',
    type: 'registry:component',
    title: 'Password Input',
    description: 'Password input with toggle password and text type',
    files: [
      {
        path: 'default/ui/password-input.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['lucide-react'],
    registryDependencies: ['input', 'https://kelvinmai.io/r/use-boolean.json'],
  },
  {
    name: 'password-strength-meter',
    type: 'registry:component',
    title: 'Password Strength Meter',
    description: 'Component to measure password strength',
    files: [
      {
        path: 'default/ui/password-strength-meter.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['lucide-react'],
    registryDependencies: [],
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
