import { ArrowUpRightIcon, StarIcon } from "lucide-react";

import { Reveal, StaggerLi, StaggerList } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { googleRating, reviews } from "@/lib/reviews";
import { mapsUrl } from "@/lib/site";

const monthFormat = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" });

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span role="img" aria-label={`Note : ${rating} sur 5`} className="flex gap-0.5 text-primary">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} aria-hidden="true" className={`${className} ${i < rating ? "fill-current" : "opacity-30"}`} />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section className="bg-secondary py-20 md:py-28" aria-labelledby="avis-titre">
      <div className="container-site">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Avis clients</p>
            <h2 id="avis-titre" className="mt-4 text-4xl md:text-5xl">
              Ils nous ont confié leur installation
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <p className="font-display text-6xl leading-none font-bold">
              {googleRating}
              <span className="text-3xl text-muted-foreground">/5</span>
            </p>
            <div>
              <Stars rating={googleRating} className="size-5" />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener"
                className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep underline-offset-4 hover:underline"
              >
                Avis Google
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <StaggerList className="mt-12 columns-1 gap-4 md:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <StaggerLi key={r.author} className="mb-4 break-inside-avoid">
              <figure className="rounded-3xl bg-card p-7">
                <Stars rating={r.rating} className="size-4" />
                <blockquote className="mt-4 text-lg leading-relaxed">« {r.text} »</blockquote>
                <figcaption className="mt-5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-semibold">{r.author}</span>
                  <span className="text-muted-foreground">
                    Google · {monthFormat.format(new Date(`${r.date}-01T12:00:00`))}
                  </span>
                </figcaption>
              </figure>
            </StaggerLi>
          ))}
        </StaggerList>

        <Reveal className="mt-8 text-center">
          <Button asChild size="xl" variant="outline">
            <a href={mapsUrl} target="_blank" rel="noopener">
              Voir tous les avis sur Google
              <ArrowUpRightIcon />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
