import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Smartphone, Cpu, Database, 
  Globe, CassetteTape, ChevronRight, 
  Zap, Lock, Unlock, Hash, Filter, ChevronDown
} from 'lucide-react';

// --- DATA DUMMY ILMU (Sesuai Minat Hans) ---
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsDecrypting(true);
    const timer = setTimeout(() => setIsDecrypting(false), 600);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredData = knowledgeBase.filter(item => item.category === selectedCategory);
  const activeCategory = categories.find(c => c.title === selectedCategory);

  return (
    <div className="relative w-full flex flex-col items-center py-20 px-4 md:px-10">
      
      {/* HEADER SECTION */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 mt-10 mb-16">
        <div className="space-y-3">
          <h3 className="text-blue-500 text-[10px] tracking-[0.5em] uppercase flex items-center justify-center gap-2 opacity-70">
            <Terminal size={14} /> [ SYSTEM_DECRYPT_V4 ]
          </h3>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tighter">
            Arsip Misi & <span className="text-blue-500">Log Ilmu</span>
          </h2>
          <p className="text-slate-500 text-[9px] uppercase tracking-widest font-mono">
            {isDecrypting ? ">> Status: Decrypting..." : ">> Status: Ready to Access"}
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SIDEBAR / DROPDOWN NAVIGASI */}
        <div className="lg:col-span-3 space-y-4 z-40">
          <div className="flex items-center gap-2 text-slate-600 font-mono text-[9px] uppercase tracking-widest mb-4">
            <Filter size={12} /> Sektor_Navigasi
          </div>

          {/* MOBILE & TABLET DROPDOWN (Hanya muncul di < lg) */}
          <div className="lg:hidden relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full flex items-center justify-between p-4 bg-slate-900/60 border border-white/10 rounded-2xl transition-all ${isDropdownOpen ? 'border-blue-500/50' : ''}`}
            >
              <div className="flex items-center gap-3">
                <span className={activeCategory.color}>{activeCategory.icon}</span>
                <span className="text-xs font-black uppercase text-white">{selectedCategory}</span>
              </div>
              <ChevronDown size={18} className={`text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#020617] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 backdrop-blur-xl"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat.title}
                      onClick={() => {
                        setSelectedCategory(cat.title);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-none text-left"
                    >
                      <span className={cat.color}>{cat.icon}</span>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${selectedCategory === cat.title ? 'text-blue-400' : 'text-slate-400'}`}>
                        {cat.title}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DESKTOP SIDEBAR (Hanya muncul di >= lg) */}
          <div className="hidden lg:flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 group ${
                  selectedCategory === cat.title 
                  ? `${cat.bg} border-blue-500/50 shadow-lg` 
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`${selectedCategory === cat.title ? cat.color : 'text-slate-500'} transition-transform group-hover:scale-110`}>
                  {cat.icon}
                </div>
                <span className={`text-[11px] font-black uppercase tracking-widest ${selectedCategory === cat.title ? 'text-white' : 'text-slate-500'}`}>
                  {cat.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            {isDecrypting ? (
              <motion.div 
                key="loader"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="h-64 flex flex-col items-center justify-center space-y-4 bg-slate-900/10 border border-dashed border-white/5 rounded-[2.5rem]"
              >
                <Zap className="text-blue-500 animate-bounce" size={28} />
                <span className="text-[9px] font-mono text-slate-600 uppercase">Processing Archives...</span>
              </motion.div>
            ) : (
              <motion.div 
                key="list"
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                className="grid gap-6"
              >
                {filteredData.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 5 }}
                    className="p-6 md:p-8 bg-[#020617] border border-white/5 rounded-[2rem] group cursor-pointer transition-all hover:border-blue-500/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 bg-blue-600/10 border border-blue-500/20 rounded text-[7px] font-mono text-blue-500 uppercase">
                          {item.level}
                        </span>
                        <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest">
                          <Hash size={10} className="inline" /> NODE_{item.id}
                        </span>
                      </div>
                      <span className="text-[8px] font-mono text-slate-600 uppercase">
                        {item.date} // {item.views} Viewers
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black italic uppercase text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] md:text-[11px] text-slate-500 font-medium leading-relaxed">
                      {item.content}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                      <button className="flex items-center gap-2 text-[9px] font-black uppercase text-blue-500 group-hover:text-white transition-colors">
                        Expand Archive <ChevronRight size={12} />
                      </button>
                      {item.level === "Legendary" ? <Lock size={12} className="text-red-900 opacity-50" /> : <Unlock size={12} className="text-green-900 opacity-30" />}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ForumIlmu;