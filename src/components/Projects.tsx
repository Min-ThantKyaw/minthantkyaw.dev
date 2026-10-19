import { type ReactNode, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Database,
  ExternalLink,
  Github,
  Globe,
  Layers,
  Monitor,
  Server,
} from 'lucide-react';
import { PROJECTS, PROJECTS_SECTION, type Project, type ProjectVisual } from '../utils/portfolio';
import { useInView } from '../hooks/useInView';
import ScrollDown from './ScrollDown';

/* ------------------------------------------------------------------ */
/* Scroll-reveal wrapper (local copy for this section)                 */
/* ------------------------------------------------------------------ */

const REVEAL_DELAYS = {
  label: 0,
  heading: 100,
  description: 150,
  carousel: 250,
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
/* Icon map                                                            */
/* ------------------------------------------------------------------ */

const VISUAL_ICONS: Record<ProjectVisual, typeof Database> = {
  backend: Database,
  wordpress: Globe,
  frontend: Monitor,
  server: Server,
  app: Layers,
};

/* ------------------------------------------------------------------ */
/* Card + carousel                                                     */
/* ------------------------------------------------------------------ */

function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  const Icon = VISUAL_ICONS[project.visual];

  return (
    <article
      className={`flex flex-col h-full rounded-3xl bg-white dark:bg-slate-800/80 border overflow-hidden transition-colors duration-500 ${
        active
          ? 'border-[#20C9C3]/60 shadow-[0_30px_60px_-24px_rgba(32,201,195,0.35)]'
          : 'border-slate-200/80 dark:border-slate-700/60'
      }`}
    >
      {/* Visual / image area */}
      <div className="relative h-48 sm:h-60 shrink-0 bg-gradient-to-br from-[#0F766E] to-[#20C9C3] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_60%)]"
          aria-hidden="true"
        />
        <Icon className="w-16 h-16 text-white/90" aria-hidden="true" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <span className="self-start px-3 py-1 rounded-full bg-[#E6FFFC] dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] text-xs font-semibold uppercase tracking-wide">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
          {project.name}
        </h3>

        <p className="mt-3 text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-[#E6FFFC] dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center gap-6 border-t border-slate-100 dark:border-slate-700/60">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#0F766E] dark:text-[#2DD4BF] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Shortest signed offset between two indices, wrapping for an infinite loop. */
function wrapOffset(i: number, active: number, count: number): number {
  let d = i - active;
  const half = count / 2;
  if (d > half) d -= count;
  else if (d < -half) d += count;
  return d;
}

const ARROW_BASE =
  'grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 shadow-md hover:border-[#20C9C3] hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] cursor-pointer';

function ArrowButton({ dir, onClick, className = '' }: { dir: -1 | 1; onClick: () => void; className?: string }) {
  const Icon = dir === -1 ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === -1 ? 'Previous project' : 'Next project'}
      className={`${ARROW_BASE} group ${className}`}
    >
      <Icon
        className={`w-5 h-5 transition-transform duration-300 ${
          dir === -1 ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
        }`}
      />
    </button>
  );
}

function Carousel({ projects }: { projects: readonly Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = projects.length;

  const paginate = (dir: number) => setActiveIndex((i) => (i + dir + count) % count);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      paginate(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      paginate(1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative focus-visible:outline-none"
    >
      {/* Cards + desktop side arrows */}
      <div className="relative h-[540px] sm:h-[600px]">
        {projects.map((project, i) => {
          const offset = wrapOffset(i, activeIndex, count);
          const abs = Math.abs(offset);
          const hidden = abs > 1;

          const x = offset * (abs <= 1 ? 62 : 88);
          const scale = abs === 0 ? 1 : abs === 1 ? 0.8 : 0.75;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.5 : 0;
          const blur = abs === 0 ? 0 : abs === 1 ? 2.5 : 0;

          return (
            <div
              key={project.id}
              className="absolute left-1/2 top-1/2 w-[min(86vw,440px)] h-[500px] sm:h-[560px]"
              style={{
                transform: `translate(-50%, -50%) translateX(${x}%) scale(${scale})`,
                opacity,
                filter: blur > 0 ? `blur(${blur}px)` : 'none',
                zIndex: hidden ? 0 : abs === 0 ? 30 : 20,
                pointerEvents: hidden ? 'none' : 'auto',
                transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease, filter 400ms ease',
                willChange: 'transform, opacity, filter',
              }}
              aria-hidden={abs !== 0 ? true : undefined}
              onClick={abs === 1 ? () => setActiveIndex(i) : undefined}
            >
              <div className="h-full animate-float-slow" style={{ animationDelay: `${i * 0.9}s` }}>
                <ProjectCard project={project} active={abs === 0} />
              </div>
            </div>
          );
        })}

        {/* Previous — left */}
        <ArrowButton dir={-1} onClick={() => paginate(-1)} className="hidden lg:grid absolute left-0 top-1/2 -translate-y-1/2 z-40" />

        {/* Next — right */}
        <ArrowButton dir={1} onClick={() => paginate(1)} className="hidden lg:grid absolute right-0 top-1/2 -translate-y-1/2 z-40" />
      </div>

      {/* Mobile / tablet arrows */}
      <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
        <ArrowButton dir={-1} onClick={() => paginate(-1)} />
        <ArrowButton dir={1} onClick={() => paginate(1)} />
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Choose project">
        {projects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to project ${i + 1}`}
            aria-current={i === activeIndex}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIndex
                ? 'w-7 bg-[#0F766E] dark:bg-[#20C9C3]'
                : 'w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Projects() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-[#F8FAFC] dark:bg-slate-900 py-16 sm:py-20 scroll-mt-16 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <Reveal inView={inView} delay={REVEAL_DELAYS.label}>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0F766E] dark:text-[#2DD4BF]">
              <span className="w-6 h-px bg-[#20C9C3]" aria-hidden="true" />
              {PROJECTS_SECTION.label}
            </span>
          </Reveal>

          <Reveal inView={inView} delay={REVEAL_DELAYS.heading} className="mt-2.5">
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight"
            >
              {PROJECTS_SECTION.title}
            </h2>
          </Reveal>

          <Reveal inView={inView} delay={REVEAL_DELAYS.description} className="mt-3">
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              {PROJECTS_SECTION.description}
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal inView={inView} delay={REVEAL_DELAYS.carousel}>
          <Carousel projects={PROJECTS} />
        </Reveal>

        <Reveal inView={inView} delay={550} className="flex justify-center mt-12 sm:mt-14">
          <ScrollDown target="stack" />
        </Reveal>
      </div>
    </section>
  );
}
