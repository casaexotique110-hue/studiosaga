import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// 1. Saara FAQs ka data ek hi jagah structured format mein
const faqData: Record<string, { question: string; answer: string }[]> = {
  homepage: [
    {
      question: "What services does Studia Saga offer?",
      answer: "We provide complete home interior solutions including modular kitchens, wardrobes, TV units, false ceilings, custom furniture, and full home interior design services."
    },
    {
      question: "Do you offer affordable interior design solutions?",
      answer: "Yes, we specialize in affordable and customized interior solutions without compromising on quality and design."
    },
    {
      question: "Which areas do you serve?",
      answer: "We offer interior design services across Delhi NCR including Delhi, Noida, Gurugram."
    },
    {
      question: "How can I get started with my interior project?",
      answer: "You can contact us via phone (9667733382) or website (https://www.studiasaga.com/) to schedule a consultation."
    },
    {
      question: "Do you provide 3D designs before execution?",
      answer: "Yes, we provide 3D design visualization so you can see your space before final execution."
    }
  ],
  modular: [
    {
      question: "What are modular interiors?",
      answer: "Modular interiors are factory-made furniture solutions like modular kitchens, wardrobes, and storage units that are designed for quick installation and efficient space utilization."
    },
    {
      question: "What is the cost of modular interiors in Delhi NCR?",
      answer: "The cost depends on the size, materials, and customization."
    },
    {
      question: "What all is included in modular interior design?",
      answer: "It includes modular kitchen, wardrobes, TV units, storage units, and other space-saving furniture."
    },
    {
      question: "How long does modular interior installation take?",
      answer: "Most modular interior projects are completed within 2–6 weeks."
    }
  ],
  fullhome: [
    {
      question: "What is included in full home interior design?",
      answer: "Full home interiors include modular kitchen, wardrobes, furniture, lighting, false ceiling, wall design, and décor."
    },
    {
      question: "What is the cost of full home interiors in Delhi NCR?",
      answer: "The cost varies based on scope of project, size and materials."
    },
    {
      question: "Do you provide turnkey interior solutions?",
      answer: "Yes, we handle everything from design and planning to execution and final handover."
    },
    {
      question: "How long does a full home interior project take?",
      answer: "Most projects are completed within 6–10 weeks after design approval."
    }
  ],
  luxury: [
    {
      question: "What are luxury interior design services?",
      answer: "Luxury interior design focuses on premium materials, bespoke furniture, high-end finishes, and personalized design concepts for elegant living spaces."
    },
    {
      question: "What makes luxury interiors different from regular interiors?",
      answer: "Luxury interiors involve premium materials, detailed craftsmanship, designer finishes, and customized elements tailored to the client’s lifestyle."
    },
    {
      question: "Do you provide customized luxury furniture?",
      answer: "Yes, we design and manufacture bespoke furniture for a unique and premium look."
    },
    {
      question: "How long does a luxury interior project take?",
      answer: "Luxury projects usually take 8–16 weeks depending on design complexity."
    }
  ]
};

interface FAQSectionProps {
  page: "homepage" | "modular" | "fullhome" | "luxury";
}

const FAQSection: React.FC<FAQSectionProps> = ({ page }) => {
  // Khaas page ke FAQs nikalne ke liye
  const currentFAQs = faqData[page] || [];
  
  // Kis index ka FAQ open hai uski state (null matlab sab closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest text-stone-900 dark:text-stone-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-px bg-[#BFA181] mx-auto" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {currentFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 rounded-sm overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left text-stone-800 dark:text-stone-200 hover:text-[#BFA181] dark:hover:text-[#BFA181] transition-colors group"
                >
                  <span className="font-medium text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 group-hover:text-[#BFA181] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-stone-100 dark:border-stone-800/50 text-muted-foreground font-light text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;