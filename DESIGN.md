# Tavisi Partners Design System & UI Consistency Guide

This document describes **how any new page, section, card or form in `tavisi-website` must
look and behave**, so that it can't be told apart from what already ships.

Read it together with `CLAUDE.md`:

- `CLAUDE.md` = **where code goes** (App Router structure, static-export rules, conventions).
- `DESIGN.md` = **what the UI looks like and how it is built** (tokens, components, patterns,
  motion, a11y).

> **Golden rule:** never invent a visual. Find the closest existing page or section (Home,
> About, Tavisi Value, Contact), copy its structure and change only the content.
> The look is *enterprise, restrained, high-contrast*: one steel-cyan accent, deep neutrals,
> soft glass surfaces, subtle motion.

---

## 1. Foundations (design tokens)

All tokens live in `src/theme/`. **Read them from the theme. Don't re-declare them.**

```
src/theme/
  palette.ts             # lightPalette + darkPalette (source of truth for color)
  typography.ts          # type scale (font = FONT_FAMILY_UI from @/constants)
  shadows.ts             # 25-step soft shadow scale
  index.ts               # baseThemeOptions (shape, spacing, component overrides) → lightTheme / darkTheme
  color-mode-context.ts  # ColorModeContext ('light' | 'dark')
```

### 1.0 Light & dark mode (both are first-class)

- The site ships with **both** themes. `app/providers.tsx` holds the mode in state, which
  defaults to `'light'` and isn't persisted. The AppBar toggle switches it through
  `useThemeMode()`.
- **Every new UI must be checked in both modes.** Prefer theme tokens (`text.primary`,
  `text.secondary`, `divider`, `background.paper`, `primary.main`), because they switch
  automatically.
- When a surface needs a translucent or glass value that the palette doesn't have, use the
  established pattern:

  ```tsx
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  // …
  borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
  ```

  Use the literal pairs from §1.1 exactly. This requires `'use client'`.
- Logos have a version for each mode: `/assets/images/light-theme-logo.png` and
  `/assets/images/dark-theme-logo.png`. Pick one with `isDark`.

### 1.1 Color

Brand accent (single accent, used sparingly):

| Token | Light | Dark | Use |
|---|---|---|---|
| **`primary.main`** | **`#0e7490`** (steel/cyan) | `#06b6d4` | CTAs, links on hover, card accent bar, icon badges, table/step numerals |
| `primary.light` | `#06b6d4` | `#22d3ee` | rare highlight |
| `primary.dark` | `#083344` (deep cyan) | `#0e7490` | index badges and challenge names in the Home solution matrix; contained-button hover |
| `primary.contrastText` | `#fff` | `#0a0a0a` | text on primary |
| `secondary.main` | `#64748b` | `#94a3b8` | slate, rarely used |

Neutrals and surfaces:

| Slot | Light | Dark |
|---|---|---|
| `background.default` | `#ffffff` | `#0a0a0a` |
| `background.paper` | `#ffffff` | `#171717` |
| `text.primary` | `#0a0a0a` | `#fafafa` |
| `text.secondary` | `#525252` | `#a3a3a3` |
| `divider` | `rgba(10,10,10,0.06)` | `rgba(250,250,250,0.08)` |

Status colors: `success` `#047857` / `#10b981`, `error` `#b91c1c` / `#ef4444`, `warning`
`#b45309` / `#f59e0b`. Use them only for form feedback.

**Recurring literal values already used across the codebase** (reuse these exact values,
light / dark):

| Purpose | Light | Dark |
|---|---|---|
| Hairline border on cards, bands, AppBar | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` |
| Glass card background | `rgba(255,255,255,0.7)` | `rgba(255,255,255,0.04)` |
| Alternate section glass | `rgba(255,255,255,0.6)` | `rgba(255,255,255,0.03)` |
| AppBar background | `rgba(255,255,255,0.72)` | `rgba(10,10,10,0.75)` |
| Footer / tinted band background | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.02)` |
| CTA band tint | `rgba(14,116,144,0.06)` | `rgba(14,116,144,0.08)` |
| Primary glow (icon badge, CTA hover) | `0 4px 14px rgba(14,116,144,0.35)` / `0 8px 24px rgba(14,116,144,0.35)` | same |
| Card hover shadow | `0 12px 40px rgba(14,116,144,0.12), 0 0 0 1px rgba(14,116,144,0.15)` | `0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(14,116,144,0.2)` |
| Image overlay for text on photos | `rgba(0,0,0,0.5)` + white text | same |

