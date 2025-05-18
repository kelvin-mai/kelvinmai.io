import * as React from 'react';

import { OverflowTooltip } from '@/registry/default/ui/overflow-tooltip';

export default function OverflowTooltipDemo() {
  return (
    <div className='bg-card w-32 rounded-lg border p-4 whitespace-nowrap'>
      <OverflowTooltip>
        The text in here is just a little too long
      </OverflowTooltip>
    </div>
  );
}
