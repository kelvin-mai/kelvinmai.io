'use client';

import * as React from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
  const ref = React.useRef(callback);
  React.useEffect(() => {
    ref.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay === null || typeof delay !== 'number') {
      return;
    }
    const tick = () => ref.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
