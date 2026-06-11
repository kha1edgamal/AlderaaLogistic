import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import Breadcrumb from "../components/Breadcrumb";
import logoImg from "../assets/logo.png";

const PHONES = [
  "0556053924",
  "0556295307",
  "0556029104",
  "0537912011",
];

const PRIMARY_PHONE = PHONES[0];
const EMAIL = "alderaalogistics@gmail.com";

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "تواصل معنا" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.label,
      ...(item.href ? { "item": `https://alderaa-logistics.com${item.href}` } : {}),
    })),
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "تواصل معنا - الدرع اللوجيستي للشحن",
    "description": "بيانات الاتصال بشركة الدرع اللوجيستي للشحن بالرياض. تواصل معنا عبر الهاتف، الواتساب، أو البريد الإلكتروني.",
    "url": "https://alderaa-logistics.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "الدرع اللوجيستي للشحن",
      "telephone": PHONES.map(p => `+966${p.substring(1)}`),
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "الرياض",
        "addressCountry": "SA"
      }
    }
  };

  const whatsappUrl = `https://wa.me/966${PRIMARY_PHONE.replace(/^0/, "")}`;

  return (
    <>
      <SEOHead
        title="تواصل معنا | الدرع اللوجيستي للشحن - أفضل شركة شحن بالرياض"
        description="تواصل مع شركة الدرع اللوجيستي للشحن في الرياض، المملكة العربية السعودية. أرقام الاتصال والواتساب والبريد الإلكتروني alderaalogistics@gmail.com متاحة 24/7 لخدمتكم."
        canonical="https://alderaa-logistics.com/contact"
        schema={[breadcrumbSchema, contactPageSchema]}
      />

      {/* Hero Header Banner */}
      <section className="pt-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="text-brand-gold-light text-sm font-bold tracking-[0.3em] mb-3">
                CONTACT US
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                تواصل معنا
                <br />
                <span className="gold-text">يسعدنا دائماً خدمتكم</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                يسعد فريق خدمة العملاء بشركة الدرع اللوجيستي تلقي استفساراتكم وطلباتكم على مدار الساعة 24/7. تواصل معنا الآن عبر قنوات الاتصال المباشرة.
              </p>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-10 text-center">
                <img
                  src={logoImg}
                  alt="شعار شركة الدرع اللوجيستي للشحن"
                  className="w-36 h-36 mx-auto mb-6 object-contain animate-float"
                />
                <h2 className="text-white text-xl font-extrabold mb-1">
                  الدرع اللوجيستي للشحن
                </h2>
                <p className="gold-text text-[11px] tracking-[0.25em] font-bold">
                  — ALDERAA FOR SHIPPING —
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Cards Dashboard */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
              قنوات الاتصال المباشرة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              نوفر لك وسائل اتصال سريعة وموثوقة للحصول على عروض أسعار أو تتبع شحناتك في أي وقت.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Phone numbers */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gold" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-navy mb-3">أرقام التواصل</h3>
                <p className="text-gray-500 text-sm mb-6">اتصل بنا مباشرة للتحدث مع أحد ممثلي الدعم الفوري:</p>
              </div>
              <div className="space-y-2.5 pt-2 border-t border-gray-50" dir="ltr">
                {PHONES.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="flex items-center justify-between text-gray-700 font-extrabold hover:text-brand-gold transition-colors text-base p-1.5 hover:bg-gray-50 rounded-lg"
                  >
                    <span>{p}</span>
                    <Phone className="w-3.5 h-3.5 text-brand-gold/60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gold" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-navy mb-3">المحادثة الفورية</h3>
                <p className="text-gray-500 text-sm mb-6">تواصل معنا الآن واطلب تسعيرة شحن فورية عبر واتساب:</p>
              </div>
              <div className="pt-4 border-t border-gray-50">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-5 py-3.5 rounded-2xl text-sm transition-all inline-flex items-center justify-center gap-2 w-full shadow-sm hover:scale-[1.03]"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                  راسلنا على واتساب
                </a>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gold" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-navy mb-3">البريد الإلكتروني</h3>
                <p className="text-gray-500 text-sm mb-6">راسلنا بخصوص استفساراتك أو إرسال المستندات لوجهتك:</p>
              </div>
              <div className="pt-4 border-t border-gray-50 text-center">
                <a
                  href={`mailto:${EMAIL}`}
                  className="block text-brand-navy font-bold hover:text-brand-gold transition-colors text-sm break-all py-2.5 px-1 bg-gray-50 rounded-xl"
                  dir="ltr"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Card 4: Location & Work Hours */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gold" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-navy mb-3">مقرنا وأوقات العمل</h3>
                <p className="text-gray-500 text-sm mb-4">الرياض، المملكة العربية السعودية - ونغطي كافة مناطق المملكة.</p>
              </div>
              <div className="pt-3 border-t border-gray-50 space-y-2">
                <div className="flex items-center gap-2 text-xs text-brand-navy font-bold bg-amber-50 text-amber-900 px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>دعم متواصل 24 ساعة / 7 أيام</span>
                </div>
              </div>
            </div>

          </div>

          {/* Large Bottom Info Banner */}
          <div className="mt-16 cta-bg rounded-[2rem] p-5 sm:p-12 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  شحن آمن ومضمون 100%
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  الدرع اللوجيستي خيارك الأفضل للشحن الدولي والمحلي
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                  نحن نوفر حلول شحن بري، بحري، وجوي متكاملة من الباب للباب مع تغليف احترافي ومتابعة مستمرة. ثقتكم هي شعارنا.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-end">
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="gold-gradient text-brand-navy font-extrabold px-8 py-4 rounded-full text-sm sm:text-base transition-all inline-flex items-center gap-2 shadow-md hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  اتصل بالدعم الفوري
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
