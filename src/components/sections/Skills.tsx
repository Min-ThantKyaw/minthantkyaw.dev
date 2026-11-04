import { SKILL_CATEGORIES, SKILLS_SECTION } from '../../data';
import { getTechIcon } from '../../lib/tech-icons';
import { cn } from '../../lib/cn';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import SpotlightCard from '../ui/SpotlightCard';

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label={SKILLS_SECTION.label}
      title={SKILLS_SECTION.title}
      description={SKILLS_SECTION.description}
    >
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => (
          <Reveal
            key={category.id}
            delay={index * 60}
            className={cn('h-full', category.featured && 'sm:col-span-2')}
          >
            <SpotlightCard
              className={cn(
                'h-full rounded-2xl bg-surface p-6',
                category.featured ? 'border-2 border-transparent' : 'border border-line',
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3
                    className={cn(
                      'font-display font-medium tracking-tight text-ink',
                      category.featured ? 'text-xl' : 'text-base',
                    )}
                  >
                    {category.label}
                  </h3>
                  {category.featured && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.14em] text-accent">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Core focus
                    </span>
                  )}
                </div>
                <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                  {String(category.items.length).padStart(2, '0')}
                </span>
              </div>

              {category.note && (
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                  {category.note}
                </p>
              )}

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((name) => {
                  const Icon = getTechIcon(name);
                  return (
                    <li key={name}>
                      <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-3 py-2 font-mono text-[12px] text-ink transition-colors duration-200 hover:border-accent hover:text-accent">
                        <Icon className="h-3.5 w-3.5 text-muted" />
                        {name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
