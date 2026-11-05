import { useEffect, useRef } from 'react';
import type { AssistantMessage, AssistantMode } from '../../data';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import SuggestionChips from './SuggestionChips';
import AgentActions from './AgentActions';

interface AssistantThreadProps {
  mode: AssistantMode;
  messages: AssistantMessage[];
  isTyping: boolean;
  onPrompt: (label: string, reply: string) => void;
}

export default function AssistantThread({
  mode,
  messages,
  isTyping,
  onPrompt,
}: AssistantThreadProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const hasConversation = messages.some((message) => message.role === 'user');

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, isTyping]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
      <div className="space-y-3">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isTyping && <TypingIndicator />}

        {!hasConversation && !isTyping && (
          <div className="pt-1">
            {mode === 'ask' ? (
              <SuggestionChips onSelect={onPrompt} />
            ) : (
              <AgentActions onSelect={onPrompt} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
