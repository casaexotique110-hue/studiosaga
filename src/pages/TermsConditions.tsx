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
                <div className="space-y-2">
                  <h1 className="font-serif text-3xl text-foreground font-normal">Terms & Conditions</h1>
                  <p className="text-sm text-muted-foreground/80"><strong>Effective Date:</strong> [Insert Date]</p>
                </div>

                <p className="text-lg leading-relaxed text-foreground/80">
                  Welcome to <strong className="text-foreground font-semibold">Studia Saga</strong>. These Terms & Conditions govern your use of our website, consultations, and services. By accessing our website or engaging with us, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with these terms, please refrain from using our website or services.
                </p>

                <hr className="border-border/60 my-8" />

                {/* Section 1 */}
                <div id="about" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">1. About Studia Saga</h2>
                  <p>
                    Studia Saga is an interior design and turnkey solutions studio offering thoughtfully designed residential and commercial interiors, modular kitchens, wardrobes, furniture, renovation, space planning, styling, project execution, and related design services.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="acceptance" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">2. Acceptance of Terms</h2>
                  <p>
                    By using this website, submitting an enquiry, or availing any of our services, you acknowledge that you have read, understood, and accepted these Terms & Conditions.
                  </p>
                </div>

                {/* Section 3 */}
                <div id="scope-of-services" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">3. Scope of Services</h2>
                  <p>Our services may include, but are not limited to:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Interior Design Consultation</li>
                    <li>Space Planning</li>
                    <li>Modular Kitchen Design</li>
                    <li>Wardrobe Design</li>
                    <li>Turnkey Interior Solutions</li>
                    <li>Furniture & Décor Selection</li>
                    <li>Renovation Services</li>
                    <li>Material Selection</li>
                    <li>Site Supervision</li>
                    <li>Project Management</li>
                  </ul>
                  <p>
                    The final scope of work will be detailed in the quotation, proposal, or agreement shared with the client.
                  </p>
                </div>

                {/* Section 4 */}
                <div id="consultations" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">4. Consultations</h2>
                  <p>
                    Consultations may be conducted online, at our studio, or at the project site. Any consultation fees, if applicable, will be communicated before the appointment.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="quotations-pricing" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">5. Quotations & Pricing</h2>
                  <p>
                    All quotations are prepared based on the information available at the time of estimation. Prices may change due to:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Design revisions</li>
                    <li>Material upgrades</li>
                    <li>Changes in project scope</li>
                    <li>Site conditions</li>
                    <li>Vendor pricing fluctuations</li>
                    <li>Client-requested modifications</li>
                  </ul>
                  <p>
                    A revised quotation may be issued whenever necessary.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="payments" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">6. Payments</h2>
                  <p>
                    Project work will commence only after the agreed advance payment has been received. The remaining payments shall be made according to the payment schedule mentioned in the project agreement.
                  </p>
                  <p>
                    Delayed payments may result in work being paused and may affect the committed project timeline. Applicable taxes will be charged as per prevailing laws.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="design-approval" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">7. Design Approval</h2>
                  <p>
                    Clients are responsible for reviewing and approving all drawings, layouts, finishes, materials, colors, and furniture designs before execution. Any changes requested after approval may result in additional charges and revised timelines.
                  </p>
                </div>

                {/* Section 8 */}
                <div id="project-timelines" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">8. Project Timelines</h2>
                  <p>
                    Project timelines are estimates based on the approved scope of work. Delays may occur due to:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Material availability</li>
                    <li>Vendor or supplier delays</li>
                    <li>Site readiness</li>
                    <li>Delayed client approvals</li>
                    <li>Changes requested during execution</li>
                    <li>Payment delays</li>
                    <li>Circumstances beyond our reasonable control</li>
                  </ul>
                  <p>
                    Studia Saga shall not be held liable for delays arising from these factors.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="site-conditions" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">9. Site Conditions</h2>
                  <p>
                    Clients are responsible for ensuring that the project site is accessible and ready for execution. Any delays caused by civil work, third-party contractors, permissions, or restricted site access may impact project schedules.
                  </p>
                </div>

                {/* Section 10 */}
                <div id="third-party-products" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">10. Third-Party Products</h2>
                  <p>
                    Certain products, appliances, hardware, lighting, accessories, or materials may be supplied by third-party manufacturers. Manufacturer warranties shall apply directly to such products.
                  </p>
                  <p>
                    Studia Saga is not responsible for manufacturing defects covered under the manufacturer's warranty.
                  </p>
                </div>

                {/* Section 11 */}
                <div id="intellectual-property" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">11. Intellectual Property</h2>
                  <p>
                    All concepts, layouts, drawings, renders, presentations, visual designs, graphics, website content, branding elements, and other creative materials produced by Studia Saga remain our intellectual property unless otherwise agreed in writing. They may not be copied, reproduced, distributed, modified, or used without prior written permission.
                  </p>
                </div>

                {/* Section 12 */}
                <div id="ai-content" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">12. AI-Generated Content & Visuals</h2>
                  <p>
                    To enhance the presentation of design concepts and improve the user experience, this website may feature images, illustrations, renderings, mood boards, visual concepts, and written content that are created or enhanced using Artificial Intelligence (AI).
                  </p>
                  <p>
                    These materials are provided for inspiration, conceptual representation, and marketing purposes only. Actual designs, layouts, materials, finishes, colours, furniture, dimensions, and completed projects may vary based on site conditions, client requirements, material availability, technical feasibility, and final approvals.
                  </p>
                </div>

                {/* Section 13 */}
                <div id="website-usage" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">13. Website Usage</h2>
                  <p>By using this website, you agree not to:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Attempt unauthorized access to our systems</li>
                    <li>Upload malicious software or harmful code</li>
                    <li>Copy, reproduce, or misuse website content</li>
                    <li>Use the website for unlawful purposes</li>
                    <li>Interfere with the website's functionality or security</li>
                  </ul>
                </div>

                {/* Section 14 */}
                <div id="portfolio-photography" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">14. Portfolio & Project Photography</h2>
                  <p>
                    Unless otherwise agreed in writing, Studia Saga reserves the right to photograph completed projects and use project images for portfolio, website, social media, marketing materials, digital advertising, design awards and publications.
                  </p>
                  <p>
                    Client identities and confidential information will not be disclosed without prior consent unless required by law.
                  </p>
                </div>

                {/* Section 15 */}
                <div id="liability" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">15. Limitation of Liability</h2>
                  <p>
                    Studia Saga shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of this website or our services.
                  </p>
                  <p>
                    Our maximum liability, if any, shall be limited to the amount paid by the client for the specific services related to the claim.
                  </p>
                </div>

                {/* Section 16 */}
                <div id="privacy" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">16. Privacy</h2>
                  <p>
                    Your use of this website is also governed by our Privacy Policy. By using our website, you consent to the collection and use of your information as described in our Privacy Policy.
                  </p>
                </div>

                {/* Section 17 */}
                <div id="force-majeure" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">17. Force Majeure</h2>
                  <p>
                    Studia Saga shall not be responsible for delays or failure to perform obligations due to events beyond our reasonable control, including natural disasters, government restrictions, pandemics, labour disputes, supply chain disruptions, or other unforeseen circumstances.
                  </p>
                </div>

                {/* Section 18 */}
                <div id="changes" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">18. Changes to These Terms</h2>
                  <p>
                    We reserve the right to modify or update these Terms & Conditions at any time without prior notice. The latest version published on this website shall supersede all previous versions.
                  </p>
                </div>

                {/* Section 19 */}
                <div id="governing-law" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">19. Governing Law</h2>
                  <p>
                    These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts located in Gurugram, Haryana.
                  </p>
                </div>

                {/* Section 20 */}
                <div id="contact" className="scroll-mt-32 space-y-6">
                  <h2 className="font-serif text-2xl text-foreground font-normal">20. Contact Us</h2>
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
                    <p className="text-xs text-muted-foreground pt-2 border-t border-border/20 font-serif">
                      <strong>Business Hours:</strong> Monday – Saturday | 09:00 AM – 05:00 PM
                    </p>
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
