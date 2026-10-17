import Link from "next/link";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { fullAddress, mapsUrl, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="dark bg-background pb-20 text-foreground md:pb-0">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-muted-foreground">
            Artisan électricien installé à Tourcoing depuis {site.foundingYear}. Dépannage, rénovation, mise aux normes
            et borne de recharge dans toute la métropole lilloise.
          </p>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>
              <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 font-semibold text-foreground hover:text-primary">
                <PhoneIcon className="size-5 text-primary" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-primary">
                <MailIcon className="size-5 text-primary" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={mapsUrl} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-primary">
                <MapPinIcon className="size-5 text-primary" />
                {fullAddress}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-1 size-5 shrink-0 text-primary" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days} : {h.hours}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <FooterList title="Nos services" links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))} />
        <FooterList
          title="Zones d'intervention"
          links={cities.map((c) => ({ href: `/electricien/${c.slug}`, label: `Électricien ${c.name}` }))}
        />
        <FooterList
          title="L'entreprise"
          links={[
            { href: "/a-propos", label: "À propos" },
            { href: "/realisations", label: "Réalisations & conseils" },
            { href: "/contact", label: "Contact & devis" },
            { href: "/zones-intervention", label: "Toutes les zones" },
            { href: "/mentions-legales", label: "Mentions légales" },
          ]}
        />
      </div>
      <Separator />
      <div className="container-site flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {site.name} · {site.legal.form} · SIRET {site.legal.siret}
        </p>
        <p>Électricien à Tourcoing, Roubaix, Lille et dans la métropole lilloise</p>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold tracking-widest text-foreground uppercase">{title}</h2>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
