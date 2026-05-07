"use client";
const steps = [
    {
        title: "Keşif & Planlama",
        description: "İhtiyaçlarınızı dinliyor, projenizin hedeflerini ve teknik gereksinimlerini belirliyorum.",
        icon: "🔍"
    },
    {
        title: "Tasarım & UI/UX",
        description: "Modern, hızlı ve kullanıcı dostu arayüzleri markanıza özel olarak tasarlıyorum.",
        icon: "🎨"
    },
    {
        title: "Geliştirme",
        description: "Next.js ve Tailwind CSS ile performans odaklı, yaşayan bir uygulama inşa ediyorum.",
        icon: "💻"
    },
    {
        title: "Test & Yayın",
        description: "Tüm cihazlarda kusursuz çalıştığından emin olduktan sonra projenizi canlıya alıyorum.",
        icon: "🚀"
    }
];
export default function Steps() {


    return (
        <section className="container mx-auto px-6 py-24 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Nasıl Çalışıyorum?</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                    Bir fikrin gerçeğe dönüşme sürecini şeffaf ve planlı bir şekilde yönetiyorum.
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