`src/constants/index.ts` also exports `COLOR_PRIMARY`, `SECTION_ALT_*`, `CTA_BAND_*` and
`FOOTER_ALT_*` for the same values.

**Rules**

- Prefer `sx={{ color: 'text.secondary' }}` or `theme.palette.*` over a hex.
- If you must hardcode a value, use one from the tables above. **Don't add a second accent
  color, loud gradients or a new neutral** without asking. Gradients appear only as the soft
  radial "mesh" behind `PageHero`.
- `alpha(theme.palette.primary.main, 0.12)` is the approved soft primary tint (icon tiles in
  `AdvisorySupportBlock`).

### 1.2 Typography

Font: **Aptos** (400 / 600 / 700 / 800), self-hosted from `src/assets/fonts/aptos/*.ttf` via
`next/font/local` in `src/fonts.ts` and exposed as `--font-aptos` (`FONT_FAMILY_UI`), with a
`Segoe UI` / system fallback stack. It is set globally, so don't set `fontFamily` in
components. Only those four weights are loaded; 500 falls back to the nearest face. To add
a weight, copy the `.ttf` into that folder and register it in `src/fonts.ts`.

| Variant | Size | Weight | Typical use |
|---|---|---|---|
| `h1` | `clamp(2.25rem, 5vw, 3.5rem)` | 700 | page headline (in `PageHero` / Home hero) |
| `h2` | `clamp(1.875rem, 4vw, 2.5rem)` | 700 | **section title** (`Section` `title`) |
| `h3` | 1.5rem | 600 | sub-section heading |
| `h4` | 1.25rem | 600 | CTA band title (`component="h2"`), 404 title |
| `h5` | 1.125rem | 600 | form card title, lead statements |
| `h6` | 1rem | 600 (cards often use 700) | **card title** (`component="h3"`) |
| `subtitle1` / `subtitle2` | 1rem / 0.875rem | 500 | labels, table headers, step numerals |
| `body1` | 1rem, lh 1.65 | 400 | body copy; section subtitles use `lineHeight: 1.7` |
| `body2` | 0.875rem, lh 1.55 | 400 | card body, footer text, meta |
| `caption` | 0.75rem | 400 | counters (`12/120`) |
| `overline` | 0.75rem, uppercase | 600 | section eyebrows, dates on articles |

- **Responsive type (industry baseline, audited at 360 / 390 / 768 / 1024 / 1440px):**
  - Headings and lead text scale fluidly with `clamp()`: use `fluidType` from
    `@/theme/typography` (`display`, `pageTitle`, `sectionTitle`, `featureTitle`, `lead`,
    `leadLarge`), not `{ xs, md }` objects that jump at a breakpoint. The page `h1` must stay
    larger than section `h2`s at every width.
  - Body copy is 16px (15px for secondary card text); nothing below **12px** (the Tavisi Value
    mission status pills are a deliberate 11px exception).
  - Form inputs are **16px on phones** (`xs`) so iOS Safari doesn't zoom on focus.
  - Use unitless line heights (≈1.6–1.7 body, 1.1–1.3 headings) on text whose size changes.
  - Wide tables scroll inside their container; give every column a fixed width so none collapses.
- **Letter spacing is 0% for all text.** Every theme variant sets `letterSpacing: 0` (MUI's
  defaults would otherwise add tracking). Never set `letterSpacing` in components, including
  on Figma values that show tracking.
- Buttons are `textTransform: 'none'` and weight 600. **Never use
  uppercase button labels.**
- Use `<Typography variant>` with a semantic `component` whenever the visual level differs
  from the document level (`variant="h6" component="h3"` on cards). Don't style a raw
  `<p>`/`<span>` with font sizes.
- Secondary copy is `color="text.secondary"`, and headings are `text.primary`.
- Readable measure: body blocks cap at `maxWidth` 600–720px (`Section` subtitle is 680 and
  `contentAlign` columns are 720).

### 1.3 Spacing

The spacing unit is 8px. Use `sx` shorthand (`py`, `mb`, `gap`) on the 8px scale. Don't write
raw `"16px"` margins.

