import { CTABand, PageHero } from "@/components/common";
import { CTA, HERO } from "./content";
import {
  MissionsSection,
  OutcomeSection,
  PartnersSection,
  ValueModelSection,
} from "./TavisiValueSections";

export const metadata = {
  title: "Tavisi Value | Tavisi Partners",
  description:
    "The Tavisi Value Model: revenue-tier GTM gaps and services, current missions, alliance partners, and the outcomes high-growth SMBs can expect.",
};

export default function TavisiValuePage() {
  return (
    <>
      <PageHero
        headline={HERO.headline}
        subheading={HERO.subheading}
        showCta={false}
        maxWidth="md"
      />
      <ValueModelSection />
      <MissionsSection />
      <PartnersSection />
      <OutcomeSection />
      <CTABand title={CTA.title} subtitle={CTA.subtitle} />
    </>
  );
}
