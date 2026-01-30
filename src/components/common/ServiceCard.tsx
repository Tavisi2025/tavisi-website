'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { CTAButton } from './CTAButton';

interface ServiceCardProps {
  title: string;
  description: string;
  outcomes?: string[];
  ctaHref?: string;
  icon?: React.ReactNode;
}

export function ServiceCard({
  title,
  description,
  outcomes = [],
  ctaHref,
  icon,
}: ServiceCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        overflow: 'hidden',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
        borderLeft: '3px solid',
        borderLeftColor: 'primary.main',
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
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3.5 }}>
        {icon && (
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
              boxShadow: '0 4px 14px rgba(14, 116, 144, 0.35)',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            {icon}
          </Box>
        )}
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flex: 1, mb: 2, lineHeight: 1.65 }}>
          {description}
        </Typography>
        {outcomes.length > 0 && (
          <Box
            component="ul"
            sx={{
              m: 0,
              pl: 2.5,
              mb: 2,
              '& li': { typography: 'body2', color: 'text.secondary', mb: 0.5, lineHeight: 1.5 },
            }}
          >
            {outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </Box>
        )}
        <Box sx={{ mt: 'auto' }}>
          <CTAButton href={ctaHref} size="medium" />
        </Box>
      </CardContent>
    </Card>
  );
}
