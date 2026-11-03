export const CONTACT_SECTION = {
  label: 'CONTACT',
  title: "Let's work together.",
  description:
    "I'm open to full-time roles and interesting projects. My inbox is always open — I'll get back to you within a day.",
} as const;

export interface ContactLink {
  readonly id: 'linkedin' | 'github' | 'email';
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

export const EMAIL_ADDRESS = 'minthant1590@gmail.com';

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'in/minthantkyaw',
    href: 'https://linkedin.com/in/minthantkyaw',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Min-ThantKyaw',
    href: 'https://github.com/Min-ThantKyaw',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'minthant1590@gmail.com',
    href: 'mailto:minthant1590@gmail.com',
  },
];
