import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, StaggerLi, StaggerList } from "@/components/motion/reveal";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cities } from "@/lib/cities";
import { photos } from "@/lib/images";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.metaTitle, description: service.metaDescription, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const photo = photos[service.photo];
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema({ name: service.name, description: service.metaDescription, path: `/services/${slug}` })} />
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${slug}` },
        ]}
        eyebrow={service.name}
        title={service.title}
        aside={
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch lg:justify-self-end">
            <Button asChild size="xl" className="cta-halo">
              <a href={`tel:${site.phoneHref}`}>
                <PhoneIcon />
                {site.phone}
              </a>
            </Button>
            <Button asChild size="xl" variant="outline-light">
              <Link href={`/contact?service=${slug}`}>Devis gratuit</Link>
            </Button>
          </div>
        }
      >
        {service.excerpt}
      </PageHero>

      <section className="container-site grid gap-14 py-16 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <Reveal>
          <div className="prose-site text-lg text-foreground/85">
            {service.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <h2 className="mt-14 text-3xl md:text-4xl">Ce que nous réalisons</h2>
          <StaggerList className="mt-6 grid gap-3">
            {service.includes.map((item) => (
              <StaggerLi key={item} className="flex items-start gap-3 rounded-2xl border bg-card p-4">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary">
                  <CheckIcon className="size-3.5" />
                </span>
                {item}
              </StaggerLi>
            ))}
          </StaggerList>

          <h2 className="mt-14 text-3xl md:text-4xl">Notre façon de travailler</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.approach.map((step, i) => (
              <li key={step} className="rounded-3xl bg-secondary p-6">
                <span className="font-display text-4xl leading-none font-bold text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={photo.src} alt={photo.alt} placeholder="blur" fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="gap-0 rounded-3xl p-7 text-base ring-border">
              <h2 className="text-2xl">{service.signs.title}</h2>
              <ul className="mt-5 space-y-3">
                {service.signs.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </aside>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="mt-4 text-3xl md:text-4xl">{service.name} : vos questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList items={service.faq} />
          </Reveal>
        </div>
      </section>

      <section className="container-site py-16 md:py-20">
        <Reveal>
          <h2 className="text-2xl md:text-3xl">
            {service.name} à Tourcoing et dans les communes voisines
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/electricien/${c.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-secondary"
                >
                  {c.name}
                  <ArrowRightIcon className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <h2 className="mt-16 text-2xl md:text-3xl">Nos autres services</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <Reveal key={s.slug} className="flex">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
