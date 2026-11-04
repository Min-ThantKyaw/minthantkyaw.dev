import { type PointerEvent, type ReactNode, useRef } from 'react';
import { cn } from '../../lib/cn';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Classes for the inner wrapper that holds the card content. */
  contentClassName?: string;
}

/**
 * Card with a soft theme-colored glow that follows the cursor.
 * The gradient position is written to CSS custom properties on pointer move,
 * so no React re-render happens while the mouse is moving.
 */
export default function SpotlightCard({ children, className, contentClassName }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    node.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        'group/spot relative overflow-hidden transition-all duration-300 hover:border-accent',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--accent) 20%, transparent), transparent 68%)',
        }}
      />
      <div className={cn('relative', contentClassName)}>{children}</div>
    </div>
  );
}
