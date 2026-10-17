import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCallBar } from "@/components/MobileCallBar";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Électricien Tourcoing – ${site.name} | Métropole lilloise`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  keywords: [
    "électricien Tourcoing",
    "électricien Roubaix",
    "électricien Lille",
    "électricien métropole lilloise",
    "dépannage électrique Tourcoing",
    "mise aux normes électrique",
    "tableau électrique",
    "prise renforcée Green'Up",
    "prise recharge voiture électrique",
    "rénovation électrique",
  ],
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: { type: "website", locale: "fr_FR", siteName: site.name },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  other: {
    "geo.region": "FR-59",
    "geo.placename": "Tourcoing",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#16130f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geist.variable} ${barlowCondensed.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
