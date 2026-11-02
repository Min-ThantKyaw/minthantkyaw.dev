import { useState } from 'react';
import { ArrowUpRight, Database, Globe, Layers, Monitor, Server } from 'lucide-react';
import { PROJECTS, PROJECTS_SECTION, type Project, type ProjectVisual } from '../../data';
import { isPlaceholderUrl } from '../../lib/urls';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';
import { cn } from '../../lib/cn';

const VISUAL_ICONS: Record<ProjectVisual, typeof Database> = {
  backend: Database,
  wordpress: Globe,
  frontend: Monitor,
  server: Server,
  app: Layers,
};

const COVERS: Record<ProjectVisual, string> = {
  backend: 'from-[#0b3b45] via-[#0f5b5c] to-[#0f766e]',
  wordpress: 'from-[#0f766e] via-[#159a8e] to-[#20c9c3]',
  frontend: 'from-[#10202b] via-[#123f45] to-[#0f766e]',
  server: 'from-[#0a1518] via-[#123039] to-[#155e63]',
  app: 'from-[#0b2f2c] via-[#0f5f58] to-[#2dd4bf]',
};

const FILTERS = ['All', ...Array.from(new Set(PROJECTS.map((project) => project.category)))];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = VISUAL_ICONS[project.visual];
  const live = isPlaceholderUrl(project.liveUrl) ? undefined : project.liveUrl;
  const source = isPlaceholderUrl(project.sourceUrl) ? undefined : project.sourceUrl;
  const href = live ?? source;

  const cover = (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink">
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-[1.04]',
          COVERS[project.visual],
        )}
      />
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 opacity-20" />
      <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
        {project.category}
      </span>
      <span className="absolute right-5 top-4 font-mono text-[11px] tracking-[0.2em] text-white/55">
        {String(index + 1).padStart(2, '0')}
      </span>
      <Icon
        aria-hidden="true"
        className="absolute bottom-5 left-5 h-9 w-9 text-white/80"
      />
      <span className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
        {project.year}
      </span>
    </div>
  );

  return (
    <article className="group flex h-full flex-col border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} — open project`}
          className="block"
        >
          {cover}
        </a>
      ) : (
        cover
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-5 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.16em]">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
              >
                Live
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
              >
                Source
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            {!live && !source && <span className="text-muted">Case study on request</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <Section
      id="projects"
      index="03"
      label={PROJECTS_SECTION.label}
      title={PROJECTS_SECTION.title}
      description={PROJECTS_SECTION.description}
    >
      <Reveal delay={80}>
        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {FILTERS.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={active}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200',
                  active
                    ? 'border-accent bg-accent text-canvas'
                    : 'border-line text-muted hover:border-line-strong hover:text-ink',
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div
        key={activeFilter}
        className="mt-6 grid animate-fade-in gap-5 sm:grid-cols-2 sm:gap-6"
      >
        {visibleProjects.map((project) => (
          <Reveal key={project.id} className="h-full">
            <ProjectCard
              project={project}
              index={PROJECTS.findIndex((item) => item.id === project.id)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
