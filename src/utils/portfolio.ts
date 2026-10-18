/**
 * Utility functions and data definitions for Min Thant Kyaw's portfolio
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
] as const;

export const DEFAULT_SCROLL_THRESHOLD = 30;

/**
 * Determines whether the navbar should display its translucent glass state
 * based on current vertical scroll position.
 */
export function isNavbarScrolled(scrollY: number, threshold = DEFAULT_SCROLL_THRESHOLD): boolean {
  return scrollY > threshold;
}

export interface ProfileInfo {
  readonly name: string;
  readonly role: string;
  readonly greeting: string;
  readonly availabilityStatus: string;
  readonly isAvailable: boolean;
  readonly headingLead: string;
  readonly headingHighlight: string;
  readonly description: string;
  readonly location: {
    readonly label: string;
    readonly value: string;
  };
  readonly age: {
    readonly label: string;
    readonly value: number;
  };
  readonly stats: readonly {
    readonly value: string;
    readonly label: string;
  }[];
}

export const PROFILE_INFO: ProfileInfo = {
  name: "Min Thant Kyaw",
  greeting: "Hello, I'm",
  role: "WEB DEVELOPER",
  availabilityStatus: "AVAILABLE FOR WORK",
  isAvailable: true,
  headingLead: "Building modern web experiences with",
  headingHighlight: "clean and scalable code.",
  description:
    "I'm a developer focused on building modern web applications with React, TypeScript, Node.js and modern web technologies — using AI-assisted development to learn faster, solve problems, and build better solutions.",
  location: {
    label: "Location",
    value: "Yangon, Myanmar",
  },
  age: {
    label: "Age",
    value: 25,
  },
  stats: [
    { value: "2023", label: "In tech since" },
    { value: "30+", label: "Projects" },
    { value: "5+", label: "Industries" },
  ],
} as const;

/**
 * Calculates staggered animation delays for hero entrance sequence.
 */
export function calculateEntranceDelay(stepIndex: number, baseDelayMs = 0, stepIncrementMs = 100): number {
  if (stepIndex < 0) return 0;
  return baseDelayMs + stepIndex * stepIncrementMs;
}

export const EXPERTISE_SECTION = {
  label: 'WHAT I DO',
  title: 'Expertise',
  description:
    'Building reliable digital experiences across backend systems, websites, interfaces and infrastructure.',
} as const;

export type ExpertiseVisual = 'backend' | 'wordpress' | 'frontend' | 'server';

export interface ExpertiseItem {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly visual: ExpertiseVisual;
  readonly featured: boolean;
}

export const EXPERTISE_ITEMS: readonly ExpertiseItem[] = [
  {
    id: 'backend',
    index: '01',
    title: 'Backend Development',
    description:
      'Building structured backend systems, REST APIs, authentication, business logic and database-driven applications.',
    visual: 'backend',
    featured: true,
  },
  {
    id: 'wordpress',
    index: '02',
    title: 'WordPress Development',
    description:
      'Building, customizing and maintaining WordPress websites, themes, plugins and business-focused solutions.',
    visual: 'wordpress',
    featured: false,
  },
  {
    id: 'frontend',
    index: '03',
    title: 'Frontend Development',
    description:
      'Creating responsive, interactive and user-focused web interfaces with clean and maintainable frontend architecture.',
    visual: 'frontend',
    featured: false,
  },
  {
    id: 'server',
    index: '04',
    title: 'Server & Deployment',
    description:
      'Deploying web applications, configuring servers, managing environments and maintaining reliable production systems.',
    visual: 'server',
    featured: false,
  },
];
