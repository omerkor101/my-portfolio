"use client";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <section id="contact" className="container mx-auto px-6 py-24 relative z-10">
            <div className="max-w-4xl mx-auto bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Hadi Bir Proje <br /> Başlatalım</h2>
                        <p className="text-slate-400 mb-8">Aklınızda bir fikir mi var? Formu doldurarak bana ulaşabilirsiniz. En geç 24 saat içinde dönüş yaparım.</p>
                        <div className="space-y-4 text-slate-300">
                            <div className="flex items-center gap-4"><span className="text-blue-400 text-xl">📧</span> omerkor.eu@gmail.com</div>
                            <div className="flex items-center gap-4"><span className="text-emerald-400 text-xl">📍</span> İzmir, Türkiye</div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ad Soyad" required />
                        <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="E-posta" required />
                        <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Mesajınız..." required />
                        <button type="submit" disabled={status === "sending" || status === "success"} className={`w-full py-4 font-bold rounded-xl transition-all ${status === "success" ? "bg-emerald-500" : "bg-blue-600 hover:bg-blue-500"} text-white`}>
                            {status === "sending" ? "Gönderiliyor..." : status === "success" ? "Mesaj Alındı! ✓" : "Mesajı Gönder"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}