'use client';

import * as React from 'react';

type CopyFn = (text: string) => Promise<boolean>;

export const useClipboard = (delay = 2000): [CopyFn, boolean] => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = setTimeout(() => {
      setCopied(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [copied, delay]);

  const copy = React.useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      return false;
    }
  }, []);

  return [copy, copied];
};
