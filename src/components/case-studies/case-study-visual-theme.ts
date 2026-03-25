export type CaseStudyVisualTheme =
  | "ai-saas"
  | "dashboard"
  | "ecommerce"
  | "healthcare"
  | "fintech"
  | "marketplace"
  | "logistics"
  | "media"
  | "education"
  | "enterprise"
  | "creative-mobile"
  | "default";

/** Deterministic theme from project context — drives layout + iconography inside the SVG. */
export function getCaseStudyVisualTheme(
  study: Pick<import("@/data/case-studies").CaseStudy, "id" | "category" | "industry" | "title" | "visualTheme">
): CaseStudyVisualTheme {
  if (study.visualTheme) return study.visualTheme;

  const blob = `${study.id} ${study.category} ${study.industry} ${study.title}`.toLowerCase();

  if (/(health|medical|wellness|clinical|hospital|patient)/.test(blob)) return "healthcare";
  if (/(fintech|finance|payment|stripe|paypal|reward|referral|mlm|ledger|payout)/.test(blob)) return "fintech";
  if (/(ecommerce|e-commerce|retail|store|shop|commerce|appliance|electronics)/.test(blob)) return "ecommerce";
  if (/(logistics|shipping|carrier|freight|pack|warehouse)/.test(blob)) return "logistics";
  if (/(marketplace|travel|hospitality|rental|prop|property|booking|host)/.test(blob)) return "marketplace";
  if (/(media|subscription|photo|video|gallery|traffic|broadcast)/.test(blob)) return "media";
  if (/(edtech|education|academic|research|tutor|university|scholar)/.test(blob)) return "education";
  if (/(erp|enterprise|operations|hr\b|crm|inventory|payroll)/.test(blob)) return "enterprise";
  if (/(ai|llm|saas|marTech|martech|content automation|detext|voice|dubbing|transform|creative suite|omnichannel)/.test(blob)) return "ai-saas";
  if (/(webrtc|realtime|socket|signaling|comms)/.test(blob)) return "dashboard";
  if (/(seo|search|keyword|internal tool)/.test(blob)) return "dashboard";
  if (/(non-profit|community|organization|faith|islamic)/.test(blob)) return "education";
  if (/(mobile|app ui|game|pass|prestige|woodworking|brand|craft|furniture)/.test(blob)) return "creative-mobile";
  if (/(pdf|document|devtools|fastapi)/.test(blob)) return "dashboard";

  return "default";
}

/** Stable HSL accents per project id — stays on-brand (cyan / violet family). */
export function getCaseStudyPalette(id: string): {
  primary: string;
  secondary: string;
  glow: string;
  surface: string;
  deep: string;
} {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const u = Math.abs(h);
  const hue1 = 155 + (u % 28); /* ~155–182: teal–cyan */
  const hue2 = 265 + ((u >> 3) % 22); /* purple range */
  const sat = 62 + (u % 12);
  const light = 48 + (u % 8);

  return {
    primary: `hsl(${hue1} ${sat}% ${light}%)`,
    secondary: `hsl(${hue2} ${Math.min(72, sat + 6)}% ${light - 4}%)`,
    glow: `hsl(${hue1} ${sat}% ${light + 18}% / 0.35)`,
    surface: "hsl(230 14% 9%)",
    deep: "hsl(235 18% 6%)",
  };
}
