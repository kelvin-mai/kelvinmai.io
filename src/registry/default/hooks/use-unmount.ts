import * as React from 'react';

export const useUnmount = (f: () => void) => {
  const fRef = React.useRef(f);
  fRef.current = f;
  React.useEffect(
    () => () => {
      fRef.current();
    },
    [],
  );
};
