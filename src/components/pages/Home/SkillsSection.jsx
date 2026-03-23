import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const stack = [
    { cat: "Design", items: ["Figma"], color: "bg-pink-600" },
    { cat: "Framework", items: ["Laravel", "Vite", "React.js", "React Native", "Flutter"], color: "bg-blue-600" },
    { cat: "Languages", items: ["PHP", "Go", "Dart", "JavaScript", "Swift"], color: "bg-yellow-500" }
  ];

  return (
    <section className="h-screen w-full bg-[#020617] flex flex-col justify-center px-10 md:px-24 snap-start">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase italic tracking-tighter">
          Arsenal & <span className="text-blue-600">Equipment</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stack.map((group, i) => (
          <motion.div 
            key={group.cat}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-slate-900/50 border-t-4 border-blue-600 rounded-b-xl shadow-xl"
          >
            <h3 className="text-xs font-mono text-slate-500 mb-6 uppercase tracking-[0.4em]">{group.cat}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => (
                <span key={item} className="px-3 py-1 bg-blue-600/10 border border-blue-600/30 text-blue-400 text-xs font-bold rounded uppercase">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Experience Bar */}
      <div className="mt-16 space-y-2">
        <div className="flex justify-between font-mono text-[10px] uppercase text-slate-500">
          <span>Overall Mastery</span>
          <span>Level 85 / 100</span>
        </div>
        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-[2px]">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-blue-600 shadow-[0_0_15px_#2563eb]"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;