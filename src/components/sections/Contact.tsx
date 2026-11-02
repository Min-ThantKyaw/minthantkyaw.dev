import { type FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, MapPin } from 'lucide-react';
import { CONTACT_LINKS, CONTACT_SECTION, EMAIL_ADDRESS, PROFILE_INFO } from '../../data';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { Button } from '../ui/Button';

const LABEL_CLASS =
  'block font-mono text-[10px] uppercase tracking-[0.18em] text-muted';

const INPUT_CLASS =
  'mt-2 w-full border-b border-line bg-transparent py-2.5 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
    } catch {
      /* clipboard unavailable — the email link still works */
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      'Portfolio enquiry',
    )}&body=${encodeURIComponent(body)}`;
  };

  const socials = CONTACT_LINKS.filter((link) => link.id !== 'email');

  return (
    <Section
      id="contact"
      index="05"
      label={CONTACT_SECTION.label}
      title={CONTACT_SECTION.title}
      description={CONTACT_SECTION.description}
    >
      <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Direct contact */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Email</p>

            <div className="mt-3 flex items-start gap-3">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="break-all font-display text-[clamp(1.35rem,3.4vw,2.1rem)] font-medium leading-tight tracking-tight text-ink transition-colors hover:text-accent"
              >
                {EMAIL_ADDRESS}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? 'Email copied' : 'Copy email address'}
                className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p
              aria-live="polite"
              className="mt-2 h-4 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
            >
              {copied ? 'Copied to clipboard' : ''}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 border-t border-line">
              {socials.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-line py-4"
                >
                  <span className="flex min-w-0 items-baseline gap-3">
                    <span className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {link.label}
                    </span>
                    <span className="truncate text-sm text-ink transition-colors group-hover:text-accent">
                      {link.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {PROFILE_INFO.location.value} · {PROFILE_INFO.location.timezone}
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                Open to work
              </span>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-6">
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={LABEL_CLASS}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={LABEL_CLASS}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="contact-message" className={LABEL_CLASS}>
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

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button type="submit">
                  Send message
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Opens your email client
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
