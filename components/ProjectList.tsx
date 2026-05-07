"use client"; // İşte sihirli kelime bu!

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectList({ projects }: { projects: any[] }) {
  const [showAll, setShowAll] = useState(false);

  return (
      <section id="projects" className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 text-center md:text-left">Seçkin Projeler</h2>
            <p className="text-slate-400 max-w-md text-lg text-center md:text-left">Fikirden yayına, uçtan uca geliştirdiğim modern web çözümleri.</p>
          </div>
          {!showAll && projects.length > 6 && (
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
                <img
                  src={project.imageUrl || "/placeholder.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Etiketler (Tags) alanı boş gelirse hata vermemesi için optional chaining (?.) ekledik */}
                  {project.tags?.map((tag: string) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="pt-6 border-t border-slate-800">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white group-hover:text-blue-400 flex items-center gap-2">
                    DETAYLARI İNCELE <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 6 && (
          <div className="mt-16 text-center">
            <button onClick={() => setShowAll(true)} className="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all">
              Diğer Projeleri ve Hizmetleri Gör
            </button>
          </div>
        )}
      </section>
  );
}