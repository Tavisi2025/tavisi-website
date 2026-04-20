import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CTAButton, CTABand } from "@/components/common";

export const metadata = {
  title:
    "Tavisi Partners | GTM Strategy, Sales Operations & Executive Advisory",
  description:
    "Bringing clarity and simplicity to go-to-market execution. GTM strategy, sales operations & planning, and executive advisory for mid-market and SMB leadership.",
};

export default function HomePage() {
  return (
    <>
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, px: 2 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 260, sm: 340, md: 420 },
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Image
                src="/assets/images/hero-team-collaboration.jpg"
                alt="Team collaboration and business growth"
                fill
                sizes="(max-width: 900px) 100vw, 52vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>

            <Box>
              <Typography
                variant="h1"
                component="h1"
                sx={{ mb: 2, maxWidth: 640, fontSize: { xs: "2rem", md: "2.8rem" } }}
              >
                Unlock predictable revenue growth by fixing GTM misalignment and
                forecast inaccuracy.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, maxWidth: 620, lineHeight: 1.7 }}
              >
                We help mid-market leadership teams fix GTM misalignment, improve
                forecast accuracy, and unlock revenue growth. and transformation
                problems.
              </Typography>
              <CTAButton href="/contact"/>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          px: 2,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: { xs: 3, md: 4 } }}>
            Who do we help
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2, md: 3 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 220, sm: 280, md: 360 },
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Image
                src="/assets/images/growth-table.png"
                alt="Growth table examples"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 220, sm: 280, md: 360 },
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Image
                src="/assets/images/examples.png"
                alt="Client use case examples"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <CTABand />
    </>
  );
}
