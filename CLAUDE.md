# tavisi-website — Project Instructions

> **Before you build or change any UI, read `DESIGN.md` at the repo root.** It is the design
> system reference: tokens (color, type, spacing, radius), the light/dark rules, the shared
> component catalog, page and section patterns, motion, accessibility and a pre-ship checklist.
> This file says *where code goes and how the project runs*. `DESIGN.md` says *what the UI must
> look like and how it behaves*.

## Overview

This is the Tavisi Partners marketing website, a content-only site for a GTM strategy, sales
operations and executive advisory firm. It uses **Next.js 14 (App Router)**, **TypeScript
(strict)** and **MUI v5 with Emotion**. It is exported as static HTML (`output: 'export'`) and
deployed to S3. The repo has no backend. The only runtime network call is the contact-form
submission to a Google Apps Script endpoint.

## Commands

```bash
npm run dev        # next dev -H 0.0.0.0 (port 3000)
npm run dev:turbo  # same, with Turbopack
npm run build      # next build -> static export to ./out
npm run start      # next start (not meaningful for a static export; serve ./out instead)
npm run lint       # next lint over app/ and src/
```

The repo has no tests. Use `npm run lint` and `npm run build` to check your work. The build
fails on TypeScript errors (`ignoreBuildErrors: false`).

## Deployment

`buildspec_prod.yml` (AWS CodeBuild, Node 18.17) runs `npm install --legacy-peer-deps` and
`npm run build`. It then moves the current contents of `s3://tavisi.softsages.com/` into
`s3://softsages-static-website-backup/tavisi.softsages.com/` and copies `out/` to the bucket.
The pipeline has no UAT environment and no env-var switch.

### Static-export constraints (hard rules)

Because of `output: 'export'`:

- No API routes (`app/api`), no Server Actions, no `cookies()`/`headers()`, no ISR/revalidate,
  no middleware.
- Any dynamic route (`[slug]`) must define `generateStaticParams`.
- `next/image` runs with `images.unoptimized: true`. Images are served as-is, so size and
  compress files in `public/assets/images/` before you commit them.
- Anything that needs a server must call an external service from the client, as the
  contact form does.

## 1. Project structure — where code goes

```
app/                         # App Router — at the REPO ROOT (not src/app, despite README)
  layout.tsx                 # <html>, font class, Providers, AppLayout, default metadata
  providers.tsx              # 'use client' — MUI cache, ColorModeContext, ThemeProvider, CssBaseline
  globals.css                # keyframes + data-attribute entrance animations only
  page.tsx                   # Home (server shell; sections live in app/_home/)
  _home/                     # private folder (not a route): Home content.ts + client sections
  <route>/page.tsx           # one folder per route: about, tavisi-value, contact,
                             #   clients, news, terms, privacy-policy
  <route>/<Name>.tsx         # route-local client components (e.g. contact/ContactForm.tsx)
  error.tsx, global-error.tsx, not-found.tsx

src/
  components/common/         # shared page building blocks (PageHero, Section, CTAButton, cards…)
    index.ts                 # barrel — every shared component is re-exported here
  components/layout/         # AppLayout, AppBar (LayoutAppBar), Footer
  constants/index.ts         # APP_NAME, ROUTES, LEGAL_ROUTES, CTA_LABEL/CTA_PATH, color literals
  theme/                     # palette.ts, typography.ts, shadows.ts, index.ts (light/dark themes),
                             #   color-mode-context.ts
  hooks/                     # useThemeMode (barrel in index.ts)
  utils/                     # emotion-cache, phoneValidation (isPhoneValid)
  types/index.ts             # shared interfaces
  fonts.ts                   # Aptos via next/font/local (files in src/assets/fonts/aptos/)
  store/, styles/            # placeholders — currently empty; don't build on them without asking
public/assets/images/        # all images (logos, hero, project photos)
public/assets/icons/         # SVG icons exported from Figma (home/, tavisi-value/, contact/)
```

### Adding a page

1. Create `app/<route>/page.tsx`. Keep it a **Server Component**: don't add `'use client'` to
   a `page.tsx`.
2. Export `metadata` with `title: '<Page> | Tavisi Partners'` and a one-sentence
   `description`. Home uses the long form
   `'Tavisi Partners | GTM Strategy, Sales Operations & Executive Advisory'`.
3. Compose the page from `@/components/common` (`PageHero` → `Section`s → optional `CTABand`).
   See `DESIGN.md` §4.
4. If the page needs state or event handlers, move that part into a sibling client component
   in the same route folder (see `app/contact/ContactPageView.tsx` and `ContactForm.tsx`).
   Keep `page.tsx` as the thin server shell that exports `metadata`.
5. To show the page in the nav and footer, add it to `ROUTES` in `src/constants/index.ts`.
   The AppBar, mobile Drawer and Footer are all generated from that array. Legal pages go in
   `LEGAL_ROUTES`. `/about`, `/clients` and `/news` exist but are commented out of `ROUTES` on purpose.
   Don't re-enable them unless asked.

