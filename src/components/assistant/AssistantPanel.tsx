import { useEffect, useRef, useState } from 'react';
import type { AssistantMessage, AssistantMode } from '../../data';
import AssistantHeader from './AssistantHeader';
import ModeSwitch from './ModeSwitch';
import AssistantThread from './AssistantThread';
import AssistantComposer from './AssistantComposer';

interface AssistantPanelProps {
  mode: AssistantMode;
  messages: AssistantMessage[];
  isTyping: boolean;
  onModeChange: (mode: AssistantMode) => void;
  onPrompt: (label: string, reply: string) => void;
  onSend: (text: string) => void;
  onClear: () => void;
  onMinimize: () => void;
  onClose: () => void;
}

/** Glass dialog: 400×580 floating card on desktop, bottom sheet on mobile. */
export default function AssistantPanel({
  mode,
  messages,
  isTyping,
  onModeChange,
  onPrompt,
  onSend,
  onClear,
  onMinimize,
  onClose,
}: AssistantPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const onMinimizeRef = useRef(onMinimize);
  onMinimizeRef.current = onMinimize;
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    panelRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onMinimizeRef.current();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 320);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Personal AI Assistant"
      tabIndex={-1}
      className="animate-panel-in fixed inset-x-0 bottom-0 z-[65] flex h-[min(85dvh,640px)] flex-col overflow-hidden rounded-t-2xl border border-line bg-surface-glass shadow-2xl shadow-black/15 outline-none backdrop-blur-xl sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[580px] sm:w-[400px] sm:rounded-2xl dark:shadow-black/50"
    >
      <AssistantHeader onMinimize={onMinimize} onClose={onClose} />
      <ModeSwitch mode={mode} onChange={onModeChange} />

      {booting ? (
        <div className="flex-1 space-y-3 px-4 py-4" aria-hidden="true">
          <div className="h-11 w-4/5 animate-pulse rounded-2xl rounded-bl-md bg-line" />
          <div className="ml-auto h-9 w-1/2 animate-pulse rounded-2xl rounded-br-md bg-line" />
          <div className="h-11 w-3/5 animate-pulse rounded-2xl rounded-bl-md bg-line" />
        </div>
      ) : (
        <AssistantThread
          mode={mode}
          messages={messages}
          isTyping={isTyping}
          onPrompt={onPrompt}
        />
      )}

      <AssistantComposer disabled={isTyping} onSend={onSend} onClear={onClear} />
    </div>
  );
}
