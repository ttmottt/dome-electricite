import { cities, otherTowns } from "./cities";
import type { Faq } from "./services";
import { absoluteUrl, site } from "./site";

export const businessId = `${site.url}/#entreprise`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": businessId,
    name: site.name,
    alternateName: ["Dome Électricité", "Dome Electricite"],
    founder: { "@type": "Person", name: site.founder },
    vatID: site.legal.vat,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/images/logo-dome-electricite.png"),
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      ...(site.address.street && { streetAddress: site.address.street }),
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", ...site.geo },
    areaServed: [
      ...cities.map((c) => ({ "@type": "City", name: c.name })),
      ...otherTowns.map((name) => ({ "@type": "City", name })),
      { "@type": "AdministrativeArea", name: "Métropole européenne de Lille" },
    ],
    openingHoursSpecification: site.hours.filter((h) => h.schema.length > 0).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.schema,
      opens: h.opens,
      closes: h.closes,
    })),
    ...(site.social.length > 0 && { sameAs: site.social }),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#site`,
    url: site.url,
    name: site.name,
    inLanguage: "fr-FR",
    publisher: { "@id": businessId },
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; area?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: opts.name,
    provider: { "@id": businessId },
    areaServed: opts.area
      ? { "@type": "City", name: opts.area }
      : { "@type": "AdministrativeArea", name: "Métropole européenne de Lille" },
  };
}

export function faqSchema(faq: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
