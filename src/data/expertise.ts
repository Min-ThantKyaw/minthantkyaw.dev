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
  readonly highlights: readonly string[];
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
    highlights: ['REST APIs & auth', 'Database design', 'Business logic'],
    visual: 'backend',
    featured: true,
  },
  {
    id: 'wordpress',
    index: '02',
    title: 'WordPress Development',
    description:
      'Building, customizing and maintaining WordPress websites, themes, plugins and business-focused solutions.',
    highlights: ['Custom themes', 'Plugin work', 'Content architecture'],
    visual: 'wordpress',
    featured: false,
  },
  {
    id: 'frontend',
    index: '03',
    title: 'Frontend Development',
    description:
      'Creating responsive, interactive and user-focused web interfaces with clean and maintainable frontend architecture.',
    highlights: ['React & TypeScript', 'Responsive UI', 'Accessibility'],
    visual: 'frontend',
    featured: false,
  },
  {
    id: 'server',
    index: '04',
    title: 'Server & Deployment',
    description:
      'Deploying web applications, configuring servers, managing environments and maintaining reliable production systems.',
    highlights: ['Linux & Nginx', 'CI/CD pipelines', 'Environment setup'],
    visual: 'server',
    featured: false,
  },
];
