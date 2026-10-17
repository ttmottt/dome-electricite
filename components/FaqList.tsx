import { Accordion as AccordionPrimitive } from "radix-ui";

import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqSchema } from "@/lib/schema";
import type { Faq } from "@/lib/services";
import { JsonLd } from "./JsonLd";

export function FaqList({ items, withSchema = true }: { items: Faq[]; withSchema?: boolean }) {
  return (
    <>
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <Accordion type="single" collapsible className="border-y">
        {items.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`}>
            <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline md:text-lg">{f.q}</AccordionTrigger>
            {/* forceMount : les réponses restent dans le HTML pour les moteurs de recherche, masquées en CSS. */}
            <AccordionPrimitive.Content
              forceMount
              className="overflow-hidden data-[state=closed]:hidden data-[state=open]:animate-accordion-down"
            >
              <p className="pr-10 pb-5 text-muted-foreground">{f.a}</p>
            </AccordionPrimitive.Content>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
