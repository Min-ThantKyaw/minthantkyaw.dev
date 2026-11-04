export const SKILLS_SECTION = {
  label: 'TOOLBOX',
  title: 'Skills',
  description: 'Backend-focused skills, from API design to deployment.',
} as const;

export interface SkillCategory {
  readonly id: string;
  readonly label: string;
  readonly items: readonly string[];
  /** Renders the category as the large, highlighted card. */
  readonly featured?: boolean;
  /** Short intro line shown on the featured card. */
  readonly note?: string;
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend & Databases',
    items: ['PHP', 'Laravel', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MySQL'],
    featured: true,
    note: 'APIs, databases and business logic — where I do most of my work.',
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
    label: 'AI-Assisted Development',
    items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor'],
  },
  {
    id: 'cms',
    label: 'CMS',
    items: ['WordPress'],
  },
];
