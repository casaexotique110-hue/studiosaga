"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xyzrpyza", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Inquiry Received",
          description: "Our design team will be in touch shortly.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* --- 1. LUXURY BANNER SECTION --- */}
      <section className="relative w-full h-[50vh] min-h-[400px] lg:h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-white/90 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Anam Cara Interiors
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              Let's Begin Your Interior Journey
            </h1>
            <div className="w-24 h-[1px] bg-white/60 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. MAIN CONTENT SECTION --- */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div ref={ref} className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Side: Contact Info */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span>
                Get In Touch
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
                Planning Your <br />
                <span className="italic text-muted-foreground">Home Interiors?</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-12">
                If you're looking for a calm, well-planned, and stress-free approach to interiors, Anam Cara Interiors offers turnkey solutions designed around affordable luxury and real living. Book a consultation and experience interiors done with clarity.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <Phone className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">Call Us</p>
                    <p className="font-serif text-xl text-foreground">+91 XXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <Mail className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">Email Us</p>
                    <p className="font-serif text-xl text-foreground">info@anamcarainteriors.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">Visit Studio</p>
                    <p className="font-serif text-xl text-foreground">Gurugram, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card p-8 md:p-12 rounded-sm border border-border/50 shadow-2xl shadow-black/5"
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                    <input type="text" name="name" required placeholder="John Doe" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/30 font-serif" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</label>
                    <input type="tel" name="phone" required placeholder="+91 ..." className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/30 font-serif" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                    <input type="email" name="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/30 font-serif" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">City</label>
                    <input type="text" name="city" placeholder="Gurugram" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/30 font-serif" />
                  </div>
                </div>

                <div className="space-y-2 mb-10">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea name="message" rows={3} placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-lg resize-none placeholder:text-muted-foreground/30 font-serif" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground/70">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wide">Privacy Guaranteed</span>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="px-10 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all disabled:opacity-70 flex items-center gap-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. GOOGLE MAPS SECTION --- */}
      <section className="w-full h-[500px]  transition-all duration-700 ease-in-out border-t border-border/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10835.491907685486!2d76.9934030319635!3d28.440750623889517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d55b1d4b8d%3A0xf79816a4f0c34423!2sCasa%20Exotique%20-%20Best%20Home%20Interior%20Designer%20in%20Gurugram!5e1!3m2!1sen!2sin!4v1766138152681!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Anam Cara Interiors Studio Location"
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}