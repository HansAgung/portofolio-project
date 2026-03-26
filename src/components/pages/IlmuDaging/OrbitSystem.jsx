import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, Smartphone, Terminal, Cpu, Database, Globe, CassetteTape } from 'lucide-react';

const orbitItems = [
  { icon: <BrainCircuit size={24} />, title: "ML Lab", tech: "Python, TensorFlow", color: "border-blue-500", glow: "shadow-blue-900/40" },
  { icon: <Smartphone size={24} />, title: "Mobile Dev", tech: "Flutter, VIPER", color: "border-pink-500", glow: "shadow-pink-900/40" },
  { icon: <Terminal size={24} />, title: "Web System", tech: "Laravel, PHP", color: "border-green-500", glow: "shadow-green-900/40" },
  { icon: <Cpu size={24} />, title: "Backend API", tech: "Go, Rest API", color: "border-purple-500", glow: "shadow-purple-900/40" },
  { icon: <Database size={24} />, title: "Cloud Arch", tech: "AWS, Docker", color: "border-cyan-500", glow: "shadow-cyan-900/40" },
  { icon: <Globe size={24} />, title: "Info Tech", tech: "Industry News", color: "border-white", glow: "shadow-white/20" },
  { icon: <CassetteTape size={24} />, title: "Legacy Sys", tech: "Java, Kotlin", color: "border-yellow-500", glow: "shadow-yellow-900/40" },
];

const OrbitSystem = () => {
  const navigate = useNavigate();
  const [dimensions, setDimensions] = useState({
    radiusX: window.innerWidth < 768 ? 160 : 450, // Radius sempit di mobile
    radiusY: window.innerWidth < 768 ? 60 : 120,   // Elips lebih tipis di mobile
    cardWidth: window.innerWidth < 768 ? 140 : 240 // Kartu lebih kecil di mobile
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        radiusX: window.innerWidth < 768 ? 160 : 450,
        radiusY: window.innerWidth < 768 ? 60 : 120,
        cardWidth: window.innerWidth < 768 ? 140 : 240
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = orbitItems.length;

  const handleOrbitClick = (title) => {
    if (title === 'ML Lab'){
      navigate('/IlmuDaging/tanya-jawab');
    } else {
      navigate('/IlmuDaging/forum-ilmu');
    }
  }

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {orbitItems.map((item, index) => {
        const startAngle = (index / totalItems) * Math.PI * 2;

        return (
          <motion.div
            key={index}
            onClick={() => handleOrbitClick(item.title)}
            className={`absolute p-3 md:p-6 bg-slate-900/90 border-2 ${item.color} ${item.glow} shadow-2xl rounded-[1.5rem] md:rounded-[2rem] backdrop-blur-md cursor-pointer group flex flex-col items-center text-center`}
            style={{ 
                width: dimensions.cardWidth,
                x: Math.cos(startAngle) * dimensions.radiusX,
                y: Math.sin(startAngle) * dimensions.radiusY,
            }}
            animate={{
              x: Array.from({ length: 37 }, (_, i) => Math.cos(startAngle + (i * Math.PI * 2) / 36) * dimensions.radiusX),
              y: Array.from({ length: 37 }, (_, i) => Math.sin(startAngle + (i * Math.PI * 2) / 36) * dimensions.radiusY),
              scale: Array.from({ length: 37 }, (_, i) => {
                const currentY = Math.sin(startAngle + (i * Math.PI * 2) / 36) * dimensions.radiusY;
                return (window.innerWidth < 768 ? 0.6 : 0.75) + (0.25 * (currentY + dimensions.radiusY)) / (2 * dimensions.radiusY);
              }),
              zIndex: Array.from({ length: 37 }, (_, i) => {
                const currentY = Math.sin(startAngle + (i * Math.PI * 2) / 36) * dimensions.radiusY;
                return currentY > 0 ? 50 : 10;
              }),
              opacity: Array.from({ length: 37 }, (_, i) => {
                const currentY = Math.sin(startAngle + (i * Math.PI * 2) / 36) * dimensions.radiusY;
                return currentY > 0 ? 1 : 0.4; // Lebih redup di belakang untuk mobile
              }),
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
          >
            {/* Ikon */}
            <div className={`p-2 md:p-4 bg-white/5 rounded-xl md:rounded-2xl mb-2 md:mb-5 border border-dashed opacity-70 group-hover:opacity-100 transition-all ${item.color}`}>
              {item.icon}
            </div>
            
            {/* Judul & Tech */}
            <h3 className="text-[10px] md:text-xl font-black italic uppercase tracking-tight text-white mb-1 md:mb-2 group-hover:text-blue-400">
              {item.title}
            </h3>
            <p className="text-[7px] md:text-[10px] font-mono text-slate-500 uppercase tracking-tighter md:tracking-widest bg-white/5 px-2 md:px-3 py-1 rounded-full whitespace-nowrap">
              {item.tech}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OrbitSystem;