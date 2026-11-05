import { useEffect, useRef, useState } from 'react';
import {
  ASSISTANT_WELCOME,
  getMockReply,
  type AssistantMessage,
  type AssistantMode,
} from '../../data';
import AssistantLauncher from './AssistantLauncher';
import AssistantPanel from './AssistantPanel';

const SEEN_KEY = 'assistant-widget-seen';
const MODE_KEY = 'assistant-mode';
const OPEN_DELAY_MS = 600;
const REPLY_DELAY_MS = 1100;

type Status = 'closed' | 'open' | 'minimized';

let messageCounter = 0;
function nextId(prefix: string): string {
  messageCounter += 1;
  return `${prefix}-${messageCounter}`;
}

function welcomeMessage(mode: AssistantMode): AssistantMessage {
  return { id: nextId('welcome'), role: 'ai', text: ASSISTANT_WELCOME[mode] };
}

function readStoredMode(): AssistantMode {
  try {
    return window.localStorage.getItem(MODE_KEY) === 'agent' ? 'agent' : 'ask';
  } catch {
    return 'ask';
  }
}

/**
 * Floating personal AI assistant (UI prototype).
 * Auto-opens on the first visit, then lives in the corner as a launcher.
 * All replies are mocked locally — no network or AI integration.
 */
export default function AssistantWidget() {
  const [status, setStatus] = useState<Status>('closed');
  const [mode, setMode] = useState<AssistantMode>(readStoredMode);
  const [messages, setMessages] = useState<AssistantMessage[]>(() => [welcomeMessage(readStoredMode())]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const statusRef = useRef<Status>('closed');
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  // Auto-open once per visitor.
  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(SEEN_KEY) === '1';
    } catch {
      /* storage unavailable — treat as first visit */
    }
    if (seen) return;

    const timer = setTimeout(() => {
      setStatus('open');
      try {
        window.localStorage.setItem(SEEN_KEY, '1');
      } catch {
        /* ignore */
      }
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  // Clear any pending mock reply on unmount.
  useEffect(
    () => () => {
      if (replyTimer.current) clearTimeout(replyTimer.current);
    },
    [],
  );

  const open = () => {
    setStatus('open');
    setHasUnread(false);
  };
  const minimize = () => setStatus('minimized');
  const close = () => setStatus('closed');

  const queueReply = (text: string) => {
    setIsTyping(true);
    if (replyTimer.current) clearTimeout(replyTimer.current);
    replyTimer.current = setTimeout(() => {
      setMessages((prev) => [...prev, { id: nextId('ai'), role: 'ai', text }]);
      setIsTyping(false);
      if (statusRef.current !== 'open') setHasUnread(true);
    }, REPLY_DELAY_MS);
  };

  const send = (text: string, reply?: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { id: nextId('user'), role: 'user', text: trimmed }]);
    setHasUnread(false);
    queueReply(reply ?? getMockReply(trimmed));
  };

  const changeMode = (next: AssistantMode) => {
    setMode(next);
    try {
      window.localStorage.setItem(MODE_KEY, next);
    } catch {
      /* ignore */
    }
    if (replyTimer.current) clearTimeout(replyTimer.current);
    setIsTyping(false);
    setMessages([welcomeMessage(next)]);
  };

  const clear = () => {
    if (replyTimer.current) clearTimeout(replyTimer.current);
    setIsTyping(false);
    setMessages([welcomeMessage(mode)]);
  };

  if (status !== 'open') {
    return <AssistantLauncher onOpen={open} unread={hasUnread} />;
  }

  return (
    <AssistantPanel
      mode={mode}
      messages={messages}
      isTyping={isTyping}
      onModeChange={changeMode}
      onPrompt={(label, reply) => send(label, reply)}
      onSend={(text) => send(text)}
      onClear={clear}
      onMinimize={minimize}
      onClose={close}
    />
  );
}
