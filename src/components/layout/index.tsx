import React from 'react';

import { SEO, SEOProps } from './seo';
import { Header } from './header';
import { Footer } from './footer';

interface Props extends SEOProps {
  bg?: string;
}

export const Layout: React.FC<Props> = ({ children, title, bg = '' }) => (
  <>
    <SEO title={title} />
    <Header />
    <div className={bg}>
      <main className='min-h-80vh pt-16 md:pt-0'>{children}</main>
    </div>
    <Footer />
  </>
);

export { PageHeader } from './page-header';
export { Section } from './section';
export default Layout;
