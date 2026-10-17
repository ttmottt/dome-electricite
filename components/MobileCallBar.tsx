import Link from "next/link";
import { FileTextIcon, PhoneIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/BrandIcons";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1fr_auto] gap-2 border-t bg-background/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
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
      {site.whatsapp && (
        <Button asChild size="xl" className="aspect-square bg-[#25D366] px-0 text-white hover:bg-[#25D366]/90">
          <a href={site.whatsapp} target="_blank" rel="noopener" aria-label="Écrire sur WhatsApp">
            <WhatsAppIcon className="size-6" />
          </a>
        </Button>
      )}
    </div>
  );
}
