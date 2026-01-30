'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface ProfileCardProps {
  title: string;
  body: string;
}

export function ProfileCard({ title, body }: ProfileCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      variant="outlined"
      sx={{
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
          borderColor: 'primary.main',
          boxShadow: isDark
            ? '0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(14, 116, 144, 0.2)'
            : '0 12px 40px rgba(14, 116, 144, 0.12), 0 0 0 1px rgba(14, 116, 144, 0.15)',
        },
        '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