| Situation | Value |
|---|---|
| Section vertical padding | `py: { xs: 5, md: 8 }` (`dense`: `{ xs: 5, md: 6 }`), `px: 2` |
| Hero vertical padding | `py: { xs: 10, md: 16 }` |
| CTA band | `py: 12` |
| Footer | `py: 10` |
| Section title → content | `mb: 5` (built into `Section`) |
| Card grid gutters | `<Grid container spacing={3}>` or `gap: 3` |
| Card inner padding | `p: 3`–`3.5` |
| Form field stack | `gap: 2.5` (column), `gap: 2` between side-by-side fields |
| Page container | `<Container maxWidth="lg">` (the default for `Section`) |

### 1.4 Shape, elevation, breakpoints

- `shape.borderRadius = 8`.
- **Radius gotcha:** a *number* passed to `borderRadius` in `sx` is multiplied by 8. So
  `borderRadius: 2` = 16px, `3` = 24px and `12` = 96px. The existing glass cards use
  `borderRadius: 12` (very round) and `CTAButton` uses `10` (a pill). Match those values when
  you extend those components. For other surfaces use `2` (16px) for image frames and tables,
  `3` (24px) for hero images and the contact form card, and `1`/`1.5` for small tiles. Use a
  string (`'8px'`) when you mean pixels.
- Shadows are soft and diffuse (`src/theme/shadows.ts`). Surfaces sit flat at rest
  (`elevation={0}` or `variant="outlined"` plus the hairline border) and gain a shadow only on
  hover. Don't add heavy drop shadows.
- Glass surfaces use `backdropFilter: 'blur(16px)'` (AppBar and CTA band use `20px`) and
  always include `WebkitBackdropFilter` too.
- Breakpoints are the MUI defaults: `xs 0 · sm 600 · md 900 · lg 1200 · xl 1536`. Layouts
  stack to one column below `md`.

---

## 2. Layout

### 2.1 App shell (already applied, don't re-wrap)

`app/layout.tsx` → `Providers` → `AppLayout`, which renders the sticky glass `LayoutAppBar`,
`<main>` and `Footer`. Pages return fragments of `<section>`s and never render their own
header, footer or `<main>`.

- **AppBar:** logo on the left, nav links (from `ROUTES`, excluding `/`) on the right, then the
  theme toggle. Below `md` the links collapse into a hamburger menu that opens a 280px
  `Drawer`.
- **Footer:** brand blurb, route list, copyright and a Privacy Policy link.

### 2.2 Columns

- **Card rows:** use MUI `<Grid container spacing={3}>` / `<Grid item xs={12} md={4}>` (Grid
  v1, `item` prop). Prefer Grid for card rows, because the `stagger` entrance animation
  (`Section stagger`) targets `.MuiGrid-item` children and does nothing on other layouts.
- **Two-up media/text rows:** `display: 'grid'` with responsive `gridTemplateColumns`
  (Home hero, `AdvisorySupportBlock`) or a flex row with `flexDirection: { xs: 'column', md: 'row' }`
  (`PageHero` split, Contact) are both established. Match whatever the page you are editing
  already uses.
- Use `<Stack>` for one-dimensional flows (text blocks, button rows, footer lists).

---

## 3. Component catalog — use these, don't rebuild them

Everything lives in `src/components/common/` and is exported from its `index.ts`.

### 3.1 Page structure

| Component | Key props | Notes |
|---|---|---|
| `PageHero` | `headline`, `subheading`, `subheadingBold`, `overline`, `layout="centered" \| "split"`, `imageSrc`/`imageAlt`, `bullets`, `showCta`, `ctaLabel`, `maxWidth` | **Owns the page `<h1>`.** Animated radial mesh background (hidden under reduced motion), bottom divider, entrance animation via `data-hero*`. Interior pages usually pass `showCta={false}`. |
| `Section` | `title`, `subtitle`, `overline`, `maxWidth` (default `lg`), `alternate`, `dense`, `stagger`, `hideDivider`, `id`, `titleSx`, `subtitleSx`, `contentAlign` | Standard section. Title is an `h2`. `alternate` adds the glass background plus bottom border. Alternate sections for rhythm. |
| `CTABand` | `title`, `subtitle` | Closing band: centered `h4`→`h2`, tinted glass, `CTAButton`. Put it last on a page. |
| `CTAButton` | `href` (=`CTA_PATH`), `label` (=`CTA_LABEL`), `variant`, `size` | The only primary CTA. Pill shape, lifts 2px with a primary glow on hover. |

**Figma content-page family** (`ContentSection.tsx`, used by Home and Tavisi Value):

