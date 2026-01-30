'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { CTAButton } from './CTAButton';

interface PageHeroProps {
  headline: string;
  subheading?: string;
  showCta?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
  overline?: string;
  /** 'centered' = classic centered hero; 'split' = image left, text right */
  layout?: 'centered' | 'split';
  /** Image URL for split layout (left side). Use /image.jpg for local or full URL. */
  imageSrc?: string;
  imageAlt?: string;
  /** CTA button label, e.g. "Get started" */
  ctaLabel?: string;
}

export function PageHero({
  headline,
  subheading,
  showCta = true,
  maxWidth = 'md',
  overline,
  layout = 'centered',
  imageSrc,
  imageAlt = '',
  ctaLabel,
}: PageHeroProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const isSplit = layout === 'split' && imageSrc;

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: isSplit ? 'left' : 'center',
      }}
    >
      {overline && !isSplit && (
        <Typography
          component="span"
          variant="overline"
          data-hero-title
          sx={{
            display: 'inline-block',
            mb: 2,
            px: 2,
            py: 1,
            borderRadius: 2,
            letterSpacing: '0.14em',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid',
            borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)',
            bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.7)',
            color: 'text.secondary',
          }}
        >
          {overline}
        </Typography>
      )}
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        data-hero-title
        sx={{
          fontWeight: 700,
          letterSpacing: '-0.04em',
          maxWidth: isSplit ? 520 : 800,
          mx: isSplit ? undefined : 'auto',
          color: 'text.primary',
          fontSize: isSplit ? { xs: 'clamp(1.75rem, 5vw, 2.75rem)', md: 'clamp(2rem, 4vw, 3rem)' } : undefined,
        }}
      >
        {headline}
      </Typography>
      {subheading && (
        <Typography
          variant="h6"
          color="text.secondary"
          data-hero-sub
          sx={{
            maxWidth: isSplit ? 480 : 600,
            mx: isSplit ? undefined : 'auto',
            mb: showCta ? 5 : 0,
            fontWeight: 400,
            lineHeight: 1.65,
            fontSize: isSplit ? { xs: '1rem', md: '1.125rem' } : undefined,
          }}
        >
          {subheading}
        </Typography>
      )}
      {showCta && (
        <Box data-hero-cta sx={{ mt: 5 }}>
          <CTAButton label={ctaLabel} />
        </Box>
      )}
    </Box>
  );

  return (
    <Box
      component="section"
      data-hero
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
        px: 2,
        overflow: 'hidden',
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      {/* Animated gradient mesh (subtle) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          '@media (prefers-reduced-motion: reduce)': { display: 'none' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60%',
            height: '70%',
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(14, 116, 144, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(14, 116, 144, 0.08) 0%, transparent 70%)',
            animation: 'gradientMesh 18s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '50%',
            height: '60%',
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
            animation: 'gradientMesh 22s ease-in-out infinite reverse',
          }}
        />
      </Box>

      <Container maxWidth={isSplit ? 'lg' : maxWidth} sx={{ position: 'relative', zIndex: 1 }}>
        {isSplit ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* Image – left on desktop, bottom on mobile */}
            <Box
              sx={{
                order: { xs: 2, md: 1 },
                flex: { md: '1 1 48%' },
                position: 'relative',
                width: '100%',
                maxWidth: { md: 560 },
                height: { xs: 260, sm: 320, md: 380 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
            {/* Text – right on desktop, top on mobile */}
            <Box sx={{ order: { xs: 1, md: 2 }, flex: { md: '1 1 52%' } }}>{content}</Box>
          </Box>
        ) : (
          content
        )}
      </Container>
    </Box>
  );
}
