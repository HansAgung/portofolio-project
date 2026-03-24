import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, BrainCircuit, Target, Trophy } from 'lucide-react';
import MapBackgroundPNG from '../../../assets/map3.png'; 

// --- DATA MAPPING SEKTOR (Koordinat Tetap) ---
const realmSectors = [
  { 
    id: "Web Development", 
    title: "WEB CITADEL", 
    icon: <Layout className="w-full h-full" />, 
    color: "#eab308", 
    x: 280, y: 580 
  },
  { 
    id: "Mobile Development", 
    title: "MOBILE CAMP", 
    icon: <Smartphone className="w-full h-full" />, 
    color: "#00b4d8", 
    x: 680, y: 650 
  },
  { 
    id: "Machine Learning", 
    title: "AI SANCTUM", 
    icon: <BrainCircuit className="w-full h-full" />, 
    color: "#a7c957", 
    x: 640, y: 320 
  }
];

const RealmMap = ({ onRealmClick }) => {
  const [hoveredRealm, setHoveredRealm] = useState(null);

  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] flex flex-col items-center justify-center p-4 md:p-10 border border-white/5 rounded-[2rem] md:rounded-[3rem] bg-[#020617] overflow-hidden group/map">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.01] mask-image-radial-gradient-strong pointer-events-none z-0" />

      {/* 1. HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center space-y-2 z-30 mb-auto mt-4 pointer-events-none"
      >
        <div className="flex items-center justify-center gap-2 text-[8px] md:text-[10px] font-mono tracking-[0.3em] text-blue-500 uppercase opacity-60">
          <Target size={12} /> // OPERATION: SKILL_DISPLAY
        </div>
        <h1 className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
          CHOOSE <span className="text-blue-600">OPTION!</span>
        </h1>
      </motion.div>

      {/* 2. AREA PETA SVG */}
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center p-2 md:p-12">
        <svg 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="xMidYMid meet" 
          className="w-full h-full"
        >
          {/* Gambar Peta */}
          <image 
            href={MapBackgroundPNG} 
            x="0" y="0" 
            width="1000" height="1000" 
            className={`transition-all duration-500 ${hoveredRealm ? 'opacity-40 scale-[1.02]' : 'opacity-100'}`}
            style={{ imageRendering: 'crisp-edges' }}
          />

          {/* 3. LAYER INTERACTIVE (Auto-Scaling Content) */}
          {realmSectors.map((sector) => (
            <foreignObject
              key={sector.id}
              x={sector.x - 75} // Ukuran kotak interaksi diperkecil agar tidak tabrakan
              y={sector.y - 60}
              width="150"       // Width dikecilkan dari 200 ke 150
              height="120"
              className="overflow-visible pointer-events-auto cursor-pointer"
            >
              <div 
                className="w-full h-full flex flex-col items-center justify-center text-center p-1"
                onClick={() => onRealmClick(sector.id)}
                onMouseEnter={() => setHoveredRealm(sector.id)}
                onMouseLeave={() => setHoveredRealm(null)}
              >
                {/* Ikon Container - Ukuran Responsif */}
                {/* Mobile: w-7 h-7 | Desktop: md:w-14 md:h-14 */}
                <div 
                    className="relative w-15 h-15 md:w-20 md:h-20 p-1.5 md:p-3.5 rounded-lg md:rounded-2xl mb-1.5 md:mb-3 border backdrop-blur-md transition-all duration-300"
                    style={{
                        borderColor: hoveredRealm === sector.id ? sector.color : 'rgba(255,255,255,0.1)',
                        backgroundColor: hoveredRealm === sector.id ? `${sector.color}20` : 'rgba(15, 23, 42, 0.7)',
                        boxShadow: hoveredRealm === sector.id ? `0 0 15px ${sector.color}40` : 'none',
                        transform: hoveredRealm === sector.id ? 'scale(1.1) translateY(-3px)' : 'scale(1)'
                    }}
                >
                    <div style={{ color: hoveredRealm === sector.id ? sector.color : '#94a3b8' }}>
                        {sector.icon}
                    </div>
                </div>
                
                {/* Judul Teks - Skala Font diperkecil di Mobile */}
                <div className="flex flex-col items-center max-w-[90px] md:max-w-none">
                    <h2 
                        className="font-black italic uppercase tracking-tighter transition-all duration-300 leading-none" 
                        style={{ 
                            color: hoveredRealm === sector.id ? sector.color : 'white',
                            // Mobile: 7px | Desktop: md: 16px
                            fontSize: 'clamp(12px, 5vw, 40px)', 
                            textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                    {sector.title}
                    </h2>
                    {/* Sembunyikan detail text di mobile agar tidak sumpek */}
                    <p className="hidden md:block text-[15px] font-mono text-slate-500 mt-1 uppercase tracking-widest">
                       SECTOR_SCAN // 0{sector.id.length}
                    </p>
                </div>
              </div>
            </foreignObject>
          ))}
        </svg>
      </div>

      {/* 4. FOOTER INFO */}
      <div className="relative w-full flex justify-between px-6 md:px-10 text-[7px] md:text-[9px] font-mono text-slate-700 uppercase tracking-widest border-t border-white/5 pt-4 mb-6 z-30 pointer-events-none">
        <p className="hidden sm:block">[ STATUS: SECURED ]</p>
        <p>MAP_TYPE: HD_SVG_V2 // {hoveredRealm ? `LOCK: ${hoveredRealm}` : 'READY'}</p>
        <p className="flex items-center gap-1"><Trophy size={10} className="text-yellow-500" /> S-CLASS DEV</p>
      </div>

    </section>
  );
};

export default RealmMap;