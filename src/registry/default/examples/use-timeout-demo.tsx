'use client';

import React from 'react';
import { Loader2, RefreshCwIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTimeout } from '@/registry/default/hooks/use-timeout';

export default function UseTimeoutDemo() {
  const [loading, setLoading] = React.useState(true);

  useTimeout(
    () => {
      setLoading(false);
    },
    !loading ? null : 2000,
  );

  return (
    <div className='flex flex-col items-center gap-8'>
      <Button onClick={() => setLoading(true)} disabled={loading}>
        {loading ? (
          <>
            <Loader2 className='animate-spin' />
            Loading...
          </>
        ) : (
          <>
            <RefreshCwIcon />
            Reload
          </>
        )}
      </Button>
    </div>
  );
}
