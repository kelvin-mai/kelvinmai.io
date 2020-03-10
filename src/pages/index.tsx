import React from 'react';

import { SEO } from '../components/seo';
import { Footer } from '../components/footer';

const IndexPage = () => (
  <>
    <main className='h-screen'>
      <SEO title='Home' />
      <h1>Hello World</h1>
    </main>
    <Footer />
  </>
);

export default IndexPage;