| Export | Use |
|---|---|
| `ContentSection` | section shell: `py: { xs: 8, md: 12 }`, top hairline (`bordered`), flat `tinted` background, `gap` between heading and content |
| `SectionHeading` | optional `Eyebrow` + h2 + subtitle; `variant="default"` (40px/700) or `"feature"` (44px/800, eyebrow rule) |
| `Eyebrow` | 13px/700 uppercase `primary.main` label, optional 32×2 rule |
| `Accent` | title fragment in `primary.main` |
| `LinedGrid` / `LinedGridCell` | responsive grid with shared 1px lines (`#e5e5e5` / `rgba(255,255,255,0.08)`) |
| `useSurfaceCardSx()` | card surface: paper, hairline, 16px radius, `0 4px 16px rgba(0,0,0,0.04)`, no hover lift |

Use this family for new Figma-designed pages; `Section` remains for the older pages.

### 3.2 Cards & blocks

| Component | Use for |
|---|---|
| `ServiceCard` | a service offering with icon, description, outcomes list and CTA |
| `ValuePropCard` | a value point with an icon **or** a numbered `step` badge |
| `ProfileCard` | a short title plus body (people or client profiles) |
| `ArticleCard` | a news or resource item with an overline date; links when `href` is set |
| `AdvisorySupportBlock` | a 1/2/3-column grid of advisory items with tinted icon tile and underlined text link |
| `ValueChainBlock` | the fixed Customers / Partners / Suppliers trio (first card solid primary) |
| `CurrentProjectsBlock` | a horizontal scroll carousel of quote cards over dimmed photos, with prev/next `IconButton`s |
| `GetInTouchSection` | the anchored `#get-in-touch` contact band (its submit is currently simulated) |

The shared card look is a **glass card**: translucent background, 16px blur, hairline border,
often a **3px `primary.main` left accent bar**, and on hover `translateY(-4px)` plus the primary
hover shadow and `borderColor: 'primary.main'`. New cards must reuse one of the components
above or copy this recipe exactly.

Plain informational tiles (About "How We Operate") use `Paper elevation={0}` with
`border: '1px solid'`, `borderColor: 'divider'`, `p: 3` and a `subtitle2` `primary.main`
numeral (`01`, `02`, …).

Plain data tables use `TableContainer component={Paper} elevation={0}` with a hairline border,
`borderRadius: 2`, `overflowX: 'auto'` and a `minWidth` on the `Table`. The header row has
`bgcolor: 'action.hover'` and uppercase `subtitle2` labels.

### 3.3 Forms (Figma contact form)

- Labels sit **above** the field via `FieldLabel` (`app/contact/formStyles.tsx`): 14px
  `text.primary`, required asterisk in `primary.main`. No floating MUI labels.
- Inputs use `sx={fieldSx(theme)}`: 48px tall, 10px radius, border `rgba(10,10,10,0.14)`
  (dark `rgba(255,255,255,0.16)`), 15px text, placeholder `#a3a3a3` (dark `#737373`), primary
  border on hover/focus. Give every field a helpful `placeholder`, `required` and `autoComplete`.
- Phone numbers: `CustomContactNumberInput` (country flag + `+dial` + chevron selector, 1px
  divider, national number only in the input via `disableDialCodeAndPrefix`; the emitted value is
  still E.164) plus `isPhoneValid()` on submit. Show the error through its `error` prop.
- Character-limited textareas: enforce with `inputProps={{ maxLength }}` and show a right-aligned
  12px `{n} / {MAX}` counter below the field (see `ContactForm`, max 120).
- Icons inside fields: Figma SVGs from `public/assets/icons/contact/` in a start
  `InputAdornment`, inverted in dark mode.
- Submit: full-width contained button, 52px tall, 12px radius (`borderRadius: 1.5`), label
  `Send message`, disabled and labeled `Sending…` while sending. Below it a centered 12px
  "By submitting, you agree to our Privacy Policy." line.
- Feedback is inline `body2` text below the button: `success.main` "Thank you. We'll be in
  touch within 1–2 business days." (`role="status"`) or `error.main` "Something went wrong.
  Please try again or email us directly." (`role="alert"`). The success message clears after
  10s. The site has no toast or snackbar system, so don't add one.
- Form container: paper card, `p: { xs: 3, md: 4.5 }`, 24px radius, border `rgba(0,0,0,0.08)`,
  shadow `0 8px 16px rgba(0,0,0,0.06)`.

### 3.4 Icons & images