### Server vs client components

- The theme mode lives in React context, so any component that reads `useTheme()` for
  `palette.mode`, or uses `useState`/`useRef`/handlers, needs `'use client'`. Most of
  `src/components/common/*` already has it.
- Pages can import client components and pass them plain serializable props (strings, arrays,
  numbers). Don't pass functions from a server page into a client component.
- JSX elements (for example `icon={<GroupsIcon />}`) can be passed as props from server pages.

## 2. Reuse existing components — don't create new ones by default

Before you build any UI, check `src/components/common/` and use what is already there:

- `PageHero`: top-of-page hero (centered or split with image, optional bullets and CTA). This
  is where the page's `<h1>` lives.
- `Section`: standard page section (container, vertical rhythm, optional overline, title,
  subtitle, `alternate` glass background, `stagger` animation, anchor `id`).
- `ContentSection`, `SectionHeading`, `Eyebrow`, `Accent`, `LinedGrid`/`LinedGridCell`,
  `useSurfaceCardSx`: the Figma content-page family (Home, Tavisi Value). Use these for new
  Figma-designed pages.
- `CTAButton`: the primary "Schedule a Consultation" link-button (defaults from
  `CTA_LABEL`/`CTA_PATH`).
- `CTABand`: the closing call-to-action band at the bottom of a page.
- Cards: `ServiceCard`, `ValuePropCard` (icon or numbered step), `ProfileCard`, `ArticleCard`.
- Blocks: `AdvisorySupportBlock`, `ValueChainBlock`, `CurrentProjectsBlock` (horizontal
  carousel), `GetInTouchSection`.
- Contact: `app/contact/CustomContactNumberInput` (phone with country flag), `FieldLabel` /
  `fieldSx` from `app/contact/formStyles.tsx`, and `isPhoneValid` from `@/utils/phoneValidation`.

**Rules**

- Don't create a new shared component that duplicates or near-duplicates one of these. Extend
  the existing one with an optional prop instead, and keep the current default behavior
  unchanged.
- Create a new shared component in `src/components/common/` only when none of the above can
  reasonably cover the need, or when the developer explicitly asks. Say why before you create
  it. When you add one, export it from `src/components/common/index.ts`.
- Pieces used by only one page stay local, either inline in that page or as a sibling file in
  its route folder.
- Import shared components through the barrel: `import { PageHero, Section } from '@/components/common'`.

## 3. Types

- Shared, cross-file shapes go in `src/types/index.ts`. Props used by only one component stay
  at the top of that component file as `interface <Name>Props { … }`.
- Use `interface` for object shapes. Keep `type` for unions and aliases (e.g. `ColorMode`,
  `AppRoute`).
- Content arrays inside pages use `as const` (see `app/tavisi-value/content.ts`).

## 4. Code conventions

- **Imports:** use the `@/` alias for everything in `src/` (`@/components/common`,
  `@/constants`, `@/theme`, `@/hooks`). Use per-component MUI imports
  (`import Box from '@mui/material/Box'`). Imports from the root `@mui/material` barrel also
  appear in the code and are optimized by `optimizePackageImports`, but prefer the
  per-component form in new code.
- **Components:** use named function exports (`export function Section(…)`) in `src/`.
  Next.js route files (`page.tsx`, `error.tsx`, …) use `export default function`.
- **Styling:** use the MUI `sx` prop with theme tokens. Don't add CSS modules, styled-components,
  Tailwind or new global CSS. The only exception is `app/globals.css`, which holds keyframes
  and `data-*` animation hooks.
- **Links:** for internal navigation use `next/link` through MUI:
  `<MuiLink component={NextLink} href=…>` or `<Button component={NextLink} href=…>`.
- **Constants:** use `APP_NAME`, `CTA_LABEL`, `CTA_PATH` and `ROUTES` from `@/constants`.
  Don't hard-code the brand name or nav paths.
- **Contact details** (emails, phone, address) live in `CONTACT_INFO` in `@/constants`. The
  Contact page and `GetInTouchSection` both read from it, so change them there only.
- **Contact form:** it POSTs query params to a Google Apps Script URL with `mode: 'no-cors'`.
  The response is opaque, so a success state is shown whenever `fetch` doesn't throw. Keep the
  field names (`firstName`, `lastName`, `email`, `contactNumber`, `description`, `date`),
  because the sheet script depends on them.

## 5. General

- Ask the developer before you add a new npm dependency or a new external service or API call.
  Prefer dependency-free, client-side solutions.
- Every change must work in **both light and dark mode**, at phone width (360px) and at
  desktop width. See `DESIGN.md` §1 and §7.
- Don't restructure folders, rename routes or change existing URLs as a side effect of a
  feature change.
- Commented-out code blocks (header CTA button, footer legal column, Terms link) are parked on
  purpose. Leave them alone unless asked.
