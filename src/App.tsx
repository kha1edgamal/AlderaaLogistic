import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import {
  Plane,
  Ship,
  Truck,
  ClipboardCheck,
  Package,
  ShieldCheck,
  Phone,
  ArrowLeft,
  Menu,
  X,
  MapPin,
  CheckCircle2,
  Clock,
  Users,
  Globe,
  Award,
  Zap,
  BadgeCheck,
  ChevronLeft,
  Warehouse,
} from "lucide-react";

import logoImg from "./assets/logo.png";
import heroBgImg from "./assets/hero-bg.png";

import ScrollToTop from "./components/ScrollToTop";
import SEOHead from "./components/SEOHead";
import TestimonialsSection from "./components/TestimonialsSection";
import AirFreightPage from "./pages/AirFreightPage";
import SeaFreightPage from "./pages/SeaFreightPage";
import LandFreightPage from "./pages/LandFreightPage";
import CustomsClearancePage from "./pages/CustomsClearancePage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";

const PHONES = [
  "0556053924",
  "0556295307",
  "0556029104",
  "0537912011",
];

const NAV = [
  { label: "الرئيسية", to: "/" },
  { label: "خدماتنا", to: "/#services" },
  { label: "من نحن", to: "/من-نحن" },
  { label: "الأسئلة الشائعة", to: "/الأسئلة-الشائعة" },
  { label: "تواصل معنا", to: "/#contact" },
];

const SERVICES = [
  {
    title: "الشحن الجوي",
    desc: "خدمات شحن جوي سريع وآمن من الباب إلى الباب من السعودية إلى الفلبين، الهند، سريلانكا، إندونيسيا، وبنجلاديش بأفضل الأسعار.",
    icon: Plane,
    href: "/شحن-جوي",
  },
  {
    title: "الشحن البحري",
    desc: "شحن بحري من الباب إلى الباب للحاويات والبضائع الثقيلة من السعودية إلى كافة موانئ العالم (الفلبين، الهند، سريلانكا، إندونيسيا، وبنجلاديش) بأفضل التكاليف.",
    icon: Ship,
    href: "/شحن-بحري",
  },
  {
    title: "الشحن البري",
    desc: "شحن بري من الباب إلى الباب عبر أسطول شاحنات مجهز لنقل البضائع براً بأمان وكفاءة إلى مصر، سوريا، السودان، ودول الخليج العربي.",
    icon: Truck,
    href: "/شحن-بري",
  },
  {
    title: "التخليص الجمركي",
    desc: "وكالة جمركية معتمدة نقدم من خلالها خدمة التخليص الجمركي السريع والشامل وتسهيل المعاملات الجمركية.",
    icon: ClipboardCheck,
    href: "/تخليص-جمركي",
  },
  {
    title: "التعبئة والتغليف",
    desc: "خدمات تعبئة وتغليف احترافية بأجود المواد العالمية لضمان سلامة شحنتكم ووصولها سليمة.",
    icon: Package,
  },
  {
    title: "النقل والتخزين",
    desc: "نقل وتخزين الأثاث والبضائع بشكل آمن في مستودعات مجهزة بالكامل لتلبية احتياجات الشركات والأفراد.",
    icon: Warehouse,
  },
  {
    title: "التأمين اللوجستي",
    desc: "تأمين شامل على جميع أنواع الشحنات مع شركاء عالميون لتغطية المخاطر الكاملة.",
    icon: ShieldCheck,
  },
];

const DESTINATIONS = [
  { title: "دول الخليج العربي", items: ["الإمارات", "قطر", "عُمان", "البحرين", "الكويت"] },
  { title: "مصر وإفريقيا", items: ["مصر (شحن بري وجوي وبحري)", "السودان", "ليبيا", "تونس", "المغرب"] },
  { title: "الشرق الأوسط", items: ["الأردن", "لبنان", "العراق", "سوريا", "اليمن"] },
  { title: "آسيا (الباب للباب)", items: ["الفلبين", "الهند", "سريلانكا", "إندونيسيا", "بنجلاديش"] },
];

const WHY = [
  { title: "أمان", subtitle: "SAFETY", desc: "نلتزم بأعلى معايير الأمان والنقل الآمن لكل أنواع البضائع بضمانات كاملة.", icon: ShieldCheck },
  { title: "سرعة", subtitle: "SPEED", desc: "نقدم شحنات سريعة مع أدق خطط لوجستية لتصل شحنتك إلى وجهتها في أسرع وقت.", icon: Zap },
  { title: "إلتزام", subtitle: "COMMITMENT", desc: "إلتزام كامل بالمواعيد المتفق عليها وشفافية تامة طوال مراحل الشحن من البداية للنهاية.", icon: BadgeCheck },
];

