import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services d'électricien à Tourcoing et Lille",
  description:
    "Dépannage électrique, rénovation, mise aux normes et tableau électrique, prise renforcée pour véhicule électrique, éclairage LED et domotique, installation neuve : tous les services de Domé Électricité à Tourcoing, Roubaix et Lille.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={services.map((s) =>
          serviceSchema({ name: s.name, description: s.metaDescription, path: `/services/${s.slug}` }),
        )}
      />
      <PageHero crumbs={[{ name: "Services", path: "/services" }]} eyebrow="Nos prestations" title="Services d'électricité pour particuliers et professionnels">
        De la panne urgente au projet complet, un seul artisan pour toute votre électricité à Tourcoing et dans la
        métropole lilloise.
      </PageHero>

      <section className="container-site py-16 md:py-24">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug} className="flex">
              <ServiceCard service={s} headingLevel="h2" />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Reveal>
        <CtaBand title="Vous ne savez pas quel service choisir ?" text="Décrivez-nous votre besoin : nous vous orientons gratuitement vers la bonne solution." />
      </Reveal>
    </>
  );
}
