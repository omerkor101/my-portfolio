"use client";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { language, changeLanguage, t } = useLanguage();
    const pathname = usePathname();

    if (pathname.startsWith("/studio")) {
        return null;
    }

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center justify-between shadow-2xl">
                
                <div className="text-white font-bold text-lg tracking-tight">
                    ÖMER<span className="text-blue-500">KOR</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#" className="hover:text-white transition-colors">{t("home")}</a>
                    <a href="#projects" className="hover:text-white transition-colors">{t("projects")}</a>
                    <a href="#contact" className="hover:text-white transition-colors">{t("contact")}</a>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-400">
                        <button 
                            onClick={() => changeLanguage("tr")}
                            className={`transition-colors hover:text-white ${language === "tr" ? "text-white font-extrabold" : ""}`}
                        >
                            TR
                        </button>
                        <span className="text-white/20">|</span>
                        <button 
                            onClick={() => changeLanguage("en")}
                            className={`transition-colors hover:text-white ${language === "en" ? "text-white font-extrabold" : ""}`}
                        >
                            EN
                        </button>
                    </div>

                    {/* CV İndirme Butonu - PDF dosyanı public klasörüne koymayı unutma */}
                    <a 
                        href={`/cv-${language}.pdf`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all"
                    >
                        {t("downloadCv")}
                    </a>
                </div>
            </div>
        </nav>
    );
}