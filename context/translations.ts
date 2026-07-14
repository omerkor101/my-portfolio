// context/translations.ts

export type Language = "tr" | "en";

// Sitede kullanacağımız tüm çeviri anahtarlarını buraya ekliyoruz
export type TranslationKey = 
  | "home" 
  | "projects" 
  | "contact" 
  | "getOffer" 
  | "heroTitle"
  | "projectsTitle"
  | "projectsDesc"
  | "seeAll"
  | "viewDetails"
  | "seeMoreProjects"
  | "location"
  | "availability"
  | "heroHeadingStart"
  | "heroHeadingEnd"
  | "heroDesc"
  | "viewProjectsBtn"
  | "contactBtn"
  | "techStackTitle"
  | "howIWorkTitle"
  | "howIWorkDesc"
  | "step1Title"
  | "step1Desc"
  | "step2Title"
  | "step2Desc"
  | "step3Title"
  | "step3Desc"
  | "step4Title"
  | "step4Desc";

// Record ile yapıyı sıkı bir şekilde kilitliyoruz
export const translations: Record<Language, Record<TranslationKey, string>> = {
  tr: {
    home: "Ana Sayfa",
    projects: "Projeler",
    contact: "İletişim",
    getOffer: "Teklif Al",
    heroTitle: "Yaratıcı Web Çözümleri",
    projectsTitle: "Seçkin Projeler",
    projectsDesc: "Fikirden yayına, uçtan uca geliştirdiğim modern web çözümleri.",
    seeAll: "Tümünü Gör",
    viewDetails: "DETAYLARI İNCELE",
    seeMoreProjects: "Diğer Projeleri ve Hizmetleri Gör",
    location: "İzmir'de Saat",
    availability: "Yeni Projeler İçin Müsait",
    heroHeadingStart: "Fikirleri",
    heroHeadingEnd: "Deneyimlere Dönüştürüyorum",
    heroDesc: "Kullanıcı deneyimini (UX) merkeze alan, pixel-perfect tasarım dönüşümü ve yüksek performans (PageSpeed) optimizasyonları konusunda uzmanlaşmış Frontend Developer.",
    viewProjectsBtn: "Projelerime Göz At",
    contactBtn: "İletişime Geç",
    techStackTitle: "Uzmanlık Alanlarım & Teknolojiler",
    howIWorkTitle: "Nasıl Çalışıyorum?",
    howIWorkDesc: "Bir fikrin gerçeğe dönüşme sürecini şeffaf ve planlı bir şekilde yönetiyorum.",
    step1Title: "Keşif & Planlama",
    step1Desc: "İhtiyaçlarınızı dinliyor, projenizin hedeflerini ve teknik gereksinimlerini belirliyorum.",
    step2Title: "Tasarım & UI/UX",
    step2Desc: "Modern, hızlı ve kullanıcı dostu arayüzleri markanıza özel olarak tasarlıyorum.",
    step3Title: "Geliştirme",
    step3Desc: "Next.js ve Tailwind CSS ile performans odaklı, yaşayan bir uygulama inşa ediyorum.",
    step4Title: "Test & Yayın",
    step4Desc: "Tüm cihazlarda kusursuz çalıştığından emin olduktan sonra projenizi canlıya alıyorum.",
  },
  en: {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    getOffer: "Get Quote",
    heroTitle: "Creative Web Solutions",
    projectsTitle: "Selected Projects",
    projectsDesc: "Modern web solutions I have developed end-to-end, from idea to deployment.",
    seeAll: "See All",
    viewDetails: "VIEW DETAILS",
    seeMoreProjects: "See Other Projects & Services",
    location: "Time in İzmir",
    availability: "Available for New Projects",
    heroHeadingStart: "Turning Ideas Into",
    heroHeadingEnd: "Digital Experiences",
    heroDesc: "Frontend Developer specializing in user experience (UX) focused, pixel-perfect design transformation, and high-performance (PageSpeed) optimizations.",
    viewProjectsBtn: "View My Projects",
    contactBtn: "Get in Touch",
    techStackTitle: "My Expertise & Technologies",
    howIWorkTitle: "How I Work?",
    howIWorkDesc: "I manage the process of turning an idea into reality in a transparent and planned manner.",
    step1Title: "Discovery & Planning",
    step1Desc: "I listen to your needs, determining the goals and technical requirements of your project.",
    step2Title: "Design & UI/UX",
    step2Desc: "I design modern, fast, and user-friendly interfaces specifically for your brand.",
    step3Title: "Development",
    step3Desc: "I build a performance-oriented, living application with Next.js and Tailwind CSS.",
    step4Title: "Testing & Deployment",
    step4Desc: "I deploy your project to live after ensuring it works flawlessly on all devices.",
  }
};