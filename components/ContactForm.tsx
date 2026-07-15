"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
    const { t } = useLanguage();
    const [status, setStatus] = useState("");

    // 1. ZOD ŞEMASI (Dosya yükleme tamamen kaldırıldı, sade ve net)
    const contactSchema = z.object({
        name: z.string().min(3, { message: t("errNameMin") }),
        email: z.string().email({ message: t("errEmailInvalid") }),
        message: z.string().min(10, { message: t("errMessageMin") }),
        kvkk: z.boolean().refine((val) => val === true, {
            message: t("errKvkkReq"),
        }),
    });

    type ContactFormData = z.infer<typeof contactSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            kvkk: false,
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("sending");

        try {
            const formData = new FormData();

            // LÜTFEN KENDİ ACCESS KEY'İNİ BURAYA YAPIŞTIR
            formData.append("access_key", "9c13447e-9ef7-49c5-8c0e-d87a2ad3abae");
            
            formData.append("subject", `${data.name} - Portfolyondan Yeni Mesaj!`);
            formData.append("İsim", data.name);
            formData.append("E-posta", data.email);
            formData.append("Mesaj", data.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                reset(); 
                setTimeout(() => setStatus(""), 3000);
            } else {
                console.error("Gönderim hatası:", result);
                setStatus("");
                alert("Mesaj gönderilemedi, lütfen daha sonra tekrar deneyin.");
            }
        } catch (error) {
            console.error("Bağlantı hatası:", error);
            setStatus("");
            alert("İnternet bağlantınızda bir sorun oluştu.");
        }
    };

    return (
        <section id="contact" className="container mx-auto px-6 py-24 relative z-10">
            <div className="max-w-4xl mx-auto bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Sol Bilgilendirme Alanı */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6 whitespace-pre-line">
                            {t("contactTitle")}
                        </h2>
                        <p className="text-slate-400 mb-8">{t("contactDesc")}</p>
                        <div className="space-y-4 text-slate-300">
                            <div className="flex items-center gap-4"><span className="text-blue-400 text-xl">📧</span> omerkor.eu@gmail.com</div>
                            <div className="flex items-center gap-4"><span className="text-emerald-400 text-xl">📍</span> {t("locationText")}</div>
                        </div>
                    </div>
                    
                    {/* Sağ Form Alanı */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        
                        {/* İsim Alanı */}
                        <div>
                            <input 
                                {...register("name")}
                                type="text" 
                                className={`w-full bg-slate-900/50 border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-slate-700'}`} 
                                placeholder={t("namePlaceholder")} 
                            />
                            {errors.name && <span className="text-red-400 text-xs mt-1 ml-2 font-medium block">{errors.name.message}</span>}
                        </div>

                        {/* E-posta Alanı */}
                        <div>
                            <input 
                                {...register("email")}
                                type="email" 
                                className={`w-full bg-slate-900/50 border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-slate-700'}`} 
                                placeholder={t("emailPlaceholder")} 
                            />
                            {errors.email && <span className="text-red-400 text-xs mt-1 ml-2 font-medium block">{errors.email.message}</span>}
                        </div>

                        {/* Mesaj Alanı */}
                        <div>
                            <textarea 
                                {...register("message")}
                                rows={4} 
                                className={`w-full bg-slate-900/50 border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${errors.message ? 'border-red-500' : 'border-slate-700'}`} 
                                placeholder={t("messagePlaceholder")} 
                            />
                            {errors.message && <span className="text-red-400 text-xs mt-1 ml-2 font-medium block">{errors.message.message}</span>}
                        </div>

                        {/* Checkbox (KVKK Onayı) */}
                        <div>
                            <label className="flex items-start gap-3 cursor-pointer group select-none">
                                <input 
                                    type="checkbox" 
                                    {...register("kvkk")}
                                    className="mt-1 w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 focus:ring-blue-500 focus:ring-offset-slate-900 transition-colors"
                                />
                                <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                                    {t("kvkkLabel")}
                                </span>
                            </label>
                            {errors.kvkk && <span className="text-red-400 text-xs mt-1 ml-2 font-medium block">{errors.kvkk.message}</span>}
                        </div>

                        {/* Gönder Butonu */}
                        <button 
                            type="submit" 
                            disabled={status === "sending" || status === "success"} 
                            className={`w-full py-4 font-bold rounded-xl transition-all ${status === "success" ? "bg-emerald-500" : "bg-blue-600 hover:bg-blue-500"} text-white`}
                        >
                            {status === "sending" ? t("sendingBtn") : status === "success" ? t("successBtn") : t("sendBtn")}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}