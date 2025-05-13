import * as React from 'react';

import { ExternalLink } from 'lucide-react';
import { ExternalLink as Link } from '@/components/common';
import { badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ReferenceLink = {
  href: string;
  label: string;
};

type ReferenceLinksProps = {
  links: ReferenceLink[];
};

export const ReferenceLinks: React.FC<ReferenceLinksProps> = ({ links }) => {
  return (
    <div className='flex items-center space-x-2 py-4'>
      {links.map((l) => (
        <Link
          key={l.href}
          className={cn(
            badgeVariants({ variant: 'secondary' }),
            'inline-flex items-center gap-1 font-semibold',
          )}
          href={l.href}
        >
          {l.label}
          <ExternalLink className='size-3' />
        </Link>
      ))}
    </div>
  );
};
