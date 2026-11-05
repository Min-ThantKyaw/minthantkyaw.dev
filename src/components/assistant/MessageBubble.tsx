import { cn } from '../../lib/cn';
import type { AssistantMessage } from '../../data';

export default function MessageBubble({ message }: { message: AssistantMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex animate-fade-in', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed',
          isUser
            ? 'rounded-br-md bg-ink text-canvas'
            : 'rounded-bl-md border border-line bg-surface text-ink',
        )}
      >
        {message.text}
      </div>
    </div>
  );
}
