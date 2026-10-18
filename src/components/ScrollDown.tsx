import { type MouseEvent } from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollDownProps {
  /** The section id to scroll to (without the leading '#'). */
  target: string;
  /** Small label shown above the button. */
  label?: string;
}

export default function ScrollDown({ target, label = 'Scroll' }: ScrollDownProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector(`#${target}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${target}`}
      onClick={handleClick}
      className="group inline-flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] focus-visible:ring-offset-2 rounded-full p-1"
      aria-label="Scroll to next section"
    >
      <span className="text-[10px] font-medium tracking-[0.2em] uppercase">{label}</span>
      <span className="w-10 h-10 grid place-items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 shadow-sm group-hover:border-[#20C9C3] group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-all duration-300">
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </span>
    </a>
  );
}
