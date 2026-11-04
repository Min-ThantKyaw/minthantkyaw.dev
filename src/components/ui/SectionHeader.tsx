import Reveal from './Reveal';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  headingId: string;
}

export default function SectionHeader({
  index,
  label,
  title,
  description,
  headingId,
}: SectionHeaderProps) {
  return (
    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.24em]">
            <span className="text-muted">{index}</span>
            <span className="mx-2 text-muted">/</span>
            <span className="text-accent">{label}</span>
          </p>
        </Reveal>
      </div>

      <div className="md:col-span-8">
        <Reveal delay={70}>
          <h2
            id={headingId}
            className="font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink"
          >
            {title}
          </h2>
        </Reveal>

        {description && (
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{description}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
