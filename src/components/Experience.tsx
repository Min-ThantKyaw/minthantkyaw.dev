import { type ReactNode, useState } from 'react';
import { Briefcase, Calendar, ListChecks, Trophy } from 'lucide-react';
import { EXPERIENCE_ITEMS, EXPERIENCE_SECTION } from '../utils/portfolio';
import { useInView } from '../hooks/useInView';
import ScrollDown from './ScrollDown';

type ExperienceTab = 'responsibilities' | 'achievements';

/* ------------------------------------------------------------------ */
/* Scroll-reveal wrapper (local copy for this section)                 */
/* ------------------------------------------------------------------ */

const REVEAL_DELAYS = {
  label: 0,
  heading: 100,
  description: 150,
  tabs: 200,
  firstItem: 300,
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
/* Tabs                                                                */
/* ------------------------------------------------------------------ */

const TABS: { id: ExperienceTab; label: string; icon: typeof ListChecks }[] = [
  { id: 'responsibilities', label: 'Responsibilities', icon: ListChecks },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
];

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Experience() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const [activeTab, setActiveTab] = useState<ExperienceTab>('responsibilities');

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-[#FBFDFC] dark:bg-slate-950 py-16 sm:py-20 scroll-mt-16"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <Reveal inView={inView} delay={REVEAL_DELAYS.label}>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0F766E] dark:text-[#2DD4BF]">
              <span className="w-6 h-px bg-[#20C9C3]" aria-hidden="true" />
              {EXPERIENCE_SECTION.label}
            </span>
          </Reveal>

          <Reveal inView={inView} delay={REVEAL_DELAYS.heading} className="mt-2.5">
            <h2
              id="experience-heading"
              className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight"
            >
              {EXPERIENCE_SECTION.title}
            </h2>
          </Reveal>

          <Reveal inView={inView} delay={REVEAL_DELAYS.description} className="mt-3">
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              {EXPERIENCE_SECTION.description}
            </p>
          </Reveal>
        </div>

        {/* Horizontal tab toolbar */}
        <Reveal inView={inView} delay={REVEAL_DELAYS.tabs}>
          <div
            className="inline-flex items-center gap-1 p-1 rounded-full bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm"
            role="tablist"
            aria-label="Experience details"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] cursor-pointer ${
                    active
                      ? 'bg-[#0F766E] text-white dark:bg-[#20C9C3] dark:text-slate-900 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-700/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mt-8 sm:mt-10">
          {/* vertical rail */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700/70"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCE_ITEMS.map((item, i) => {
              const details =
                activeTab === 'responsibilities' ? item.responsibilities : item.achievements;

              return (
                <Reveal key={item.id} inView={inView} delay={REVEAL_DELAYS.firstItem + i * 100}>
                  <div className="relative pl-8 sm:pl-10">
                    {/* timeline dot */}
                    <span
                      className={`absolute left-0 top-7 w-[15px] h-[15px] rounded-full border-2 ${
                        item.current
                          ? 'bg-[#20C9C3] border-[#20C9C3] shadow-[0_0_0_4px_rgba(32,201,195,0.15)]'
                          : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600'
                      }`}
                      aria-hidden="true"
                    />

                    <article className="rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-6 sm:p-7 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
                          {item.role}
                        </h3>
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E6FFFC] dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#20C9C3]" aria-hidden="true" />
                            Current
                          </span>
                        )}
                      </div>

                      <p className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <Briefcase className="w-4 h-4 text-[#20C9C3] shrink-0" />
                        {item.company}
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4 text-[#20C9C3] shrink-0" />
                        {item.period}
                      </p>

                      {details.length > 0 && (
                        <ul key={activeTab} className="mt-4 space-y-2 animate-fadeIn">
                          {details.map((detail, di) => (
                            <li
                              key={di}
                              className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                            >
                              <span
                                className="mt-[7px] w-1 h-1 rounded-full bg-[#20C9C3] shrink-0"
                                aria-hidden="true"
                              />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal inView={inView} delay={550} className="flex justify-center mt-12 sm:mt-14">
          <ScrollDown target="projects" />
        </Reveal>
      </div>
    </section>
  );
}
