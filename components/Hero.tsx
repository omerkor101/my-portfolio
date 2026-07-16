"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Tech stack aynı kalabilir, genellikle evrenseldir
const techStack = [
  // Çekirdek Uzmanlık: İşi bizzat yaptığın ve en güçlü olduğun alanlar
  { name: "Next.js 16+", level: "core" },
  { name: "React 19", level: "core" },
  { name: "TypeScript", level: "core" },
  { name: "Tailwind CSS", level: "core" },
  
  // Mühendislik Araçları: Proje mimarisini kuran yeteneklerin
  { name: "Sanity CMS", level: "tool" },
  { name: "Framer Motion", level: "tool" },
  { name: "Zod & Hook Form", level: "tool" },
  { name: "REST API Integration", level: "tool" },
  
  // Operasyonel Yetkinlikler: Süreç yönetimi
  { name: "Git / GitHub", level: "extra" },
  { name: "Vercel Deployment", level: "extra" },
  { name: "SEO & Performance", level: "extra" },
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const { t, language } = useLanguage();

    // Animasyonlu kelimeler dile göre seçiliyor
    const animatedWords = language === 'tr' 
        ? ["Modern Dijital", "Hızlı Web", "SEO Odaklı", "Kullanıcı Dostu"]
        : ["Modern Digital", "Fast Web", "SEO Focused", "User Friendly"];

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
                    📍 {t("location")} {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })} • {t("availability")}
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 min-h-[160px] flex flex-col items-center justify-center">
                    {t("heroHeadingStart")}
                    <div className="h-20 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={`${language}-${index}`} // Dil değiştiğinde animasyonun doğru çalışması için key güncellendi
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                            >
                                {animatedWords[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    {t("heroHeadingEnd")}
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                    {t("heroDesc")}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25">
                        {t("viewProjectsBtn")}
                    </a>
                    <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700">
                        {t("contactBtn")}
                    </a>
                </div>

                {/* Tech Stack Bar */}
                <div className="mt-20 pt-10 border-t border-slate-800/50">
                    <p className="text-sm text-slate-500 mb-8 uppercase tracking-widest font-semibold">{t("techStackTitle")}</p>
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-5xl mx-auto px-4">
                        {techStack.map((tech, i) => (
                            <span key={i} className={`transition-all duration-300 cursor-default ${tech.level === 'core' ? 'font-bold text-xl text-white hover:text-blue-400' :
                                tech.level === 'tool' ? 'font-medium text-lg text-slate-300 opacity-70 hover:opacity-100' :
                                    'text-md text-slate-500 opacity-40 italic'
                                }`}>
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}