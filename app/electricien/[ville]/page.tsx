import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { cities, getCity } from "@/lib/cities";
import { photos } from "@/lib/images";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return cities.map((c) => ({ ville: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/electricien/[ville]">): Promise<Metadata> {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return {};
  return pageMetadata({
    title: `Électricien ${city.name} (${city.postalCode}) – Devis gratuit`,
    description: `Électricien à ${city.name} : dépannage, rénovation, mise aux normes, tableau électrique, prise de recharge pour voiture électrique et éclairage. ${site.name}, artisan basé à Tourcoing. Devis gratuit.`,
    path: `/electricien/${city.slug}`,
  });
}

export default async function CityPage({ params }: PageProps<"/electricien/[ville]">) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) notFound();

  const isHome = city.distanceKm === 0;
  const neighbors = city.neighbors.map(getCity).filter((c) => c !== undefined);
  const faq = [
    {
      q: `Intervenez-vous rapidement à ${city.name} ?`,
      a: isHome
        ? `Oui. Nos locaux sont au ${site.address.street} à Tourcoing : nous pouvons intervenir très rapidement dans tous les quartiers de la ville.`
        : `Oui. ${city.name} se trouve à environ ${city.distanceKm} km de nos locaux de Tourcoing, ce qui nous permet d'intervenir rapidement pour un dépannage comme pour des travaux.`,
    },
    {
      q: `Le devis est-il gratuit à ${city.name} ?`,
      a: `Oui, le déplacement pour établir un devis de travaux et le devis lui-même sont gratuits et sans engagement à ${city.name} (${city.postalCode}).`,
    },
    {
      q: "Travaillez-vous pour les propriétaires bailleurs et les syndics ?",
      a: "Oui. Nous réalisons des mises en sécurité après diagnostic, des remplacements de tableau et des remises en état d'installations, avec une facture détaillée pour vos dossiers.",
    },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Électricien à ${city.name}`,
          description: city.intro,
          path: `/electricien/${city.slug}`,
          area: city.name,
        })}
      />
      <PageHero
        crumbs={[
          { name: "Zones d'intervention", path: "/zones-intervention" },
          { name: city.name, path: `/electricien/${city.slug}` },
        ]}
        eyebrow={`${city.name} · ${city.postalCode}`}
        title={`Électricien à ${city.name}`}
        aside={
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch lg:justify-self-end">
            <Button asChild size="xl" className="cta-halo">
              <a href={`tel:${site.phoneHref}`}>
                <PhoneIcon />
                {site.phone}
              </a>
            </Button>
            <Button asChild size="xl" variant="outline-light">
              <Link href="/contact">Devis gratuit</Link>
            </Button>
          </div>
        }
      >
        {city.intro}
      </PageHero>

      <section className="container-site grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Le bâti à {city.name}</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Une installation adaptée à votre logement</h2>
          <p className="mt-6 text-lg text-foreground/85">{city.housing}</p>
          <h3 className="mt-10 text-xl">Quartiers desservis</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {city.areas.map((a) => (
              <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-medium">
                <MapPinIcon className="size-3.5 text-brand-deep" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-t-[12rem] rounded-b-3xl">
          <Image
            src={photos.renovation.src}
            alt={`Électricien en intervention à ${city.name}`}
            placeholder="blur"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="max-w-3xl text-3xl md:text-4xl">Nos services d'électricité à {city.name}</h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="flex">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Électricien à {city.name} : vos questions</h2>
          {neighbors.length > 0 && (
            <>
              <h3 className="mt-10 text-lg">Communes voisines</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {neighbors.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/electricien/${n.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium hover:border-primary"
                    >
                      Électricien {n.name}
                      <ArrowRightIcon className="size-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <FaqList items={faq} />
        </Reveal>
      </section>

      <Reveal>
        <CtaBand title={`Besoin d'un électricien à ${city.name} ?`} />
      </Reveal>
    </>
  );
}
