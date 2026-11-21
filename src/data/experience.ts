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
    period: 'DEC 2025 — Present',
    current: true,
    responsibilities: [
      'Maintain production web applications, fix bugs, and contributed to REST APIs and database models',
      'Manage deployments and troubleshoot server and AWS infrastructure issues',
      'Provide technical support and guidance to backup team members',
    ],

    achievements: [
      'Kept mission-critical production systems stable with minimal downtime',
      'Resolved recurring server and application issues to improve daily reliability',
      'Ensured smooth task continuity through effective support for backup members',
    ],
  },
  {
    id: 'metateam-junior',
    role: 'Junior Developer',
    company: 'Metateam Myanmar Co., Ltd',
    period: 'Jul 2024 — DEC 2025',
    current: false,
    responsibilities: [
      'Maintained existing production applications and resolved reported software bugs',
      'Customized WordPress themes and plugins',
      'Fixed bugs and wrote tests',
    ],
    achievements: [
      'Improved application stability by systematically clearing bug backlogs',
      'Ensured smooth daily operations through consistent monitoring and maintenance',
      'Built a strong foundation in production workflows and cloud server handling',
    ],
  },
];
