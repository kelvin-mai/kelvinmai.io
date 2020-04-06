import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import { BlueScreen } from '../components/blue-screen';

const NotFoundPage = () => (
  <Layout title='404: Not Found'>
    <BlueScreen description="Page Not Found. The route you were trying to reach doesn't exist.">
      <Link to='/'>Click here to go back to the home page.</Link>
    </BlueScreen>
  </Layout>
);

export default NotFoundPage;
