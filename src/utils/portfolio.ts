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

export const EXPERIENCE_SECTION = {
  label: 'CAREER',
  title: 'Experience',
  description:
    'My professional journey — the roles I have held and the companies I have contributed to.',
} as const;

export interface ExperienceItem {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly current: boolean;
  readonly responsibilities: readonly string[];
  readonly achievements: readonly string[];
}

export const EXPERIENCE_ITEMS: readonly ExperienceItem[] = [
  {
    id: 'metateam-senior',
    role: 'Senior Developer',
    company: 'Metateam Myanmar Co., Ltd',
    period: 'July 2025 — Present',
    current: true,
    responsibilities: [
      'Lead backend architecture and technical decisions across projects',
      'Review code and mentor junior developers',
      'Manage servers, environments and deployments',
    ],
    achievements: [
      'Improved API response time by 40%',
      'Delivered a high-traffic system used by 5,000+ users',
      'Standardized the CI/CD pipeline across client projects',
    ],
  },
  {
    id: 'metateam-junior',
    role: 'Junior Developer',
    company: 'Metateam Myanmar Co., Ltd',
    period: 'July 2024 — July 2025',
    current: false,
    responsibilities: [
      'Built responsive pages and UI components for client projects',
      'Contributed to REST APIs and database models',
      'Customized WordPress themes and plugins',
      'Fixed bugs and wrote tests',
    ],
    achievements: [
      'Delivered 10+ client websites on schedule',
      'Reduced page load time by 30% through optimization',
      'Cut reported bugs in half through improved testing',
    ],
  },
];

export const PROJECTS_SECTION = {
  label: 'PORTFOLIO',
  title: 'Projects',
  description: 'A selection of projects I have designed, built and shipped.',
} as const;

export type ProjectVisual = 'backend' | 'wordpress' | 'frontend' | 'server' | 'app';

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly visual: ProjectVisual;
  readonly tech: readonly string[];
  readonly liveUrl?: string;
  readonly sourceUrl?: string;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'client-portfolio',
    name: 'Client Portfolio Website',
    description: 'A WordPress-based portfolio site with a custom theme, booking form and SEO setup.',
    category: 'WordPress',
    visual: 'wordpress',
    tech: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/minthantkyaw',
  },
  {
    id: 'ecommerce-api',
    name: 'E-commerce REST API',
    description: 'A REST API with authentication, product catalog and order management.',
    category: 'Backend',
    visual: 'backend',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/minthantkyaw',
  },
  {
    id: 'task-dashboard',
    name: 'Task Manager Dashboard',
    description: 'A responsive dashboard for tracking tasks, with real-time updates and charts.',
    category: 'Frontend',
    visual: 'frontend',
    tech: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/minthantkyaw',
  },
  {
    id: 'booking-system',
    name: 'Booking System',
    description: 'A full-stack booking system with calendar, payments and admin panel.',
    category: 'Full-stack',
    visual: 'app',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/minthantkyaw',
  },
  {
    id: 'deploy-pipeline',
    name: 'CI/CD Deployment Pipeline',
    description: 'Automated build, test and deploy pipeline with zero-downtime releases.',
    category: 'DevOps',
    visual: 'server',
    tech: ['Docker', 'Nginx', 'GitHub Actions'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/minthantkyaw',
  },
];
