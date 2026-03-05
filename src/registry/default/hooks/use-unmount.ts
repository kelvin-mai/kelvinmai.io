import * as React from 'react';

export const useUnmount = (f: () => void) => {
  const onUnmount = React.useEffectEvent(f);
  React.useEffect(
    () => () => {
      onUnmount();
    },
    [],
  );
};
