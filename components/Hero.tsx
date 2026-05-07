"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Modern Dijital", "Hızlı Web", "SEO Odaklı", "Kullanıcı Dostu"];
const techStack = [
  { name: "Next.js 14+", level: "core" },
  { name: "React", level: "core" },
  { name: "TypeScript", level: "core" },
  { name: "Tailwind CSS", level: "core" },
  { name: "Node.js", level: "core" },
  { name: "Framer Motion", level: "tool" },
  { name: "Sanity / Headless CMS", level: "tool" },
  { name: "SEO Optimization", level: "tool" },
  { name: "Responsive Design", level: "tool" },
  { name: "Git / GitHub", level: "tool" },
  { name: "Vercel Deployment", level: "tool" },
  { name: "UI/UX Design", level: "tool" },
  { name: "Firebase", level: "tool" },
  { name: "REST APIs", level: "extra" },
  { name: "Progressive Web Apps", level: "extra" },
  { name: "Performance Audit", level: "extra" },
];
export default function Hero() {
    const [index, setIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

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
                    📍 İzmir'de Saat {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })} • Yeni Projeler İçin Müsait
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 min-h-[160px] flex flex-col items-center justify-center">
                    Fikirleri
                    <div className="h-20 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                            >
                                {words[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    Deneyimlere Dönüştürüyorum
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                    Ben bir Fullstack Geliştiriciyim. Next.js ve Tailwind CSS kullanarak
                    hızlı, ölçeklenebilir ve kullanıcı dostu web uygulamaları inşa ediyorum.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25">
                        Projelerime Göz At
                    </a>
                    <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700">
                        İletişime Geç
                    </a>
                </div>

                {/* Tech Stack Bar */}
                <div className="mt-20 pt-10 border-t border-slate-800/50">
                    <p className="text-sm text-slate-500 mb-8 uppercase tracking-widest font-semibold">Uzmanlık Alanlarım & Teknolojiler</p>
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