import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_LOCATION_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Cyverix Solutions handles information when you browse this site or use our contact form.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-background pt-32 pb-24 px-6 md:px-12">
      <Navbar />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-syne font-bold mb-4 tracking-tighter">
          Privacy <span className="text-gradient">policy</span>
        </h1>
        <p className="text-text-secondary text-sm mb-10">
          Last updated: March 2026. This page describes how we treat information for this marketing site and our contact form. If something here
          does not match a signed contract you have with us, the contract wins.
        </p>

        <div className="space-y-10 text-text-secondary leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">What this site does</h2>
            <p>
              Cyverix Solutions operates this website to tell you about our services, show case studies and project work, and give you a way to
              reach us. We do not run a customer login area on this public site. Anything you submit goes through the contact form or the email
              and phone details we list.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-text-primary">Contact form.</strong> If you fill out the form, we receive your name, email, the service
                topic you pick, and your message. We use this only to reply and to follow up about your project if you ask us to.
              </li>
              <li>
                <strong className="text-text-primary">Email or phone.</strong> If you email us or message the WhatsApp number we publish, we keep
                what you send in normal business inboxes and chat history so we can respond.
              </li>
              <li>
                <strong className="text-text-primary">Technical data.</strong> Like most sites, hosting and analytics tools may log basic data such
                as your IP address, browser type, rough location, and pages viewed. We use that to keep the site secure and to understand traffic
                in aggregate, not to sell lists of individuals.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">How we use information</h2>
            <p>We use what you share to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Answer questions and talk about possible work</li>
              <li>Operate and protect the website</li>
              <li>Improve content and performance based on aggregated usage</li>
            </ul>
            <p className="mt-3">
              We do not use your contact details to send unrelated marketing unless you clearly opt in, and we do not sell your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">Who we share it with</h2>
            <p>
              We may use trusted providers to host the site, send email, or run analytics. They only process data to provide those services to us.
              We may also share information if the law requires it or to protect our rights and users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">Cookies</h2>
            <p>
              We may use cookies or similar technologies for basic site function, preferences, or analytics. You can control cookies through your
              browser settings. If we add a separate cookie banner in the future, we will link it from here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">Retention</h2>
            <p>
              We keep contact messages long enough to manage our conversation and any project that comes from it, then on a normal business
              schedule unless we need to keep something longer for legal or accounting reasons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">Your choices</h2>
            <p>
              You can ask to see, correct, or delete personal data we hold from this site or initial contact, where the law applies. Email us at{" "}
              <a href="mailto:hello@cyverix.com" className="text-primary font-semibold hover:underline">
                hello@cyverix.com
              </a>
              . We are based in {SITE_LOCATION_DISPLAY}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">Children</h2>
            <p>This site is aimed at businesses and adults looking for software services. It is not directed at children.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">Changes</h2>
            <p>We may update this page when our practices or the site changes. The date at the top will move when we do.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-3">Contact</h2>
            <p>
              Questions about privacy:{" "}
              <a href="mailto:hello@cyverix.com" className="text-primary font-semibold hover:underline">
                hello@cyverix.com
              </a>
            </p>
            <p className="mt-4">
              <Link href="/" className="text-primary font-semibold hover:underline">
                Back to home
              </Link>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
