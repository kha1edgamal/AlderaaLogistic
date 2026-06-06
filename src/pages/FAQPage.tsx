import { Link } from "react-router-dom";
import { Phone, HelpCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";
import Breadcrumb from "../components/Breadcrumb";
import FAQSection from "../components/FAQSection";

const GENERAL_FAQ = [
  {
    question: "ما هي خدمات الدرع اللوجيستي للشحن؟",
    answer:
      "نقدم خدمات شحن متكاملة تشمل: الشحن الجوي الدولي، الشحن البحري من الباب للباب، الشحن البري إلى مصر وسوريا والخليج، التخليص الجمركي، التعبئة والتغليف الاحترافي، النقل والتخزين في مستودعات مجهزة، والتأمين اللوجستي الشامل.",
  },
  {
    question: "كيف يمكنني الحصول على عرض سعر لشحنتي؟",
    answer:
      "يمكنك التواصل معنا مباشرة عبر الهاتف على الأرقام: 0556053924 أو 0556295307 أو عبر واتساب للحصول على عرض سعر فوري ومخصص لشحنتك. فريق الدعم متاح على مدار الساعة.",
  },
  {
    question: "ما هي الدول التي تغطيها خدمات الشحن؟",
    answer:
      "نغطي شحن دولي لأكثر من 120 وجهة عالمية. خدمة الشحن الجوي والبحري من الباب للباب متاحة إلى: الفلبين، الهند، سريلانكا، إندونيسيا، بنجلاديش. الشحن البري يغطي: مصر (جميع المحافظات)، سوريا، السودان، ودول الخليج العربي.",
  },
  {
    question: "ما معنى خدمة 'من الباب للباب'؟",
    answer:
      "خدمة من الباب للباب تعني أننا نستلم شحنتك من عنوانك في المملكة العربية السعودية ونتولى جميع إجراءات التغليف والشحن والتخليص الجمركي والتوصيل حتى نسلّمها على باب عنوانك في بلد الوصول — بدون أي تعب أو مجهود من طرفك.",
  },
  {
    question: "هل تقدمون خدمة التغليف؟",
    answer:
      "نعم، نقدم خدمة تعبئة وتغليف احترافية بأجود المواد العالمية لضمان سلامة شحنتكم. في الشحن البري لمصر وسوريا، التغليف مجاني ومشمول في سعر الشحن.",
  },
  {
    question: "هل يمكنني تتبع شحنتي؟",
    answer:
      "نعم، نوفر خدمة تتبع الشحنات عبر رقم البوليصة. في الشحن الجوي يمكنك التتبع عبر موقعنا بشكل لحظي. لباقي أنواع الشحن، يمكنك التواصل مع فريق الدعم في أي وقت للاستفسار عن حالة شحنتك.",
  },
  {
    question: "ما الفرق بين الشحن الجوي والبحري والبري؟",
    answer:
      "الشحن الجوي: الأسرع (3-7 أيام) ومناسب للشحنات العاجلة والخفيفة. الشحن البحري: الأوفر للبضائع الثقيلة والكبيرة (15-30 يوم). الشحن البري: مناسب للدول المجاورة مثل مصر وسوريا والخليج بأسعار مخفضة وتغليف مجاني.",
  },
  {
    question: "هل الأسعار تشمل التخليص الجمركي؟",
    answer:
      "في الشحن البري لمصر وسوريا، الأسعار شاملة تكاليف الجمارك. لأنواع الشحن الأخرى، نقدم خدمة التخليص الجمركي بشكل منفصل عبر وكالتنا الجمركية المعتمدة بأسعار تنافسية.",
  },
  {
    question: "هل تقدمون خدمة نقل وتخزين الأثاث؟",
    answer:
      "نعم، نقدم خدمة نقل وتخزين الأثاث والبضائع في مستودعات مجهزة بالكامل وآمنة. سواء كنت تحتاج تخزين مؤقت أو طويل الأمد، مستودعاتنا مجهزة لتلبية احتياجاتك.",
  },
  {
    question: "هل تقدمون تأمين على الشحنات؟",
    answer:
      "نعم، نوفر تأمين شامل على جميع أنواع الشحنات مع شركاء تأمين عالميين لتغطية المخاطر الكاملة. يمكنك إضافة التأمين لأي شحنة لضمان راحة بالك.",
  },
  {
    question: "ما هي ساعات العمل؟",
    answer:
      "فريق الدعم الخاص بنا متاح على مدار الساعة 24/7 للرد على جميع استفساراتك وتقديم عروض الأسعار. يمكنك التواصل معنا في أي وقت عبر الهاتف أو واتساب.",
  },
  {
    question: "هل يمكنني شحن أغراض شخصية وليس بضائع تجارية؟",
    answer:
      "بالطبع! نشحن جميع أنواع الأغراض سواء شخصية أو تجارية. خدمة من الباب للباب متاحة للأفراد والشركات على حد سواء.",
  },
  {
    question: "كيف أتواصل مع خدمة العملاء؟",
    answer:
      "يمكنك التواصل معنا عبر: الهاتف: 0556053924 | 0556295307 | 0556029104 | 0537912011 أو عبر واتساب على نفس الأرقام. فريقنا جاهز لخدمتك على مدار الساعة.",
  },
];

export default function FAQPage() {
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "الأسئلة الشائعة" },
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

  return (
    <>
      <SEOHead
        title="الأسئلة الشائعة | شركة الدرع اللوجيستي للشحن بالرياض"
        description="إجابات شاملة حول خدمات الشحن البري والجوي والبحري والتخليص الجمركي ونقل الأثاث في الرياض والسعودية. تعرف على تفاصيل الأسعار والمدد والضمانات لدى أفضل شركات الشحن بالرياض."
        canonical="https://alderaa-logistics.com/الأسئلة-الشائعة"
        schema={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="pt-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex items-center gap-6 mt-4">
            <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center shadow-2xl flex-shrink-0">
              <HelpCircle className="w-10 h-10 text-brand-navy" strokeWidth={2} />
            </div>
            <div>
              <div className="text-brand-gold-light text-xs font-bold tracking-[0.3em] mb-1">
                FAQ
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                الأسئلة الشائعة
              </h1>
            </div>
          </div>
          <p className="text-white/80 text-lg max-w-3xl mt-6 leading-relaxed">
            إجابات شاملة لأكثر الأسئلة تكراراً حول خدمات الشحن والنقل. لم تجد
            إجابة لسؤالك؟ تواصل معنا مباشرة.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <FAQSection
        items={GENERAL_FAQ}
        title="كل ما تحتاج معرفته عن خدماتنا"
        subtitle="إجابات مفصّلة ومباشرة لأكثر الأسئلة تكراراً من عملائنا"
      />

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            لم تجد إجابة لسؤالك؟
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            فريق الدعم الخاص بنا جاهز للرد على جميع استفساراتك على مدار الساعة.
            تواصل معنا الآن.
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
