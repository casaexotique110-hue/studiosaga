import { motion } from "framer-motion";
import { Mail, Phone, Globe, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  const sections = [
    { id: "scope", title: "1. Scope & Applicability" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "legal-basis", title: "3. Legal Basis for Processing" },
    { id: "purpose", title: "4. Purpose & Usage" },
    { id: "sharing", title: "5. Sharing & Disclosure" },
    { id: "children", title: "6. Children's Privacy" },
    { id: "security", title: "7. Data Security & Disclaimer" },
    { id: "cookies", title: "8. Cookies & Tracking" },
    { id: "changes", title: "9. Policy Changes" },
    { id: "contact", title: "10. Contact Information" },
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
        title="Privacy Policy | Studia Saga - Luxury Interior Design Gurgaon"
        description="Learn how Studia Saga collects, processes, and protects your personal data in compliance with the DPDP Act 2023."
        canonical="https://www.studiasaga.com/privacy-policy"
      />
      <Header />

      {/* --- HERO BANNER SECTION --- */}
      <section className="relative w-full h-[40vh] min-h-[350px] lg:h-[50vh] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Interior Living Space Dark Theme"
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
              Privacy Policy
            </h1>
            <div className="w-20 h-[1px] bg-luxury-gold mx-auto"></div>
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
                  <Shield className="w-5 h-5 text-luxury-gold" />
                  <h3 className="font-serif text-lg text-foreground font-medium">Quick Navigation</h3>
                </div>
                <ul className="space-y-4">
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

            {/* Right: Policy Document Content */}
            <article className="lg:col-span-8 space-y-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6"
              >
                <p className="text-lg leading-relaxed text-foreground/80">
                  <strong className="text-foreground font-semibold">Studia Saga</strong> (“Studia Saga,” “we,” “us,” or “our”) respects the privacy of all individuals and is committed to protecting the personal information collected through our website, communications, and services. This Privacy Policy explains how we collect, use, process, store, and safeguard your information in compliance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act).
                </p>
                <p className="text-base">
                  By accessing or using our website and services, you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please discontinue the use of our website and services.
                </p>

                <hr className="border-border/60 my-8" />

                {/* Section 1 */}
                <div id="scope" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">1. Scope and Applicability</h2>
                  <p>
                    This Privacy Policy applies to all users who access our website, submit inquiries, communicate with us, engage our services, or interact with Studia Saga through digital or offline channels.
                  </p>
                  <p>
                    By using our website or submitting your information, you consent to the collection and processing of your personal data for the purposes outlined in this Privacy Policy.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="collection" className="scroll-mt-32 space-y-6">
                  <h2 className="font-serif text-2xl text-foreground font-normal">2. Information We Collect</h2>
                  <p>We may collect the following categories of information:</p>

                  <div className="space-y-4 pl-4 border-l border-luxury-gold/30">
                    <div>
                      <h3 className="font-serif text-lg text-foreground font-normal mb-1">Personal Information</h3>
                      <p className="text-sm">Information that identifies you directly, including but not limited to:</p>
                      <ul className="list-disc list-inside pl-2 mt-2 text-sm space-y-1">
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Residential or Project Address</li>
                        <li>Any information voluntarily submitted through forms, consultations, inquiries, or service requests</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-foreground font-normal mb-1">Project & Design Information</h3>
                      <p className="text-sm">Details related to your interior design requirements, including:</p>
                      <ul className="list-disc list-inside pl-2 mt-2 text-sm space-y-1">
                        <li>Floor plans</li>
                        <li>Design preferences</li>
                        <li>Images or references shared by you</li>
                        <li>Project specifications</li>
                        <li>Budget preferences</li>
                        <li>Property dimensions and layouts</li>
                        <li>Feedback or communication records</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-foreground font-normal mb-1">Technical & Website Usage Data</h3>
                      <p className="text-sm">Information automatically collected through cookies and analytics tools, including:</p>
                      <ul className="list-disc list-inside pl-2 mt-2 text-sm space-y-1">
                        <li>IP Address</li>
                        <li>Browser Type</li>
                        <li>Device Information</li>
                        <li>Website Usage Patterns</li>
                        <li>Session Data</li>
                        <li>Cookies and Tracking Technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="legal-basis" className="scroll-mt-32 space-y-6">
                  <h2 className="font-serif text-2xl text-foreground font-normal">3. Legal Basis for Data Processing</h2>
                  <p>Studia Saga processes personal data on the following lawful grounds:</p>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-card p-5 border border-border/40 rounded-sm">
                      <h4 className="font-serif text-base text-foreground font-semibold mb-2">Consent</h4>
                      <p className="text-xs leading-relaxed">By using our website or submitting information, you expressly consent to our collection, storage, and use of your personal data as described in this Privacy Policy.</p>
                    </div>
                    <div className="bg-card p-5 border border-border/40 rounded-sm">
                      <h4 className="font-serif text-base text-foreground font-semibold mb-2">Contractual Necessity</h4>
                      <p className="text-xs leading-relaxed">We process data necessary to provide consultations, interior design services, modular solutions, project execution, or any services requested by you.</p>
                    </div>
                    <div className="bg-card p-5 border border-border/40 rounded-sm">
                      <h4 className="font-serif text-base text-foreground font-semibold mb-2">Legitimate Interests</h4>
                      <p className="text-xs leading-relaxed">We process information for marketing, customer support, security, branding, and improving overall customer service and portfolio representation.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="purpose" className="scroll-mt-32 space-y-6">
                  <h2 className="font-serif text-2xl text-foreground font-normal">4. Purpose of Data Collection and Usage</h2>
                  <p>Studia Saga collects and uses personal data for the following purposes:</p>

                  <ul className="space-y-4">
                    <li>
                      <strong className="text-foreground font-medium">Service Delivery & Project Execution:</strong> To respond to inquiries, conduct consultations, deliver interior design services, coordinate project execution, and provide customer support.
                    </li>
                    <li>
                      <strong className="text-foreground font-medium">Marketing & Promotional Activities:</strong> By sharing project images, designs, layouts, testimonials, or related materials, you grant us a non-exclusive, royalty-free, irrevocable license to use such content for portfolios, website galleries, social media promotions, and advertising campaigns.
                    </li>
                    <li>
                      <strong className="text-foreground font-medium">Communication & Updates:</strong> To send project updates, service information, promotional offers, marketing campaigns, and customer support communications.
                    </li>
                    <li>
                      <strong className="text-foreground font-medium">Legal & Regulatory Compliance:</strong> We may process and disclose your data where required to comply with legal obligations, government requests, or applicable laws and regulations.
                    </li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div id="sharing" className="scroll-mt-32 space-y-6">
                  <h2 className="font-serif text-2xl text-foreground font-normal">5. Sharing and Disclosure of Information</h2>
                  <p>Studia Saga may share personal information under the following circumstances:</p>

                  <ul className="space-y-4">
                    <li>
                      <strong className="text-foreground font-medium">Third-Party Service Providers:</strong> We engage trusted vendors, contractors, and partners for site visits, project execution, installation, and marketing support. They access information only to perform tasks on our behalf.
                    </li>
                    <li>
                      <strong className="text-foreground font-medium">Marketing & Portfolio Usage:</strong> Project-related content, images, and layout designs may be showcased on our website, social media, and portfolio promotions.
                    </li>
                    <li>
                      <strong className="text-foreground font-medium">Legal Requirements:</strong> We may disclose information if required by law or in legal proceedings to protect our rights, safety, or property.
                    </li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div id="children" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">6. Children’s Privacy</h2>
                  <p>
                    Studia Saga does not knowingly collect personal data from individuals under the age of 18 without verifiable parental or guardian consent. In compliance with the DPDP Act, we implement reasonable age-verification measures and require parental consent for processing minor's data. If we discover minor data collected without consent, we delete or restrict it immediately.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="security" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">7. Data Security & Disclaimer</h2>
                  <p>
                    We implement industry-standard security practices to safeguard personal information. However, while we strive to protect your data, no digital platform or transmission is completely secure.
                  </p>
                  <div className="bg-destructive/10 border-l-2 border-destructive p-4 my-4 rounded-sm text-sm text-foreground/80">
                    <strong className="text-destructive font-semibold">Disclaimer:</strong> Absolute security cannot be guaranteed. Studia Saga shall not be held liable for breaches, leaks, or unauthorized access caused by factors beyond our reasonable control, including cyberattacks, third-party breaches, or malicious activities.
                  </div>
                </div>

                {/* Section 8 */}
                <div id="cookies" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">8. Cookies & Tracking Technologies</h2>
                  <p>
                    Our website may use cookies and tracking technologies to improve performance, analyze user behavior, personalize user experience, and enhance marketing effectiveness. You can disable cookies through browser settings, though some features may be affected.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="changes" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl text-foreground font-normal">9. Changes to This Privacy Policy</h2>
                  <p>
                    Studia Saga reserves the right to update or modify this Privacy Policy at any time. Any significant changes will be updated on this page. Continued use of our website and services after modifications constitutes acceptance of the revised policy.
                  </p>
                </div>

                {/* Section 10 */}
                <div id="contact" className="scroll-mt-32 space-y-6">
                  <h2 className="font-serif text-2xl text-foreground font-normal">10. Contact Information</h2>
                  <p>
                    For any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us:
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex items-center gap-4 bg-card p-4 border border-border/40 rounded-sm">
                      <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 text-luxury-gold">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Email Us</p>
                        <a href="mailto:studiasagaa@gmail.com" className="text-sm font-semibold text-foreground hover:text-luxury-gold transition-colors font-serif">
                          studiasagaa@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-card p-4 border border-border/40 rounded-sm">
                      <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 text-luxury-gold">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Call Us</p>
                        <a href="tel:+91 9667733382" className="text-sm font-semibold text-foreground hover:text-luxury-gold transition-colors font-serif">
                          +91  96677 33382
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-card p-4 border border-border/40 rounded-sm sm:col-span-2">
                      <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 text-luxury-gold">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Website</p>
                        <a href="http://www.studiasaga.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground hover:text-luxury-gold transition-colors font-serif">
                          www.studiasaga.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-border/60 my-10" />

                {/* Disclaimer Textbox */}
                <div className="bg-luxury-beige/10 border border-luxury-gold/30 p-6 rounded-sm space-y-4">
                  <h3 className="font-serif text-lg text-foreground font-semibold">Information Sharing Disclaimer</h3>
                  <p className="text-sm leading-relaxed">
                    By submitting your information, project details, images, layouts, or design content to Studia Saga, you agree to our collection, storage, use, and sharing of such information with select third-party vendors, contractors, and partners for the purpose of service fulfillment, operational support, customer experience enhancement, and marketing activities.
                  </p>
                  <p className="text-sm leading-relaxed">
                    You further grant Studia Saga an unrestricted, irrevocable, royalty-free right to use any submitted content — including images, concepts, project visuals, layouts, and related materials — for portfolio presentations, website galleries, social media promotions, and advertising campaigns without additional approvals or compensation, as outlined in this Privacy Policy.
                  </p>
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
