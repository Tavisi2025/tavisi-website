# Tavisi Partners

Enterprise-level Next.js application with TypeScript, Material UI v5, and App Router.

## Stack

- **Next.js** (App Router) 14.x
- **TypeScript** (strict mode)
- **Material UI v5** with **Emotion** (@emotion/react, @emotion/styled)

## Project structure

```
src/
├── app/           # App Router pages and layout
├── components/    # common/, layout/
├── theme/         # MUI theme (palette, typography, shadows)
├── hooks/         # Custom hooks (e.g. useThemeMode)
├── utils/         # Utilities (emotion-cache, etc.)
├── constants/     # App name, routes
├── types/         # Shared TypeScript types
├── store/         # Redux/Zustand (structure only)
└── styles/        # Global styles
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Path alias

Use `@/` for imports from `src/`, e.g. `import { useThemeMode } from '@/hooks'`.

## Features

- Light/Dark theme with `useThemeMode`
- MUI + Emotion with SSR-friendly setup (CacheProvider, CssBaseline)
- Responsive `AppLayout` with AppBar and navigation placeholder
- Path alias `@/*` and strict TypeScript

 
