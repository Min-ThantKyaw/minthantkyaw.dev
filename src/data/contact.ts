export const CONTACT_SECTION = {
  label: 'GET IN TOUCH',
  title: "Let's build something worth shipping.",
  description: "Have a project in mind or an opportunity to discuss? I'd love to hear from you.",
} as const;

export interface ContactLink {
  readonly id: 'linkedin' | 'github' | 'email';
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

export const EMAIL_ADDRESS = 'hello@minthantkyaw.dev';

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
    value: 'hello@minthantkyaw.dev',
    href: 'mailto:hello@minthantkyaw.dev',
  },
];
