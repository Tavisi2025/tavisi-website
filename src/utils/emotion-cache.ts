import createCache from '@emotion/cache';

/**
 * Creates an Emotion cache for MUI with SSR-friendly settings.
 * prepend: true ensures MUI styles are loaded before other CSS.
 */
export function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
