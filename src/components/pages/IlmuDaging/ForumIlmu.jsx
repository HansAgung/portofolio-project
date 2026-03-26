import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Smartphone, Cpu, Database, 
  Globe, CassetteTape, Search, ChevronRight, 
  Zap, Lock, Unlock, Hash, Filter
} from 'lucide-react';

// --- DATA DUMMY ILMU (Loot Archives) ---
const knowledgeBase = [
  { id: 1, category: "Mobile Dev", title: "VIPER Architecture Deep Dive", level: "Expert", date: "2026-03-10", views: "1.2k", content: "Implementasi Clean Architecture pada Flutter untuk skalabilitas tinggi." },
  { id: 2, category: "Web System", title: "Laravel Octane Optimization", level: "Advanced", date: "2026-02-25", views: "850", content: "Tuning performa PHP menggunakan Swoole dan RoadRunner." },
  { id: 3, category: "Backend API", title: "Go Concurrency Patterns", level: "S-Class", date: "2026-03-15", views: "2.1k", content: "Menguasai Goroutines dan Channels untuk sistem high-concurrency." },
  { id: 4, category: "Cloud Arch", title: "Docker Container Hardening", level: "Legendary", date: "2026-01-12", views: "3.4k", content: "Keamanan tingkat tinggi untuk manajemen microservices di AWS." },
  { id: 5, category: "Info Tech", title: "The Future of Web3", level: "Common", date: "2026-03-20", views: "500", content: "Analisis tren teknologi desentralisasi di industri finansial." },
  { id: 6, category: "Legacy Sys", title: "Java to Kotlin Migration", level: "Rare", date: "2026-02-01", views: "920", content: "Strategi migrasi sistem perbankan lama ke stack modern." },
  { id: 7, category: "Web System", title: "Native PHP Inventory System", level: "Master", date: "2026-01-20", views: "4.5k", content: "Bedah arsitektur Gema Enterprise menggunakan PHP Native." },
];

const categories = [
  { title: "Mobile Dev", icon: <Smartphone size={16} />, color: "text-pink-500", bg: "bg-pink-500/10" },
  { title: "Web System", icon: <Terminal size={16} />, color: "text-green-500", bg: "bg-green-500/10" },
  { title: "Backend API", icon: <Cpu size={16} />, color: "text-purple-500", bg: "bg-purple-500/10" },
  { title: "Cloud Arch", icon: <Database size={16} />, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { title: "Info Tech", icon: <Globe size={16} />, color: "text-white", bg: "bg-white/10" },
  { title: "Legacy Sys", icon: <CassetteTape size={16} />, color: "text-yellow-500", bg: "bg-yellow-500/10" },
];

const ForumIlmu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web System");
  const [isDecrypting, setIsDecrypting] = useState(false);

  // Efek simulasi "Decrypting" saat ganti kategori
  useEffect(() => {
    setIsDecrypting(true);
    const timer = setTimeout(() => setIsDecrypting(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredData = knowledgeBase.filter(item => item.category === selectedCategory);

  return (
    <div className="relative w-full flex flex-col items-center py-20 px-4 md:px-10">
      
      {/* 1. HEADER SECTION */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 mt-10 mb-16">
        <div className="space-y-4">
          <motion.h3 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-500 text-[10px] tracking-[0.5em] uppercase flex items-center justify-center gap-2"
          >
            <Terminal size={14} /> [ SYSTEM_DECRYPT_V4_STABLE ]
          </motion.h3>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tighter max-w-2xl">
            Arsip Misi & <span className="text-blue-500">Log Pengetahuan</span>
          </h2>
          <p className="text-slate-500 text-[9px] uppercase tracking-widest leading-relaxed font-mono">
            {isDecrypting ? ">> Status: Decrypting Files..." : ">> Status: All Systems Functional // Access: Level_S"}
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* 2. SIDEBAR FILTER (Gamified Menu) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-6">
            <Filter size={14} /> Sektor_Navigasi
          </div>
          <div className="flex flex-wrap lg:flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 group w-full lg:w-auto ${
                  selectedCategory === cat.title 
                  ? `${cat.bg} border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]` 
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`${selectedCategory === cat.title ? cat.color : 'text-slate-500'} group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <span className={`text-[11px] font-black uppercase tracking-widest ${selectedCategory === cat.title ? 'text-white' : 'text-slate-500'}`}>
                  {cat.title}
                </span>
                {selectedCategory === cat.title && (
                  <motion.div layoutId="activeDot" className="ml-auto w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3. MAIN CONTENT (Mission Logs) */}
        <div className="lg:col-span-9 space-y-6">
          <AnimatePresence mode="wait">
            {isDecrypting ? (
              <motion.div 
                key="loader"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="h-64 flex flex-col items-center justify-center space-y-4 bg-slate-900/20 border border-dashed border-white/5 rounded-[2.5rem]"
              >
                <Zap className="text-blue-500 animate-bounce" size={32} />
                <span className="text-[10px] font-mono text-slate-500 uppercase animate-pulse">Scanning Archives...</span>
              </motion.div>
            ) : (
              <motion.div 
                key="list"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="grid gap-6"
              >
                {filteredData.length > 0 ? filteredData.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 10 }}
                    className="relative p-8 bg-[#020617] border border-white/5 rounded-[2rem] group cursor-pointer overflow-hidden transition-all hover:border-blue-500/30 shadow-xl"
                  >
                    {/* Background ID Decoration */}
                    <div className="absolute top-0 right-0 p-6 text-[40px] font-black italic text-white/[0.02] pointer-events-none uppercase">
                      REF_{item.id}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-[8px] font-mono text-blue-500 uppercase tracking-widest">
                          {item.level}
                        </span>
                        <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                          <Hash size={10} className="inline mr-1" /> DATA_NODE: {item.id}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">
                        Timestamp: {item.date} // Views: {item.views}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black italic uppercase text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-2xl">
                      {item.content}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-500 hover:text-white transition-colors group/btn">
                        Open Archive <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      {item.level === "Legendary" ? <Lock size={14} className="text-red-500 opacity-50" /> : <Unlock size={14} className="text-green-500 opacity-30" />}
                    </div>
                  </motion.div>
                )) : (
                  <div className="p-20 text-center bg-slate-900/20 rounded-[2.5rem] border border-dashed border-white/5">
                    <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">No mission data found in this sector.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ForumIlmu;