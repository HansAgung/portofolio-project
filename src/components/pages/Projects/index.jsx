import React from 'react';
import { motion } from 'framer-motion';
import { Github, Figma, Terminal, ChevronRight, Trophy, Target, Cpu } from 'lucide-react';
import Footer from '../../../components/Footer';

// --- 1. DATA DUMMY (20 Data Projects) ---
const projectData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: [
    "Gema Enterprise", "MathPlay Gasing", "HKBP Palmarum App", 
    "E-Commerce VIPER", "Finance Tracker", "AI Chatbot Bridge",
    "Point of Sale System", "Inventory Manager", "Portfolio v2", "Health Sync Mobile"
  ][i % 10] + ` v.${(i + 1) * 0.1}`,
  category: i % 2 === 0 ? "Mobile Dev" : "Web Dev",
  techStack: i % 2 === 0 ? ["Flutter", "Dart", "Firebase"] : ["Laravel", "PHP", "MySQL"],
  difficulty: ["Easy", "Medium", "Hard", "Insane"][i % 4],
  githubUrl: "https://github.com/hansagung",
  figmaUrl: i % 3 === 0 ? "https://figma.com" : null,
  exp: (i + 1) * 1250,
}));

// --- 2. SUB-KOMPONEN: ProjectRow ---
const ProjectRow = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: (index % 10) * 0.05 }}
      viewport={{ once: true }}
      className="group relative grid grid-cols-1 md:grid-cols-12 items-center gap-4 px-6 py-5 bg-slate-900/20 border border-white/5 rounded-2xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all cursor-crosshair mb-3"
    >
      {/* Level/ID Indicator */}
      <div className="col-span-1 flex flex-col items-center justify-center border-r border-white/5 group-hover:border-blue-500/30 transition-colors">
        <span className="text-[10px] font-mono text-slate-600 uppercase">Lvl</span>
        <span className="text-lg font-black text-slate-400 group-hover:text-blue-500">
          {String(project.id).padStart(2, '0')}
        </span>
      </div>

      {/* Mission Name & Tech Stack */}
      <div className="col-span-5 md:pl-4">
        <h3 className="text-lg font-black uppercase italic tracking-tight text-white group-hover:text-blue-400 transition-colors flex items-center gap-3">
          <Terminal size={16} className="text-blue-600 opacity-50 group-hover:opacity-100" />
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.techStack.map(tech => (
            <span key={tech} className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter bg-white/5 px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Difficulty Bar */}
      <div className="col-span-2">
        <div className="space-y-1">
          <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-500">
            <span>Difficulty</span>
            <span className={project.difficulty === 'Insane' ? 'text-red-500' : 'text-blue-500'}>
              {project.difficulty}
            </span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: project.difficulty === 'Insane' ? '100%' : project.difficulty === 'Hard' ? '75%' : '40%' }}
              className={`h-full ${project.difficulty === 'Insane' ? 'bg-red-600' : 'bg-blue-600'}`}
            />
          </div>
        </div>
      </div>

      {/* Category & EXP Gained */}
      <div className="col-span-2 flex flex-col items-center md:items-start">
        <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Rewards</span>
        <span className="text-[11px] font-bold text-yellow-500/80 uppercase">+{project.exp} EXP</span>
      </div>

      {/* Action Links */}
      <div className="col-span-2 flex justify-end gap-3">
        {project.figmaUrl && (
          <a 
            href={project.figmaUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 bg-slate-800/50 rounded-xl hover:text-pink-500 hover:bg-pink-500/10 transition-all border border-white/5"
            title="View Design"
          >
            <Figma size={18} />
          </a>
        )}
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="p-2.5 bg-slate-800/50 rounded-xl hover:text-blue-400 hover:bg-blue-400/10 transition-all border border-white/5"
          title="Source Code"
        >
          <Github size={18} />
        </a>
        <div className="p-2.5 text-slate-700 group-hover:text-blue-500 transition-colors">
          <ChevronRight size={20} />
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. KOMPONEN UTAMA: ProjectsPage ---
const ProjectsPage = () => {
  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col font-sans overflow-x-hidden">
      <main className="flex-grow pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Trophy className="text-yellow-500" size={24} />
              <h2 className="text-blue-500 font-mono tracking-[0.4em] text-xs uppercase opacity-70">
                [ MISSION_LOG_ARCHIVE ]
              </h2>
            </div>
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
              Quest <span className="text-blue-600">History</span>
            </h1>
            <p className="text-slate-500 font-mono text-[10px] md:text-xs mt-2 italic flex items-center gap-2">
              <Target size={14} /> Total_Missions_Cleared: 20 // Rank: S-Class Developer
            </p>
          </motion.div>

          {/* Stats Bar Dekoratif */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex gap-10 bg-slate-900/40 p-6 rounded-3xl border border-white/5 backdrop-blur-md"
          >
            <div className="text-center px-4">
              <p className="text-[10px] font-mono text-slate-500 uppercase">Accuracy</p>
              <p className="text-xl font-black italic text-blue-500">99.2%</p>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center px-4">
              <p className="text-[10px] font-mono text-slate-500 uppercase">Uptime</p>
              <p className="text-xl font-black italic text-green-500">24/7</p>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center px-4 flex flex-col items-center">
              <Cpu size={16} className="text-purple-500 mb-1" />
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">System_OK</p>
            </div>
          </motion.div>
        </div>

        {/* Labels for Desktop View */}
        <div className="hidden md:grid grid-cols-12 px-8 text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] mb-6">
          <div className="col-span-1">ID_Tag</div>
          <div className="col-span-5">Mission_Identifier</div>
          <div className="col-span-2">Skill_Difficulty</div>
          <div className="col-span-2">Reward_Points</div>
          <div className="col-span-2 text-right">Access_Points</div>
        </div>

        {/* Project List Rendering */}
        <div className="space-y-1">
          {projectData.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Decorative Info */}
        <div className="mt-20 text-center opacity-30">
          <p className="text-[9px] font-mono tracking-[0.5em] uppercase">
            -- End of Encrypted Mission Log --
          </p>
        </div>
        
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;