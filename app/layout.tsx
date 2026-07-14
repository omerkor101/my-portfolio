import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Context ve Component importları eklendi (Dosya yollarını kendi projene göre kontrol et)
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ömer Kor | Fullstack Developer",
  description: "Modern web çözümleri ve kullanıcı deneyimi odaklı projeler.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0f172a] text-slate-200 antialiased`}>
        
        <LanguageProvider>
          
          <Navbar />
          
          {children}
          
        </LanguageProvider>
        
      </body>
    </html>
  );
}