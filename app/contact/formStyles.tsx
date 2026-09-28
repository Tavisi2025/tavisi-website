'use client';

import InputLabel from '@mui/material/InputLabel';
import type { Theme } from '@mui/material/styles';

/** Figma contact-form field: 48px tall, 10px radius, soft 14% border, 15px text. */
export function fieldSx(theme: Theme) {
  const isDark = theme.palette.mode === 'dark';
  return {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      bgcolor: 'background.paper',
      // 16px on phones stops iOS Safari zooming in on focus; Figma's 15px from `sm` up.
      fontSize: { xs: '1rem', sm: '0.9375rem' },
      lineHeight: '22px',
      '& fieldset': { borderColor: isDark ? 'rgba(255,255,255,0.16)' : 'rgba(10,10,10,0.14)' },
      '&:hover fieldset': { borderColor: theme.palette.primary.main },
      '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main, borderWidth: '1.5px' },
      '&.Mui-error fieldset': { borderColor: theme.palette.error.main },
    },
    '& .MuiOutlinedInput-input': {
      height: '22px',
      py: '13px',
      px: '14px',
      '&::placeholder': { color: isDark ? '#737373' : '#a3a3a3', opacity: 1 },
    },
    '& .MuiInputAdornment-positionStart': { ml: '-2px', mr: 0 },
    '& .MuiInputBase-adornedStart .MuiOutlinedInput-input': { pl: '10px' },
    '& .MuiInputBase-multiline': { p: '12px 14px' },
    '& .MuiInputBase-multiline textarea': { p: 0 },
    '& .MuiFormHelperText-root': { mx: 0 },
  } as const;
}

interface FieldLabelProps {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}

/** Label rendered above the field; the required asterisk uses the brand color. */
export function FieldLabel({ htmlFor, required, children }: FieldLabelProps) {
  return (
    <InputLabel
      htmlFor={htmlFor}
      required={required}
      sx={{
        position: 'static',
        transform: 'none',
        mb: 1,
        color: 'text.primary',
        fontSize: '0.875rem',
        lineHeight: '20px',
        whiteSpace: 'normal',
        '& .MuiFormLabel-asterisk': { color: 'primary.main' },
        '&.Mui-focused': { color: 'text.primary' },
      }}
    >
      {children}
    </InputLabel>
  );
}
