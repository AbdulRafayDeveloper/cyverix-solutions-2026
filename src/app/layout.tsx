import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
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
  title: "Cyverix Solutions | Advanced AI & Software Engineering House",
  description: "Cyverix Solutions is a premier Faisalabad-based software house specializing in SaaS, AI automation, and high-scale digital products. Founded in 2023, we build the future of tech.",
  keywords: ["Cyverix Solutions", "Software House Faisalabad", "AI Solutions Pakistan", "SaaS Development", "Mobile App Development Faisalabad", "Software House in Faisalabad"],
  authors: [{ name: "Cyverix Solutions" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://cyverix.com",
  },
  openGraph: {
    title: "Cyverix Solutions | Advanced AI & Software Engineering",
    description: "Building world-class digital products with AI and precision engineering. Based in Faisalabad, PK.",
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
    title: "Cyverix Solutions | Advanced AI & Software Engineering",
    description: "Building world-class digital products with AI and precision engineering.",
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
    <html lang="en" className={`${syne.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-background text-text-primary selection:bg-primary selection:text-background font-inter">
        {children}
      </body>
    </html>
  );
}