const PRIMARY_PHONE = PHONES[0];

// Flag URLs using flagcdn
const FLAGS: Record<string, string> = {
  sa: "https://flagcdn.com/w160/sa.png",
  eg: "https://flagcdn.com/w160/eg.png",
  sy: "https://flagcdn.com/w160/sy.png",
  sd: "https://flagcdn.com/w160/sd.png",
  gulf: "https://flagcdn.com/w160/ae.png",
  world: "https://flagcdn.com/w160/un.png",
};

/* ========== Shared Navigation Helper ========== */
function NavHashLink({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (to.includes("#")) {
      e.preventDefault();
      const [path, hash] = to.split("#");
      const targetPath = path || "/";

      if (location.pathname === targetPath) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(targetPath);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
      onClick?.();
    } else {
      onClick?.();
    }
  };

  if (to.includes("#")) {
    return (
      <a href={to} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

/* ========== Layout Components ========== */

function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logoImg} alt="الدرع اللوجيستي للشحن - خدمات نقل لوجستي متكاملة" className="w-12 h-12 object-contain" />
      <div className="flex flex-col leading-tight">
        <span className={`${light ? "text-white" : "text-brand-navy"} font-extrabold text-base sm:text-lg`}>
          الدرع اللوجيستي للشحن
        </span>
        <span className="gold-text text-[10px] sm:text-xs tracking-[0.25em] font-bold">ALDERAA FOR SHIPPING</span>
      </div>
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-navy/95 backdrop-blur shadow-lg" : "bg-brand-navy/70 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <NavHashLink
                key={item.to}
                to={item.to}
                className="text-white/80 hover:text-brand-gold text-sm font-bold transition-colors"
              >
                {item.label}
              </NavHashLink>
            ))}
          </nav>
          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="hidden md:inline-flex items-center gap-2 gold-gradient text-brand-navy font-extrabold px-5 py-2.5 rounded-full text-sm shadow-lg hover:scale-105 transition-transform"

          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            {PRIMARY_PHONE}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white w-10 h-10 flex items-center justify-center"
            aria-label="القائمة"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden pb-6 border-t border-white/10">
            <nav className="flex flex-col gap-2 pt-4">
              {NAV.map((item) => (
                <NavHashLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-white/90 hover:text-brand-gold hover:bg-white/5 px-4 py-3 rounded-lg text-sm font-bold transition-colors"
                >
                  {item.label}
                </NavHashLink>
              ))}
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="gold-gradient text-brand-navy font-extrabold text-center mt-3 px-5 py-3 rounded-full text-sm"
              >
                📞 اتصل بنا : {PRIMARY_PHONE}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/* ========== Homepage Sections ========== */

