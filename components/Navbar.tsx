// components/Navbar.tsx


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
                        href={
                            language === "tr"
                                ? "https://wa.me/905050762193?text=Merhaba%20Ömer,%20web%20sitesi%20projem%20için%20bilgi%20ve%20fiyat%20teklifi%20almak%20istiyorum."
                                : "https://wa.me/905050762193?text=Hello%20Omer,%20I'd%20like%20to%20get%20information%20and%20a%20quote%20for%20a%20website%20project."
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5"
                    >
                        <span>💬</span>
                        {t("getOffer")}
                    </a>
                </div>
            </div>
        </nav>
    );
}