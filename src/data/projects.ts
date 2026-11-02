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
  readonly year: string;
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
    year: '2025',
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
    year: '2025',
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
    year: '2024',
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
    year: '2024',
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
    year: '2024',
    visual: 'server',
    tech: ['Docker', 'Nginx', 'GitHub Actions'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/minthantkyaw',
  },
];
