"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/* ───── PROPERTY PORTFOLIO ───── */
const productLinesTr = {
  wind: [
    { name: "Lara Barut Collection", capacity: "Lara", location: "Ultra All-Inc", status: "Booking 9.5" },
    { name: "Acanthus Cennet", capacity: "Side", location: "Ultra All-Inc", status: "Booking 9.5" },
    { name: "Arum Barut Collection", capacity: "Side", location: "Ultra All-Inc", status: "Booking 9.3" },
    { name: "Anda Barut Collection", capacity: "Didim", location: "Ultra All-Inc", status: "Booking 9.7" },
  ],
  hydro: [
    { name: "Barut Hemera", capacity: "Side", location: "All-Inclusive", status: "Agoda 9.5" },
    { name: "Barut GOIA", capacity: "Side", location: "All-Inclusive", status: "Aile Odakli" },
    { name: "Barut B Suites", capacity: "Evrenseki", location: "All-Inc Suite", status: "Booking 9.0" },
    { name: "TUI BLUE Andiz", capacity: "Side", location: "Yetiskin 16+", status: "Booking 9.5" },
  ],
  geothermal: [
    { name: "BAYOU Villas Lara", capacity: "24 villa", location: "Ultra Premium", status: "Forbes Verified" },
    { name: "BAYOU Villas Didim", capacity: "14 villa", location: "Ultra Premium", status: "Forbes Verified" },
  ],
};

const productLinesEn = {
  wind: [
    { name: "Lara Barut Collection", capacity: "Lara", location: "Ultra All-Inc", status: "Booking 9.5" },
    { name: "Acanthus Cennet", capacity: "Side", location: "Ultra All-Inc", status: "Booking 9.5" },
    { name: "Arum Barut Collection", capacity: "Side", location: "Ultra All-Inc", status: "Booking 9.3" },
    { name: "Anda Barut Collection", capacity: "Didim", location: "Ultra All-Inc", status: "Booking 9.7" },
  ],
  hydro: [
    { name: "Barut Hemera", capacity: "Side", location: "All-Inclusive", status: "Agoda 9.5" },
    { name: "Barut GOIA", capacity: "Side", location: "All-Inclusive", status: "Family-Focused" },
    { name: "Barut B Suites", capacity: "Evrenseki", location: "All-Inc Suite", status: "Booking 9.0" },
    { name: "TUI BLUE Andiz", capacity: "Side", location: "Adults 16+", status: "Booking 9.5" },
  ],
  geothermal: [
    { name: "BAYOU Villas Lara", capacity: "24 villas", location: "Ultra Premium", status: "Forbes Verified" },
    { name: "BAYOU Villas Didim", capacity: "14 villas", location: "Ultra Premium", status: "Forbes Verified" },
  ],
};

