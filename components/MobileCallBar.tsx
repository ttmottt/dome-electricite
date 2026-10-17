import Link from "next/link";
import { FileTextIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t bg-background/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <Button asChild size="xl">
        <a href={`tel:${site.phoneHref}`}>
          <PhoneIcon />
          Appeler
        </a>
      </Button>
      <Button asChild size="xl" variant="ink">
        <Link href="/contact">
          <FileTextIcon />
          Devis gratuit
        </Link>
      </Button>
    </div>
  );
}
