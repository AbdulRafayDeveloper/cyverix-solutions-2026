/** Canonical public URLs and contact details used across the site and metadata. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://cyverix-solutions.vercel.app";

export const SITE_PHONE_DISPLAY = "+92 306 0815246";

/** Digits only (for wa.me and tel links) */
export const SITE_PHONE_E164 = SITE_PHONE_DISPLAY.replace(/\D/g, "");

export const SITE_WHATSAPP_URL = `https://wa.me/${SITE_PHONE_E164}`;

/** E.164 with + for tel: links */
export const SITE_PHONE_TEL = `+${SITE_PHONE_E164}`;

export const SITE_LOCATION_DISPLAY = "Faisalabad, Punjab, Pakistan";