- Icons come from `@mui/icons-material` only. Inside badges they are 24–26px, and the badge is
  a 48–52px rounded square in `primary.main` with `primary.contrastText` and the primary glow.
- Images live in `public/assets/images/` and are referenced as `/assets/images/<file>`. Use
  `next/image` with `fill`, a `sizes` hint, `style={{ objectFit: 'cover' }}` and a sized
  parent (`position: 'relative'`, `minHeight`/`aspectRatio`, `overflow: 'hidden'`, rounded,
  hairline border). Add `priority` only on the above-the-fold hero image.
- Every meaningful image has descriptive `alt` text. Decorative images use `alt=""`.

---

## 4. Page patterns

### 4.1 Interior page (About)

```tsx
// app/<route>/page.tsx — Server Component
export const metadata = {
  title: 'Page Name | Tavisi Partners',
  description: 'One sentence describing the page.',
};

export default function PageNamePage() {
  return (
    <>
      <PageHero headline="Page Name" subheading="…" showCta={false} maxWidth="lg" />
      <Section maxWidth="lg" alternate>…</Section>
      <Section title="Section Title" maxWidth="lg" stagger>
        <Grid container spacing={3}>…cards…</Grid>
      </Section>
      <CTABand />            {/* optional closing CTA */}
    </>
  );
}
```

- Order: hero → alternating sections → optional `CTABand`.
- One `<h1>` per page (the hero). Section titles are `h2`, and card titles are `h3`.

### 4.2 Home (Figma: *Tavisi Partners*, node `23:1898`)

`app/page.tsx` (server, exports `metadata`) composes client sections from `app/_home/`:

- `content.ts` holds all copy and data (`as const`). Edit text there, not in the JSX.
- Section shells and headings come from the shared `ContentSection` family (§3.1).
- `HomeSections.tsx` holds `HomeHero` → `AboutSection` (two columns + focus-area pills) →
  `ProblemStatementsSection` (6-card grid with collapsed 1px `#e5e5e5` grid lines, big `01…06`
  numerals, left-rule summary note) → `EcosystemSection` (solution matrix table + 4 stat
  cards) → `WhoWeServeSection` (4 audience cards), followed by the shared `CTABand`.

Cards use `useSurfaceCardSx()` (§3.1). Pills and icon badges use `alpha(primary.main, 0.1)`.

Icons are Figma SVG exports in `public/assets/icons/home/`, rendered as `<img>` at their native
24 or 28px. The neutral problem icons get `filter: invert(1)` in dark mode.

### 4.2b Tavisi Value (Figma node `23:1365`)

`app/tavisi-value/page.tsx` (server) → `PageHero` (centered) → client sections from
`TavisiValueSections.tsx`: `ValueModelSection` (3 revenue-tier cards) → `MissionsSection`
(5 mission cards, tinted) → `PartnersSection` (`LinedGrid` of 6 partners + summary bar) →
`OutcomeSection` (metric and step `LinedGrid`s + summary bar) → `CTABand`. Copy and data live in
`app/tavisi-value/content.ts`; icons in `public/assets/icons/tavisi-value/`.

Page-specific accent colors (from Figma, kept in `content.ts`, **not** in the theme): tiers
`#1e3a8a` / `#b45309` / `#9f1239`; missions `#1d4ed8`, `#1e3a8a`, `#0f766e`, `#c2410c`, `#0f172a`.
Tier headers and status pills are solid accent with white text; labels, tags and icon tints use
the accent in light mode and `lighten(accent, 0.55)` in dark mode (the `FigmaIcon` helper
re-tints the SVG through a CSS mask in dark mode rather than editing the file). Summary bars
use `#083344` with `#67e8f9` labels/icons in both modes.

### 4.3 Contact

Figma node `23:1159`. `ContactPageView.tsx` (client) renders:

1. A two-column intro: on the left the `h1` (40px/700), intro copy and contact links with
   16px mail/phone icons (emails and phone from `CONTACT_INFO` in `@/constants`); on the right
   the `ContactForm` card (`id="contact-form"`). It stacks on mobile.
2. A `ContentSection` with a light brand tint (`rgba(14,116,144,0.03)`) holding a centered
   `SectionHeading`, three pillar cards (accents `#be123c`, `#b45309`, `#0e7490`; the last bullet
   is the semibold "mission" line in the accent) and the `#083344` "15-Minute Value Discovery"
   banner whose button jumps to `#contact-form`.

Copy lives in `app/contact/content.ts`; icons in `public/assets/icons/contact/`.

