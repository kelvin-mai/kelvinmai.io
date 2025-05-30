import { promises as fs } from 'node:fs';
import path from 'node:path';
import { rimraf } from 'rimraf';
import { type Registry, registrySchema } from 'shadcn/registry';

import { registry } from '../registry';

const REGISTRY_PATH = path.join(process.cwd(), 'src/__registry__');
const REGISTRY_FILENAME = 'registry.autogenerated.json';

const parseContent = (content: string) =>
  content
    .replace('registry/default/', '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/"/g, '\\"')
    .replace(/\${/g, '\\${')
    .replace(/\n/g, '\\n')
    .trim();

export const buildRegistry = async (registry: Registry) => {
  let index = `/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.

import React from "react";

export const Index: Record<string, any> = {`;
  for (const item of registry.items) {
    console.log(`Adding ${item.name} to registry...`);
    if (!Array.isArray(item.files) || !item.files?.length) {
      continue;
    }

    const componentPath = `@/registry/${item.files[0].path}`;
    const sourcePath = path.join(
      process.cwd(),
      'src/registry',
      item.files[0].path,
    );

    index += `
  "${item.name}": {
    name: "${item.name}",
    description: "${item.description ?? ''}",
    type: "${item.type}",
    files: [${await Promise.all(
      item.files.map(async (file) => {
        const filePath = `src/registry/${file.path}`;
        return `{
      path: "${filePath}",
      content: "${parseContent(
        await fs.readFile(path.join(process.cwd(), filePath), 'utf-8'),
      )}",
      type: "${file.type}",
    }`;
      }),
    )}],${
      item.type === 'registry:example'
        ? `
    component: React.lazy(() => import("${componentPath}")),
    source: "${parseContent(await fs.readFile(sourcePath, 'utf-8'))}",`
        : ''
    }
  },`;
  }

  index += `
}`;

  // Build /src/__registry__/registry.autogenerated.json
  const registryJSON = JSON.stringify(
    {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      name: registry.name,
      homepage: registry.homepage,
      items: registry.items
        .filter((item) => item.type !== 'registry:example')
        .map((item) => {
          return {
            ...item,
            files:
              item.files?.map((file) => {
                if (file.path.startsWith('src/')) {
                  return file;
                }

                return {
                  ...file,
                  path: `src/registry/${file.path}`,
                };
              }) ?? [],
          };
        }),
    },
    null,
    2,
  );

  rimraf.sync(path.join(REGISTRY_PATH, REGISTRY_FILENAME));
  await fs.writeFile(
    path.join(REGISTRY_PATH, REGISTRY_FILENAME),
    registryJSON,
    'utf8',
  );

  // Build /src/__registry__/index.tsx
  rimraf.sync(path.join(REGISTRY_PATH, 'index.tsx'));
  await fs.writeFile(path.join(REGISTRY_PATH, 'index.tsx'), index);
};

try {
  console.log('💽 Building registry...');

  const result = registrySchema.safeParse(registry);

  if (!result.success) {
    console.error(result.error);
    process.exit(1);
  }

  await buildRegistry(result.data);

  console.log('✅ Done!');
} catch (error) {
  console.error(error);
  process.exit(1);
}
