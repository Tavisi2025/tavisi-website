export type ServiceItem = {
  title: string;
  bullets: string[];
};

export const GTM_ITEMS: ServiceItem[] = [
  {
    title: 'Market & Customer Intelligence',
    bullets: [
      'Deep assessment of the market landscape, competitive positioning, and unmet customer needs.',
      'Development of actionable customer segmentation and prioritization models.',
      'Identification of high-value use cases and whitespace opportunities to inform strategic bets.',
    ],
  },
  {
    title: 'Value Proposition & Differentiation Design',
    bullets: [
      'Crafting clear, compelling value propositions tailored to each customer segment.',
      'Translating complex capabilities (e.g., digital transformation, automation, analytics) into simple, business-outcome messaging.',
      'Creating standardized pitching frameworks for Sales, Marketing, and Executive teams.',
    ],
  },
  {
    title: 'Commercial Operating Model & GTM Architecture',
    bullets: [
      'Designing the right GTM model: direct sales, channel/partner-led, hybrid, or ecosystem-based.',
      'Role definition for field, inside, partner, customer success, and solution teams.',
      'Capacity and coverage modeling to align resources to opportunity size.',
    ],
  },
  {
    title: 'Sales Process Optimization & Pipeline Design',
    bullets: [
      'Creating end-to-end sales motions aligned with the buyer journey.',
      'Standardizing qualification (MEDDPICC/BANT), forecasting cadences, and inspection routines.',
      'Pipeline stage redesign to improve conversion rates and reduce cycle time.',
    ],
  },
  {
    title: 'Account Prioritization & Territory Planning',
    bullets: [
      'Developing data-driven account scoring models using firmographics, intent, and product penetration.',
      'Territory design that optimizes quotas, account assignments, and field coverage.',
      'Building enterprise and strategic account planning frameworks with cross-functional alignment.',
    ],
  },
  {
    title: 'Pricing, Packaging & Monetization Strategy',
    bullets: [
      'Evaluating competitive pricing models and customer value drivers.',
      'Designing tiered offerings, bundles, and consumption-based models for unified outreach.',
      'Designing omnichannel HCP/enterprise customer journeys (email, digital, field, webinars, events).',
      'Implementing compliant, scalable engagement tools (CRM, outreach platforms, ABM tools).',
    ],
  },
  {
    title: 'Sales Enablement & Field Readiness',
    bullets: [
      'Designing onboarding curricula, skill development paths, and product training.',
      'Building playbooks, competitive briefs, objection handling guides, and demo scripts.',
      'Launching speaker programs or field-facing initiatives across Medical, Market Access, Sales.',
    ],
  },
  {
    title: 'GTM Analytics & Performance Measurement',
    bullets: [
      'KPI framework creation—from top-of-funnel metrics to revenue and retention outcomes.',
      'Designing dashboards for senior leadership, Sales Ops, and Sales leaders.',
      'Running diagnostic reviews to identify bottlenecks and accelerate productivity.',
    ],
  },
  {
    title: 'Execution Roadmaps & Leadership Alignment',
    bullets: [
      'Creating multi-quarter GTM roadmaps aligned to pipeline, product readiness, and revenue targets.',
      'Facilitating cross-functional alignment between Sales, Marketing, Product, Medical, and Finance.',
      'Providing governance models to ensure accountability and measurable progress.',
    ],
  },
];

export const SUMMARY_BULLETS = [
  'Market & customer intelligence',
  'GTM design & commercial model architecture',
  'Sales process optimization and pipeline improvement',
  'Pricing & monetization strategy',
  'Multi-channel customer engagement & field enablement',
  'GTM analytics, KPIs, and performance dashboards',
  'End-to-end execution roadmaps that drive measurable business outcomes',
];

