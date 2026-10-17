import Link from "next/link";
import { ArrowLeftIcon, PhoneIcon } from "lucide-react";

import { RingMotif } from "@/components/RingMotif";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="dark relative overflow-hidden bg-background text-foreground">
      <RingMotif className="pointer-events-none absolute -top-32 -right-32 size-[30rem] text-primary/25" />
      <div className="container-site relative py-24 md:py-36">
        <p className="font-display text-8xl font-bold text-primary md:text-9xl">404</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Court-circuit : cette page n'existe pas</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          La page demandée a peut-être été déplacée. Revenez à l'accueil ou appelez-nous directement.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl">
            <Link href="/">
              <ArrowLeftIcon />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline-light">
            <a href={`tel:${site.phoneHref}`}>
              <PhoneIcon />
              {site.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
