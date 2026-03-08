import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyverix Solutions | Advanced AI & Software Engineering House",
  description: "Cyverix Solutions is a premier Faisalabad-based software house specializing in SaaS, AI automation, and high-scale digital products. Founded in 2024, we build the future of tech.",
  keywords: ["Cyverix Solutions", "Software House Faisalabad", "AI Solutions Pakistan", "SaaS Development", "Mobile App Development Faisalabad", "Software House in Faisalabad"],
  authors: [{ name: "Cyverix Solutions" }],
  viewport: "width=device-width, initial-scale=1",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-text-primary selection:bg-primary selection:text-background">
        {children}
      </body>
    </html>
  );
}
