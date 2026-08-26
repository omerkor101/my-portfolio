"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const { t, language } = useLanguage();

    // Dinamik kelimeler
    const animatedWords = language === 'tr'
        ? ["Modern Web Siteleri", "Satış Odaklı Çözümler", "Google Uyumlu Sayfalar", "Hızlı ve Güvenli Sistemler"]
        : ["Modern Web Solutions", "High-Converting Websites", "SEO Optimized Pages", "Fast & Secure Platforms"];

    // Dile göre değişen özellikler listesi
    const featureHighlights = language === 'tr' ? [
        { name: "%100 Mobil Uyumlu", level: "core" },
        { name: "Yüksek Hız & Google SEO", level: "core" },
        { name: "Yönetim Paneli (CMS)", level: "core" },
        { name: "WhatsApp & Form Entegrasyonu", level: "core" },

        { name: "Özel Tasarım", level: "tool" },
        { name: "Güvenli Altyapı", level: "tool" },
        { name: "E-Ticaret & Katalog", level: "tool" },
        { name: "Kurumsal E-Posta Kurulumu", level: "tool" },

        { name: "Modern Next.js & React", level: "extra" },
        { name: "Hızlı Teslimat", level: "extra" },
        { name: "Sıfır Sunucu Masrafı", level: "extra" },
    ] : [
        { name: "100% Mobile Responsive", level: "core" },
        { name: "High Speed & Google SEO", level: "core" },
        { name: "Content Management (CMS)", level: "core" },
        { name: "WhatsApp & Form Integration", level: "core" },

        { name: "Custom UI/UX Design", level: "tool" },
        { name: "Secure Infrastructure", level: "tool" },
        { name: "E-Commerce & Catalog", level: "tool" },
        { name: "Business Email Setup", level: "tool" },

        { name: "Modern Next.js & React", level: "extra" },
        { name: "Fast Turnaround", level: "extra" },
        { name: "Zero Hosting Maintenance", level: "extra" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % animatedWords.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [animatedWords.length]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                animate={{
                    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
            />
            <section className="container mx-auto px-6 pt-32 pb-20 text-center relative z-10">
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
                    🚀 {t("location")} • {t("availability")}
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 min-h-[160px] flex flex-col items-center justify-center">
                    {/* Üst Kısım */}
                    <span className="text-3xl md:text-5xl mb-4 text-slate-400 font-medium">
                        {t("heroHeadingStart")}
                    </span>

                    {/* Orta Kısım: Animasyonlu Vurgu */}
                    <div className="h-18 md:h-32 flex items-center justify-center">
                        <AnimatePresence mode="wait"> 
                            <motion.span
                                key={`${language}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 pb-8"
                            >
                                {animatedWords[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
 
                    {/* Alt Kısım */}
                    <span className="text-3xl md:text-5xl mt-2">
                        {t("heroHeadingEnd")}
                    </span>
                </h1>
                 
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                    {t("heroDesc")}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25">
                        {t("contactBtn")}
                    </a>
                    <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700">
                        {t("viewProjectsBtn")}
                    </a>
                </div>

                {/* Özellikler & Avantajlar Bandı */}
                <div className="mt-20 pt-10 border-t border-slate-800/50">
                    <p className="text-sm text-slate-500 mb-8 uppercase tracking-widest font-semibold">
                        {t("techStackTitle")}
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-5xl mx-auto px-4">
                        {featureHighlights.map((feature, i) => (
                            <span key={i} className={`transition-all duration-300 cursor-default ${
                                feature.level === 'core' ? 'font-bold text-lg md:text-xl text-white hover:text-blue-400' :
                                feature.level === 'tool' ? 'font-medium text-md md:text-lg text-slate-300 opacity-80 hover:opacity-100' :
                                'text-sm md:text-md text-slate-500 opacity-50 italic'
                            }`}>
                                {feature.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}