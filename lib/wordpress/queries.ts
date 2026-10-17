import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { wpFetch, wpQuery } from "./client";
import { isWordPressEnabled } from "./config";
import { sanitizeWpHtml, toPlainText } from "./html";
import type { Article, WPPost } from "./types";

const FIELDS = "id,slug,date,modified,title,excerpt,content,yoast_head_json,_links,_embedded";

function toArticle(post: WPPost): Article {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const categories = (post._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((t) => t.taxonomy === "category" && t.slug !== "non-classe" && t.slug !== "uncategorized")
    .map((t) => toPlainText(t.name));
  return {
    slug: post.slug,
    title: toPlainText(post.title.rendered),
    excerpt: toPlainText(post.excerpt.rendered, 180),
    html: sanitizeWpHtml(post.content.rendered),
    date: post.date,
    modified: post.modified,
    seoTitle: post.yoast_head_json?.title,
    seoDescription: post.yoast_head_json?.description,
    image: media?.source_url
      ? {
          src: media.source_url,
          alt: media.alt_text || toPlainText(post.title.rendered),
          width: media.media_details?.width ?? 1600,
          height: media.media_details?.height ?? 1000,
        }
      : undefined,
    categories,
  };
}

/** Articles WordPress (réalisations, conseils…). Renvoie [] si le CMS est absent ou injoignable. */
export async function getArticles(limit = 24): Promise<Article[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("wp:posts");

  if (!isWordPressEnabled) return [];
  try {
    const posts = await wpFetch<WPPost[]>(
      `/wp/v2/posts?${wpQuery({ per_page: limit, _embed: "wp:featuredmedia,wp:term", _fields: FIELDS })}`,
    );
    return posts.map(toArticle);
  } catch (error) {
    console.error("[wordpress] getArticles", error);
    return [];
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  "use cache";
  cacheLife("hours");
  cacheTag("wp:posts", `wp:post:${slug}`);

  if (!isWordPressEnabled || !/^[a-z0-9-]+$/i.test(slug)) return null;
  try {
    const posts = await wpFetch<WPPost[]>(
      `/wp/v2/posts?${wpQuery({ slug, _embed: "wp:featuredmedia,wp:term", _fields: FIELDS })}`,
    );
    return posts[0] ? toArticle(posts[0]) : null;
  } catch (error) {
    console.error("[wordpress] getArticle", slug, error);
    return null;
  }
}
