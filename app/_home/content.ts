export const HERO = {
  headline: 'From strategy to execution — through one curated partner ecosystem.',
  body: 'Tavisi connects customers with the right technology, expertise and delivery capabilities through a curated partner ecosystem—providing a flexible, practical and cost-effective path from strategy to execution.',
  imageSrc: '/assets/images/hero-team-collaboration.jpg',
  imageAlt: 'Team collaboration and business growth',
} as const;

export const ABOUT = {
  eyebrow: 'About Tavisi Partners',
  title: 'Connecting technology decisions to measurable business outcomes.',
  paragraphs: [
    'Tavisi Partners helps midmarket organizations evaluate ERP modernization, data strategy, AI-enabled healthcare workflows, and enterprise technology investments. Our work is designed to connect technology decisions to operating-model improvement, financial impact, and execution risk.',
    'We bring an efficient foundation to drive a strong fractional go-to-market, demand generation and alliance-sales portfolio model.',
  ],
  focusAreas: [
    'ERP Modernization',
    'Data Strategy',
    'AI-enabled Healthcare',
    'Enterprise Technology',
    'Fractional GTM',
  ],
} as const;

export const PROBLEMS_HEADING = {
  eyebrow: 'What keeps leaders up at night',
  title: '6 Core Problem Statements and ',
  titleAccent: 'Key Strategic Gaps',
  subtitle: 'The interconnected challenges we help midmarket leadership teams solve.',
  summary:
    'Addressing these six interconnected and complex challenges across infrastructure, data, talent, technology, security, development, and global strategy is critical to unlocking growth, efficiency, and innovation.',
} as const;

export const PROBLEMS = [
  {
    title: 'Legacy Drag',
    icon: '/assets/icons/home/problem-legacy-drag.svg',
    questions: [
      'Why are 70% of IT budgets still consumed by maintaining outdated legacy systems instead of fueling innovation?',
    ],
  },
  {
    title: 'Data Chaos',
    icon: '/assets/icons/home/problem-data-chaos.svg',
    questions: [
      'How much revenue is lost when critical data sits siloed, uncleaned, and unused for decision-making?',
    ],
  },
  {
    title: 'Cybersecurity',
    icon: '/assets/icons/home/problem-cybersecurity.svg',
    questions: [
      'How exposed is your critical digital infrastructure to complex, evolving ransomware and breach scenarios?',
      'Are you prioritizing rapid-response security protocols — and do you know your weakest link?',
    ],
  },
  {
    title: 'Software Development',
    icon: '/assets/icons/home/problem-software-development.svg',
    questions: [
      'Can your teams balance the race for speed-to-market with the need for stable, bug-free, scalable code and technical-debt reduction?',
      'Do you have visibility into deployment bottlenecks, and is the current release cycle too long?',
    ],
  },
  {
    title: 'Offshoring',
    icon: '/assets/icons/home/problem-offshoring.svg',
    questions: [
      'Are the cost-savings of offshoring negated by poor quality, cultural misalignment, long feedback loops, and time-zone delays?',
      'How effectively are you bridging communication gaps to maintain strategic alignment?',
    ],
  },
  {
    title: 'AI without ROI',
    icon: '/assets/icons/home/problem-ai-without-roi.svg',
    questions: [
      'How much investment is made in complex AI projects that fail to automate tasks efficiently or deliver measurable financial impact?',
      'Are your AI workflows creating new silos and hidden costs instead of clear, bottom-line returns?',
    ],
  },
] as const;

export const ECOSYSTEM_HEADING = {
  eyebrow: 'How we bring the solutions together',
  title: 'Integrated AI-Driven Ecosystem',
  subtitle:
    'Our Master Solution Mapping Matrix connects each core challenge to an automated solution and a measurable business outcome.',
} as const;

export const SOLUTION_MATRIX_COLUMNS = [
  { label: 'Core Challenge', width: 240 },
  { label: 'Strategic Gap / Pain Point', width: 250 },
  { label: 'Automated Solution Mapping', width: 360 },
  // Fixed width so the column keeps a readable size when the table scrolls on small screens.
  { label: 'Key Business Outcome', width: 250 },
] as const;

export const SOLUTION_MATRIX_ROWS = [
  {
    challenge: 'Legacy Drag',
    gap: '70% IT budget in maintenance',
    solution: 'Process mining & API containerization',
    outcome: 'Reclaimed innovation budget',
  },
  {
    challenge: 'Data Chaos',
    gap: 'Siloed, uncleaned data',
    solution: 'Centralized warehouse & automated cataloging',
    outcome: 'Real-time executive decision support',
  },
  {
    challenge: 'Cybersecurity',
    gap: 'Evolving ransomware risk',
    solution: 'Automated Zero-Trust & rapid incident response',
    outcome: 'Resilient digital infrastructure',
  },
  {
    challenge: 'Software Dev',
    gap: 'Slow releases & tech debt',
    solution: 'Automated DevSecOps & pipeline observability',
    outcome: '3.5x faster release velocity',
  },
  {
    challenge: 'Offshoring',
    gap: 'Quality & alignment gaps',
    solution: 'Unified automated quality gates & governance',
    outcome: 'Seamless global execution',
  },
  {
    challenge: 'AI without ROI',
    gap: 'Unmeasurable AI spend',
    solution: 'Value-first workflow automation & ROI tracking',
    outcome: 'Quantifiable bottom-line returns',
  },
] as const;

export const IMPACT_STATS = [
  { value: '65%', label: 'Legacy Cost Reduction' },
  { value: '3.5x', label: 'Release Velocity' },
  { value: '100%', label: 'Data Governance Lineage' },
  { value: '4.2x', label: 'Measurable AI ROI' },
] as const;

export const AUDIENCE_HEADING = {
  eyebrow: 'Target Audience',
  title: 'Who We Serve',
} as const;

export const AUDIENCES = [
  {
    title: 'Midmarket Organizations',
    body: 'Actively navigating complex technology landscapes to scale efficiently.',
    icon: '/assets/icons/home/audience-midmarket.svg',
  },
  {
    title: 'Operations & Tech Leaders',
    body: 'Charged with evaluating ERP modernization, data strategy, AI-enabled workflows, and enterprise technology investments.',
    icon: '/assets/icons/home/audience-operations-tech.svg',
  },
  {
    title: 'Financial Decision Makers',
    body: 'Focused on connecting major technology investments directly to measurable financial impact.',
    icon: '/assets/icons/home/audience-financial.svg',
  },
  {
    title: 'Healthcare Leadership Teams',
    body: 'Seeking to balance operating-model improvement with clear, strategic management of execution risk while hiring and retaining efficient healthcare staff.',
    icon: '/assets/icons/home/audience-healthcare.svg',
  },
] as const;