/* ───── DIGITAL TRANSFORMATION OPPORTUNITIES ───── */
const megaProjectsTr = [
  {
    name: "Birlesik Web Platformu",
    capacity: "9+ Site → 1",
    investment: "Acil Oncelik",
    status: "Teklif",
    color: "#e6007e",
    details: [
      "baruthotels.com + 8 microsite tek platformda birlestirme",
      "Otel detay sayfalari (su an 404 donuyor) olusturma",
      "SEO fragmentasyonunun cozulmesi — tek domain otoritesi",
      "Tesis karsilastirma araci ve direkt rezervasyon entegrasyonu",
      "4 dilde (TR/EN/DE/RU) birlesik icerik yonetimi",
    ],
    aiValue:
      "Birlesik platform ile domain otoritesi 3-4x artis. AI destekli otel karsilastirma ve kisisel oneri motoru ile direkt rezervasyon %25+ artis.",
  },
  {
    name: "Dijital Misafir Deneyimi",
    capacity: "300K Misafir",
    investment: "Yuksek ROI",
    status: "Teklif",
    color: "#c9a84c",
    details: [
      "AI destekli dijital concierge — WhatsApp + uygulama",
      "Misafir tercih profili ve kisisellestirmis oneri motoru",
      "Oda secimi, restoran rezervasyonu, spa randevusu dijital",
      "Check-in/check-out dijitallestirilmesi tum otellere yayilma",
    ],
    aiValue:
      "AI kisisellestirme ile misafir memnuniyeti 0.3+ puan artisi. %50 tekrar oranini %55'e tasima potansiyeli. Misafir basina gelir %12 artis.",
  },
  {
    name: "Barut Club Digital Portal",
    capacity: "5 Kademe",
    investment: "Sadakat",
    status: "Teklif",
    color: "#3b82f6",
    details: [
      "Barut Club Card'in tam dijital platforma tasima",
      "Puan takibi, kademe ilerleme, ozel teklifler mobil app",
      "Misafir gecmisi ve tercih analizi ile kisisellestirme",
      "Dijital odul kullanim ve partner entegrasyonlari",
    ],
    aiValue:
      "AI tabanlı sadakat analizi: churn tahmini, kisisel kampanya onerileri. Dijital platform ile sadakat programi katilim %40 artis.",
  },
  {
    name: "Gelir Yonetim Sistemi",
    capacity: "2,800 Oda",
    investment: "Stratejik",
    status: "Vizyon",
    color: "#a855f7",
    details: [
      "10 tesiste AI destekli dinamik fiyatlama",
      "OTA kanal yonetimi optimizasyonu",
      "Doluluk tahmini ve talep forecasting",
      "RevPAR maksimizasyonu — segment bazli analiz",
    ],
    aiValue:
      "AI dinamik fiyatlama ile RevPAR %8-15 artis. Optimal kanal dagılımı ile OTA komisyon maliyeti %10 azalma. Yillik gelir artisi: milyonlarca TL.",
  },
  {
    name: "Operasyon & F&B Optimizasyonu",
    capacity: "50+ Restoran",
    investment: "Operasyonel",
    status: "Teklif",
    color: "#06b6d4",
    details: [
      "50+ restoran ve barin dijital yonetimi",
      "F&B talep tahmini ile gida israfi azaltma",
      "Personel planlama optimizasyonu — shift yonetimi",
      "Enerji tuketim izleme ve tasarruf onerileri",
    ],
    aiValue:
      "AI ile F&B gida israfi %20 azalma. Personel planlama optimizasyonu %15 verimlilik artisi. Enerji izleme ile yillik %10 tasarruf.",
  },
  {
    name: "Surdurulebilirlik & ESG Platformu",
    capacity: "7 ISO + GSTC",
    investment: "Marka Degeri",
    status: "Teklif",
    color: "#10b981",
    details: [
      "We Care All programinin dijital platforma tasinmasi",
      "7 ISO sertifikasi ve Travelife Gold uyum takibi",
      "Karbon ayak izi hesabi ve cevresel etki dashboardu",
      "Side Antik Kenti sponsorlugu ve kultur mirasi sayfasi",
    ],
    aiValue:
      "Otomatik surdurulebilirlik raporlama: enerji, su, karbon metrikleri. ESG skoru ile uluslararasi misafir ve kurumsal etkinlik cekiciligi artisi.",
  },
];

