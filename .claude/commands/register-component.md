# Register Component or Hook

Add a new item to the shadcn-style registry.

**Usage:**
- `/register-component <name>` — register a UI component (kebab-case, e.g. `date-picker`)
- `/register-component <name> --hook` — register a hook (kebab-case, e.g. `use-local-storage`)

Detect which workflow to follow by checking whether `--hook` is present in `$ARGUMENTS`. Strip `--hook` from the name before using it.

---

## Component Workflow (no `--hook`)

Work through each step in order, completing all file changes before running the build.

### 1. Component implementation

Create `src/registry/default/ui/$NAME.tsx`.

- Add `'use client'` if the component uses hooks or browser APIs
- Export a named `Props` type extending `React.ComponentProps<...>`
- Export the component as `const Name: React.FC<Props>`
- Set `Name.displayName`
- Import `cn` from `@/lib/utils`
- Import Radix from `radix-ui` (not `@radix-ui/*`)

### 2. Demo example

Create `src/registry/default/examples/$NAME-demo.tsx`.

- Must use `export default function` (required by the registry build)
- Import the component from `@/registry/default/ui/$NAME`
- Show the simplest useful usage

### 3. Registry definition — component

Add to the `ui` array in `src/registry/registry-ui.ts`:

```ts
{
  name: '$NAME',
  type: 'registry:component',
  title: 'Title Case Name',
  description: 'One-line description',
  files: [{ path: 'default/ui/$NAME.tsx', type: 'registry:component' }],
  dependencies: [],          // npm packages the component imports
  registryDependencies: [],  // shadcn component names or full registry URLs
}
```

### 4. Registry definition — example

Add to the `examples` array in `src/registry/registry-examples.ts`:

```ts
{
  name: '$NAME-demo',
  type: 'registry:example',
  registryDependencies: ['https://kelvinmai.io/r/$NAME.json'],
  files: [{ path: 'default/examples/$NAME-demo.tsx', type: 'registry:example' }],
}
```

### 5. Documentation page

Create `content/docs/components/$NAME.mdx`:

```mdx
---
title: Title Case Name
description: One-line description.
---

<ComponentPreview name="$NAME-demo" />

## Installation

<Steps>
<Step>

Run the following command:

<NpmCommand cmd="shadcn" args="add https://kelvinmai.io/r/$NAME.json" />

</Step>
</Steps>

## Usage

\```tsx
import { ComponentName } from '@/components/ui/$NAME';
\```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
```

### 6. Build & verify

```bash
pnpm build:registry
```

Start dev and navigate to `/registry/components/$NAME` to confirm the page renders with a working preview and correct source display.

---

## Hook Workflow (`--hook`)

### 1. Hook implementation

Create `src/registry/default/hooks/$NAME.ts` (`.ts`, not `.tsx`).

- Add `'use client'` at the top (hooks always run client-side)
- Use a named export: `export function useName(...) { ... }`
- Function name is camelCase (`useLocalStorage`); file name is kebab-case (`use-local-storage.ts`)

### 2. Demo example

Create `src/registry/default/examples/$NAME-demo.tsx`.

- Must use `export default function Demo()` (required by the registry build)
- Import the hook from `@/registry/default/hooks/$NAME`
- Demonstrate the hook's primary behaviour in a minimal UI

### 3. Registry definition — hook

Add to the `hooks` array in `src/registry/registry-hooks.ts`:

```ts
{
  name: '$NAME',
  type: 'registry:hook',
  title: '$NAME',
  description: 'One-line description',
  files: [{ path: 'default/hooks/$NAME.ts', type: 'registry:hook' }],
  dependencies: [],
  registryDependencies: [],
}
```

### 4. Registry definition — example

Add to the `examples` array in `src/registry/registry-examples.ts`:

```ts
{
  name: '$NAME-demo',
  type: 'registry:example',
  registryDependencies: ['https://kelvinmai.io/r/$NAME.json'],
  files: [{ path: 'default/examples/$NAME-demo.tsx', type: 'registry:example' }],
}
```

### 5. Documentation page

Create `content/docs/hooks/$NAME.mdx`. Hooks use `ComponentSource` (source inline) instead of `ComponentPreview`, and require an API Reference section:

```mdx
---
title: Use Name
description: One-line description.
---

## Installation

### CLI

<NpmCommand value="npx shadcn@latest add https://kelvinmai.io/r/$NAME.json" />

### Manual

<Steps>
<Step>Copy and paste the following code into your project</Step>

<ComponentSource name="$NAME" title="hooks/$NAME.ts" />

<Step>Update the import paths to match your project setup</Step>
</Steps>

## Usage

\```tsx
import { useName } from '@/hooks/$NAME';
\```

## API Reference

### Parameters

| Name | Type | Description |
|---|---|---|

### Returns

| Name | Type | Description |
|---|---|---|
```

### 6. Build & verify

```bash
pnpm build:registry
```

Start dev and navigate to `/registry/hooks/$NAME` to confirm the page renders with the source block and correct API tables.
