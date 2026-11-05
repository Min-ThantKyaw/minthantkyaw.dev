export type AssistantMode = 'ask' | 'agent';
export type AssistantRole = 'user' | 'ai';

export interface AssistantMessage {
  readonly id: string;
  readonly role: AssistantRole;
  readonly text: string;
}

export const ASSISTANT_NAME = 'Personal AI Assistant';
export const ASSISTANT_STATUS = 'Online · replies instantly';

export const ASSISTANT_WELCOME: Record<AssistantMode, string> = {
  ask: "Hey there! 👋\nI'm his personal AI assistant. Curious about his background, skills, or projects? Feel free to ask me anything.",
  agent:
    "Agent Mode is on. I can run an interactive pre-interview, test technical fit, or help you reach out. Pick a starting point below — everything is a demo for now.",
};

export interface AskSuggestion {
  readonly id: string;
  readonly label: string;
  readonly reply: string;
}

export const ASK_SUGGESTIONS: readonly AskSuggestion[] = [
  {
    id: 'experience',
    label: 'Tell me about his experience.',
    reply:
      "He's a Senior Developer at Metateam Myanmar (Jul 2025 — present), leading backend architecture, code reviews and deployments. Before that he spent a year there as a Junior Developer, building client sites and REST APIs. Highlights: 40% faster API responses, a system serving 5,000+ users, and 10+ client websites delivered.",
  },
  {
    id: 'skills',
    label: 'What are his strongest technical skills?',
    reply:
      'His core stack is PHP, Laravel and Node.js, with TypeScript and React on the frontend. He works with PostgreSQL and MySQL for data, and is comfortable with AWS, Docker, Nginx and GitHub Actions.',
  },
  {
    id: 'projects',
    label: 'Tell me about his personal projects.',
    reply:
      'Three favourites: a full-stack Booking System (React, Node.js, MongoDB), an E-commerce REST API (Node.js, Express, PostgreSQL, JWT) and a Task Manager Dashboard (React, TypeScript, Tailwind). Ask me about any one of them for a deeper walkthrough.',
  },
  {
    id: 'backend',
    label: 'What is his backend expertise?',
    reply:
      'Backend is his specialty — REST API design, authentication, database modelling and business logic. He works mainly with Node.js/Express and Laravel/PHP on PostgreSQL and MySQL, and owns deployments end to end.',
  },
  {
    id: 'ai',
    label: 'How does he use AI in development?',
    reply:
      'He treats AI as a development multiplier — ChatGPT, Claude, Gemini, Copilot and Cursor for scaffolding, debugging and learning new concepts faster. He always reviews and owns the output, never ships blindly.',
  },
];

export type AgentActionId = 'pre-interview' | 'assessment' | 'opportunities' | 'inquiry';

export interface AgentAction {
  readonly id: AgentActionId;
  readonly title: string;
  readonly description: string;
  readonly reply: string;
}

export const AGENT_ACTIONS: readonly AgentAction[] = [
  {
    id: 'pre-interview',
    title: 'Start Pre-Interview',
    description: 'A quick guided Q&A about his background.',
    reply:
      "Let's start the pre-interview. First question: which role are you hiring for, and what does the day-to-day work look like?",
  },
  {
    id: 'assessment',
    title: 'Technical Assessment',
    description: 'Sample questions across his stack.',
    reply:
      "Technical assessment ready. Sample question: 'How would you design a REST API for order management that stays fast under heavy reads?' Want another?",
  },
  {
    id: 'opportunities',
    title: 'Discuss Opportunities',
    description: 'Roles, availability and next steps.',
    reply:
      "He's open to full-time roles and remote-friendly work (UTC+6:30). Share the role details and I'll tell you how his experience maps to it.",
  },
  {
    id: 'inquiry',
    title: 'Send an Inquiry',
    description: 'Draft a message or jump to contact.',
    reply:
      'You can reach him at hello@minthantkyaw.dev — or use the contact form at the bottom of the page. Want me to draft a short message for you?',
  },
];

const KEYWORD_REPLIES: readonly { keywords: readonly string[]; reply: string }[] = [
  {
    keywords: ['backend', 'api', 'database', 'postgres', 'mysql', 'mongo', 'express', 'laravel', 'php'],
    reply:
      'Backend is his specialty — REST API design, authentication, database modelling and business logic. He works mainly with Node.js/Express and Laravel/PHP on PostgreSQL and MySQL, and owns deployments end to end.',
  },
  {
    keywords: ['experience', 'career', 'work', 'job', 'metateam', 'employed'],
    reply:
      "He's a Senior Developer at Metateam Myanmar (Jul 2025 — present), previously a Junior Developer there. He leads backend architecture, reviews code and manages deployments — with measurable wins like 40% faster APIs and a system serving 5,000+ users.",
  },
  {
    keywords: ['project', 'built', 'booking', 'dashboard', 'e-commerce', 'ecommerce'],
    reply:
      'Recent work includes a Booking System (React, Node.js, MongoDB), an E-commerce REST API (Node.js, Express, PostgreSQL, JWT) and a Task Manager Dashboard (React, TypeScript, Tailwind). Which one would you like to dig into?',
  },
  {
    keywords: ['skill', 'stack', 'technolog', 'strongest', 'language', 'react', 'node', 'typescript'],
    reply:
      'His strongest areas are PHP, Laravel and Node.js, with TypeScript and React on the frontend and PostgreSQL/MySQL for data. He also works confidently with Docker, Nginx, AWS and GitHub Actions.',
  },
  {
    keywords: ['ai', 'copilot', 'cursor', 'chatgpt', 'claude', 'gemini'],
    reply:
      'He uses AI as a development multiplier — ChatGPT, Claude, Gemini, Copilot and Cursor for scaffolding, debugging and learning faster — while reviewing and owning everything that ships.',
  },
  {
    keywords: ['contact', 'email', 'hire', 'available', 'opportunit', 'reach', 'salary'],
    reply:
      "He's available for full-time roles and remote-friendly work (UTC+6:30). The fastest route is hello@minthantkyaw.dev or the contact form at the bottom of the page.",
  },
];

const FALLBACK_REPLIES: readonly string[] = [
  'I can help with his background, technical skills, work experience and projects. Try one of the suggestions below — or switch to Agent Mode.',
  "That's a little outside what I know. Ask me about his experience, backend work or projects, and I'll give you the details.",
];

function matchesKeyword(text: string, keyword: string): boolean {
  if (keyword.length <= 2) {
    return new RegExp(`\\b${keyword}\\b`).test(text);
  }
  return text.includes(keyword);
}

/** Deterministic mock reply — keyword matched, with friendly fallbacks. */
export function getMockReply(input: string): string {
  const text = input.toLowerCase();

  for (const entry of KEYWORD_REPLIES) {
    if (entry.keywords.some((keyword) => matchesKeyword(text, keyword))) {
      return entry.reply;
    }
  }

  if (/\b(hi|hello|hey|yo)\b/.test(text)) {
    return 'Hey! Ask me about his experience, skills or projects — or switch to Agent Mode for a guided pre-interview.';
  }

  return FALLBACK_REPLIES[text.length % FALLBACK_REPLIES.length];
}
