"use client";

import React, { memo, useId } from "react";
import type { CaseStudy } from "@/data/case-studies";
import { getCaseStudyPalette, getCaseStudyVisualTheme, type CaseStudyVisualTheme } from "./case-study-visual-theme";

function ThemeContent({
  theme,
  palette,
  orbId,
}: {
  theme: CaseStudyVisualTheme;
  palette: ReturnType<typeof getCaseStudyPalette>;
  orbId: string;
}) {
  const p = palette.primary;
  const s = palette.secondary;

  switch (theme) {
    case "ai-saas":
      return (
        <>
          <circle cx="320" cy="175" r="52" fill={`url(#${orbId})`} opacity={0.92} />
          <circle cx="320" cy="175" r="70" fill="none" stroke={p} strokeWidth="1" opacity={0.25} />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x2 = 320 + Math.cos(rad) * 95;
            const y2 = 175 + Math.sin(rad) * 95;
            return <line key={i} x1="320" y1="175" x2={x2} y2={y2} stroke={p} strokeWidth="1.5" opacity={0.35} />;
          })}
          <rect x="420" y="95" width="160" height="160" rx="10" fill={palette.surface} stroke={p} strokeOpacity={0.35} strokeWidth="1" />
          <rect x="435" y="115" width="120" height="8" rx="2" fill={p} opacity={0.4} />
          <rect x="435" y="132" width="90" height="6" rx="2" fill={s} opacity={0.25} />
          <rect x="435" y="148" width="110" height="6" rx="2" fill={s} opacity={0.18} />
          <rect x="60" y="95" width="160" height="160" rx="10" fill={palette.surface} stroke={s} strokeOpacity={0.3} strokeWidth="1" />
          <path
            d="M85 200 L115 165 L145 190 L175 140 L205 200"
            fill="none"
            stroke={p}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.65}
          />
        </>
      );
    case "fintech":
      return (
        <>
          <rect x="70" y="110" width="500" height="140" rx="12" fill={palette.surface} stroke={p} strokeOpacity={0.35} strokeWidth="1" />
          <path
            d="M100 210 L140 175 L185 195 L230 150 L275 165 L320 125 L365 145 L410 115 L455 135 L500 105 L540 118"
            fill="none"
            stroke={p}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.75}
          />
          {[100, 180, 260, 340, 420].map((x, i) => (
            <rect key={i} x={x + 20} y={225} width="36" height={8 + (i % 3) * 6} rx="2" fill={s} opacity={0.35 + i * 0.05} />
          ))}
          <circle cx="520" cy="155" r="22" fill={p} opacity={0.2} />
        </>
      );
    case "healthcare":
      return (
        <>
          <rect x="180" y="100" width="280" height="170" rx="14" fill={palette.surface} stroke={p} strokeOpacity={0.4} strokeWidth="1" />
          <path d="M320 135 V205 M285 170 H355" stroke={p} strokeWidth="6" strokeLinecap="round" opacity={0.75} />
          <path d="M320 220 Q320 245 320 255" stroke={s} strokeWidth="2" fill="none" opacity={0.5} />
          <ellipse cx="320" cy="248" rx="80" ry="10" fill={palette.glow} opacity={0.4} />
          <rect x="210" y="118" width="80" height="10" rx="3" fill={p} opacity={0.35} />
          <rect x="350" y="118" width="90" height="10" rx="3" fill={s} opacity={0.25} />
        </>
      );
    case "ecommerce":
      return (
        <>
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${95 + (i % 2) * 200}, ${110 + Math.floor(i / 2) * 95})`}>
              <rect width="150" height="85" rx="8" fill={palette.surface} stroke={p} strokeOpacity={0.35} strokeWidth="1" />
              <rect x="12" y="12" width="126" height="38" rx="4" fill={p} opacity={0.15} />
              <rect x="12" y="58" width="70" height="8" rx="2" fill={s} opacity={0.35} />
              <rect x="12" y="70" width="50" height="8" rx="2" fill={p} opacity={0.25} />
            </g>
          ))}
        </>
      );
    case "marketplace":
      return (
        <>
          <rect x="70" y="115" width="220" height="150" rx="10" fill={palette.surface} stroke={p} strokeOpacity={0.35} />
          <rect x="350" y="115" width="220" height="150" rx="10" fill={palette.surface} stroke={s} strokeOpacity={0.3} />
          <path d="M300 125 V255" stroke={p} strokeWidth="1" strokeDasharray="4 6" opacity={0.35} />
          <circle cx="180" cy="175" r="28" fill={p} opacity={0.2} />
          <circle cx="460" cy="175" r="28" fill={s} opacity={0.2} />
          <rect x="120" y="210" width="120" height="12" rx="3" fill={p} opacity={0.4} />
          <rect x="400" y="210" width="120" height="12" rx="3" fill={s} opacity={0.35} />
        </>
      );
    case "logistics":
      return (
        <>
          <path
            d="M80 200 L180 155 L280 185 L380 140 L480 200 L560 175"
            fill="none"
            stroke={p}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.7}
          />
          <circle cx="180" cy="155" r="8" fill={s} opacity={0.8} />
          <circle cx="380" cy="140" r="8" fill={p} opacity={0.8} />
          <rect x="230" y="215" width="180" height="44" rx="8" fill={palette.surface} stroke={p} strokeOpacity={0.4} />
          <rect x="245" y="228" width="150" height="18" rx="3" fill={p} opacity={0.2} />
        </>
      );
    case "media":
      return (
        <>
          <rect x="160" y="95" width="320" height="180" rx="12" fill={palette.surface} stroke={p} strokeOpacity={0.35} />
          <rect x="175" y="110" width="90" height="60" rx="4" fill={p} opacity={0.2} />
          <rect x="275" y="110" width="90" height="60" rx="4" fill={s} opacity={0.15} />
          <rect x="375" y="110" width="90" height="60" rx="4" fill={p} opacity={0.12} />
          <polygon points="305,138 325,152 305,166" fill={p} opacity={0.7} />
          <rect x="175" y="185" width="290" height="8" rx="2" fill={s} opacity={0.25} />
          <rect x="175" y="200" width="220" height="8" rx="2" fill={p} opacity={0.15} />
        </>
      );
    case "education":
      return (
        <>
          <rect x="200" y="100" width="240" height="160" rx="12" fill={palette.surface} stroke={p} strokeOpacity={0.35} />
          <rect x="220" y="125" width="200" height="10" rx="2" fill={p} opacity={0.35} />
          <rect x="220" y="145" width="160" height="8" rx="2" fill={s} opacity={0.25} />
          <rect x="220" y="162" width="180" height="8" rx="2" fill={s} opacity={0.2} />
          <rect x="220" y="185" width="140" height="50" rx="6" fill={p} opacity={0.08} stroke={p} strokeOpacity={0.3} />
        </>
      );
    case "enterprise":
      return (
        <>
          {[0, 1, 2].flatMap((row) =>
            [0, 1, 2].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={100 + col * 150}
                y={110 + row * 55}
                width="130"
                height="42"
                rx="6"
                fill={palette.surface}
                stroke={col === 1 ? p : s}
                strokeOpacity={0.25}
                strokeWidth="1"
              />
            ))
          )}
          <rect x="250" y="95" width="140" height="14" rx="4" fill={p} opacity={0.35} />
        </>
      );
    case "creative-mobile":
      return (
        <>
          <rect x="250" y="88" width="140" height="220" rx="18" fill={palette.surface} stroke={p} strokeOpacity={0.45} strokeWidth="2" />
          <rect x="262" y="102" width="116" height="188" rx="10" fill={palette.deep} />
          <rect x="272" y="118" width="96" height="56" rx="6" fill={`url(#${orbId})`} opacity={0.88} />
          <rect x="272" y="188" width="72" height="8" rx="2" fill={p} opacity={0.35} />
          <rect x="272" y="204" width="56" height="8" rx="2" fill={s} opacity={0.25} />
          <circle cx="320" cy="268" r="10" stroke={p} strokeWidth="2" fill="none" opacity={0.4} />
        </>
      );
    case "dashboard":
    default:
      return (
        <>
          <rect x="70" y="120" width="500" height="130" rx="10" fill={palette.surface} stroke={p} strokeOpacity={0.3} strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <rect
              key={i}
              x={90 + i * 42}
              y={195}
              width="28"
              height={20 + (i % 5) * 8}
              rx="2"
              fill={i % 2 === 0 ? p : s}
              opacity={0.25 + (i % 3) * 0.08}
            />
          ))}
          <rect x="90" y="135" width="120" height="14" rx="3" fill={p} opacity={0.35} />
          <rect x="220" y="135" width="90" height="14" rx="3" fill={s} opacity={0.2} />
          <rect x="400" y="135" width="150" height="14" rx="3" fill={p} opacity={0.15} />
        </>
      );
  }
}

