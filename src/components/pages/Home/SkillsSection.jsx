import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Zap, Trophy, Target } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';

const MissionReport = () => {
  const stats = [
    { label: "Completed Projects", value: "12+", icon: <ShieldCheck size={20} />, color: "text-blue-500" },
    { label: "Hours Coding", value: "2.4k", icon: <Zap size={20} />, color: "text-yellow-500" },
    { label: "Specializations", value: "03", icon: <Target size={20} />, color: "text-emerald-500" },
    { label: "Certifications", value: "08", icon: <Trophy size={20} />, color: "text-pink-500" },
  ];

  return (
    <section className="min-h-screen w-full bg-[#020617] flex flex-col justify-center px-6 md:px-24 snap-start relative overflow-hidden py-20">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* SISI KIRI: TEXT CONTENT */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase opacity-70 flex items-center gap-2">
              <Terminal size={14} /> [ CURRENT_SESSION_REPORT ]
            </h3>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-white">
              Tactical <br /> <span className="text-blue-600">Overview</span>
            </h1>
          </div>
          
          <p className="text-slate-400 font-medium text-sm md:text-base max-w-md leading-relaxed">
            Menganalisis performa melalui berbagai misi pengembangan. Dari integrasi Machine Learning hingga arsitektur Mobile yang skalabel.
          </p>

          {/* TOMBOL MIRING SKENA KAMU */}
          <NavHashLink 
            smooth 
            to="/project#show-project"
            className="group relative px-8 py-4 bg-blue-600 font-black uppercase tracking-widest text-sm skew-x-[-15deg] hover:bg-white hover:text-blue-600 transition-all shadow-[8px_8px_0px_#1e3a8a] hover:shadow-none hover:translate-x-2 hover:translate-y-2 inline-block text-center"
          >
            Mission History
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white group-hover:bg-blue-600"></span>
          </NavHashLink>
        </div>

        {/* SISI KANAN: STATS GRID */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 bg-slate-900/40 border border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-center space-y-4 hover:border-blue-500/30 transition-all group cursor-default"
            >
              <div className={`${stat.color} opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                {stat.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl md:text-4xl font-black italic text-white tracking-tighter">{stat.value}</h4>
                <p className="text-[8px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OVERALL MASTERY (Tetap dipertahankan karena visualnya bagus) */}
      <div className="mt-20 space-y-3 relative z-10 max-w-4xl">
        <div className="flex justify-between font-mono text-[9px] uppercase text-slate-500 tracking-widest">
          <span>Overall Sync Probability</span>
          <span className="text-blue-500">85% Optimized</span>
        </div>
        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            transition={{ duration: 2, ease: "circOut" }}
            className="h-full bg-gradient-to-r from-blue-700 to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.6)] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionReport;