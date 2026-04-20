import { createTheme } from '@mui/material/styles';
import type { Theme, ThemeOptions } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { typography } from './typography';
import { shadows } from './shadows';

const baseThemeOptions: Omit<ThemeOptions, 'palette'> = {
  typography,
  shadows,
  shape: { borderRadius: 8 },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: ({ theme } : any) => ({
          scrollBehavior: 'smooth',
          fontFamily: theme.typography.fontFamily,
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: theme.typography.fontFamily,
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: theme.typography.fontFamily,
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: theme.typography.fontFamily,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          transition: 'background-color 0.2s, box-shadow 0.2s',
        },
        contained: {
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid',
          borderColor: 'divider',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          '&:hover': {
            borderColor: 'primary.main',
            boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'color 0.15s',
          '&:hover': { color: 'primary.main' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundImage: 'none',
          border: '1px solid',
          borderColor: 'divider',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
  },
};

export const lightTheme: Theme = createTheme({
  ...baseThemeOptions,
  palette: lightPalette,
});

export const darkTheme: Theme = createTheme({
  ...baseThemeOptions,
  palette: darkPalette,
});

export { lightPalette, darkPalette } from './palette';
export { typography } from './typography';
export { shadows } from './shadows';
