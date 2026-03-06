---
description: Create a new blog post for kelvinmai.io
argument-hint: [topic, description, or path to draft file]
allowed-tools: [Read, Write, Glob, Bash]
---

# Blog Post

Create a new MDX blog post for kelvinmai.io. The user's request: $ARGUMENTS

## Draft File Input

Before writing, check for draft content in this order:

1. **Explicit file path**: If `$ARGUMENTS` is a path ending in `.md` or `.mdx`, read that file as the draft content.
2. **Default draft**: If `content/draft.md` exists, read it and use its contents as the blog brief.
3. **Inline args only**: If neither applies, use `$ARGUMENTS` directly as the topic/description.

When a draft file is found, use its full contents as the source of truth for what to write. Inline `$ARGUMENTS` (if any beyond the file path) serve as additional context or overrides (e.g. a backdate or extra instruction).

## Instructions

Create a new MDX file at `content/blogs/<slug>.mdx`. The slug should be kebab-case and descriptive.

### Frontmatter

```mdx
---
title: The Post Title
description: Third-person description of what the post covers. Not first person.
date: YYYY-MM-DD
tags:
  - tag1
  - tag2
image: /blog/<image-filename>.png  # optional, only if image exists in public/blog/
---
```

- `description` must **not** be first person (no "I", "my", "we")
- `date` defaults to today unless the user specifies a backdate
- `image` is optional — only include if the user provides an image path under `public/blog/`
- `tags` should come from: `nextjs`, `react`, `typescript`, `css`, `tailwind`, `shadcn`, `tooling`, `next-themes`, `javascript`, `node`, `career`, or relevant new ones

### Writing Style

- **First person** narrative throughout the post body (e.g. "I wanted...", "I built...", "I ran into...")
- Conversational but technically precise
- Explain the problem first, then the solution
- Use `##` and `###` for headings — no `#` (the title is already the h1)
- Include code snippets for anything non-trivial
- End with a practical takeaway or link to the registry if relevant

### Inline Code (CodeHike syntax)

Wrap backtick code in underscores for CodeHike inline code highlighting:

```
_`variableName`_
_`some code`_
```

Do **not** use `{:lang}` annotations — they break MDX parsing.

Fenced code blocks use standard triple-backtick syntax with a language tag:

````
```tsx
// code here
```
````

### Linking to the Registry

If the post covers a hook or component available in the registry, link to it:

```mdx
The full implementation is available in [my registry](/registry/<name>).
```

### File Naming

Files are prefixed with a sequential ID to maintain chronological ordering on disk. The numeric prefix is stripped from the URL automatically.

- Check the highest existing ID in `content/blogs/` and increment by 10
- Format: `NNNN-kebab-case-slug.mdx` (4 digits, multiples of 10 for new posts)
- Example: `0100-multiple-color-themes-next-themes.mdx` → URL `/blog/multiple-color-themes-next-themes`
- If a post is backdated between two existing posts, use the gap digits (e.g. between `0010` and `0020`, use `0011`, `0012`, etc.)
- No spaces, no uppercase in the slug portion

### After Creating the File

Tell the user:
1. The file path created
2. Any frontmatter fields left as placeholders (image, etc.)
3. Whether they need to add an image to `public/blog/` for the preview
