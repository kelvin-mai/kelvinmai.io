import * as React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CopyButton } from '@/components/common/copy-button';
import { Pre } from './code';

type NonNpmManager = 'pnpm' | 'yarn' | 'bun';
type PackageManager = 'npm' | NonNpmManager;
type ConversionCommands =
  | 'npm install'
  | 'npx create-'
  | 'npm create'
  | 'npx'
  | 'npm run';

const convertNpmCommand = (pm: PackageManager, npmCommand: string) => {
  if (pm === 'npm') return npmCommand;

  const conversion: {
    [k in ConversionCommands]: { [pm in NonNpmManager]: string };
  } = {
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
};

export const NpmCommand = async ({ value }: { value: string }) => {
  const pms: PackageManager[] = ['npm', 'pnpm', 'yarn', 'bun'];

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
              value={convertNpmCommand(pm, value) || ''}
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
            codeblock={{
              lang: 'bash',
              meta: '',
              value: convertNpmCommand(pm, value) || '',
            }}
            className='rounded-b-lg p-2'
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};
