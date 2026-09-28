'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, lighten, useTheme } from '@mui/material/styles';
import {
  Accent,
  ContentSection,
  LinedGrid,
  LinedGridCell,
  SectionHeading,
  useSurfaceCardSx,
} from '@/components/common';
import {
  APPROACH,
  MISSIONS,
  MISSIONS_HEADING,
  OUTCOME_HEADING,
  OUTCOME_SUMMARY,
  PARTNERS,
  PARTNERS_HEADING,
  PARTNER_NETWORK,
  SUMMARY_BAR_ACCENT,
  SUMMARY_BAR_BG,
  TARGET_OUTCOMES,
  TIERS,
  VALUE_MODEL_HEADING,
} from './content';

function useIsDark() {
  return useTheme().palette.mode === 'dark';
}

/** Dark accents (navy, rust, crimson…) need a lighter tint to stay readable on dark surfaces. */
function useAccentText() {
  const isDark = useIsDark();
  return (accent: string) => (isDark ? lighten(accent, 0.55) : accent);
}

interface IconProps {
  src: string;
  size: number;
  /** Stroke color baked into the SVG; in dark mode the shape is re-tinted with its lightened version. */
  accent?: string;
}

/**
 * Figma SVG icon rendered as-is in light mode. In dark mode the same file is used as a
 * mask so it can be tinted for contrast without editing the asset.
 */
