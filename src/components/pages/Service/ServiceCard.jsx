import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, icon, desc, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group p-8 bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 hover:border-blue-500/30 shadow-2xl h-full flex flex-col"
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/10 rounded-full blur-[50px] group-hover:bg-blue-600/20 transition-colors" />

      <div className="relative z-10 space-y-6 flex-grow">
        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-500 shadow-inner">
          <div className="scale-125">{icon}</div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black uppercase italic tracking-tighter group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="h-1 w-12 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-500" />
        </div>

        <p className="text-sm text-slate-400 leading-relaxed min-h-[80px]">
          {desc}
        </p>

        <div className="pt-6 border-t border-white/5 space-y-3">
          <p className="text-[10px] font-mono text-blue-500 uppercase tracking-widest opacity-60">
            // Core_Specs
          </p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-300 uppercase tracking-tight">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_5px_#2563eb]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-6 right-8 opacity-5 text-6xl font-black italic group-hover:opacity-10 transition-opacity">
        0{index + 1}
      </div>
    </motion.div>
  );
};

export default ServiceCard;