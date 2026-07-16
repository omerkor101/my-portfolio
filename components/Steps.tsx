"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Steps() {
    const { t } = useLanguage();

    const steps = [
        { title: t("step1Title"), description: t("step1Desc"), icon: "🔍" },
        { title: t("step2Title"), description: t("step2Desc"), icon: "🎨" },
        { title: t("step3Title"), description: t("step3Desc"), icon: "💻" },
        { title: t("step4Title"), description: t("step4Desc"), icon: "🚀" }
    ];

    return (
        <section className="container mx-auto px-6 py-24 relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-white mb-4">{t("howIWorkTitle")}</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                    {t("howIWorkDesc")}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Bağlantı hattı - Sadece geniş ekranlarda */}
                <div className="hidden lg:block absolute top-[20%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-blue-900/50 via-slate-800 to-blue-900/50 -z-10" />

                {steps.map((step, i) => (
                    <div key={i} className="relative p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(37,99,235,0.3)] transition-all group">
                        
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-950 border-2 border-blue-600 text-blue-500 rounded-full flex items-center justify-center font-bold shadow-xl shadow-blue-950/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            {i + 1}
                        </div>

                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}