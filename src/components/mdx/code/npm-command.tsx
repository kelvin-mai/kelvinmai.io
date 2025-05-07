import * as React from 'react';
import { highlight, type HighlightedCode, Pre } from 'codehike/code';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CopyButton } from '@/components/ui/copy-button';

const convertNpmCommand = (pm: 'pnpm' | 'yarn' | 'bun', npmCommand: string) => {
  const conversion = {
    'npm install': {
      pnpm: 'pnpm add',
      yarn: 'yarn add',
      bun: 'bun add',
    },
    'npx create-': {
      pnpm: 'pnpm create ',
      yarn: 'yarn create ',
      bun: 'bunx --bun ',
    },
    'npm create': {
      pnpm: 'pnpm create',
      yarn: 'yarn create',
      bun: 'bun create',
    },
    npx: {
      pnpm: 'pnpm dlx',
      yarn: 'npx',
      bun: 'bunx --bun',
    },
    'npm run': {
      pnpm: 'pnpm',
      yarn: 'yarn',
      bun: 'bun',
    },
  };
  if (npmCommand.startsWith('npm install')) {
    return npmCommand.replace('npm install', conversion['npm install'][pm]);
  }

  if (npmCommand.startsWith('npx create-')) {
    return npmCommand.replace('npm create-', conversion['npx create-'][pm]);
  }

  if (npmCommand.startsWith('npm create')) {
    return npmCommand.replace('npm create', conversion['npm create'][pm]);
  }

  if (npmCommand.startsWith('npm run')) {
    return npmCommand.replace('npm run', conversion['npm run'][pm]);
  }

  if (npmCommand.startsWith('npx')) {
    return npmCommand.replace('npx', conversion.npx[pm]);
  }

  return npmCommand;
};

export const NpmCommand = async ({ value }: { value: string }) => {
  const pms = ['npm', 'pnpm', 'yarn', 'bun'];
  const createCodeblock = (value: string) => ({
    lang: 'bash',
    meta: '',
    value,
  });
  const npmCommands: { [key: string]: HighlightedCode } = {
    npm: await highlight(createCodeblock(value), 'github-dark'),
    pnpm: await highlight(
      createCodeblock(convertNpmCommand('pnpm', value)!),
      'github-dark',
    ),
    yarn: await highlight(
      createCodeblock(convertNpmCommand('yarn', value)!),
      'github-dark',
    ),
    bun: await highlight(
      createCodeblock(convertNpmCommand('bun', value)!),
      'github-dark',
    ),
  };

  return (
    <Tabs
      defaultValue='npm'
      className='relative gap-0 rounded-lg bg-neutral-800'
    >
      <TabsList className='rounded-b-none bg-neutral-800'>
        {pms.map((pm) => (
          <React.Fragment key={pm}>
            <CopyButton
              className='absolute top-2 right-2'
              value={npmCommands[pm]!.value}
            />
            <TabsTrigger
              value={pm}
              className='rounded-none text-neutral-400 data-[state=active]:border-b-neutral-200 data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-200 dark:text-neutral-400 dark:data-[state=active]:border-x-neutral-800 dark:data-[state=active]:border-t-neutral-800 dark:data-[state=active]:border-b-neutral-200 dark:data-[state=active]:bg-neutral-800'
            >
              {pm}
            </TabsTrigger>
          </React.Fragment>
        ))}
      </TabsList>
      {pms.map((pm) => (
        <TabsContent key={pm} value={pm}>
          <Pre
            code={npmCommands[pm]!}
            style={npmCommands[pm]!.style}
            className='rounded-b-lg p-2'
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};
