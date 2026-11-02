import { useState } from 'react';
import { Database, Globe, Monitor, Plus, Server } from 'lucide-react';
import { EXPERTISE_ITEMS, EXPERTISE_SECTION, type ExpertiseVisual } from '../../data';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';
import { cn } from '../../lib/cn';

const VISUAL_ICONS: Record<ExpertiseVisual, typeof Database> = {
  backend: Database,
  wordpress: Globe,
  frontend: Monitor,
  server: Server,
};

export default function Expertise() {
  const [openId, setOpenId] = useState<string | null>(EXPERTISE_ITEMS[0]?.id ?? null);

  return (
    <Section
      id="expertise"
      index="01"
      label={EXPERTISE_SECTION.label}
      title={EXPERTISE_SECTION.title}
      description={EXPERTISE_SECTION.description}
    >
      <div className="mt-12 border-t border-line">
        {EXPERTISE_ITEMS.map((item, index) => {
          const isOpen = openId === item.id;
          const Icon = VISUAL_ICONS[item.visual];

          return (
            <Reveal key={item.id} delay={index * 60}>
              <div className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    id={`expertise-trigger-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`expertise-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6"
                  >
                    <span className="w-7 shrink-0 font-mono text-[11px] tracking-[0.16em] text-muted">
                      {item.index}
                    </span>
                    <span className="hidden shrink-0 place-items-center rounded-md border border-line text-accent transition-colors duration-200 group-hover:border-accent sm:grid sm:h-9 sm:w-9">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="flex-1 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                      {item.title}
                    </span>
                    {item.featured && (
                      <span className="hidden sm:inline-flex">
                        <Tag>Core</Tag>
                      </span>
                    )}
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        'h-4 w-4 shrink-0 text-muted transition-transform duration-300',
                        isOpen && 'rotate-45 text-accent',
                      )}
                    />
                  </button>
                </h3>

                <div
                  id={`expertise-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`expertise-trigger-${item.id}`}
                  aria-hidden={!isOpen}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-5 pb-7 pl-11 sm:grid-cols-12 sm:gap-8 sm:pl-[7rem]">
                      <p className="text-[15px] leading-relaxed text-muted sm:col-span-7">
                        {item.description}
                      </p>
                      <ul className="space-y-2 sm:col-span-4 sm:col-start-9">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
                          >
                            <span aria-hidden="true" className="h-1 w-1 shrink-0 bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
