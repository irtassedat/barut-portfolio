"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";

function useAnimatedNumber(target: number, duration: number = 2000) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { value, start: () => setStarted(true) };
}

const plants = [
  { name: "Barut Hemera", type: "5★ Ultra", cap: "420 oda", status: "online" as const, eff: 89, color: "#e6007e" },
  { name: "Acanthus & Cennet", type: "5★ Premium", cap: "350 oda", status: "online" as const, eff: 86, color: "#e6007e" },
  { name: "Barut Arum", type: "5★ Resort", cap: "310 oda", status: "online" as const, eff: 83, color: "#c9a84c" },
  { name: "Barut Lara", type: "5★ Lara", cap: "380 oda", status: "online" as const, eff: 91, color: "#e6007e" },
  { name: "Barut Kemer", type: "5★ Doğa", cap: "250 oda", status: "warning" as const, eff: 74, color: "#f59e0b" },
  { name: "Barut Andiz", type: "5★ Boutique", cap: "180 oda", status: "online" as const, eff: 80, color: "#c9a84c" },
  { name: "Barut B Suites", type: "Apart", cap: "120 oda", status: "online" as const, eff: 77, color: "#3b82f6" },
  { name: "Barut Fethiye", type: "Yeni", cap: "200 oda", status: "maintenance" as const, eff: 0, color: "#06b6d4" },
];

const alertsTr = [
  { time: "14:32", type: "warning", msg: "Barut Kemer — havuz bölgesi doluluk %95 aşıldı. F&B ekibine ek servis noktası önerisi gönderildi." },
  { time: "14:28", type: "info", msg: "Barut Lara — VIP misafir check-in: tercih profili yüklendi. Oda sıcaklığı 22°C, yastık tipi memory foam, minibar stoklandı." },
  { time: "14:15", type: "success", msg: "Barut Hemera — dinamik fiyatlama güncellendi. Önümüzdeki hafta sonu ADR €195 → €215 önerisi onaylandı." },
  { time: "13:58", type: "warning", msg: "Acanthus & Cennet — ana restoran akşam doluluk tahmini %98. Ek terasa açılma ve personel takviyesi öneriliyor." },
  { time: "13:42", type: "info", msg: "Barut Arum — spa randevu sistemi: bugün %87 doluluk. Yarın için boş slot uyarısı misafirlere gönderildi." },
  { time: "13:30", type: "info", msg: "Barut Andiz — tesis tüketim analizi: klima optimizasyonu ile günlük %12 tasarruf sağlandı." },
  { time: "13:15", type: "success", msg: "Haftalık misafir memnuniyeti raporu oluşturuldu. Portföy ortalaması: 4.7/5 (+0.1 önceki haftaya göre)." },
];

const alertsEn = [
  { time: "14:32", type: "warning", msg: "Barut Kemer — pool area at 95% capacity. Additional F&B service point recommendation sent to team." },
  { time: "14:28", type: "info", msg: "Barut Lara — VIP guest check-in: preference profile loaded. Room temp 22°C, memory foam pillows, minibar stocked." },
  { time: "14:15", type: "success", msg: "Barut Hemera — dynamic pricing updated. Next weekend ADR €195 → €215 recommendation approved." },
  { time: "13:58", type: "warning", msg: "Acanthus & Cennet — main restaurant dinner forecast 98% full. Terrace expansion and staff reinforcement recommended." },
  { time: "13:42", type: "info", msg: "Barut Arum — spa booking system: 87% utilization today. Empty slot alerts sent to guests for tomorrow." },
  { time: "13:30", type: "info", msg: "Barut Andiz — facility consumption analysis: AC optimization yielding 12% daily savings." },
  { time: "13:15", type: "success", msg: "Weekly guest satisfaction report generated. Portfolio average: 4.7/5 (+0.1 vs. previous week)." },
];

const guestMetricsTr = [
  { label: "Anlık Doluluk", value: "%84.2", trend: "+1.8% dün'e göre" },
  { label: "Ortalama ADR", value: "€180", trend: "+6% önceki aya göre" },
  { label: "Misafir Skoru", value: "4.7/5", trend: "8,200+ değerlendirme" },
  { label: "Tekrar Misafir", value: "%50.2", trend: "Hedef: %55" },
];

const guestMetricsEn = [
  { label: "Live Occupancy", value: "84.2%", trend: "+1.8% vs. yesterday" },
  { label: "Average ADR", value: "€180", trend: "+6% vs. previous month" },
  { label: "Guest Score", value: "4.7/5", trend: "8,200+ reviews" },
  { label: "Repeat Guests", value: "50.2%", trend: "Target: 55%" },
];

