"use server";

import { services } from "@/lib/services";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "email" | "city" | "message" | "consent", string>>;
  values?: Record<string, string>;
};

const BREVO_EMAIL_URL = "https://api.brevo.com/v3/smtp/email";

function text(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Pot de miel : un humain ne remplit jamais ce champ caché.
  if (text(formData, "website", 200)) return { status: "success" };

  const values = {
    name: text(formData, "name", 100),
    phone: text(formData, "phone", 30),
    email: text(formData, "email", 150).toLowerCase(),
    city: text(formData, "city", 80),
    service: text(formData, "service", 80),
    message: text(formData, "message", 4000),
  };
  const consent = formData.get("consent") === "on";
  const echo = { ...values, consent: consent ? "on" : "" };

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Indiquez votre nom.";
  if (!/^[+\d][\d\s.-]{8,}$/.test(values.phone)) errors.phone = "Indiquez un numéro de téléphone valide.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = "Adresse e-mail invalide.";
  if (values.city.length < 2) errors.city = "Indiquez votre commune.";
  if (values.message.length < 10) errors.message = "Décrivez votre besoin en quelques mots.";
  if (!consent) errors.consent = "Votre accord est nécessaire pour que nous puissions vous recontacter.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Merci de corriger les champs indiqués.", errors, values: echo };
  }

  const serviceName = services.find((s) => s.slug === values.service)?.name ?? "Autre / je ne sais pas";
  const body = [
    `Nouvelle demande depuis le site ${site.name}`,
    "",
    `Nom : ${values.name}`,
    `Téléphone : ${values.phone}`,
    `E-mail : ${values.email || "non renseigné"}`,
    `Commune : ${values.city}`,
    `Prestation : ${serviceName}`,
    "",
    values.message,
  ].join("\n");

  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? site.email;

  if (!apiKey || !sender) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Brevo non configuré, message non envoyé :\n" + body);
      return { status: "success" };
    }
    console.error("[contact] BREVO_API_KEY ou BREVO_SENDER_EMAIL manquant");
    return {
      status: "error",
      message: `L'envoi est momentanément indisponible. Appelez-nous au ${site.phone}.`,
      values: echo,
    };
  }

  try {
    const res = await fetch(BREVO_EMAIL_URL, {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        sender: { email: sender, name: process.env.BREVO_SENDER_NAME ?? site.name },
        to: [{ email: recipient, name: site.name }],
        ...(values.email && { replyTo: { email: values.email, name: values.name } }),
        subject: `[Site] ${serviceName} – ${values.name} (${values.city})`,
        textContent: body,
      }),
    });
    if (!res.ok) throw new Error(`Brevo ${res.status}: ${(await res.text()).slice(0, 300)}`);
  } catch (error) {
    console.error("[contact] échec de l'envoi", error);
    return {
      status: "error",
      message: `Votre message n'a pas pu être envoyé. Réessayez ou appelez-nous au ${site.phone}.`,
      values: echo,
    };
  }

  return { status: "success" };
}
