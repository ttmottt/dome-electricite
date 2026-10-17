// URL de l'API REST WordPress, ex. https://cms.dome-electricite.fr/wp-json
// Sans cette variable, le site fonctionne avec ses contenus locaux et la rubrique
// « Réalisations & conseils » affiche simplement un état vide.
export const WP_API_URL = process.env.WP_API_URL?.replace(/\/$/, "") ?? "";

export const isWordPressEnabled = WP_API_URL !== "";
