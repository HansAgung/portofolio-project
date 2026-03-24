import React from 'react';
import { motion } from 'framer-motion';
import { Timer, ShieldCheck, BookOpen, Headset } from 'lucide-react';

const benefits = [
  {
    icon: <Timer size={28} />,
    title: "Rapid Deployment",
    desc: "Proses pengerjaan kilat 1 - 3 minggu sesuai tingkat kompleksitas misi.",
    color: "text-emerald-400"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Clean Architecture",
    desc: "Kode standar industri (VIPER/Clean) yang rapi, modular, dan mudah di-maintain.",
    color: "text-blue-400"
  },
  {
    icon: <BookOpen size={28} />,
    title: "Manual Book",
    desc: "Setiap proyek dilengkapi dokumentasi lengkap sebagai panduan operasional.",
    color: "text-purple-400"
  },
  {
    icon: <Headset size={28} />,
    title: "24/7 Support",
    desc: "Standby kapanpun dibutuhkan untuk memastikan sistem berjalan tanpa hambatan.",
    color: "text-rose-400"
  }
];

const BenefitCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
      {benefits.map((benefit, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative group p-8 rounded-[2rem] bg-slate-900/20 border border-white/5 hover:bg-slate-900/40 transition-all duration-300"
        >
          {/* Ikon dengan Glow Sesuai Warna */}
          <div className={`${benefit.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
            {benefit.icon}
          </div>

          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-3">
            {benefit.title}
          </h3>
          
          <p className="text-[11px] leading-relaxed text-slate-500 font-bold uppercase tracking-tight">
            {benefit.desc}
          </p>

          {/* Aksesoris Sudut Cyberpunk */}
          <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
            <div className={`w-2 h-2 border-t-2 border-r-2 ${benefit.color.replace('text', 'border')}`} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BenefitCard;