export const SALES_OPS_ITEMS: ServiceItem[] = [
  {
    title: 'Sales Strategy Enablement',
    bullets: [
      'Sales model design (inside vs field vs hybrid)',
      'Territory and account segmentation',
      'Role clarity and capacity modeling',
      'Quota-setting methodology and coverage models',
    ],
  },
  {
    title: 'Sales Planning & Forecasting',
    bullets: [
      'Annual and quarterly sales planning',
      'Bottom-up forecasting models',
      'Pipeline health and gap analysis',
      'Scenario planning and sensitivity analysis',
    ],
  },
  {
    title: 'Territory, Quota & Incentive Design',
    bullets: [
      'Territory mapping and white space analysis',
      'Quota allocation and fairness modeling',
      'Compensation plan design & SPIFFs',
      'Incentive alignment with business objectives',
    ],
  },
  {
    title: 'Pipeline & Deal Management',
    bullets: [
      'Pipeline stage definitions and exit criteria',
      'Deal inspection frameworks',
      'Win/loss analysis',
      'Sales velocity optimization',
    ],
  },
  {
    title: 'CRM & Sales Technology Optimization',
    bullets: [
      'CRM selection, implementation, and cleanup (Salesforce, HubSpot, etc.)',
      'Opportunity hygiene and reporting standards',
      'Sales tech stack rationalization',
      'Automation and workflow optimization',
    ],
  },
  {
    title: 'Sales Analytics & Performance Reporting',
    bullets: [
      'KPI definition and dashboard design',
      'Rep productivity analysis',
      'Funnel conversion metrics',
      'Executive and board-ready reporting',
    ],
  },
];

export const COMMERCIAL_EXEC_ITEMS: ServiceItem[] = [
  {
    title: "Revenue Process Design",
    bullets: [
      "Lead-to-cash process mapping",
      "Alignment across Sales, Marketing, Finance, and Customer Success",
      "Handoff and SLA definition",
      "Deal approval and governance models",
    ],
  },
  {
    title: "Pricing & Packaging Strategy",
    bullets: [
      "Pricing structure and discount frameworks",
      "Packaging and bundling strategies",
      "Deal desk design and enablement",
      "Margin protection and approval workflows",
    ],
  },
  {
    title: "Sales Enablement & Execution Readiness",
    bullets: [
      "Playbooks and messaging frameworks",
      "ICP and persona definition",
      "Competitive positioning",
      "Sales onboarding and ramp frameworks",
    ],
  },
  {
    title: "Go-To-Market Execution Support",
    bullets: [
      "GTM launch execution",
      "New product or market rollout",
      "Partner/channel execution models",
      "Field execution cadence (QBRs, MBRs)",
    ],
  },
  {
    title: "Sales Cadence & Operating Rhythm",
    bullets: [
      "Weekly/monthly execution cadence",
      "Pipeline reviews and forecast calls",
      "Performance management frameworks",
      "Leadership operating dashboards",
    ],
  },
  {
    title: "Revenue Predictability & Scale Readiness",
    bullets: [
      "Process maturity assessments",
      "Scaling readiness for growth-stage companies",
      "International or multi-segment expansion support",
      "Pre-fundraising or pre-exit sales infrastructure",
    ],
  },
];
export const ADVISORY_FRAMEWORK: ServiceItem[] = [
  {
    title: "Start with a Business-First Transformation Hypothesis",
    bullets: [
      "Define the business outcomes the platform must enable (operational efficiency, planning visibility, revenue scale, cost reduction) before selecting or migrating technology.",
    ],
  },
  {
    title: "Run a Lean System & Process Diagnostic (4–6 weeks)",
    bullets: [
      "Assess the current operating model, system landscape, and process dependencies to identify transformation priorities and risk areas.",
    ],
  },
  {
    title: "Application & Customization Rationalization",
    bullets: [
      "Evaluate existing custom logic, integrations, and extensions to determine what should be retired, modernized, or standardized before migration.",
    ],
  },
  {
    title: "Cloud Platform & Deployment Strategy",
    bullets: [
      "Use a structured decision framework to determine the optimal deployment model:",
      "Public cloud",
      "Private cloud",
      "Hybrid architecture",
    ],
  },
  {
    title: "Define a Phased Transformation Roadmap",
    bullets: [
      "Avoid high-risk 'big bang' migrations. Establish a phased modernization path aligned with business priorities.",
    ],
  },
  {
    title: "Commercial & Vendor Strategy",
    bullets: [
      "Ensure the platform program is financially optimized, including vendor negotiation, licensing strategy, and commercial alignment.",
    ],
  },
  {
    title: "Minimum Viable Enterprise Platform",
    bullets: [
      "Define a fit-to-standard core platform that enables faster deployment while reducing unnecessary complexity.",
    ],
  },
  {
    title: "Governance & Program Architecture",
    bullets: [
      "Establish decision governance, architectural standards, and transformation KPIs from day one.",
    ],
  },
  {
    title: "Automation & Data Readiness",
    bullets: [
      "Introduce automation early across:",
      "Testing",
      "Data migration",
      "Integration orchestration",
    ],
  },
  {
    title: "Operating Model & Support Transformation",
    bullets: [
      "Redesign the post-implementation support model to move from reactive IT support to proactive platform operations and continuous optimization.",
    ],
  },
];
