import React from 'react';
import classnames from 'classnames';

import { SEO, SEOProps } from './seo';
import { Header } from './header';
import { Footer } from './footer';

interface Props extends SEOProps {
  fullWidth?: boolean;
  bg?: string;
}

export const Layout: React.FC<Props> = ({
  children,
  title,
  fullWidth = false,
  bg = '',
}) => (
  <>
    <SEO title={title} />
    <Header />
    <div className={bg}>
      <main className={classnames({ container: !fullWidth }, 'min-h-80vh')}>
        {children}
      </main>
    </div>
    <Footer />
  </>
);
