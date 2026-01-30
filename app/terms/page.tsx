import Typography from '@mui/material/Typography';
import { Section } from '@/components/common';

export const metadata = {
  title: 'Terms & Conditions | Tavisi Partners',
  description: 'Terms and conditions for Tavisi Partners.',
};

export default function TermsPage() {
  return (
    <>
      <Section overline="Legal" title="Terms & Conditions" maxWidth="md" dense>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Last updated: 2025
        </Typography>

        <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
          1. Introduction
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
          [Placeholder] These terms and conditions govern your use of the Tavisi Partners website
          and any services provided by Tavisi Partners. By accessing or using our site or services,
          you agree to be bound by these terms.
        </Typography>

        <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
          2. Services
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
          [Placeholder] Tavisi Partners provides consulting, advisory, and related services as
          described on this website. The scope, deliverables, and fees for any engagement will be
          set out in a separate agreement or statement of work.
        </Typography>

        <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
          3. Confidentiality
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
          [Placeholder] We take confidentiality seriously. Any information you share with us in the
          context of an engagement will be handled in accordance with our agreed terms and
          applicable law.
        </Typography>

        <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
          4. Intellectual Property
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
          [Placeholder] Intellectual property rights in any deliverables will be as agreed in the
          relevant engagement. Pre-existing materials and our general methodologies remain our
          property.
        </Typography>

        <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
          5. Limitation of Liability
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
          [Placeholder] Our liability is limited as set out in the applicable engagement agreement.
          This website and its content are provided &quot;as is&quot; for general information only.
        </Typography>

        <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mt: 5, mb: 1 }}>
          6. Contact
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
          [Placeholder] For questions about these terms, please contact us via the Contact page.
        </Typography>
      </Section>
    </>
  );
}
