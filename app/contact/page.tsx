import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { businessId } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, fullAddress, mapsUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact et devis gratuit",
  description: `Contactez ${site.name}, électricien au ${site.address.street} à Tourcoing : devis gratuit pour vos travaux, dépannage électrique dans toute la métropole lilloise.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl("/contact"),
          name: `Contacter ${site.name}`,
          about: { "@id": businessId },
        }}
      />
      <PageHero crumbs={[{ name: "Contact", path: "/contact" }]} eyebrow="Contact & devis" title="Parlons de votre projet électrique">
        Un dépannage, une rénovation, un tableau à changer ? Appelez-nous ou décrivez votre besoin : le devis est
        gratuit et sans engagement.
      </PageHero>

      <section className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl">Demande de devis</h2>
          <p className="mt-3 mb-8 text-muted-foreground">Réponse rapide, du lundi au samedi.</p>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <Card className="dark gap-0 rounded-3xl bg-background p-7 text-base text-foreground ring-0">
            <h2 className="text-2xl">Coordonnées</h2>
            <ul className="mt-6 space-y-5">
              <li>
                <a href={`tel:${site.phoneHref}`} className="group flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary text-ink">
                    <PhoneIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Téléphone</span>
                    <span className="text-xl font-semibold group-hover:text-primary">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                    <MailIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">E-mail</span>
                    <span className="font-semibold break-all group-hover:text-primary">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener" className="group flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                    <MapPinIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Adresse</span>
                    <span className="font-semibold group-hover:text-primary">{fullAddress}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <ClockIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Horaires</span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block font-semibold">
                      {h.days} : {h.hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </Card>
          <div className="overflow-hidden rounded-3xl border">
            <iframe
              title={`Plan d'accès – ${site.name}, ${fullAddress}`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${site.geo.longitude - 0.012},${site.geo.latitude - 0.006},${site.geo.longitude + 0.012},${site.geo.latitude + 0.006}&layer=mapnik&marker=${site.geo.latitude},${site.geo.longitude}`}
              className="aspect-[4/3] w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
