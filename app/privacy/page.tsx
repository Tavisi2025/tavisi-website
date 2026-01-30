import Typography from '@mui/material/Typography';
import { Section } from '@/components/common';

export const metadata = {
  title: 'Privacy Policy | Tavisi Partners',
  description: 'Privacy policy for Tavisi Partners.',
};

export default function PrivacyPage() {
  return (
    <Section overline="Legal" title="Privacy Policy" maxWidth="md" dense>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: 2025
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
        [Placeholder] This privacy policy describes how Tavisi Partners collects, uses, and
        protects information you provide when you contact us or use this website. For questions,
        please visit our Contact page.
      </Typography>
    </Section>
  );
}
