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
  | "seeMoreProjects";

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
  }
};