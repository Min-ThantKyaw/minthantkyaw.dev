import { ArrowUp } from 'lucide-react';
import Container from '../ui/Container';
import { scrollToTop } from '../../lib/scroll';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded bg-ink font-mono text-[11px] font-bold leading-none text-canvas"
          >
            &gt;_
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            © {new Date().getFullYear()} Min Thant Kyaw
          </p>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          Built with React · TypeScript · Tailwind
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </Container>
    </footer>
  );
}
