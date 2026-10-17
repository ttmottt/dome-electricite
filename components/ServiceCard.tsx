import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { photos } from "@/lib/images";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, headingLevel = "h3" }: { service: Service; headingLevel?: "h2" | "h3" }) {
  const photo = photos[service.photo];
  const Heading = headingLevel;
  return (
    <Card className="group relative gap-0 rounded-3xl py-0 text-base ring-border transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgb(10_10_10/0.45)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          placeholder="blur"
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/90 text-ink backdrop-blur transition-colors group-hover:bg-primary">
          <ArrowUpRightIcon className="size-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Heading className="text-xl md:text-2xl">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
            {service.name}
          </Link>
        </Heading>
        <p className="mt-2 text-muted-foreground">{service.excerpt}</p>
      </div>
    </Card>
  );
}
