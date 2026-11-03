import { SKILL_CATEGORIES, SKILLS_SECTION } from '../../data';
import { getTechIcon } from '../../lib/tech-icons';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

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
          <Reveal key={category.id} delay={index * 60} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="flex items-baseline justify-between gap-4">
                <span className="font-display text-base font-medium tracking-tight text-ink">
                  {category.label}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                  {String(category.items.length).padStart(2, '0')}
                </span>
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((name) => {
                  const Icon = getTechIcon(name);
                  return (
                    <li key={name}>
                      <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-3 py-2 font-mono text-[11px] text-ink transition-colors duration-200 hover:border-accent hover:text-accent">
                        <Icon className="h-3.5 w-3.5 text-muted" />
                        {name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
