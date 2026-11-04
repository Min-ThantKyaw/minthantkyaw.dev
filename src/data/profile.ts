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
    "Building and maintaining AI-driven, production-ready applications with a strong backend focus using PHP, Laravel, Node.js, and TypeScript.",
  description:
    "I'm a developer based in Yangon, Myanmar, with a strong focus on backend development, system maintenance, and AI-assisted application development.",
  bioExtra:
    "Since starting my journey in 2023, I've gained hands-on experience maintaining production applications, improving APIs, troubleshooting server issues, and handling deployment and infrastructure-related tasks. Outside of work, I build personal projects using PHP, Laravel, Node.js, TypeScript, and React, leveraging AI-assisted development to explore new technologies and turn ideas into working applications.",
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
