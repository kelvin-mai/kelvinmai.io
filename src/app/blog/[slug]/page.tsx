import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { source } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { Footer } from '@/components/layout';
import { SITE_URL } from '@/lib/constants';
import { Badge } from '@/components/ui';
import { TableOfContents } from '@/components/docs/table-of-contents';
import { mdxOptions } from '@/lib/mdx';

const { blogs } = source;

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
          url: `${SITE_URL}/api/og?title=${post.data.title}&description=${post.data.description}${post.data.image ? `&image=${post.data.image}` : ''}`,
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
      <div className='bg-mesh-gradient-eldritch-v2 fixed -z-10 min-h-screen w-full overflow-hidden' />
      <main className='container mx-auto max-w-5xl px-4 py-16'>
        <Link
          href='/blog'
          className='mb-10 inline-block text-sm text-white/40 transition-colors hover:text-cyan-400'
        >
          ← All posts
        </Link>

        <div className='lg:grid lg:grid-cols-[1fr_200px] lg:gap-12'>
          <div className='min-w-0'>
            <div className='mb-3 flex items-center gap-2 text-sm text-cyan-400'>
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

            <h1 className='mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl'>
              {post.data.title}
            </h1>

            {post.data.description && (
              <p className='mb-6 text-lg text-white/60'>
                {post.data.description}
              </p>
            )}

            {post.data.tags && post.data.tags.length > 0 && (
              <div className='mb-8 flex flex-wrap gap-2'>
                {post.data.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className='bg-neutral-800 font-semibold text-neutral-200 hover:bg-neutral-700 hover:text-neutral-50'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {post.data.image && (
              <div className='relative mb-10 overflow-hidden rounded-xl'>
                <div className='relative aspect-[21/9]'>
                  <Image
                    src={post.data.image}
                    alt={post.data.title}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 768px'
                    priority
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-[#212337]/70 to-transparent' />
              </div>
            )}

            <article className='prose prose-invert prose-headings:text-white prose-a:text-cyan-400 prose-a:no-underline prose-a:transition-colors prose-strong:text-white prose-code:text-cyan-300 hover:prose-a:text-cyan-300 max-w-none'>
              <MDXRemote
                source={post.data.body}
                components={getMDXComponents()}
                options={{ mdxOptions, blockJS: false }}
              />
            </article>
          </div>

          {post.data.toc.length > 0 && (
            <TableOfContents
              items={post.data.toc}
              headingClassName='text-cyan-400'
              thumbClassName='bg-cyan-400'
              activeClassName='data-[active=true]:text-cyan-400'
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
