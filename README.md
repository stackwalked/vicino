# Vicino

Marketing as a Service for small and medium service-oriented businesses, starting with fast, bespoke, internationalized marketing websites.

## Recommended repository model

This should be a **Bun workspace monorepo**, not a single-app repository.

The first website is Vicino's own marketing site, but the business model benefits from shared implementation and deployment infrastructure for future client sites. The monorepo should support:

- A polished company marketing site.
- Future client websites with separate Cloudflare Pages deployments.
- Reusable Astro components, layouts, SEO helpers, i18n helpers, and deployment conventions.
- Starter templates that can be copied into a client site and customized.
- The option to keep some client sites in this repo while still allowing larger/private clients to move to separate repos later.

## Baseline stack

- **Framework:** Astro + TypeScript
- **Styling:** Tailwind CSS v4 with project-owned design tokens
- **Runtime/tooling:** Bun
- **Package structure:** Bun workspaces
- **Hosting:** Cloudflare Pages
- **Deployment:** Wrangler CLI
- **Rendering target:** Static output by default
- **Internationalization:** Locale-aware routes from the beginning
- **Content:** Astro content collections/MDX initially; CMS to be evaluated later

The goal is to keep websites static, fast, portable, and easy to brand per client while preserving room for interactive islands and future backend services.

## Proposed directory structure

```txt
.
├── apps/
│   └── www/                       # Vicino's own marketing site
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   │   └── styles/
│       │   │       ├── global.css
│       │   │       └── tokens.css
│       │   ├── components/
│       │   │   ├── global/
│       │   │   ├── marketing/
│       │   │   └── ui/
│       │   ├── content/
│       │   │   ├── blog/
│       │   │   ├── case-studies/
│       │   │   └── config.ts
│       │   ├── data/
│       │   │   ├── navigation.ts
│       │   │   └── site.ts
│       │   ├── i18n/
│       │   │   ├── config.ts
│       │   │   ├── en.ts
│       │   │   └── ja.ts
│       │   ├── layouts/
│       │   │   ├── BaseLayout.astro
│       │   │   └── MarketingLayout.astro
│       │   ├── pages/
│       │   │   ├── index.astro
│       │   │   └── [locale]/
│       │   │       ├── index.astro
│       │   │       ├── about.astro
│       │   │       ├── services.astro
│       │   │       └── contact.astro
│       │   └── utils/
│       │       ├── seo.ts
│       │       └── locale.ts
│       ├── astro.config.mjs
│       ├── package.json
│       ├── tsconfig.json
│       └── wrangler.toml
├── sites/
│   └── <client-slug>/              # Optional in-repo client sites
├── packages/
│   └── site-kit/                   # Shared site primitives and helpers
│       ├── src/
│       │   ├── components/
│       │   ├── i18n/
│       │   ├── seo/
│       │   ├── styles/
│       │   └── index.ts
│       └── package.json
├── templates/
│   └── service-site/               # Starter copied for new client websites
├── package.json                    # Workspace root
├── bunfig.toml
├── AGENTS.md
└── README.md
```

## How client websites should work

For smaller clients, create a site in this monorepo:

```txt
sites/acme-cafe/
sites/northside-dental/
sites/harbor-restaurant/
```

Each client site should have its own:

- `package.json`
- `astro.config.mjs`
- `wrangler.toml`
- Cloudflare Pages project
- brand tokens
- locale configuration
- content files or CMS integration

Shared code should live in `packages/site-kit` only when it is genuinely reusable. Client-specific design and copy should stay in the client site.

For larger clients, the same template can be copied into a separate repo while still reusing package conventions or publishing shared packages later if needed.

## Deployment model

Each website gets a separate Cloudflare Pages project.

Examples:

| Site                      | Workspace                 | Cloudflare Pages project |
| ------------------------- | ------------------------- | ------------------------ |
| Vicino marketing site     | `apps/www`                | `vicino`                 |
| Example cafe client       | `sites/acme-cafe`         | `acme-cafe`              |
| Example restaurant client | `sites/harbor-restaurant` | `harbor-restaurant`      |

Static deployment flow:

```txt
Astro build → dist/ → bun -b wrangler pages deploy dist
```

Cloudflare Pages dashboard/CI can also point to a specific workspace with:

- Build command: `bun --filter @vicino/www build`
- Build output directory: `apps/www/dist`

For a client site, use the matching workspace name and output directory.

## Local setup commands

Install dependencies from the repository root:

```sh
bun install
```

Run the Vicino company site:

```sh
bun run dev
```

Equivalent explicit workspace command:

```sh
bun --filter @vicino/www dev
```

When implementation files are present:

```sh
bun run check
bun run build
bun run preview
```

## Deployment commands

Authenticate Wrangler once:

```sh
bun -b wrangler login
```

Create the Vicino Cloudflare Pages project if it does not exist yet:

```sh
bun -b wrangler pages project create vicino --production-branch main
```

Build and deploy the Vicino company site:

```sh
bun run build
bun run deploy
```

For future client sites, add a package under `sites/<client-slug>` and run commands through that workspace, for example:

```sh
bun --filter @vicino/acme-cafe build
bun --filter @vicino/acme-cafe deploy
```

## CMS direction, deferred

CMS selection is intentionally deferred. When needed, evaluate options against:

- Intuitive editor experience for non-technical business owners.
- WYSIWYG or strong visual editing support.
- First-class internationalization/localization workflows.
- Good preview workflow.
- Reasonable pricing for small businesses.
- Portable content model and export story.
- Compatibility with static generation and Cloudflare deployment.

Potential candidates to evaluate later include Storyblok, Sanity, Directus, Decap CMS, and Cloudflare-native/content-file workflows.

## Suggested first implementation steps

1. Scaffold `apps/www` as the first Astro site.
2. Add Tailwind CSS v4 and global design token files.
3. Configure static output and Cloudflare-compatible build scripts.
4. Add locale configuration and route conventions.
5. Implement the shared base layout, SEO helper, and navigation model.
6. Translate the first mockup into reusable marketing sections.
7. Move genuinely reusable pieces into `packages/site-kit`.
8. Populate `templates/service-site` once the first site has proven the conventions.

## Notes on backend/runtime

Bun is the local runtime and package manager for this project. Static Cloudflare Pages deployments do not run Bun on the edge. If dynamic functionality is needed later, prefer one of these approaches:

- Cloudflare Pages Functions/Workers for edge-native functionality.
- A separate Bun service for API/backend workloads.
- Hono if portability between Bun and Cloudflare Workers becomes important.
