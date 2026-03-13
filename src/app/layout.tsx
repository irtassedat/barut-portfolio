import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sedat Irtas | Barut Hotels — Dijital Donusum Vizyonu",
  description: "Full-Stack Developer & AI Systems Engineer. Barut Hotels icin dijital platform, misafir deneyimi ve AI tabanli otel yonetim sistemi cozum onerisi.",
  keywords: ["Barut Hotels", "Barut Collection", "BAYOU Villas", "Side", "Lara", "otel", "turizm", "dijital donusum", "hospitality", "AI", "full-stack developer"],
  openGraph: {
    title: "Sedat Irtas | Barut Hotels — Dijital Donusum Vizyonu",
    description: "Barut Hotels'in 55 yillik misafirperverlik mirasini AI ve dijital platformlarla birlestiren donusum onerisi",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
