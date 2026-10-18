import { type ReactNode } from 'react';
import { ArrowRight, Database, Globe, Monitor, Server } from 'lucide-react';
import {
  EXPERTISE_ITEMS,
  EXPERTISE_SECTION,
  type ExpertiseItem,
  type ExpertiseVisual,
} from '../utils/portfolio';
import { useInView } from '../hooks/useInView';
import ScrollDown from './ScrollDown';

/* ------------------------------------------------------------------ */
/* Scroll-reveal wrapper                                               */
/* ------------------------------------------------------------------ */

const REVEAL_DELAYS = {
  label: 0,
  heading: 100,
  description: 150,
  backend: 250,
  wordpress: 350,
  frontend: 450,
  server: 550,
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
/* Compact icon map (no large illustrations)                           */
/* ------------------------------------------------------------------ */

const VISUAL_ICONS: Record<ExpertiseVisual, typeof Database> = {
  backend: Database,
  wordpress: Globe,
  frontend: Monitor,
  server: Server,
};

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

function FeaturedBanner({ item, inView, delay }: { item: ExpertiseItem; inView: boolean; delay: number }) {
  const Icon = VISUAL_ICONS[item.visual];

  return (
    <Reveal inView={inView} delay={delay}>
      <article className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-[0_1px_3px_rgba(15,23,42,0.05)] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#20C9C3] hover:shadow-[0_20px_50px_-20px_rgba(32,201,195,0.4)] dark:hover:shadow-[0_20px_50px_-20px_rgba(32,201,195,0.22)]">
        {/* subtle aqua wash on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E6FFFC]/0 to-transparent group-hover:from-[#E6FFFC]/60 dark:group-hover:from-[#0F766E]/10 transition-all duration-500 pointer-events-none" />

        <div className="relative flex items-center gap-4">
          <span className="text-4xl sm:text-5xl font-mono font-semibold leading-none text-slate-200 dark:text-slate-700 group-hover:text-[#20C9C3] transition-colors duration-500">
            {item.index}
          </span>
          <span className="w-12 h-12 sm:w-14 sm:h-14 grid place-items-center rounded-xl bg-[#0F766E] text-white shadow-sm group-hover:bg-[#0B4F4A] transition-colors duration-300">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
          </span>
        </div>

        <div className="relative sm:flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
        </div>

        <div className="relative sm:ml-auto flex items-center gap-2 text-sm font-semibold text-[#0F766E] dark:text-[#2DD4BF] whitespace-nowrap">
          Explore
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </article>
    </Reveal>
  );
}

function SupportCard({ item, inView, delay }: { item: ExpertiseItem; inView: boolean; delay: number }) {
  const Icon = VISUAL_ICONS[item.visual];

  return (
    <Reveal inView={inView} delay={delay} className="h-full">
      <article className="group relative flex flex-col h-full p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-[0_1px_3px_rgba(15,23,42,0.05)] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#20C9C3] hover:shadow-[0_18px_45px_-18px_rgba(32,201,195,0.4)] dark:hover:shadow-[0_18px_45px_-18px_rgba(32,201,195,0.22)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6FFFC]/0 to-transparent group-hover:from-[#E6FFFC]/60 dark:group-hover:from-[#0F766E]/10 transition-all duration-500 pointer-events-none" />

        <div className="relative flex items-center justify-between">
          <span className="text-2xl font-mono font-semibold leading-none text-slate-200 dark:text-slate-700 group-hover:text-[#20C9C3] transition-colors duration-500">
            {item.index}
          </span>
          <span className="w-9 h-9 grid place-items-center rounded-lg bg-[#F0FDFA] dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
            <Icon className="w-5 h-5" />
          </span>
        </div>

        <h3 className="relative mt-3 text-base font-semibold text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
        <p className="relative mt-1.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
      </article>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Expertise() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  const featured = EXPERTISE_ITEMS.find((item) => item.featured) ?? EXPERTISE_ITEMS[0];
  const supporting = EXPERTISE_ITEMS.filter((item) => !item.featured);
  const supportingDelays = [REVEAL_DELAYS.wordpress, REVEAL_DELAYS.frontend, REVEAL_DELAYS.server];

  return (
    <section
      id="expertise"
      ref={ref}
      className="relative bg-[#F8FAFC] dark:bg-slate-900 py-16 sm:py-20 scroll-mt-16"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <Reveal inView={inView} delay={REVEAL_DELAYS.label}>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0F766E] dark:text-[#2DD4BF]">
              <span className="w-6 h-px bg-[#20C9C3]" aria-hidden="true" />
              {EXPERTISE_SECTION.label}
            </span>
          </Reveal>

          <Reveal inView={inView} delay={REVEAL_DELAYS.heading} className="mt-2.5">
            <h2
              id="expertise-heading"
              className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight"
            >
              {EXPERTISE_SECTION.title}
            </h2>
          </Reveal>

          <Reveal inView={inView} delay={REVEAL_DELAYS.description} className="mt-3">
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">{EXPERTISE_SECTION.description}</p>
          </Reveal>
        </div>

        {/* Featured banner + compact supporting row */}
        <FeaturedBanner item={featured} inView={inView} delay={REVEAL_DELAYS.backend} />

        <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {supporting.map((item, i) => (
            <SupportCard key={item.id} item={item} inView={inView} delay={supportingDelays[i]} />
          ))}
        </div>

        <Reveal inView={inView} delay={650} className="flex justify-center mt-12 sm:mt-14">
          <ScrollDown target="experience" />
        </Reveal>
      </div>
    </section>
  );
}