const megaProjectsEn = [
  {
    name: "Unified Web Platform",
    capacity: "9+ Sites → 1",
    investment: "Urgent Priority",
    status: "Proposal",
    color: "#e6007e",
    details: [
      "Merge baruthotels.com + 8 microsites into single platform",
      "Build hotel detail pages (currently return 404)",
      "Fix SEO fragmentation — single domain authority",
      "Property comparison tool and direct booking integration",
      "Unified content management in 4 languages (TR/EN/DE/RU)",
    ],
    aiValue:
      "Unified platform increases domain authority 3-4x. AI-powered hotel comparison and personal recommendation engine drives 25%+ direct booking increase.",
  },
  {
    name: "Digital Guest Experience",
    capacity: "300K Guests",
    investment: "High ROI",
    status: "Proposal",
    color: "#c9a84c",
    details: [
      "AI-powered digital concierge — WhatsApp + app",
      "Guest preference profiles and personalized recommendation engine",
      "Digital room selection, restaurant reservation, spa booking",
      "Digital check-in/check-out rollout across all properties",
    ],
    aiValue:
      "AI personalization drives 0.3+ point satisfaction increase. Potential to push 50% repeat rate to 55%. Revenue per guest up 12%.",
  },
  {
    name: "Barut Club Digital Portal",
    capacity: "5 Tiers",
    investment: "Loyalty",
    status: "Proposal",
    color: "#3b82f6",
    details: [
      "Full digital migration of Barut Club Card program",
      "Points tracking, tier progression, exclusive offers via mobile app",
      "Guest history and preference analysis for personalization",
      "Digital reward redemption and partner integrations",
    ],
    aiValue:
      "AI-powered loyalty analytics: churn prediction, personalized campaign recommendations. Digital platform drives 40% loyalty program participation increase.",
  },
  {
    name: "Revenue Management System",
    capacity: "2,800 Rooms",
    investment: "Strategic",
    status: "Vision",
    color: "#a855f7",
    details: [
      "AI-powered dynamic pricing across 10 properties",
      "OTA channel management optimization",
      "Occupancy forecasting and demand prediction",
      "RevPAR maximization — segment-based analysis",
    ],
    aiValue:
      "AI dynamic pricing drives 8-15% RevPAR increase. Optimal channel distribution reduces OTA commission costs by 10%. Annual revenue boost: millions of TL.",
  },
  {
    name: "Operations & F&B Optimization",
    capacity: "50+ Restaurants",
    investment: "Operational",
    status: "Proposal",
    color: "#06b6d4",
    details: [
      "Digital management of 50+ restaurants and bars",
      "F&B demand forecasting to reduce food waste",
      "Staff planning optimization — shift management",
      "Energy consumption monitoring and savings recommendations",
    ],
    aiValue:
      "AI reduces F&B food waste by 20%. Staff planning optimization drives 15% efficiency gain. Energy monitoring yields 10% annual savings.",
  },
  {
    name: "Sustainability & ESG Platform",
    capacity: "7 ISO + GSTC",
    investment: "Brand Value",
    status: "Proposal",
    color: "#10b981",
    details: [
      "Digitize We Care All sustainability program",
      "7 ISO certification and Travelife Gold compliance tracking",
      "Carbon footprint calculator and environmental impact dashboard",
      "Side Ancient City sponsorship and cultural heritage page",
    ],
    aiValue:
      "Automated sustainability reporting: energy, water, carbon metrics. ESG score boosts international guest and corporate event appeal.",
  },
];

/* ───── WEBSITE FRAGMENTATION ───── */
const vedasDataTr = {
  coverage: "baruthotels.com + 8 microsite",
  subscribers: "9+ Ayri Domain",
  population: "404 Hatasi",
  area: "SEO Dagilmis",
  investment2025: "Acil Cozum",
  lossRate: "Parcalanmis dijital varlik",
  smartMeters: "Birlesik platform ile cozum",
  labels: {
    investment: "Oncelik",
    subscribers: "Tespit",
    lossTarget: "Sorun",
    servicePopulation: "Durum",
  },
  aiModule: "DIJITAL COZUM MODULU:",
  aiText:
    "baruthotels.com ana sitesinde otel detay sayfalari 404 donuyor — misafirler barutlara.com, barutarum.com gibi ayri domainlere yonlendiriliyor. Bu 9+ domain yapisi SEO otoritesini parcaliyor, kullanici yolculugunu bozuyor ve bakim maliyetini artiriyor. Birlesik Next.js platformu ile: tek domain otoritesi, zengin otel detay sayfalari, karsilastirma araci, 4 dilde icerik ve direkt rezervasyon. Organik trafikte %60+ artis beklenir.",
};

