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

const interactiveStates = [
  { id: 1, img: photo1, text: "Halo, saya Hans Agung Sitinjak. Programmer Skena spesialis Web & ML." },
  { id: 2, img: photo2, text: "Yah masih diklik... Masih pengen liat yaa? 👀" },
  { id: 3, img: photo3, text: "Hee, kok masih diklik? Gak ada kerjaan lain bang?" },
  { id: 4, img: photo4, text: "Oiii udahh heii, udahhh bangg! Jangan dipaksa!" },
  { id: 5, img: photo5, text: "Hemm... gak lagi-lagi bang. Cukup sampai di sini." },
  { id: 6, img: photo6, text: "ARRGHHHHHH! Oke fine, kita lihat siapa yang paling sabar. -- End of Input --" }
];

const HeroBio = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const handleNavigate = (direction) => {
    const nextStage = currentStage + direction;
    if (nextStage >= 0 && nextStage <= 5) {
      setCurrentStage(nextStage);
    }
  };

  const stageData = interactiveStates[currentStage];

  return (
    <div className="relative w-full flex flex-col items-center py-10 md:py-20 overflow-hidden">
      
      {/* 1. CONTAINER KONSOL UTAMA */}
      <div className="relative w-full max-w-6xl bg-[#020617]/90 backdrop-blur-xl border border-blue-500/20 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-2xl z-10 mx-auto">
        
        {/* Header Konsol */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.4em] text-blue-500 uppercase opacity-70">
            <Terminal size={14} /> [ HANS_PROFILE_v2 ]
          </div>
          <div className="flex gap-2">
            <div className={`w-2 h-2 rounded-full ${currentStage === 5 ? 'bg-red-500 animate-pulse' : 'bg-blue-500/30 border border-blue-500'}`} />
            <div className="w-2 h-2 rounded-full bg-blue-500/30 border border-blue-500" />
          </div>
        </div>

        {/* AREA KONTEN: Grid Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[300px]">
          
          {/* SISI KIRI: Frame Gambar */}
          <div className="lg:col-span-5 aspect-square max-w-[350px] mx-auto lg:max-w-none w-full relative p-4 bg-slate-900/40 rounded-3xl border border-white/5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={stageData.id}
                src={stageData.img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover rounded-2xl"
              />
            </AnimatePresence>
          </div>

          {/* SISI KANAN: Teks & Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600/10 rounded-xl border border-blue-500/20 text-blue-500">
                  <Gamepad2 size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">// STAGE_0{stageData.id}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.h2
                key={stageData.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-2xl md:text-4xl font-black italic uppercase tracking-tighter leading-tight ${
                  stageData.id === 6 ? 'text-red-500' : 'text-white'
                }`}
              >
                {stageData.text}
              </motion.h2>
            </AnimatePresence>
            
            <div className="pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
              <span className="text-[9px] font-mono text-white">[ ID: HANS_SITINJAK ]</span>
              <span className="text-[9px] font-mono text-white flex items-center gap-2"><Database size={10}/> SYNC_STABLE</span>
            </div>
          </div>
        </div>

        {/* Progress Bar (Kanan) - Desktop Only */}
        <div className="absolute right-4 top-24 bottom-24 w-1 bg-white/5 rounded-full overflow-hidden hidden lg:block">
           <motion.div 
              className="w-full bg-blue-600 shadow-[0_0_15px_#3b82f6]"
              animate={{ height: `${(currentStage + 1) * 16.6}%` }} 
           />
        </div>
      </div>

      {/* 2. AREA NAVIGASI (Diletakkan di bawah konsol, bukan melayang di atasnya) */}
      <div className="mt-10 flex items-center gap-6 z-20">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigate(-1)}
          disabled={currentStage === 0}
          className={`p-4 md:p-6 rounded-full border-2 transition-all ${
            currentStage === 0 
            ? 'border-white/5 text-slate-800 opacity-20 cursor-not-allowed' 
            : 'border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
          }`}
        >
          <ArrowLeft size={24} strokeWidth={3} />
        </motion.button>

        <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/80 border border-white/10 rounded-full shadow-xl">
          <Dices size={18} className="text-blue-500 animate-pulse"/>
          <span className="text-white font-mono text-xs font-bold uppercase tracking-widest">Stage: 0{stageData.id}</span>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigate(1)}
          disabled={currentStage === 5}
          className={`p-4 md:p-6 rounded-full border-2 transition-all ${
            currentStage === 5 
            ? 'border-white/5 text-slate-800 opacity-20 cursor-not-allowed' 
            : 'border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
          }`}
        >
          <ArrowRight size={24} strokeWidth={3} />
        </motion.button>
      </div>

    </div>
  );
};

export default HeroBio;