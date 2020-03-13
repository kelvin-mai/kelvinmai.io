import React from 'react';
import classnames from 'classnames';

import { SEO, SEOProps } from './seo';
import { Header } from './header';
import { Footer } from './footer';

interface Props extends SEOProps {
  fullWidth?: boolean;
}

export const Layout: React.FC<Props> = ({
  children,
  title,
  fullWidth = false,
}) => (
  <>
    <SEO title={title} />
    <Header />
    <main className={classnames({ container: !fullWidth }, 'min-h-80vh')}>
      {children}
    </main>
    <Footer />
  </>
);
