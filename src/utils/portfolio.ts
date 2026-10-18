/**
 * Utility functions and data definitions for Min Thant Kyaw's portfolio
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
] as const;

export const DEFAULT_SCROLL_THRESHOLD = 30;

/**
 * Determines whether the navbar should display its translucent glass state
 * based on current vertical scroll position.
 */
export function isNavbarScrolled(scrollY: number, threshold = DEFAULT_SCROLL_THRESHOLD): boolean {
  return scrollY > threshold;
}

export interface ProfileInfo {
  readonly name: string;
  readonly role: string;
  readonly greeting: string;
  readonly availabilityStatus: string;
  readonly isAvailable: boolean;
  readonly headingLead: string;
  readonly headingHighlight: string;
  readonly description: string;
  readonly location: {
    readonly label: string;
    readonly value: string;
  };
  readonly age: {
    readonly label: string;
    readonly value: number;
  };
}

export const PROFILE_INFO: ProfileInfo = {
  name: 'Min Thant Kyaw',
  greeting: "Hello, I'm",
  role: 'WEB DEVELOPER',
  availabilityStatus: 'AVAILABLE FOR WORK',
  isAvailable: true,
  headingLead: 'Building modern web experiences with',
  headingHighlight: 'clean and scalable code.',
  description: "I'm a developer focused on building modern web applications with React, TypeScript, Node.js and modern web technologies.",
  location: {
    label: 'Location',
    value: 'Yangon, Myanmar',
  },
  age: {
    label: 'Age',
    value: 25,
  },
} as const;

/**
 * Calculates staggered animation delays for hero entrance sequence.
 */
export function calculateEntranceDelay(stepIndex: number, baseDelayMs = 0, stepIncrementMs = 100): number {
  if (stepIndex < 0) return 0;
  return baseDelayMs + stepIndex * stepIncrementMs;
}
