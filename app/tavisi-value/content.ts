const ICONS = '/assets/icons/tavisi-value';

/** Deep cyan used by the dark summary bars in the Figma design (same as light `primary.dark`). */
export const SUMMARY_BAR_BG = '#083344';
/** Light cyan label/icon color on the summary bars. */
export const SUMMARY_BAR_ACCENT = '#67e8f9';

export const HERO = {
  headline: 'Tavisi Value',
  subheading:
    'How Tavisi drives value for teams ready to scale—with clarity, structure, and execution you can measure.',
} as const;

export const VALUE_MODEL_HEADING = {
  eyebrow: 'The Mechanism / Methodology',
  title: 'Tavisi Value Model',
  subtitle:
    'Tavisi Partners applies quantum-inspired decision frameworks to solve complex enterprise growth and transformation problems.',
  tagline: 'Data-driven  ·  Scalable  ·  Transformation-focused',
} as const;

export const TIERS = [
  {
    label: 'Tier 1 · Annual Revenue',
    range: '$10M – $25M',
    accent: '#1e3a8a',
    gapIcon: `${ICONS}/tier1-gap.svg`,
    serviceIcon: `${ICONS}/tier1-service.svg`,
    gaps: [
      'No GTM',
      'No detailed customer discovery',
      'No enterprise intelligence analysis',
      'Operational chaos',
      'Stagnant growth due to founder-led sales',
    ],
    services: ['GTM strategy', 'Demand generation', 'Growth plan'],
    proposedTier: 'Foundations',
  },
  {
    label: 'Tier 2 · Annual Revenue',
    range: '$26M – $50M',
    accent: '#b45309',
    gapIcon: `${ICONS}/tier2-gap.svg`,
    serviceIcon: `${ICONS}/tier2-service.svg`,
    gaps: [
      'Unstructured GTM',
      'Unstructured demand management',
      'No enterprise intelligence analysis',
      'Lack of probabilistic approach',
    ],
    services: ['GTM refinement', 'Demand generation', 'Advisory and training', 'Revenue growth'],
    proposedTier: 'Growth Engine + Scale Platform',
  },
  {
    label: 'Tier 3 · Annual Revenue',
    range: '$51M – $100M',
    accent: '#9f1239',
    gapIcon: `${ICONS}/tier3-gap.svg`,
    serviceIcon: `${ICONS}/tier3-service.svg`,
    gaps: [
      'Lack of consistent process',
      'Lack of intelligent execution on demand',
      'Misaligned GTM',
      'RevOps is an admin task, not an intelligent layer',
    ],
    services: ['Enterprise intelligence', 'Demand management', 'Growth plan and strategic advisory'],
    proposedTier: 'Scale Platform + Quantum Edge',
  },
] as const;

export const MISSIONS_HEADING = {
  eyebrow: 'Our Current Missions',
  title: 'Our Current Missions',
  subtitle: 'Driving enterprise adoption through strategic starter packs and trials.',
} as const;

export const MISSIONS = [
  {
    title: 'SAP BDC Starter Pack',
    tag: 'For Owners',
    body: 'Starter pack for customers who own SAP Business Data Cloud consumption units.',
    status: 'Consumption Unit Enabled',
    accent: '#1d4ed8',
    icon: `${ICONS}/mission-sap-owners.svg`,
  },
  {
    title: 'SAP BDC Starter Pack',
    tag: 'For Evaluators',
    body: 'Starter pack for customers who are evaluating SAP Business Data Cloud.',
    status: 'Evaluation Phase',
    accent: '#1e3a8a',
    icon: `${ICONS}/mission-sap-evaluators.svg`,
  },
  {
    title: 'Healthcare AI Workforce Tool',
    tag: '60 Days Free Trial',
    body: 'Healthcare AI-enabled, TJC-compliant workforce planning tool.',
    status: 'TJC Compliant · 60 Days Free',
    accent: '#0f766e',
    icon: `${ICONS}/mission-healthcare-ai.svg`,
  },
  {
    title: 'Databricks Starter Pack',
    tag: 'For Evaluators',
    body: 'Starter pack for customers evaluating Databricks.',
    status: 'Lakehouse Evaluation',
    accent: '#c2410c',
    icon: `${ICONS}/mission-databricks.svg`,
  },
  {
    title: 'AI Automation Tool',
    tag: '30 Days Trial',
    body: 'Trial for the AI Automation tool.',
    status: '30 Days Trial',
    accent: '#0f172a',
    icon: `${ICONS}/mission-ai-automation.svg`,
  },
] as const;

