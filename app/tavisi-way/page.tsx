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
import { PageHero, Section } from "@/components/common";

export const metadata = {
    title: "Tavisi Way | Tavisi Partners",
  description:
    "Tavisi Way: the mechanism and methodology for solving complex enterprise growth and transformation problems.",
};

const deliverablesRows = [
  {
    profile: "Foundations: Early-stage SMB (Revenue $1M–$10M, ~5–30 employees)",
    gaps: [
      "No GTM playbook",
      "Founder-led sales",
      "Min/no repeatable process",
      "Stagnant growth",
    ],
    services: [
      "GTM strategy",
      "Sales process design",
      "Pipeline setup",
      "Growth plan",
    ],
    tier: "Foundations",
  },
  {
    profile: "Growth SMB (Revenue $10M–$30M, scaling team)",
    gaps: [
      "No sales leader",
      "ICP drift",
      "Ops chaos",
      "Lack of probabilistic approach",
    ],
    services: [
      "Fractional Sales",
      "GTM refinement",
      "Ops cleanup",
      "Probabilistic model",
    ],
    tier: "Foundations + Growth Engine",
  },
  {
    profile: "Mid-market scaler (Revenue $30M–$100M)",
    gaps: ["VP sales gap", "Forecast inaccuracy", "Legacy ERP pain"],
    services: ["Fractional CRO", "Forecast design", "ERP advisory"],
    tier: "Foundation + Growth Engine",
  },
  {
    profile: "Mid-market transformer (Revenue $100M–$300M)",
    gaps: ["ERP migration", "S&OP gaps", "Multi-channel GTM"],
    services: ["ERP advisory", "S&OP advisory", "GTM redesign"],
    tier: "Foundation + Growth Engine + Transformation",
  },
  {
    profile: "PE-backed / M&A (Revenue $150M–$500M)",
    gaps: ["Revenue predictability", "Integration ops", "ERP consolidation"],
    services: ["Embedded advisory", "Full GTM", "Operations", "ERP advisory"],
    tier: "Foundation + Growth Engine + Transformation",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="Tavisi Way"
        subheadingBold="The mechanism or methodology"
        subheading="Tavisi Partners applies quantum-inspired decision frameworks to solve complex enterprise growth and transformation problems."
        showCta={false}
        maxWidth="md"
      />

      <Section title="Services and Deliverables" maxWidth="lg">
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
          <Table sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow sx={{ bgcolor: "action.hover" }}>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    CLIENT PROFILE
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    COMMON GAPS
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    PRIMARY SERVICES
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="text.primary">
                    PROPOSED TIER
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deliverablesRows.map((row) => (
                <TableRow
                  key={row.profile}
                  sx={{ "& td": { verticalAlign: "top" } }}
                >
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {row.profile}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      component="ul"
                      sx={{ m: 0, pl: 2.2, "& li": { mb: 0.5 } }}
                    >
                      {row.gaps.map((gap) => (
                        <li key={gap}>
                          <Typography variant="body2" color="text.secondary">
                            {gap}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      component="ul"
                      sx={{ m: 0, pl: 2.2, "& li": { mb: 0.5 } }}
                    >
                      {row.services.map((service) => (
                        <li key={service}>
                          <Typography variant="body2" color="text.secondary">
                            {service}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {row.tier}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </>
  );
}
