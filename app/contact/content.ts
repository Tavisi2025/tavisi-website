const ICONS = '/assets/icons/contact';

export const INTRO = {
  title: 'Contact Us',
  body: 'Email, call, or complete the form to learn how Tavisi Partners can help with your GTM and growth challenges.',
  supportLabel: 'Customer Support',
  mailIcon: `${ICONS}/mail.svg`,
  phoneIcon: `${ICONS}/phone.svg`,
} as const;

export const FORM = {
  title: 'Get in Touch',
  subtitle: 'Fill out the form and our team will get back to you shortly.',
  submit: 'Send message',
} as const;

export const VALUE_DISCOVERY_HEADING = {
  eyebrow: 'Tavisi Partners',
  title: 'Create Clarity. Accelerate Decisions. Repeat the Value.',
} as const;

/** Light brand tint behind the Value Discovery band (Figma: rgba(14,116,144,0.03)). */
export const VALUE_DISCOVERY_BG = {
  light: 'rgba(14,116,144,0.03)',
  dark: 'rgba(6,182,212,0.04)',
} as const;

export const PILLARS = [
  {
    tag: 'Gaps Driving Urgency',
    title: 'Pillar 1: The Shelfware Trap',
    accent: '#be123c',
    icon: `${ICONS}/pillar-shelfware.svg`,
    bullet: `${ICONS}/bullet-rose.svg`,
    points: ['Paid licenses sitting unused', 'ERP & data tools bought but never adopted'],
    mission: 'Your mission: SAP BDC & Databricks Starter Packs to activate shelfware',
  },
  {
    tag: 'Gaps Driving Urgency',
    title: 'Pillar 2: The Acquisition Blind Spot',
    accent: '#b45309',
    icon: `${ICONS}/pillar-acquisition.svg`,
    bullet: `${ICONS}/bullet-amber.svg`,
    points: [
      'Before you buy — prove value with one or two use cases, then scale',
      'Manage risk by phasing out your operational cost',
    ],
    mission: 'Your mission: 15-Minute Value Discovery to pinpoint 2–3 loss areas',
  },
  {
    tag: 'Gaps Driving Urgency',
    title: 'The Try-Before-You-Buy Solution',
    accent: '#0e7490',
    icon: `${ICONS}/pillar-try-before-buy.svg`,
    bullet: `${ICONS}/bullet-teal.svg`,
    points: ['Stop buying before proving value', '60-day Healthcare AI + 30-day AI Automation + Starter Packs'],
    mission: 'De-risk execution, prove ROI fast',
  },
] as const;

export const DISCOVERY_BANNER = {
  title: 'Get a 15-Minute Value Discovery',
  body: 'Walk away with 2–3 specific areas where value is being lost — no commitment required.',
  cta: 'Book Your 15-Minute Value Discovery',
  href: '#contact-form',
  bg: '#083344',
  arrowIcon: `${ICONS}/arrow-right.svg`,
} as const;
