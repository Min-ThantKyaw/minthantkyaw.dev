export interface ProfileInfo {
  readonly name: string;
  readonly role: string;
  readonly greeting: string;
  readonly availabilityStatus: string;
  readonly isAvailable: boolean;
  readonly description: string;
  readonly roles: readonly string[];
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

export const PROFILE_INFO: ProfileInfo = {
  name: "Min Thant Kyaw",
  role: "WEB DEVELOPER",
  greeting: "Who am I?",
  availabilityStatus: "AVAILABLE FOR WORK",
  isAvailable: true,
  description:
    "I'm a developer focused on building modern web applications with React, TypeScript, Node.js and modern web technologies — using AI-assisted development to learn faster, solve problems, and build better solutions.I'm a developer focused on building modern web applications with React, TypeScript, Node.js and modern web technologies — using AI-assisted development to learn faster, solve problems, and build better solutions.",
  roles: [
    "Web Application Developer",
    "Backend Developer",
    "WordPress Developer",
  ],
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
    { value: "2023", label: "In tech since" },
    { value: "30+", label: "Projects shipped" },
    { value: "2+ yrs", label: "Experience" },
  ],
} as const;

/**
 * Calculates staggered animation delays for the hero entrance sequence.
 */
export function calculateEntranceDelay(stepIndex: number, baseDelayMs = 0, stepIncrementMs = 100): number {
  if (stepIndex < 0) return 0;
  return baseDelayMs + stepIndex * stepIncrementMs;
}
