'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, lighten, useTheme } from '@mui/material/styles';
import { ContentSection, SectionHeading, useSurfaceCardSx } from '@/components/common';
import { fluidType } from '@/theme/typography';
import { CONTACT_INFO } from '@/constants';
import { ContactForm } from './ContactForm';
import {
  DISCOVERY_BANNER,
  INTRO,
  PILLARS,
  VALUE_DISCOVERY_BG,
  VALUE_DISCOVERY_HEADING,
} from './content';

const linkSx = {
  color: 'text.secondary',
  textDecoration: 'none',
  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
} as const;

function ContactIntro() {
  const isDark = useTheme().palette.mode === 'dark';
  const iconSx = { display: 'block', flexShrink: 0, filter: isDark ? 'invert(1)' : 'none' };

  return (
    <Box sx={{ flex: { md: '524 1 0' }, maxWidth: { md: 540 }, minWidth: 0 }}>
      <Typography
        variant="h1"
        component="h1"
        sx={{ color: 'text.primary', fontSize: fluidType.pageTitle, fontWeight: 700, lineHeight: 1.2 }}
      >
        {INTRO.title}
      </Typography>
      <Typography sx={{ pt: 2, color: 'text.secondary', fontSize: '1rem', lineHeight: '28px' }}>{INTRO.body}</Typography>

      <Box sx={{ pt: 3, display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: '1rem', lineHeight: '26.4px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="img" src={INTRO.mailIcon} alt="" aria-hidden width={16} height={16} sx={iconSx} />
          <Box sx={{ color: 'text.secondary', minWidth: 0, overflowWrap: 'anywhere' }}>
            {CONTACT_INFO.emails.map((email, i) => (
              <span key={email}>
                {i > 0 && ', '}
                <Box component="a" href={`mailto:${email}`} sx={linkSx}>
                  {email}
                </Box>
              </span>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="img" src={INTRO.phoneIcon} alt="" aria-hidden width={16} height={16} sx={iconSx} />
          <Box component="a" href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} sx={linkSx}>
            {CONTACT_INFO.phone}
          </Box>
        </Box>
        <Box
          component="a"
          href={`mailto:${CONTACT_INFO.emails[0]}`}
          sx={{ ...linkSx, textDecoration: 'underline', alignSelf: 'flex-start' }}
        >
          {INTRO.supportLabel}
        </Box>
      </Box>
    </Box>
  );
}

function PillarCards() {
  const isDark = useTheme().palette.mode === 'dark';
  const cardSx = useSurfaceCardSx();
  const accentText = (accent: string) => (isDark ? lighten(accent, 0.45) : accent);

  return (
    <Box
      component="ul"
      sx={{
        m: 0,
        p: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        gap: 3,
      }}
    >
      {PILLARS.map((pillar) => (
        <Box component="li" key={pillar.title} sx={{ ...cardSx, p: 4, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 52,
                height: 52,
                flexShrink: 0,
                borderRadius: '50%',
                bgcolor: alpha(accentText(pillar.accent), 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={pillar.icon}
                alt=""
                aria-hidden
                width={24}
                height={24}
                sx={{ display: 'block', filter: isDark ? 'brightness(1.8)' : 'none' }}
              />
            </Box>
            <Box
              sx={{
                bgcolor: alpha(accentText(pillar.accent), 0.1),
                color: accentText(pillar.accent),
                borderRadius: '999px',
                px: 1.5,
                py: '5px',
                fontSize: '0.75rem',
                fontWeight: 700,
                lineHeight: '16px',
                textTransform: 'uppercase',
              }}
            >
              {pillar.tag}
            </Box>
          </Box>
          <Typography
            component="h3"
            sx={{ color: 'text.primary', fontSize: '1.375rem', fontWeight: 700, lineHeight: '30px' }}
          >
            {pillar.title}
          </Typography>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {[...pillar.points, pillar.mission].map((point, i, all) => {
              const isMission = i === all.length - 1;
              return (
                <Box component="li" key={point} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <Box
                    component="img"
                    src={pillar.bullet}
                    alt=""
                    aria-hidden
                    width={6}
                    height={16}
                    sx={{ display: 'block', flexShrink: 0, mt: '5px', filter: isDark ? 'brightness(1.8)' : 'none' }}
                  />
                  <Typography
                    sx={{
                      color: isMission ? accentText(pillar.accent) : 'text.secondary',
                      fontSize: '1rem',
                      fontWeight: isMission ? 600 : 400,
                      lineHeight: '26px',
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function DiscoveryBanner() {
  const isDark = useTheme().palette.mode === 'dark';

  return (
    <Box
      sx={{
        bgcolor: DISCOVERY_BANNER.bg,
        color: '#fff',
        borderRadius: 3,
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 5 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: { xs: 3, md: 4 },
        ...(isDark ? { border: '1px solid rgba(255,255,255,0.08)' } : {}),
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography component="h3" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, lineHeight: '36px' }}>
          {DISCOVERY_BANNER.title}
        </Typography>
        <Typography sx={{ fontSize: '1rem', lineHeight: '26px', opacity: 0.8 }}>{DISCOVERY_BANNER.body}</Typography>
      </Box>
      <Button
        href={DISCOVERY_BANNER.href}
        variant="contained"
        color="primary"
        endIcon={
          <Box component="img" src={DISCOVERY_BANNER.arrowIcon} alt="" aria-hidden width={18} height={18} sx={{ display: 'block' }} />
        }
        sx={{
          flexShrink: 0,
          bgcolor: '#0e7490',
          color: '#fff',
          borderRadius: '80px',
          pl: 4,
          pr: 3.5,
          py: 2,
          fontSize: '0.9375rem',
          fontWeight: 600,
          lineHeight: '22.5px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          '& .MuiButton-endIcon': { ml: 1.25, mr: 0 },
          '&:hover': { bgcolor: '#0c6680', boxShadow: '0 4px 14px rgba(0,0,0,0.25)' },
        }}
      >
        {DISCOVERY_BANNER.cta}
      </Button>
    </Box>
  );
}

export function ContactPageView() {
  const isDark = useTheme().palette.mode === 'dark';

  return (
    <>
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 6, md: 8 },
              alignItems: 'flex-start',
            }}
          >
            <ContactIntro />
            <Box sx={{ flex: { md: '564 1 0' }, minWidth: 0, width: '100%' }}>
              <ContactForm />
            </Box>
          </Box>
        </Container>
      </Box>

      <ContentSection
        id="value-discovery"
        background={isDark ? VALUE_DISCOVERY_BG.dark : VALUE_DISCOVERY_BG.light}
      >
        <SectionHeading align="center" eyebrow={VALUE_DISCOVERY_HEADING.eyebrow} title={VALUE_DISCOVERY_HEADING.title} />
        <PillarCards />
        <DiscoveryBanner />
      </ContentSection>
    </>
  );
}
