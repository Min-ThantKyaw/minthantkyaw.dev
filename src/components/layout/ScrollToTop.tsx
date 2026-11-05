import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../../lib/scroll';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-20 right-5 z-40 grid h-10 w-10 place-items-center rounded-lg border border-line-strong bg-surface text-ink shadow-lg transition-all duration-300 hover:border-accent hover:text-accent sm:bottom-24 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
