'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const CONTACT = {
  email: 'tavisipartners@gmail.com',
  phone: '1-484-664-0722',
  address: 'West Chester, PA 19382',
};

const inputSx = { '& .MuiOutlinedInput-root': { borderRadius: 0 } };

export function GetInTouchSection() {
  const isDark = useTheme().palette.mode === 'dark';
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 800);
  }

  return (
    <Box
      component="section"
      id="get-in-touch"
      sx={{
        py: { xs: 10, md: 14 },
        px: 2,
        borderTop: '4px solid',
        borderTopColor: 'primary.main',
        bgcolor: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          {/* Left: title, subtitle, contact */}
          <Box
            sx={{
              flex: { md: '0 0 320px' },
              pr: { md: 5 },
              pb: { xs: 4, md: 0 },
              borderBottom: { xs: '1px solid', md: 'none' },
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontWeight: 700, letterSpacing: '-0.03em', color: 'text.primary', mb: 2 }}
            >
              Get in Touch
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              We&apos;re here to help you seize growth opportunities. Connect with us today to explore how we can
              partner in your success!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, typography: 'body2', color: 'text.secondary' }}>
              <Box
                component="a"
                href={`mailto:${CONTACT.email}`}
                sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                {CONTACT.email}
              </Box>
              <Box
                component="a"
                href={`tel:${CONTACT.phone.replace(/-/g, '')}`}
                sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                {CONTACT.phone}
              </Box>
              <Box component="span">{CONTACT.address}</Box>
            </Box>
          </Box>

          {/* Vertical divider – desktop only */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              flexShrink: 0,
              alignSelf: 'stretch',
              bgcolor: 'divider',
            }}
          />

          {/* Right: form */}
          <Box sx={{ flex: 1, pl: { md: 5 }, pt: { xs: 4, md: 0 } }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
              Contact us
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    size="small"
                    autoComplete="given-name"
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last name"
                    name="lastName"
                    fullWidth
                    size="small"
                    autoComplete="family-name"
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email *"
                    name="email"
                    type="email"
                    required
                    fullWidth
                    size="small"
                    autoComplete="email"
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone"
                    name="phone"
                    fullWidth
                    size="small"
                    autoComplete="tel"
                    placeholder="1-484-664-0722"
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message *"
                    name="message"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    size="small"
                    placeholder="Message"
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Welcome to Tavisi, your one stop shop for all your GTM, Sales and Operations Planning needs.
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={status === 'sending'}
                  sx={{
                    borderRadius: 0,
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    letterSpacing: '0.02em',
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': { boxShadow: '0 6px 20px rgba(14, 116, 144, 0.4)' },
                  }}
                >
                  {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent' : 'Submit'}
                </Button>
                {status === 'sent' && (
                  <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
                    Thank you. We&apos;ll be in touch within 1–2 business days.
                  </Typography>
                )}
                {status === 'error' && (
                  <Typography variant="body2" color="error.main" sx={{ mt: 2 }}>
                    Something went wrong. Please try again or email us directly.
                  </Typography>
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
