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
    period: 'Jul 2025 — Present',
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
    period: 'Jul 2024 — Jul 2025',
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
