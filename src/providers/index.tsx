import * as React from 'react';
import { NextProvider } from 'fumadocs-core/framework/next';

export const RootProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <NextProvider>{children}</NextProvider>;
};
