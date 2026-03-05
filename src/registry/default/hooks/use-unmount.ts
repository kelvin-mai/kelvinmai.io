import * as React from 'react';

export const useUnmount = (f: () => void) => {
  const fRef = React.useRef(f);
  React.useLayoutEffect(() => {
    fRef.current = f;
  });
  React.useEffect(
    () => () => {
      fRef.current();
    },
    [],
  );
};