const vedasDataEn = {
  coverage: "baruthotels.com + 8 microsites",
  subscribers: "9+ Separate Domains",
  population: "404 Errors",
  area: "SEO Diluted",
  investment2025: "Urgent Solution",
  lossRate: "Fragmented digital presence",
  smartMeters: "Unified platform solution",
  labels: {
    investment: "Priority",
    subscribers: "Findings",
    lossTarget: "Issue",
    servicePopulation: "Status",
  },
  aiModule: "DIGITAL SOLUTION MODULE:",
  aiText:
    "Hotel detail pages on baruthotels.com return 404 — guests are redirected to separate domains like barutlara.com, barutarum.com. This 9+ domain structure fragments SEO authority, breaks user journey, and increases maintenance costs. Unified Next.js platform delivers: single domain authority, rich hotel detail pages, comparison tool, 4-language content, and direct booking. Expected 60%+ organic traffic increase.",
};

/* ───── GUEST EXPERIENCE & LOYALTY ───── */
const healthcareProjectsTr = [
  {
    name: "Barut Club Card Programi",
    beds: "5 kademe (Premier → Platinum+)",
    area: "Tum Oteller",
    investment: "Sadakat",
    status: "Dijitallestirme Bekliyor",
    note: "Puan takibi, ozel teklifler, dijital odul sistemi",
  },
  {
    name: "Misafir Kisisellestirme",
    beds: "300K+ profil",
    area: "%50 Tekrar",
    investment: "Yuksek ROI",
    status: "AI Entegrasyonu",
    note: "Tercih gecmisi, oda/restoran/spa onerileri, dijital concierge",
  },
  {
    name: "Dijital Concierge Hizmeti",
    beds: "WhatsApp + App",
    area: "7/24 Erisim",
    investment: "Deneyim",
    status: "Genisleme Bekliyor",
    note: "Collection'da aktif, tum otellere yayilma ve AI guclendirme",
  },
];

const healthcareProjectsEn = [
  {
    name: "Barut Club Card Program",
    beds: "5 tiers (Premier → Platinum+)",
    area: "All Hotels",
    investment: "Loyalty",
    status: "Awaiting Digitization",
    note: "Points tracking, exclusive offers, digital reward system",
  },
  {
    name: "Guest Personalization",
    beds: "300K+ profiles",
    area: "50% Repeat",
    investment: "High ROI",
    status: "AI Integration",
    note: "Preference history, room/restaurant/spa recommendations, digital concierge",
  },
  {
    name: "Digital Concierge Service",
    beds: "WhatsApp + App",
    area: "24/7 Access",
    investment: "Experience",
    status: "Expansion Pending",
    note: "Active at Collection properties, rollout to all hotels with AI enhancement",
  },
];

