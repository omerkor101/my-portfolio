// context/translations.ts

export type Language = "tr" | "en";

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
  | "step4Desc"
  | "contactTitle"
  | "contactDesc"
  | "locationText"
  | "namePlaceholder"
  | "emailPlaceholder"
  | "messagePlaceholder"
  | "sendingBtn"
  | "successBtn"
  | "sendBtn"
  // ---  (Form Alanları) ---
  | "servicePlaceholder"
  | "serviceWeb"
  | "serviceMobile"
  | "serviceSeo"
  | "budgetTitle"
  | "budgetSmall"   // YENİ EKLENDİ
  | "budgetMedium"  // YENİ EKLENDİ
  | "budgetLarge"   // YENİ EKLENDİ
  | "fileClickToUpload"
  | "fileLimits"
  | "kvkkLabel"
  // --- (Zod Hata Mesajları) ---
  | "errNameMin"
  | "errEmailInvalid"
  | "errServiceReq"
  | "errBudgetReq"
  | "errMessageMin"
  | "errFileTooLarge"
  | "errFileInvalidType"
  | "errKvkkReq";

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
    contactTitle: "Hadi Bir Proje\nBaşlatalım",
    contactDesc: "Aklınızda bir fikir mi var? Formu doldurarak bana ulaşabilirsiniz. En geç 24 saat içinde dönüş yaparım.",
    locationText: "İzmir, Türkiye",
    namePlaceholder: "Ad Soyad",
    emailPlaceholder: "E-posta",
    messagePlaceholder: "Mesajınız...",
    sendingBtn: "Gönderiliyor...",
    successBtn: "Mesaj Alındı! ✓",
    sendBtn: "Mesajı Gönder",

    //  (Form Alanları TR)
    servicePlaceholder: "Hangi hizmeti istiyorsunuz?",
    serviceWeb: "Web Tasarım & Geliştirme",
    serviceMobile: "Mobil Uygulama",
    serviceSeo: "SEO & Performans Optimizasyonu",
    budgetTitle: "Proje Bütçesi",
    budgetSmall: "10k - 30k ₺",
    budgetMedium: "30k - 70k ₺",
    budgetLarge: "70k+ ₺",
    fileClickToUpload: "Dosya eklemek için tıklayın",
    fileLimits: "PNG, JPG veya PDF (Maks. 5MB)",
    kvkkLabel: "Gizlilik politikasını ve kişisel verilerimin işlenmesini kabul ediyorum.",

    // (Zod Hata Mesajları TR)
    errNameMin: "Adınız en az 3 karakter olmalıdır.",
    errEmailInvalid: "Lütfen geçerli bir e-posta adresi girin.",
    errServiceReq: "Lütfen almak istediğiniz hizmeti seçin.",
    errBudgetReq: "Lütfen bütçe aralığınızı seçin.",
    errMessageMin: "Mesajınız en az 10 karakter olmalıdır.",
    errFileTooLarge: "Dosya boyutu en fazla 5MB olabilir.",
    errFileInvalidType: "Sadece JPG, PNG veya PDF yükleyebilirsiniz.",
    errKvkkReq: "Devam etmek için sözleşmeyi onaylamalısınız."
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
    location: "Time in Izmir",
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
    contactTitle: "Let's Start\na Project",
    contactDesc: "Do you have an idea in mind? Reach out to me by filling out the form. I will get back to you within 24 hours.",
    locationText: "Izmir, Turkey",
    namePlaceholder: "Full Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your Message...",
    sendingBtn: "Sending...",
    successBtn: "Message Received! ✓",
    sendBtn: "Send Message",

    // (Form Alanları EN)
    servicePlaceholder: "Which service do you need?",
    serviceWeb: "Web Design & Development",
    serviceMobile: "Mobile Application",
    serviceSeo: "SEO & Performance Optimization",
    budgetTitle: "Project Budget",
    budgetSmall: "10k - 30k ₺",
    budgetMedium: "30k - 70k ₺",
    budgetLarge: "70k+ ₺",
    fileClickToUpload: "Click to add a file",
    fileLimits: "PNG, JPG, or PDF (Max. 5MB)",
    kvkkLabel: "I accept the privacy policy and the processing of my personal data.",

    // (Zod Hata Mesajları EN)
    errNameMin: "Name must be at least 3 characters.",
    errEmailInvalid: "Please enter a valid email address.",
    errServiceReq: "Please select a service.",
    errBudgetReq: "Please select a budget range.",
    errMessageMin: "Message must be at least 10 characters.",
    errFileTooLarge: "File size can be maximum 5MB.",
    errFileInvalidType: "You can only upload JPG, PNG, or PDF.",
    errKvkkReq: "You must accept the agreement to continue."
  }
};