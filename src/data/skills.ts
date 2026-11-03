export const SKILLS_SECTION = {
  label: 'TOOLBOX',
  title: 'Skills',
  description: 'The technologies and tools I use to design, build and ship software.',
} as const;

export interface SkillCategory {
  readonly id: string;
  readonly label: string;
  readonly items: readonly string[];
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
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
    label: 'AI-Assisted Development',
    items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor'],
  },
  {
    id: 'cms',
    label: 'CMS',
    items: ['WordPress'],
  },
];
