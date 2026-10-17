import Link from "next/link";
import { PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-lg">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Aller au contenu
      </a>
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="xl" className="hidden sm:inline-flex">
            <a href={`tel:${site.phoneHref}`}>
              <PhoneIcon />
              {site.phone}
            </a>
          </Button>
          <Button asChild size="xl" variant="ink" className="hidden 2xl:inline-flex">
            <Link href="/contact">Devis gratuit</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
