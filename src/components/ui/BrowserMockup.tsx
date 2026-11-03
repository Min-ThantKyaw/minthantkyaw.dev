import type { ComponentType } from 'react';
import { cn } from '../../lib/cn';

export type MockupVariant = 'api' | 'dashboard' | 'booking';

/** Abstract endpoint list rendered inside a dark editor-style panel. */
function ApiMock() {
  const routes = [
    { method: 'GET', path: '/api/products', width: 'w-2/5' },
    { method: 'POST', path: '/api/auth/login', width: 'w-1/2' },
    { method: 'GET', path: '/api/orders/:id', width: 'w-1/3' },
    { method: 'PATCH', path: '/api/orders/:id', width: 'w-2/5' },
    { method: 'DELETE', path: '/api/products/:id', width: 'w-1/2' },
  ];

  return (
    <div className="flex h-full flex-col gap-2.5 rounded-lg bg-[#1c1917] p-4 sm:p-5">
      {routes.map((route, index) => (
        <div key={index} className="flex items-center gap-2.5">
          <span className="rounded bg-accent px-1.5 py-0.5 font-mono text-[8px] font-semibold text-white">
            {route.method}
          </span>
          <span className={cn('h-2 rounded-full bg-white/15', route.width)} />
          <span className="ml-auto font-mono text-[8px] text-white/40">200</span>
        </div>
      ))}
      <div className="mt-auto flex items-center gap-2 pt-1">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="h-1.5 w-16 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

/** Sidebar + stat cards + bar chart, like an analytics dashboard. */
function DashboardMock() {
  const bars = ['h-1/3', 'h-1/2', 'h-2/5', 'h-3/4', 'h-3/5', 'h-full', 'h-2/3'];

  return (
    <div className="flex h-full gap-3">
      <div className="flex w-1/4 flex-col gap-2 rounded-lg border border-line bg-surface p-3">
        <span className="h-2 w-3/5 rounded-full bg-line-strong" />
        <span className="h-1.5 w-full rounded-full bg-accent" />
        <span className="h-1.5 w-4/5 rounded-full bg-line" />
        <span className="h-1.5 w-4/5 rounded-full bg-line" />
        <span className="h-1.5 w-3/5 rounded-full bg-line" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-line bg-surface p-2.5">
              <span className="block h-1.5 w-2/3 rounded-full bg-line" />
              <span className="mt-2 block h-2.5 w-1/2 rounded-full bg-accent-soft" />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-line bg-surface p-3">
          {bars.map((height, i) => (
            <span
              key={i}
              className={cn(
                'flex-1 rounded-sm',
                height,
                i === bars.length - 2 ? 'bg-accent' : 'bg-accent-soft',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Calendar grid with a few highlighted booking days plus a detail panel. */
function BookingMock() {
  const booked = [3, 8, 9, 15, 21, 26];

  return (
    <div className="flex h-full gap-3">
      <div className="grid flex-1 grid-cols-7 content-start gap-1.5 rounded-lg border border-line bg-surface p-3">
        {Array.from({ length: 28 }, (_, i) => (
          <span
            key={i}
            className={cn(
              'aspect-square rounded-sm',
              booked.includes(i) ? 'bg-accent' : 'border border-line bg-canvas',
            )}
          />
        ))}
      </div>
      <div className="flex w-1/3 flex-col gap-2 rounded-lg border border-line bg-surface p-3">
        <span className="h-2 w-4/5 rounded-full bg-line-strong" />
        <span className="h-1.5 w-full rounded-full bg-line" />
        <span className="h-1.5 w-3/5 rounded-full bg-line" />
        <span className="mt-auto h-6 w-full rounded-md bg-accent" />
      </div>
    </div>
  );
}

const VARIANTS: Record<MockupVariant, ComponentType> = {
  api: ApiMock,
  dashboard: DashboardMock,
  booking: BookingMock,
};

interface BrowserMockupProps {
  variant: MockupVariant;
  /** Text shown in the fake address bar. */
  url: string;
  className?: string;
}

/**
 * A browser-frame illustration with an abstract UI sketch inside —
 * stands in for real screenshots until they exist.
 */
export default function BrowserMockup({ variant, url, className }: BrowserMockupProps) {
  const Mock = VARIANTS[variant];

  return (
    <div aria-hidden="true" className={cn('overflow-hidden bg-canvas', className)}>
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md border border-line bg-canvas px-3 py-1 font-mono text-[10px] text-muted">
          {url}
        </span>
      </div>
      <div className="aspect-[16/10] p-4 sm:p-5">
        <Mock />
      </div>
    </div>
  );
}
