import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Un projet ou une panne ? Parlons-en.",
  text = "Devis gratuit et sans engagement à Tourcoing et dans toute la métropole lilloise.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-ink md:px-14 md:py-16">
        <svg
          viewBox="0 0 200 200"
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -bottom-20 size-80 text-ink/10 md:right-10"
        >
          <path d="M116 10H72L32 104h40l-22 86 98-112h-46z" fill="currentColor" />
        </svg>
        <div className="relative max-w-2xl">
          <h2 className="text-3xl md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-ink/80">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" variant="ink">
              <a href={`tel:${site.phoneHref}`}>
                <PhoneIcon />
                {site.phone}
              </a>
            </Button>
            <Button asChild size="xl" variant="cream">
              <Link href="/contact">
                Demander un devis en ligne
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
