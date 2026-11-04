import { type FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, Loader2, MapPin } from 'lucide-react';
import { CONTACT_LINKS, CONTACT_SECTION, EMAIL_ADDRESS, PROFILE_INFO } from '../../data';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { Button } from '../ui/Button';

const LABEL_CLASS = 'block text-[13px] font-medium text-muted';

const INPUT_CLASS =
  'mt-2 w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    // Fallback: no form key configured — open the visitor's email client instead.
    if (!WEB3FORMS_KEY) {
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
        'Portfolio enquiry',
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Portfolio enquiry',
          from_name: 'Portfolio contact form',
          name,
          email,
          message,
          botcheck: String(data.get('botcheck') ?? ''),
        }),
      });
      const result: { success?: boolean } = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">Email</p>

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
                className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p
              aria-live="polite"
              className="mt-2 h-4 font-mono text-[12px] uppercase tracking-[0.16em] text-accent"
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
                    <span className="w-16 shrink-0 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
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
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                {PROFILE_INFO.location.value} · {PROFILE_INFO.location.timezone}
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                {PROFILE_INFO.availabilityStatus}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-6">
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
            >
              {/* Honeypot — real users never see or fill this. */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

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

              <div className="mt-5">
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

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      Sending
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
                <p aria-live="polite" className="text-sm">
                  {status === 'success' && (
                    <span className="inline-flex items-center gap-1.5 text-accent">
                      <Check className="h-4 w-4" />
                      Message sent — I&apos;ll get back to you soon.
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="text-muted">
                      Something went wrong —{' '}
                      <a href={`mailto:${EMAIL_ADDRESS}`} className="text-accent hover:underline">
                        email me directly
                      </a>
                      .
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
