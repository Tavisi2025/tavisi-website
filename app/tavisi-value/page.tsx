import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { PageHero, Section, CTABand } from "@/components/common";

export const metadata = {
  title: "Tavisi Value | Tavisi Partners",
  description:
    "How Tavisi drives value for high-growth SMBs: operational excellence, market readiness, and performance insights—benchmarks and financial impact.",
};

const tableRows = [
  {
    pillar: "Operational Excellence (GTM, Sales Ops, Exec Advisory)",
    fixes:
      "Revenue leakage, low conversion, misaligned execution, inefficient pipeline",
    benchmark:
      "• 5–10% revenue uplift\n• 10–15% sales productivity gain\n• 2–5% margin improvement",
    financial:
      "• $5M–$10M revenue gain\n• $1M–$3M productivity gain\n• $2M–$4M margin expansion",
    valueType: "Revenue Growth + Cost Efficiency",
  },
  {
    pillar: "Market Readiness (Launch, Expansion, New Revenue Streams)",
    fixes: "Delayed launches, weak PMF, under-monetized offerings",
    benchmark:
      "• 10–20% faster time-to-market\n• 5–10% new revenue streams\n• 10–20% fewer failed initiatives",
    financial:
      "• $1M–$3M early revenue capture\n• $2M–$6M new revenue\n• $1M–$3M cost avoidance",
    valueType: "Revenue Expansion + Risk Reduction",
  },
  {
    pillar: "Performance Insights (Data, Analytics, Decision Intelligence)",
    fixes: "Poor forecasting, slow decisions, inefficient capital allocation",
    benchmark:
      "• 10–25% better forecast accuracy\n• 5–10% working capital improvement\n• 15–30% faster decisions",
    financial:
      "• $1M–$4M cash flow release\n• $1M–$3M cost reduction\n• $2M–$5M capital efficiency",
    valueType: "Cash Flow + Cost Optimization",
  },
] as const;

const bodyBlockSx = {
  maxWidth: 720,
  color: "text.secondary",
  lineHeight: 1.7,
} as const;

export default function TavisiValuesPage() {
  return (
    <>
      <PageHero
        headline="Tavisi Value"
        subheading="How Tavisi drives value for teams ready to scale—with clarity, structure, and execution you can measure."
        showCta={false}
        maxWidth="md"
      />

      <Section
        // title="Tavisi Value"
        // subtitle="How does Tavisi drive value"
        maxWidth="lg"
        alternate
      >
        <Stack spacing={2} sx={bodyBlockSx}>
          <Typography
            variant="h6"
            component="h3"
            color="text.primary"
            gutterBottom
          >
            High-Growth SMBs ($5M–$50M Revenue example)
          </Typography>
          <Typography variant="body1">
            Many companies in the $15M–$25M range run revenue planning in
            spreadsheets, with forecast accuracy around 50–60% and sales cycles
            of 9–12 months to first revenue.
          </Typography>
          <Typography variant="body1">
            Tavisi follows a business-first hypothesis → lean diagnostic → GTM
            design → automation → operating-model cadence approach to help these
            customers:
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5, "& li": { mb: 1.5 } }}>
            <li>
              <Typography variant="body1" component="span">
                Target forecast accuracy of ~70–75% and pipeline conversion
                uplift of ~20–30% within 12–18 months.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span">
                Reduce time-to-first-revenue to ~6–8 months and cut
                onboarding-to-quota time by ~25–40%, creating a capital-ready
                GTM engine that supports scalable growth toward and beyond $50M
                ARR.
              </Typography>
            </li>
          </Box>
          <Typography variant="body1">
            This is our Tavisi-recommended outcome range for founder-driven,
            high-growth businesses that need a structured yet GTM and sales-ops
            foundation.
          </Typography>
        </Stack>
      </Section>

      <Section
        title="You are losing money. Want to see where?"
        maxWidth="lg"
        dense
        alternate
      >
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <Table sx={{ minWidth: 720 }}>
            <TableHead>
              <TableRow sx={{ bgcolor: "action.hover" }}>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    Service Pillar
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    What Tavisi Fixes
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    Industry Benchmark Impact
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    Financial Impact (Mid-Market)
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    Primary Value Type
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow
                  key={row.pillar}
                  sx={{
                    "&:last-of-type td": { borderBottom: 0 },
                    "& td": { verticalAlign: "top" },
                  }}
                >
                  <TableCell>
                    <Typography variant="subtitle2" color="text.primary">
                      {row.pillar}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {row.fixes}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ whiteSpace: "pre-line" }}
                    >
                      {row.benchmark}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ whiteSpace: "pre-line" }}
                    >
                      {row.financial}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {row.valueType}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>

      <CTABand
        title="Turn insight into revenue"
        subtitle="Discuss where value is leaking in your GTM—and what to fix first."
      />
    </>
  );
}
