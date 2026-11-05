import { cn } from '../../lib/cn';
import type { AssistantMode } from '../../data';

const MODES: readonly { id: AssistantMode; label: string }[] = [
  { id: 'ask', label: 'Ask Me' },
  { id: 'agent', label: 'Agent Mode' },
];

interface ModeSwitchProps {
  mode: AssistantMode;
  onChange: (mode: AssistantMode) => void;
}

/** Segmented control with an animated sliding thumb. */
export default function ModeSwitch({ mode, onChange }: ModeSwitchProps) {
  return (
    <div
      role="tablist"
      aria-label="Assistant mode"
      className="relative mx-4 mt-3 grid grid-cols-2 rounded-lg border border-line bg-canvas p-1"
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-y-1 left-1 w-[calc(50%_-_4px)] rounded-md bg-surface shadow-sm ring-1 ring-line transition-transform duration-300 ease-out',
          mode === 'agent' && 'translate-x-full',
        )}
      />
      {MODES.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={mode === item.id}
          onClick={() => onChange(item.id)}
          className={cn(
            'relative z-10 rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200',
            mode === item.id ? 'text-ink' : 'text-muted hover:text-ink',
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
