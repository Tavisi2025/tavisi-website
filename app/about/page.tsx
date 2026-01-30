import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PageHero, Section } from '@/components/common';

export const metadata = {
  title: 'About Us | Tavisi Partners',
  description: 'Mission, philosophy, and approach. Founded 2025. 15+ years in GTM transformation and commercial excellence.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="About Us"
        subheading="GTM strategy, sales operations, and executive advisory—built on clarity, structure, and execution."
        showCta
        maxWidth="md"
      />

      <Section title="Our Mission" alternate>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          Tavisi Partners was founded in 2025 to help mid-market and SMB leaders simplify
          go-to-market execution. We believe that too much strategy stays on the slide and too
          little turns into repeatable results. Our mission is to close that gap: we work with
          CEOs, CROs, and sales leaders to define a clear GTM, build the operations that scale
          it, and advise through the change.
        </Typography>
      </Section>

      <Section
        title="Philosophy"
        subtitle="Three principles guide how we work:"
      >
        <Box component="ul" sx={{ m: 0, pl: 2.5, '& li': { mb: 2 } }}>
          <li>
            <Typography component="span" sx={{ fontWeight: 600 }}>Clarity.</Typography>{' '}
            <Typography component="span" color="text.secondary">
              No jargon for jargon&apos;s sake. We help you articulate who you serve, how you win,
              and what &quot;good&quot; looks like in terms your team can execute.
            </Typography>
          </li>
          <li>
            <Typography component="span" sx={{ fontWeight: 600 }}>Structure.</Typography>{' '}
            <Typography component="span" color="text.secondary">
              Systems, metrics, and rhythms that scale. We design the operating model—quota,
              territory, pipeline, forecast—so strategy becomes a habit, not a one‑off.
            </Typography>
          </li>
          <li>
            <Typography component="span" sx={{ fontWeight: 600 }}>Execution.</Typography>{' '}
            <Typography component="span" color="text.secondary">
              Bias for action. We focus on changes that move the needle and work alongside you
              until they stick. We don&apos;t leave you with a deck and a handshake.
            </Typography>
          </li>
        </Box>
      </Section>

      <Section
        title="Founder Experience"
        subtitle="Tavisi Partners is built on 15+ years of hands-on experience in GTM transformation, commercial excellence, and sales operations."
        alternate
      >
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          Our founder has led and advised teams through scaling, turnarounds, and new market
          entry—across industries and company stages. That perspective shapes every engagement:
          we know what it takes to move from strategy to execution, because we&apos;ve done it
          repeatedly. We bring the same standards to SMB and mid-market clients that you&apos;d
          expect from a top-tier advisory—clarity, structure, and a focus on outcomes.
        </Typography>
      </Section>

      <Section
        title="How We Help SMB & Mid-Market Companies"
        subtitle="We work with leadership teams who are ready to level up their GTM but don’t need (or want) a bloated consultancy. We’re pragmatic, experienced, and focused on what works at your stage."
      >
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          Whether you&apos;re refining your GTM motion, building or fixing sales operations, or
          need an adviser in the room for board prep and transformation, we tailor the
          engagement to your priorities. We don&apos;t do cookie-cutter; we do clarity, structure,
          and execution that fits your company.
        </Typography>
      </Section>
    </>
  );
}
