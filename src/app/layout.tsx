import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { AppProviders } from "@/components/layout/AppProviders";
import { SITE_LOCATION_DISPLAY, SITE_URL } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cyverix Solutions | Software and AI development",
    template: "%s | Cyverix Solutions",
  },
  description:
    `Cyverix Solutions builds web apps, SaaS, and production-ready AI for teams worldwide: LLM integrations, automation, and intelligent features. Based in ${SITE_LOCATION_DISPLAY}. Founded in 2023.`,
  keywords: [
    "Cyverix Solutions",
    "Software House Faisalabad",
    "Faisalabad Punjab Pakistan",
    "AI Solutions Pakistan",
    "SaaS Development",
    "Mobile App Development",
  ],
  authors: [{ name: "Cyverix Solutions" }],
  robots: "index, follow",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Cyverix Solutions | Software and AI development",
    description: `Web apps, SaaS, and production AI from ${SITE_LOCATION_DISPLAY}. LLM integrations, automation, and software you can run in production.`,
    url: SITE_URL,
    siteName: "Cyverix Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cyverix Solutions logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyverix Solutions | Software and AI development",
    description: `Web apps, SaaS, and AI from Faisalabad, Punjab. Practical builds for real products.`,
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/cyverix-logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/cyverix-logo.svg" }],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cyverix Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/cyverix-logo.svg`,
  description:
    "Software and AI studio building web apps, SaaS, and production-ready AI for teams worldwide: LLM integrations, automation, and intelligent products.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faisalabad",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.linkedin.com/company/cyverix-solutions",
    "https://facebook.com/cyverix",
    "https://www.instagram.com/cyverix_solutions/?hl=en",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-text-primary selection:bg-primary/35 selection:text-text-primary font-inter" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <CustomCursor />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
