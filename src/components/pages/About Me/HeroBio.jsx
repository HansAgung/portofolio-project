// src/pages/AboutUs/components/HeroBio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Gamepad2, Database, ArrowLeft, ArrowRight, Dices } from 'lucide-react';

// Import Gambar
import photo1 from '../../../assets/1.jpeg';
import photo2 from '../../../assets/2.jpeg';
import photo3 from '../../../assets/3.jpeg';
import photo4 from '../../../assets/4.jpeg';
import photo5 from '../../../assets/5.jpeg';
import photo6 from '../../../assets/6.jpeg';

// --- DATA GAMBAR & TEKS INTERAKTIF (6 Stage) ---
const interactiveStates = [
  { id: 1, img: photo1, text: "Halo, saya Hans Agung Sitinjak. Programmer Skena spesialis Web & ML." },
  { id: 2, img: photo2, text: "Yah masih diklik... Masih pengen liat yaa? 👀" },
  { id: 3, img: photo3, text: "Hee, kok masih diklik? Gak ada kerjaan lain bang?" },
  { id: 4, img: photo4, text: "Oiii udahh heii, udahhh bangg! Jangan dipaksa!" },
  { id: 5, img: photo5, text: "Hemm... gak lagi-lagi bang. Cukup sampai di sini." },
  { id: 6, img: photo6, text: "ARRGHHHHHH! Oke fine, kita lihat siapa yang paling sabar. -- End of Input --" }
];

const HeroBio = () => {
  // State manual untuk index (0-5)
  const [currentStage, setCurrentStage] = useState(0);

  // Fungsi Navigasi Manual
  const handleNavigate = (direction) => {
    const nextStage = currentStage + direction;
    if (nextStage >= 0 && nextStage <= 5) {
      setCurrentStage(nextStage);
    }
  };

  const stageData = interactiveStates[currentStage];

  return (
    // h-screen karena sudah tidak butuh ruang scroll panjang
    <section className="relative w-full h-screen mt-10 md:mt-24 flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden pb-32">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.01] mask-image-radial-gradient-strong pointer-events-none z-0" />

      {/* 1. TAMPILAN KONSOL GAME */}
      <div className="relative w-full max-w-6xl aspect-[16/10] bg-[#020617]/90 backdrop-blur-xl border border-blue-500/20 rounded-[3rem] p-6 shadow-[-20px_0_100px_rgba(37,99,235,0.1)] flex flex-col group/terminal overflow-hidden z-10">
        
        {/* Header Konsol */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.4em] text-blue-500 uppercase opacity-70">
            <Terminal size={14} /> [ USER_PROFILE_MANUAL_LOADER_V2 ]
          </div>
          <div className="flex gap-2">
            <div className={`w-2.5 h-2.5 rounded-full border ${currentStage === 5 ? 'bg-red-500 border-red-500 animate-pulse' : 'bg-blue-500/30 border-blue-500'}`} />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500/30 border border-blue-500" />
          </div>
        </div>

        {/* AREA KONTEN UTAMA */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
          
          {/* A. Frame Gambar */}
          <div className="lg:col-span-5 h-full flex items-center justify-center relative p-6 bg-slate-900/40 rounded-3xl border border-white/5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={stageData.id}
                src={stageData.img}
                alt={`Hans State ${stageData.id}`}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.1, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover rounded-2xl"
                style={{ imageRendering: 'crisp-edges' }} 
              />
            </AnimatePresence>
          </div>

          {/* B. Teks Interaktif */}
          <div className="lg:col-span-7 h-full flex flex-col justify-center p-8 space-y-6 text-left">
            <div className="flex gap-3">
              <div className="inline-flex p-3 bg-blue-600/10 rounded-xl border border-blue-500/20 text-blue-500">
                  <Gamepad2 size={24} />
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2">
                  // Input_Stage: 0{stageData.id} / 06
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={stageData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-2xl md:text-3xl font-black italic uppercase tracking-tight leading-none ${
                  stageData.id === 6 ? 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'text-white'
                }`}
              >
                {stageData.text}
              </motion.p>
            </AnimatePresence>
            
            <div className="pt-8 border-t border-white/5 text-[9px] font-mono text-slate-700 uppercase tracking-widest flex justify-between items-center mt-auto">
              <p>[ ID: HANS_SITINJAK ]</p>
              <p>Rank: S-Class Developer</p>
              <p className="flex items-center gap-1"><Database size={12}/> STATIC_SYNC</p>
            </div>
          </div>
        </div>

        {/* Progress Bar Samping (Manual) */}
        <div className="absolute right-6 top-24 bottom-24 w-1 bg-white/5 rounded-full overflow-hidden">
           <motion.div 
              className="w-full bg-blue-600 shadow-[0_0_15px_#3b82f6]"
              animate={{ height: `${(currentStage + 1) * 16.6}%` }} 
           />
        </div>
      </div>

      {/* 2. TOMBOL KONTROL GAME */}
      <div className="absolute bottom-12 flex items-center gap-6 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigate(-1)}
          disabled={currentStage === 0}
          className={`p-5 rounded-full border-2 transition-all flex items-center justify-center shadow-lg ${
            currentStage === 0 
            ? 'border-white/5 bg-slate-900/50 text-slate-700 cursor-not-allowed opacity-30' 
            : 'border-blue-500 bg-blue-600 text-white shadow-blue-500/40'
          }`}
        >
          <ArrowLeft size={24} strokeWidth={3} />
        </motion.button>

        <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/80 backdrop-blur-sm border border-white/5 rounded-full text-[10px] font-mono text-slate-500 uppercase tracking-widest shadow-xl">
          <Dices size={16} className="text-blue-500 animate-pulse"/> STAGE: 
          <span className="text-white font-black text-xs">0{stageData.id}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigate(1)}
          disabled={currentStage === 5}
          className={`p-5 rounded-full border-2 transition-all flex items-center justify-center shadow-lg ${
            currentStage === 5 
            ? 'border-white/5 bg-slate-900/50 text-slate-700 cursor-not-allowed opacity-30' 
            : 'border-blue-500 bg-blue-600 text-white shadow-blue-500/40'
          }`}
        >
          <ArrowRight size={24} strokeWidth={3} />
        </motion.button>
      </div>

    </section>
  );
};

export default HeroBio;