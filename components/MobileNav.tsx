"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { mainNav } from "./nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon-xl" className="lg:hidden" aria-label="Ouvrir le menu">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="gap-0 data-[side=right]:w-full data-[side=right]:sm:max-w-sm">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="font-display text-2xl font-bold tracking-wide uppercase">
            Domé <span className="text-primary">Électricité</span>
          </SheetTitle>
          <SheetDescription>Électricien à Tourcoing et dans la métropole lilloise</SheetDescription>
        </SheetHeader>
        <nav aria-label="Navigation mobile" className="flex flex-1 flex-col p-6">
          <ul className="flex flex-col gap-1">
            {[{ href: "/", label: "Accueil" }, ...mainNav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block rounded-xl px-4 py-3 text-xl font-semibold tracking-tight hover:bg-secondary aria-[current=page]:bg-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3 pt-8">
            <Button asChild size="xl">
              <a href={`tel:${site.phoneHref}`}>
                <PhoneIcon />
                Appeler le {site.phone}
              </a>
            </Button>
            <Button asChild size="xl" variant="ink">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Demander un devis gratuit
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
