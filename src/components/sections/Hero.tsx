import { ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import { CONTACT_LINKS, PROFILE_INFO } from '../../data';
import { useTypewriter } from '../../hooks/useTypewriter';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';
import { ButtonLink } from '../ui/Button';

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
} as const;

export default function Hero() {
  const typedRole = useTypewriter(PROFILE_INFO.roles);
  const socials = CONTACT_LINKS.filter(
    (link): link is typeof link & { id: 'github' | 'linkedin' } =>
      link.id === 'github' || link.id === 'linkedin',
  );

  return (
    <section className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-28" aria-label="Introduction">
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]"
      />

      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {PROFILE_INFO.availabilityStatus}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.9rem,7.5vw,5rem)] font-medium leading-[0.92] tracking-[-0.04em] text-ink">
                Min Thant
                <br />
                Kyaw<span className="text-accent">.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                <span className="text-ink">{typedRole}</span>
                <span aria-hidden="true" className="animate-blink text-accent">
                  _
                </span>
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                {PROFILE_INFO.description}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <ButtonLink href="#projects" size="md">
                  View selected work
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#contact" variant="outline" size="md">
                  Get in touch
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {socials.map((link) => {
                  const Icon = SOCIAL_ICONS[link.id];
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {link.label}
                    </a>
                  );
                })}
                <span aria-hidden="true" className="hidden text-line-strong sm:inline">
                  /
                </span>
                <span className="hidden sm:inline-flex">
                  <Tag>{PROFILE_INFO.location.timezone}</Tag>
                </span>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <figure className="mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:ml-auto lg:mr-0">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -left-3 -top-3 h-full w-full rounded-lg border border-line"
                  />
                  <div className="relative overflow-hidden rounded-lg border border-line bg-surface">
                    <img
                      src="/profile-1400.webp"
                      srcSet="/profile-800.webp 800w, /profile-1400.webp 1400w"
                      sizes="(min-width: 640px) 380px, 90vw"
                      alt="Min Thant Kyaw at his desk"
                      width={1400}
                      height={1050}
                      className="aspect-[4/5] w-full object-cover object-[62%_30%]"
                      loading="eager"
                      fetchPriority="high"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10"
                    />
                  </div>
                </div>
                <figcaption className="mt-4 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-accent" />
                    {PROFILE_INFO.location.value}
                  </span>
                  <span>Open to work</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-14 sm:grid-cols-3 sm:gap-8">
            {PROFILE_INFO.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
