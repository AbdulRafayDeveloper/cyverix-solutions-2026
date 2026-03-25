import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, SaaS, mobile and desktop apps, automation, cloud, design, and AI. Clear service list and how to reach us.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
