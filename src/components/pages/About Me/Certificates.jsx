// src/pages/AboutUs/components/Certificates.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, ChevronRight, Sparkles, ImageOff } from 'lucide-react';
import { certificateData } from '../../../data/certificates';

const Certificates = () => {
  const [cards, setCards] = useState(certificateData);

  const rotateCards = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const topCard = newCards.shift();
      newCards.push(topCard);
      return newCards;
    });
  };

  return (
    <section className="relative w-full min-h-screen py-24 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.01] mask-image-radial-gradient-strong pointer-events-none" />

      {/* SISI KIRI: TEKS DESKRIPSI (Tetap Sama) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:w-1/2 space-y-6 z-10 p-6"
      >
        <div className="flex items-center gap-3 text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase opacity-70">
          <Award size={16} /> // REWARD_DATABASE_UNLOCKED
        </div>
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
          Achieved <span className="text-blue-600">Certificates</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg font-medium">
          Koleksi sertifikat legendaris hasil dari misi coding yang berhasil diselesaikan. Setiap kartu adalah bukti keahlian yang telah dikuasai.
        </p>
        <button 
          onClick={rotateCards}
          className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95"
        >
          Next Certificate <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* SISI KANAN: KARTU BERTUMPUK (STACKED CARDS) - UKURAN TETAP PAS */}
      <div className="lg:w-1/2 relative h-[420px] w-full max-w-[350px] md:max-w-[400px] flex items-center justify-center p-6">
        <AnimatePresence>
          {cards.map((cert, index) => (
            <motion.div
              key={cert.id}
              animate={{ 
                scale: 1 - index * 0.05,
                y: index * 12,
                zIndex: cards.length - index,
                opacity: 1 - index * 0.2
              }}
              exit={{ x: 200, opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute w-full h-full bg-[#020617] border border-white/10 rounded-[2rem] p-5 flex flex-col shadow-2xl backdrop-blur-xl group cursor-pointer overflow-hidden"
              style={{ borderLeft: `4px solid ${cert.color}` }}
              onClick={rotateCards}
            >
              
              {/* --- KUNCI: SPLIT LAYOUT VERTIKAL (PORTRAIT) --- */}
              {cert.orientation === 'portrait' ? (
                
                // LAYOUT PORTRAIT: Split Kiri (Gambar) & Kanan (Teks Vertikal)
                <div className="flex-grow flex gap-4 h-full items-stretch relative">
                  
                  {/* A. FRAME GAMBAR PORTRAIT */}
                  <div className="w-[65%] h-full rounded-xl overflow-hidden border border-white/5 bg-slate-900/40 relative">
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ imageRendering: 'crisp-edges' }} 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-700">
                        <ImageOff size={24} />
                      </div>
                    )}
                    {/* Corner Decor on Image */}
                    <div className="absolute top-0 left-0 p-2 opacity-30">
                       <div className="w-2.5 h-2.5 border-t-2 border-l-2" style={{ borderColor: cert.color }} />
                    </div>
                  </div>

                  {/* B. AREA TEKS VERTIKAL - ATAS KE BAWAH */}
                  <div className="w-[35%] flex flex-col justify-between items-center h-full py-2">
                    
                    {/* Issuer & Date (Top-Right) */}
                    <div className="flex flex-col items-center gap-1.5 [writing-mode:vertical-rl] space-y-reverse space-y-2">
                       <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">
                        Issued: {cert.date}
                       </span>
                       <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest leading-none">
                        [ {cert.issuer} ]
                       </span>
                    </div>

                    {/* Title (Center-Right, Vertikal Gede) */}
                    <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white leading-none [writing-mode:vertical-rl] group-hover:text-blue-400 transition-colors whitespace-nowrap">
                      {cert.title}
                    </h3>
                    
                    {/* Stars & ID (Bottom-Right) */}
                    <div className="flex flex-col items-center gap-3">
                       <div className="flex flex-col gap-1 text-yellow-500 opacity-50">
                           {[...Array(5)].map((_, i) => <Sparkles key={i} size={10} fill="currentColor" />)}
                       </div>
                       <div className="text-[8px] font-mono text-slate-700 uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
                          Item_ID: 0{cert.id}
                       </div>
                    </div>

                  </div>
                </div>

              ) : (

                // LAYOUT LANDSCAPE (TETAP SAMA SEPERTI SEBELUMNYA)
                <div className="flex-grow grid grid-rows-[auto,1fr] gap-4 h-full">
                    {/* A. FRAME GAMBAR LANDSCAPE */}
                    <div className="relative rounded-xl overflow-hidden border border-white/5 bg-slate-900/40 w-full aspect-video flex-shrink-0">
                      {cert.image ? (
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-700"><ImageOff size={24} /></div>
                      )}
                    </div>

                    {/* B. AREA TEKS LANDSCAPE */}
                    <div className="space-y-3 w-full flex-grow flex flex-col justify-center">
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                           <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest leading-none">[ {cert.issuer} ]</div>
                           <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">
                            Issued: {cert.date}
                           </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tight text-white leading-none group-hover:text-blue-400 transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-[10px] md:text-[11px] text-slate-500 leading-relaxed font-medium">
                            {cert.description}
                        </p>
                    </div>

                    {/* FOOTER LANDSCAPE */}
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-auto">
                        <div className="flex gap-1 text-yellow-500 opacity-50">
                           {[...Array(5)].map((_, i) => <Sparkles key={i} size={10} fill="currentColor" />)}
                        </div>
                        <div className="text-[8px] font-mono text-slate-700 uppercase tracking-[0.3em]">Item_ID: 0{cert.id}</div>
                    </div>
                </div>
              )}

              {/* Decorative Corner (Hanya muncul saat hover) */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <div className="w-4 h-4 border-t-2 border-r-2" style={{ borderColor: cert.color }} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;