const kpiColors = ["#10b981", "#3b82f6", "#06b6d4", "#8b5cf6"];

export default function LiveDemo() {
  const { lang, t } = useLang();

  const totalRooms = useAnimatedNumber(2800);
  const activeProperties = useAnimatedNumber(9);
  const dailyGuests = useAnimatedNumber(4200);
  const guestScore = useAnimatedNumber(92);

  const alerts = lang === "tr" ? alertsTr : alertsEn;
  const guestMetrics = lang === "tr" ? guestMetricsTr : guestMetricsEn;

  const kpiValues = [
    `${totalRooms.value.toLocaleString()}`,
    `${activeProperties.value}/10`,
    `${dailyGuests.value.toLocaleString()}`,
    `${guestScore.value}%`,
  ];

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-accent tracking-wider">
            {t.demo.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.demo.titleA}
            <span className="text-gradient">{t.demo.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-3 text-sm max-w-3xl mx-auto">
            {t.demo.subtitle}
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            totalRooms.start();
            activeProperties.start();
            dailyGuests.start();
            guestScore.start();
          }}
          viewport={{ once: true }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface-light/30">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">BH</span>
              </div>
              <span className="text-sm font-semibold">Barut Hotels Dijital Hub</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                v1.0 Prototip
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-foreground/30">
              <span>13 Mar 2026 14:35</span>
              <span className="flex items-center gap-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                {t.demo.live}
              </span>
            </div>
          </div>

          <div className="p-5">
            {/* Top KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {t.demo.kpis.map((kpi, i) => (
                <div key={kpi.label} className="p-3 rounded-lg bg-background/50 border border-border/30">
                  <div className="text-[9px] text-foreground/25 uppercase tracking-wider">{kpi.label}</div>
                  <div className="text-lg font-bold mt-1" style={{ color: kpiColors[i] }}>{kpiValues[i]}</div>
                  <div className="text-[9px] text-foreground/20 mt-0.5">{kpi.sub}</div>
                </div>
              ))}
            </div>

            {/* Three Columns */}
            <div className="grid lg:grid-cols-12 gap-4">
              {/* Plants Grid - 5 cols */}
              <div className="lg:col-span-5">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.plantStatus}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {plants.slice(0, 8).map((p, i) => {
                    const statusCfg = {
                      online: { dot: "bg-green-400", label: t.demo.statusLabels.online },
                      maintenance: { dot: "bg-yellow-400", label: t.demo.statusLabels.maintenance },
                      warning: { dot: "bg-red-400", label: t.demo.statusLabels.warning },
                    };
                    const s = statusCfg[p.status];
                    return (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium truncate">{p.name}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        </div>
                        <div className="text-[9px] text-foreground/20 mb-1.5">
                          {p.type} &middot; {p.cap}
                        </div>
                        <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.eff}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: p.color }}
                          />
                        </div>
                        <div className="text-[8px] text-foreground/15 mt-0.5">{p.eff > 0 ? `${p.eff}%` : s.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* AI Alerts - 4 cols */}
              <div className="lg:col-span-4">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.aiAlerts}
                </div>
                <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
                  {alerts.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[9px] text-foreground/15 font-mono">{a.time}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          a.type === "warning" ? "bg-yellow-400" : a.type === "success" ? "bg-green-400" : "bg-blue-400"
                        }`} />
                      </div>
                      <div className="text-[10px] text-foreground/45 leading-relaxed">{a.msg}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Guest Metrics Panel - 3 cols */}
              <div className="lg:col-span-3">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.vedasDist}
                </div>
                <div className="space-y-2">
                  {guestMetrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="text-[9px] text-foreground/20 uppercase">{m.label}</div>
                      <div className="text-sm font-bold text-yellow-400 mt-0.5">{m.value}</div>
                      <div className="text-[9px] text-foreground/15">{m.trend}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Expansion Progress */}
                <div className="mt-3">
                  <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                    {t.demo.projectProgress}
                  </div>
                  {[
                    { name: "Barut Fethiye Renovasyon", pct: 72, color: "#3b82f6" },
                    { name: "Dijital Dönüşüm Faz 2", pct: 45, color: "#f59e0b" },
                    { name: "AI Concierge Sistemi", pct: 85, color: "#10b981" },
                  ].map((p) => (
                    <div key={p.name} className="mb-2">
                      <div className="flex justify-between text-[9px] mb-0.5">
                        <span className="text-foreground/30">{p.name}</span>
                        <span style={{ color: p.color }}>{p.pct}%</span>
                      </div>
                      <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: p.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] text-foreground/15 mt-4"
        >
          {t.demo.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
