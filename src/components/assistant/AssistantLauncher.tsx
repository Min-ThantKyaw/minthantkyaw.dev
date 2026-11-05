import { Bot } from 'lucide-react';

interface AssistantLauncherProps {
  onOpen: () => void;
  unread: boolean;
}

/** Floating button shown when the assistant panel is closed or minimized. */
export default function AssistantLauncher({ onOpen, unread }: AssistantLauncherProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Open personal AI assistant"
      className="animate-fade-in fixed bottom-5 right-5 z-[44] flex items-center gap-2.5 rounded-full border border-line bg-surface-glass py-1.5 pl-1.5 pr-4 shadow-xl shadow-black/10 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent sm:bottom-8 sm:right-8 dark:shadow-black/40"
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-accent-soft text-accent">
        <Bot className="h-5 w-5" aria-hidden="true" />
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-emerald-500" />
      </span>
      <span className="text-sm font-medium text-ink">Ask my AI</span>
      {unread && (
        <span className="relative flex h-2 w-2" aria-label="New reply from the assistant">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      )}
    </button>
  );
}
