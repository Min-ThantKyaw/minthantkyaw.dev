import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in the viewport and returns its id.
 * Uses a scroll listener so it also works with sections taller than the viewport.
 */
export function useScrollSpy(ids: readonly string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (ids.length === 0) return;

    const update = () => {
      const marker = window.scrollY + offset;
      let current = '';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActiveId(atBottom ? ids[ids.length - 1] : current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids, offset]);

  return activeId;
}
