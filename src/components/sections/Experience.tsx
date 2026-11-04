import { Building2, Check } from 'lucide-react';
import { EXPERIENCE_ITEMS, EXPERIENCE_SECTION } from '../../data';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { cn } from '../../lib/cn';

export default function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      label={EXPERIENCE_SECTION.label}
      title={EXPERIENCE_SECTION.title}
      description={EXPERIENCE_SECTION.description}
    >
      <div className="mt-12">
        {EXPERIENCE_ITEMS.map((item, index) => (
          <Reveal key={item.id} delay={index * 80}>
            <article className="grid gap-6 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8 md:border-t-0">
              {/* Date column + timeline rail */}
              <div className="relative md:col-span-3 md:border-r md:border-line md:pr-6">
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute -right-[5px] top-1 hidden h-2.5 w-2.5 rounded-full ring-4 ring-canvas md:block',
                    item.current ? 'bg-accent' : 'bg-line-strong',
                  )}
                />
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
                  {item.period}
                </p>
                <p
                  className={cn(
                    'mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[12px] uppercase tracking-[0.16em]',
                    item.current ? 'bg-accent-soft text-accent' : 'border border-line text-muted',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-1.5 w-1.5 rounded-full',
                      item.current ? 'bg-accent' : 'bg-line-strong',
                    )}
                  />
                  {item.current ? 'Current' : 'Past role'}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-[28px]">
                  {item.role}
                </h3>
                <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
                  <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {item.company}
                </p>

                <div className="mt-6 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
                      Responsibilities
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {item.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 text-[15px] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[9px] h-1 w-1 shrink-0 bg-accent"
                          />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
                      Outcomes
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-2.5 text-[15px] leading-relaxed text-ink"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
