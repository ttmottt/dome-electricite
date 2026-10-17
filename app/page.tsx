import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckIcon,
  HandshakeIcon,
  MapPinIcon,
  PhoneIcon,
  ReceiptTextIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { CountUp } from "@/components/motion/count-up";
import { HeroText, HeroVisual, SpinRing } from "@/components/motion/hero-reveal";
import { Reveal, Stagger, StaggerItem, StaggerLi, StaggerList } from "@/components/motion/reveal";
import { Reviews } from "@/components/Reviews";
import { RingMotif } from "@/components/RingMotif";
import { ServiceCard } from "@/components/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cities, otherTowns } from "@/lib/cities";
import { photos } from "@/lib/images";
import { googleRating } from "@/lib/reviews";
import { pageMetadata } from "@/lib/seo";
import { generalFaq, services } from "@/lib/services";
import { fullAddress, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: `Électricien à Tourcoing – ${site.name} | Métropole lilloise`,
  description:
    "Électricien à Tourcoing : dépannage, rénovation, mise aux normes, tableau électrique, prise de recharge pour voiture électrique et éclairage LED à Roubaix, Lille et dans toute la métropole lilloise. Devis gratuit.",
  path: "/",
  absoluteTitle: true,
});

const commitments = [
  { icon: ReceiptTextIcon, title: "Devis gratuit et détaillé", text: "Chaque poste chiffré, sans surprise sur la facture." },
  { icon: BadgeCheckIcon, title: "Norme NF C 15-100", text: "Des installations sûres, avec du matériel de marque." },
  { icon: ZapIcon, title: "Prix annoncé avant", text: "En dépannage, le tarif est donné avant le déplacement." },
  { icon: SparklesIcon, title: "Chantier propre", text: "Sols protégés, nettoyage et explications en fin de travaux." },
];

const steps = [
  { title: "Vous nous contactez", text: "Par téléphone ou via le formulaire, en quelques mots sur votre besoin." },
  { title: "Visite et devis", text: "Nous venons voir l'installation et vous remettons un devis clair et gratuit." },
  { title: "Intervention", text: "À la date convenue, avec du matériel de qualité et un chantier tenu propre." },
  { title: "Contrôle et explications", text: "Essais, mise en service et explications avant de partir." },
];

