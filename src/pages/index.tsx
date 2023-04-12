import { type NextPage } from 'next';

import { api } from '@app/utils/api';
import { Layout } from '@app/components/layout';
import { Experience } from '@app/components/resume';
import { SocialLinks } from '@app/components/common';

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <Layout title='home'>
      <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#566590] to-[#0e0d12]'>
        <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
          <h1 className='text-5xl font-bold tracking-tight text-white sm:text-[5rem]'>
            Kelvin Mai
          </h1>
          <div className='mx-auto w-2/3 rounded-lg bg-white pb-2 shadow'>
            <h3 className='text-center text-xl font-bold uppercase text-dracula-black'>
              Follow or Support Me
            </h3>
            <SocialLinks className='flex justify-around' />
          </div>
          <Experience />
          <p className='text-2xl text-white'>
            {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
