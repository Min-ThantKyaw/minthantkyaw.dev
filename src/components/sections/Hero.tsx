import { ArrowUpRight, Calendar, Clock, Download, Github, Linkedin, Mail, Map } from 'lucide-react';
import { CONTACT_LINKS, CV_URL, PROFILE_INFO } from '../../data';
import { scrollToSection } from '../../lib/scroll';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';
import { ButtonLink } from '../ui/Button';

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const;

export default function Hero() {
  const socials = CONTACT_LINKS;

  return (
    <section
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-44"
      aria-label="Introduction"
    >
      {/* Soft warm glow backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {PROFILE_INFO.availabilityStatus}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 font-display text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em] text-ink">
            Min Thant <span className="text-accent">Kyaw.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl font-display text-xl leading-snug text-muted sm:text-2xl">
            {PROFILE_INFO.headline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              href="#projects"
              size="lg"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('#projects', 24);
              }}
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={CV_URL} variant="outline" size="lg" download>
              Download CV
              <Download className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {socials.map((link) => {
              const Icon = SOCIAL_ICONS[link.id];
              return (
                <a
                  key={link.id}
                  href={link.href}
                  {...(link.id === 'email' ? {} : { target: '_blank', rel: 'noreferrer' })}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Map className="h-4 w-4 text-accent" />
              {PROFILE_INFO.location.value}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-accent" />
              Age {PROFILE_INFO.age.value}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent" />
              {PROFILE_INFO.location.timezone}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
