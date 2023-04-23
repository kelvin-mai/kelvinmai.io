import { type NextPage } from 'next';

import { api } from '@app/utils/api';
import { Layout } from '@app/components/layout';
import { AboutSection } from '@app/components/about';
import { Hero } from '@app/components/hero';

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <Layout title='Home'>
      <Hero />
      <AboutSection />
    </Layout>
  );
};

export default Home;
