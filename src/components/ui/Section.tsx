import type { ReactNode } from 'react';
import Container from './Container';
import SectionHeader from './SectionHeader';
import { cn } from '../../lib/cn';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  index,
  label,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn('relative scroll-mt-20 py-16 sm:py-24', className)}
    >
      <Container>
        <SectionHeader
          index={index}
          label={label}
          title={title}
          description={description}
          headingId={`${id}-heading`}
        />
        {children}
      </Container>
    </section>
  );
}
