---
name: blog-post
description: Create new blog posts for kelvinmai.io in MDX format. Use this skill whenever the user wants to write, draft, or create a blog post — even if they just describe a topic, share a draft file path, or say something like "write a post about X" or "turn this draft into a blog post". Handles file naming conventions, frontmatter, CodeHike inline code syntax, and registry links automatically.
---

# Blog Post

Create a new MDX blog post for kelvinmai.io.

## Reading the input

Check for draft content in this order:

1. **Explicit file path** — if the argument is a path ending in `.md` or `.mdx`, read that file as the draft
2. **Default draft** — if `content/draft.md` exists, read it as the blog brief
3. **Inline topic** — otherwise use the provided arguments directly as the topic/description

When a draft file exists, treat it as the source of truth for the post's content. Any additional inline arguments serve as overrides or extra instructions (e.g. a backdate).

## Creating the file

Create `content/blogs/<slug>.mdx` with this frontmatter:

```mdx
---
title: The Post Title
description: Third-person description of what the post covers.
date: YYYY-MM-DD
tags:
  - tag1
  - tag2
image: /blog/<image-filename>.png
---
```

- `description` must be third-person — no "I", "my", or "we"
- `date` defaults to today unless the user specifies a backdate
- `image` is optional — only include it if the user provides an image path under `public/blog/`
- Use existing tags where possible: `nextjs`, `react`, `typescript`, `css`, `tailwind`, `shadcn`, `tooling`, `next-themes`, `javascript`, `node`, `career`

## File naming

Files are numbered to maintain chronological order on disk — the prefix is stripped from the URL automatically.

- Check the highest existing number in `content/blogs/` and increment by 10
- Format: `NNNN-kebab-case-slug.mdx`
- Example: `0180-my-topic.mdx` → URL `/blog/my-topic`
- For backdated posts that fall between two existing numbers, use the gap digits (e.g. `0011` between `0010` and `0020`)

## Writing style

- **First person** throughout the body — "I wanted...", "I built...", "I ran into..."
- Conversational but technically precise
- Lead with the problem, then the solution
- Use `##` and `###` for headings; never `#` (the title is already the h1)
- Include code snippets for anything non-trivial
- End with a practical takeaway, or link to the registry if the post covers a component/hook

## Inline code — CodeHike syntax

Wrap inline code in underscores so CodeHike renders it with syntax highlighting:

```
_`variableName`_
_`some-file.tsx`_
```

Plain backticks alone (`` `like this` ``) won't get syntax highlighting in this setup and should not be used in the post body. Every inline code reference — variable names, file paths, config keys, CLI flags, port numbers — needs the `_\`...\`_` wrapper.

Do **not** use `{:lang}` annotations on inline code — they break MDX parsing.

Fenced code blocks are standard:

````
```tsx
// code here
```
````

## Linking to the registry

If the post covers a component or hook that exists in the registry, link to it:

```mdx
The full implementation is available in [my registry](/registry/<name>).
```

## After creating the file

Tell the user:
1. The file path that was created
2. Any frontmatter fields left as placeholders (image, etc.)
3. Whether they need to add an image to `public/blog/` for the preview card
