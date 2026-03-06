import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

import { source } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { Footer } from '@/components/layout';
import { SITE_URL } from '@/lib/constants';

const { blogs } = source;

const chConfig = { components: { code: 'Code', inlineCode: 'InlineCode' } };
const plug = <T extends unknown[]>(...args: T): T => args;

const mdxOptions = {
  remarkPlugins: [plug(remarkCodeHike, chConfig), remarkGfm],
  rehypePlugins: [rehypeSlug],
  recmaPlugins: [plug(recmaCodeHike, chConfig)],
};

export async function generateStaticParams() {
  return blogs.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogs.getPost(slug);
  if (!post) notFound();

  return {
    title: post.data.title,
    description: post.data.description,
    ...(post.data.canonicalUrl && {
      alternates: { canonical: post.data.canonicalUrl },
    }),
    openGraph: {
      type: 'article',
      title: post.data.title,
      description: post.data.description,
      publishedTime: post.data.date.toISOString(),
      tags: post.data.tags,
      images: [
        {
          url: `${SITE_URL}/api/og?title=${post.data.title}&description=${post.data.description}`,
          height: 1200,
          width: 630,
          alt: `Preview image for ${post.data.title}`,
        },
      ],
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = blogs.getPost(slug);
  if (!post) notFound();

  return (
    <>
      <main className='container mx-auto max-w-3xl px-4 py-16'>
        <Link
          href='/blog'
          className='text-muted-foreground hover:text-foreground mb-8 flex items-center gap-1 text-sm transition-colors'
        >
          <ArrowLeft className='size-4' />
          All posts
        </Link>
        <div className='text-muted-foreground mb-3 flex items-center gap-2 text-sm'>
          <span>
            {post.data.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span>·</span>
          <span>{post.data.readTime} min read</span>
        </div>
        <h1 className='mb-4 text-4xl font-bold tracking-tight'>
          {post.data.title}
        </h1>
        {post.data.description && (
          <p className='text-muted-foreground mb-6 text-lg'>
            {post.data.description}
          </p>
        )}
        {post.data.tags && post.data.tags.length > 0 && (
          <div className='mb-8 flex flex-wrap gap-2'>
            {post.data.tags.map((tag) => (
              <span
                key={tag}
                className='bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs'
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {post.data.image && (
          <div className='relative mb-10 aspect-[21/9] w-full overflow-hidden rounded-lg'>
            <Image
              src={post.data.image}
              alt={post.data.title}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 768px'
              priority
            />
          </div>
        )}
        <article className='prose prose-neutral dark:prose-invert max-w-none'>
          <MDXRemote
            source={post.data.body}
            components={getMDXComponents()}
            options={{ mdxOptions, blockJS: false }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
