import { type ComponentType, type ReactNode, useState } from 'react';
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
  SiLaravel,
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
import { STACK_CATEGORIES, STACK_SECTION } from '../utils/portfolio';
import { useInView } from '../hooks/useInView';

/* ------------------------------------------------------------------ */
/* Scroll-reveal wrapper (local copy for this section)                 */
/* ------------------------------------------------------------------ */

const REVEAL_DELAYS = {
  label: 0,
  heading: 100,
  description: 150,
  tabs: 200,
  items: 300,
} as const;

interface RevealProps {
  inView: boolean;
  delay: number;
  className?: string;
  children: ReactNode;
}

function Reveal({ inView, delay, className = '', children }: RevealProps) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Brand icon map                                                      */
/* ------------------------------------------------------------------ */

const TECH_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  'REST APIs': ({ className }) => <Braces className={className} />,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
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

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Stack() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const [activeTab, setActiveTab] = useState<string>(STACK_CATEGORIES[0].id);

  const activeCategory = STACK_CATEGORIES.find((c) => c.id === activeTab) ?? STACK_CATEGORIES[0];

  return (
    <section
      id="stack"
      ref={ref}
      className="relative bg-[#FBFDFC] dark:bg-slate-950 py-16 sm:py-20 scroll-mt-16"
      aria-labelledby="stack-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <Reveal inView={inView} delay={REVEAL_DELAYS.label}>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0F766E] dark:text-[#2DD4BF]">
              <span className="w-6 h-px bg-[#20C9C3]" aria-hidden="true" />
              {STACK_SECTION.label}
            </span>
          </Reveal>

          <Reveal inView={inView} delay={REVEAL_DELAYS.heading} className="mt-2.5">
            <h2
              id="stack-heading"
              className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight"
            >
              {STACK_SECTION.title}
            </h2>
          </Reveal>

          <Reveal inView={inView} delay={REVEAL_DELAYS.description} className="mt-3">
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              {STACK_SECTION.description}
            </p>
          </Reveal>
        </div>

        {/* Horizontal tabs */}
        <Reveal inView={inView} delay={REVEAL_DELAYS.tabs}>
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Technology categories">
            {STACK_CATEGORIES.map((category) => {
              const active = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] cursor-pointer ${
                    active
                      ? 'bg-[#0F766E] text-white dark:bg-[#20C9C3] dark:text-slate-900 shadow-sm'
                      : 'bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-[#20C9C3]/60'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active category items */}
        <Reveal inView={inView} delay={REVEAL_DELAYS.items}>
          <div
            key={activeTab}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 animate-fadeIn"
          >
            {activeCategory.items.map((name) => {
              const Icon = TECH_ICONS[name] ?? (({ className }) => <Braces className={className} />);
              return (
                <div
                  key={name}
                  className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-[#20C9C3] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 shrink-0 text-slate-500 dark:text-slate-400 group-hover:text-[#20C9C3] transition-colors" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
