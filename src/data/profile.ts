export interface ProfileInfo {
  readonly name: string;
  readonly role: string;
  readonly availabilityStatus: string;
  readonly isAvailable: boolean;
  /** One-line value proposition shown in the hero. */
  readonly headline: string;
  /** First bio paragraph, shown in the About section. */
  readonly description: string;
  /** Second bio paragraph, shown in the About section. */
  readonly bioExtra: string;
  readonly location: {
    readonly label: string;
    readonly value: string;
    readonly timezone: string;
  };
  readonly age: {
    readonly label: string;
    readonly value: number;
  };
  readonly stats: readonly {
    readonly value: string;
    readonly label: string;
  }[];
}

/** Public path to the downloadable résumé. */
export const CV_URL = '/Min-Thant-Kyaw-CV.pdf';

export const PROFILE_INFO: ProfileInfo = {
  name: "Min Thant Kyaw",
  role: "WEB DEVELOPER",
  availabilityStatus: "Available for work",
  isAvailable: true,
  headline:
    "Building AI-driven, production-ready applications with a strong focus on backend development. Experienced in PHP, Laravel, Node.js, and TypeScript, with expertise in developing scalable APIs and modern web applications.",
  description:
    "I'm a web developer based in Yangon, Myanmar, focused on building modern web applications with React, TypeScript, Node.js and modern tooling — using AI-assisted development to learn faster, solve harder problems and ship better solutions.",
  bioExtra:
    "Since starting my journey in 2023, I've grown from shipping client websites to leading backend architecture at Metateam Myanmar — improving API performance, mentoring junior developers and owning deployments end to end.",
  location: {
    label: "Location",
    value: "Yangon, Myanmar",
    timezone: "UTC+6:30",
  },
  age: {
    label: "Age",
    value: 25,
  },
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "10+", label: "Projects shipped" },
    { value: "2023", label: "In Tech Since" },
  ],
} as const;

/**
 * Calculates staggered animation delays for entrance sequences.
 */
export function calculateEntranceDelay(stepIndex: number, baseDelayMs = 0, stepIncrementMs = 100): number {
  if (stepIndex < 0) return 0;
  return baseDelayMs + stepIndex * stepIncrementMs;
}
