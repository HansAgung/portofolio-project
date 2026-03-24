import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const ServiceCard = ({ icon, title, desc, index }) => {
  const IconComponent = Icons[icon] || Icons.HelpCircle;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/50 transition-all group backdrop-blur-sm h-full relative"
    >
      <div className="text-blue-500 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-black italic uppercase tracking-tighter text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed font-medium">
          {desc}
        </p>
      </div>
      <div className="absolute bottom-6 right-8 text-[9px] font-mono text-slate-800 tracking-widest uppercase">
        // Sector_0{index + 1}
      </div>
    </motion.div>
  );
};

export default ServiceCard;