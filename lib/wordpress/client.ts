import "server-only";

import { WP_API_URL } from "./config";

// Node n'envoie pas de User-Agent par défaut : certains WAF / plugins de sécurité
// WordPress bloquent alors la requête.
const USER_AGENT = process.env.WP_API_USER_AGENT ?? "dome-electricite-website/1.0";

export async function wpFetch<T>(path: string): Promise<T> {
  const endpoint = path.startsWith("/") ? path : `/${path}`;
  const res = await fetch(`${WP_API_URL}${endpoint}`, {
    headers: { Accept: "application/json", "User-Agent": USER_AGENT },
    redirect: "follow",
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`WordPress ${res.status} ${res.statusText} (${endpoint}) ${body.slice(0, 200)}`);
  }
  return (await res.json()) as T;
}

export function wpQuery(params: Record<string, string | number | boolean | undefined>) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) search.set(key, String(value));
  }
  return search.toString();
}
