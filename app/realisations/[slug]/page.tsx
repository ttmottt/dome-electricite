import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/PageHero";
import { businessId } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { getArticle, getArticles } from "@/lib/wordpress/queries";

const PLACEHOLDER = "__aucun-article__";

export async function generateStaticParams() {
  const articles = await getArticles(50);
  // Cache Components impose au moins un paramètre : on en fournit un factice si le CMS est vide.
  return articles.length > 0 ? articles.map((a) => ({ slug: a.slug })) : [{ slug: PLACEHOLDER }];
}

export async function generateMetadata({ params }: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    path: `/realisations/${slug}`,
    absoluteTitle: Boolean(article.seoTitle),
  });
}

const dateFormat = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: PageProps<"/realisations/[slug]">) {
  const { slug } = await params;
  const article = slug === PLACEHOLDER ? null : await getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          dateModified: article.modified,
          url: absoluteUrl(`/realisations/${slug}`),
          ...(article.image && { image: article.image.src }),
          author: { "@id": businessId },
          publisher: { "@id": businessId },
        }}
      />
      <PageHero
        crumbs={[
          { name: "Réalisations & conseils", path: "/realisations" },
          { name: article.title, path: `/realisations/${slug}` },
        ]}
        eyebrow={article.categories[0] ?? "Réalisation"}
        title={article.title}
      >
        <time dateTime={article.date}>Publié le {dateFormat.format(new Date(article.date))}</time>
      </PageHero>

      <article className="container-site max-w-3xl py-16 md:py-20">
        {article.image && (
          <Reveal className="relative mb-12 aspect-[16/10] overflow-hidden rounded-3xl">
            <Image src={article.image.src} alt={article.image.alt} fill priority sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
          </Reveal>
        )}
        <div
          className="text-lg text-foreground/85 [&_a]:font-semibold [&_a]:text-brand-deep [&_a]:underline [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_figure]:my-8 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:text-foreground [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-2xl [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-5 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>

      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
