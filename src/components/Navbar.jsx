import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react'; // Tambah icon untuk mobile

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Tutup menu otomatis jika pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { label: "Siapa saya", path: "/about-me" },
    { label: "Bantu Saya", path: "/service" },
    { label: "Hans.Dev", path: "/" },
    { label: "Projek Saya", path: "/project" },
    { label: "IlmuDaging", path: "/IlmuDaging" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-[100] px-4">
      {/* DESKTOP & TABLET WIDE (lg ke atas) */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden lg:flex bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full items-center gap-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        {menuItems.map((item) => (
          <Link 
            key={item.label} 
            to={item.path} 
            className={`text-[11px] font-bold uppercase tracking-widest transition-all hover:text-green-400 ${
              item.label === "Hans.Dev" 
              ? "flex items-center gap-2 text-white italic text-xl font-black" 
              : "text-slate-400"
            }`}
          >
            {item.label === "Hans.Dev" && (
              <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
            )}
            {item.label}
          </Link>
        ))}
      </motion.div>

      {/* MOBILE & TABLET (sm & md) - HAMBURGER TRIGGER */}
      <div className="lg:hidden w-full max-w-md flex justify-between items-center bg-black/80 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-3xl shadow-2xl">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
          <span className="font-black italic text-lg uppercase">Hans.<span className="text-green-600">Dev</span></span>
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-4 shadow-2xl lg:hidden"
          >
            {menuItems.filter(item => item.label !== "Hans.Dev").map((item) => (
              <Link 
                key={item.label} 
                to={item.path}
                className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-green-500/50 transition-all group"
              >
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300 group-hover:text-white">
                  {item.label}
                </span>
                <ChevronRight size={18} className="text-green-500" />
              </Link>
            ))}
            
            {/* Status Info di dalam menu mobile */}
            <div className="mt-4 pt-6 border-t border-white/10 flex justify-between items-center px-2">
              <span className="text-[10px] font-mono text-slate-500 tracking-tighter uppercase font-bold">System_Active: v2.0</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;