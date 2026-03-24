import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  // Mapping menu ke path URL
  const menuItems = [
    { label: "Siapa saya", path: "/about-me" },
    { label: "Bantu Saya", path: "/service" },
    { label: "Hans.Dev", path: "/" },
    { label: "Projek Saya", path: "/project" },
    { label: "IlmuDaging", path: "/IlmuDaging" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-[100] px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full flex items-center gap-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        {menuItems.map((item) => {
          if (item.label === "Hans.Dev") {
            return (
              <Link key={item.label} to={item.path} className="flex items-center gap-2 group cursor-pointer">
                <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
                <span className="font-black tracking-tighter text-xl uppercase italic group-hover:text-green-400 transition-colors">
                  {item.label}
                </span>
              </Link>
            );
          }
          
          return (
            <Link 
              key={item.label} 
              to={item.path}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              {item.label}
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
};

export default Navbar;