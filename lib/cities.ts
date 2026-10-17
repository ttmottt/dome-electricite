export type City = {
  slug: string;
  name: string;
  postalCode: string;
  distanceKm: number; // distance approximative depuis Tourcoing
  areas: string[];
  intro: string;
  housing: string;
  neighbors: string[]; // slugs
};

// Villes disposant d'une page dédiée.
export const cities: City[] = [
  {
    slug: "tourcoing",
    name: "Tourcoing",
    postalCode: "59200",
    distanceKm: 0,
    areas: ["Centre-ville", "Bourgogne", "Blanc-Seau", "Brun-Pain", "Croix-Rouge", "Pont-Rompu", "Virolois", "Belencontre", "Orions", "Malcense", "Épidème"],
    intro:
      "Tourcoing est notre ville : c'est ici que Domé Électricité est installée, ce qui nous permet d'intervenir très rapidement dans tous les quartiers, du centre-ville au Virolois en passant par le Blanc-Seau ou la Bourgogne.",
    housing:
      "Les maisons de ville en briques, les anciennes courées et les logements aménagés dans d'anciens bâtiments textiles ont souvent des installations électriques anciennes ou modifiées au fil du temps. Nous connaissons bien ces configurations : passages de câbles dans des murs épais, tableaux à fusibles encore en place, absence de terre.",
    neighbors: ["roubaix", "mouvaux", "neuville-en-ferrain", "wattrelos", "halluin"],
  },
  {
    slug: "roubaix",
    name: "Roubaix",
    postalCode: "59100",
    distanceKm: 5,
    areas: ["Barbieux", "Centre", "Épeule", "Alma", "Hommelet", "Fresnoy-Mackellerie", "Trois-Ponts", "Moulin", "Sartel-Carihem"],
    intro:
      "Voisine directe de Tourcoing, Roubaix est l'une des communes où nous intervenons le plus souvent, pour du dépannage comme pour des rénovations complètes.",
    housing:
      "Des grandes maisons bourgeoises autour du parc Barbieux aux maisons de courées de l'Épeule ou de l'Alma, le bâti roubaisien est ancien et varié. Rénovations électriques, remplacements de tableaux et mises en sécurité avant location y sont des demandes fréquentes.",
    neighbors: ["tourcoing", "croix", "wattrelos", "mouvaux"],
  },
  {
    slug: "lille",
    name: "Lille",
    postalCode: "59000",
    distanceKm: 14,
    areas: ["Vieux-Lille", "Centre", "Wazemmes", "Vauban-Esquermes", "Saint-Maurice Pellevoisin", "Fives", "Moulins", "Bois-Blancs", "Lille-Sud", "Hellemmes", "Lomme"],
    intro:
      "Nous intervenons dans tous les quartiers de Lille, ainsi qu'à Hellemmes et Lomme, pour les particuliers, les propriétaires bailleurs et les commerces.",
    housing:
      "Appartements anciens du Vieux-Lille, maisons 1930 de Saint-Maurice ou de Fives, immeubles en copropriété de Vauban : chaque logement a ses contraintes (accès, parties communes, syndic). Nous adaptons l'organisation du chantier, notamment pour les remplacements de tableau en appartement.",
    neighbors: ["marcq-en-baroeul", "villeneuve-d-ascq", "croix"],
  },
  {
    slug: "mouvaux",
    name: "Mouvaux",
    postalCode: "59420",
    distanceKm: 4,
    areas: ["Centre-ville", "Quartiers résidentiels", "Secteur Tourcoing", "Secteur Roubaix", "Secteur Marcq-en-Barœul"],
    intro:
      "Commune résidentielle limitrophe de Tourcoing, Mouvaux est à quelques minutes de nos locaux : idéal pour un dépannage rapide.",
    housing:
      "Le parc de maisons individuelles, souvent des années 1930 à 1980, se prête bien aux projets de rénovation, d'éclairage extérieur, de domotique et de pose d'une prise renforcée pour recharger la voiture dans le garage ou l'allée.",
    neighbors: ["tourcoing", "marcq-en-baroeul", "roubaix", "croix"],
  },
  {
    slug: "wattrelos",
    name: "Wattrelos",
    postalCode: "59150",
    distanceKm: 5,
    areas: ["Centre", "Beaulieu", "Laboureur", "Mousserie", "Crétinier", "Sapin Vert"],
    intro:
      "À l'est de Tourcoing et de Roubaix, le long de la frontière belge, Wattrelos fait partie de notre secteur d'intervention quotidien.",
    housing:
      "Maisons ouvrières en briques, pavillons plus récents et logements sociaux : nous réalisons à Wattrelos des mises en sécurité, des remplacements de tableau électrique et des dépannages, avec un devis clair avant chaque intervention.",
    neighbors: ["roubaix", "tourcoing"],
  },
  {
    slug: "croix",
    name: "Croix",
    postalCode: "59170",
    distanceKm: 7,
    areas: ["Centre-ville", "Secteur de la Villa Cavrois", "Secteur du parc Barbieux", "Limite Wasquehal"],
    intro:
      "Entre Roubaix et Wasquehal, Croix est desservie rapidement depuis Tourcoing pour tous vos besoins en électricité.",
    housing:
      "Belles maisons de maître, maisons de ville et pavillons : les rénovations électriques à Croix concernent souvent des maisons anciennes où il faut concilier mise aux normes et préservation des moulures, parquets et plafonds.",
    neighbors: ["roubaix", "marcq-en-baroeul", "villeneuve-d-ascq", "mouvaux"],
  },
  {
    slug: "marcq-en-baroeul",
    name: "Marcq-en-Barœul",
    postalCode: "59700",
    distanceKm: 9,
    areas: ["Centre", "Croisé-Laroche", "Hippodrome", "Plouich", "Buisson"],
    intro:
      "Entre Lille et Tourcoing, Marcq-en-Barœul est au cœur de notre zone d'intervention : nous y réalisons rénovations, installations neuves et projets d'éclairage.",
    housing:
      "Les grandes maisons familiales et résidences de Marcq-en-Barœul accueillent souvent des projets complets : rénovation électrique, éclairage intérieur et extérieur, domotique et prise renforcée pour recharger le véhicule électrique.",
    neighbors: ["mouvaux", "lille", "croix"],
  },
  {
    slug: "villeneuve-d-ascq",
    name: "Villeneuve-d'Ascq",
    postalCode: "59650",
    distanceKm: 13,
    areas: ["Hôtel de Ville", "Pont-de-Bois", "Triolo", "Cité scientifique", "Annappes", "Ascq", "Flers", "Brigode"],
    intro:
      "Nous intervenons dans tous les quartiers de Villeneuve-d'Ascq, des anciens villages d'Annappes, Ascq et Flers aux quartiers de la ville nouvelle.",
    housing:
      "Beaucoup de maisons construites dans les années 1970 et 1980 arrivent à l'âge où l'installation électrique mérite une rénovation : tableau d'origine, prises insuffisantes, éclairage énergivore. C'est aussi le bon moment pour prévoir une prise renforcée et recharger sa voiture électrique à domicile.",
    neighbors: ["lille", "croix"],
  },
  {
    slug: "halluin",
    name: "Halluin",
    postalCode: "59250",
    distanceKm: 8,
    areas: ["Centre-ville", "Secteur frontalier (Menin)", "Bords de la Lys", "Limite Roncq"],
    intro:
      "Au nord de Tourcoing, à la frontière avec Menin, Halluin est à quelques minutes de notre base : nous y assurons dépannages et travaux.",
    housing:
      "Maisons de ville anciennes et lotissements plus récents se côtoient à Halluin. Nous y réalisons des rénovations électriques, des mises aux normes et des installations d'éclairage extérieur.",
    neighbors: ["neuville-en-ferrain", "tourcoing"],
  },
  {
    slug: "neuville-en-ferrain",
    name: "Neuville-en-Ferrain",
    postalCode: "59960",
    distanceKm: 3,
    areas: ["Centre", "Quartiers résidentiels", "Limite Tourcoing", "Zone d'activités"],
    intro:
      "Limitrophe de Tourcoing, Neuville-en-Ferrain est l'une des communes les plus proches de nos locaux.",
    housing:
      "Ses quartiers pavillonnaires et ses zones d'activités nous amènent à intervenir aussi bien chez les particuliers que pour des locaux professionnels : installation neuve, extension, éclairage et dépannage.",
    neighbors: ["tourcoing", "halluin"],
  },
];

// Autres communes desservies (sans page dédiée).
export const otherTowns = [
  "Roncq",
  "Bondues",
  "Wasquehal",
  "Linselles",
  "Hem",
  "Lys-lez-Lannoy",
  "Leers",
  "Lannoy",
  "La Madeleine",
  "Lambersart",
  "Saint-André-lez-Lille",
  "Wambrechies",
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
