'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { SECTION_ALT_DARK, SECTION_ALT_LIGHT } from '@/constants';
import { fluidType } from '@/theme/typography';

/*
 * Building blocks for the Figma-designed content pages (Home, Tavisi Value).
 * They differ from `Section` (glass background, bottom border, smaller padding),
 * which is still used by the older pages.
 */

interface ContentSectionProps {
  id?: string;
  /** Flat neutral tint (alternating rhythm) instead of the page background. */
  tinted?: boolean;
  /** Explicit background (overrides `tinted`), e.g. a light brand tint. */
  background?: string;
  /** Top hairline separating it from the previous section. */
  bordered?: boolean;
  /** Vertical gap between the heading block and the section content, in theme spacing units. */
  gap?: number;
  children: React.ReactNode;
}

export function ContentSection({
  id,
  tinted = false,
  background,
  bordered = true,
  gap = 6,
  children,
}: ContentSectionProps) {
  const isDark = useTheme().palette.mode === 'dark';

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        ...(bordered ? { borderTop: '1px solid', borderColor: 'divider' } : {}),
        bgcolor: background ?? (tinted ? (isDark ? SECTION_ALT_DARK : SECTION_ALT_LIGHT) : 'transparent'),
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: gap * 0.75, md: gap } }}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  /** Adds the short accent rule before the label. */
  withRule?: boolean;
}

export function Eyebrow({ children, withRule = false }: EyebrowProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      {withRule && (
        <Box aria-hidden sx={{ width: 32, height: 2, bgcolor: 'primary.main', flexShrink: 0 }} />
      )}
      <Typography
        component="p"
        sx={{
          fontSize: '0.8125rem',
          fontWeight: 700,
          lineHeight: '18px',
          textTransform: 'uppercase',
          color: 'primary.main',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  /** "feature" = larger ExtraBold title with an eyebrow rule. */
  variant?: 'default' | 'feature';
  subtitleMaxWidth?: number;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  variant = 'default',
  subtitleMaxWidth,
  align = 'left',
}: SectionHeadingProps) {
  const isFeature = variant === 'feature';
  const centered = align === 'center';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: isFeature ? 2.5 : 1.5,
        ...(centered ? { alignItems: 'center', textAlign: 'center' } : {}),
      }}
    >
      {eyebrow && <Eyebrow withRule={isFeature}>{eyebrow}</Eyebrow>}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: 'text.primary',
          fontWeight: isFeature ? 800 : 700,
          fontSize: isFeature ? fluidType.featureTitle : fluidType.sectionTitle,
          lineHeight: isFeature ? 1.18 : 1.2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: isFeature ? fluidType.leadLarge : fluidType.lead,
            lineHeight: 1.65,
            maxWidth: subtitleMaxWidth,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

/** Title fragment rendered in the brand accent color (e.g. "Key Strategic Gaps"). */
export function Accent({ children }: { children: React.ReactNode }) {
  return (
    <Box component="span" sx={{ color: 'primary.main' }}>
      {children}
    </Box>
  );
}

/** Hairline used for grid lines inside `LinedGrid`. */
export function useGridLineColor() {
  return useTheme().palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#e5e5e5';
}

/** Surface card from the Figma pages: paper, hairline, 16px radius, soft shadow. */
export function useSurfaceCardSx() {
  const isDark = useTheme().palette.mode === 'dark';
  return {
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,10,10,0.06)',
    borderRadius: 2,
    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
  } as const;
}

type ResponsiveColumns = Partial<Record<'xs' | 'sm' | 'md' | 'lg', number>>;

interface LinedGridProps {
  columns: ResponsiveColumns;
  ariaLabel?: string;
  children: React.ReactNode;
}

/**
 * Grid whose cells share single 1px lines at any column count: each cell draws its
 * top/left edge (`LinedGridCell`), the container draws the right/bottom edge.
 */
export function LinedGrid({ columns, ariaLabel, children }: LinedGridProps) {
  const line = useGridLineColor();
  const gridTemplateColumns = Object.fromEntries(
    Object.entries(columns).map(([bp, n]) => [bp, `repeat(${n}, minmax(0, 1fr))`])
  );

  return (
    <Box
      component="ul"
      aria-label={ariaLabel}
      sx={{
        m: 0,
        p: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns,
        borderRight: '1px solid',
        borderBottom: '1px solid',
        borderColor: line,
      }}
    >
      {children}
    </Box>
  );
}

interface LinedGridCellProps {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

export function LinedGridCell({ sx, children }: LinedGridCellProps) {
  const line = useGridLineColor();

  return (
    <Box
      component="li"
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderLeft: '1px solid',
          borderTop: '1px solid',
          borderColor: line,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
