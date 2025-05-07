import * as React from 'react';

import { ExternalLink } from 'lucide-react';
import { ExternalLink as Link } from '@/components/ui/external-link';
import { badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ReferenceLink = {
  href: string;
  label: string;
};

type ReferencesProps = {
  links: ReferenceLink[];
};

export const References: React.FC<ReferencesProps> = ({ links }) => {
  return (
    <div className='flex items-center space-x-2 pt-4'>
      {links.map((l) => (
        <Link
          key={l.href}
          className={cn(
            badgeVariants({ variant: 'secondary' }),
            'gap-1 font-semibold no-underline',
          )}
          href={l.href}
        >
          {l.label}
          <ExternalLink className='h-3 w-3' />
        </Link>
      ))}
    </div>
  );
};
