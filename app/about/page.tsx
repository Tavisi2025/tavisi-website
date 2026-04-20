import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { PageHero, Section } from "@/components/common";
import { Grid, Paper } from "@mui/material";

export const metadata = {
  title: "About Us | Tavisi Partners",
  description:
    "Mission, how we work, and who we help. GTM strategy, sales operations, and clarity, structure, and execution.",
};

const bodyBlockSx = {
  maxWidth: 720,
  color: "text.secondary",
  lineHeight: 1.7,
} as const;

const howWeWorkLabelSx = {
  fontWeight: 600,
  mb: 0.5,
  color: "text.primary",
} as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="About Us"
        subheading="GTM strategy, sales operations, and executive advisory—built on clarity, structure, and execution."
        showCta={false}
        maxWidth="lg"
      />

      <Section maxWidth="lg" alternate>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={2} sx={bodyBlockSx}>
              <Typography variant="h2" component="h2" color="text.primary">
                Our Mission
              </Typography>
              <Typography variant="body1">
                We help SMB and mid-market leaders turn go-to-market strategy
                into predictable revenue outcomes.
              </Typography>
              <Typography variant="body1">
                Too often, strategy lives in slides and never translates into
                execution. We close that gap by aligning GTM design, operations,
                and execution—so growth becomes repeatable, not accidental.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                // width: "100%",
                // minHeight: { xs: 300, md: "100%" },
                borderRadius: 3,
                overflow: "hidden",
                // border: "1px solid",
                // borderColor: "divider",
                // boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
              }}
            >
              <img
                src="/assets/images/dipankar-banerjee.webp"
                alt="Dipankar Banerjee, founder"
              />
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section title="How We Operate" maxWidth="lg">
        <Grid container spacing={3}>
          {[
            {
              label: "Clarity",
              detail:
                "Define who you serve, how you win, and what success looks like—so your team can execute with focus.",
            },
            {
              label: "Structure",
              detail:
                "Build the systems, metrics, and operating cadence that turn strategy into consistent performance.",
            },
            {
              label: "Execution",
              detail:
                "Drive changes that move the needle—and stay engaged until results show up in your numbers.",
            },
          ].map((lane, idx) => (
            <Grid item xs={12} md={4} key={lane.label}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="primary.main"
                  sx={{ mb: 1 }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                  {lane.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {lane.detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section title="Experience That Delivers" maxWidth="lg" alternate>
        <Stack spacing={2} sx={{ ...bodyBlockSx, maxWidth: 860 }}>
          <Typography variant="body1" color="text.secondary">
            Built on 15+ years of hands-on GTM and sales operations leadership,
            we&apos;ve helped companies scale, fix broken revenue engines, and
            enter new markets.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We bring top-tier advisory thinking with operator-level
            execution—focused on outcomes, not presentations.
          </Typography>
        </Stack>
      </Section>

      <Section title="Who We Help" maxWidth="lg">
        <Stack spacing={2} sx={{ ...bodyBlockSx, maxWidth: 860 }}>
          <Typography variant="body1" color="text.secondary">
            We partner with leadership teams ready to scale—but not interested
            in bloated consulting.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Whether you need to refine GTM, fix sales operations, or navigate
            growth and transformation, we deliver practical, tailored solutions
            that work at your stage.
          </Typography>
        </Stack>
      </Section>
    </>
  );
}
