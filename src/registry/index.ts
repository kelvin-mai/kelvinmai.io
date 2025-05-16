import { type Registry } from 'shadcn/registry';

import { ui } from './registry-ui';
import { hooks } from './registry-hooks';
import { examples } from './registry-examples';

export const registry = {
  name: 'kelvinmai.io',
  homepage: 'https://kelvinmai.io',
  items: [...ui, ...hooks, ...examples],
} satisfies Registry;
