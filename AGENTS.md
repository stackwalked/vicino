# AGENTS.md

Project-specific guidance for AI coding agents working on Vicino.

## Product context

Vicino is a Marketing as a Service company for small and medium service-oriented businesses such as cafes, restaurants, studios, clinics, and local service providers.

The first deliverable is Vicino's own marketing website. Future work should support reusable patterns for client websites without making the company site feel generic.

## Repository model

This project is a Bun workspace monorepo.

Expected top-level roles:

- `apps/www`: Vicino's own marketing site.
- `sites/<client-slug>`: optional in-repo client websites.
- `packages/site-kit`: reusable site primitives, helpers, and conventions.
- `templates/service-site`: starter template for future client websites.

Do not treat the root as a single Astro application. App-specific Astro, Wrangler, and TypeScript configuration should live inside the relevant workspace.

## Technical direction

Use this baseline unless explicitly changed:

- Astro + TypeScript for static-first marketing sites.
- Tailwind CSS v4 for styling.
- Project-owned design tokens for brand-specific visuals.
- Bun for package management and workspace scripts.
- Cloudflare Pages for hosting.
- Wrangler CLI for deployment.
- Static generation by default.
- Internationalization from the beginning.

## Implementation principles

- Prioritize performance, accessibility, strong visual polish, and maintainability.
- Keep sites static unless dynamic behavior is clearly needed.
- Avoid adding a CMS until requirements are clearer.
- Avoid generic template aesthetics; components should support bespoke compositions.
- Make i18n decisions explicit and keep copy locale-aware.
- Prefer small, composable sections over large page-specific components.
- Keep client-reusable patterns separate from Vicino-specific brand/content where practical.
- Promote code into `packages/site-kit` only after it has clear reuse value.

## Styling conventions

- Use Tailwind utilities for layout and common styling.
- Put brand primitives in CSS variables/design tokens.
- Avoid hardcoded one-off colors when a semantic token would be better.
- Use custom components for repeated marketing sections.
- Do not introduce a heavy UI component library unless there is a clear need.

## Content conventions

- Use structured data/config files for site metadata, navigation, and repeated business content.
- Use Astro content collections or MDX for rich editorial content.
- Keep translated strings organized by locale.
- Ensure pages can produce localized SEO metadata.

## Deployment conventions

- Each site should have its own Cloudflare Pages project.
- Build static output to that site's `dist/` directory.
- Deploy with that site's `bun -b wrangler pages deploy dist` script.
- Do not assume Bun is available in Cloudflare's runtime for dynamic server code.

## Validation

When changing implementation files, prefer running the narrowest relevant validation first:

```sh
bun run check
bun run build
```

For a specific workspace, use:

```sh
bun --filter @vicino/www check
bun --filter @vicino/www build
```

If dependencies have not been installed yet, state that validation was not run and explain why.
