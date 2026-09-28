import type { TypographyOptions } from '@mui/material/styles/createTypography';
import { FONT_FAMILY_UI } from '@/constants';

/**
 * Fluid sizes for the Figma pages: scale smoothly with the viewport between a mobile minimum
 * and the Figma desktop size, so a heading never jumps at a breakpoint. Use these instead of
 * `{ xs, md }` font-size objects for headings and lead text.
 */
export const fluidType = {
  /** Home hero h1: 36px → 44.8px */
  display: 'clamp(2.25rem, 1.5rem + 2.2vw, 2.8rem)',
  /** Page h1 without a hero (Contact): 36px → 40px */
  pageTitle: 'clamp(2.25rem, 1.75rem + 1vw, 2.5rem)',
  /** Section h2: 30px → 40px */
  sectionTitle: 'clamp(1.875rem, 1.25rem + 1.8vw, 2.5rem)',
  /** Feature section h2 (ExtraBold): 32px → 44px */
  featureTitle: 'clamp(2rem, 1.25rem + 2.4vw, 2.75rem)',
  /** Lead paragraph under a section title: 16px → 18px */
  lead: 'clamp(1rem, 0.9rem + 0.4vw, 1.125rem)',
  /** Lead paragraph under a feature title: 17px → 19px */
  leadLarge: 'clamp(1.0625rem, 0.95rem + 0.45vw, 1.1875rem)',
} as const;

export const typography: TypographyOptions = {
  fontFamily: FONT_FAMILY_UI,
  // Letter spacing is 0% for all text (Figma). Every variant sets it explicitly because MUI's
  // defaults add tracking to most variants; don't reintroduce letterSpacing in components.
  h1: {
    fontSize: 'clamp(2.25rem, 1.25rem + 3.5vw, 3.5rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: 0,
  },
  h2: {
    fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.35,
    letterSpacing: 0,
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h5: {
    fontSize: '1.125rem',
    letterSpacing: 0,
    fontWeight: 600,
    lineHeight: 1.45,
  },
  h6: {
    fontSize: '1rem',
    letterSpacing: 0,
    fontWeight: 600,
    lineHeight: 1.5,
  },
  subtitle1: {
    fontSize: '1rem',
    letterSpacing: 0,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: '0.875rem',
    letterSpacing: 0,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem',
    letterSpacing: 0,
    fontWeight: 400,
    lineHeight: 1.65,
  },
  body2: {
    fontSize: '0.875rem',
    letterSpacing: 0,
    fontWeight: 400,
    lineHeight: 1.55,
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: 0,
    textTransform: 'none' as const,
  },
  caption: {
    fontSize: '0.75rem',
    letterSpacing: 0,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: 0,
    textTransform: 'uppercase' as const,
  },
};
