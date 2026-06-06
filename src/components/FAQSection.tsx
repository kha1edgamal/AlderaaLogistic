import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  darkBg?: boolean;
  id?: string;
}

export default function FAQSection({
  items,
  title = "الأسئلة الشائعة",
  subtitle = "إجابات لأكثر الأسئلة تكراراً حول خدماتنا",
  darkBg = false,
  id,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Generate FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id={id} className={`py-20 ${darkBg ? "bg-brand-navy" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="text-center mb-12">
          <div
            className={`inline-block text-sm font-bold tracking-[0.3em] mb-3 ${
              darkBg ? "text-brand-gold-light" : "text-brand-gold"
            }`}
          >
            FAQ
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold mb-4 ${
              darkBg ? "text-white" : "text-brand-navy"
            }`}
          >
            {title}
          </h2>
          <p className={`text-lg ${darkBg ? "text-white/70" : "text-gray-600"}`}>{subtitle}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? darkBg
                      ? "border-brand-gold/40 bg-white/10"
                      : "border-brand-gold/40 bg-white shadow-lg"
                    : darkBg
                    ? "border-white/10 bg-white/5 hover:border-white/20"
                    : "border-gray-200 bg-white hover:border-brand-gold/30"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-right cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-bold text-base sm:text-lg leading-relaxed ${
                      darkBg ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 mr-4 transition-transform duration-300 text-brand-gold ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed ${
                        darkBg ? "text-white/70" : "text-gray-600"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
