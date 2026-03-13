"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/* Hotel region data — Antalya sub-regions */
const hotelRegionsTR = [
  { province: "Side/Manavgat", loss: 80, subscribers: "~60K yatak", color: "#e6007e", note: "Barut'un ana üssü — 4 tesis" },
  { province: "Lara/Kundu", loss: 83, subscribers: "~25K yatak", color: "#22c55e", note: "Premium segment lider" },
  { province: "Kemer", loss: 75, subscribers: "~35K yatak", color: "#f59e0b", note: "Doğa odaklı tatil" },
  { province: "Fethiye", loss: 72, subscribers: "~15K yatak", color: "#3b82f6", note: "Yeni büyüme bölgesi" },
];

const hotelRegionsEN = [
  { province: "Side/Manavgat", loss: 80, subscribers: "~60K beds", color: "#e6007e", note: "Barut's home base — 4 properties" },
  { province: "Lara/Kundu", loss: 83, subscribers: "~25K beds", color: "#22c55e", note: "Premium segment leader" },
  { province: "Kemer", loss: 75, subscribers: "~35K beds", color: "#f59e0b", note: "Nature-focused holidays" },
  { province: "Fethiye", loss: 72, subscribers: "~15K beds", color: "#3b82f6", note: "New growth region" },
];

/* Turkish premium hotel chains comparison */
const competitorsTR = [
  { name: "Barut Hotels", current: 10, target: 2800, revenue: "%50 tekrar misafir", growth: "9.3+", highlight: true },
  { name: "Rixos Hotels", current: 12, target: 5500, revenue: "Ultra all-inclusive", growth: "9.0", highlight: false },
  { name: "Calista Luxury", current: 1, target: 630, revenue: "Tek tesis lüks", growth: "9.2", highlight: false },
  { name: "Maxx Royal", current: 3, target: 1500, revenue: "Ultra premium", growth: "9.1", highlight: false },
];

const competitorsEN = [
  { name: "Barut Hotels", current: 10, target: 2800, revenue: "50% repeat guests", growth: "9.3+", highlight: true },
  { name: "Rixos Hotels", current: 12, target: 5500, revenue: "Ultra all-inclusive", growth: "9.0", highlight: false },
  { name: "Calista Luxury", current: 1, target: 630, revenue: "Single property luxury", growth: "9.2", highlight: false },
  { name: "Maxx Royal", current: 3, target: 1500, revenue: "Ultra premium", growth: "9.1", highlight: false },
];

/* Hospitality AI benchmarks */
const aiBenchmarksTR = [
  { metric: "Misafir Sadakati Artışı", value: "%15-25", source: "Cornell Hospitality", detail: "AI kişiselleştirme ile tekrar ziyaret" },
  { metric: "RevPAR Optimizasyonu", value: "%8-12", source: "STR Global 2024", detail: "Dinamik fiyatlama AI sistemleri ile" },
  { metric: "F&B Maliyet Azalma", value: "%15-22", source: "Deloitte Travel", detail: "AI envanter ve menü optimizasyonu" },
  { metric: "Personel Verimliliği", value: "%30-40", source: "McKinsey Hospitality", detail: "AI destekli iş gücü planlaması" },
  { metric: "Enerji Tasarrufu", value: "%18-25", source: "HVAC AI Report", detail: "Akıllı bina yönetim sistemleri" },
  { metric: "Online Yorum Skoru", value: "+0.3-0.5 puan", source: "Revinate 2024", detail: "AI misafir deneyim yönetimi ile" },
];

const aiBenchmarksEN = [
  { metric: "Guest Loyalty Increase", value: "15-25%", source: "Cornell Hospitality", detail: "AI personalization drives repeat visits" },
  { metric: "RevPAR Optimization", value: "8-12%", source: "STR Global 2024", detail: "With dynamic pricing AI systems" },
  { metric: "F&B Cost Reduction", value: "15-22%", source: "Deloitte Travel", detail: "AI inventory and menu optimization" },
  { metric: "Staff Efficiency", value: "30-40%", source: "McKinsey Hospitality", detail: "AI-powered workforce planning" },
  { metric: "Energy Savings", value: "18-25%", source: "HVAC AI Report", detail: "Smart building management systems" },
  { metric: "Online Review Score", value: "+0.3-0.5 pts", source: "Revinate 2024", detail: "With AI guest experience management" },
];

/* Barut Hotels financial estimates */
const financialsTR = [
  { year: "2022", revenue: "1.2", grossProfit: "480M", margin: "40", unit: "milyar TL" },
  { year: "2023", revenue: "1.8", grossProfit: "756M", margin: "42", unit: "milyar TL" },
  { year: "2024", revenue: "2.4", grossProfit: "1.08B", margin: "45", unit: "milyar TL" },
];

const financialsEN = [
  { year: "2022", revenue: "1.2", grossProfit: "480M", margin: "40", unit: "B TL" },
  { year: "2023", revenue: "1.8", grossProfit: "756M", margin: "42", unit: "B TL" },
  { year: "2024", revenue: "2.4", grossProfit: "1.08B", margin: "45", unit: "B TL" },
];

/* Financial summary cards */
const financialSummaryTR = [
  { label: "Tesis Portföyü", value: "10 otel", sub: "Side, Lara, Kemer, Fethiye" },
  { label: "Toplam Kapasite", value: "2,800 oda", sub: "~300K yıllık misafir" },
  { label: "YoY Büyüme", value: "+33%", sub: "2023 → 2024 hasılat" },
  { label: "Tekrar Misafir", value: "%50", sub: "Sektör ort: %35" },
];