/* ───── PROBLEMS & DIGITAL SOLUTIONS ───── */
const criticalProblemsTr = [
  {
    area: "Web Sitesi Fragmentasyonu",
    icon: "\uD83C\uDF10",
    severity: "Kritik",
    problems: [
      "9+ ayri domain — baruthotels.com + 8 microsite parcalanmis SEO",
      "Ana sitede otel detay sayfalari 404 donuyor — kullanici yolculugu kirik",
      "Tesis karsilastirma imkani yok — misafir oteller arasi gezinemiyor",
      "Booking akisi kesintili — farkli domainlere atliyor",
    ],
    solutions: [
      "Next.js ile birlesik, 4 dilli tek platform gelistirme",
      "Zengin otel detay sayfalari: oda tipleri, restoranlar, ozellikler",
      "Akilli tesis karsilastirma araci ve filtreleme sistemi",
      "Tek platformda direkt rezervasyon entegrasyonu",
    ],
    roi: "Domain otoritesi 3-4x artis + direkt rezervasyon %25+ artis",
  },
  {
    area: "Misafir Deneyimi & Kisisellestirme",
    icon: "\uD83C\uDFA8",
    severity: "Yuksek",
    problems: [
      "300K misafirin tercih verisi dijital olarak analiz edilmiyor",
      "%50 tekrar orani dijital sadakat programiyla desteklenmiyor",
      "WhatsApp concierge sadece Collection'da — diger otellerde yok",
      "Misafir profili oteller arasi paylasmiyor — her tesiste sifirdan",
    ],
    solutions: [
      "AI misafir profilleme: tercih, davranis ve memnuniyet analizi",
      "Barut Club Card dijital portal — mobil app ile puan/odul yonetimi",
      "Tum otellere AI destekli dijital concierge yayilimi",
      "Birlesik misafir profili: tum Barut otelleri genelinde tek profil",
    ],
    roi: "Tekrar orani %55'e yukselis + misafir basina gelir %12 artis",
  },
  {
    area: "Gelir Yonetimi & Kanal Optimizasyonu",
    icon: "\uD83D\uDCB0",
    severity: "Yuksek",
    problems: [
      "10 tesiste dinamik fiyatlama optimizasyonu yetersiz",
      "OTA bagimliligi yuksek — direkt rezervasyon orani dusuk",
      "Tesis bazli gelir analizi ve karsilastirmali performans eksik",
      "Segment bazli fiyatlama stratejisi (Collection vs Standard) dijitallesemedi",
    ],
    solutions: [
      "AI destekli dinamik fiyatlama — talep/musaitlik/rekabet bazli",
      "Birlesik platformda direkt rezervasyon tesvik — en iyi fiyat garantisi",
      "10 tesis karsilastirmali RevPAR dashboardu",
      "Segment bazli fiyatlama optimizasyonu: Collection premium pozisyonlama",
    ],
    roi: "RevPAR %8-15 artis + OTA komisyon maliyeti %10 azalma",
  },
  {
    area: "Icerik & Dijital Pazarlama",
    icon: "\uD83D\uDCF1",
    severity: "Orta-Yuksek",
    problems: [
      "55 yillik miras ve sanat felsefesi dijitalde yeterince one cikmiyor",
      "Side Antik Kenti sponsorlugu ve kulturel baglar web'e yansimimiyor",
      "Blog/destinasyon rehberi yok — SEO icin icerik derinligi yetersiz",
      "Barut Collection vs Standard farki dijitalde net anlatilmiyor",
    ],
    solutions: [
      "Barut hikayesi: aile mirasi, sanat felsefesi, interaktif zaman cigizisi",
      "Side, Lara, Didim destinasyon rehberleri — kulturel turizm icerigi",
      "Collection vs Standard: detayli karsilastirma sayfasi ve gorsel anlatim",
      "AI destekli icerik uretimi: blog, misafir hikayeleri, mevsimsel kampanya",
    ],
    roi: "Organik trafik %40 artis + marka bilinirlik guclenme",
  },
];

