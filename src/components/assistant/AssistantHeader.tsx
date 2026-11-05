import { Bot, Minus, X } from 'lucide-react';
import { ASSISTANT_NAME, ASSISTANT_STATUS } from '../../data';

interface AssistantHeaderProps {
  onMinimize: () => void;
  onClose: () => void;
}

export default function AssistantHeader({ onMinimize, onClose }: AssistantHeaderProps) {
  return (
    <div className="flex items-center gap-3 border-b border-line px-4 py-3">
      <span className="relative shrink-0">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-accent ring-1 ring-accent/25">
          <Bot className="h-4 w-4" aria-hidden="true" />
        </span>
        {/* Online indicator */}
        <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-surface bg-emerald-500" />
        </span>
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{ASSISTANT_NAME}</p>
        <p className="truncate text-[11px] text-muted">{ASSISTANT_STATUS}</p>
      </div>

      <button
        type="button"
        onClick={onMinimize}
        aria-label="Minimize assistant"
        className="grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-ink"
      >
        <Minus className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close assistant"
        className="grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-ink"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
