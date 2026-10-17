"use client";

import { useActionState, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CircleCheckIcon, LoaderCircleIcon, SendIcon } from "lucide-react";

import { sendContact, type ContactState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/services";

const initialState: ContactState = { status: "idle" };
const noopSubscribe = () => () => {};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  // Pré-sélection depuis /contact?service=… (lu côté client pour garder la page statique).
  const fromUrl = useSyncExternalStore(
    noopSubscribe,
    () => new URLSearchParams(window.location.search).get("service") ?? "",
    () => "",
  );
  const [picked, setPicked] = useState<string | null>(null);
  const service = picked ?? (services.some((s) => s.slug === fromUrl) ? fromUrl : "");

  // React réinitialise le formulaire après chaque action, ce qui viderait le champ natif
  // interne du Select Radix : on injecte donc sa valeur contrôlée à l'envoi.
  const submit = (formData: FormData) => {
    formData.set("service", service);
    formAction(formData);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {state.status === "success" ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center rounded-3xl bg-secondary px-6 py-16 text-center"
          role="status"
        >
          <CircleCheckIcon className="size-14 text-brand-deep" />
          <h2 className="mt-5 text-3xl">Merci, votre demande est envoyée !</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Nous vous recontactons rapidement pour en parler et, si besoin, convenir d'une visite.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" action={submit} noValidate className="grid gap-5 sm:grid-cols-2" exit={{ opacity: 0 }}>
          <Field id="name" label="Nom et prénom" error={state.errors?.name}>
            <Input id="name" name="name" autoComplete="name" required defaultValue={state.values?.name} aria-invalid={!!state.errors?.name} className="h-12 rounded-xl text-base" />
          </Field>
          <Field id="phone" label="Téléphone" error={state.errors?.phone}>
            <Input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required defaultValue={state.values?.phone} aria-invalid={!!state.errors?.phone} className="h-12 rounded-xl text-base" />
          </Field>
          <Field id="email" label="E-mail (facultatif)" error={state.errors?.email}>
            <Input id="email" name="email" type="email" autoComplete="email" defaultValue={state.values?.email} aria-invalid={!!state.errors?.email} className="h-12 rounded-xl text-base" />
          </Field>
          <Field id="city" label="Commune" error={state.errors?.city}>
            <Input id="city" name="city" autoComplete="address-level2" placeholder="Tourcoing, Roubaix, Lille…" required defaultValue={state.values?.city} aria-invalid={!!state.errors?.city} className="h-12 rounded-xl text-base" />
          </Field>
          <Field id="service" label="Type de prestation" className="sm:col-span-2">
            {/* Le reset du formulaire renvoie une valeur vide : on la filtre pour garder le choix. */}
            <Select value={service} onValueChange={(v) => v && setPicked(v)}>
              <SelectTrigger id="service" className="!h-12 w-full rounded-xl text-base">
                <SelectValue placeholder="Choisissez une prestation" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.slug} value={s.slug}>
                    {s.name}
                  </SelectItem>
                ))}
                <SelectItem value="autre">Autre / je ne sais pas</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field id="message" label="Votre besoin" error={state.errors?.message} className="sm:col-span-2">
            <Textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Ex. : le disjoncteur saute dès que j'allume le four ; remplacement d'un tableau à fusibles…"
              defaultValue={state.values?.message}
              aria-invalid={!!state.errors?.message}
              className="min-h-40 rounded-xl text-base"
            />
          </Field>

          {/* Pot de miel anti-spam */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label htmlFor="website">Site web</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="sm:col-span-2">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                defaultChecked={state.values?.consent === "on"}
                aria-invalid={!!state.errors?.consent}
                className="mt-1 size-4 shrink-0 cursor-pointer rounded accent-primary"
              />
              <Label htmlFor="consent" className="text-sm leading-relaxed font-normal text-muted-foreground">
                J'accepte que mes informations soient utilisées pour être recontacté au sujet de ma demande (voir les
                mentions légales).
              </Label>
            </div>
            {state.errors?.consent && <p className="mt-2 text-sm text-destructive">{state.errors.consent}</p>}
          </div>

          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
            <Button type="submit" size="xl" disabled={pending} className="sm:w-auto">
              {pending ? <LoaderCircleIcon className="animate-spin" /> : <SendIcon />}
              {pending ? "Envoi en cours…" : "Envoyer ma demande"}
            </Button>
            {state.status === "error" && state.message && (
              <p role="alert" className="text-sm font-medium text-destructive">
                {state.message}
              </p>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 text-sm font-semibold">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
