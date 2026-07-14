"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Steps() {
    const { t } = useLanguage();

    // steps dizisini t() fonksiyonunu kullanabilmek için component içine aldık
    const steps = [
        {
            title: t("step1Title"),
            description: t("step1Desc"),
            icon: "🔍"
        },
        {
            title: t("step2Title"),
            description: t("step2Desc"),
            icon: "🎨"
        },
        {
            title: t("step3Title"),
            description: t("step3Desc"),
            icon: "💻"
        },
        {
            title: t("step4Title"),
            description: t("step4Desc"),
            icon: "🚀"
        }
    ];

    return (
        <section className="container mx-auto px-6 py-24 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">{t("howIWorkTitle")}</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                    {t("howIWorkDesc")}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <div key={i} className="relative p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all group">
                        {/* Adım Numarası */}
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-500/30">
                            {i + 1}
                        </div>

                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                            {step.icon}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}