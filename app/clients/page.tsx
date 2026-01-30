import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PageHero, Section, ProfileCard } from "@/components/common";

export const metadata = {
  title: "Clients | Tavisi Partners",
  description:
    "Ideal client profiles, industries served, and how we work with mid-market and SMB leadership.",
};

const IDEAL_PROFILES = [
  {
    title: "Mid-market CEOs & CROs",
    body: "Leaders scaling GTM, entering new markets, or turning around underperforming sales. You need clarity and structure without a big-consultancy footprint.",
  },
  {
    title: "SMB Sales Leaders",
    body: 'Heads of sales building the first "real" sales org—process, systems, and a playbook that can scale with the business.',
  },
  {
    title: "PE- or growth-backed companies",
    body: "Teams under pressure to hit plan, improve unit economics, or integrate acquisitions. You need an operator's perspective, not just slides.",
  },
];

const INDUSTRIES = [
  "B2B SaaS and technology",
  "Professional and business services",
  "Healthcare and life sciences (commercial)",
  "Financial services and fintech",
  "Industrial and manufacturing",
];

const OUTCOMES = [
  "Defined and aligned GTM strategy and playbook",
  "Quota, territory, and capacity model that scales",
  "Pipeline and forecast process leaders trust",
  "Board and investor narratives that reflect execution",
  "Sales org and GTM transformation led from the top",
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        headline="Our Clients"
        subheading="We proudly serve mid-market and SMB clients across various sectors, focusing on SaaS companies with revenues of up to $50 million."
        showCta
        maxWidth="md"
      />
    </>
  );
}
