import React from 'react';

export const useIsJSEnabled = () => {
  const [isJsEnabled, setIsJsEnabled] = React.useState(false);
  React.useLayoutEffect(() => {
    setIsJsEnabled(true);
  }, []);

  return isJsEnabled;
};
