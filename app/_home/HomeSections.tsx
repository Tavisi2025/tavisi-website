'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { alpha, useTheme } from '@mui/material/styles';
import { fluidType } from '@/theme/typography';
import {
  Accent,
  ContentSection,
  CTAButton,
  Eyebrow,
  LinedGrid,
  LinedGridCell,
  SectionHeading,
  useSurfaceCardSx,
} from '@/components/common';
import {
  ABOUT,
  AUDIENCES,
  AUDIENCE_HEADING,
  ECOSYSTEM_HEADING,
  HERO,
  IMPACT_STATS,
  PROBLEMS,
  PROBLEMS_HEADING,
  SOLUTION_MATRIX_COLUMNS,
  SOLUTION_MATRIX_ROWS,
} from './content';

function useIsDark() {
  return useTheme().palette.mode === 'dark';
}

/** Hairline used between solution-matrix rows. */
function useRowBorder() {
  return useIsDark() ? 'rgba(255,255,255,0.08)' : 'rgba(10,10,10,0.06)';
}

export function HomeHero() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, px: 2 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              minHeight: { xs: 260, sm: 340, md: 420 },
              borderRadius: 3,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Image
              src={HERO.imageSrc}
              alt={HERO.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>

          <Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2,
                maxWidth: 640,
                fontSize: fluidType.display,
                lineHeight: 1.1,
              }}
            >
              {HERO.headline}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 620, lineHeight: 1.7 }}
            >
              {HERO.body}
            </Typography>
            <CTAButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export function AboutSection() {
  const theme = useTheme();

  return (
    <ContentSection id="about">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 8 },
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: { md: '0 0 460px' }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'text.primary',
              fontSize: fluidType.sectionTitle,
              lineHeight: 1.2,
            }}
          >
            {ABOUT.title}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            pt: { md: 3.75 },
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
          }}
        >
          {ABOUT.paragraphs.map((p) => (
            <Typography key={p} sx={{ color: 'text.secondary', fontSize: fluidType.lead, lineHeight: 1.65 }}>
              {p}
            </Typography>
          ))}
          <Box
            component="ul"
            aria-label="Focus areas"
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, m: 0, p: 0, pt: 1, listStyle: 'none' }}
          >
            {ABOUT.focusAreas.map((area) => (
              <Box
                component="li"
                key={area}
                sx={{
                  px: 1.5,
                  py: '5px',
                  borderRadius: '999px',
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: 'primary.main',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  lineHeight: '16px',
                }}
              >
                {area}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ContentSection>
  );
}

export function ProblemStatementsSection() {
  const isDark = useIsDark();

  return (
    <ContentSection id="problem-statements" tinted gap={8}>
      <SectionHeading
        variant="feature"
        eyebrow={PROBLEMS_HEADING.eyebrow}
        title={
          <>
            {PROBLEMS_HEADING.title}
            <Accent>{PROBLEMS_HEADING.titleAccent}</Accent>
          </>
        }
        subtitle={PROBLEMS_HEADING.subtitle}
      />

      <LinedGrid columns={{ xs: 1, sm: 2, md: 3 }}>
        {PROBLEMS.map((problem, idx) => (
          <LinedGridCell key={problem.title} sx={{ p: { xs: 3.5, md: 5 }, gap: 1.75 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pb: 4.5 }}>
              <Typography
                aria-hidden
                sx={{
                  color: 'primary.main',
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  lineHeight: '56px',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </Typography>
              <Box
                component="img"
                src={problem.icon}
                alt=""
                aria-hidden
                width={24}
                height={24}
                sx={{ display: 'block', mt: 0.5, filter: isDark ? 'invert(1)' : 'none' }}
              />
            </Box>
            <Typography
              variant="h3"
              component="h3"
              sx={{ color: 'text.primary', fontSize: '1.375rem', fontWeight: 700, lineHeight: '30px' }}
            >
              {problem.title}
            </Typography>
            {problem.questions.map((q) => (
              <Typography key={q} sx={{ color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '24px' }}>
                {q}
              </Typography>
            ))}
          </LinedGridCell>
        ))}
      </LinedGrid>

      <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', pl: 4, py: 1 }}>
        <Typography
          sx={{
            maxWidth: 900,
            color: 'text.primary',
            fontSize: { xs: '1.125rem', md: '1.375rem' },
            fontWeight: 600,
            lineHeight: { xs: 1.5, md: '34px' },
          }}
        >
          {PROBLEMS_HEADING.summary}
        </Typography>
      </Box>
    </ContentSection>
  );
}

export function EcosystemSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const rowBorder = useRowBorder();
  const cardSx = useSurfaceCardSx();
  const cellPadding = { pl: 3, pr: 2 };

  return (
    <ContentSection id="ecosystem">
      <SectionHeading
        eyebrow={ECOSYSTEM_HEADING.eyebrow}
        title={ECOSYSTEM_HEADING.title}
        subtitle={ECOSYSTEM_HEADING.subtitle}
      />

      <TableContainer
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,10,10,0.08)',
          borderRadius: 2,
          overflowX: 'auto',
        }}
      >
        <Table aria-label="Master Solution Mapping Matrix" sx={{ minWidth: 1100, tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow sx={{ bgcolor: alpha(theme.palette.primary.main, 0.06) }}>
              {SOLUTION_MATRIX_COLUMNS.map((col) => (
                <TableCell
                  key={col.label}
                  sx={{
                    ...cellPadding,
                    py: 2,
                    width: col.width,
                    borderBottom: 'none',
                    color: 'primary.main',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    lineHeight: '18px',
                    textTransform: 'uppercase',
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {SOLUTION_MATRIX_ROWS.map((row, idx) => (
              <TableRow key={row.challenge} sx={{ '& > td': { borderTop: '1px solid', borderColor: rowBorder, borderBottom: 'none' } }}>
                <TableCell component="th" scope="row" sx={{ ...cellPadding, py: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      aria-hidden
                      sx={{
                        width: 28,
                        height: 28,
                        flexShrink: 0,
                        borderRadius: 1,
                        bgcolor: 'primary.dark',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        lineHeight: '16px',
                      }}
                    >
                      {idx + 1}
                    </Box>
                    <Typography
                      component="span"
                      sx={{
                        color: isDark ? 'text.primary' : 'primary.dark',
                        fontSize: '1rem',
                        fontWeight: 700,
                        lineHeight: '24px',
                      }}
                    >
                      {row.challenge}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ ...cellPadding, py: 2.5, color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '24px' }}>
                  {row.gap}
                </TableCell>
                <TableCell sx={{ ...cellPadding, py: 2.5, color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '24px' }}>
                  {row.solution}
                </TableCell>
                <TableCell
                  sx={{ ...cellPadding, py: 2.5, color: 'primary.main', fontSize: '0.9375rem', fontWeight: 600, lineHeight: '24px' }}
                >
                  {row.outcome}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        component="ul"
        aria-label="Impact statistics"
        sx={{
          m: 0,
          p: 0,
          listStyle: 'none',
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: 2, md: 3 },
        }}
      >
        {IMPACT_STATS.map((stat) => (
          <Box
            component="li"
            key={stat.label}
            sx={{
              p: 3.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.75,
              textAlign: 'center',
              ...cardSx,
            }}
          >
            <Typography
              sx={{
                color: 'primary.main',
                fontSize: { xs: '2.25rem', md: '3rem' },
                fontWeight: 800,
                lineHeight: '56px',
              }}
            >
              {stat.value}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '22px' }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </ContentSection>
  );
}

export function WhoWeServeSection() {
  const theme = useTheme();
  const cardSx = useSurfaceCardSx();

  return (
    <ContentSection id="who-we-serve" tinted>
      <SectionHeading eyebrow={AUDIENCE_HEADING.eyebrow} title={AUDIENCE_HEADING.title} />

      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          listStyle: 'none',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {AUDIENCES.map((audience) => (
          <Box
            component="li"
            key={audience.title}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              ...cardSx,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box component="img" src={audience.icon} alt="" aria-hidden width={28} height={28} sx={{ display: 'block' }} />
            </Box>
            <Typography
              variant="h3"
              component="h3"
              sx={{ color: 'text.primary', fontSize: '1.25rem', fontWeight: 700, lineHeight: '28px' }}
            >
              {audience.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '25px' }}>
              {audience.body}
            </Typography>
          </Box>
        ))}
      </Box>
    </ContentSection>
  );
}
