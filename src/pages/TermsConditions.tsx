import { motion } from "framer-motion";
import { Mail, Phone, Globe, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function TermsConditions() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "services", title: "2. Services" },
    { id: "responsibilities", title: "3. User Responsibilities" },
    { id: "consultation", title: "4. Consultation & Estimates" },
    { id: "ip", title: "5. Intellectual Property" },
    { id: "user-content", title: "6. User Submitted Content" },
    { id: "payments", title: "7. Payments" },
    { id: "liability", title: "8. Limitation of Liability" },
    { id: "third-party", title: "9. Third-Party Links" },
    { id: "privacy", title: "10. Privacy Link" },
    { id: "termination", title: "11. Termination" },
    { id: "changes", title: "12. Changes to Terms" },
    { id: "governing-law", title: "13. Governing Law" },
    { id: "contact", title: "14. Contact Us" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // accounting for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO
        title="Terms & Conditions | Studia Saga - Premium Interior Designers"
        description="Review the terms and conditions for using Studia Saga website and our professional interior design services."
        canonical="https://www.studiasaga.com/terms-conditions"
      />
      <Header />

      {/* --- HERO BANNER SECTION --- */}
      <section className="relative w-full h-[40vh] min-h-[350px] lg:h-[50vh] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Architecture Interior Golden Light Dark Theme"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        <div className="relative z-10 container mx-auto px-6 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
              Studia Saga
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-white/60 text-xs md:text-sm tracking-wide uppercase font-light">
              Last Updated: July 2026
            </p>
            <div className="w-20 h-[1px] bg-luxury-gold mx-auto mt-6"></div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Sticky Outline Index */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32 bg-card border border-border/50 p-8 rounded-sm shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <FileText className="w-5 h-5 text-luxury-gold" />
                  <h3 className="font-serif text-lg text-foreground font-medium">Quick Navigation</h3>
                </div>
                <ul className="space-y-3 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="text-left text-sm font-light text-muted-foreground hover:text-luxury-gold transition-colors duration-300"
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right: Terms Document Content */}
            <article className="lg:col-span-8 space-y-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6"
              >
                <p className="text-lg leading-relaxed text-foreground/80">
                  Welcome to <strong className="text-foreground font-semibold">Studia Saga</strong>. By accessing or using our website, services, or communicating with us, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue the use of our website and services.
                </p>

                <hr className="border-border/60 my-8" />

                {/* Section 1 */}
                <div id="acceptance" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">1. Acceptance of Terms</h2>
                  <p>
                    By accessing this website, submitting an inquiry, booking a consultation, or using any of our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions and our Privacy Policy.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="services" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">2. Services</h2>
                  <p>
                    Studia Saga provides interior design, modular furniture solutions, home renovation consultation, space planning, and related design services. All services are subject to availability and may be modified or discontinued without prior notice.
                  </p>
                </div>

                {/* Section 3 */}
                <div id="responsibilities" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">3. User Responsibilities</h2>
                  <p>By using our website, you agree that:</p>
                  <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>The information provided by you is accurate and complete.</li>
                    <li>You will not misuse the website or attempt to disrupt its functionality.</li>
                    <li>You will not upload any unlawful, offensive, misleading, or copyrighted material without proper authorization.</li>
                    <li>You are responsible for maintaining the confidentiality of any information shared with us during the project.</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div id="consultation" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">4. Design Consultation & Estimates</h2>
                  <p>
                    Any quotation, estimate, pricing, or project timeline shared through our website or during consultation is indicative in nature and may change based on:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Site measurements</li>
                    <li>Material selection</li>
                    <li>Design revisions</li>
                    <li>Project scope</li>
                    <li>Market availability</li>
                    <li>Client requirements</li>
                  </ul>
                  <p>
                    Final pricing and timelines will be confirmed through a formal proposal or agreement.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="ip" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">5. Intellectual Property</h2>
                  <p>
                    All content available on this website, including but not limited to text, graphics, images, layouts, logos, icons, designs, videos, and other materials, is the intellectual property of Studia Saga unless otherwise stated.
                  </p>
                  <p>
                    No content may be copied, reproduced, modified, distributed, or used without prior written permission.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="user-content" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">6. User Submitted Content</h2>
                  <p>
                    By submitting floor plans, photographs, design references, project details, testimonials, or any other materials, you grant Studia Saga a non-exclusive, royalty-free license to use such content for:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Project execution</li>
                    <li>Customer communication</li>
                    <li>Portfolio display</li>
                    <li>Marketing campaigns</li>
                    <li>Website galleries</li>
                    <li>Social media promotions</li>
                  </ul>
                  <p>
                    Where applicable, sensitive information will be handled in accordance with our Privacy Policy.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="payments" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">7. Payments</h2>
                  <p>
                    Payment terms, milestones, cancellation charges, taxes, and applicable fees will be communicated separately through project proposals or service agreements.
                  </p>
                  <p>
                    Studia Saga reserves the right to suspend or discontinue services in case of delayed or incomplete payments.
                  </p>
                </div>

                {/* Section 8 */}
                <div id="liability" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">8. Limitation of Liability</h2>
                  <p>
                    While Studia Saga makes every effort to provide accurate information and high-quality services, we do not guarantee that the website will always be error-free or uninterrupted.
                  </p>
                  <p>
                    Studia Saga shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of this website or our services.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="third-party" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">9. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites for your convenience. Studia Saga does not control or endorse these external websites and is not responsible for their content, privacy practices, or services.
                  </p>
                </div>

                {/* Section 10 */}
                <div id="privacy" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">10. Privacy</h2>
                  <p>
                    Your use of this website is also governed by our Privacy Policy. By using our website, you consent to the collection and processing of your personal information as described in our Privacy Policy.
                  </p>
                </div>

                {/* Section 11 */}
                <div id="termination" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">11. Termination</h2>
                  <p>
                    Studia Saga reserves the right to suspend or terminate access to our website or services at any time if these Terms & Conditions are violated or if such action is necessary to protect our business interests.
                  </p>
                </div>

                {/* Section 12 */}
                <div id="changes" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">12. Changes to Terms</h2>
                  <p>
                    We may update these Terms & Conditions from time to time without prior notice. The updated version will be published on this page, and continued use of the website constitutes acceptance of the revised terms.
                  </p>
                </div>

                {/* Section 13 */}
                <div id="governing-law" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">13. Governing Law</h2>
                  <p>
                    These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising out of the use of this website or our services shall be subject to the jurisdiction of the competent courts in Gurugram, Haryana.
                  </p>
                </div>

                {/* Section 14 */}
                <div id="contact" className="scroll-mt-32 space-y-6">
                  <h2 className="font-serif text-2xl text-foreground font-normal">14. Contact Us</h2>
                  <p>
                    If you have any questions regarding these Terms & Conditions, please contact us:
                  </p>

                  <div className="bg-card p-6 border border-border/40 rounded-sm space-y-4">
                    <h3 className="font-serif text-lg text-foreground font-semibold">Studia Saga</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-luxury-gold" />
                        <a href="mailto:studiasagaa@gmail.com" className="text-sm hover:text-luxury-gold transition-colors font-serif">
                          studiasagaa@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-luxury-gold" />
                        <a href="tel:+919667733382" className="text-sm hover:text-luxury-gold transition-colors font-serif font-semibold">
                          +91 96677 33382
                        </a>
                      </div>
                      <div className="flex items-center gap-3 sm:col-span-2">
                        <Globe className="w-5 h-5 text-luxury-gold" />
                        <a href="http://www.studiasaga.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-luxury-gold transition-colors font-serif">
                          www.studiasaga.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </article>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