export const CaseStudyVisual = memo(function CaseStudyVisual({ study }: { study: CaseStudy }) {
  const reactId = useId().replace(/:/g, "");
  const theme = getCaseStudyVisualTheme(study);
  const palette = getCaseStudyPalette(study.id);

  const gradBg = `bg-${reactId}`;
  const gradOrb = `orb-${reactId}`;
  const gradFloor = `floor-${reactId}`;
  const filt = `sh-${reactId}`;
  const noise = `noise-${reactId}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[hsl(235_18%_6%)]">
      <svg
        className="h-full w-full"
        viewBox="0 0 640 400"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label={`${study.title}, ${study.industry}. Product preview.`}
        focusable="false"
      >
        <defs>
          <linearGradient id={gradBg} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.deep} />
            <stop offset="50%" stopColor={palette.surface} />
            <stop offset="100%" stopColor={palette.deep} />
          </linearGradient>
          <radialGradient id={gradOrb} cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor={palette.primary} stopOpacity="0.5" />
            <stop offset="100%" stopColor={palette.secondary} stopOpacity="0.08" />
          </radialGradient>
          <radialGradient id={gradFloor} cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor={palette.glow} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id={filt} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.45" />
          </filter>
          <pattern id={noise} width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.7" fill="#fff" />
            <circle cx="60" cy="55" r="0.5" fill="#fff" />
            <circle cx="40" cy="70" r="0.4" fill="#fff" />
          </pattern>
        </defs>

        <rect width="640" height="400" fill={`url(#${gradBg})`} />
        <ellipse cx="320" cy="420" rx="280" ry="120" fill={`url(#${gradFloor})`} opacity={0.85} />

        <g filter={`url(#${filt})`}>
          <rect x="40" y="48" width="560" height="300" rx="14" fill={palette.surface} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <rect x="40" y="48" width="560" height="36" rx="14" fill="rgba(255,255,255,0.04)" />
          <circle cx="58" cy="66" r="5" fill="#ff5f57" opacity={0.85} />
          <circle cx="78" cy="66" r="5" fill="#febc2e" opacity={0.85} />
          <circle cx="98" cy="66" r="5" fill="#28c840" opacity={0.85} />
        </g>

        <g transform="translate(0, 12)">
          <ThemeContent theme={theme} palette={palette} orbId={gradOrb} />
        </g>

        <rect width="640" height="400" fill={`url(#${noise})`} opacity={0.045} style={{ mixBlendMode: "overlay" }} />
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-background/25" />
    </div>
  );
});
