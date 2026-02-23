import { PageHero, CTABand } from "@/components/common";
import {
  GTM_ITEMS,
  SALES_OPS_ITEMS,
  COMMERCIAL_EXEC_ITEMS,
  SUMMARY_BULLETS,
  SAP_ADVISORY_STEPS,
} from "./data";
import { ServicePageView } from "./ServicePageView";

export const metadata = {
  title: "Services | Accordion Layout | Tavisi Partners",
  description:
    "All services: Go-To-Market Strategy & Design, Sales Operations, Commercial Execution, and SAP Advisory - presented in accordion layout.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero headline="Services" showCta maxWidth="md" />
      <ServicePageView
        gtmItems={GTM_ITEMS}
        salesOpsItems={SALES_OPS_ITEMS}
        commercialExecItems={COMMERCIAL_EXEC_ITEMS}
        summaryBullets={SUMMARY_BULLETS}
        sapSteps={SAP_ADVISORY_STEPS}
      />
      <CTABand
        title="Accelerate your GTM execution"
        subtitle="Discover a structured, pragmatic approach to GTM strategy, sales operations, and commercial execution. Let's discuss how we can help."
      />
    </>
  );
}
