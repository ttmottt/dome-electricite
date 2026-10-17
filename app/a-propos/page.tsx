import Image from "next/image";
import { BadgeCheckIcon, HandshakeIcon, MapPinIcon, MessagesSquareIcon } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { CountUp } from "@/components/motion/count-up";
import { Reveal, StaggerLi, StaggerList } from "@/components/motion/reveal";
import { PageHero } from "@/components/PageHero";
import { cities, otherTowns } from "@/lib/cities";
import { photos } from "@/lib/images";
import { businessId } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "À propos – Benoît Domé, électricien",
  description:
    "Domé Électricité, c'est Benoît Domé, artisan électricien installé à Tourcoing. Un interlocuteur unique, des conseils honnêtes et des installations conformes dans toute la métropole lilloise.",
  path: "/a-propos",
});

const values = [
  {
    icon: MessagesSquareIcon,
    title: "Des explications claires",
    text: "Avant les travaux, on vous explique ce qui doit être fait et pourquoi. Après, on vous montre ce qui a été fait.",
  },
  {
    icon: BadgeCheckIcon,
    title: "La sécurité d'abord",
    text: "Installations réalisées selon la norme NF C 15-100, avec du matériel de grandes marques et des contrôles systématiques.",
  },
  {
    icon: HandshakeIcon,
    title: "Un interlocuteur unique",
    text: "Pas de commercial ni de sous-traitance : vous échangez directement avec l'artisan qui intervient chez vous.",
  },
  {
    icon: MapPinIcon,
    title: "Un artisan de proximité",
    text: "Installé à Tourcoing, nous connaissons le bâti local et intervenons rapidement dans toute la métropole.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/a-propos"),
          name: `À propos de ${site.name}`,
          about: { "@id": businessId },
        }}
      />
      <PageHero crumbs={[{ name: "À propos", path: "/a-propos" }]} eyebrow="Qui sommes-nous" title="Un artisan électricien de Tourcoing, à votre écoute">
        {site.name}, c'est l'entreprise de {site.founder}, électricien installé à Tourcoing.
      </PageHero>

      <section className="container-site grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem]">
            <Image src={photos.renovation.src} alt={photos.renovation.alt} placeholder="blur" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Notre histoire</p>
          <h2 className="mt-4 text-3xl md:text-5xl">Domé, un nom de famille devenu une signature</h2>
          <div className="prose-site mt-6 text-lg text-foreground/85">
            <p>
              {site.founder} a créé son entreprise d'électricité avec une idée simple : offrir
              aux particuliers et aux professionnels de la métropole lilloise le sérieux d'un artisan qui signe son
              travail de son propre nom.
            </p>
            <p>
              Aujourd'hui installée au {site.address.street} à Tourcoing, {site.name} intervient du dépannage du
              quotidien jusqu'à la rénovation complète, en passant par la mise aux normes, le remplacement de tableau,
              l'éclairage et la pose de prises renforcées pour voiture électrique.
            </p>
            <p>
              Maisons de ville en briques, maisons 1930, anciennes courées, appartements en copropriété ou locaux
              commerciaux : chaque chantier est étudié pour proposer la solution la plus juste, ni plus, ni moins.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="dark bg-background py-16 text-foreground md:py-20">
        <dl className="container-site grid gap-10 text-center sm:grid-cols-3">
          <Reveal>
            <dt className="text-muted-foreground">Clients satisfaits</dt>
            <dd className="font-display text-7xl font-bold text-primary">
              <CountUp to={site.satisfiedClients} />
            </dd>
          </Reveal>
          <Reveal delay={0.08}>
            <dt className="text-muted-foreground">Domaines d'expertise</dt>
            <dd className="font-display text-7xl font-bold">
              <CountUp to={services.length} />
            </dd>
          </Reveal>
          <Reveal delay={0.16}>
            <dt className="text-muted-foreground">Communes desservies</dt>
            <dd className="font-display text-7xl font-bold">
              <CountUp to={cities.length + otherTowns.length} />+
            </dd>
          </Reveal>
        </dl>
      </section>

      <section className="container-site py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Nos valeurs</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">Ce qui guide chacune de nos interventions</h2>
        </Reveal>
        <StaggerList className="mt-12 grid gap-4 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, text }) => (
            <StaggerLi key={title} className="rounded-3xl bg-secondary p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-ink text-primary">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 text-2xl">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </StaggerLi>
          ))}
        </StaggerList>
      </section>

      <Reveal>
        <CtaBand title="Parlons de votre projet" />
      </Reveal>
    </>
  );
}
