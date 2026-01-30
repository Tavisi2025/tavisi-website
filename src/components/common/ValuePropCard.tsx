'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

interface ValuePropCardProps {
  title: string;
  body: string;
  icon?: React.ReactNode;
  step?: number;
}

export function ValuePropCard({ title, body, icon, step }: ValuePropCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const showBadge = icon != null || step != null;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3.5,
        height: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isDark
            ? '0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(14, 116, 144, 0.2)'
            : '0 12px 40px rgba(14, 116, 144, 0.12), 0 0 0 1px rgba(14, 116, 144, 0.15)',
          borderColor: 'primary.main',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '&:hover': { transform: 'none' },
        },
      }}
    >
      {showBadge && (
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 12,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            typography: step != null ? 'h6' : 'body1',
            fontWeight: 700,
            boxShadow: '0 4px 14px rgba(14, 116, 144, 0.35)',
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          {step != null ? step : icon}
        </Box>
      )}
      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
        {body}
      </Typography>
    </Paper>
  );
}