export const PARTNERS_HEADING = {
  titleStart: 'Our Current ',
  titleAccent: 'Alliance Partners',
  titleEnd: ' / Customers Profile',
  subtitle:
    'A trusted ecosystem of midsize and startup partners driving ERP, Data, Healthcare & AI innovation across regions.',
} as const;

export const PARTNERS = [
  {
    title: 'Midsize ERP & Data Automation',
    body: 'A midsize ERP and data automation company based in PA.',
    location: 'PA',
    icon: `${ICONS}/partner-erp-data.svg`,
  },
  {
    title: 'Midsize SAP ERP Gold Partner',
    body: 'A midsize SAP ERP Gold Partner based in NJ.',
    location: 'NJ',
    icon: `${ICONS}/partner-sap-gold.svg`,
  },
  {
    title: 'Midsize Healthcare Company',
    body: 'A midsize healthcare company based in PA.',
    location: 'PA',
    icon: `${ICONS}/partner-healthcare.svg`,
  },
  {
    title: 'Small SAP ERP Company',
    body: 'A small SAP ERP company based in India.',
    location: 'India',
    icon: `${ICONS}/partner-sap-small.svg`,
  },
  {
    title: 'Contract Value Intelligence Start-up',
    body: 'A start-up company in Contract Value Intelligence based in PA.',
    location: 'PA',
    icon: `${ICONS}/partner-contract-intel.svg`,
  },
  {
    title: 'AI Decision Intelligence Start-up',
    body: 'A start-up company in AI-powered Decision Intelligence for Procurement based in India.',
    location: 'India',
    icon: `${ICONS}/partner-ai-decision.svg`,
  },
] as const;

export const PARTNER_NETWORK = {
  regions: 'Regions: US (PA, NJ)  •  India',
  network: 'Global Alliance Network  ·  6 Partners',
  mapPinIcon: `${ICONS}/map-pin.svg`,
  mapPinLightIcon: `${ICONS}/map-pin-light.svg`,
  networkIcon: `${ICONS}/network.svg`,
} as const;

export const OUTCOME_HEADING = {
  eyebrow: 'Outcome Example',
  titleStart: 'High-Growth SMBs ',
  titleAccent: '($5M–$50M Revenue)',
  subtitle:
    'Many companies in the $15M–$25M range still run revenue planning in spreadsheets — with forecast accuracy around 50–60% and sales cycles of 9–12 months to first revenue.',
} as const;

export const TARGET_OUTCOMES = {
  title: 'Target outcomes',
  meta: 'Within 12–18 months',
  metrics: [
    { label: 'Forecast accuracy', value: '70–75%', note: 'Up from 50–60% on spreadsheets' },
    { label: 'Pipeline conversion', value: '+20–30%', note: 'Uplift in stage-to-stage conversion' },
    { label: 'Time to first revenue', value: '6–8 mo', note: 'Down from 9–12 months' },
    { label: 'Onboarding to quota', value: '−25–40%', note: 'Faster ramp for every new rep' },
  ],
} as const;

export const APPROACH = {
  title: 'How Tavisi gets there',
  meta: 'Business-first, 5 steps',
  steps: [
    { title: 'Business-first hypothesis', body: 'Start from the revenue problem, not the tool.' },
    { title: 'Lean diagnostic', body: 'Find where pipeline and forecast break.' },
    { title: 'GTM design', body: 'Shape segments, motions and coverage.' },
    { title: 'Automation', body: 'Wire CRM and sales-ops to the design.' },
    { title: 'Operating cadence', body: 'Run it weekly with clear owners.' },
  ],
} as const;

export const OUTCOME_SUMMARY = {
  body: 'Our recommended outcome range for founder-driven, high-growth businesses that need a structured GTM and sales-ops foundation.',
  label: 'Capital-ready GTM engine',
  value: 'Toward $50M+ ARR',
} as const;

export const CTA = {
  title: 'Turn insight into revenue',
  subtitle: 'Discuss where value is leaking in your GTM—and what to fix first.',
} as const;
