import type { MDXComponents } from 'mdx/types';

import { Heading } from './heading';
import { Steps, Step } from './steps';
import { ExternalLink } from '../common';

export const getMDXComponents = (components?: MDXComponents): MDXComponents => {
  return {
    h1: (props) => <Heading as='h1' {...props} />,
    h2: (props) => <Heading as='h2' {...props} />,
    h3: (props) => <Heading as='h3' {...props} />,
    h4: (props) => <Heading as='h4' {...props} />,
    h5: (props) => <Heading as='h5' {...props} />,
    h6: (props) => <Heading as='h6' {...props} />,
    p: (props) => (
      <p className='leading-6 [&:not(:first-child)]:mt-6' {...props} />
    ),
    blockquote: (props) => (
      <blockquote className='mt-6 border-l-2 pl-6 italic' {...props} />
    ),
    ul: (props) => (
      <ul className='my-6 ml-6 list-disc [&>li]:mt-2' {...props} />
    ),
    ol: (props) => (
      <ol className='my-6 ml-6 list-decimal [&>li]:mt-2' {...props} />
    ),
    a: (props) => (
      <ExternalLink className='underline underline-offset-4' {...props} />
    ),
    Steps,
    Step,
    ...components,
  };
};
