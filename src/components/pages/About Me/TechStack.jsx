import React from 'react';

const TechStack = () => {
  const skills = [
    'Flutter', 'React Native', 'Laravel', 'Swift', 
    'Go', 'Next.js', 'VIPER', 'Unit Testing', 
    'Java', 'Kotlin', 'API Integration', 'Team Leadership'
  ];

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold italic tracking-tighter uppercase whitespace-nowrap">Mastered Arsenals</h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-blue-600/50 to-transparent" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="p-4 bg-slate-900/40 border border-white/5 rounded-xl hover:border-blue-500/50 transition-all hover:translate-y-[-2px] flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_#2563eb]" />
            <span className="text-xs font-mono tracking-wider text-slate-300">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;