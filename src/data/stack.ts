export const STACK_SECTION = {
  label: 'TECH STACK',
  title: 'Stack',
  description: 'The technologies and tools I use to design, build and ship projects.',
} as const;

export interface StackCategory {
  readonly id: string;
  readonly label: string;
  readonly items: readonly string[];
}

export const STACK_CATEGORIES: readonly StackCategory[] = [
  {
    id: 'backend',
    label: 'Backend & Databases',
    items: ['PHP', 'Laravel', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend Ecosystem',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    items: ['AWS', 'Git', 'GitHub', 'Docker', 'Nginx', 'GitHub Actions'],
  },
  {
    id: 'ai',
    label: 'AI',
    items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor'],
  },
  {
    id: 'other',
    label: 'Other',
    items: ['WordPress'],
  },
];