function Hero() {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy">
        <img
          src={heroBgImg}
          alt="شركة شحن دولي من الرياض إلى العالم - شحن جوي وبري وبحري"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-brand-navy/95 via-brand-navy/80 to-brand-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-navy" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold-light text-sm font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              أفضل شركة شحن في الرياض والمملكة
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              أفضل شركة شحن في الرياض
              <br />
              <span className="gold-text">شحن جوي وبحري وبري</span>
              <br />
              من السعودية إلى العالم
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              الدرع اللوجيستي للشحن هي أفضل شركة شحن بري وجوي وبحري في السعودية والرياض. نقدم حلول شحن شاملة من الباب إلى الباب، وخدمات نقل وتخزين آمن للأثاث والبضائع في مستودعات مجهزة بالكامل.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${PHONES[0]}`}
                className="gold-gradient text-brand-navy font-extrabold px-8 py-4 rounded-full text-base shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"

              >
                <Phone className="w-4 h-4" strokeWidth={3} />
                الشحن الداخلي
              </a>
              <a
                href={`tel:${PHONES[1]}`}
                className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-bold px-8 py-4 rounded-full text-base transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" strokeWidth={3} />
                الشحن الدولي
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl mx-auto lg:mx-0">
              <div className=" text-center lg:text-right">
                <div className="text-3xl font-extrabold text-brand-gold-light">+15</div>
                <div className="text-white/70 text-sm">عاماً من الخبرة</div>
              </div>
              <div className="border-r border-white/20 text-center">
                <div className="text-3xl font-extrabold text-brand-gold-light">+120</div>
                <div className="text-white/70 text-sm">وجهة عالمية</div>
              </div>
              <div className="border-r border-white/20 text-center lg:text-left">
                <div className="text-3xl font-extrabold text-brand-gold-light">+5000</div>
                <div className="text-white/70 text-sm">عميل سعيد</div>
              </div>
            </div>
          </div>

          {/* Right - Logo Card */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 w-full max-w-lg">
              <div className="absolute -top-4 -right-4 gold-gradient text-brand-navy font-extrabold px-4 py-2 rounded-full text-sm shadow-xl animate-float flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" strokeWidth={3} />
                شحن آمن 100%
              </div>
              <img src={logoImg} alt="شعار شركة الدرع اللوجيستي للشحن الدولي والبري والجوي" className="w-48 h-48 mx-auto mb-6 object-contain" />
              <h3 className="text-white text-2xl font-extrabold text-center mb-2">الدرع اللوجيستي للشحن</h3>
              <p className="text-brand-gold-light text-center text-sm tracking-[0.3em] mb-6 font-bold">—ALDERAA FOR SHIPPING —</p>
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                {WHY.map((w) => {
                  const Icon = w.icon;
                  return (
                    <div key={w.title} className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full gold-gradient flex items-center justify-center mb-2 shadow-lg">
                        <Icon className="w-6 h-6 text-brand-navy" strokeWidth={2.5} />
                      </div>
                      <div className="text-brand-gold-light text-sm font-bold">{w.title}</div>
                      <div className="text-white/60 text-[10px] tracking-widest">{w.subtitle}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] mb-3">خدماتنا</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4">
            حلول لوجستية متكاملة
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            نوفر كافة خدمات الشحن والنقل بأعلى معايير الجودة والأمان لتغطية كافة احتياجات العملاء
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const card = (
              <div
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 card-hover overflow-hidden"
                style={{ boxShadow: "0 4px 20px rgba(13, 27, 42, 0.05)" }}
              >
                <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-brand-gold" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-extrabold text-brand-navy mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm pb-4">{s.desc}</p>
                {"href" in s && s.href && (
                  <span className="text-brand-gold text-sm font-bold group-hover:underline">
                    اعرف المزيد ←
                  </span>
                )}
                <div className="absolute bottom-4 left-6 text-brand-gold/10 text-7xl font-black">
                  0{i + 1}
                </div>
              </div>
            );

            if ("href" in s && s.href) {
              return (
                <Link key={s.title} to={s.href} className="block">
                  {card}
                </Link>
              );
            }
            return <div key={s.title}>{card}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-blue/50 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-brand-gold-light text-sm font-bold tracking-[0.3em] mb-3">الوجهات</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            وصول بلا حدود
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            شبكة عالمية واسعة تغطي كبرى الدول والمدن مع توصيل سريع وآمن
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Row 1 */}
          <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-6 backdrop-blur hover:border-brand-gold/60 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <img src={FLAGS.sa} alt="شحن داخلي في السعودية - الدرع اللوجيستي" className="w-12 h-8 object-cover rounded shadow-lg" />
              <span className="text-xs text-brand-gold-light font-bold">KSA</span>
            </div>
            <h3 className="text-white font-extrabold text-lg mb-2">داخل المملكة</h3>
            <p className="text-white/70 text-sm leading-relaxed">تغطية شاملة لجميع مدن المملكة العربية السعودية مع شحنات يومية وسريعة.</p>
          </div>
          <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-6 backdrop-blur hover:border-brand-gold/60 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <img src={FLAGS.eg} alt="شحن بري وجوي وبحري من السعودية الى مصر - الدرع اللوجيستي" className="w-12 h-8 object-cover rounded shadow-lg" />
              <span className="text-xs text-brand-gold-light font-bold">EGY</span>
            </div>
            <h3 className="text-white font-extrabold text-lg mb-2">مصر</h3>
            <p className="text-white/70 text-sm leading-relaxed">خدمة مميزة لجميع مدن مصر بري وجو وبحر مع تخليص جمركي شامل وتوصيل للباب.</p>
          </div>
          <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-6 backdrop-blur hover:border-brand-gold/60 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <img src={FLAGS.sy} alt="شحن بري وجوي الى سوريا - الدرع اللوجيستي" className="w-12 h-8 object-cover rounded shadow-lg" />
              <span className="text-xs text-brand-gold-light font-bold">SYR</span>
            </div>
            <h3 className="text-white font-extrabold text-lg mb-2">سوريا</h3>
            <p className="text-white/70 text-sm leading-relaxed">شحن بري وجوي آمن وموثوق إلى كافة المحافظات السورية مع تسهيل جميع الإجراءات.</p>
          </div>

          {/* Row 2 */}
          <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-6 backdrop-blur hover:border-brand-gold/60 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <img src={FLAGS.sd} alt="شحن بري وجوي وبحري الى السودان - الدرع اللوجيستي" className="w-12 h-8 object-cover rounded shadow-lg" />
              <span className="text-xs text-brand-gold-light font-bold">SDN</span>
            </div>
            <h3 className="text-white font-extrabold text-lg mb-2">السودان</h3>
            <p className="text-white/70 text-sm leading-relaxed">خدمات شحن ونقل متميزة وسريعة من السعودية إلى السودان، تسليم آمن وبأفضل التكاليف.</p>
          </div>
          <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-6 backdrop-blur hover:border-brand-gold/60 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <img src={FLAGS.gulf} alt="شحن بري وجوي من السعودية الى دول الخليج العربي - الدرع اللوجيستي" className="w-12 h-8 object-cover rounded shadow-lg" />
              <span className="text-xs text-brand-gold-light font-bold">GCC</span>
            </div>
            <h3 className="text-white font-extrabold text-lg mb-2">دول الخليج العربي</h3>
            <p className="text-white/70 text-sm leading-relaxed">شحن بري وجوي سريع ومتكامل لجميع دول مجلس التعاون (الإمارات، قطر، عمان، البحرين، الكويت).</p>
          </div>
          <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-6 backdrop-blur hover:border-brand-gold/60 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <img src={FLAGS.world} alt="شحن دولي جوي وبحري من السعودية الى جميع دول العالم - الدرع اللوجيستي" className="w-12 h-8 object-cover rounded shadow-lg" />
              <span className="text-xs text-brand-gold-light font-bold">WORLD</span>
            </div>
            <h3 className="text-white font-extrabold text-lg mb-2">جميع دول العالم</h3>
            <p className="text-white/70 text-sm leading-relaxed">شحن جوي وبحري يغطي كافة القارات والدول مع تغليف ممتاز وحلول تخليص جمركي متكاملة.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((d) => (
            <div key={d.title} className="bg-brand-blue/40 border border-white/10 rounded-2xl p-6">
              <h3 className="gold-gradient font-extrabold text-lg mb-4" style={{ paddingRight: "10px" }}>{d.title}</h3>
              <ul className="space-y-2">
                {d.items.map((it) => (
                  <li key={it} className="text-white/80 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" strokeWidth={3} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] mb-3">لماذا نحن</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4">
            الاختيار الأول للشركات
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ثلاث دعائم رئيسية مبني عليها عملنا، تجعل منا الشريك المثالي لعمليات اللوجستيات الخاصة بك
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {WHY.map((w) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="relative bg-white rounded-3xl p-10 border border-gray-100 card-hover text-center"
                style={{ boxShadow: "0 10px 40px rgba(13, 27, 42, 0.06)" }}
              >
                <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-brand-gold" />
                <div className="w-24 h-24 mx-auto rounded-full gold-gradient flex items-center justify-center mb-6 shadow-xl">
                  <Icon className="w-12 h-12 text-brand-navy" strokeWidth={2.2} />
                </div>
                <div className="text-brand-gold text-xs tracking-[0.35em] font-bold mb-2">{w.subtitle}</div>
                <h3 className="text-3xl font-extrabold text-brand-navy mb-4">{w.title}</h3>
                <p className="text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { num: "+15", label: "عام من الخبرة", icon: Award },
    { num: "+5000", label: "عميل راضي", icon: Users },
    { num: "+120", label: "وجهة عالمية", icon: Globe },
    { num: "24/7", label: "دعم فوري", icon: Clock },
  ];
  return (
    <section className="stats-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full gold-gradient flex items-center justify-center mb-3 shadow-xl">
                  <Icon className="w-8 h-8 text-brand-navy" strokeWidth={2.5} />
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold gold-text mb-2">{s.num}</div>
                <div className="text-white/80 text-base">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-bg rounded-[2.5rem] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="inline-block text-brand-gold-light text-sm font-bold tracking-[0.3em] mb-3">
                تواصل معنا
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                جاهزين لخدمتك
                <br />
                <span className="gold-text">على مدار الساعة</span>
              </h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                احصل على عرض سعر فوري لشحنتك الآن، فريق الدعم الخاص بنا جاهز للرد على جميع استفساراتك
                على مدار 24 ساعة.
              </p>

              <div className="space-y-4">
                {PHONES.map((p, i) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/50 rounded-2xl p-5 transition-all group"
                  >
                    <div className="relative w-14 h-14 rounded-full gold-gradient flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-brand-navy relative z-10" strokeWidth={2.5} />
                      <span className="pulse-ring absolute inset-0 rounded-full" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs mb-1">رقم التواصل {i + 1}</div>
                      <div className="text-white font-extrabold text-xl tracking-wide group-hover:text-brand-gold-light transition-colors" dir="ltr">
                        {p}
                      </div>
                    </div>
                    <span className="mr-auto text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-[-4px] transition-all">
                      <ArrowLeft className="w-6 h-6" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-10 flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>المملكة العربية السعودية - خدمة تغطية شاملة لجميع المدن</span>
              </div>
            </div>

            {/* Left column - visual */}
            <div className="relative hidden lg:flex items-center justify-center p-16 bg-gradient-to-br from-brand-blue/40 to-brand-gold/5 border-l border-white/10">
              <div className="text-center">
                <img src={logoImg} alt="الدرع اللوجيستي للشحن - خدمات نقل لوجستي متكاملة" className="w-56 h-56 mx-auto mb-8 animate-float object-contain" />
                <h3 className="text-white text-3xl font-extrabold mb-2">الدرع اللوجيستي للشحن</h3>
                <p className="gold-text text-sm tracking-[0.3em] font-bold">— ALDERAA FOR SHIPPING —</p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/70 text-sm leading-loose">
                    نقدم حلولاً لوجستية متكاملة من و إلى جميع أنحاء العالم. الجودة، الأمان، والسرعة
                    هي هدفنا الدائم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCall() {
  const whatsappUrl = `https://wa.me/966${PRIMARY_PHONE.replace(/^0/, "")}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-6 left-6 z-40 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white relative z-10" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.07 1.001 11.996 1c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.393 1.357 4.869l-.993 3.629 3.567-.946zm10.707-5.32c-.29-.146-1.72-.85-1.987-.948-.268-.099-.463-.147-.659.146-.196.293-.755.948-.927 1.144-.171.195-.343.219-.633.073-.29-.147-1.226-.452-2.336-1.444-.864-.772-1.448-1.724-1.618-2.016-.17-.293-.018-.452.128-.598.131-.131.29-.341.436-.512.145-.17.194-.292.292-.487.097-.195.048-.366-.024-.512-.072-.146-.659-1.586-.902-2.17-.237-.57-.497-.493-.659-.501-.17-.008-.366-.01-.56-.01-.196 0-.512.073-.78.366-.269.293-1.025 1.002-1.025 2.441 0 1.439 1.048 2.83 1.194 3.025.147.195 2.062 3.149 4.996 4.417.698.302 1.243.482 1.667.617.7.223 1.338.192 1.843.116.562-.085 1.72-.703 1.963-1.382.244-.679.244-1.261.171-1.382-.073-.12-.269-.195-.558-.34z" />
      </svg>
      <span className="pulse-ring-whatsapp absolute inset-0 rounded-full" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="شعار شركة الدرع اللوجيستي للشحن" className="w-14 h-14 object-contain" />
              <div>
                <div className="text-white font-extrabold text-lg">الدرع اللوجيستي</div>
                <div className="gold-text text-[10px] tracking-[0.25em] font-bold">ALDERAA FOR SHIPPING</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              الدرع اللوجيستي للشحن - شركة شحن دولي ومحلي متخصصة في خدمات الشحن البري والجوي والبحري والتخليص الجمركي والتخزين في الرياض والمملكة العربية السعودية.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.title}>
                  {"href" in s && s.href ? (
                    <Link to={s.href} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                      <ChevronLeft className="w-4 h-4 text-brand-gold" /> {s.title}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ChevronLeft className="w-4 h-4 text-brand-gold" /> {s.title}
                    </span>
                  )}
                </li>
              ))}
              {SERVICES.slice(4).map((s) => (
                <li key={s.title} className="flex items-center gap-2 hover:text-brand-gold transition-colors cursor-pointer">
                  <ChevronLeft className="w-4 h-4 text-brand-gold" /> {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                  <ChevronLeft className="w-4 h-4 text-brand-gold" /> الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/من-نحن" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                  <ChevronLeft className="w-4 h-4 text-brand-gold" /> من نحن
                </Link>
              </li>
              <li>
                <Link to="/الأسئلة-الشائعة" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                  <ChevronLeft className="w-4 h-4 text-brand-gold" /> الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <NavHashLink to="/#contact" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                  <ChevronLeft className="w-4 h-4 text-brand-gold" /> تواصل معنا
                </NavHashLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-sm">
              {PHONES.slice(0, 3).map((p) => (
                <a key={p} href={`tel:${p}`} className="flex items-center gap-2 hover:text-brand-gold transition-colors" >
                  <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" /> {p}
                </a>
              ))}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span>المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© 2026 الدرع اللوجيستي للشحن. جميع الحقوق محفوظة.</p>
          <div className="gold-text text-sm font-bold tracking-[0.25em]">SAFETY · SPEED · COMMITMENT</div>
        </div>
      </div>
    </footer>
  );
}

/* ========== Homepage SEO Content Section ========== */

function SEOContentSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
              الدرع اللوجيستي: خيارك الأول بين شركات الشحن في الرياض
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              إذا كنت تبحث عن <strong>شركة شحن في الرياض</strong> موثوقة وسريعة، فإن شركة <strong>الدرع اللوجيستي للشحن</strong> تقدم لك الحلول اللوجستية المتكاملة التي تلبي كافة احتياجاتك. نحن نتميز بتقديم خدمات الشحن البري، الجوي، والبحري، بالإضافة إلى التخليص الجمركي ونقل وتخزين الأثاث والبضائع بأعلى معايير الأمان والسرعة.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              باعتبارنا واحدة من أبرز <strong>شركات الشحن بالرياض</strong>، نلتزم بتسهيل كافة إجراءات الشحن من الباب إلى الباب. سواء كنت ترغب في شحن بضائع تجارية أو أغراض شخصية إلى مصر، سوريا، السودان، دول الخليج العربي، أو أي وجهة أخرى حول العالم، فإننا نضمن لك تجربة شحن خالية من المتاعب وبأسعار تنافسية تناسب الجميع.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-brand-navy mb-4">لماذا نحن أفضل شركة شحن بالرياض؟</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                <span>تغطية شاملة لكافة أحياء الرياض وجميع مدن ومحافظات المملكة العربية السعودية.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                <span>أسطول شاحنات حديث ومجهز بالكامل لعمليات الشحن البري الدولي والمحلي.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                <span>تخليص جمركي سريع وشامل عبر كافة الموانئ والمطارات والمنافذ البرية بالمملكة.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                <span>خدمات تعبئة وتغليف احترافية ومجانية لبعض الوجهات لضمان سلامة الشحنات.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== Homepage ========== */

function HomePage() {
  return (
    <>
      <SEOHead
        title="شركة شحن في الرياض | الدرع اللوجيستي للشحن البري والجوي والبحري"
        description="الدرع اللوجيستي هي أفضل شركة شحن في الرياض والمملكة. نقدم خدمات شحن بري وجوي وبحري من السعودية إلى مصر والخليج وسوريا والسودان وكافة دول العالم بأعلى معايير الأمان والسرعة. اتصل بنا الآن!"
        canonical="https://alderaa-logistics.com/"
      />
      <Hero />
      <ServicesSection />
      <Stats />
      <Destinations />
      <Why />
      <TestimonialsSection />
      <SEOContentSection />
      <Contact />
    </>
  );
}

/* ========== App Layout ========== */

export default function App() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.classList.add("preloader-hidden");
      preloader.addEventListener("transitionend", () => {
        preloader.remove();
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/شحن-جوي" element={<AirFreightPage />} />
          <Route path="/شحن-بحري" element={<SeaFreightPage />} />
          <Route path="/شحن-بري" element={<LandFreightPage />} />
          <Route path="/تخليص-جمركي" element={<CustomsClearancePage />} />
          <Route path="/من-نحن" element={<AboutPage />} />
          <Route path="/الأسئلة-الشائعة" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
