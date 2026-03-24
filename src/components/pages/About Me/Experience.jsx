// src/pages/AboutUs/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Rocket, Award, Star, Zap } from 'lucide-react';

// IMPORT ASET GAMBAR KAMU (Pastikan Path Benar)
import photoCollage1 from '../../../assets/7.jpeg'; // Kuliah Awal
import photoCollage2 from '../../../assets/8.jpeg'; // Kuliah Menengah
import photoIntern1 from '../../../assets/9.jpeg';  // Magang 1
import photoIntern2 from '../../../assets/10.jpeg'; // Magang 2
import photoGraduation from '../../../assets/11.jpg'; // Lulus

// --- DATA MISSION LOG (Perjalanan Kuliah & Magang) ---
const missionHistory = [
  {
    id: 1,
    type: 'EDUCATION',
    title: "INITIATION: UNIVERSITY_CHAPTER",
    date: "2019 - 2021",
    desc: "Level 1-4. Memulai perjalanan di Universitas. Fokus pada fundamental Algoritma, Basis Data, dan Pengembangan Web Dasar. Membangun fondasi sistem Gema Enterprise pertama.",
    icon: <BookOpen size={20} />,
    color: "#eab308", // Yellow Neon
    images: [photoCollage1, photoCollage2],
    skills: ["SQL", "PHP", "Laravel", "Data Struct"]
  },
  {
    id: 2,
    type: 'INTERNSHIP',
    title: "QUEST: MOBILE_APP_ARCHITECT",
    date: "Mid 2022",
    desc: "Magang Misi 1. Merancang arsitektur aplikasi Mobile kustom. Implementasi Clean Architecture (VIPER) dan integrasi Real-time Database. Berhasil deploy MVP ke Play Store.",
    icon: <Briefcase size={20} />,
    color: "#00b4d8", // Sky Blue (Matching Mobile)
    images: [photoIntern1],
    skills: ["Flutter", "Firebase", "Clean Arch"]
  },
  {
    id: 3,
    type: 'INTERNSHIP',
    title: "QUEST: ML_SOLUTION_ENGINEER",
    date: "Late 2022 - 2023",
    desc: "Magang Misi 2. Fokus pada Machine Learning. Mengembangkan model klasifikasi data inventaris dan optimalisasi query database Enterprise. Meningkatkan efisiensi sistem hingga 30%.",
    icon: <Zap size={20} />,
    color: "#a7c957", // Moss Green (Matching ML)
    images: [photoIntern2],
    skills: ["Python", "TensorFlow", "Pandas", "DB Opt"]
  },
  {
    id: 4,
    type: 'GRADUATION',
    title: "BOSS_BATTLE_CLEAR: GRADUATION",
    date: "Mid 2023",
    desc: "Level MAX. Menyelesaikan Tugas Akhir bertema Optimalisasi Database Gema Enterprise menggunakan ML. Lulus dengan predikat 'S-Class Architect'. Siap untuk Global Launch.",
    icon: <Award size={20} />,
    color: "#ffffff", // White Glow
    images: [photoGraduation],
    skills: ["Fullstack", "A.I.", "Enterprise", "Architecture"]
  }
];

