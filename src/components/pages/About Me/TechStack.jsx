import React from 'react';
import { motion } from 'framer-motion';
// Import icon teknologi dari react-icons
import { 
  SiFlutter, SiReact, SiSwift, SiKotlin, 
  SiNextdotjs, SiTailwindcss, SiFramer, 
  SiLaravel, SiPostgresql, SiFirebase, SiPython 
} from 'react-icons/si';
import { TbLayoutDashboard } from 'react-icons/tb';

const TechStack = () => {
  // Pengelompokan Skill sesuai minat Hans Agung
  const skillCategories = [
    {
      title: "Mobile",
      skills: [
        { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
        { name: 'React Native', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Swift', icon: <SiSwift className="text-[#F05138]" /> },
        { name: 'Kotlin', icon: <SiKotlin className="text-[#7F52FF]" /> },
      ]
    },
    {
      title: "FrontEnd",
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Framer', icon: <SiFramer className="text-[#0055FF]" /> },
        { name: 'UI/UX', icon: <TbLayoutDashboard className="text-pink-500" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Laravel', icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    }
  ];

  return (
    // MENGGUNAKAN <div> untuk menghindari "height: 100vh" dari index.css
    <div className="relative w-full flex flex-col items-center">
      
      {/* Grid Kategori (3 Kolom) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative p-8 rounded-[2.5rem] bg-slate-900/20 border border-white/5 flex flex-col items-center group hover:border-blue-500/30 transition-all duration-500"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />

            <h3 className="text-lg font-black italic uppercase tracking-widest text-slate-400 mb-8 group-hover:text-white transition-colors">
              {category.title}
            </h3>

            {/* Grid Icon (2x2) */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex flex-col items-center justify-center aspect-square bg-slate-900/60 border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:bg-slate-800 hover:scale-105 group/icon"
                >
                  <div className="text-3xl mb-2 opacity-80 group-hover/icon:opacity-100 transition-opacity">
                    {skill.icon}
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-tighter text-slate-500 group-hover/icon:text-slate-300 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
               <div className="w-4 h-4 border-t-2 border-r-2 border-blue-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;