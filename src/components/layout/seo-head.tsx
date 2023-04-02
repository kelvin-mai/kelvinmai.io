import Head from 'next/head';

export interface SEOHeadProps {
  title: string;
  description?: string;
}

const metadata = {
  siteUrl: 'https://www.kelvinmai.io',
  author: 'Kelvin Mai',
  title: 'Kelvin Mai',
  description:
    'Kelvin Mai is a self taught full stack developer, aspiring functional programming polyglot, content creator and full time nerd.',
  keywords: ['Software Engineer', 'Web Developer', 'Consultant', 'Freelancer'],
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = metadata.description,
}) => {
  return (
    <Head>
      <title>{`${title} | ${metadata.title}`}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={metadata.title} />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:author' content={metadata.author} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
    </Head>
  );
};
