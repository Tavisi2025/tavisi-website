import Typography from '@mui/material/Typography';
import { Section } from '@/components/common';

export const metadata = {
  title: 'Privacy Policy | Tavisi Partners',
  description: 'Privacy policy for Tavisi Partners.',
};

export default function PrivacyPage() {
  return (
    <Section title="Privacy Policy" maxWidth="md" dense>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Last Updated: March 31, 2026
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
        Tavisi Partners (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
        This policy explains how we collect, use, and protect information on tavisipartners.com.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
        1. Introduction
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
        Tavisi Partners (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
        This policy explains how we collect, use, and protect information on tavisipartners.com.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
        2. Information We Collect
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
        Voluntary Information: We collect names and email addresses provided via contact forms.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
        Automatic Information: We may collect IP addresses and browser types via cookies for
        website analytics to improve our GTM service offerings.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
        3. How We Use Your Information
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
        We use your data strictly to respond to consulting inquiries, deliver requested business
        insights or newsletters, and maintain website security and performance.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
        4. Third-Party Disclosure
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
        We do not sell or trade your personal information. We only share data with trusted
        service providers (e.g., website hosting, email platforms) who agree to keep this
        information confidential.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
        5. Your Rights
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
        You may request to view, edit, or delete your personal information at any time by
        contacting us at tavisipartners@gmail.com.
      </Typography>
    </Section>
  );
}
