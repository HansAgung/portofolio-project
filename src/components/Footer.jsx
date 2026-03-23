import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-10 md:px-24 bg-[#020617] border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 snap-start">
      
      {/* BAGIAN KIRI: Logo & Copyright */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse shadow-[0_0_10px_#2563eb]"></div>
          <span className="text-xl font-black italic tracking-tighter uppercase">
            Hans.<span className="text-blue-600">Dev</span>
          </span>
        </div>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          © {currentYear} All Rights Reserved // System_Version_2.0
        </p>
      </div>

      {/* BAGIAN TENGAH: Status Server (Gamified Detail) */}
      <div className="hidden lg:flex items-center gap-8 px-8 py-3 bg-slate-900/50 border border-white/5 rounded-full">
        <div className="flex flex-col items-center">
          <span className="text-[8px] text-slate-500 font-bold uppercase tracking-tighter">Connection</span>
          <span className="text-[10px] font-black text-green-500 uppercase">Secure</span>
        </div>
        <div className="w-[1px] h-6 bg-white/10"></div>
        <div className="flex flex-col items-center">
          <span className="text-[8px] text-slate-500 font-bold uppercase tracking-tighter">Location</span>
          <span className="text-[10px] font-black text-blue-500 uppercase">Indonesia</span>
        </div>
      </div>

      {/* BAGIAN KANAN: Social Icons */}
      <div className="flex items-center gap-6">
        {[
          { icon: <Github size={18} />, link: "https://github.com" },
          { icon: <Linkedin size={18} />, link: "https://linkedin.com" },
          { icon: <Instagram size={18} />, link: "https://instagram.com" },
          { icon: <Mail size={18} />, link: "mailto:your@email.com" }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#3b82f6' }}
            className="text-slate-500 transition-colors"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

    </footer>
  );
};

export default Footer;