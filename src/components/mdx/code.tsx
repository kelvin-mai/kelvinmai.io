import {
  highlight,
  type HighlightedCode,
  Inline,
  Pre,
  type RawCode,
} from 'codehike/code';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CopyButton } from '@/components/ui/copy-button';

type CodeProps = { codeblock: RawCode };

export const InlineCode: React.FC<CodeProps> = async ({ codeblock }) => {
  const highlighted = await highlight(codeblock, 'github-dark');
  return <Inline code={highlighted} style={highlighted.style} />;
};

export const Code: React.FC<CodeProps> = async ({ codeblock }) => {
  const highlighted = await highlight(codeblock, 'github-dark');
  return (
    <div className='relative'>
      <CopyButton className='absolute top-1 right-2' value={highlighted.code} />
      <Pre
        className='rounded-xl p-2'
        code={highlighted}
        style={highlighted.style}
      />
    </div>
  );
};

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
    <Tabs defaultValue='npm' className='gap-0 rounded-xl bg-zinc-800'>
      <TabsList>
        {pms.map((pm) => (
          <TabsTrigger key={pm} value={pm}>
            {pm}
          </TabsTrigger>
        ))}
      </TabsList>
      {pms.map((pm) => (
        <TabsContent key={pm} value={pm} className='relative'>
          <CopyButton
            className='absolute top-1 right-2'
            value={npmCommands[pm]!.value}
          />
          <Pre
            code={npmCommands[pm]!}
            style={npmCommands[pm]!.style}
            className='rounded-b-xl p-2'
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};
