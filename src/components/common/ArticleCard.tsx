'use client';

import NextLink from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

interface ArticleCardProps {
  title: string;
  description: string;
  publishDate: string;
  href?: string;
}

export function ArticleCard({
  title,
  description,
  publishDate,
  href = '#',
}: ArticleCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const content = (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
        borderLeftWidth: 3,
        borderLeftStyle: 'solid',
        borderLeftColor: 'primary.main',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)',
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
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ fontSize: '0.6875rem', letterSpacing: '0.1em', fontWeight: 600 }}
        >
          {publishDate}
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 0.5, lineHeight: 1.35 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );

  if (href && href !== '#') {
    return (
      <MuiLink
        component={NextLink}
        href={href}
        underline="none"
        color="inherit"
        sx={{ display: 'block', height: '100%', transition: 'opacity 0.2s', '&:hover': { opacity: 0.95 } }}
      >
        {content}
      </MuiLink>
    );
  }
  return content;
}
