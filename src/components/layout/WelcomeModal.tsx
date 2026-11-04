import { type MouseEvent, useEffect, useRef, useState } from 'react';
import { ArrowRight, Bot, X } from 'lucide-react';
import { AI_ASSISTANT_URL } from '../../data';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { scrollToSection } from '../../lib/scroll';
import { Button, ButtonLink } from '../ui/Button';

const SEEN_STORAGE_KEY = 'welcome-modal-seen';
const OPEN_DELAY_MS = 700;

function hasSeenModal(): boolean {
  try {
    return window.localStorage.getItem(SEEN_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function rememberDismissal(): void {
  try {
    window.localStorage.setItem(SEEN_STORAGE_KEY, '1');
  } catch {
    /* storage unavailable — the modal will simply appear again next visit */
  }
}

/**
 * One-time welcome dialog. Bottom-sheet on mobile, centered dialog on desktop.
 * Dismissed via the close button, backdrop click, Escape, or either CTA, and
 * remembered in localStorage so it only appears once per visitor.
 */
export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useLockBodyScroll(open);

  const dismiss = () => {
    setOpen(false);
    rememberDismissal();
  };

  useEffect(() => {
    if (hasSeenModal()) return;
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  if (!open) return null;

  const isInPageLink = AI_ASSISTANT_URL.startsWith('#');
  const isExternal = /^https?:\/\//.test(AI_ASSISTANT_URL);

  const handlePrimary = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isInPageLink) {
      dismiss();
      return;
    }
    event.preventDefault();
    dismiss();
    requestAnimationFrame(() => scrollToSection(AI_ASSISTANT_URL, 24));
  };

  const handleExplore = () => {
    dismiss();
    requestAnimationFrame(() => scrollToSection('#projects', 24));
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
      <div
        aria-hidden="true"
        onClick={dismiss}
        className="animate-overlay-in absolute inset-0 bg-black/45 backdrop-blur-sm dark:bg-black/65"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        aria-describedby="welcome-description"
        tabIndex={-1}
        className="animate-sheet-up relative max-h-[88vh] w-full overflow-y-auto rounded-t-2xl border border-line bg-surface p-6 shadow-2xl shadow-black/10 outline-none sm:max-w-lg sm:rounded-2xl sm:p-8 dark:shadow-black/40"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss welcome message"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </div>

        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
          AI assistant
        </p>
        <h2
          id="welcome-title"
          className="mt-2 font-display text-2xl font-medium tracking-tight text-ink sm:text-[28px]"
        >
          Meet My Personal AI
        </h2>
        <p id="welcome-description" className="mt-3 text-[15px] leading-relaxed text-muted">
          I&apos;m your AI-powered personal assistant. Ask me about my developer&apos;s background,
          technical skills, work experience, and projects — or start an interactive pre-interview.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={AI_ASSISTANT_URL}
            size="md"
            className="w-full sm:flex-1"
            onClick={handlePrimary}
            {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            Chat with My AI Assistant
            <Bot className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <Button variant="outline" size="md" className="w-full sm:flex-1" onClick={handleExplore}>
            Explore Portfolio
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}
