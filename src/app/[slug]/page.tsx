import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx';
import type { Metadata } from 'next';

import { source } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { Footer } from '@/components/layout';

const { pages } = source;

const chConfig = { components: { code: 'Code', inlineCode: 'InlineCode' } };
const plug = <T extends unknown[]>(...args: T): T => args;

const mdxOptions = {
  remarkPlugins: [plug(remarkCodeHike, chConfig), remarkGfm],
  rehypePlugins: [rehypeSlug],
  recmaPlugins: [plug(recmaCodeHike, chConfig)],
};

export async function generateStaticParams() {
  return pages.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const page = pages.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function MdxPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const page = pages.getPage(slug);
  if (!page) notFound();

  return (
    <>
      <div className='bg-mesh-gradient-eldritch-v2 fixed -z-10 min-h-screen w-full overflow-hidden' />
      <main className='container mx-auto max-w-3xl px-4 py-16'>
        <h1 className='mb-10 text-4xl font-bold tracking-tight text-white md:text-5xl'>
          {page.data.title}
        </h1>
        <article className='prose prose-invert prose-headings:text-white prose-a:text-cyan-400 prose-a:no-underline prose-a:transition-colors prose-strong:text-white prose-code:text-cyan-300 hover:prose-a:text-cyan-300 max-w-none'>
          <MDXRemote
            source={page.data.body}
            components={getMDXComponents()}
            options={{ mdxOptions, blockJS: false }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
