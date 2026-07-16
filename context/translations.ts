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
  | "errKvkkReq"
  | "footerDesc"
  | "footerNav"
  | "footerLinks"
  | "footerCopyright"
  | "errGeneral"
  | "errConnection"
  | "downloadCv";

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
    heroHeadingStart: "Dijital deneyimlerinizi",
    heroHeadingEnd: "ile gerçeğe dönüştürüyorum.",
    heroDesc: "Modern teknolojiler ve temiz kod mimarisiyle, performanslı ve ölçeklenebilir arayüzler geliştiriyorum. Yeni projeler ve teknik işbirlikleri için buradayım.",
    viewProjectsBtn: "Projelerime Göz At",
    contactBtn: "İletişime Geç",
    techStackTitle: "Uzmanlık Alanlarım & Teknolojiler",
    howIWorkTitle: "Nasıl Çalışıyorum?",
    howIWorkDesc: "Bir fikrin gerçeğe dönüşme sürecini şeffaf ve planlı bir şekilde yönetiyorum.",
    step1Title: "Analiz & Mimari",
    step1Desc: "Teknik gereksinimleri çıkarıyor, en uygun teknoloji yığını (stack) ile projenin temelini atıyorum.",
    step2Title: "UI/UX & Prototipleme",
    step2Desc: "Kullanıcı deneyimini merkeze alan, erişilebilir ve modern arayüzleri koda dökülebilir şekilde tasarlıyorum.",
    step3Title: "Clean Code Implementation",
    step3Desc: "Next.js ve TypeScript kullanarak, test edilebilir, bakımı kolay ve ölçeklenebilir kod yazıyorum.",
    step4Title: "Deploy & Optimization",
    step4Desc: "CI/CD süreçlerini yönetiyor, SEO ve performans metriklerini maksimum seviyeye taşıyarak yayına alıyorum.",
    contactTitle: "İletişime Geçelim",
    contactDesc: "Yeni projeler, teknik iş birlikleri veya fırsatlar hakkında konuşmak için buradayım. Mesajınızı gönderin, en kısa sürede dönüş yapayım.",
    locationText: "İzmir, Türkiye",
    namePlaceholder: "Ad Soyad",
    emailPlaceholder: "E-posta",
    messagePlaceholder: "Mesajınız...",
    sendingBtn: "Gönderiliyor...",
    successBtn: "Mesaj Alındı! ✓",
    sendBtn: "Mesajı Gönder",
    footerDesc: "İzmir merkezli bağımsız web geliştiricisi. Modern teknolojilerle dijital yüzünüzü tasarlıyorum.",
    footerNav: "Navigasyon",
    footerLinks: "Bağlantılar",
    footerCopyright: "© 2026 Ömer Kor. Tüm hakları saklıdır.",
    downloadCv: "Cv İndir",

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
    errGeneral: "Mesajınız iletilemedi. Lütfen tekrar deneyin veya bana doğrudan e-posta gönderin.",
    errConnection: "İnternet bağlantınızda bir sorun oluştu. Lütfen bağlantınızı kontrol edip tekrar deneyin.",
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
    heroHeadingStart: "Transforming your ideas into",
    heroHeadingEnd: "digital experiences.",
    heroDesc: "Building high-performance and scalable interfaces using modern technologies and clean code architecture. Open to new projects and technical collaborations.",
    viewProjectsBtn: "View My Projects",
    contactBtn: "Get in Touch",
    techStackTitle: "My Expertise & Technologies",
    howIWorkTitle: "How I Work?",
    howIWorkDesc: "I manage the process of turning an idea into reality in a transparent and planned manner.",
    step1Title: "Analysis & Architecture",
    step1Desc: "Identifying technical requirements and establishing a solid project foundation with the most efficient tech stack.",
    step2Title: "UI/UX & Prototyping",
    step2Desc: "Designing accessible and modern interfaces that prioritize user experience and are ready for implementation.",
    step3Title: "Clean Code Implementation",
    step3Desc: "Developing testable, maintainable, and scalable applications using Next.js and TypeScript.",
    step4Title: "Deploy & Optimization",
    step4Desc: "Managing CI/CD pipelines and maximizing SEO and performance metrics before the final launch.",
    contactTitle: "Let's Connect",
    contactDesc: "Whether you have a new project, a technical collaboration proposal, or a career opportunity, feel free to reach out. I'm open to discussing how we can work together.",
    locationText: "Izmir, Turkey",
    namePlaceholder: "Full Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your Message...",
    sendingBtn: "Sending...",
    successBtn: "Message Received! ✓",
    sendBtn: "Send Message",
    footerDesc: "Independent web developer based in Izmir. Designing your digital face with modern technologies.",
    footerNav: "Navigation",
    footerLinks: "Links",
    footerCopyright: "© 2026 Ömer Kor. All rights reserved.",
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
    errKvkkReq: "You must accept the agreement to continue.",
    downloadCv: "Download Cv",
    errGeneral: "Your message could not be sent. Please try again or reach out to me directly via email.",
    errConnection: "A connection error occurred. Please check your internet and try again.",
  }
};