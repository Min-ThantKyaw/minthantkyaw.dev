export const PROJECTS_SECTION = {
  label: 'PORTFOLIO',
  title: 'Selected work',
  description: 'A few projects that show how I design, build and ship software.',
} as const;

export type ProjectVisual = 'api' | 'dashboard' | 'booking';
export type ProjectKind = 'Personal project' | 'Client work';

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly year: string;
  readonly kind: ProjectKind;
  readonly visual: ProjectVisual;
  readonly tech: readonly string[];
  readonly liveUrl?: string;
  readonly sourceUrl?: string;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'booking-system',
    name: 'Booking System',
    description:
      'A full-stack booking platform with calendar scheduling, payments and an admin panel for managing reservations end to end.',
    category: 'Full-stack',
    year: '2024',
    kind: 'Personal project',
    visual: 'booking',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'ecommerce-api',
    name: 'E-commerce REST API',
    description:
      'A production-style REST API with JWT authentication, product catalog, order management and a tested, documented endpoint surface.',
    category: 'Backend',
    year: '2025',
    kind: 'Personal project',
    visual: 'api',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
  },
  {
    id: 'task-dashboard',
    name: 'Task Manager Dashboard',
    description:
      'A responsive dashboard for tracking tasks, with real-time updates, charts and a component architecture built for scale.',
    category: 'Frontend',
    year: '2024',
    kind: 'Personal project',
    visual: 'dashboard',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
];
