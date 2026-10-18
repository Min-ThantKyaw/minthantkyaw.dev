import { useEffect, useRef, useState } from 'react';

export interface UseInViewOptions {
  /** Fraction of the element that must be visible before it counts as "in view". */
  threshold?: number;
  /** Margin string passed to IntersectionObserver (e.g. '0px 0px -10% 0px'). */
  rootMargin?: string;
}

/**
 * Returns a ref to attach to an element and a boolean that flips to `true`
 * once the element first enters the viewport. It observes only until the
 * first intersection (so the reveal never replays on small scroll jitter) and
 * respects `prefers-reduced-motion` by revealing immediately.
 */
export function useInView<T extends HTMLElement>(options?: UseInViewOptions) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? '0px 0px -10% 0px',
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return { ref, inView };
}
