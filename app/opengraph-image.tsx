import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name} – électricien à Tourcoing et dans la métropole lilloise`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/logo-dome-electricite.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0a0a0a", color: "#fcf3e2", padding: 72, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -120,
            width: 720,
            height: 720,
            borderRadius: 9999,
            border: "3px solid rgba(241,158,18,0.5)",
            background: "radial-gradient(circle, rgba(241,158,18,0.22), rgba(241,158,18,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ display: "flex", fontSize: 28, color: "#f19e12", letterSpacing: 4, textTransform: "uppercase" }}>
            Artisan électricien depuis {site.foundingYear}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Électricien à Tourcoing</div>
            <div style={{ fontSize: 44, marginTop: 16, color: "rgba(252,243,226,0.8)" }}>et dans la métropole lilloise</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24 }}>
            {["Dépannage", "Rénovation", "Mise aux normes"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", flexShrink: 0, padding: "12px 24px", borderRadius: 999, background: t === "Dépannage" ? "#f19e12" : "rgba(252,243,226,0.1)", color: t === "Dépannage" ? "#0a0a0a" : "#fcf3e2" }}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", right: 72, top: 160, width: 310, height: 310, borderRadius: 9999, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={logoSrc} width={260} height={227} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
