import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

// Webhook appelé par WordPress à la publication / modification d'un article
// (ex. extension « WP Webhooks ») : POST { "secret": "...", "slug": "mon-article" }.
export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as { secret?: unknown; slug?: unknown } | null;

  if (!process.env.REVALIDATE_SECRET || body?.secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ revalidated: false, message: "Unauthorized" }, { status: 401 });
  }

  const slug = typeof body.slug === "string" && /^[a-z0-9-]{1,200}$/i.test(body.slug) ? body.slug : null;

  revalidateTag("wp:posts", { expire: 0 });
  if (slug) {
    revalidateTag(`wp:post:${slug}`, { expire: 0 });
    revalidatePath(`/realisations/${slug}`);
  }
  revalidatePath("/realisations");

  return Response.json({ revalidated: true, slug });
}
