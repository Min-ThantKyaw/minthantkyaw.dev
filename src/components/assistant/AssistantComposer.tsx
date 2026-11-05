import { useRef, useState } from 'react';
import { Eraser, Send } from 'lucide-react';

interface AssistantComposerProps {
  disabled: boolean;
  onSend: (text: string) => void;
  onClear: () => void;
}

export default function AssistantComposer({ disabled, onSend, onClear }: AssistantComposerProps) {
  const [draft, setDraft] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const submit = () => {
    const text = draft.trim();
    if (!text || disabled) return;
    onSend(text);
    setDraft('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
      className="border-t border-line p-3"
    >
      <div className="flex items-end gap-2 rounded-xl border border-line bg-surface px-3 py-2 transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
        <textarea
          ref={textareaRef}
          value={draft}
          rows={1}
          onChange={(event) => {
            setDraft(event.target.value);
            event.currentTarget.style.height = 'auto';
            event.currentTarget.style.height = `${Math.min(event.currentTarget.scrollHeight, 96)}px`;
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              submit();
            }
          }}
          placeholder="Ask about experience, skills, projects…"
          aria-label="Message the assistant"
          className="max-h-24 flex-1 resize-none bg-transparent py-1.5 text-[14px] leading-relaxed text-ink placeholder:text-muted/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={disabled || !draft.trim()}
          aria-label="Send message"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent text-canvas transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 px-1">
        <span className="text-[10px] text-muted">Enter to send · Shift+Enter for a new line</span>
        <button
          type="button"
          onClick={onClear}
          className="inline-flex shrink-0 items-center gap-1 text-[10px] font-medium text-muted transition-colors hover:text-ink"
        >
          <Eraser className="h-3 w-3" />
          Clear conversation
        </button>
      </div>
    </form>
  );
}
