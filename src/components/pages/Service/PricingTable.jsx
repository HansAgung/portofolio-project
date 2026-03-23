import React from 'react';
import { motion } from 'framer-motion';

const PricingTable = ({ tiers }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-32 space-y-12 pb-10"
    >
      <h2 className="text-2xl font-black italic uppercase text-center tracking-tighter">Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div 
            key={i} 
            className={`p-8 rounded-[2rem] border flex flex-col justify-between transition-all duration-500 ${
              i === 1 ? 'border-blue-600 bg-blue-600/5 shadow-[0_0_30px_rgba(37,99,235,0.2)] scale-105 z-10' : 'border-white/10 bg-slate-900/40'
            }`}
          >
            <div>
              <h3 className="text-blue-500 font-mono text-xs mb-2 uppercase tracking-widest">{tier.name}</h3>
              <div className="text-3xl font-black mb-1">{tier.price}</div>
              <p className="text-[10px] text-slate-500 uppercase mb-8">{tier.target}</p>
              <ul className="space-y-4">
                {tier.items.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-10 py-4 rounded-xl border border-blue-600/50 hover:bg-blue-600 transition-all font-black uppercase tracking-widest text-[10px] text-blue-500 hover:text-white">
              Accept Quest
            </button>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default PricingTable;