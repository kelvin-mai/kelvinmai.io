import { highlight, Inline, Pre, type RawCode } from 'codehike/code';

type CodeProps = { codeblock: RawCode };

export const InlineCode: React.FC<CodeProps> = async ({ codeblock }) => {
  const highlighted = await highlight(codeblock, 'github-dark');
  return <Inline code={highlighted} style={highlighted.style} />;
};

export const Code: React.FC<CodeProps> = async ({ codeblock }) => {
  const highlighted = await highlight(codeblock, 'github-dark');
  return <Pre code={highlighted} style={highlighted.style} />;
};
