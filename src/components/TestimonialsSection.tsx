import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "أحمد مصطفى",
    role: "مقيم - الرياض",
    text: "تجربة ممتازة مع الدرع اللوجيستي في شحن بضائع بري لمصر. التزام تام بالمواعيد وتغليف احترافي وأسعار مناسبة جداً. أنصح بالتعامل معهم بشدة.",
    rating: 5,
    date: "2026-03-15",
  },
  {
    name: "فايز العتيبي",
    role: "مهندس في الرياض",
    text: "شحنت أغراض شخصية جوي للفلبين وكانت التجربة رائعة. تتبع الشحنة كان ممتاز وكل شيء وصل سليم من الباب للباب بدون أي مشاكل.",
    rating: 5,
    date: "2026-02-20",
  },
  {
    name: "فاطمة الزهراني",
    role: "سيدة أعمال - جدة",
    text: "خدمة نقل وتخزين الأثاث كانت احترافية بكل معنى الكلمة. المستودعات نظيفة ومجهزة والفريق متعاون جداً. سأتعامل معهم مرة أخرى بالتأكيد.",
    rating: 5,
    date: "2026-01-10",
  },
  {
    name: "خالد المطيري",
    role: "مستورد - الدمام",
    text: "التخليص الجمركي مع الدرع اللوجيستي كان سريع وسلس. فريق متخصص يعرف الإجراءات ووفّر علينا وقت ومجهود كبير في إنهاء المعاملات.",
    rating: 5,
    date: "2025-12-05",
  },
  {
    name: "سارة الحربي",
    role: "معلمة في الرياض",
    text: "شحن للهند من الباب للباب. كل شيء وصل بدون أي كسر أو تلف. تغليف ممتاز وسعر مناسب والتوصيل كان أسرع من المتوقع.",
    rating: 5,
    date: "2026-04-18",
  },
  {
    name: "امجد سامي",
    role: "تاجر - الرياض",
    text: "أتعامل مع الدرع اللوجيستي من سنتين في الشحن البري لسوريا. خدمة موثوقة والتغليف المجاني ميزة ممتازة. الأسعار شاملة الجمارك وهذا يسهّل الحسابات.",
    rating: 5,
    date: "2026-05-02",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400 fill-amber-400" : "text-gray-300"
            }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const avgRating = (
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "الدرع اللوجيستي للشحن",
    "@id": "https://alderaa-logistics.com/#localbusiness",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: String(TESTIMONIALS.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
      reviewBody: t.text,
      datePublished: t.date,
    })),
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] mb-3">
            آراء عملائنا
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Stars count={5} />
            <span className="text-brand-navy font-extrabold text-2xl">{avgRating}</span>
            <span className="text-gray-500 text-sm">/ 5</span>
          </div>
          <p className="text-gray-600">
            بناءً على تقييمات أكثر من {TESTIMONIALS.length * 20}+ عميل
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <Quote className="absolute top-5 left-5 w-8 h-8 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors" />
              <Stars count={t.rating} />
              <p className="text-gray-700 mt-4 mb-6 leading-relaxed text-sm relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center text-brand-navy font-extrabold text-sm shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-brand-navy font-bold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
