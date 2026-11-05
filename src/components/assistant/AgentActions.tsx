import { Briefcase, ClipboardList, Code2, Mail } from 'lucide-react';
import { AGENT_ACTIONS, type AgentActionId } from '../../data';

const ICONS: Record<AgentActionId, typeof Mail> = {
  'pre-interview': ClipboardList,
  assessment: Code2,
  opportunities: Briefcase,
  inquiry: Mail,
};

interface AgentActionsProps {
  onSelect: (label: string, reply: string) => void;
}

export default function AgentActions({ onSelect }: AgentActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {AGENT_ACTIONS.map((action) => {
        const Icon = ICONS[action.id];
        return (
          <button
            key={action.id}
            type="button"
            onClick={() => onSelect(action.title, action.reply)}
            className="group rounded-xl border border-line bg-surface p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-canvas">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="mt-2.5 text-[13px] font-medium leading-tight text-ink">{action.title}</p>
            <p className="mt-1 text-[11px] leading-snug text-muted">{action.description}</p>
          </button>
        );
      })}
    </div>
  );
}
