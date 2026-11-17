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
  /** Deployed demo URL. */
  readonly liveUrl?: string;
  /** Public GitHub repository URL. */
  readonly sourceUrl?: string;
  /** Case-study / details page URL. */
  readonly detailsUrl?: string;
}

export const PROJECTS: readonly Project[] = [
  {
    id: "professional service-matching web platform",
    name: "Professional Service-Matching Web Platform (Japan)",
    description:
      "A B2C/B2B service-matching marketplace developed for the Japanese market that connects users directly with vetted professionals across industries such as legal, real estate, and business consulting. Backed by major regional media organizations, the platform emphasizes high trust and credibility by featuring only screened experts.",
    category: "Production Support & Cloud Troubleshooting",
    year: "2024",
    kind: "Client work",
    visual: "booking",
    tech: ["Laravel", "WordPress", "MySQL", "Tailwind CSS", "AWS"],
  },
  {
    id: "minthantkyaw.dev",
    name: "Personal Website",
    description:
      "A modern, responsive website showcasing my portfolio, blog, and contact information.",
    category: "Frontend",
    year: "2024",
    kind: "Personal project",
    visual: "api",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    liveUrl: "https://minthantkyaw.dev",
    sourceUrl: "https://github.com/Min-ThantKyaw/minthantkyaw.dev",
    detailsUrl: "https://minthantkyaw.dev/work/minthantkyaw.dev",
  },
  {
    id: "task-dashboard",
    name: "Task Manager Dashboard",
    description:
      "A responsive dashboard for tracking tasks, with real-time updates, charts and a component architecture built for scale.",
    category: "Frontend",
    year: "2024",
    kind: "Personal project",
    visual: "dashboard",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://task-dashboard.vercel.app",
    detailsUrl: "https://minthantkyaw.dev/work/task-dashboard",
  },
];
