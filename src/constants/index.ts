export const APP_NAME = 'Tavisi Partners';

export const ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  // { path: '/clients', label: 'Clients' },
  // { path: '/news', label: 'News & Resources' },
  { path: '/contact', label: 'Contact' },
] as const;

export const LEGAL_ROUTES = [
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
] as const;

export const CTA_LABEL = 'Schedule a Consultation';
export const CTA_PATH = '/contact';

export type AppRoute = (typeof ROUTES)[number];

// Enterprise: solids and very subtle tints only (no loud gradients)
export const COLOR_PRIMARY = '#0e7490';
export const COLOR_PRIMARY_LIGHT = '#06b6d4';

// Subtle backgrounds for sections (alternate blocks)
export const SECTION_ALT_LIGHT = 'rgba(10, 10, 10, 0.02)';
export const SECTION_ALT_DARK = 'rgba(250, 250, 250, 0.02)';

// CTA band: very subtle tint
export const CTA_BAND_LIGHT = 'rgba(14, 116, 144, 0.04)';
export const CTA_BAND_DARK = 'rgba(6, 182, 212, 0.06)';

// Footer: subtle
export const FOOTER_ALT_LIGHT = 'rgba(10, 10, 10, 0.015)';
export const FOOTER_ALT_DARK = 'rgba(250, 250, 250, 0.02)';
