import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export default function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 font-mono text-[12px] uppercase tracking-[0.12em] text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
