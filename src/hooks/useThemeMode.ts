'use client';

import { useContext } from 'react';
import { ColorModeContext } from '@/theme/color-mode-context';

/**
 * Returns the current color mode and a toggle function.
 * Must be used within the root Providers (ColorModeContext).
 */
export function useThemeMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useThemeMode must be used within a Providers component');
  }
  return context;
}