function FigmaIcon({ src, size, accent }: IconProps) {
  const isDark = useIsDark();
  const accentText = useAccentText();

  if (isDark && accent) {
    return (
      <Box
        aria-hidden
        sx={{
          width: size,
          height: size,
          flexShrink: 0,
          bgcolor: accentText(accent),
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
    );
  }

  return (
    <Box
      component="img"
      src={src}
      alt=""
      aria-hidden
      width={size}
      height={size}
      sx={{ display: 'block', flexShrink: 0 }}
    />
  );
}

const groupLabelSx = {
  fontSize: '0.8125rem',
  fontWeight: 700,
  lineHeight: '18px',
  textTransform: 'uppercase',
} as const;

interface TierListProps {
  label: string;
  items: readonly string[];
  icon: string;
  accent: string;
}

function TierList({ label, items, icon, accent }: TierListProps) {
  const accentText = useAccentText();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
      <Typography component="h4" sx={{ ...groupLabelSx, color: accentText(accent) }}>
        {label}
      </Typography>
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        {items.map((item) => (
          <Box component="li" key={item} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
            <Box sx={{ pt: '2px' }}>
              <FigmaIcon src={icon} size={18} accent={accent} />
            </Box>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '22px' }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function ValueModelSection() {
  const cardSx = useSurfaceCardSx();
  const accentText = useAccentText();

  return (
    <ContentSection id="value-model">
      <SectionHeading
        eyebrow={VALUE_MODEL_HEADING.eyebrow}
        title={VALUE_MODEL_HEADING.title}
        subtitle={VALUE_MODEL_HEADING.subtitle}
      />

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
        {TIERS.map((tier) => (
          <Box
            component="li"
            key={tier.label}
            sx={{ ...cardSx, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ bgcolor: tier.accent, color: '#fff', px: 3.5, py: 3, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography
                sx={{ fontSize: '0.8125rem', fontWeight: 600, lineHeight: '18px', textTransform: 'uppercase', opacity: 0.8 }}
              >
                {tier.label}
              </Typography>
              <Typography
                component="h3"
                sx={{ fontSize: '1.875rem', fontWeight: 700, lineHeight: '38px' }}
              >
                {tier.range}
              </Typography>
            </Box>

            <Box sx={{ flex: 1, p: 3.5, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <TierList label="Common Gaps" items={tier.gaps} icon={tier.gapIcon} accent={tier.accent} />
              <Box aria-hidden sx={{ height: '1px', bgcolor: 'divider' }} />
              <TierList label="Primary Services" items={tier.services} icon={tier.serviceIcon} accent={tier.accent} />
              <Box sx={{ flex: 1 }} />
              <Box
                sx={{
                  bgcolor: alpha(tier.accent, 0.08),
                  borderRadius: 1.5,
                  px: 2,
                  py: 1.75,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{ fontSize: '0.75rem', fontWeight: 600, lineHeight: '16px', textTransform: 'uppercase', color: accentText(tier.accent) }}
                >
                  Proposed Tier
                </Typography>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, lineHeight: '24px', color: 'text.primary' }}>
                  {tier.proposedTier}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          color: 'text.secondary',
          fontSize: '0.875rem',
          fontWeight: 600,
          lineHeight: '20px',
          textAlign: 'center',
          whiteSpace: 'pre-wrap',
        }}
      >
        {VALUE_MODEL_HEADING.tagline}
      </Typography>
    </ContentSection>
  );
}

export function MissionsSection() {
  const isDark = useIsDark();
  const cardSx = useSurfaceCardSx();
  const accentText = useAccentText();

  return (
    <ContentSection id="current-missions" tinted>
      <SectionHeading
        eyebrow={MISSIONS_HEADING.eyebrow}
        title={MISSIONS_HEADING.title}
        subtitle={MISSIONS_HEADING.subtitle}
      />

      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          listStyle: 'none',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))',
            lg: 'repeat(5, minmax(0, 1fr))',
          },
          gap: 2,
        }}
      >
        {MISSIONS.map((mission) => (
          <Box
            component="li"
            key={`${mission.title}-${mission.tag}`}
            sx={{ ...cardSx, px: 2.5, py: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.75 }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                bgcolor: alpha(isDark ? accentText(mission.accent) : mission.accent, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FigmaIcon src={mission.icon} size={26} accent={mission.accent} />
            </Box>
            <Typography
              component="h3"
              sx={{ color: 'text.primary', fontSize: '1.1875rem', fontWeight: 700, lineHeight: '26px' }}
            >
              {mission.title}
            </Typography>
            <Box
              sx={{
                bgcolor: alpha(isDark ? accentText(mission.accent) : mission.accent, 0.1),
                color: accentText(mission.accent),
                borderRadius: '999px',
                px: 1.5,
                py: '5px',
                fontSize: '0.75rem',
                fontWeight: 600,
                lineHeight: '16px',
              }}
            >
              {mission.tag}
            </Box>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '24px' }}>
              {mission.body}
            </Typography>
            <Box sx={{ flex: 1 }} />
            <Box
              sx={{
                width: '100%',
                bgcolor: mission.accent,
                color: '#fff',
                borderRadius: '999px',
                px: 1,
                py: '5px',
                fontSize: '0.6875rem',
                fontWeight: 600,
                lineHeight: '16px',
                textAlign: 'center',
                ...(isDark ? { border: '1px solid rgba(255,255,255,0.2)' } : {}),
              }}
            >
              {mission.status}
            </Box>
          </Box>
        ))}
      </Box>
    </ContentSection>
  );
}

interface SummaryBarProps {
  children: React.ReactNode;
  py: number;
}

/** Deep-cyan rounded bar closing the Partners and Outcome sections. */
function SummaryBar({ children, py }: SummaryBarProps) {
  const isDark = useIsDark();

  return (
    <Box
      sx={{
        bgcolor: SUMMARY_BAR_BG,
        color: '#fff',
        borderRadius: 3,
        px: { xs: 3, md: 5 },
        py: { xs: 3, md: py },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        gap: { xs: 2, md: 4 },
        ...(isDark ? { border: '1px solid rgba(255,255,255,0.08)' } : {}),
      }}
    >
      {children}
    </Box>
  );
}

export function PartnersSection() {
  const isDark = useIsDark();

  return (
    <ContentSection id="alliance-partners" gap={8}>
      <SectionHeading
        variant="feature"
        title={
          <>
            {PARTNERS_HEADING.titleStart}
            <Accent>{PARTNERS_HEADING.titleAccent}</Accent>
            {PARTNERS_HEADING.titleEnd}
          </>
        }
        subtitle={PARTNERS_HEADING.subtitle}
      />

      <LinedGrid columns={{ xs: 1, sm: 2, md: 3 }} ariaLabel="Alliance partners and customers">
        {PARTNERS.map((partner) => (
          <LinedGridCell key={partner.title} sx={{ p: { xs: 3.5, md: 5 }, gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 3.5 }}>
              <Box component="img" src={partner.icon} alt="" aria-hidden width={32} height={32} sx={{ display: 'block' }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, py: 0.75 }}>
                <Box
                  component="img"
                  src={PARTNER_NETWORK.mapPinIcon}
                  alt=""
                  aria-hidden
                  width={14}
                  height={14}
                  sx={{ display: 'block', filter: isDark ? 'invert(1)' : 'none' }}
                />
                <Typography
                  sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 700, lineHeight: '16px', textTransform: 'uppercase' }}
                >
                  <Box
                    component="span"
                    sx={{
                      position: 'absolute',
                      width: '1px',
                      height: '1px',
                      m: '-1px',
                      p: 0,
                      border: 0,
                      overflow: 'hidden',
                      clip: 'rect(0 0 0 0)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Location:{' '}
                  </Box>
                  {partner.location}
                </Typography>
              </Box>
            </Box>
            <Typography
              component="h3"
              sx={{ color: 'text.primary', fontSize: '1.375rem', fontWeight: 700, lineHeight: '30px' }}
            >
              {partner.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '24px' }}>
              {partner.body}
            </Typography>
          </LinedGridCell>
        ))}
      </LinedGrid>

      <SummaryBar py={3.5}>
        {[
          { icon: PARTNER_NETWORK.mapPinLightIcon, text: PARTNER_NETWORK.regions },
          { icon: PARTNER_NETWORK.networkIcon, text: PARTNER_NETWORK.network },
        ].map((item) => (
          <Box key={item.text} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <Box component="img" src={item.icon} alt="" aria-hidden width={20} height={20} sx={{ display: 'block', flexShrink: 0 }} />
            <Typography sx={{ fontSize: '1.0625rem', fontWeight: 600, lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </SummaryBar>
    </ContentSection>
  );
}

interface LabelRowProps {
  title: string;
  meta: string;
}

function LabelRow({ title, meta }: LabelRowProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
      <Typography component="h3" sx={{ color: 'text.primary', fontSize: '1.25rem', fontWeight: 700, lineHeight: '28px' }}>
        {title}
      </Typography>
      <Typography sx={{ color: 'text.secondary', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase' }}>
        {meta}
      </Typography>
    </Box>
  );
}

export function OutcomeSection() {
  return (
    <ContentSection id="outcome-example" bordered={false} gap={7}>
      <SectionHeading
        variant="feature"
        eyebrow={OUTCOME_HEADING.eyebrow}
        title={
          <>
            {OUTCOME_HEADING.titleStart}
            <Accent>{OUTCOME_HEADING.titleAccent}</Accent>
          </>
        }
        subtitle={OUTCOME_HEADING.subtitle}
        subtitleMaxWidth={820}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <LabelRow title={TARGET_OUTCOMES.title} meta={TARGET_OUTCOMES.meta} />
        <LinedGrid columns={{ xs: 1, sm: 2, md: 4 }} ariaLabel={TARGET_OUTCOMES.title}>
          {TARGET_OUTCOMES.metrics.map((metric) => (
            <LinedGridCell key={metric.label} sx={{ px: 4, py: 4.5, gap: 1.5 }}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                {metric.label}
              </Typography>
              <Typography
                sx={{ color: 'primary.main', fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 800, lineHeight: '56px', whiteSpace: 'nowrap' }}
              >
                {metric.value}
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.9375rem', lineHeight: '22px' }}>{metric.note}</Typography>
            </LinedGridCell>
          ))}
        </LinedGrid>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <LabelRow title={APPROACH.title} meta={APPROACH.meta} />
        <LinedGrid columns={{ xs: 1, sm: 2, md: 5 }} ariaLabel={APPROACH.title}>
          {APPROACH.steps.map((step, idx) => (
            <LinedGridCell key={step.title} sx={{ px: 3, py: 3.5, gap: 1.25 }}>
              <Typography aria-hidden sx={{ color: 'primary.main', fontSize: '0.8125rem', fontWeight: 700 }}>
                {String(idx + 1).padStart(2, '0')}
              </Typography>
              <Typography component="h4" sx={{ color: 'text.primary', fontSize: '1.0625rem', fontWeight: 700, lineHeight: '24px' }}>
                {step.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: '21px' }}>{step.body}</Typography>
            </LinedGridCell>
          ))}
        </LinedGrid>
      </Box>

      <SummaryBar py={4}>
        <Typography sx={{ flex: 1, fontSize: '1.125rem', lineHeight: '28px' }}>{OUTCOME_SUMMARY.body}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 0.5, flexShrink: 0 }}>
          <Typography sx={{ color: SUMMARY_BAR_ACCENT, fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
            {OUTCOME_SUMMARY.label}
          </Typography>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: '32px' }}>
            {OUTCOME_SUMMARY.value}
          </Typography>
        </Box>
      </SummaryBar>
    </ContentSection>
  );
}
