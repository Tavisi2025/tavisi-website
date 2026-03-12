'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Section } from '@/components/common';
import type { ServiceItem } from './data';

export function ServicePageView({
  gtmItems,
  salesOpsItems,
  commercialExecItems,
  summaryBullets,
  advisoryFramework,
}: {
  gtmItems: ServiceItem[];
  salesOpsItems: ServiceItem[];
  commercialExecItems: ServiceItem[];
  summaryBullets: string[];
  advisoryFramework: ServiceItem[];
}) {
  return (
    <>
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, px: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
          <Typography
            variant="overline"
            sx={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'text.secondary',
            }}
          >
            GTM STRATEGY
          </Typography>
        </Box>
        <Typography variant="h2" component="h2" sx={{ fontWeight: 700, letterSpacing: '-0.03em', mb: 5 }}>
          <Box component="span" sx={{ color: 'primary.main' }}>
            Go-To-Market Strategy
          </Box>
          <Box component="span" sx={{ color: 'text.primary' }}>
            {' '}
            & Design
          </Box>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 8 },
            alignItems: 'flex-start',
          }}
        >
          <Box sx={{ flex: { md: '0 0 320px' }, maxWidth: { md: 380 } }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.75 }}>
              Our process is structured yet adaptable. Every engagement is different, but we bring proven
              frameworks from years of GTM transformation and commercial excellence. Our experience is your
              asset.
            </Typography>
            <Box
              sx={{
                width: 200,
                height: 200,
                position: 'relative',
                opacity: 0.6,
                '& > *': {
                  position: 'absolute',
                  borderRadius: '50%',
                  border: '1px solid',
                  borderColor: 'divider',
                },
              }}
            >
              <Box sx={{ inset: 0 }} />
              <Box sx={{ top: 16, left: 16, right: 16, bottom: 16, borderColor: 'primary.main', opacity: 0.5 }} />
              <Box sx={{ top: 36, left: 36, right: 36, bottom: 36 }} />
              <Box sx={{ top: 56, left: 56, right: 56, bottom: 56, borderColor: 'primary.main', opacity: 0.4 }} />
            </Box>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            {gtmItems.map((item, i) => (
              <Accordion
                key={item.title}
                defaultExpanded={i === 0}
                sx={{
                  mb: 1,
                  '&:before': { display: 'none' },
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  '&.Mui-expanded': { margin: '0 0 8px 0' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 2,
                    py: 1.5,
                    '& .MuiAccordionSummary-content': {
                      my: 1,
                      '&.Mui-expanded': { my: 1 },
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: 'text.disabled',
                        lineHeight: 1.2,
                        flexShrink: 0,
                        minWidth: 40,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {item.title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2, pb: 2, pt: 0 }}>
                  <Box
                    component="ul"
                    sx={{
                      m: 0,
                      pl: 2.5,
                      '& li': { color: 'text.secondary', mb: 0.5, typography: 'body2', lineHeight: 1.6 },
                    }}
                  >
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'action.hover',
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
            Summary
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p" sx={{ mb: 2, lineHeight: 1.7 }}>
            I help organizations accelerate revenue and scale by delivering:
          </Typography>
          <Box
            component="ul"
            sx={{ m: 0, pl: 2.5, '& li': { color: 'text.secondary', mb: 0.5, typography: 'body2', lineHeight: 1.6 } }}
          >
            {summaryBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>

    {/* Sales Operations & Commercial Execution */}
    <Section title="Sales Operation and Commercial Execution" overline="SALES OPS & EXECUTION" alternate>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 8 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 3 }}>
            Sales Operations – Core Services
          </Typography>
          {salesOpsItems.map((item, i) => (
            <Accordion
              key={item.title}
              defaultExpanded={false}
              sx={{
                mb: 1,
                '&:before': { display: 'none' },
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                '&.Mui-expanded': { margin: '0 0 8px 0' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 2,
                  py: 1.5,
                  '& .MuiAccordionSummary-content': {
                    my: 1,
                    '&.Mui-expanded': { my: 1 },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'text.disabled',
                      lineHeight: 1.2,
                      flexShrink: 0,
                      minWidth: 40,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2, pb: 2, pt: 0 }}>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2.5,
                    '& li': { color: 'text.secondary', mb: 0.5, typography: 'body2', lineHeight: 1.6 },
                  }}
                >
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 3 }}>
            Commercial Execution – Core Services
          </Typography>
          {commercialExecItems.map((item, i) => (
            <Accordion
              key={item.title}
              defaultExpanded={false}
              sx={{
                mb: 1,
                '&:before': { display: 'none' },
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                '&.Mui-expanded': { margin: '0 0 8px 0' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 2,
                  py: 1.5,
                  '& .MuiAccordionSummary-content': {
                    my: 1,
                    '&.Mui-expanded': { my: 1 },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'text.disabled',
                      lineHeight: 1.2,
                      flexShrink: 0,
                      minWidth: 40,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2, pb: 2, pt: 0 }}>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2.5,
                    '& li': { color: 'text.secondary', mb: 0.5, typography: 'body2', lineHeight: 1.6 },
                  }}
                >
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Section>

      <Section title="ERP Advisory" overline="ERP MIGRATION">
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.75, maxWidth: 900 }}
        >
          Advisory services to support enterprise platform transformation and
          cloud ERP modernization, including SAP S/4HANA.We analyze the current
          operating model, technology landscape, and planning processes, then
          design a future-state architecture that improves operational
          efficiency, planning visibility, and revenue execution.
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "text.primary", mb: 4 }}
        >
          Tavisi Platform Transformation Advisory Framework
        </Typography>

        <Grid container spacing={6}>
          {advisoryFramework.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "text.disabled",
                    lineHeight: 1.2,
                    flexShrink: 0,
                    minWidth: 40,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      m: 0,
                      pl: 2,
                      "& li": {
                        color: "text.secondary",
                        mb: 0.5,
                        typography: "body2",
                        lineHeight: 1.6,
                      },
                    }}
                  >
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
}
