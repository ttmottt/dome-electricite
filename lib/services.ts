import type { PhotoKey } from "./images";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  photo: PhotoKey;
  intro: string[];
  signs: { title: string; items: string[] };
  includes: string[];
  approach: string[];
  faq: Faq[];
};

export const services: Service[] = [
  {
    slug: "depannage-electrique",
    name: "Dépannage électrique",
    title: "Dépannage électrique à Tourcoing et dans la métropole lilloise",
    metaTitle: "Dépannage électrique à Tourcoing",
    metaDescription:
      "Panne de courant, disjoncteur qui saute, prise qui chauffe ? Domé Électricité intervient rapidement à Tourcoing, Roubaix, Lille et dans toute la métropole. Tarif annoncé avant intervention.",
    excerpt:
      "Panne de courant, disjoncteur qui saute, prise ou interrupteur hors service : on trouve l'origine de la panne et on la répare durablement.",
    photo: "depannage",
    intro: [
      "Une coupure de courant ou un différentiel qui disjoncte sans raison apparente, c'est rarement le fruit du hasard. Le plus souvent, c'est un appareil défectueux, un circuit surchargé ou une connexion qui a vieilli. Notre travail : localiser la cause exacte, pas seulement réarmer le disjoncteur.",
      "Nous intervenons chez les particuliers, les commerçants et les petites entreprises de Tourcoing et des communes voisines. Le prix du déplacement et de la main-d'œuvre vous est annoncé avant toute intervention.",
    ],
    signs: {
      title: "Quand faire appel à nous",
      items: [
        "Le disjoncteur général ou un différentiel saute régulièrement",
        "Une partie du logement n'a plus de courant",
        "Une prise, un interrupteur ou une douille chauffe, grésille ou noircit",
        "Odeur de brûlé près du tableau électrique",
        "Lumières qui clignotent ou baisses de tension",
        "Appareil qui provoque une coupure dès qu'on le branche",
      ],
    },
    includes: [
      "Recherche de panne méthodique (mesures d'isolement, tests circuit par circuit)",
      "Remplacement de disjoncteurs, interrupteurs différentiels, prises et interrupteurs",
      "Réparation de câbles et de connexions endommagés",
      "Remise en service sécurisée et explications claires sur l'origine de la panne",
      "Conseils et devis si des travaux plus importants sont nécessaires",
    ],
    approach: [
      "Vous nous appelez et décrivez la situation : nous vous donnons les premiers gestes de sécurité.",
      "Nous convenons d'un créneau et vous annonçons le tarif de l'intervention.",
      "Sur place, nous localisons la panne et la réparons avec du matériel de marque.",
      "Nous vérifions l'installation concernée avant de partir et vous remettons une facture détaillée.",
    ],
    faq: [
      {
        q: "Mon disjoncteur saute dès que je le remets : que faire ?",
        a: "Débranchez tous les appareils, puis réarmez le disjoncteur. S'il tient, rebranchez les appareils un par un pour identifier le coupable. S'il saute même sans rien de branché, le défaut est dans l'installation : coupez le général et appelez un électricien, ne forcez pas le réarmement.",
      },
      {
        q: "Combien coûte un dépannage électrique ?",
        a: "Le prix dépend du déplacement, du temps de recherche et des pièces à remplacer. Nous vous annonçons le tarif de l'intervention avant de nous déplacer, et aucune réparation supplémentaire n'est réalisée sans votre accord.",
      },
      {
        q: "Intervenez-vous aussi pour les commerces et bureaux ?",
        a: "Oui, nous dépannons aussi les commerces, bureaux et petits locaux professionnels de Tourcoing et de la métropole lilloise, y compris en dehors des heures d'ouverture quand c'est possible.",
      },
    ],
  },
  {
    slug: "renovation-electrique",
    name: "Rénovation électrique",
    title: "Rénovation électrique de maison et d'appartement",
    metaTitle: "Rénovation électrique Tourcoing et Lille",
    metaDescription:
      "Rénovation électrique complète ou partielle de maisons de ville, maisons 1930 et appartements à Tourcoing, Roubaix et Lille. Installation sûre, conforme NF C 15-100, chantier propre.",
    excerpt:
      "Maison de ville, maison 1930 ou appartement : nous reprenons tout ou partie de votre installation pour un logement sûr et adapté à vos usages.",
    photo: "renovation",
    intro: [
      "Le parc immobilier de Tourcoing, de Roubaix et de Lille compte beaucoup de maisons de ville en briques, de maisons des années 1930 et d'anciennes courées. Leurs installations électriques ont souvent été modifiées par couches successives : fils sans terre, prises en nombre insuffisant, tableau à fusibles.",
      "Nous rénovons l'électricité pièce par pièce ou intégralement, en coordination avec vos autres artisans (plaquiste, plombier, menuisier). Nous privilégions les passages discrets pour limiter les saignées et préserver vos murs.",
    ],
    signs: {
      title: "Votre installation a besoin d'être rénovée si…",
      items: [
        "Le tableau comporte encore des fusibles à broche ou en porcelaine",
        "Les prises n'ont pas de borne de terre",
        "Les multiprises sont devenues indispensables dans plusieurs pièces",
        "L'installation a plus de 25–30 ans ou n'a jamais été vérifiée",
        "Vous achetez un bien ancien ou réaménagez des combles, une cuisine, une salle de bains",
      ],
    },
    includes: [
      "Diagnostic de l'existant et plan d'implantation des prises, éclairages et circuits",
      "Remplacement du tableau électrique et création des circuits spécialisés",
      "Mise à la terre et liaisons équipotentielles",
      "Reprise du câblage, des prises, interrupteurs et points lumineux",
      "Pré-équipement pour la fibre, la domotique ou la recharge d'un véhicule électrique",
      "Accompagnement pour l'attestation de conformité Consuel quand elle est requise",
    ],
    approach: [
      "Visite gratuite pour comprendre votre logement et vos besoins.",
      "Devis détaillé poste par poste, avec plusieurs options si nécessaire.",
      "Travaux planifiés pour limiter les coupures et protéger vos sols et meubles.",
      "Essais, mise en service et remise d'un schéma de votre installation.",
    ],
    faq: [
      {
        q: "Combien de temps dure une rénovation électrique complète ?",
        a: "Pour une maison de ville de taille moyenne, comptez généralement de une à trois semaines selon l'accessibilité et l'ampleur des travaux. Le planning précis figure dans le devis.",
      },
      {
        q: "Peut-on rester dans le logement pendant les travaux ?",
        a: "Oui, la plupart du temps. Nous organisons le chantier pièce par pièce et rétablissons le courant chaque soir dans les pièces de vie.",
      },
      {
        q: "Faut-il refaire toute l'installation ?",
        a: "Pas forcément. Après diagnostic, nous distinguons ce qui doit être remplacé pour votre sécurité de ce qui peut être conservé. Une rénovation partielle bien ciblée est souvent suffisante.",
      },
    ],
  },
  {
    slug: "mise-aux-normes-tableau-electrique",
    name: "Mise aux normes & tableau électrique",
    title: "Mise aux normes électrique et remplacement de tableau",
    metaTitle: "Mise aux normes et tableau électrique",
    metaDescription:
      "Mise en sécurité, mise aux normes NF C 15-100 et remplacement de tableau électrique à Tourcoing et dans la métropole lilloise. Idéal avant une vente, une location ou après un diagnostic.",
    excerpt:
      "Diagnostic défavorable, vente, location ou simple vétusté : nous remplaçons le tableau et mettons votre installation en sécurité.",
    photo: "tableau",
    intro: [
      "Le tableau électrique est le cœur de la sécurité de votre logement. Un tableau moderne protège les personnes grâce aux interrupteurs différentiels 30 mA et protège chaque circuit contre les surcharges.",
      "Après un diagnostic électrique immobilier défavorable, avant une mise en location ou simplement parce que votre tableau a vieilli, nous vous proposons soit une mise en sécurité ciblée, soit une mise en conformité complète selon la norme NF C 15-100.",
    ],
    signs: {
      title: "Situations fréquentes",
      items: [
        "Diagnostic électrique avec anomalies avant une vente ou une location",
        "Tableau à fusibles ou disjoncteurs anciens sans différentiel 30 mA",
        "Tableau saturé, sans place pour un nouveau circuit",
        "Ajout d'une plaque de cuisson, d'un chauffe-eau, d'une pompe à chaleur ou d'une prise de recharge pour véhicule électrique",
        "Absence ou défaut de prise de terre",
      ],
    },
    includes: [
      "Remplacement complet du tableau électrique (coffret, différentiels, disjoncteurs)",
      "Création ou contrôle de la prise de terre et mesure de sa valeur",
      "Liaisons équipotentielles de la salle de bains",
      "Levée des anomalies relevées par un diagnostic immobilier",
      "Repérage clair de chaque circuit et schéma fourni",
      "Parafoudre si votre situation le nécessite",
    ],
    approach: [
      "Lecture de votre diagnostic ou état des lieux de l'installation.",
      "Proposition chiffrée : mise en sécurité seule ou mise en conformité complète.",
      "Remplacement du tableau, généralement réalisé en une journée.",
      "Contrôles finaux et remise des documents utiles pour votre vente ou location.",
    ],
    faq: [
      {
        q: "Mise en sécurité ou mise aux normes : quelle différence ?",
        a: "La mise en sécurité corrige les points dangereux (terre, différentiels, protections, parties actives accessibles). La mise aux normes vise la conformité complète à la NF C 15-100 en vigueur, y compris le nombre de prises et de circuits par pièce.",
      },
      {
        q: "Combien de temps pour changer un tableau électrique ?",
        a: "Dans la majorité des logements, le remplacement d'un tableau se fait en une journée, avec une coupure de courant limitée à quelques heures.",
      },
      {
        q: "Un propriétaire bailleur doit-il mettre l'électricité aux normes ?",
        a: "Un logement loué doit être décent et ne pas présenter de danger pour les occupants. Le diagnostic électrique obligatoire pour les installations de plus de 15 ans permet d'identifier les anomalies à corriger : nous pouvons les lever rapidement.",
      },
    ],
  },
  {
    slug: "prise-renforcee-vehicule-electrique",
    name: "Prise renforcée véhicule électrique",
    title: "Prise renforcée pour recharger votre voiture électrique",
    metaTitle: "Prise renforcée Green'Up à Tourcoing et Lille",
    metaDescription:
      "Pose de prise renforcée type Green'Up pour recharger votre voiture électrique ou hybride à domicile, à Tourcoing, Roubaix, Lille et dans la métropole : ligne dédiée, protections adaptées, mise en service.",
    excerpt:
      "Une prise renforcée type Green'Up sur une ligne dédiée : la recharge à domicile simple, sûre et économique pour votre voiture électrique ou hybride.",
    photo: "intervention", // À remplacer par une photo d'une prise posée par Benoît,
    intro: [
      "Brancher sa voiture électrique sur une prise ordinaire, c'est une recharge lente et une prise qui chauffe pendant des heures, souvent sur un circuit partagé avec d'autres appareils. Une prise renforcée (type Green'Up) est conçue pour supporter une charge longue et régulière, en toute sécurité.",
      "Nous la posons sur une ligne dédiée, avec ses propres protections au tableau, dans votre garage, votre allée ou sous votre carport. Vous rechargez avec le câble fourni avec votre véhicule, idéalement la nuit en heures creuses.",
    ],
    signs: {
      title: "Pour qui ?",
      items: [
        "Propriétaires de maison avec garage, allée ou carport",
        "Conducteurs de voitures hybrides rechargeables",
        "Conducteurs de voitures électriques qui roulent surtout au quotidien (trajets domicile-travail)",
        "Ceux qui rechargent aujourd'hui sur une prise classique ou une rallonge",
      ],
    },
    includes: [
      "Vérification de votre tableau, de votre abonnement et du meilleur emplacement",
      "Fourniture et pose d'une prise renforcée de marque (type Green'Up), intérieure ou extérieure",
      "Ligne dédiée depuis le tableau, avec disjoncteur et protection différentielle adaptés",
      "Mise en service et test de charge avec votre véhicule",
      "Conseils pour recharger en heures creuses et ménager votre installation",
    ],
    approach: [
      "Échange sur votre véhicule, vos trajets et votre stationnement.",
      "Visite technique et devis détaillé.",
      "Pose de la prise et de sa ligne dédiée, en général en une demi-journée.",
      "Mise en service, test avec votre véhicule et explications.",
    ],
    faq: [
      {
        q: "Quelle est la différence entre une prise renforcée et une prise classique ?",
        a: "Une prise classique n'est pas faite pour délivrer un courant élevé pendant des heures : elle peut chauffer, et la voiture limite alors sa puissance de charge. La prise renforcée, posée sur une ligne dédiée, supporte cet usage en continu et recharge plus vite, en toute sécurité.",
      },
      {
        q: "Combien de temps faut-il pour recharger ?",
        a: "Avec une prise renforcée, comptez de l'ordre de 15 à 20 km d'autonomie récupérés par heure de charge, soit 150 à 200 km sur une nuit selon le véhicule. C'est largement suffisant pour les trajets du quotidien et pour une hybride rechargeable.",
      },
      {
        q: "Faut-il un câble particulier ?",
        a: "Vous utilisez le câble de recharge pour prise domestique (avec boîtier de contrôle) fourni avec la plupart des véhicules, ou disponible en option chez le constructeur. Nous vérifions avec vous qu'il est compatible avant la pose.",
      },
      {
        q: "Installez-vous aussi des bornes de recharge (wallbox) ?",
        a: "Pas pour le moment : nous nous concentrons sur la prise renforcée, qui couvre la grande majorité des besoins à domicile. Si votre usage demande une recharge plus rapide, nous vous le dirons honnêtement lors de la visite.",
      },
    ],
  },
  {
    slug: "eclairage-domotique",
    name: "Éclairage & domotique",
    title: "Éclairage LED et domotique pour la maison",
    metaTitle: "Éclairage LED et domotique à Tourcoing",
    metaDescription:
      "Spots LED encastrés, rubans lumineux, éclairage extérieur, volets roulants et interrupteurs connectés : Domé Électricité installe éclairage et domotique à Tourcoing et dans la métropole lilloise.",
    excerpt:
      "Spots encastrés, rubans LED, éclairage extérieur, volets et interrupteurs connectés : plus de confort et moins de consommation.",
    photo: "eclairage",
    intro: [
      "Un bon éclairage change complètement la perception d'une pièce. Nous concevons avec vous un éclairage par zones : lumière d'ambiance, lumière de travail en cuisine, mise en valeur d'un mur ou d'une bibliothèque.",
      "Côté domotique, nous installons des solutions simples et fiables : variateurs, interrupteurs connectés, commande des volets roulants, scénarios et détecteurs de présence, pilotables depuis votre téléphone si vous le souhaitez.",
    ],
    signs: {
      title: "Idées de projets",
      items: [
        "Remplacer de vieux plafonniers par des spots LED encastrés",
        "Éclairer un plan de travail ou un îlot de cuisine",
        "Installer un éclairage extérieur avec détecteur dans le jardin ou l'allée",
        "Motoriser et centraliser les volets roulants",
        "Ajouter des va-et-vient ou des commandes sans fil sans faire de saignées",
      ],
    },
    includes: [
      "Plan d'éclairage et choix des températures de couleur",
      "Pose de spots, suspensions, rubans LED et appliques",
      "Éclairage extérieur étanche et détecteurs de mouvement",
      "Variateurs, interrupteurs et prises connectés",
      "Motorisation et centralisation des volets roulants",
    ],
    approach: [
      "Visite pour comprendre vos usages pièce par pièce.",
      "Proposition d'implantation et devis.",
      "Installation soignée, finitions propres.",
      "Réglages, programmation et prise en main avec vous.",
    ],
    faq: [
      {
        q: "Peut-on installer des spots LED dans un plafond existant ?",
        a: "Oui, dans la plupart des faux plafonds en plaques de plâtre. Pour un plafond en dur, nous étudions les solutions possibles (faux plafond partiel, rails, spots en saillie).",
      },
      {
        q: "La domotique est-elle compliquée à utiliser ?",
        a: "Nous privilégions des équipements qui continuent de fonctionner normalement avec un simple interrupteur. Le pilotage depuis le téléphone ou la voix est un plus, jamais une obligation.",
      },
      {
        q: "Les LED font-elles vraiment économiser ?",
        a: "Une ampoule LED consomme de l'ordre de 80 % de moins qu'une ampoule à incandescence pour un éclairage équivalent, et dure bien plus longtemps.",
      },
    ],
  },
  {
    slug: "installation-electrique-neuve",
    name: "Installation neuve & extension",
    title: "Installation électrique neuve, extension et local professionnel",
    metaTitle: "Installation électrique neuve à Lille",
    metaDescription:
      "Électricité de maison neuve, extension, aménagement de combles, garage ou local commercial à Tourcoing et dans la métropole lilloise. Installation conforme NF C 15-100.",
    excerpt:
      "Maison neuve, extension, combles aménagés, garage ou local commercial : une installation pensée dès le départ pour vos usages.",
    photo: "neuf",
    intro: [
      "Dans un projet neuf ou une extension, l'électricité se prévoit tôt : emplacement des prises, éclairage, réseau informatique, chauffage, recharge du véhicule électrique. Nous travaillons à partir de vos plans et en lien avec vos autres intervenants.",
      "Nous équipons aussi les locaux professionnels : commerces, bureaux, ateliers. L'installation est dimensionnée pour votre activité, avec un tableau clair et évolutif.",
    ],
    signs: {
      title: "Projets typiques",
      items: [
        "Maison neuve ou rénovation lourde",
        "Extension, véranda ou aménagement de combles",
        "Garage, abri de jardin ou atelier",
        "Ouverture ou réaménagement d'un commerce ou d'un bureau",
      ],
    },
    includes: [
      "Étude des plans et implantation conforme NF C 15-100",
      "Tableau électrique, circuits, prises, éclairage",
      "Réseau informatique (RJ45) et préparation fibre",
      "Alimentation du chauffage, de la VMC et des équipements",
      "Accompagnement jusqu'au passage du Consuel et à la mise en service",
    ],
    approach: [
      "Analyse de vos plans et de vos besoins.",
      "Devis détaillé et planning coordonné avec le chantier.",
      "Pose des gaines, câblage, appareillage et tableau.",
      "Essais, attestation et mise en service.",
    ],
    faq: [
      {
        q: "Qu'est-ce que l'attestation Consuel ?",
        a: "C'est l'attestation de conformité exigée pour mettre sous tension une installation neuve ou entièrement rénovée. Nous préparons l'installation et les documents pour ce contrôle.",
      },
      {
        q: "Travaillez-vous avec les constructeurs et architectes ?",
        a: "Oui, nous intervenons aussi bien pour des particuliers que pour des maîtres d'œuvre, architectes ou entreprises générales.",
      },
      {
        q: "Combien de prises faut-il par pièce ?",
        a: "La norme NF C 15-100 fixe des minimums par pièce (par exemple 5 prises dans un séjour jusqu'à 28 m², 6 prises en cuisine dont 4 au-dessus du plan de travail). Nous dimensionnons au-delà selon vos usages.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const generalFaq: Faq[] = [
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui. Pour tous les travaux (rénovation, mise aux normes, prise de recharge, éclairage…), le déplacement pour établir le devis et le devis lui-même sont gratuits et sans engagement.",
  },
  {
    q: "Dans quelles villes intervenez-vous ?",
    a: "Nous sommes basés à Tourcoing et intervenons dans toute la métropole lilloise : Roubaix, Lille, Mouvaux, Wattrelos, Croix, Marcq-en-Barœul, Villeneuve-d'Ascq, Halluin, Neuville-en-Ferrain, Roncq, Bondues, Wasquehal et les communes voisines.",
  },
  {
    q: "Sous quel délai pouvez-vous intervenir ?",
    a: "Pour un dépannage, nous cherchons toujours à intervenir dans les meilleurs délais, souvent le jour même ou le lendemain selon l'urgence. Pour des travaux, le planning est fixé avec vous lors du devis.",
  },
  {
    q: "Vos installations respectent-elles les normes ?",
    a: "Toutes nos installations sont réalisées selon la norme NF C 15-100, avec du matériel de grandes marques, et vous recevez une facture détaillée.",
  },
  {
    q: "Comment se passe le premier contact ?",
    a: "Appelez-nous ou remplissez le formulaire de contact en décrivant votre besoin. Nous vous recontactons pour préciser la demande et, si nécessaire, convenir d'une visite.",
  },
];
