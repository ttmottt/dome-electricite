import type { StaticImageData } from "next/image";

import depannage from "@/public/images/electricien-depannage-tourcoing.webp";
import tableau from "@/public/images/tableau-electrique-mise-aux-normes.webp";
import renovation from "@/public/images/renovation-electrique-metropole-lilloise.webp";
import borne from "@/public/images/borne-recharge-vehicule-electrique-tourcoing.webp";
import borneMaison from "@/public/images/borne-recharge-maison-individuelle.webp";
import eclairage from "@/public/images/eclairage-led-domotique-maison.webp";
import intervention from "@/public/images/electricien-intervention-lille.webp";
import neuf from "@/public/images/installation-electrique-neuve.webp";

export type Photo = { src: StaticImageData; alt: string; credit: string };

// Photos sous licence Unsplash (usage commercial libre, attribution facultative).
export const photos = {
  depannage: {
    src: depannage,
    alt: "Électricien testant un tableau électrique au multimètre lors d'un dépannage à Tourcoing",
    credit: "Toolmash Expo / Unsplash",
  },
  tableau: {
    src: tableau,
    alt: "Tableau électrique neuf avec disjoncteurs et interrupteurs différentiels conformes NF C 15-100",
    credit: "Mark Kats / Unsplash",
  },
  renovation: {
    src: renovation,
    alt: "Électricien préparant un câble pour une rénovation électrique dans la métropole lilloise",
    credit: "Jimmy Nilsson Masth / Unsplash",
  },
  borne: {
    src: borne,
    alt: "Borne de recharge pour véhicule électrique installée sur un mur en briques à Tourcoing",
    credit: "dcbel / Unsplash",
  },
  borneMaison: {
    src: borneMaison,
    alt: "Borne de recharge murale installée à l'extérieur d'une maison individuelle",
    credit: "dcbel / Unsplash",
  },
  eclairage: {
    src: eclairage,
    alt: "Salon moderne avec éclairage LED encastré et lampadaire",
    credit: "Prydumano Design / Unsplash",
  },
  intervention: {
    src: intervention,
    alt: "Électricien équipé d'un casque intervenant sur une installation électrique à Lille",
    credit: "Emmanuel Ikwuegbu / Unsplash",
  },
  neuf: {
    src: neuf,
    alt: "Armoire électrique neuve câblée avec disjoncteurs et borniers",
    credit: "Markus Spiske / Unsplash",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
