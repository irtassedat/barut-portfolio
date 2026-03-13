"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en";

const dict = {
  tr: {
    nav: [
      { href: "#hero", label: "Ana Sayfa" },
      { href: "#about", label: "Hakkimda" },
      { href: "#turkerler", label: "Barut Vizyon" },
      { href: "#market", label: "Analiz" },
      { href: "#architecture", label: "Mimari" },
      { href: "#demo", label: "Demo" },
      { href: "#projects", label: "Projeler" },
      { href: "#tech", label: "Teknolojiler" },
      { href: "#contact", label: "Iletisim" },
    ],
    hero: {
      badge: "Barut Hotels icin hazirlanmistir",
      titleA: "55 Yillik Misafirperverlik Mirasi Icin",
      titleB: "Dijital Donusum Vizyonu",
      desc: "10 tesis, ~2.800 oda, ~300.000 yillik misafir, %50 tekrar misafir orani, 7 ISO sertifikasi, 3 Conde Nast Johansens onayli otel ve 9+ ayri web sitesini inceledim. Birlesik dijital platform, misafir deneyimi ve AI tabanli otel yonetim sistemi icin ozel cozum modulleri tasarladim.",
      cta1: "Analiz Raporunu Incele",
      cta2: "Dashboard Prototipi",
      data: {
        header: "BARUT HOTELS — TEMEL VERILER",
        metrics: [
          { label: "Toplam Tesis", value: "10", sub: "8 otel + 2 villa" },
          { label: "Toplam Oda", value: "~2,800", sub: "~6,500 yatak kapasitesi" },
          { label: "Yillik Misafir", value: "300K+", sub: "%50 tekrar misafir" },
          { label: "Calisan", value: "~3,500", sub: "55 yillik deneyim" },
        ],
        sub: [
          { label: "Bolge", value: "Side + Lara + Didim" },
          { label: "Ort. Puan", value: "9.3+ Booking" },
          { label: "ISO Sertifika", value: "7 Farkli" },
        ],
        ipo: {
          title: "BUYUME: ANDA 2024",
          desc: "2024'te Didim'de acilan Anda Barut Collection ile Ege kiyisina ilk acilim. Booking.com 9.7 puan — portfoydeki en yuksek. BAYOU Villas ile ultra-luks villa segmentine giris.",
        },
        source: "Kaynak: baruthotels.com, Booking.com, Conde Nast Johansens",
      },
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Teknolojiyi ",
      titleB: "Misafirperverlige Donusturuyorum",
      bio1: "Full-stack yazilimci olarak React/Next.js ekosistemi, Node.js/Express backend ve modern AI teknolojileri konusunda uretim seviyesinde deneyime sahibim. Ozellikle ",
      bio1_s1: "birlesik dijital platformlar",
      bio1_s2: "gercek zamanli operasyon dashboardlari",
      bio1_s3: "otonom ajan mimarileri",
      bio1_end: " alaninda cozumler gelistiriyorum.",
      bio2: "Multi-tenant SaaS sistemleri, cok kaynakli veri toplama ve otomasyon konularinda gelistirdigim projeler, buyuk olcekli operasyonlarda dijital donusum araci olarak kullanilmaktadir. Bu deneyimi Barut Hotels'in 55 yillik misafirperverlik mirasina uyarlayarak, 9+ ayri web sitesini birlestiren, misafir deneyimini kisisellestiren ve operasyonlari optimize eden bir platform oneriyorum.",
      journey: "YOLCULUK",
      timeline: [
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, veritabani yonetimi" },
        { year: "2024-25", title: "QR Menu Platform", desc: "176+ endpoint, 8+ marka, multi-tenant SaaS" },
        { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack proje" },
        { year: "2025-26", title: "AI Ajan & Otomasyon Sistemleri", desc: "60+ AI ajan, Telegram botlari, veri isleme platformlari" },
      ],
      highlights: [
        { icon: "\u26A1", title: "Full-Stack Gelistirici", desc: "React, Next.js, Node.js, TypeScript, PostgreSQL ile 13+ uretim seviyesinde proje. Multi-tenant SaaS deneyimi." },
        { icon: "\uD83E\uDD16", title: "AI & Otonom Sistemler", desc: "60+ AI ajan orkestrasyonu, Claude API, MCP Server, gercek zamanli veri isleme ve karar destek sistemleri." },
        { icon: "\uD83D\uDCCA", title: "Veri & Dashboard Platformlari", desc: "Cok kaynakli veri toplama, real-time dashboard, operasyon metrikleri izleme ve otomatik raporlama." },
        { icon: "\uD83D\uDE80", title: "Otomasyon & DevOps", desc: "Docker containerization, CI/CD, Telegram bot altyapilari, self-healing sistemler ve 7/24 izleme." },
      ],
    },
    turkerler: {
      section: "BARUT HOTELS — DERINLEMESINE ANALIZ",
      titleA: "1971'den Bugune: ",
      titleB: "Sanata Donusen Misafirperverlik",
      subtitle: "Barut Hotels'in 10 tesisi, ~2.800 odasi, Barut Collection ultra all-inclusive konsepti, BAYOU Villas ultra-luks villalari, 7 ISO sertifikasi ve 9+ ayri web sitesini inceledim. Dijital donusum icin ozel cozum modulleri tasarladim.",
      portfolio: "TESIS PORTFOYU",
      wind: "Barut Collection",
      hydro: "Barut Hotels",
      geothermal: "BAYOU Villas & TUI BLUE",
      growth: "BUYUME YOL HARITASI — 55 YILLIK EVRIM",
      megaTitle: "Dijital Donusum ",
      megaTitleB: "Firsat Alanlari",
      aiContribution: "DIJITAL COZUM:",
      vedasTitle: "WEB SITESI FRAGMENTASYONU — 9+ Ayri Domain",
      healthcareTitle: "Misafir Deneyimi & Sadakat — Barut Club Card",
      healthcareAi: "~300.000 yillik misafir, %50 tekrar orani: Barut Club Card 5 kademeli sadakat programi dijital platforma tasinmali. Misafir profili, tercih gecmisi, ozel teklifler ve dijital concierge. WhatsApp concierge hizmetinin tum otellere yayilmasi ve AI destekli kisisellestirme.",
      problemsTitle: "Tespit Edilen Sorunlar & ",
      problemsTitleB: "Dijital Cozum Modulleri",
      currentIssues: "MEVCUT SORUNLAR",
      aiSolution: "DIJITAL COZUM MODULU",
      labels: {
        capacity: "Kapasite",
        area: "Bolge",
        investment: "Yatirim",
        status: "Durum",
      },
    },
    market: {
      section: "PAZAR ARASTIRMASI & VERI ANALIZI",
      titleA: "Verilerle ",
      titleB: "Derinlemesine Analiz",
      subtitle: "Booking.com, TripAdvisor, Conde Nast Johansens ve sektor raporlarindan derlenen verilerle Barut Hotels'in konumu.",
      financial: "BARUT HOTELS — MISAFIR MEMNUNIYETI PERFORMANSI",
      financialSource: "Kaynak: Booking.com, HolidayCheck, TUI Awards 2024-2026",
      revenue: "Ort. Puan",
      grossProfit: "Tekrar Orani",
      grossMargin: "Doluluk Orani",
      vedasTitle: "TESIS SEGMENTI — MARKA MIMARISI",
      lossRate: "portfoy payi",
      competitorTitle: "SEKTOR KONUMLANDIRMA — RAKIP KARSILASTIRMA",
      competitorSource: "Antalya Premium Otelcilik 2025",
      tableHeaders: { company: "Otel Grubu", currentMW: "Tesis", targetMW: "Oda", growth: "Puan", revenue: "Konum" },
      competitorNote: "Kritik farklilasma: Barut Hotels, 55 yillik aile isletmesi olarak rakipleri arasinda en eski ve en otantik. %50 tekrar misafir orani sektor ortalamasinin cok ustunde. 3 Conde Nast Johansens onayi all-inclusive segmentte nadir. Ancak dijital varligi 9+ ayri domain'e parcalanmis, rekabet avantajlarini online'da yansitamiyor.",
      aiTitle: "GLOBAL BENCHMARK — OTELCILIK DIJITAL DONUSUM",
      aiSource: "Deloitte, Phocuswright, STR 2024-2025",
      projectionTitle: "BARUT HOTELS ICIN PROJEKSIYON",
      projectionText: "Global benchmarklarin alt siniri uygulandiginda: Birlesik web platformu ile direkt rezervasyon %25+ artis, AI misafir kisisellestirme ile memnuniyet puani 0.3+ artis, dijital sadakat programi ile tekrar orani %55'e yukselis, operasyon optimizasyonu ile personel verimliligi %15 artis.",
      aiFocusHakkari: "DIJITAL FIRSAT ANALIZI — WEB BIRLESTIRME ODAK",
      hakkariText: "Barut Hotels'in baruthotels.com ana sitesi yaninda 8 ayri microsite (barutlara.com, barutarum.com, barutacanthuscennet.com, baruthemera.com, barutgoia.com, barutbsuites.com, barutanda.com, bayouvillas.com) isletiyor. Ana sitede otel detay sayfalari 404 donuyor, kullanici journey parcalanmis, SEO otoritesi dagilmis. Birlesik platform ile domain otoritesi 3-4x artis beklenir.",
    },
    architecture: {
      section: "// SISTEM MIMARISI",
      titleA: "Barut Hotels ",
      titleB: "Dijital Platform Mimarisi",
      subtitle: "Misafir deneyimi, operasyon yonetimi, sadakat programi ve gelir yonetimini tek bir dijital platformda birlestiren katmanli mimari.",
      techTitle: "Kullanilacak Teknolojiler",
      layers: [
        { title: "Veri Kaynaklari", items: [
          { name: "PMS (Opera/Protel)", desc: "10 tesis rezervasyon verileri" },
          { name: "Booking/OTA Kanallari", desc: "Booking.com, Expedia, TUI entegrasyonu" },
          { name: "Barut Club Card", desc: "Sadakat programi misafir verileri" },
          { name: "F&B Operasyonlari", desc: "50+ restoran & bar verileri" },
          { name: "Spa & Wellness", desc: "Club Vitality kullanim verileri" },
        ]},
        { title: "Veri Pipeline", items: [
          { name: "PMS Bridge", desc: "Otel yonetim sistemi entegrasyonu" },
          { name: "Channel Manager", desc: "OTA kanal yonetimi" },
          { name: "CRM Data Lake", desc: "300K+ misafir profili" },
          { name: "IoT & Enerji", desc: "Tesis izleme ve enerji verileri" },
        ]},
        { title: "AI & Otomasyon Katmani", items: [
          { name: "Gelir Yonetim Ajani", desc: "Dinamik fiyatlama & doluluk optimizasyonu" },
          { name: "Misafir Deneyim Ajani", desc: "AI kisisellestirme & oneri motoru" },
          { name: "Operasyon Optimizasyon Ajani", desc: "Personel planlama, F&B tahmin" },
          { name: "Pazarlama Ajani", desc: "Hedef kitle segmentasyonu & kampanya" },
          { name: "Bakim & Enerji Ajani", desc: "Prediktif bakim, enerji tasarrufu" },
        ]},
        { title: "Cikti Katmani", items: [
          { name: "Birlesik Web Platformu", desc: "9+ site tek cati altinda" },
          { name: "Dijital Concierge", desc: "AI destekli misafir asistani" },
          { name: "Operasyon Dashboard", desc: "10 tesis gercek zamanli izleme" },
          { name: "Barut Club Digital", desc: "Sadakat programi dijital portali" },
        ]},
      ],
    },
    demo: {
      section: "CANLI PROTOTIP",
      titleA: "Barut Hotels Dijital Hub ",
      titleB: "Dashboard",
      subtitle: "10 tesis doluluk orani, misafir memnuniyeti, gelir performansi, F&B operasyonlari ve AI optimizasyon onerileri — tek ekranda.",
      kpis: [
        { label: "Portfoy Doluluk", sub: "10 tesis aktif" },
        { label: "Misafir Memnuniyeti", sub: "Booking.com 9.3+" },
        { label: "Gunluk Gelir (RevPAR)", sub: "Barut Collection premium" },
        { label: "F&B Performans", sub: "50+ restoran & bar" },
      ],
      plantStatus: "TESIS DOLULUK DURUMU",
      aiAlerts: "AI OPTIMIZASYON ONERILERI",
      vedasDist: "MISAFIR DAGILIMI",
      projectProgress: "DIJITAL DONUSUM ILERLEME",
      live: "Canli",
      statusLabels: { online: "Aktif", maintenance: "Bakim", warning: "Uyari" },
      disclaimer: "* Simule edilmis verilerle prototip. Gercek uygulamada PMS, channel manager, Barut Club CRM ve IoT verileriyle canli veri akisi saglanir.",
    },
    github: {
      section: "PROJELER & DENEYIM",
      titleA: "Gelistirdigim ",
      titleB: "Sistemler",
      syncLabel: "GitHub ile senkronize",
      viewAll: "Tum Projeleri Gor",
      openSource: "Acik Kaynak Projeler",
      dataAnalysis: "Veri Analiz & Otomasyon Sistemleri",
      projectMeta: {
        latestv2: { title: "QR Menu Frontend", desc: "8+ marka, 10+ subelik multi-tenant restoran yonetim sistemi. 27 component, 20 sayfa." },
        "qrmenu-backend": { title: "QR Menu Backend API", desc: "176+ endpoint, 21 API modulu, RBAC yetkilendirme, sadakat programi." },
        ecommerce: { title: "E-Commerce Frontend", desc: "Tam kapsamli e-ticaret platformu. Urun katalog, sepet yonetimi, odeme entegrasyonu." },
        "ecommerce-backendAPI": { title: "E-Commerce Backend API", desc: "Spring Boot tabanli e-ticaret API. Urun yonetimi, stok takibi, siparis islemleri." },
        "web-sayfam": { title: "Portfolyo Web Sitesi", desc: "Next.js 16 + TypeScript + Framer Motion ile kisisel portfolyo sitesi." },
        "turkerler-portfolio": { title: "Turkerler Enerji Portfolyosu", desc: "Turkerler Holding icin AI tabanli enerji yonetim vizyonu. Canli dashboard prototipi." },
      },
      achievements: [
        { title: "Multi-Tenant SaaS Platform", desc: "8+ marka ve 10+ subeyi tek panelden yoneten restoran sistemi. React/Vite frontend, Express.js backend, PostgreSQL veritabani.", metric: "176+ API endpoint" },
        { title: "AI Ajan Orkestrasyon Sistemi", desc: "60+ uzman ajanin koordineli calismesini saglayan enterprise orkestrasyon platformu. Self-learning, fault-tolerant consensus.", metric: "60+ AI ajan" },
        { title: "Gercek Zamanli Veri Isleme", desc: "20+ kaynaktan yuksek hacimli veri toplama, normalizasyon ve anlik anomali tespit sistemi.", metric: "10K+ veri/dk" },
        { title: "Topluluk Yonetim Platformu", desc: "12K+ satir Python, 4 Docker microservice, FastAPI admin dashboard, adaptif ML skorlama motoru.", metric: "12K+ satir kod" },
      ],
    },
    tech: {
      section: "// TEKNOLOJI YIGINI",
      titleA: "Teknik ",
      titleB: "Yetkinlikler",
      categories: ["Frontend", "Backend", "AI & Otomasyon", "DevOps & Altyapi"],
    },
    contact: {
      section: "SONRAKI ADIMLAR",
      titleA: "Birlikte ",
      titleB: "Basaralim",
      subtitle: "Barut Hotels'in 55 yillik misafirperverlik deneyimini dijital platformlarla guclendirmek icin onerdigim yol haritasi.",
      steps: [
        { step: "01", title: "Teknik Gorusme", desc: "Mevcut web siteleri, PMS altyapisi, Barut Club Card sistemi ve operasyon verilerinin detayli analizi." },
        { step: "02", title: "Web Birlestirme", desc: "9+ ayri domain'i tek platformda birlestirme. Otel detay sayfalari, karsilastirma araci ve direkt rezervasyon." },
        { step: "03", title: "Misafir Platformu", desc: "Dijital concierge, Barut Club dijital portali, misafir kisisellestirme ve AI oneri motoru gelistirme." },
        { step: "04", title: "AI Entegrasyonu", desc: "PMS entegrasyonu, gelir yonetimi optimizasyonu, operasyon dashboardu ve prediktif analitik." },
      ],
      stepLabel: "Adim",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat Irtas",
      ctaText: "Bu portfolyo, Barut Hotels'in dijital donusumu icin ozel olarak hazirlanmistir. Tum teknik detaylar, mimari tasarim ve prototip kodlari incelemeye aciktir.",
      viewSource: "Kaynak Kodunu Incele",
      backToVision: "Vizyona Don",
    },
    footer: {
      name: "Sedat Irtas",
      tagline: "Barut Hotels dijital donusum vizyonu — Sanata donusen misafirperverlik",
      sync: "GitHub ile senkronize",
    },
  },

  en: {
    nav: [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#turkerler", label: "Barut Vision" },
      { href: "#market", label: "Analysis" },
      { href: "#architecture", label: "Architecture" },
      { href: "#demo", label: "Demo" },
      { href: "#projects", label: "Projects" },
      { href: "#tech", label: "Technologies" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      badge: "Prepared for Barut Hotels",
      titleA: "Digital Transformation Vision",
      titleB: "For 55 Years of Hospitality Heritage",
      desc: "I've analyzed 10 properties, ~2,800 rooms, ~300,000 annual guests, 50% repeat guest rate, 7 ISO certifications, 3 Conde Nast Johansens approved hotels, and 9+ separate websites. I've designed custom solution modules for a unified digital platform, guest experience personalization, and AI-powered hotel management.",
      cta1: "Review Analysis Report",
      cta2: "Dashboard Prototype",
      data: {
        header: "BARUT HOTELS — KEY DATA",
        metrics: [
          { label: "Total Properties", value: "10", sub: "8 hotels + 2 villas" },
          { label: "Total Rooms", value: "~2,800", sub: "~6,500 bed capacity" },
          { label: "Annual Guests", value: "300K+", sub: "50% repeat rate" },
          { label: "Employees", value: "~3,500", sub: "55 years of expertise" },
        ],
        sub: [
          { label: "Regions", value: "Side + Lara + Didim" },
          { label: "Avg. Rating", value: "9.3+ Booking" },
          { label: "ISO Certs", value: "7 Distinct" },
        ],
        ipo: {
          title: "GROWTH: ANDA 2024",
          desc: "Anda Barut Collection opened in Didim in 2024 — first expansion to Aegean coast. Booking.com 9.7 — highest in portfolio. BAYOU Villas enters ultra-luxury villa segment.",
        },
        source: "Source: baruthotels.com, Booking.com, Conde Nast Johansens",
      },
    },
    about: {
      section: "ABOUT ME",
      titleA: "Turning Technology ",
      titleB: "Into Hospitality",
      bio1: "As a full-stack developer, I have production-level experience with the React/Next.js ecosystem, Node.js/Express backend, and modern AI technologies. I specialize in ",
      bio1_s1: "unified digital platforms",
      bio1_s2: "real-time operations dashboards",
      bio1_s3: "autonomous agent architectures",
      bio1_end: ".",
      bio2: "My projects in multi-tenant SaaS systems, multi-source data collection, and automation serve as digital transformation tools in large-scale operations. I'm proposing a platform for Barut Hotels that unifies 9+ separate websites, personalizes guest experience, and optimizes operations — leveraging 55 years of hospitality heritage.",
      journey: "JOURNEY",
      timeline: [
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, database management" },
        { year: "2024-25", title: "QR Menu Platform", desc: "176+ endpoints, 8+ brands, multi-tenant SaaS" },
        { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack project" },
        { year: "2025-26", title: "AI Agent & Automation Systems", desc: "60+ AI agents, Telegram bots, data processing platforms" },
      ],
      highlights: [
        { icon: "\u26A1", title: "Full-Stack Developer", desc: "13+ production projects with React, Next.js, Node.js, TypeScript, PostgreSQL. Multi-tenant SaaS experience." },
        { icon: "\uD83E\uDD16", title: "AI & Autonomous Systems", desc: "60+ AI agent orchestration, Claude API, MCP Server, real-time data processing and decision support." },
        { icon: "\uD83D\uDCCA", title: "Data & Dashboard Platforms", desc: "Multi-source data collection, real-time dashboards, operations metrics monitoring, automated reporting." },
        { icon: "\uD83D\uDE80", title: "Automation & DevOps", desc: "Docker containerization, CI/CD, Telegram bots, self-healing systems, 24/7 monitoring." },
      ],
    },
    turkerler: {
      section: "BARUT HOTELS — IN-DEPTH ANALYSIS",
      titleA: "Since 1971: ",
      titleB: "Hospitality Elevated to Art",
      subtitle: "I've analyzed Barut Hotels' 10 properties, ~2,800 rooms, ultra all-inclusive Collection concept, BAYOU ultra-luxury villas, 7 ISO certifications, and 9+ separate websites. I've designed custom digital transformation modules.",
      portfolio: "PROPERTY PORTFOLIO",
      wind: "Barut Collection",
      hydro: "Barut Hotels",
      geothermal: "BAYOU Villas & TUI BLUE",
      growth: "GROWTH ROADMAP — 55 YEARS OF EVOLUTION",
      megaTitle: "Digital Transformation ",
      megaTitleB: "Opportunity Areas",
      aiContribution: "DIGITAL SOLUTION:",
      vedasTitle: "WEBSITE FRAGMENTATION — 9+ Separate Domains",
      healthcareTitle: "Guest Experience & Loyalty — Barut Club Card",
      healthcareAi: "~300,000 annual guests, 50% repeat rate: Barut Club Card 5-tier loyalty program needs digital platform migration. Guest profiles, preference history, personalized offers, and digital concierge. WhatsApp concierge expansion across all hotels with AI-powered personalization.",
      problemsTitle: "Identified Problems & ",
      problemsTitleB: "Digital Solution Modules",
      currentIssues: "CURRENT PROBLEMS",
      aiSolution: "DIGITAL SOLUTION MODULE",
      labels: {
        capacity: "Capacity",
        area: "Region",
        investment: "Investment",
        status: "Status",
      },
    },
    market: {
      section: "MARKET RESEARCH & DATA ANALYSIS",
      titleA: "In-Depth Analysis ",
      titleB: "With Data",
      subtitle: "Barut Hotels' positioning based on Booking.com, TripAdvisor, Conde Nast Johansens, and industry reports.",
      financial: "BARUT HOTELS — GUEST SATISFACTION PERFORMANCE",
      financialSource: "Source: Booking.com, HolidayCheck, TUI Awards 2024-2026",
      revenue: "Avg. Rating",
      grossProfit: "Repeat Rate",
      grossMargin: "Occupancy",
      vedasTitle: "PROPERTY SEGMENTS — BRAND ARCHITECTURE",
      lossRate: "portfolio share",
      competitorTitle: "SECTOR POSITIONING — COMPETITOR COMPARISON",
      competitorSource: "Antalya Premium Hospitality 2025",
      tableHeaders: { company: "Hotel Group", currentMW: "Properties", targetMW: "Rooms", growth: "Rating", revenue: "Location" },
      competitorNote: "Critical differentiation: Barut Hotels is the oldest and most authentic family-operated group among competitors with 55 years of heritage. 50% repeat guest rate far exceeds industry average. 3 Conde Nast Johansens approvals are rare in the all-inclusive segment. However, digital presence is fragmented across 9+ domains, failing to reflect competitive advantages online.",
      aiTitle: "GLOBAL BENCHMARK — HOSPITALITY DIGITAL TRANSFORMATION",
      aiSource: "Deloitte, Phocuswright, STR 2024-2025",
      projectionTitle: "PROJECTION FOR BARUT HOTELS",
      projectionText: "Applying global benchmark minimums: Unified web platform increases direct bookings by 25%+, AI guest personalization raises satisfaction scores by 0.3+, digital loyalty program pushes repeat rate to 55%, operations optimization improves staff efficiency by 15%.",
      aiFocusHakkari: "DIGITAL OPPORTUNITY — WEBSITE UNIFICATION FOCUS",
      hakkariText: "Barut Hotels operates 8 separate microsites alongside baruthotels.com (barutlara.com, barutarum.com, barutacanthuscennet.com, baruthemera.com, barutgoia.com, barutbsuites.com, barutanda.com, bayouvillas.com). Hotel detail pages return 404 on main site, user journey is fragmented, SEO authority is diluted. Unified platform expected to increase domain authority 3-4x.",
    },
    architecture: {
      section: "// SYSTEM ARCHITECTURE",
      titleA: "Barut Hotels ",
      titleB: "Digital Platform Architecture",
      subtitle: "Layered architecture unifying guest experience, operations management, loyalty program, and revenue management on a single digital platform.",
      techTitle: "Technologies to be Used",
      layers: [
        { title: "Data Sources", items: [
          { name: "PMS (Opera/Protel)", desc: "10 property reservation data" },
          { name: "Booking/OTA Channels", desc: "Booking.com, Expedia, TUI integration" },
          { name: "Barut Club Card", desc: "Loyalty program guest data" },
          { name: "F&B Operations", desc: "50+ restaurant & bar data" },
          { name: "Spa & Wellness", desc: "Club Vitality usage data" },
        ]},
        { title: "Data Pipeline", items: [
          { name: "PMS Bridge", desc: "Hotel management system integration" },
          { name: "Channel Manager", desc: "OTA channel management" },
          { name: "CRM Data Lake", desc: "300K+ guest profiles" },
          { name: "IoT & Energy", desc: "Property monitoring and energy data" },
        ]},
        { title: "AI & Automation Layer", items: [
          { name: "Revenue Management Agent", desc: "Dynamic pricing & occupancy optimization" },
          { name: "Guest Experience Agent", desc: "AI personalization & recommendation engine" },
          { name: "Operations Optimization Agent", desc: "Staff planning, F&B forecasting" },
          { name: "Marketing Agent", desc: "Audience segmentation & campaigns" },
          { name: "Maintenance & Energy Agent", desc: "Predictive maintenance, energy savings" },
        ]},
        { title: "Output Layer", items: [
          { name: "Unified Web Platform", desc: "9+ sites under one roof" },
          { name: "Digital Concierge", desc: "AI-powered guest assistant" },
          { name: "Operations Dashboard", desc: "10-property real-time monitoring" },
          { name: "Barut Club Digital", desc: "Loyalty program digital portal" },
        ]},
      ],
    },
    demo: {
      section: "LIVE PROTOTYPE",
      titleA: "Barut Hotels Digital Hub ",
      titleB: "Dashboard",
      subtitle: "10-property occupancy, guest satisfaction, revenue performance, F&B operations, and AI optimization suggestions — on a single screen.",
      kpis: [
        { label: "Portfolio Occupancy", sub: "10 properties active" },
        { label: "Guest Satisfaction", sub: "Booking.com 9.3+" },
        { label: "Daily Revenue (RevPAR)", sub: "Barut Collection premium" },
        { label: "F&B Performance", sub: "50+ restaurants & bars" },
      ],
      plantStatus: "PROPERTY OCCUPANCY STATUS",
      aiAlerts: "AI OPTIMIZATION SUGGESTIONS",
      vedasDist: "GUEST DISTRIBUTION",
      projectProgress: "DIGITAL TRANSFORMATION PROGRESS",
      live: "Live",
      statusLabels: { online: "Active", maintenance: "Maintenance", warning: "Warning" },
      disclaimer: "* Prototype with simulated data. In production, live data flows via PMS, channel manager, Barut Club CRM, and IoT sensors.",
    },
    github: {
      section: "PROJECTS & EXPERIENCE",
      titleA: "Systems I've ",
      titleB: "Built",
      syncLabel: "Synced with GitHub",
      viewAll: "View All Projects",
      openSource: "Open Source Projects",
      dataAnalysis: "Data Analysis & Automation Systems",
      projectMeta: {
        latestv2: { title: "QR Menu Frontend", desc: "Multi-tenant restaurant management for 8+ brands, 10+ branches. 27 components, 20 pages." },
        "qrmenu-backend": { title: "QR Menu Backend API", desc: "176+ endpoints, 21 API modules, RBAC authorization, loyalty program." },
        ecommerce: { title: "E-Commerce Frontend", desc: "Full-scope e-commerce platform. Product catalog, cart, payments." },
        "ecommerce-backendAPI": { title: "E-Commerce Backend API", desc: "Spring Boot e-commerce API. Product management, inventory, order processing." },
        "web-sayfam": { title: "Portfolio Website", desc: "Personal portfolio with Next.js 16 + TypeScript + Framer Motion." },
        "turkerler-portfolio": { title: "Turkerler Energy Portfolio", desc: "AI-powered energy management vision for Turkerler Holding. Live dashboard prototype." },
      },
      achievements: [
        { title: "Multi-Tenant SaaS Platform", desc: "Restaurant system managing 8+ brands and 10+ branches from a single panel. React/Vite frontend, Express.js backend, PostgreSQL.", metric: "176+ API endpoints" },
        { title: "AI Agent Orchestration", desc: "Enterprise orchestration platform coordinating 60+ specialized agents. Self-learning, fault-tolerant consensus.", metric: "60+ AI agents" },
        { title: "Real-Time Data Processing", desc: "High-volume data collection from 20+ sources with normalization and real-time anomaly detection.", metric: "10K+ data/min" },
        { title: "Community Management Platform", desc: "12K+ lines Python, 4 Docker microservices, FastAPI admin dashboard, adaptive ML scoring engine.", metric: "12K+ lines of code" },
      ],
    },
    tech: {
      section: "// TECH STACK",
      titleA: "Technical ",
      titleB: "Expertise",
      categories: ["Frontend", "Backend", "AI & Automation", "DevOps & Infrastructure"],
    },
    contact: {
      section: "NEXT STEPS",
      titleA: "Let's ",
      titleB: "Build Together",
      subtitle: "My proposed roadmap for empowering Barut Hotels' 55 years of hospitality heritage with digital platforms.",
      steps: [
        { step: "01", title: "Technical Meeting", desc: "Detailed analysis of current websites, PMS infrastructure, Barut Club Card system, and operations data." },
        { step: "02", title: "Web Unification", desc: "Merge 9+ domains into single platform. Hotel detail pages, comparison tool, and direct booking integration." },
        { step: "03", title: "Guest Platform", desc: "Digital concierge, Barut Club digital portal, guest personalization, and AI recommendation engine." },
        { step: "04", title: "AI Integration", desc: "PMS integration, revenue management optimization, operations dashboard, and predictive analytics." },
      ],
      stepLabel: "Step",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat Irtas",
      ctaText: "This portfolio was specifically prepared for Barut Hotels' digital transformation. All technical details, architectural designs, and prototype code are available for review.",
      viewSource: "View Source Code",
      backToVision: "Back to Vision",
    },
    footer: {
      name: "Sedat Irtas",
      tagline: "Barut Hotels digital transformation vision — Hospitality elevated to art",
      sync: "Synced with GitHub",
    },
  },
};

type Dict = typeof dict;
type Translations = Dict[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "tr",
  setLang: () => {},
  t: dict.tr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("barut-lang") as Lang | null;
    if (saved && dict[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("barut-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
