import React from 'react';
import { motion } from 'framer-motion';
import photo1 from '../../../assets/1.jpeg';
import photo2 from '../../../assets/2.jpeg';
import photo3 from '../../../assets/3.jpeg';

const HeroGamified = () => {
  const images = [photo2, photo1, photo3];

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#020617]">
      
      {/* --- BACKGROUND LAYER: 3 FOTO SEJAJAR --- */}
      <div className="absolute inset-0 z-0 flex w-full h-full opacity-50 transition-opacity duration-1000">
        {images.map((img, index) => (
          <div 
            key={index}
            className="h-full flex-1 bg-cover bg-center bg-no-repeat border-x border-white/5 grayscale-[0.3] contrast-[1.1]"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Overlay gelap agar teks tetap kontras */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/20 to-[#020617]" />
      </div>

      {/* --- GRID GAMIFIED LAYER --- */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-20 text-center px-4">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-500 font-mono tracking-[0.5em] text-xs mb-4 uppercase"
        >
          [ Player One Ready ]
        </motion.p>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none"
        >
          Leveling Up <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Digital Worlds
          </span>
        </motion.h1>

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="mt-12"
        >
          <button className="group relative px-8 py-4 bg-blue-600 font-black uppercase tracking-widest text-sm skew-x-[-15deg] hover:bg-white hover:text-blue-600 transition-all shadow-[8px_8px_0px_#1e3a8a] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
            Penasaran Dengan Saya?
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white group-hover:bg-blue-600"></span>
          </button>
        </motion.div>
      </div>

      {/* --- FLOATING HUD STATS --- */}
      <div className="absolute bottom-10 left-10 hidden md:block border-l-2 border-blue-500 pl-4 py-2 z-20">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Current Tech Stack</p>
        <p className="text-sm font-black text-white uppercase italic">PHP / JS / React Native</p>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block text-right z-20">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Status</p>
        <p className="text-sm font-black text-green-500 animate-pulse font-mono uppercase tracking-tighter">STABLE // 100% FPS</p>
      </div>
    </section>
  );
};

export default HeroGamified;