const financialSummaryEN = [
  { label: "Property Portfolio", value: "10 hotels", sub: "Side, Lara, Kemer, Fethiye" },
  { label: "Total Capacity", value: "2,800 rooms", sub: "~300K annual guests" },
  { label: "YoY Growth", value: "+33%", sub: "2023 → 2024 revenue" },
  { label: "Repeat Guests", value: "50%", sub: "Industry avg: 35%" },
];

export default function MarketAnalysis() {
  const { lang, t } = useLang();

  const hotelRegions = lang === "tr" ? hotelRegionsTR : hotelRegionsEN;
  const competitors = lang === "tr" ? competitorsTR : competitorsEN;
  const aiBenchmarks = lang === "tr" ? aiBenchmarksTR : aiBenchmarksEN;
  const financials = lang === "tr" ? financialsTR : financialsEN;
  const financialSummary = lang === "tr" ? financialSummaryTR : financialSummaryEN;

  const capacityLabel = lang === "tr" ? "kapasite" : "capacity";
  const focusLabel = lang === "tr" ? "Odak" : "Focus";
  const regionSubtitle = lang === "tr" ? "Antalya bölgesi doluluk oranları 2024" : "Antalya region occupancy rates 2024";

  return (
    <section id="market" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-secondary tracking-wider">
            {t.market.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.market.titleA}
            <span className="text-gradient">{t.market.titleB}</span>
          </h2>
          <p className="text-foreground/40 mt-3 text-sm max-w-2xl mx-auto">
            {t.market.subtitle}
          </p>
        </motion.div>

        {/* ───── FINANCIAL PERFORMANCE ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.financial}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.financialSource}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {financials.map((f, i) => (
              <motion.div
                key={f.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="text-xs font-mono text-primary mb-3">{f.year}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.revenue}</span>
                    <span className="text-sm font-bold text-foreground/70">{f.revenue} {f.unit}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.grossProfit}</span>
                    <span className="text-sm font-bold text-primary">{f.grossProfit} TL</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.grossMargin}</span>
                    <span className="text-sm font-bold text-accent">%{f.margin}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-4 gap-3">
            {financialSummary.map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-background/30 border border-border/20 text-center">
                <div className="text-[8px] text-foreground/15 uppercase tracking-wider">{m.label}</div>
                <div className="text-xs font-bold text-foreground/60 mt-1">{m.value}</div>
                <div className="text-[8px] text-foreground/15 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ───── HOTEL REGION ANALYSIS ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.vedasTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{regionSubtitle}</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {hotelRegions.map((p, i) => (
              <motion.div
                key={p.province}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">{p.province}</span>
                  <span className="text-xs text-foreground/25">{p.subscribers}</span>
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold" style={{ color: p.color }}>
                    %{p.loss}
                  </div>
                  <div className="text-[9px] text-foreground/20">{t.market.lossRate}</div>
                </div>
                <div className="h-2 bg-surface-light rounded-full overflow-hidden mb-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.loss}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
                <div className="text-[9px] text-foreground/20">{p.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
            <div className="text-[10px] font-mono text-yellow-500/50 mb-1.5">{t.market.aiFocusHakkari}</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {t.market.hakkariText}
            </p>
          </div>
        </motion.div>

        {/* ───── COMPETITOR POSITIONING ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.competitorTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.competitorSource}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.company}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.currentMW}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.targetMW}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.growth}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.revenue}</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-border/10 ${c.highlight ? "bg-primary/3" : ""}`}
                  >
                    <td className={`py-2.5 ${c.highlight ? "text-primary font-semibold" : "text-foreground/50"}`}>
                      {c.name}
                      {c.highlight && <span className="ml-1.5 text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">{focusLabel}</span>}
                    </td>
                    <td className="text-right py-2.5 text-foreground/50">{c.current.toLocaleString()}</td>
                    <td className="text-right py-2.5 font-medium" style={{ color: c.highlight ? "#10b981" : undefined }}>
                      {c.target.toLocaleString()}
                    </td>
                    <td className="text-right py-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        c.highlight ? "bg-primary/10 text-primary font-bold" : "text-foreground/30"
                      }`}>
                        {c.growth}
                      </span>
                    </td>
                    <td className="text-right py-2.5 text-foreground/40">{c.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-primary/3 border border-primary/10">
            <p className="text-[10px] text-foreground/35 leading-relaxed">
              <strong className="text-primary/70">
                {lang === "tr" ? "Kritik farklılaşma:" : "Critical differentiation:"}
              </strong>{" "}
              {t.market.competitorNote.split(lang === "tr" ? "Kritik farklılaşma: " : "Critical differentiation: ")[1] || t.market.competitorNote}
            </p>
          </div>
        </motion.div>

        {/* ───── GLOBAL AI BENCHMARKS ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.aiTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.aiSource}</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aiBenchmarks.map((b, i) => (
              <motion.div
                key={b.metric}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="text-xl font-bold text-gradient mb-1">{b.value}</div>
                <div className="text-xs font-medium text-foreground/60 mb-1">{b.metric}</div>
                <div className="text-[9px] text-foreground/25 mb-1.5">{b.detail}</div>
                <div className="text-[8px] text-foreground/15 italic">{b.source}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-lg bg-accent/5 border border-accent/10">
            <div className="text-[10px] font-mono text-accent/50 mb-1.5">{t.market.projectionTitle}</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {t.market.projectionText}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
