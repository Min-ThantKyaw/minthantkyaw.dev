import { type FormEvent, type ReactNode } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { CONTACT_LINKS, CONTACT_SECTION, EMAIL_ADDRESS, type ContactLink } from '../utils/portfolio';
import { useInView } from '../hooks/useInView';

/* ------------------------------------------------------------------ */
/* Scroll-reveal wrapper (local copy for this section)                 */
/* ------------------------------------------------------------------ */

const REVEAL_DELAYS = {
  label: 0,
  heading: 100,
  description: 150,
  links: 250,
  form: 300,
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
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const CONTACT_ICONS: Record<ContactLink['id'], typeof Mail> = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
};

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#20C9C3] focus:ring-2 focus:ring-[#20C9C3]/30 transition-colors';

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Contact() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12 });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const subject = String(data.get('subject') ?? '');
    const message = String(data.get('message') ?? '');
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#F8FAFC] dark:bg-slate-900 py-16 sm:py-20 scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — info */}
          <div>
            <Reveal inView={inView} delay={REVEAL_DELAYS.label}>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0F766E] dark:text-[#2DD4BF]">
                <span className="w-6 h-px bg-[#20C9C3]" aria-hidden="true" />
                {CONTACT_SECTION.label}
              </span>
            </Reveal>

            <Reveal inView={inView} delay={REVEAL_DELAYS.heading} className="mt-3">
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight"
              >
                {CONTACT_SECTION.title}
              </h2>
            </Reveal>

            <Reveal inView={inView} delay={REVEAL_DELAYS.description} className="mt-4">
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                {CONTACT_SECTION.description}
              </p>
            </Reveal>

            <Reveal inView={inView} delay={REVEAL_DELAYS.links} className="mt-8">
              <div className="space-y-3 max-w-sm">
                {CONTACT_LINKS.map((link) => {
                  const Icon = CONTACT_ICONS[link.id];
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      target={link.id === 'email' ? undefined : '_blank'}
                      rel={link.id === 'email' ? undefined : 'noreferrer'}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-[#20C9C3] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="w-11 h-11 grid place-items-center rounded-lg bg-[#E6FFFC] dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs text-slate-500 dark:text-slate-400">{link.label}</span>
                        <span className="block text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors">
                          {link.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal inView={inView} delay={REVEAL_DELAYS.form}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-6 sm:p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.12)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                    Your Name
                  </label>
                  <input id="contact-name" name="name" type="text" required placeholder="John Doe" className={INPUT_CLASS} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                    Email
                  </label>
                  <input id="contact-email" name="email" type="email" required placeholder="you@example.com" className={INPUT_CLASS} />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                  Subject
                </label>
                <input id="contact-subject" name="subject" type="text" required placeholder="Let's talk about a project" className={INPUT_CLASS} />
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0F766E] hover:bg-[#0B4F4A] text-white font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] focus-visible:ring-offset-2 cursor-pointer"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
