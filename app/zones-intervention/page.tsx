import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { Reveal, StaggerLi, StaggerList } from "@/components/motion/reveal";
import { PageHero } from "@/components/PageHero";
import { cities, otherTowns } from "@/lib/cities";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Zones d'intervention : Tourcoing, Roubaix, Lille",
  description:
    "Domé Électricité intervient à Tourcoing, Roubaix, Lille, Mouvaux, Wattrelos, Croix, Marcq-en-Barœul, Villeneuve-d'Ascq, Halluin, Neuville-en-Ferrain et dans toute la métropole lilloise.",
  path: "/zones-intervention",
});

const bbox = "3.03,50.6,3.25,50.79";

export default function ZonesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Zones d'intervention", path: "/zones-intervention" }]} eyebrow="Zones d'intervention" title="Électricien à Tourcoing et dans toute la métropole lilloise">
        Basés au {site.address.street} à Tourcoing, nous intervenons rapidement dans les communes du nord de la
        métropole et jusqu'à Lille et Villeneuve-d'Ascq.
      </PageHero>

      <section className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Nos principales villes d'intervention</h2>
          </Reveal>
          <StaggerList className="mt-8 grid gap-3 sm:grid-cols-2">
            {cities.map((c) => (
              <StaggerLi key={c.slug}>
                <Link
                  href={`/electricien/${c.slug}`}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-primary"
                >
                  <span>
                    <span className="block text-lg font-semibold tracking-tight">Électricien {c.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {c.postalCode} · {c.distanceKm === 0 ? "notre ville" : `≈ ${c.distanceKm} km de nos locaux`}
                    </span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary transition-colors group-hover:bg-primary">
                    <ArrowRightIcon className="size-4" />
                  </span>
                </Link>
              </StaggerLi>
            ))}
          </StaggerList>
          <Reveal>
            <h2 className="mt-14 text-2xl md:text-3xl">Nous intervenons aussi à</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {otherTowns.map((t) => (
                <li key={t} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              Votre commune n'apparaît pas ? Appelez-nous : si elle se trouve dans la métropole lilloise, nous pouvons
              très probablement intervenir.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-3xl border">
            <iframe
              title="Carte de la zone d'intervention de Domé Électricité autour de Tourcoing"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${site.geo.latitude},${site.geo.longitude}`}
              className="aspect-square w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="size-4 text-brand-deep" />
            {site.name}, {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
        </Reveal>
      </section>

      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
