import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex select-none items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50';

const SIZES: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-[13px]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm',
};

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-ink text-canvas hover:bg-accent hover:text-canvas',
  outline: 'border border-line-strong text-ink hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-ink',
};

function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(BASE, SIZES[size], VARIANTS[variant], className);
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  external,
  ...props
}: CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    external?: boolean;
  }) {
  return (
    <a
      className={buttonClasses(variant, size, className)}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
