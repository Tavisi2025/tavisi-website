'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

export interface AdvisoryItem {
  title: string;
  description: string;
  points?: string[];
  buttonLabel: string;
  buttonHref: string;
  icon?: React.ReactNode;
}

interface AdvisorySupportBlockProps {
  items: AdvisoryItem[];
}

export function AdvisorySupportBlock({ items }: AdvisorySupportBlockProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 3,
      }}
    >
      {items.map((item) => (
        <Box
          key={item.title}
          sx={{
            p: 3.5,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.98)',
            boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.15)' : '0 8px 24px rgba(0,0,0,0.06)',
            transition: 'transform 0.35s ease, box-shadow 0.35s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: isDark ? '0 12px 32px rgba(0,0,0,0.2)' : '0 12px 32px rgba(0,0,0,0.08)',
            },
            '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
          }}
        >
          {item.icon && (
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 1.5,
                bgcolor: alpha(theme.palette.primary.main, 0.12),
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                '& .MuiSvgIcon-root': { fontSize: 26 },
              }}
            >
              {item.icon}
            </Box>
          )}
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 700, letterSpacing: '-0.02em', color: 'text.primary' }}
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1, lineHeight: 1.65, mb: 2 }}>
            {item.description}
          </Typography>
          {item.points && item.points.length > 0 && (
            <Box sx={{ mb: 2 }}>
              {item.points.map((p, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65, ...(i > 0 ? { mt: 1 } : {}) }}
                >
                  {p}
                </Typography>
              ))}
            </Box>
          )}
          <Link
            component={NextLink}
            href={item.buttonHref}
            underline="always"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              letterSpacing: '0.02em',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {item.buttonLabel}
          </Link>
        </Box>
      ))}
    </Box>
  );
}
