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
  // --- (Form Alanları) ---
  | "servicePlaceholder"
  | "serviceWeb"
  | "serviceMobile"
  | "serviceSeo"
  | "budgetTitle"
  | "budgetSmall"
  | "budgetMedium"
  | "budgetLarge"
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
    projects: "Referanslar",
    contact: "İletişim & Teklif",
    getOffer: "Ücretsiz Teklif Al",
    heroTitle: "İşletmenizi Büyüten Web Siteleri",
    projectsTitle: "Tamamlanan Projeler & Referanslar",
    projectsDesc: "Kurumsal markalardan yerel işletmelere, yüksek performanslı ve modern web çözümleri.",
    seeAll: "Tümünü Gör",
    viewDetails: "PROJEYİ İNCELE",
    seeMoreProjects: "Tüm Projeleri ve Çözümleri Gör",
    location: "İzmir & Uzaktan",
    availability: "Yeni Proje Alımına Açık",
    heroHeadingStart: "İşletmenizi Dijitalde Büyüten",
    heroHeadingEnd: "ile Müşterilerinize Ulaşın.",
    heroDesc: "Mobil uyumlu, Google'da (SEO) öne çıkan, hızlı açılan ve müşterilerinizin doğrudan WhatsApp ya da aramayla size ulaşmasını sağlayan profesyonel web siteleri geliştiriyorum.",
    viewProjectsBtn: "Referansları İncele",
    contactBtn: "Hemen Teklif Alın →",
    techStackTitle: "Sunduğum Standart Özellikler & Avantajlar",
    howIWorkTitle: "Birlikte Nasıl Çalışıyoruz?",
    howIWorkDesc: "Fikrinizi yayına alırken şeffaf, hızlı ve sonuç odaklı 4 adımlı bir süreç izliyoruz.",
    step1Title: "İhtiyaç Analizi & Planlama",
    step1Desc: "İşletmenizin hedeflerini, hedef kitlenizi ve rakiplerinizi analiz edip en uygun web altyapısını belirliyoruz.",
    step2Title: "Modern Tasarım & Prototip",
    step2Desc: "Kullanıcı dostu, mobil uyumlu ve markanızı en şık şekilde yansıtan arayüzü kurguluyoruz.",
    step3Title: "Hızlı & Güvenli Geliştirme",
    step3Desc: "Yönetim paneli entegrasyonu, WhatsApp butonları ve iletişim formlarıyla sitenizi eksiksiz kodluyoruz.",
    step4Title: "Google Optimizasyonu & Canlıya Alma",
    step4Desc: "SEO ve hız testlerini tamamlayıp sitenizi sıfır sunucu masrafıyla dünya çapında yayına alıyoruz.",
    contactTitle: "Projenizi Birlikte Başlatalım",
    contactDesc: "İster sıfırdan bir web sitesi, ister mevcut sitenizin yenilenmesi olsun. Formu doldurun veya WhatsApp'tan hemen mesaj atın, aynı gün dönüş yapayım.",
    locationText: "İzmir, Türkiye (Tüm Türkiye & Yurtdışı)",
    namePlaceholder: "Adınız Soyadınız / Firma Adı",
    emailPlaceholder: "E-posta Adresiniz",
    messagePlaceholder: "Projenizden veya aklınızdaki web sitesinden kısaca bahsedin...",
    sendingBtn: "Gönderiliyor...",
    successBtn: "Talebiniz Alındı! En Kısa Sürede Döneceğim ✓",
    sendBtn: "Ücretsiz Teklif İste",
    footerDesc: "İşletmeler için yüksek hızlı, modern ve müşteri kazandıran web çözümleri geliştiricisi.",
    footerNav: "Navigasyon",
    footerLinks: "Bağlantılar",
    footerCopyright: "© 2026 Ömer Kor. Tüm hakları saklıdır.",
    downloadCv: "Sunumu İndir",

    // (Form Alanları TR)
    servicePlaceholder: "Hangi hizmete ihtiyacınız var?",
    serviceWeb: "Kurumsal Web Sitesi",
    serviceMobile: "Yönetim Panelli (Dinamik) Web Sitesi",
    serviceSeo: "Site Yenileme & Hızlandırma",
    budgetTitle: "Planlanan Bütçe",
    budgetSmall: "10.000 - 25.000 ₺",
    budgetMedium: "25.000 - 50.000 ₺",
    budgetLarge: "50.000+ ₺",
    fileClickToUpload: "Varsa logo veya doküman ekleyin",
    fileLimits: "PNG, JPG veya PDF (Maks. 5MB)",
    kvkkLabel: "Bilgilerimin teklif hazırlanması amacıyla işlenmesini onaylıyorum.",

    // (Zod Hata Mesajları TR)
    errNameMin: "Lütfen adınızı veya firma adını girin.",
    errEmailInvalid: "Lütfen geçerli bir e-posta adresi girin.",
    errServiceReq: "Lütfen bir hizmet türü seçin.",
    errBudgetReq: "Lütfen bir bütçe aralığı seçin.",
    errMessageMin: "Lütfen proje hakkında en az 10 karakterlik kısa bir bilgi verin.",
    errFileTooLarge: "Dosya boyutu en fazla 5MB olabilir.",
    errFileInvalidType: "Sadece JPG, PNG veya PDF yükleyebilirsiniz.",
    errGeneral: "Mesajınız iletilemedi. Lütfen WhatsApp üzerinden doğrudan iletişime geçin.",
    errConnection: "Bağlantı hatası oluştu. Lütfen tekrar deneyin.",
    errKvkkReq: "Devam etmek için onay vermelisiniz."
  },
  en: {
    home: "Home",
    projects: "Portfolio",
    contact: "Contact & Quote",
    getOffer: "Get Free Quote",
    heroTitle: "High-Performance Web Solutions",
    projectsTitle: "Featured Projects & Clients",
    projectsDesc: "From corporate brands to growing businesses, modern and high-speed web solutions.",
    seeAll: "See All",
    viewDetails: "VIEW CASE STUDY",
    seeMoreProjects: "Explore All Works",
    location: "Izmir & Remote",
    availability: "Available for New Projects",
    heroHeadingStart: "Scale Your Business With",
    heroHeadingEnd: "High-Converting Websites.",
    heroDesc: "I build modern, mobile-first, SEO-optimized websites designed to load instantly and convert visitors into active customers.",
    viewProjectsBtn: "View Client Work",
    contactBtn: "Get a Free Quote →",
    techStackTitle: "Core Features & Business Advantages",
    howIWorkTitle: "How We Work Together",
    howIWorkDesc: "A transparent, fast, and results-driven 4-step process to launch your digital presence.",
    step1Title: "Requirements & Strategy",
    step1Desc: "Analyzing your business goals and market needs to pick the fastest and most cost-effective web stack.",
    step2Title: "Modern UI/UX Design",
    step2Desc: "Crafting modern, accessible, and conversion-focused interfaces tailored to your brand identity.",
    step3Title: "Development & CMS Setup",
    step3Desc: "Building clean, secure pages with dynamic content management and instant contact integrations.",
    step4Title: "SEO & Global Launch",
    step4Desc: "Optimizing Core Web Vitals and launching your website with zero recurring server maintenance hassles.",
    contactTitle: "Let's Start Your Project",
    contactDesc: "Looking to build a new website or modernize your current one? Fill out the form or reach out via WhatsApp for a same-day quote.",
    locationText: "Izmir, Turkey (Worldwide Remote)",
    namePlaceholder: "Your Name / Company Name",
    emailPlaceholder: "Your Email Address",
    messagePlaceholder: "Tell me briefly about your project goals...",
    sendingBtn: "Sending...",
    successBtn: "Quote Request Sent! I will reply shortly ✓",
    sendBtn: "Request a Free Quote",
    footerDesc: "Custom web development focused on performance, speed, and business growth.",
    footerNav: "Navigation",
    footerLinks: "Links",
    footerCopyright: "© 2026 Ömer Kor. All rights reserved.",
    downloadCv: "Download Deck",

    // (Form Alanları EN)
    servicePlaceholder: "Which service do you need?",
    serviceWeb: "Corporate Website",
    serviceMobile: "CMS / Dynamic Website",
    serviceSeo: "Website Redesign & Speed Optimization",
    budgetTitle: "Target Budget",
    budgetSmall: "$500 - $1,500",
    budgetMedium: "$1,500 - $3,500",
    budgetLarge: "$3,500+",
    fileClickToUpload: "Attach brief or logo file",
    fileLimits: "PNG, JPG, or PDF (Max. 5MB)",
    kvkkLabel: "I agree to the processing of my data for quoting purposes.",

    // (Zod Hata Mesajları EN)
    errNameMin: "Name must be at least 3 characters.",
    errEmailInvalid: "Please enter a valid email address.",
    errServiceReq: "Please select a service.",
    errBudgetReq: "Please select a budget range.",
    errMessageMin: "Message must be at least 10 characters.",
    errFileTooLarge: "File size can be maximum 5MB.",
    errFileInvalidType: "You can only upload JPG, PNG, or PDF.",
    errKvkkReq: "You must accept the agreement to continue.",
    errGeneral: "Your message could not be sent. Please contact via WhatsApp directly.",
    errConnection: "A connection error occurred. Please try again."
  }
};