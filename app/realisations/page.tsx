import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, NewspaperIcon } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";
import { getArticles } from "@/lib/wordpress/queries";

export const metadata = pageMetadata({
  title: "Réalisations et conseils",
  description:
    "Chantiers réalisés à Tourcoing et dans la métropole lilloise, conseils pratiques sur la sécurité électrique, la rénovation, la recharge des voitures électriques et l'éclairage.",
  path: "/realisations",
});

const dateFormat = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default async function RealisationsPage() {
  const articles = await getArticles();

  return (
    <>
      <PageHero crumbs={[{ name: "Réalisations & conseils", path: "/realisations" }]} eyebrow="Le journal du chantier" title="Réalisations et conseils">
        Nos derniers chantiers dans la métropole lilloise et des conseils concrets pour une installation électrique sûre.
      </PageHero>

      <section className="container-site py-16 md:py-24">
        {articles.length === 0 ? (
          <Reveal className="flex flex-col items-center rounded-3xl bg-secondary px-6 py-20 text-center">
            <NewspaperIcon className="size-12 text-brand-deep" />
            <h2 className="mt-5 text-2xl md:text-3xl">Nos premiers articles arrivent bientôt</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              En attendant, découvrez nos services ou contactez-nous pour parler de votre projet.
            </p>
          </Reveal>
        ) : (
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <StaggerItem key={a.slug} className="flex">
                <Card className="group relative gap-0 rounded-3xl py-0 text-base ring-border transition-shadow hover:shadow-[0_24px_48px_-28px_rgb(10_10_10/0.45)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    {a.image && (
                      <Image
                        src={a.image.src}
                        alt={a.image.alt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    )}
                    <span className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/90 backdrop-blur transition-colors group-hover:bg-primary">
                      <ArrowUpRightIcon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      {a.categories[0] && <Badge variant="secondary">{a.categories[0]}</Badge>}
                      <time dateTime={a.date}>{dateFormat.format(new Date(a.date))}</time>
                    </div>
                    <h2 className="mt-3 text-xl">
                      <Link href={`/realisations/${a.slug}`} className="after:absolute after:inset-0">
                        {a.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-muted-foreground">{a.excerpt}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </section>

      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
