"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t, language } = useLanguage();

    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Logo ve Açıklama - Daha davetkar */}
                    <div className="col-span-1 md:col-span-2 text-center md:text-left">
                        <div className="text-white font-bold text-2xl mb-4 tracking-tight">ÖMER<span className="text-blue-500">KOR</span></div>
                        <p className="text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
                            {t("footerDesc")}
                        </p>
                    </div>

                    {/* Navigasyon - CV linki buraya taşındı */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-6">{t("footerNav")}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">{t("home")}</a></li>
                            <li><a href="#projects" className="hover:text-blue-400 transition-colors">{t("projects")}</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">{t("contact")}</a></li>
                            <li>
                                <a href={`/cv-${language}.pdf`} target="_blank" rel="noopener noreferrer" 
                                   className="text-blue-500 hover:text-blue-400 font-medium transition-colors">
                                    {t("downloadCv")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Bağlantılar - E-posta eklendi */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-6">{t("footerLinks")}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="https://github.com/omerkor101" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/omerkor/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="mailto:omerkor.eu@gmail.com" className="hover:text-blue-400 transition-colors">omerkor.eu@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                {/* Telif Hakkı - Daha şık */}
                <p className="text-slate-600 text-sm border-t border-slate-900 pt-8 text-center">
                    {t("footerCopyright")}
                </p>
            </div>
        </footer>
    );
}