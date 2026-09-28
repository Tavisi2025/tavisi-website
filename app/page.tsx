import { CTABand } from "@/components/common";
import {
  AboutSection,
  EcosystemSection,
  HomeHero,
  ProblemStatementsSection,
  WhoWeServeSection,
} from "./_home/HomeSections";

export const metadata = {
  title:
    "Tavisi Partners | GTM Strategy, Sales Operations & Executive Advisory",
  description:
    "From strategy to execution through one curated partner ecosystem. ERP modernization, data strategy, AI-enabled workflows and fractional GTM for midmarket leadership teams.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ProblemStatementsSection />
      <EcosystemSection />
      <WhoWeServeSection />
      <CTABand />
    </>
  );
}
