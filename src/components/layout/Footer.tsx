import { ArrowUp, Download } from 'lucide-react';
import { CV_URL } from '../../data';
import Container from '../ui/Container';
import { scrollToTop } from '../../lib/scroll';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-md bg-ink font-display text-[11px] font-bold leading-none text-canvas"
          >
            M
          </span>
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} Min Thant Kyaw
          </p>
        </div>

        <a
          href={CV_URL}
          download
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors hover:text-accent"
        >
          <Download className="h-3.5 w-3.5" />
          Download CV
        </a>

        <p className="text-[13px] text-muted">Built with React · TypeScript · Tailwind</p>

        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors hover:text-ink"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </Container>
    </footer>
  );
}
