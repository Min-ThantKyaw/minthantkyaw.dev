import { ArrowUpRight } from 'lucide-react';
import { ASK_SUGGESTIONS } from '../../data';

interface SuggestionChipsProps {
  onSelect: (label: string, reply: string) => void;
}

export default function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  return (
    <div className="space-y-2">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Try asking</p>
      {ASK_SUGGESTIONS.map((suggestion) => (
        <button
          key={suggestion.id}
          type="button"
          onClick={() => onSelect(suggestion.label, suggestion.reply)}
          className="group flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3.5 py-2.5 text-left text-[13px] text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          <span>{suggestion.label}</span>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-accent" />
        </button>
      ))}
    </div>
  );
}
