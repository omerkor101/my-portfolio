"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- SABİT VERİLER (Bileşen Dışında Durabilir) ---
const words = ["Modern Dijital", "Hızlı Web", "SEO Odaklı", "Kullanıcı Dostu"];

const techStack = [
  { name: "Next.js 14+", level: "core" },
  { name: "React", level: "core" },
  { name: "TypeScript", level: "core" },
  { name: "Tailwind CSS", level: "core" },
  { name: "Node.js", level: "core" },
  { name: "Framer Motion", level: "tool" },
  { name: "Sanity / Headless CMS", level: "tool" },
  { name: "SEO Optimization", level: "tool" },
  { name: "Responsive Design", level: "tool" },
  { name: "Git / GitHub", level: "tool" },
  { name: "Vercel Deployment", level: "tool" },
  { name: "UI/UX Design", level: "tool" },
  { name: "Firebase", level: "tool" },
  { name: "REST APIs", level: "extra" },
  { name: "Progressive Web Apps", level: "extra" },
  { name: "Performance Audit", level: "extra" },
];
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
const projects = [
  { title: "Lüks Butik Otel", description: "Akıcı animasyonlar ve oda rezervasyon odağıyla premium konaklama deneyimi.", tags: ["Next.js", "Framer Motion"], link: "#", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" },
  { title: "QR Restoran Menüsü", description: "Temassız, hızlı ve kategori filtrelemeli modern dijital menü çözümü.", tags: ["React", "Mobile First"], link: "#", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800" },
  { title: "Modern Hukuk Bürosu", description: "Güven veren, sade ve kurumsal kimliği ön plana çıkaran profesyonel site.", tags: ["SEO", "Corporate"], link: "#", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800" },
  { title: "Kreatif Ajans Portfolyosu", description: "Sınırları zorlayan scroll animasyonları ve interaktif görsel sunumlar.", tags: ["GSAP", "Design"], link: "#", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800" },
  { title: "Diyetisyen Platformu", description: "Randevu modülü ve sağlıklı yaşam blogu içeren estetik landing page.", tags: ["Next.js", "UI/UX"], link: "#", image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=800" },
  { title: "Emlak Vitrin Sayfası", description: "Gayrimenkul projeleri için yüksek çözünürlüklü detay ve galeri sistemi.", tags: ["Real Estate", "Tailwind"], link: "#", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800" },
  { title: "Güzellik & Saç Tasarım", description: "Hizmetlerin ve çalışma galerisinin sergilendiği şık salon web sitesi.", tags: ["Beauty", "Gallery"], link: "#", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800" },
  { title: "İnteraktif Özgeçmiş", description: "Kişisel markasını dijitalde profesyonelce sergilemek isteyenler için CV.", tags: ["Personal", "React"], link: "#", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800" },
  { title: "Mimarlık Ofisi", description: "Minimalist tasarım ve geniş portfolyo odağıyla hazırlanan kurumsal site.", tags: ["Architecture", "Next.js"], link: "#", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
  { title: "SaaS Tanıtım Sayfası", description: "Yazılım ürünleri için dönüşüm odaklı, modern satış ve özellik sayfası.", tags: ["Marketing", "SaaS"], link: "#", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
  { title: "Freelance İş Paneli", description: "Müşteri ve proje takibi için geliştirilmiş şık ve fonksiyonel dashboard.", tags: ["Dashboard", "UI"], link: "#", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800" },
  { title: "Storytelling Blog", description: "Okuma deneyimine odaklanan, görsel hikayeciliği destekleyen blog sitesi.", tags: ["CMS", "Blog"], link: "#", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800" },
];

const Navbar = () => (
  <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
    <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center justify-between shadow-2xl">
      <div className="text-white font-bold text-lg tracking-tight">
        ÖMER<span className="text-blue-500">KOR</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#" className="hover:text-white transition-colors">Ana Sayfa</a>
        <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
        <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
      </div>
      <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all">
        Teklif Al
      </a>
    </div>
  </nav>
);

// --- ANA BİLEŞEN ---
export default function Home() {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Kelime döngüsü efekti
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Fare takip efekti
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f172a]">
      <Navbar />

      {/* Fare Takip Işığı */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
          📍 İzmir'de Saat {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })} • Yeni Projeler İçin Müsait
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 min-h-[160px] flex flex-col items-center justify-center">
          Fikirleri
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          Deneyimlere Dönüştürüyorum
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Ben bir Fullstack Geliştiriciyim. Next.js ve Tailwind CSS kullanarak
          hızlı, ölçeklenebilir ve kullanıcı dostu web uygulamaları inşa ediyorum.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25">
            Projelerime Göz At
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700">
            İletişime Geç
          </a>
        </div>

        {/* Tech Stack Bar */}
        <div className="mt-20 pt-10 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 mb-8 uppercase tracking-widest font-semibold">Uzmanlık Alanlarım & Teknolojiler</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-5xl mx-auto px-4">
            {techStack.map((tech, i) => (
              <span key={i} className={`transition-all duration-300 cursor-default ${tech.level === 'core' ? 'font-bold text-xl text-white hover:text-blue-400' :
                tech.level === 'tool' ? 'font-medium text-lg text-slate-300 opacity-70 hover:opacity-100' :
                  'text-md text-slate-500 opacity-40 italic'
                }`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 text-center md:text-left">Seçkin Projeler</h2>
            <p className="text-slate-400 max-w-md text-lg text-center md:text-left">Fikirden yayına, uçtan uca geliştirdiğim modern web çözümleri.</p>
          </div>
          {!showAll && (
            <div onClick={() => setShowAll(true)} className="text-blue-500 font-semibold cursor-pointer hover:text-blue-400 hidden md:block">
              Tümünü Gör ({projects.length}) →
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {(showAll ? projects : projects.slice(0, 6)).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="pt-6 border-t border-slate-800">
                  <a href={project.link} className="text-sm font-bold text-white group-hover:text-blue-400 flex items-center gap-2">
                    DETAYLARI İNCELE <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <button onClick={() => setShowAll(true)} className="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all">
              Diğer Projeleri ve Hizmetleri Gör
            </button>
          </div>
        )}
      </section>
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
      {/* Contact Section */}
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

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/905050762193"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group"
      >
        <span className="text-sm font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          Merhaba Ömer, bir projem var!
        </span>
        <span className="text-xl">💬</span>
      </a>

      {/* Footer */}
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
    </main>
  );
}