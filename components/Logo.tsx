import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo-dome-electricite.webp";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)} aria-label="Domé Électricité – accueil">
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white ring-1 ring-border">
        <Image src={logo} alt="" className="h-auto w-10" sizes="40px" priority />
      </span>
      <span className="font-display text-[1.6rem] leading-none font-bold tracking-wide uppercase">
        Domé <span className="text-primary">Électricité</span>
      </span>
    </Link>
  );
}
