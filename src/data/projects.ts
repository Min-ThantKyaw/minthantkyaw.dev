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
    id: "booking-system",
    name: "Booking System",
    description:
      "A full-stack booking platform with calendar scheduling, payments and an admin panel for managing reservations end to end.",
    category: "Full-stack",
    year: "2024",
    kind: "Personal project",
    visual: "booking",
    tech: ["React", "Node.js", "MongoDB"],
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
    detailsUrl: "https://minthantkyaw.dev/work/minthantkyaw.dev", // or a Notion/GitHub case study
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
