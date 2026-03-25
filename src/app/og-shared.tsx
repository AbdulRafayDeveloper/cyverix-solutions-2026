import { ImageResponse } from "next/og";

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00FFB2"/><stop offset="55%" stop-color="#00C8FF"/><stop offset="100%" stop-color="#7B5EA7"/></linearGradient></defs><rect width="120" height="120" rx="28" fill="#0A0A0F"/><path d="M60 18 L88 34 V76 L60 92 L32 76 V34 Z" stroke="url(#g)" stroke-width="2.25" stroke-linejoin="round" fill="rgba(0,255,178,0.06)"/><path d="M60 38 C48 38 38 48 38 60 C38 72 48 82 60 82 C68 82 75 78 79 71" stroke="url(#g)" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="79" cy="52" r="4" fill="#00FFB2"/></svg>`;

export function createCyverixOgImageResponse() {
  const logoSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(LOGO_SVG)}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 45%, #0A0A0F 100%)",
          padding: 72,
          gap: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 220,
            height: 220,
            borderRadius: 48,
            background: "rgba(0,255,178,0.08)",
            border: "2px solid rgba(0,255,178,0.25)",
            boxShadow: "0 0 80px rgba(0,255,178,0.15)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={180} height={180} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#F0F0FF",
              lineHeight: 1.05,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Cyverix Solutions
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#8888AA",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            Web apps, SaaS, and AI from Faisalabad, Punjab, Pakistan. Clear delivery for real products.
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 22,
              color: "#00FFB2",
              fontWeight: 700,
              fontFamily: "ui-monospace, monospace",
              letterSpacing: 3,
            }}
          >
            Software, AI, cloud
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