const marqueeTowns = [...cities.map((c) => c.name), ...otherTowns];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="dark relative overflow-hidden bg-background text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_40%,rgb(241_158_18/0.18),transparent_70%)]"
        />
        <div className="container-site relative grid items-center gap-14 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <HeroText>
              <Badge variant="outline" className="h-8 gap-2 rounded-full border-primary/40 px-3.5 text-sm text-foreground">
                <span className="size-2 rounded-full bg-primary shadow-[0_0_0_4px_rgb(241_158_18/0.25)]" />
                Artisan électricien à Tourcoing
              </Badge>
            </HeroText>
            <HeroText delay={0.08}>
              <h1 className="mt-6 text-[2.75rem] sm:text-6xl xl:text-7xl">
                Votre électricien à <span className="text-primary">Tourcoing</span> et dans la métropole lilloise
              </h1>
            </HeroText>
            <HeroText delay={0.16}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
                Dépannage, rénovation, mise aux normes, tableau électrique, prise de recharge pour voiture électrique et éclairage, pour les
                particuliers et les professionnels de Tourcoing, Roubaix, Lille et des communes voisines.
              </p>
            </HeroText>
            <HeroText delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl" className="cta-halo">
                  <a href={`tel:${site.phoneHref}`}>
                    <PhoneIcon />
                    Appeler le {site.phone}
                  </a>
                </Button>
                <Button asChild size="xl" variant="outline-light">
                  <Link href="/contact">
                    Demander un devis gratuit
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </HeroText>
            <HeroText delay={0.32}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t pt-8">
                <div>
                  <dt className="text-sm text-muted-foreground">Clients satisfaits</dt>
                  <dd className="font-display text-4xl font-bold text-primary md:text-5xl">
                    <CountUp to={site.satisfiedClients} />
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Communes</dt>
                  <dd className="font-display text-4xl font-bold md:text-5xl">
                    <CountUp to={cities.length + otherTowns.length} />+
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Devis</dt>
                  <dd className="font-display text-4xl font-bold md:text-5xl">
                    <CountUp from={99} to={0} /> €
                  </dd>
                </div>
              </dl>
            </HeroText>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <SpinRing className="absolute -inset-5 md:-inset-8">
              <RingMotif className="size-full text-primary/50" />
            </SpinRing>
            <HeroVisual className="relative aspect-square overflow-hidden rounded-full ring-1 ring-primary/40">
              <Image
                src={photos.depannage.src}
                alt={photos.depannage.alt}
                placeholder="blur"
                priority
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </HeroVisual>
            <HeroText delay={0.6}>
              <div className="absolute -bottom-4 left-0 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-2xl sm:-left-6">
                <span className="grid size-10 place-items-center rounded-full bg-primary">
                  <MapPinIcon className="size-5" />
                </span>
                <span className="text-sm leading-tight">
                  <strong className="block font-semibold">Basé à Tourcoing</strong>
                  {fullAddress}
                </span>
              </div>
            </HeroText>
          </div>
        </div>
      </section>

      {/* Bandeau des villes */}
      <div className="marquee overflow-hidden border-y bg-primary py-4 text-ink" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center">
              {marqueeTowns.map((t) => (
                <li key={t} className="flex items-center font-display text-2xl font-bold tracking-wide whitespace-nowrap uppercase">
                  <span className="px-6">{t}</span>
                  <ZapIcon className="size-5 fill-ink" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Engagements */}
      <section aria-labelledby="engagements" className="container-site py-16 md:py-20">
        <h2 id="engagements" className="sr-only">
          Nos engagements
        </h2>
        <StaggerList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(({ icon: Icon, title, text }) => (
            <StaggerLi key={title} className="rounded-3xl bg-secondary p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-ink text-primary">
                <Icon className="size-6" />
              </span>
              <p className="mt-5 text-lg font-semibold tracking-tight">{title}</p>
              <p className="mt-1 text-muted-foreground">{text}</p>
            </StaggerLi>
          ))}
        </StaggerList>
      </section>

      {/* Services */}
      <section className="container-site pb-20 md:pb-28" aria-labelledby="services-titre">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Nos prestations</p>
            <h2 id="services-titre" className="mt-4 text-4xl md:text-5xl">
              Tous vos travaux d'électricité, de la panne au projet complet
            </h2>
          </div>
          <Button asChild variant="outline" size="xl">
            <Link href="/services">
              Voir tous les services
              <ArrowRightIcon />
            </Link>
          </Button>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug} className="flex">
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Présentation */}
      <section className="bg-secondary py-20 md:py-28" aria-labelledby="presentation-titre">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem]">
              <Image
                src={photos.intervention.src}
                alt={photos.intervention.alt}
                placeholder="blur"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-2 bottom-10 rounded-3xl bg-ink px-7 py-6 text-cream shadow-2xl md:-right-8">
              <p className="font-display text-6xl leading-none font-bold text-primary">
                {googleRating}
                <span className="text-3xl text-cream/60">/5</span>
              </p>
              <p className="mt-1 text-sm">sur les avis Google</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Qui sommes-nous</p>
            <h2 id="presentation-titre" className="mt-4 text-4xl md:text-5xl">
              Un artisan local, un seul interlocuteur
            </h2>
            <div className="prose-site mt-6 text-lg text-foreground/80">
              <p>
                {site.name} est l'entreprise de {site.founder}, artisan électricien installé à Tourcoing. Il accompagne les habitants et les professionnels de la métropole lilloise, du
                simple dépannage à la rénovation complète d'une maison.
              </p>
              <p>
                Vous parlez directement à celui qui réalise les travaux : il connaît votre dossier, vous conseille
                honnêtement et vous explique ce qui est fait chez vous. Maisons de ville en briques, maisons 1930,
                anciennes courées : le bâti de Tourcoing et de Roubaix n'a pas de secret pour lui.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Conseils honnêtes et adaptés", "Interlocuteur unique", "Matériel de grandes marques", "Respect des délais"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 font-medium">
                    <span className="grid size-6 place-items-center rounded-full bg-primary">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {t}
                  </li>
                ),
              )}
            </ul>
            <Button asChild size="xl" variant="ink" className="mt-10">
              <Link href="/a-propos">
                <HandshakeIcon />
                Découvrir l'entreprise
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Méthode */}
      <section className="container-site py-20 md:py-28" aria-labelledby="methode-titre">
        <Reveal>
          <p className="eyebrow">Comment ça se passe</p>
          <h2 id="methode-titre" className="mt-4 max-w-3xl text-4xl md:text-5xl">
            Simple, clair, sans mauvaise surprise
          </h2>
        </Reveal>
        <StaggerList className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerLi key={s.title} className="group relative rounded-3xl border bg-card p-7 transition-colors hover:border-primary">
              <span className="font-display text-6xl leading-none font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </StaggerLi>
          ))}
        </StaggerList>
      </section>

      <Reviews />

      {/* Zones */}
      <section className="dark relative overflow-hidden bg-background py-20 text-foreground md:py-28" aria-labelledby="zones-titre">
        <RingMotif className="pointer-events-none absolute -bottom-40 -left-40 size-[32rem] text-primary/20" />
        <div className="container-site relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Zones d'intervention</p>
            <h2 id="zones-titre" className="mt-4 text-4xl md:text-5xl">
              Tourcoing et toute la métropole lilloise
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Installés au {site.address.street} à Tourcoing, nous rejoignons rapidement Roubaix, Mouvaux, Wattrelos,
              Croix, Marcq-en-Barœul, Lille et l'ensemble des communes de la métropole.
            </p>
            <Button asChild size="xl" className="mt-8">
              <Link href="/zones-intervention">
                Voir toutes les zones
                <ArrowRightIcon />
              </Link>
            </Button>
          </Reveal>
          <div>
            <StaggerList className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cities.map((c) => (
                <StaggerLi key={c.slug}>
                  <Link
                    href={`/electricien/${c.slug}`}
                    className="group flex h-full items-center justify-between gap-2 rounded-2xl border px-4 py-3.5 transition-colors hover:border-primary hover:bg-card"
                  >
                    <span>
                      <span className="block font-semibold tracking-tight">{c.name}</span>
                      <span className="text-sm text-muted-foreground">{c.postalCode}</span>
                    </span>
                    <ArrowRightIcon className="size-4 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </StaggerLi>
              ))}
            </StaggerList>
            <p className="mt-6 text-muted-foreground">Et aussi : {otherTowns.join(", ")}…</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="faq-titre">
        <Reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="faq-titre" className="mt-4 text-4xl md:text-5xl">
            Vos questions, nos réponses
          </h2>
          <p className="mt-5 text-muted-foreground">
            Une autre question ?{" "}
            <Link href="/contact" className="font-semibold text-brand-deep underline underline-offset-4">
              Écrivez-nous
            </Link>{" "}
            ou appelez le{" "}
            <a href={`tel:${site.phoneHref}`} className="font-semibold text-foreground underline underline-offset-4">
              {site.phone}
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <FaqList items={generalFaq} />
        </Reveal>
      </section>

      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
