// Avis Google, recopiés depuis la fiche Google Business Profile (relevé du 17/10/2026).
// Textes tels que publiés ; ceux tronqués par Google ("… Plus") sont coupés avec une ellipse.
// Pas de balisage schema.org Review/AggregateRating : Google ignore (et sanctionne) les avis
// d'une entreprise affichés sur son propre site, a fortiori recopiés d'une autre plateforme.

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // AAAA-MM, mois de publication de l'avis
  text: string;
};

export const googleRating = 5;

export const reviews: Review[] = [
  {
    author: "Laurent G.",
    rating: 5,
    date: "2026-08",
    text: "Benoît a fait un travail remarquable. Il a su remettre l’installation électrique d’équerre, d’excellents conseils et un travail ultra soigné. Un chantier propre…",
  },
  {
    author: "A. Mignot",
    rating: 5,
    date: "2026-08",
    text: "Intervention chez nous pour des travaux de rénovations. Prestation soigné, efficace, discours claire et proposition intéressante. Je recommande 100%.",
  },
  {
    author: "Quentin C.",
    rating: 5,
    date: "2026-07",
    text: "Vous avez besoin d’un électricien ? C’est Benoit qu’il vous faut. Un travail soigné et professionnel. Il trouve les solutions adaptées à vos besoins…",
  },
  {
    author: "Camille G.",
    rating: 5,
    date: "2026-06",
    text: "Benoît est intervenu chez nous pour remettre en conformité notre électricité. Benoît est quelq'un de professionnel très rigoureux et qui nous a bien expliqué…",
  },
  {
    author: "H. B.",
    rating: 5,
    date: "2026-06",
    text: "Intervention au sein de notre showroom rapide, propre et efficace. Équipe professionnelle et sympathique. Explications post intervention claires et précises. Je recommande :).",
  },
  {
    author: "Clotilde E.",
    rating: 5,
    date: "2026-05",
    text: "Réactif, professionnel et toujours à l'écoute. Et pleins de conseils…",
  },
  {
    author: "pilag23",
    rating: 5,
    date: "2026-05",
    text: "Travail propre et sérieux. Mon chantier s'est très bien. Je recommande.",
  },
];
