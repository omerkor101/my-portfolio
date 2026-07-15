"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Logo ve Açıklama */}
                    <div className="col-span-1 md:col-span-2 text-center md:text-left">
                        <div className="text-white font-bold text-2xl mb-4">ÖMER<span className="text-blue-500">KOR</span></div>
                        <p className="text-slate-400 max-w-sm mx-auto md:mx-0">{t("footerDesc")}</p>
                    </div>

                    {/* Navigasyon */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-6">{t("footerNav")}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-blue-400">{t("home")}</a></li>
                            <li><a href="#projects" className="hover:text-blue-400">{t("projects")}</a></li>
                            <li><a href="#contact" className="hover:text-blue-400">{t("contact")}</a></li>
                        </ul>
                    </div>

                    {/* Bağlantılar */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-6">{t("footerLinks")}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="https://github.com/omerkor101" target="_blank" className="hover:text-white">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/omerkor/" target="_blank" className="hover:text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* Telif Hakkı */}
                <p className="text-slate-500 text-sm border-t border-slate-900 pt-8 text-center">
                    {t("footerCopyright")}
                </p>
            </div>
        </footer>
    );
}