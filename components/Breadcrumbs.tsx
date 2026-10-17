import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Accueil", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Fil d'Ariane" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {all.map((c, i) =>
            i === all.length - 1 ? (
              <li key={c.path} aria-current="page" className="text-foreground">
                {c.name}
              </li>
            ) : (
              <li key={c.path} className="flex items-center gap-1.5">
                <Link href={c.path} className="underline-offset-4 hover:text-primary hover:underline">
                  {c.name}
                </Link>
                <ChevronRightIcon aria-hidden="true" className="size-3.5" />
              </li>
            ),
          )}
        </ol>
      </nav>
    </>
  );
}
