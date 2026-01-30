'use client';

import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { APP_NAME, ROUTES, LEGAL_ROUTES } from '@/constants';

export function Footer() {
  const year = new Date().getFullYear();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        py: 10,
        px: 2,
        borderTop: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 6, md: 10 }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box sx={{ maxWidth: 340 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
              {APP_NAME}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              GTM Strategy, Sales Operations & Planning, and Executive Advisory for mid-market and
              SMB leadership. Bringing clarity and simplicity to go-to-market execution since 2025.
            </Typography>
          </Box>
          <Stack direction="row" spacing={8}>
            <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ fontSize: '0.6875rem', letterSpacing: '0.1em', fontWeight: 600 }}
              >
                Navigation
              </Typography>
              <Stack component="ul" sx={{ listStyle: 'none', m: 0, pl: 0, mt: 1.5 }} spacing={0.75}>
                {ROUTES.map((r) => (
                  <li key={r.path}>
                    <MuiLink
                      component={NextLink}
                      href={r.path}
                      color="text.secondary"
                      underline="hover"
                      variant="body2"
                      sx={{ transition: 'color 0.2s' }}
                    >
                      {r.label}
                    </MuiLink>
                  </li>
                ))}
              </Stack>
            </Box>
            {/* <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ fontSize: '0.6875rem', letterSpacing: '0.1em', fontWeight: 600 }}
              >
                Legal
              </Typography>
              <Stack component="ul" sx={{ listStyle: 'none', m: 0, pl: 0, mt: 1.5 }} spacing={0.75}>
                {LEGAL_ROUTES.map((r) => (
                  <li key={r.path}>
                    <MuiLink
                      component={NextLink}
                      href={r.path}
                      color="text.secondary"
                      underline="hover"
                      variant="body2"
                      sx={{ transition: 'color 0.2s' }}
                    >
                      {r.label}
                    </MuiLink>
                  </li>
                ))}
              </Stack>
            </Box> */}
          </Stack>
        </Stack>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: 'block',
            mt: 6,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          © {year} {APP_NAME}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
