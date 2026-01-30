'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { CTAButton } from './CTAButton';

interface CTABandProps {
  title?: string;
  subtitle?: string;
}

export function CTABand({
  title = 'Ready to simplify your GTM execution?',
  subtitle = "Let's discuss how we can help.",
}: CTABandProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const glassBg = isDark ? 'rgba(14, 116, 144, 0.08)' : 'rgba(14, 116, 144, 0.06)';

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        px: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        bgcolor: glassBg,
      }}
    >
      <Box sx={{ maxWidth: 560, mx: 'auto', position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
          {subtitle}
        </Typography>
        <CTAButton />
      </Box>
    </Box>
  );
}
