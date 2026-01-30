import { PageHero, Section, CTABand, AdvisorySupportBlock, CurrentProjectsBlock } from '@/components/common';
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const metadata = {
  title: 'Tavisi Partners | GTM Strategy, Sales Operations & Executive Advisory',
  description:
    'Bringing clarity and simplicity to go-to-market execution. GTM strategy, sales operations & planning, and executive advisory for mid-market and SMB leadership.',
};

const CURRENT_PROJECTS = [
  {
    text: 'An online jewelry retail shop eyeing to draw customers at scale to drive proactive demand for their designer products.',
    image: '/assets/images/project-jewelry-retail.jpg',
    imageAlt: 'Jewelry retail project',
    authorName: 'Samantha Johnson',
    authorTitle: 'CEO and Co-founder of ABC Company',
  },
  {
    text: 'DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on.',
    image: '/assets/images/project-product-design.jpg',
    imageAlt: 'Product design project',
    authorName: 'Paw Patt',
    authorTitle: 'Product Designer at Lightdash',
  },
  {
    text: 'A multifaceted technology company driving multi-channel go-to-market to drive demand for AI driven resource and workflow management.',
    image: '/assets/images/project-technology-company.jpg',
    imageAlt: 'Technology company project',
    authorName: 'James Chen',
    authorTitle: 'VP of Growth, TechFlow',
  },
  {
    text: 'Tavisi Partners has provided our startup with significant leverage. Their work is exceptionally professional, and the team is always attentive to our needs, with impressively fast turnaround times.',
    image: '/assets/images/project-startup-advisory.jpg',
    imageAlt: 'Startup advisory project',
    authorName: 'Patrick Nawrocki',
    authorTitle: 'UX Manager at Superhabits',
  },
];

const ADVISORY_SUPPORT = [
  {
    title: 'Operational Excellence',
    description:
      'Accelerate revenue with tailored Go-to-Market strategy, sales operations design, and executive advisory. We reduce commercial friction and equip leadership teams with the structure they need to grow with confidence.',
    buttonLabel: 'Learn More',
    buttonHref: '/contact',
    icon: <SpeedIcon />,
  },
  {
    title: 'Market Readiness',
    description:
      'Tailored, prescriptive solutions specific to your business model—rolled out quickly and built to last. Drive revenue and open additional revenue lanes.',
    points: [
      'SAP migration consultation is available for S/4HANA Public and S/4HANA Private Cloud. These are best practices services used in the beginning of the project phase to help and support the customer plan their migration in a cost-effective manner.',
    ],
    buttonLabel: 'Learn More',
    buttonHref: '/contact',
    icon: <PublicIcon />,
  },
  {
    title: 'Performance Insights',
    description:
      'A transparent engagement model so you can monitor, measure, and make quick decisions. Our prescriptive approach helps you grow with clarity.',
    buttonLabel: 'Learn More',
    buttonHref: '/contact',
    icon: <AnalyticsIcon />,
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        headline="Accelerate Your Growth"
        subheading="Turning strategy into impact—Tavisi Partners drives growth, simplifies operations, and ignites business potential."
        showCta
        layout="split"
        imageSrc="/assets/images/hero-team-collaboration.jpg"
        imageAlt="Team collaboration and business growth"
        ctaLabel="Get started"
      />

      <Section title="Advisory Support" alternate hideDivider>
        <AdvisorySupportBlock items={ADVISORY_SUPPORT} />
      </Section>

      <Section alternate>
        <CurrentProjectsBlock projects={CURRENT_PROJECTS} title="Our Current Projects" />
      </Section>

      <CTABand />
    </>
  );
}