const Experience = () => {
  return (
    // mt-32 untuk jarak dari Tech Stack, pb-32 untuk jarak dari footer
    <section className="relative w-full min-h-screen mt-32 pb-32 flex flex-col items-center">
      
      {/* Background Decor Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.01] mask-image-radial-gradient-strong pointer-events-none z-0" />

      {/* 1. HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative text-center space-y-3 z-10 mb-20 pointer-events-none"
      >
        <div className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-[0.4em] text-blue-500 uppercase opacity-70">
          <Award size={14} /> // MISSION: ARCHITECT_ASCENSION
        </div>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
          Career <span className="text-blue-600">Journey</span>
        </h1>
        <p className="text-slate-500 font-mono text-[9px] italic max-w-sm mx-auto opacity-70">Sebuah log arsip perjalanan tingkatkan skill dari masa studi hingga misi magang.</p>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full opacity-50 mt-4 shadow-[0_0_15px_#2563eb50]" />
      </motion.div>

      {/* 2. TIMELINE VERTICAL LAYER */}
      <div className="relative w-full max-w-6xl px-4 md:px-10 z-10">
        
        {/* Garis Vertikal Tengah (Glow) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-slate-800 rounded-full overflow-hidden">
           <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-blue-600 via-emerald-500 to-yellow-500"
              style={{ originY: 0 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.5 }}
           />
        </div>

        {/* 3. LOG ENTRIES */}
        {missionHistory.map((mission, index) => (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`relative flex items-center mb-24 last:mb-0 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            {/* Timeline Dot (Glow Center) */}
            <div 
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 shadow-[0_0_15px_#eab30850]"
                style={{ borderColor: mission.color, backgroundColor: `${mission.color}10`, boxShadow: `0 0 15px ${mission.color}50` }}
            >
              <div style={{ color: mission.color }}>
                {mission.icon}
              </div>
            </div>

            {/* Content Card (Tactical Look) */}
            <div className={`w-[45%] bg-[#020617]/90 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] flex flex-col group/log overflow-hidden transition-all duration-300 hover:border-blue-500/30 shadow-[-10px_0_30px_#00000020] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
              
              {/* Header Card */}
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-white/5">
                <div className="space-y-0.5">
                  <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">[ {mission.type} ]</div>
                  <h2 className="text-lg md:text-xl font-black italic uppercase tracking-tight text-white transition-colors duration-300 group-hover/log:text-blue-400">
                    {mission.title}
                  </h2>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-mono text-blue-500 uppercase tracking-tight">{mission.date}</div>
                    <div className="flex gap-0.5 mt-1 justify-end text-yellow-500 opacity-60">
                        <Star size={10} fill="#eab308" /> <Star size={10} fill="#eab308" /> <Star size={10} fill="#eab308" />
                    </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium mb-8">
                {mission.desc}
              </p>

              {/* Skills/Loot Gained (RPG Style) */}
              <div className="space-y-2 mb-8">
                 <label className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] font-bold">// Loot_Gained:</label>
                 <div className="flex flex-wrap gap-2">
                   {mission.skills.map(skill => (
                     <span key={skill} className="text-[8px] font-mono text-slate-300 uppercase bg-slate-800 px-2 py-0.5 rounded border border-white/10 group-hover/log:border-blue-500/30 group-hover/log:text-blue-300 transition-colors">
                       {skill}
                     </span>
                   ))}
                 </div>
              </div>

              {/* Mission Images collage (Anti-Pecah & HD) */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {mission.images.map((img, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/5 group-hover/log:border-blue-500/20 transition-all">
                        <img 
                            src={img} 
                            alt={`Mission ${mission.id} Image ${i+1}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/log:scale-110"
                            style={{ imageRendering: 'crisp-edges' }} 
                        />
                    </div>
                ))}
                {/* Placeholder if only 1 image */}
                {mission.images.length === 1 && (
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-dashed border-white/10 flex items-center justify-center text-slate-700 bg-slate-900/50">
                        <Rocket size={24} className="opacity-40"/>
                    </div>
                )}
              </div>

              {/* Aksesoris Sudut Cyberpunk */}
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover/log:opacity-100 transition-opacity">
                <div 
                    className="w-3 h-3 border-t-2 border-r-2" 
                    style={{ borderColor: mission.color }} 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Final Ascension Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-700 font-mono text-[9px] uppercase tracking-[0.4em] z-10"
      >
          <Award size={18} className="text-yellow-500 shadow-[0_0_15px_#eab30850]"/> LEVEL_MAX: S-CLASS ARCHITECT // UNLOCKED
      </motion.div>

    </section>
  );
};

export default Experience;