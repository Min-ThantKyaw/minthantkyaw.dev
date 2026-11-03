import { Briefcase, Clock } from 'lucide-react';
import { ABOUT_SECTION, CURRENT_ROLE, PROFILE_INFO } from '../../data';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

const CARD_CLASS = 'h-full rounded-2xl border border-line bg-surface';

export default function About() {
  return (
    <Section id="about" index="01" label={ABOUT_SECTION.label} title={ABOUT_SECTION.title}>
      <div className="mt-12 grid gap-5 lg:grid-cols-6">
        {/* Portrait */}
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <figure className={`${CARD_CLASS} overflow-hidden`}>
            <img
              src="/profile-800.webp"
              srcSet="/profile-800.webp 800w, /profile-1400.webp 1400w"
              sizes="(min-width: 1024px) 380px, 90vw"
              alt="Min Thant Kyaw at his desk"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-[62%_30%]"
            />
            <figcaption className="border-t border-line px-5 py-4">
              <p className="font-display text-sm font-medium tracking-tight text-ink">
                {PROFILE_INFO.name}
              </p>
              <p className="mt-0.5 text-xs text-muted">Web Developer</p>
            </figcaption>
          </figure>
        </Reveal>

        {/* Bio */}
        <Reveal delay={80} className="lg:col-span-4">
          <div className={`${CARD_CLASS} p-6 sm:p-8`}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Who I am
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
              {PROFILE_INFO.description}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
              {PROFILE_INFO.bioExtra}
            </p>
          </div>
        </Reveal>

        {/* Current role */}
        <Reveal delay={140} className="lg:col-span-2">
          <div className={`${CARD_CLASS} p-6`}>
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <Briefcase className="h-3.5 w-3.5 text-accent" />
              Currently
            </p>
            <p className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
              {CURRENT_ROLE.role}
            </p>
            <p className="mt-1 text-sm text-muted">{CURRENT_ROLE.company}</p>
            <p className="mt-3 text-xs leading-relaxed text-muted">{CURRENT_ROLE.note}</p>
          </div>
        </Reveal>

        {/* Availability */}
        <Reveal delay={200} className="lg:col-span-2">
          <div className={`${CARD_CLASS} p-6`}>
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <Clock className="h-3.5 w-3.5 text-accent" />
              Availability
            </p>
            <p className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
              Open to work
            </p>
            <p className="mt-1 text-sm text-muted">Full-time roles · Remote friendly</p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {PROFILE_INFO.availabilityStatus}
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={260} className="lg:col-span-6">
          <div className={`${CARD_CLASS} grid grid-cols-1 gap-6 p-6 sm:grid-cols-3 sm:p-8`}>
            {PROFILE_INFO.stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3 sm:flex-col sm:gap-1">
                <p className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
