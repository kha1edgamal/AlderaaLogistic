import { type LucideIcon, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead";
import Breadcrumb from "./Breadcrumb";
import FAQSection, { type FAQItem } from "./FAQSection";

interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServicePageLayoutProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: ServiceFeature[];
  detailTitle: string;
  detailContent: string;
  detailPoints: string[];
  destinations?: string[];
  faqItems: FAQItem[];
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  phones?: string[];
}

const DEFAULT_PHONES = ["0556053924", "0556295307", "0556029104", "0537912011"];

export default function ServicePageLayout({
  slug,
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  detailTitle,
  detailContent,
  detailPoints,
  destinations,
  faqItems,
  seoTitle,
  seoDescription,
  canonical,
  phones = DEFAULT_PHONES,
}: ServicePageLayoutProps) {
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "خدماتنا", href: "/#services" },
    { label: title },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://alderaa-logistics.com${item.href}` } : {}),
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: seoDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "الدرع اللوجيستي للشحن",
      "@id": "https://alderaa-logistics.com/#localbusiness",
    },
    url: canonical,
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  };

  const whatsappUrl = `https://wa.me/966${phones[0].replace(/^0/, "")}`;

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        schema={[breadcrumbSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="pt-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
            <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center shadow-2xl flex-shrink-0">
              <Icon className="w-10 h-10 text-brand-navy" strokeWidth={2} />
            </div>
            <div>
              <div className="text-brand-gold-light text-xs font-bold tracking-[0.3em] mb-1">
                {subtitle}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {title}
              </h1>
            </div>
          </div>

          <p className="text-white/80 text-lg max-w-3xl mt-6 leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={`tel:${phones[0]}`}
              className="gold-gradient text-brand-navy font-extrabold px-8 py-4 rounded-full text-base shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" strokeWidth={3} />
              اتصل الآن
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold px-8 py-4 rounded-full text-base transition-all inline-flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.07 1.001 11.996 1c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.393 1.357 4.869l-.993 3.629 3.567-.946zm10.707-5.32c-.29-.146-1.72-.85-1.987-.948-.268-.099-.463-.147-.659.146-.196.293-.755.948-.927 1.144-.171.195-.343.219-.633.073-.29-.147-1.226-.452-2.336-1.444-.864-.772-1.448-1.724-1.618-2.016-.17-.293-.018-.452.128-.598.131-.131.29-.341.436-.512.145-.17.194-.292.292-.487.097-.195.048-.366-.024-.512-.072-.146-.659-1.586-.902-2.17-.237-.57-.497-.493-.659-.501-.17-.008-.366-.01-.56-.01-.196 0-.512.073-.78.366-.269.293-1.025 1.002-1.025 2.441 0 1.439 1.048 2.83 1.194 3.025.147.195 2.062 3.149 4.996 4.417.698.302 1.243.482 1.667.617.7.223 1.338.192 1.843.116.562-.085 1.72-.703 1.963-1.382.244-.679.244-1.261.171-1.382-.073-.12-.269-.195-.558-.34z" />
              </svg>
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] mb-3">
              مميزات الخدمة
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              لماذا تختار خدمة {title} معنا؟
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const FIcon = f.icon;
              return (
                <div
                  key={i}
                  className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-navy flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <FIcon className="w-8 h-8 text-brand-gold" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-extrabold text-brand-navy mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6 leading-tight">
                {detailTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{detailContent}</p>
              <ul className="space-y-3">
                {detailPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    <span className="text-gray-700 text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-3xl bg-brand-navy/5 -rotate-3" />
              <div className="relative bg-brand-navy rounded-3xl p-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-full gold-gradient flex items-center justify-center mb-6 shadow-xl">
                  <Icon className="w-12 h-12 text-brand-navy" strokeWidth={2} />
                </div>
                <h3 className="text-white text-2xl font-extrabold mb-2">{title}</h3>
                <p className="text-brand-gold-light text-sm tracking-[0.2em] font-bold mb-6">
                  {subtitle}
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      {destinations && destinations.length > 0 && (
        <section className="py-20 bg-brand-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block text-brand-gold-light text-sm font-bold tracking-[0.3em] mb-3">
                الوجهات
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                الدول التي نخدمها في {title}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {destinations.map((dest, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-brand-gold/30 rounded-full px-6 py-3 text-white font-bold hover:border-brand-gold/60 hover:bg-white/10 transition-all"
                >
                  {dest}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqItems.length > 0 && <FAQSection items={faqItems} />}

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            جاهز لشحن بضاعتك؟
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على عرض سعر فوري لخدمة {title}. فريق الدعم متاح على مدار الساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phones[0]}`}
              className="gold-gradient text-brand-navy font-extrabold px-10 py-4 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" strokeWidth={3} />
              {phones[0]}
            </a>
            <Link
              to="/"
              className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold px-10 py-4 rounded-full text-lg transition-all inline-flex items-center justify-center"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
