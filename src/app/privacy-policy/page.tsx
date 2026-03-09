import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-background pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-syne font-bold mb-12 tracking-tighter">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        
        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              participate in any interactive features of the services, fill out a form, request 
              customer support, or otherwise communicate with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              to develop new ones, and to protect Cyverix Solutions and our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. Sharing of Information</h2>
            <p>
              We will not share your personal information with third parties except as described 
              in this Privacy Policy or at the time of collection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Your Choices</h2>
            <p>
              You may update, correct, or delete your information at any time by logging into 
              your online account or reaching out to us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@cyverix.com.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
