import { cn } from '@/lib/utils';

export function PageHero({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('border-b border-border bg-secondary/20', className)}>
      <div className="container-wide section-padding">
        <h1
          className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

export function ProseSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('section-padding', className)}>
      <div
        className="container-prose"
        style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}
      >
        {children}
      </div>
    </section>
  );
}

export function PriceTag({ amount }: { amount: number }) {
  return (
    <span className="text-2xl font-bold tabular-nums">
      ${amount.toLocaleString()}
    </span>
  );
}

export function DisclaimerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
      {children}
    </div>
  );
}
