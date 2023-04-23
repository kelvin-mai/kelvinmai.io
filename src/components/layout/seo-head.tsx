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
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
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
