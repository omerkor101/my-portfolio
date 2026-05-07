"use client";
import { useState } from "react";

export default function Footer() {

    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 text-center md:text-left">
                        <div className="text-white font-bold text-2xl mb-4">ÖMER<span className="text-blue-500">KOR</span></div>
                        <p className="text-slate-400 max-w-sm mx-auto md:mx-0">İzmir merkezli bağımsız web geliştiricisi. Modern teknolojilerle dijital yüzünüzü tasarlıyorum.</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-6">Navigasyon</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-blue-400">Ana Sayfa</a></li>
                            <li><a href="#projects" className="hover:text-blue-400">Projeler</a></li>
                            <li><a href="#contact" className="hover:text-blue-400">İletişim</a></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-6">Bağlantılar</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="https://github.com" target="_blank" className="hover:text-white">GitHub</a></li>
                            <li><a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <p className="text-slate-500 text-sm border-t border-slate-900 pt-8 text-center">© 2026 Ömer Kor. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
}