const criticalProblemsEn = [
  {
    area: "Website Fragmentation",
    icon: "\uD83C\uDF10",
    severity: "Critical",
    problems: [
      "9+ separate domains — baruthotels.com + 8 microsites with fragmented SEO",
      "Hotel detail pages return 404 on main site — user journey is broken",
      "No property comparison — guests can't browse between hotels",
      "Booking flow interrupted — jumps between different domains",
    ],
    solutions: [
      "Build unified, 4-language single platform with Next.js",
      "Rich hotel detail pages: room types, restaurants, amenities",
      "Smart property comparison tool and filtering system",
      "Single-platform direct booking integration",
    ],
    roi: "Domain authority 3-4x increase + 25%+ direct booking growth",
  },
  {
    area: "Guest Experience & Personalization",
    icon: "\uD83C\uDFA8",
    severity: "High",
    problems: [
      "300K guests' preference data not digitally analyzed",
      "50% repeat rate not supported by digital loyalty program",
      "WhatsApp concierge only at Collection — not at other hotels",
      "Guest profile not shared across properties — starts from zero each stay",
    ],
    solutions: [
      "AI guest profiling: preference, behavior, and satisfaction analysis",
      "Barut Club Card digital portal — mobile app for points/rewards",
      "AI-powered digital concierge rollout across all properties",
      "Unified guest profile: single profile across all Barut hotels",
    ],
    roi: "Repeat rate to 55% + 12% revenue per guest increase",
  },
  {
    area: "Revenue Management & Channel Optimization",
    icon: "\uD83D\uDCB0",
    severity: "High",
    problems: [
      "Dynamic pricing optimization insufficient across 10 properties",
      "High OTA dependency — low direct booking ratio",
      "Property-level revenue analysis and comparative performance lacking",
      "Segment-based pricing strategy (Collection vs Standard) not digitized",
    ],
    solutions: [
      "AI-powered dynamic pricing — demand/availability/competition based",
      "Drive direct bookings on unified platform — best rate guarantee",
      "10-property comparative RevPAR dashboard",
      "Segment-based pricing optimization: Collection premium positioning",
    ],
    roi: "RevPAR 8-15% increase + OTA commission cost 10% reduction",
  },
  {
    area: "Content & Digital Marketing",
    icon: "\uD83D\uDCF1",
    severity: "Medium-High",
    problems: [
      "55-year heritage and art philosophy not sufficiently showcased digitally",
      "Side Ancient City sponsorship and cultural ties not reflected on web",
      "No blog/destination guides — content depth insufficient for SEO",
      "Collection vs Standard difference not clearly communicated digitally",
    ],
    solutions: [
      "Barut story: family heritage, art philosophy, interactive timeline",
      "Side, Lara, Didim destination guides — cultural tourism content",
      "Collection vs Standard: detailed comparison page with visual storytelling",
      "AI-powered content generation: blog, guest stories, seasonal campaigns",
    ],
    roi: "40% organic traffic increase + brand awareness strengthening",
  },
];

/* ───── GROWTH ROADMAP ───── */
const growthPhasesTr = [
  { label: "Kurulus", mw: 1971, pct: 10, color: "#8b1a4a", detail: "Cennet Hotel — Side'da 36 odayla basladi" },
  { label: "Hemera", mw: 1990, pct: 25, color: "#e6007e", detail: "Barut Hemera Side'da acildi" },
  { label: "Arum", mw: 1996, pct: 40, color: "#c9a84c", detail: "Barut Arum Side'da acildi" },
  { label: "Lara & Collection", mw: 2005, pct: 60, color: "#3b82f6", detail: "Lara Barut ve Collection konsepti" },
  { label: "BAYOU Villas", mw: 2022, pct: 80, color: "#a855f7", detail: "Ultra-luks villa segmentine giris" },
  { label: "Anda & Bugun", mw: 2024, pct: 100, color: "#10b981", detail: "Didim acilimi, 10 tesis, Booking 9.7" },
];

const growthPhasesEn = [
  { label: "Founded", mw: 1971, pct: 10, color: "#8b1a4a", detail: "Cennet Hotel — started with 36 rooms in Side" },
  { label: "Hemera", mw: 1990, pct: 25, color: "#e6007e", detail: "Barut Hemera opened in Side" },
  { label: "Arum", mw: 1996, pct: 40, color: "#c9a84c", detail: "Barut Arum opened in Side" },
  { label: "Lara & Collection", mw: 2005, pct: 60, color: "#3b82f6", detail: "Lara Barut and Collection concept" },
  { label: "BAYOU Villas", mw: 2022, pct: 80, color: "#a855f7", detail: "Ultra-luxury villa segment entry" },
  { label: "Anda & Today", mw: 2024, pct: 100, color: "#10b981", detail: "Didim expansion, 10 properties, Booking 9.7" },
];

