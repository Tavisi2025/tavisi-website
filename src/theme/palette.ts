import type { PaletteOptions } from '@mui/material/styles';

// Enterprise: restrained, high-contrast. Single accent (steel blue/cyan), deep neutrals.
const primaryMain = '#0e7490';   // steel/cyan
const primaryLight = '#06b6d4';
const primaryDark = '#0c4a6e';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: primaryMain,
    light: primaryLight,
    dark: primaryDark,
    contrastText: '#fff',
  },
  secondary: {
    main: '#64748b',
    light: '#94a3b8',
    dark: '#475569',
    contrastText: '#fff',
  },
  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
  text: {
    primary: '#0a0a0a',
    secondary: '#525252',
    disabled: 'rgba(10, 10, 10, 0.38)',
  },
  divider: 'rgba(10, 10, 10, 0.06)',
  error: { main: '#b91c1c' },
  warning: { main: '#b45309' },
  info: { main: primaryMain },
  success: { main: '#047857' },
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: primaryLight,
    light: '#22d3ee',
    dark: primaryMain,
    contrastText: '#0a0a0a',
  },
  secondary: {
    main: '#94a3b8',
    light: '#cbd5e1',
    dark: '#64748b',
    contrastText: '#0a0a0a',
  },
  background: {
    default: '#0a0a0a',
    paper: '#171717',
  },
  text: {
    primary: '#fafafa',
    secondary: '#a3a3a3',
    disabled: 'rgba(250, 250, 250, 0.5)',
  },
  divider: 'rgba(250, 250, 250, 0.08)',
  error: { main: '#ef4444' },
  warning: { main: '#f59e0b' },
  info: { main: primaryLight },
  success: { main: '#10b981' },
};
