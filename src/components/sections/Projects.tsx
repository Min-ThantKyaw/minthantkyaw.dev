import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, PROJECTS_SECTION, type Project } from '../../data';
import { isPlaceholderUrl } from '../../lib/urls';
import { cn } from '../../lib/cn';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';
import BrowserMockup from '../ui/BrowserMockup';

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const live = isPlaceholderUrl(project.liveUrl) ? undefined : project.liveUrl;
  const source = isPlaceholderUrl(project.sourceUrl) ? undefined : project.sourceUrl;

  const mockup = (
    <BrowserMockup
      variant={project.visual}
      url={project.id}
      className={cn(
        featured
          ? 'border-b border-line sm:border-b-0 sm:border-r'
          : 'border-b border-line',
      )}
    />
  );

  const body = (
    <div className={cn('flex flex-1 flex-col', featured ? 'p-6 sm:p-8' : 'p-6')}>
      <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        <span className="text-accent">{project.kind}</span>
        <span aria-hidden="true" className="h-px w-4 bg-line-strong" />
        {project.category} · {project.year}
      </p>

      <h3
        className={cn(
          'mt-3 font-display font-medium tracking-tight text-ink',
          featured ? 'text-2xl sm:text-3xl' : 'text-xl',
        )}
      >
        {project.name}
      </h3>
      <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-muted">
        {project.description}
      </p>

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
          {!live && !source && <span className="text-muted">Links available on request</span>}
        </div>
      </div>
    </div>
  );

  return (
    <article
      className={cn(
        'group h-full overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30',
        featured && 'sm:grid sm:grid-cols-2',
      )}
    >
      {mockup}
      {body}
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label={PROJECTS_SECTION.label}
      title={PROJECTS_SECTION.title}
      description={PROJECTS_SECTION.description}
    >
      <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 80}
            className={cn('h-full', index === 0 && 'lg:col-span-2')}
          >
            <ProjectCard project={project} featured={index === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
