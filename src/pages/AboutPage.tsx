import { Link } from "react-router-dom";
import {
  Phone,
  Building2,
  Target,
  Eye,
  Plane,
  Ship,
  Truck,
  Warehouse,
  ShieldCheck,
  Zap,
  BadgeCheck,
  Award,
  Users,
  Globe,
  Clock,
  CheckCircle2,
  Heart,
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import Breadcrumb from "../components/Breadcrumb";
import logoImg from "../assets/logo.png";

const SERVICES_BRIEF = [
  {
    title: "الشحن الجوي",
    desc: "شحن جوي إلى جميع دول العالم عبر منافذ مطارات العالم مع تتبع الشحنة برقم البوليصة. شحن جوي من الباب للباب إلى الفلبين، إندونيسيا، بنجلاديش، الهند، سريلانكا.",
    icon: Plane,
    href: "/شحن-جوي",
  },
  {
    title: "الشحن البحري",
    desc: "شحن بحري من الباب للباب إلى الفلبين وإندونيسيا وسريلانكا وبنجلاديش والهند بتغليف ممتاز يوصل للبيت بدون تعب.",
    icon: Ship,
    href: "/شحن-بحري",
  },
  {
    title: "الشحن البري",
    desc: "شحن بري من الباب للباب إلى جميع محافظات مصر وسوريا بأسعار مخفضة وتغليف مجاني وشامل تكاليف الجمارك.",
    icon: Truck,
    href: "/شحن-بري",
  },
  {
    title: "النقل والتخزين",
    desc: "نقل وتخزين آمن للأثاث والبضائع في مستودعات مجهزة بالكامل.",
    icon: Warehouse,
  },
];

const VALUES = [
  {
    title: "أمان",
    subtitle: "SAFETY",
    desc: "نلتزم بأعلى معايير الأمان والنقل الآمن لكل أنواع البضائع بضمانات كاملة.",
    icon: ShieldCheck,
  },
  {
    title: "سرعة",
    subtitle: "SPEED",
    desc: "نقدم شحنات سريعة مع أدق خطط لوجستية لتصل شحنتك إلى وجهتها في أسرع وقت.",
    icon: Zap,
  },
  {
    title: "إلتزام",
    subtitle: "COMMITMENT",
    desc: "إلتزام كامل بالمواعيد المتفق عليها وشفافية تامة طوال مراحل الشحن.",
    icon: BadgeCheck,
  },
];

const STATS = [
  { num: "+15", label: "عام من الخبرة", icon: Award },
  { num: "+5000", label: "عميل راضي", icon: Users },
  { num: "+120", label: "وجهة عالمية", icon: Globe },
  { num: "24/7", label: "دعم فوري", icon: Clock },
];

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://alderaa-logistics.com${item.href}` }
        : {}),
    })),
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "الدرع اللوجيستي للشحن - Alderaa for Shipping",
    url: "https://alderaa-logistics.com/",
    logo: "https://alderaa-logistics.com/logo.png",
    description:
      "شركة رائدة في مجال الشحن والنقل داخل السعودية، تقدم خدمات الشحن البري، الجوي، البحري، بالإضافة إلى نقل وتخزين الأثاث.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressRegion: "منطقة الرياض",
      addressCountry: "SA",
    },
    telephone: [
      "+966556053924",
      "+966556295307",
      "+966556029104",
      "+966537912011",
    ],
    areaServed: [
      "Saudi Arabia",
      "Egypt",
      "Syria",
      "Philippines",
      "India",
      "Sri Lanka",
      "Indonesia",
      "Bangladesh",
    ],
    knowsAbout: [
      "Air Freight",
      "Sea Freight",
      "Land Freight",
      "Customs Clearance",
      "Logistics",
      "Warehousing",
    ],
  };

  return (
    <>
      <SEOHead
        title="من نحن | الدرع اللوجيستي للشحن - أفضل شركة شحن بالرياض"
        description="تعرّف على شركة الدرع اللوجيستي للشحن - شركة رائدة وموثوقة تقدم خدمات الشحن البري والجوي والبحري والتخزين والتخليص الجمركي في الرياض والمملكة العربية السعودية."
        canonical="https://alderaa-logistics.com/من-نحن"
        schema={[breadcrumbSchema, orgSchema]}
      />

      {/* Hero */}
      <section className="pt-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="text-brand-gold-light text-xs font-bold tracking-[0.3em] mb-3">
                ABOUT US
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                من نحن
                <br />
                <span className="gold-text">الدرع اللوجيستي للشحن</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                شركة رائدة في مجال الشحن والنقل داخل السعودية، تقدم خدمات الشحن
                البري، الجوي، البحري، بالإضافة إلى نقل وتخزين الأثاث. تأسست
                الشركة لتوفير حلول شحن موثوقة وآمنة، مع الالتزام بالمواعيد
                والتكاليف المناسبة.
              </p>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-10 text-center">
                <img
                  src={logoImg}
                  alt="شعار شركة الدرع اللوجيستي للشحن"
                  className="w-40 h-40 mx-auto mb-6 object-contain animate-float"
                />
                <h2 className="text-white text-2xl font-extrabold mb-2">
                  الدرع اللوجيستي للشحن
                </h2>
                <p className="gold-text text-sm tracking-[0.3em] font-bold">
                  — ALDERAA FOR SHIPPING —
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] mb-3">
              رسالتنا ورؤيتنا
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              نحن نسعى لتلبية احتياجات عملائنا من خلال خدمات شحن مبتكرة وعالية
              الجودة، مع ضمان الحلول المثلى لجميع أنواع الشحنات، سواء كانت صغيرة
              أو كبيرة، داخل المملكة أو إلى الخارج.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="relative bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-brand-gold" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy mb-4">
                رؤيتنا
              </h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الشركة الرائدة في قطاع الشحن والنقل في السعودية والشرق
                الأوسط من خلال الكفاءة والسرعة والجودة.
              </p>
            </div>

            {/* Mission */}
            <div className="relative bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-brand-gold" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy mb-4">
                رسالتنا
              </h3>
              <p className="text-gray-600 leading-relaxed">
                تقديم حلول شحن متكاملة تلبي احتياجات عملائنا بدقة، باستخدام أحدث
                التقنيات لضمان الشحن الآمن والموثوق.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] mb-3">
              خدماتنا
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
              ماذا نقدّم لعملائنا
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SERVICES_BRIEF.map((s) => {
              const SIcon = s.icon;
              const content = (
                <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <SIcon
                        className="w-7 h-7 text-brand-gold"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-brand-navy mb-2">
                        {s.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );

              if ("href" in s && s.href) {
                return (
                  <Link key={s.title} to={s.href} className="block">
                    {content}
                  </Link>
                );
              }
              return <div key={s.title}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] mb-3">
              قيمنا
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
              ثلاث دعائم يقوم عليها عملنا
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v) => {
              const VIcon = v.icon;
              return (
                <div
                  key={v.title}
                  className="relative bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-brand-gold" />
                  <div className="w-24 h-24 mx-auto rounded-full gold-gradient flex items-center justify-center mb-6 shadow-xl">
                    <VIcon
                      className="w-12 h-12 text-brand-navy"
                      strokeWidth={2.2}
                    />
                  </div>
                  <div className="text-brand-gold text-xs tracking-[0.35em] font-bold mb-2">
                    {v.subtitle}
                  </div>
                  <h3 className="text-3xl font-extrabold text-brand-navy mb-4">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart
            className="w-12 h-12 text-brand-gold mx-auto mb-6"
            strokeWidth={2}
          />
          <p className="text-white text-xl sm:text-2xl font-bold leading-relaxed">
            نلتزم بتقديم خدمات شحن عالية الجودة عبر جميع قنوات النقل لضمان
            تجربة آمنة وسريعة لعملائنا.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => {
              const SIcon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full gold-gradient flex items-center justify-center mb-3 shadow-xl">
                    <SIcon
                      className="w-8 h-8 text-brand-navy"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold gold-text mb-2">
                    {s.num}
                  </div>
                  <div className="text-white/80 text-base">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            جاهزين لخدمتك
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على عرض سعر فوري لشحنتك. فريق الدعم متاح على
            مدار الساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0556053924"
              className="gold-gradient text-brand-navy font-extrabold px-10 py-4 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" strokeWidth={3} />
              اتصل بنا الآن
            </a>
            <Link
              to="/الأسئلة-الشائعة"
              className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold px-10 py-4 rounded-full text-lg transition-all inline-flex items-center justify-center"
            >
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
