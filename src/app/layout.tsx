import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { AppProviders } from "@/components/layout/AppProviders";
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
  metadataBase: new URL("https://cyverix.com"),
  title: {
    default: "Cyverix Solutions | Software and AI development",
    template: "%s | Cyverix Solutions",
  },
  description:
    "Cyverix Solutions builds web apps, SaaS, and AI features for teams worldwide. Based in Faisalabad, Pakistan. Founded in 2023.",
  keywords: ["Cyverix Solutions", "Software House Faisalabad", "AI Solutions Pakistan", "SaaS Development", "Mobile App Development Faisalabad", "Software House in Faisalabad"],
  authors: [{ name: "Cyverix Solutions" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://cyverix.com",
  },
  openGraph: {
    title: "Cyverix Solutions | Software and AI development",
    description: "Web apps, SaaS, and AI work from Faisalabad, Pakistan. Clear delivery for teams that need software they can run in production.",
    url: "https://cyverix.com",
    siteName: "Cyverix Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cyverix Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyverix Solutions | Software and AI development",
    description: "Web apps, SaaS, and AI from Faisalabad. Practical builds for real products.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32" },
      { url: "/logo.png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-text-primary selection:bg-primary/35 selection:text-text-primary font-inter" suppressHydrationWarning>
        <CustomCursor />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
