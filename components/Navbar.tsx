"use client";
import { useState } from "react";

export default function Navbar() {


    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center justify-between shadow-2xl">
                <div className="text-white font-bold text-lg tracking-tight">
                    ÖMER<span className="text-blue-500">KOR</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#" className="hover:text-white transition-colors">Ana Sayfa</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
                    <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
                </div>
                <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all">
                    Teklif Al
                </a>
            </div>
        </nav>
    );
}