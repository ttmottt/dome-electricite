import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { RingMotif } from "./RingMotif";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  children,
  aside,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="dark relative overflow-hidden bg-background text-foreground">
      <RingMotif className="pointer-events-none absolute -top-40 -right-48 size-[36rem] text-primary/30 md:-right-24" />
      <div className="container-site relative grid gap-10 py-14 md:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <Breadcrumbs items={crumbs} />
          {eyebrow && <p className="eyebrow mt-8">{eyebrow}</p>}
          <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl md:text-6xl">{title}</h1>
          {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{children}</div>}
        </div>
        {aside}
      </div>
    </section>
  );
}
