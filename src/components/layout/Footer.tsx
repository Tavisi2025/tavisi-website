'use client';

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { APP_NAME, ROUTES } from "@/constants";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        py: 10,
        px: 2,
        borderTop: "1px solid",
        borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
      }}
    >
      <Container maxWidth="lg">
        {/* Two-column grid: brand/copyright on the left; nav and Privacy Policy share the right
            column so their left edges line up. */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
            columnGap: 10,
            rowGap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          <Box sx={{ maxWidth: 340 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              {APP_NAME}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.7 }}
            >
              GTM Strategy, Sales Operations & Planning, and Executive Advisory
              for mid-market and SMB leadership. Bringing clarity and simplicity
              to go-to-market execution since 2025.
            </Typography>
          </Box>
          <Stack direction="row" spacing={8}>
            <Box>
              <Stack
                component="ul"
                sx={{ listStyle: "none", m: 0, pl: 0, mt: 1.5 }}
                spacing={0.75}
              >
                {ROUTES.map((r) => (
                  <li key={r.path}>
                    <MuiLink
                      component={NextLink}
                      href={r.path}
                      color="text.secondary"
                      underline="hover"
                      variant="body2"
                      sx={{ transition: "color 0.2s" }}
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
                sx={{ fontSize: '0.6875rem', fontWeight: 600 }}
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
                      sx={{ transition: "color 0.2s" }}
                    >
                      {r.label}
                    </MuiLink>
                  </li>
                ))}
              </Stack>
            </Box> */}
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              alignSelf: "center",
              order: { xs: 4, md: 0 },
            }}
          >
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </Typography>
          <Box sx={{ alignSelf: "center", order: { xs: 3, md: 0 } }}>
            <Link
              href="/privacy-policy"
              style={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                fontSize: "0.8125rem",
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
        {/* <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "block",
              mt: 6,
              pt: 4,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            © {year} {APP_NAME}. All rights reserved.
            {"  "}
          </Typography>
         
          <Link
                href="/privacy-policy"
                style={{
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                }}
                target="_blank"
              >
              Privacy Policy
              </Link>
        </Stack> */}
      </Container>
    </Box>
  );
}
