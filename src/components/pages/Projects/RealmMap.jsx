// src/pages/Projects/components/RealmMap.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, BrainCircuit, Target, Trophy } from 'lucide-react';
// IMPORT ASET PNG KAMU (Pastikan Path Benar)
import MapBackgroundPNG from '../../../assets/map3.png'; 

// --- DATA MAPPING SEKTOR ---
const realmSectors = [
  { 
    id: "Web Development", 
    title: "THE WEB CITADEL", 
    icon: <Layout size={24} />, 
    color: "#eab308", // Yellow
    contentPos: { top: '50%', left: '28%' } 
  },
  { 
    id: "Mobile Development", 
    title: "MOBILE NOMAD CAMP", 
    icon: <Smartphone size={24} />, 
    color: "#00b4d8", // Sky Blue Request
    contentPos: { top: '52%', left: '50%' } 
  },
  { 
    id: "Machine Learning", 
    title: "AI RESEARCH SANCTUM", 
    icon: <BrainCircuit size={24} />, 
    color: "#a7c957", // Moss Green Request
    contentPos: { top: '26%', left: '54%' } 
  }
];

const RealmMap = ({ onRealmClick }) => {
  const [hoveredRealm, setHoveredRealm] = useState(null);

  const handleClickDetection = (realmId) => {
    console.log(`Menuju Sektor: ${realmId}`);
    onRealmClick(realmId);
  };

  return (
    <section className="relative w-full h-[85vh] flex flex-col items-center justify-center p-6 border border-white/5 rounded-[3rem] bg-[#020617] overflow-hidden group/map mt-auto">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.01] mask-image-radial-gradient-strong pointer-events-none z-0" />

      {/* 1. LAYER HEADER - Dengan Jarak Bawah Proporsional */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center space-y-1.5 z-30 mb-100 mt-2 pointer-events-none"
      >
        <div className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-[0.3em] text-blue-500 uppercase opacity-60">
          <Target size={12} /> // OPERATION: SKILL_DISPLAY
        </div>
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
          CHOOSE UR <span className="text-blue-600">OPTION!</span>
        </h1>
        <p className="text-slate-500 font-mono text-[9px] italic max-w-sm mx-auto opacity-70">Tunjuk dan klik sektor pada peta taktikal untuk meninjau arsip misi.</p>
      </motion.div>

      {/* 2. AREA PETA (SVG Container) */}
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center p-8">
        <svg 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="xMidYMid meet" 
          className="w-full h-full"
        >
          <image 
            href={MapBackgroundPNG} 
            x="0" y="0" 
            width="1000" height="1000" 
            className={`transition-all duration-300 ${hoveredRealm ? 'opacity-70' : 'opacity-100'}`}
            style={{ 
              imageRendering: 'crisp-edges',
              filter: `drop-shadow(0 0 5px #eab30840)` 
            }}
          />
        </svg>
      </div>

      {/* 3. LAYER INTERACTIVE CONTENT */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {realmSectors.map((sector) => (
          <div 
            key={sector.id}
            className="absolute flex flex-col items-center justify-center text-center p-4 transition-all duration-300 pointer-events-auto cursor-grabbing group/sector"
            style={{ ...sector.contentPos }}
            onClick={() => handleClickDetection(sector.id)}
            onMouseEnter={() => setHoveredRealm(sector.id)}
            onMouseLeave={() => setHoveredRealm(null)}
          >
            {/* Glow Hologram dinamis sesuai warna sektor */}
            <div 
              className="absolute -inset-12 rounded-full blur-[80px] transition-opacity duration-300 pointer-events-none"
              style={{ 
                backgroundColor: hoveredRealm === sector.id ? `${sector.color}20` : 'transparent',
                opacity: hoveredRealm === sector.id ? 1 : 0 
              }} 
            />

            {/* Ikon Container */}
            <div 
                className="relative p-3 rounded-2xl mb-3 border backdrop-blur-sm transition-all duration-300"
                style={{
                    borderColor: hoveredRealm === sector.id ? sector.color : 'rgba(255,255,255,0.1)',
                    backgroundColor: hoveredRealm === sector.id ? `${sector.color}15` : 'rgba(15, 23, 42, 0.5)',
                    boxShadow: hoveredRealm === sector.id ? `0 0 15px ${sector.color}40` : 'none',
                    transform: hoveredRealm === sector.id ? 'scale(1.1)' : 'scale(1)'
                }}
            >
              <div style={{ color: hoveredRealm === sector.id ? sector.color : '#94a3b8' }}>
                {sector.icon}
              </div>
            </div>
            
            {/* Judul Sektor */}
            <h2 
                className="relative text-lg md:text-xl font-black italic uppercase tracking-tight transition-colors duration-300" 
                style={{ color: hoveredRealm === sector.id ? sector.color : 'white' }}
            >
              {sector.title}
            </h2>
            <p className="relative text-[8px] font-mono tracking-widest text-slate-500 mt-1 uppercase">
                SEKTOR: {sector.id.toUpperCase()}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Bar */}
      <div className="relative bottom-0 w-full flex justify-between px-10 text-[9px] font-mono text-slate-700 uppercase tracking-widest border-t border-white/5 pt-4 px-4 mt-auto mb-6 z-30 pointer-events-none">
        <p>[ SYSTEM_STATUS: SECURED ]</p>
        <p>MAP_TYPE: HD_ORGANIC_PNG // VERSION: 3.3</p>
        <p className="flex items-center gap-1"><Trophy size={12} className="text-yellow-500" /> Rank: S-Class Developer</p>
      </div>

    </section>
  );
};

export default RealmMap;