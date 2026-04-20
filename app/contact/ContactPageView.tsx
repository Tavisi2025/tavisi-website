'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ContactForm } from './ContactForm';

const CONTACT = {
  email: 'tavisipartners@gmail.com',
  phone: '1-484-664-0722',
  mediaEmail: 'media@tavisipartners.com',
};

const SUPPORT_BLOCKS = [
  {
    heading: 'VALUE_DISCOVERY_BLOCK',
    lead: 'You likely have $5M–$25M in untapped value. The question is — where?',
    body: 'Most leadership teams don’t realize where revenue is leaking, where execution is breaking down, or how much capital is tied up in poor forecasting — until it’s quantified.',
    emphasis: 'Get a 15-Minute Value Discovery',
    closing: 'Walk away with 2–3 specific areas where value is being lost — no commitment required.',
  },
  {
    heading: 'Customer Support',
    body: 'Our support team is available to address any concerns or queries you may have about our advisory services.',
  },
  {
    heading: 'Feedback and Suggestions',
    body: 'We value your feedback and are continuously improving. Your input helps us serve our clients better.',
  },
];

export function ContactPageView() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 8 },
            alignItems: 'flex-start',
          }}
        >
          {/* Left: Contact info + support blocks */}
          <Box sx={{ flex: { md: '1 1 400px' }, maxWidth: { md: 540 }, minWidth: 0 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 700, letterSpacing: '-0.03em', color: 'text.primary', mb: 2 }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.75, fontSize: '1rem' }}>
              Email, call, or complete the form to learn how Tavisi Partners can help with your GTM
              and growth challenges.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
              <Box
                component="a"
                href={`mailto:${CONTACT.email}`}
                sx={{
                  fontSize: '1rem',
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline', color: 'primary.main' },
                }}
              >
                {CONTACT.email}
              </Box>
              <Box
                component="a"
                href={`tel:${CONTACT.phone.replace(/-/g, '')}`}
                sx={{
                  fontSize: '1rem',
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline', color: 'primary.main' },
                }}
              >
                {CONTACT.phone}
              </Box>
              <Box
                component="a"
                href={`mailto:${CONTACT.email}`}
                sx={{
                  fontSize: '1rem',
                  color: 'text.secondary',
                  textDecoration: 'underline',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Customer Support
              </Box>
            </Box>

            {/* Support blocks: stacked so each gets full width – avoids narrow columns and shrunk text */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {SUPPORT_BLOCKS.map((b) => (
                <Box key={b.heading}>
                  {b.heading === 'VALUE_DISCOVERY_BLOCK' ? (
                    <>
                      <Typography variant="h5" color="text.primary" sx={{ mb: 1.5, lineHeight: 1.35 }}>
                        {b.lead}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7, fontSize: '1rem' }}>
                        {b.body}
                      </Typography>
                      <Typography variant="h6" color="text.primary" sx={{ mb: 1.25, fontStyle: 'italic' }}>
                        {b.emphasis}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                        {b.closing}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, color: 'text.primary', mb: 1, fontSize: '1rem' }}
                      >
                        {b.heading}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                        {b.body}
                      </Typography>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: Form card */}
          <Box sx={{ flex: { md: '1 1 440px' }, minWidth: 0, width: '100%' }}>
            <ContactForm />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
