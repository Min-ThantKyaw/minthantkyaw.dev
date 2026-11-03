/**
 * Navigation metadata shared by the navbar and the scroll-spy hook.
 */

export interface NavItem {
  readonly label: string;
  /** Anchor target, e.g. `#projects`. */
  readonly href: string;
  /** Section id without the leading `#`. */
  readonly id: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const;

export const SECTION_IDS: readonly string[] = NAV_ITEMS.map((item) => item.id);

export const DEFAULT_SCROLL_THRESHOLD = 24;

/**
 * Determines whether the navbar should display its translucent glass state
 * based on current vertical scroll position.
 */
export function isNavbarScrolled(scrollY: number, threshold = DEFAULT_SCROLL_THRESHOLD): boolean {
  return scrollY > threshold;
}
