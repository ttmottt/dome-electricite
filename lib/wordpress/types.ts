export type WPRendered = { rendered: string };

export type WPMedia = {
  source_url: string;
  alt_text?: string;
  media_details?: { width?: number; height?: number };
};

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: WPRendered;
  excerpt: WPRendered;
  content: WPRendered;
  yoast_head_json?: { title?: string; description?: string };
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: { id: number; name: string; slug: string; taxonomy: string }[][];
  };
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  html: string;
  date: string;
  modified: string;
  seoTitle?: string;
  seoDescription?: string;
  image?: { src: string; alt: string; width: number; height: number };
  categories: string[];
};
