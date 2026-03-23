import React from 'react';
import { motion } from 'framer-motion';
import RubikCube from './RubikCube';

const AboutSection = () => {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-32 bg-[#020617] snap-start overflow-hidden gap-10">
      
      {/* BAGIAN KIRI: TEKS BIO */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        // max-w-xl memastikan teks tidak melebar menabrak rubik
        className="flex-1 max-w-xl space-y-6 z-10"
      >
        <h2 className="text-blue-500 font-mono tracking-[0.3em] text-sm uppercase opacity-80">
          [ PLAYER_PROFILE ]
        </h2>
        
        <h1 className="text-6xl md:text-7xl font-black uppercase italic leading-none tracking-tighter">
          HANS <br /> 
          <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            DEVELOPER
          </span>
        </h1>
        
        <p className="text-slate-400 text-lg border-l-4 border-blue-600 pl-6 py-2 bg-blue-600/5 rounded-r-lg">
          Sama seperti Rubik, setiap baris kode adalah teka-teki. Saya membangun solusi digital yang presisi, berwarna, dan tentu saja, interaktif.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-black uppercase skew-x-[-10deg] hover:scale-105 hover:bg-blue-500 transition-all shadow-[5px_5px_0px_#1e3a8a] active:shadow-none active:translate-x-1 active:translate-y-1">
            Lihat Project
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-500 font-black uppercase skew-x-[-10deg] hover:bg-blue-600 hover:text-white transition-all">
            Download CV
          </button>
        </div>
      </motion.div>

      {/* BAGIAN KANAN: RUBIK 3D */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 h-[500px] md:h-full w-full flex items-center justify-center relative"
      >
        {/* Dekorasi HUD dibelakang rubik */}
        <div className="absolute w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="absolute top-1/4 right-0 text-[10px] font-mono text-blue-500/40 animate-pulse hidden md:block uppercase tracking-widest">
          // INTERACTIVE_3D_CUBE: STABLE
        </div>
        
        {/* Container untuk membatasi ukuran canvas agar tidak liar */}
        <div className="w-full h-full max-h-[600px] flex items-center justify-center">
          <RubikCube />
        </div>
      </motion.div>

    </section>
  );
};

export default AboutSection;