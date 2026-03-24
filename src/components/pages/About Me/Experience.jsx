import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Rocket, Award, Star, Zap } from 'lucide-react';

// IMPORT ASET (Pastikan Path Benar)
import photoCollage1 from '../../../assets/7.jpeg';
import photoCollage2 from '../../../assets/8.jpeg';
import photoIntern1 from '../../../assets/9.jpeg';
import photoIntern2 from '../../../assets/10.jpeg';
import photoGraduation from '../../../assets/11.jpg';

const missionHistory = [
  {
    id: 1,
    type: 'EDUCATION',
    title: "INITIATION: UNIVERSITY_CHAPTER",
    date: "2019 - 2021",
    desc: "Level 1-4. Memulai perjalanan di Universitas. Fokus pada fundamental Algoritma, Basis Data, dan Pengembangan Web Dasar. Membangun fondasi sistem Gema Enterprise pertama.",
    icon: <BookOpen size={20} />,
    color: "#eab308",
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
    color: "#00b4d8",
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
    color: "#a7c957",
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
    color: "#ffffff",
    images: [photoGraduation],
    skills: ["Fullstack", "A.I.", "Enterprise", "Architecture"]
  }
];

const Experience = () => {
  return (
    <div className="relative w-full flex flex-col items-center py-20 px-4 md:px-10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.01] mask-image-radial-gradient-strong pointer-events-none z-0" />

      {/* 1. HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative text-center space-y-3 z-10 mb-16 md:mb-24"
      >
        <div className="flex items-center justify-center gap-2 text-[8px] md:text-[10px] font-mono tracking-[0.4em] text-blue-500 uppercase opacity-70">
          <Award size={14} /> // MISSION: ARCHITECT_ASCENSION
        </div>
        <h1 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
          Career <span className="text-blue-600">Journey</span>
        </h1>
        <p className="text-slate-500 font-mono text-[8px] md:text-[9px] italic max-w-sm mx-auto opacity-70 px-4">
          Sebuah log arsip perjalanan tingkatkan skill dari masa studi hingga misi magang.
        </p>
      </motion.div>

      {/* 2. TIMELINE WRAPPER */}
      <div className="relative w-full max-w-6xl z-10">
        
        {/* Garis Vertikal (Responsif) */}
        {/* Mobile: Pindah ke sisi kiri | Desktop: Tetap di tengah */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-blue-600 via-emerald-500 to-yellow-500"
              style={{ originY: 0 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5 }}
            />
        </div>

        {/* 3. LOG ENTRIES */}
        <div className="space-y-16 md:space-y-24">
          {missionHistory.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline Dot (Responsif) */}
              <div 
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 flex items-center justify-center backdrop-blur-sm z-20 shadow-xl"
                  style={{ borderColor: mission.color, backgroundColor: `#020617`, boxShadow: `0 0 15px ${mission.color}40` }}
              >
                <div style={{ color: mission.color }} className="scale-75 md:scale-100">
                  {mission.icon}
                </div>
              </div>

              {/* Content Card (Tactical Look) */}
              {/* Mobile: Margin left agar tidak menabrak garis | Desktop: Zigzag 45% */}
              <div className={`w-full md:w-[45%] ml-12 md:ml-0 bg-[#020617]/90 backdrop-blur-xl border border-white/5 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col group/log overflow-hidden transition-all duration-300 hover:border-blue-500/30 ${
                index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}>
                
                {/* Header Card */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 pb-3 border-b border-white/5 gap-2">
                  <div className="space-y-0.5">
                    <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">[ {mission.type} ]</div>
                    <h2 className="text-base md:text-xl font-black italic uppercase tracking-tight text-white group-hover/log:text-blue-400 transition-colors">
                      {mission.title}
                    </h2>
                  </div>
                  <div className="flex flex-col items-start sm:items-end">
                      <div className="text-[9px] md:text-[10px] font-mono text-blue-500 uppercase font-bold">{mission.date}</div>
                      <div className="flex gap-0.5 mt-1 text-yellow-500 opacity-60">
                          {[...Array(3)].map((_, i) => <Star key={i} size={8} fill="#eab308" />)}
                      </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[10px] md:text-[11px] leading-relaxed text-slate-400 font-medium mb-6">
                  {mission.desc}
                </p>

                {/* Skills/Loot Gained */}
                <div className="space-y-2 mb-6">
                   <label className="text-[8px] font-mono text-slate-600 uppercase tracking-[0.2em] font-bold">// Loot_Gained:</label>
                   <div className="flex flex-wrap gap-1.5">
                     {mission.skills.map(skill => (
                       <span key={skill} className="text-[7px] md:text-[8px] font-mono text-slate-300 uppercase bg-slate-800 px-2 py-0.5 rounded border border-white/10 group-hover/log:text-blue-300 transition-colors">
                         {skill}
                       </span>
                     ))}
                   </div>
                </div>

                {/* Images Collage */}
                <div className="grid grid-cols-2 gap-2 md:gap-3 mt-auto">
                  {mission.images.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden border border-white/5">
                          <img src={img} alt="Mission" className="w-full h-full object-cover transition-transform duration-500 group-hover/log:scale-110" />
                      </div>
                  ))}
                  {mission.images.length === 1 && (
                      <div className="aspect-[4/3] rounded-lg md:rounded-xl border border-dashed border-white/10 flex items-center justify-center text-slate-700 bg-slate-900/40">
                          <Rocket size={20} className="opacity-20"/>
                      </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Final Info (Responsive Bottom) */}
      <div className="mt-20 flex flex-col items-center gap-2 text-slate-700 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em]">
          <Award size={16} className="text-yellow-500"/> LEVEL_MAX: S-CLASS ARCHITECT
      </div>

    </div>
  );
};

export default Experience;