export default function TurkerlerVision() {
  const { lang, t } = useLang();

  const operationalPlants = lang === "tr" ? productLinesTr : productLinesEn;
  const megaProjects = lang === "tr" ? megaProjectsTr : megaProjectsEn;
  const vedasData = lang === "tr" ? vedasDataTr : vedasDataEn;
  const healthcareProjects = lang === "tr" ? healthcareProjectsTr : healthcareProjectsEn;
  const criticalProblems = lang === "tr" ? criticalProblemsTr : criticalProblemsEn;
  const growthPhases = lang === "tr" ? growthPhasesTr : growthPhasesEn;

  const totalOperational = lang === "tr" ? "10 Tesis — ~2,800 Oda — 3 Bolge" : "10 Properties — ~2,800 Rooms — 3 Regions";

  return (
    <section id="turkerler" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">
            {t.turkerler.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.turkerler.titleA}
            <span className="text-gradient">{t.turkerler.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-3xl mx-auto text-sm">
            {t.turkerler.subtitle}
          </p>
        </motion.div>

        {/* ───── PROPERTY PORTFOLIO ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono text-foreground/40 tracking-wider">
              {t.turkerler.portfolio} &mdash; {totalOperational}
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              ~2,800 {lang === "tr" ? "Oda" : "Rooms"}
            </span>
          </div>

          {/* Collection */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-pink-400" />
              <span className="text-xs font-semibold text-pink-400">
                {t.turkerler.wind} &mdash; Ultra All-Inclusive
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {operationalPlants.wind.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-pink-500/5 border border-pink-500/10 text-center">
                  <div className="text-[10px] font-medium truncate">{p.name}</div>
                  <div className="text-xs font-bold text-pink-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Hotels */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold text-amber-400">
                {t.turkerler.hydro} &mdash; All-Inclusive
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {operationalPlants.hydro.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-amber-500/5 border border-amber-500/10 text-center">
                  <div className="text-[10px] font-medium">{p.name}</div>
                  <div className="text-xs font-bold text-amber-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* BAYOU & TUI */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold text-blue-400">
                {t.turkerler.geothermal} &mdash; 38 Villa
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {operationalPlants.geothermal.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-blue-500/5 border border-blue-500/10 text-center">
                  <div className="text-[10px] font-medium">{p.name}</div>
                  <div className="text-xs font-bold text-blue-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.status}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ───── GROWTH ROADMAP ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <h3 className="text-sm font-mono text-foreground/40 mb-6 tracking-wider">
            {t.turkerler.growth}
          </h3>
          <div className="space-y-3">
            {growthPhases.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-36 shrink-0 text-right">
                  <span className="text-xs text-foreground/30">{g.label}</span>
                </div>
                <div className="flex-1 h-7 bg-surface-light rounded overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded flex items-center px-2 min-w-[60px]"
                    style={{ backgroundColor: g.color + "25" }}
                  >
                    <span className="text-[11px] font-bold whitespace-nowrap" style={{ color: g.color }}>
                      {g.mw}
                    </span>
                  </motion.div>
                </div>
                <div className="w-48 shrink-0 text-[10px] text-foreground/25 hidden lg:block">
                  {g.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ───── DIGITAL TRANSFORMATION OPPORTUNITIES ───── */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            {t.turkerler.megaTitle}
            <span className="text-gradient">{t.turkerler.megaTitleB}</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {megaProjects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl bg-surface border border-border hover:border-opacity-50 transition-all"
                style={{ borderColor: p.color + "00" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = p.color + "40";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: p.color + "15", color: p.color }}>
                    {p.capacity}
                  </span>
                  <span className="text-[10px] text-foreground/30">{p.status}</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{p.name}</h4>
                <ul className="space-y-1 mb-3">
                  {p.details.slice(0, 3).map((d) => (
                    <li key={d} className="text-[11px] text-foreground/40 flex items-start gap-1.5">
                      <span className="text-foreground/20 mt-0.5 shrink-0">&bull;</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-border">
                  <div className="text-[10px] font-mono text-primary/60 mb-1">{t.turkerler.aiContribution}</div>
                  <p className="text-[10px] text-foreground/35 leading-relaxed">{p.aiValue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───── WEBSITE FRAGMENTATION ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-gradient-to-br from-pink-500/5 to-amber-500/5 border border-pink-500/20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{"\uD83C\uDF10"}</span>
            <div>
              <h3 className="font-bold">{t.turkerler.vedasTitle}</h3>
              <p className="text-xs text-foreground/40">
                {vedasData.coverage} &middot; {vedasData.subscribers} &middot; {vedasData.area}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {[
              { label: vedasData.labels.investment, value: vedasData.investment2025, color: "#e6007e" },
              { label: vedasData.labels.subscribers, value: vedasData.subscribers, color: "#c9a84c" },
              { label: vedasData.labels.lossTarget, value: vedasData.lossRate, color: "#ef4444" },
              { label: vedasData.labels.servicePopulation, value: vedasData.population, color: "#3b82f6" },
            ].map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-surface/50 border border-border/50 text-center">
                <div className="text-[10px] text-foreground/30 uppercase tracking-wider">{m.label}</div>
                <div className="text-sm font-bold mt-1" style={{ color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-surface/50 border border-border/50">
            <div className="text-[10px] font-mono text-pink-500/60 mb-2">{vedasData.aiModule}</div>
            <p className="text-xs text-foreground/50 leading-relaxed">
              {vedasData.aiText}
            </p>
          </div>
        </motion.div>

        {/* ───── GUEST EXPERIENCE & LOYALTY ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span>{"\uD83C\uDFA8"}</span> {t.turkerler.healthcareTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {healthcareProjects.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <h4 className="font-semibold text-sm mb-3">{h.name}</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.capacity}</span><span className="font-medium">{h.beds}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.area}</span><span className="font-medium">{h.area}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.investment}</span><span className="font-medium">{h.investment}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.status}</span><span className="text-primary font-medium">{h.status}</span></div>
                </div>
                <div className="mt-3 pt-3 border-t border-border text-[10px] text-foreground/30">{h.note}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-lg bg-surface border border-border">
            <div className="text-[10px] font-mono text-foreground/30 mb-1">{t.turkerler.aiContribution}</div>
            <p className="text-xs text-foreground/40">
              {t.turkerler.healthcareAi}
            </p>
          </div>
        </motion.div>

        {/* ───── CRITICAL PROBLEMS & SOLUTIONS ───── */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8">
            {t.turkerler.problemsTitle}
            <span className="text-gradient">{t.turkerler.problemsTitleB}</span>
          </h3>
          <div className="space-y-4">
            {criticalProblems.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="font-bold text-sm flex-1">{item.area}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.severity === "Kritik" || item.severity === "Critical" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {item.severity}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono text-red-400/50 mb-2 tracking-wider">{t.turkerler.currentIssues}</div>
                    <ul className="space-y-1.5">
                      {item.problems.map((p) => (
                        <li key={p} className="text-[11px] text-foreground/40 flex items-start gap-2">
                          <span className="text-red-400/40 shrink-0">&times;</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-primary/50 mb-2 tracking-wider">{t.turkerler.aiSolution}</div>
                    <ul className="space-y-1.5">
                      {item.solutions.map((s) => (
                        <li key={s} className="text-[11px] text-foreground/50 flex items-start gap-2">
                          <span className="text-primary/60 shrink-0">&check;</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                  <span className="text-[10px] font-mono text-accent/50">ROI:</span>
                  <span className="text-xs text-accent font-medium">{item.roi}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
