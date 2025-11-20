import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ConfluenceFAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  background?: string; // V5.18 : Permet de personnaliser le fond
}

export function ConfluenceFAQ({ items, title = "Questions Fréquentes", subtitle, background = "bg-[#F9FAFB]" }: ConfluenceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 ${background}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Titre Section */}
          <div className="text-center mb-8 md:mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 md:space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-white border border-[#E5E7EB] transition-all duration-300"
                style={{
                  boxShadow: openIndex === index 
                    ? '0 4px 16px 0 rgba(0, 0, 0, 0.08)' 
                    : '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Question - Clickable */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-4 md:px-6 py-4 md:py-5 flex items-start justify-between gap-4 hover:bg-[#F9FAFB] transition-colors duration-200 cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <h4 className="text-base md:text-lg text-[#1A1A1A] pr-2">
                    {item.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown 
                      className="w-5 h-5 md:w-6 md:h-6 text-[#D1A65E]" 
                      strokeWidth={2} 
                    />
                  </motion.div>
                </button>

                {/* Answer - Collapsible */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-4 md:pb-5 pt-0">
                        <div className="pt-3 md:pt-4 border-t border-[#E5E7EB]">
                          <p 
                            className="text-sm md:text-base text-[#6B7280] leading-relaxed whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Note SEO-Friendly (Schema.org ready) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": items.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer.replace(/<[^>]*>/g, '')
                }
              }))
            })}
          </script>
        </div>
      </div>
    </section>
  );
}