### 4.4 Legal pages (Terms, Privacy Policy)

Use a single `Section` of plain `Typography` body copy with no hero or CTA.

### 4.5 Error & 404

`not-found.tsx` uses MUI (h4→h1, secondary copy, "Go home" contained button).
`error.tsx` and `global-error.tsx` deliberately use **inline styles with hardcoded light
colors** (`#0e7490`, `#0a0a0a`, `#525252`), because the theme may not be available there.
Keep them dependency-free.

---

## 5. Motion

- Entrance animations live in `app/globals.css` and are triggered by data attributes:
  - `data-hero`, `data-hero-title`, `data-hero-sub`, `data-hero-cta` (applied by `PageHero`).
  - `data-stagger` (applied by `Section stagger`), which staggers `.MuiGrid-item` children.
- Hover: lift cards `translateY(-3px…-4px)` and buttons `-2px`, with 0.2–0.35s `ease`
  transitions on `transform`, `box-shadow` and `border-color`.
- **Every transform-based hover must be disabled under reduced motion:**
  ```ts
  '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
  ```
- Decorative looping animation (hero mesh) is hidden under `prefers-reduced-motion: reduce`.
- Don't add animation libraries. Use CSS keyframes in `globals.css` plus `sx` transitions.

---

## 6. Accessibility

- One `<h1>` per page, and headings in order (`h1` → `h2` → `h3`). Use `component=` to decouple
  the visual variant from the heading level.
- Landmarks: `AppLayout` provides `<main>`, the AppBar nav is `component="nav"` and the footer
  is `component="footer"`. Page blocks are `component="section"`.
- Every icon-only button has an `aria-label` (`"open menu"`, `"toggle theme"`, `"Previous"`,
  `"Next"`).
- Form fields have visible labels, `required` where needed, and correct `autoComplete` and
  `type` (`email`, `tel`). Show errors as `helperText` and never as color alone.
- Contact links use real `mailto:` / `tel:` hrefs.
- Contrast: body text uses `text.primary` / `text.secondary` on the theme background. Text on
  photos requires the `rgba(0,0,0,0.5)` overlay. Check both modes.
- Respect `prefers-reduced-motion` (§5).
- Don't remove focus outlines.

---

## 7. Known quirks (don't copy them into new code)

- Theme `styleOverrides` in `src/theme/index.ts` use palette path strings such as
  `borderColor: 'divider'` and `'primary.main'`. Those strings only resolve inside `sx`, so in
  `styleOverrides` they are emitted literally. For theme-aware overrides use the callback form
  `root: ({ theme }) => ({ borderColor: theme.palette.divider })`.
- `GetInTouchSection` uses square (`borderRadius: 0`) inputs and a simulated submit, unlike
  `ContactForm`. Treat `ContactForm` as the reference form.
- Some images (logos, About portrait) use a raw `<img>`. Use `next/image` in new code unless
  you are matching that exact spot.

---

## 8. Checklist before shipping a new page, section or component

**Structure**
- [ ] `app/<route>/page.tsx` is a Server Component that exports `metadata` (`'<Page> | Tavisi Partners'` + description).
- [ ] Interactive parts are split into a sibling `'use client'` component.
- [ ] The route is added to `ROUTES` (or `LEGAL_ROUTES`) if it belongs in the nav or footer.
- [ ] Nothing needs a server (static export). Dynamic routes have `generateStaticParams`.
- [ ] Imports use `@/`. Shared components are imported from `@/components/common`.

**Visual**
- [ ] Built from `PageHero` / `Section` / `CTABand` and existing cards. No duplicate component.
- [ ] Colors come from the theme or the approved literal pairs. No new hexes or gradients.
- [ ] Checked in **light and dark** mode.
- [ ] Typography uses `<Typography variant>` with semantic `component`. No uppercase buttons.
- [ ] Spacing is on the 8px scale and matches §1.3.
- [ ] `borderRadius` numbers are intentional (×8 multiplier).
- [ ] Layout stacks cleanly at 360px width with no horizontal scroll.

**Behavior & motion**
- [ ] Hover transforms have the reduced-motion reset.
- [ ] Forms show sending, success and error states inline, and the submit button is disabled while sending.
- [ ] Images use `next/image` with `alt` and `sizes`. `priority` is set only on the hero.

**Checks**
- [ ] `npm run lint` passes and `npm run build` succeeds (produces `out/`).
- [ ] No new npm dependency or external call without asking the developer first.
