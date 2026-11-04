import type { ComponentType } from 'react';
import {
  SiAnthropic,
  SiCursor,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiGooglegemini,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si';
import { Bot, Braces, Cloud } from 'lucide-react';

export type TechIcon = ComponentType<{ className?: string }>;

export const TECH_ICONS: Record<string, TechIcon> = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  'REST APIs': ({ className }) => <Braces className={className} />,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  JWT: SiJsonwebtokens,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  AWS: ({ className }) => <Cloud className={className} />,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Nginx: SiNginx,
  'GitHub Actions': SiGithubactions,
  WordPress: SiWordpress,
  ChatGPT: ({ className }) => <Bot className={className} />,
  Claude: SiAnthropic,
  Gemini: SiGooglegemini,
  'GitHub Copilot': SiGithubcopilot,
  Cursor: SiCursor,
};

export function getTechIcon(name: string): TechIcon {
  return TECH_ICONS[name] ?? (({ className }) => <Braces className={className} />);
}
