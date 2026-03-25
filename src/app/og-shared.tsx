import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

/** Same mark as header; filters stripped so Satori/OG rasterizes reliably. */
const FALLBACK_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"><defs><linearGradient id="cyvGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00FFB2"/><stop offset="55%" stop-color="#00C8FF"/><stop offset="100%" stop-color="#7B5EA7"/></linearGradient><linearGradient id="cyvGlow" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#00FFB2" stop-opacity="0.35"/><stop offset="100%" stop-color="#00FFB2" stop-opacity="0"/></linearGradient></defs><rect width="120" height="120" rx="28" fill="#0A0A0F"/><rect width="120" height="120" rx="28" fill="url(#cyvGlow)" opacity="0.9"/><path d="M60 18 L88 34 V76 L60 92 L32 76 V34 Z" stroke="url(#cyvGrad)" stroke-width="2.25" stroke-linejoin="round" fill="rgba(0,255,178,0.06)"/><path d="M60 38 C48 38 38 48 38 60 C38 72 48 82 60 82 C68 82 75 78 79 71" stroke="url(#cyvGrad)" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="79" cy="52" r="4" fill="#00FFB2"/><circle cx="79" cy="52" r="7" stroke="#7B5EA7" stroke-width="1" opacity="0.8" fill="none"/></svg>`;

function prepareLogoSvgForOg(raw: string): string {
  return raw
    .replace(/\sfilter="url\(#cyvSoft\)"/, "")
    .replace(/<filter id="cyvSoft"[\s\S]*?<\/filter>\s*/g, "");
}

function getLogoDataUri(): string {
  try {
    const raw = readFileSync(join(process.cwd(), "public", "cyverix-logo.svg"), "utf-8");
    const svg = prepareLogoSvgForOg(raw);
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  } catch {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(FALLBACK_LOGO_SVG)}`;
  }
}

export function createCyverixOgImageResponse() {
  const logoSrc = getLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 45%, #0A0A0F 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 420,
            height: 420,
            borderRadius: 96,
            background: "rgba(0,255,178,0.06)",
            border: "2px solid rgba(0,255,178,0.22)",
            boxShadow: "0 0 100px rgba(0,255,178,0.12)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={340} height={340} alt="" />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
