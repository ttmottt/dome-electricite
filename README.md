# Domé Électricité – site vitrine

Site de présentation de **Domé Électricité** (Benoît Domé, artisan électricien, 8 rue d'Iéna, 59200 Tourcoing),
optimisé pour le référencement local sur Tourcoing et la métropole lilloise.

Stack : Next.js 16 (App Router, Cache Components), Tailwind CSS v4, shadcn/ui (Radix), motion, Lucide.

## Démarrer

```bash
cp .env.example .env.local   # puis compléter les variables
npm install
npm run dev
```

## Où modifier quoi

| Fichier | Contenu |
| --- | --- |
| `lib/site.ts` | Coordonnées, horaires, infos légales (**téléphone et e-mail à compléter**) |
| `lib/services.ts` | Les 6 services (textes, FAQ, métadonnées SEO) |
| `lib/cities.ts` | Les villes avec page dédiée `/electricien/[ville]` et les autres communes desservies |
| `lib/images.ts` | Photos (dans `public/images/`, WebP optimisés) et textes alternatifs |
| `app/globals.css` | Charte : primary `#F19E12`, crème `#FCF3E2`, blanc, noir (tokens shadcn) |

## Pages

- `/` accueil, `/services` + 6 pages services, `/zones-intervention` + 10 pages villes
- `/a-propos`, `/contact` (formulaire → e-mail via Brevo), `/mentions-legales`
- `/realisations` + `/realisations/[slug]` : articles venant de WordPress (optionnel)

## SEO

- Métadonnées par page (title, description, canonical, Open Graph, Twitter) via `lib/seo.ts`
- JSON-LD : `Electrician` (LocalBusiness), `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`
- `sitemap.xml`, `robots.txt`, manifest, favicon/icônes, image Open Graph générée (`app/opengraph-image.tsx`)
- Pages villes au contenu propre à chaque commune (quartiers, type de bâti) pour éviter les pages satellites

## Formulaire de contact (Brevo)

Variables : `BREVO_API_KEY`, `BREVO_SENDER_EMAIL` (expéditeur validé dans Brevo), `BREVO_SENDER_NAME`,
`CONTACT_RECIPIENT_EMAIL`. En développement sans clé, la demande est affichée dans la console.

## WordPress headless (optionnel)

1. Installer WordPress sur un sous-domaine (ex. `cms.dome-electricite.fr`) et y publier les articles.
2. Définir `WP_API_URL=https://cms.dome-electricite.fr/wp-json` (les images `wp-content/uploads` sont autorisées automatiquement).
3. Revalidation instantanée : définir `REVALIDATE_SECRET`, puis configurer un webhook WordPress
   (ex. extension *WP Webhooks*) à la publication : `POST https://www.dome-electricite.fr/api/revalidate`
   avec le corps `{ "secret": "…", "slug": "<slug de l'article>" }`. Sans webhook, le contenu se met à jour en moins d'une heure.

Les titres/descriptions Yoast (`yoast_head_json`) sont repris s'ils existent.

## Déploiement (Vercel)

Renseigner les variables d'environnement dans le projet Vercel (`NEXT_PUBLIC_SITE_URL` = domaine final), puis
`vercel --prod`. Après la mise en ligne : déclarer le sitemap dans Google Search Console et relier le site à la
fiche Google Business Profile (même nom, adresse et téléphone que sur le site).

## Crédits photos

Photos d'illustration sous licence Unsplash (voir `lib/images.ts`). À remplacer idéalement par de vraies photos de chantiers.
