---
name: register-component
description: Register new UI components or React hooks into the shadcn-style component registry at kelvinmai.io. Use this skill whenever the user wants to add a component or hook to the registry — including "add a component", "create a hook", "register X", or when they start implementing something new in src/registry/. Handles implementation files, demo examples, registry definitions, documentation pages, and the build step.
---

# Register Component or Hook

Add a new item to the shadcn-style registry at kelvinmai.io.

Determine which workflow to follow:
- **Component** (default): no `--hook` flag
- **Hook**: `--hook` flag present — strip it from the name before proceeding

The name argument should be kebab-case (e.g. `date-picker`, `use-local-storage`).

---

## Component workflow

Work through each step in order, then run the build once at the end.

### 1. Implementation

Create `src/registry/default/ui/$NAME.tsx`:

- Add `'use client'` if the component uses hooks or browser APIs
- Export a named `Props` type extending `React.ComponentProps<...>`
- Export the component as `const Name: React.FC<Props>` with `.displayName` set
- Import `cn` from `@/lib/utils`
- Import Radix primitives from `radix-ui` (the consolidated package), not `@radix-ui/*`

### 2. Demo example

Create `src/registry/default/examples/$NAME-demo.tsx`:

- Use `export default function` — the registry build requires a default export for examples
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

### 6. Build and verify

```bash
pnpm build:registry
```

Start the dev server and navigate to `/registry/components/$NAME` to confirm the page renders with a working preview and correct source display.

---

## Hook workflow

### 1. Implementation

Create `src/registry/default/hooks/$NAME.ts` (`.ts`, not `.tsx`):

- Add `'use client'` at the top — hooks always run client-side
- Use a named export: `export function useName(...) { ... }`
- Function name is camelCase (`useLocalStorage`); file name is kebab-case (`use-local-storage.ts`)

### 2. Demo example

Create `src/registry/default/examples/$NAME-demo.tsx`:

- Use `export default function Demo()` — required by the registry build
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

Hooks use `ComponentSource` (renders source inline) instead of `ComponentPreview`, and need an API Reference section. Create `content/docs/hooks/$NAME.mdx`:

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

### 6. Build and verify

```bash
pnpm build:registry
```

Start the dev server and navigate to `/registry/hooks/$NAME` to confirm the page renders with the source block and correct API tables.
