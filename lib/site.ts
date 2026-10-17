// Informations de l'entreprise : un seul endroit à modifier.
// Sources : registre SIRENE (recherche-entreprises.api.gouv.fr) et fiche Electricien24.
// Les valeurs marquées "À COMPLÉTER" sont à remplacer avant la mise en ligne.

export const site = {
  name: "Domé Électricité",
  founder: "Benoît Domé",
  foundingYear: 2018,
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dome-electricite.fr").replace(/\/$/, ""),
  tagline: "Électricien à Tourcoing et dans la métropole lilloise",
  description:
    "Domé Électricité, artisan électricien à Tourcoing depuis 2018 : dépannage, rénovation, mise aux normes NF C 15-100, tableau électrique, borne de recharge et éclairage LED dans toute la métropole lilloise. Devis gratuit.",

  phone: "03 20 00 00 00", // À COMPLÉTER
  phoneHref: "+33320000000", // À COMPLÉTER (format international, sans espaces)
  email: "contact@dome-electricite.fr", // À COMPLÉTER

  address: {
    street: "8 rue d'Iéna",
    postalCode: "59200",
    city: "Tourcoing",
    region: "Hauts-de-France",
    country: "FR",
  },
  geo: { latitude: 50.70364, longitude: 3.154316 },

  hours: [
    {
      days: "Lundi – Samedi",
      hours: "8h00 – 18h00",
      schema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    { days: "Dimanche", hours: "Fermé", schema: [], opens: "", closes: "" },
  ],

  legal: {
    form: "Entreprise individuelle (EI)",
    owner: "Benoît Domé",
    tradeName: "Dome Électricité",
    siren: "837 715 572",
    siret: "837 715 572 00025",
    vat: "FR15837715572",
    naf: "43.21A – Travaux d'installation électrique dans tous locaux",
    insurance: "", // À COMPLÉTER : assureur et n° de contrat (décennale / RC pro)
  },

  social: [] as string[], // À COMPLÉTER : URL de la page Facebook, fiche Google Business Profile…
} as const;

export const fullAddress = [site.address.street, `${site.address.postalCode} ${site.address.city}`]
  .filter(Boolean)
  .join(", ");

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name} ${fullAddress}`,
)}`;

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
