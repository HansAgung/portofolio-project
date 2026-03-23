import React from 'react';
import { motion } from 'framer-motion';
import { Github, Figma, Terminal, ChevronRight } from 'lucide-react';

const ProjectItem = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: (index % 10) * 0.05 }}
      viewport={{ once: true }}
      className="group relative grid grid-cols-1 md:grid-cols-12 items-center gap-4 px-8 py-6 bg-slate-900/20 border border-white/5 rounded-xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all cursor-crosshair"
    >
      {/* Index/Rank */}
      <div className="col-span-1 font-mono text-xs text-slate-600 group-hover:text-blue-500">
        #{String(project.id).padStart(2, '0')}
      </div>

      {/* Title & Tech */}
      <div className="col-span-5">
        <h3 className="text-lg font-black uppercase italic tracking-tight group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
          <Terminal size={16} className="text-blue-600" />
          {project.title}
        </h3>
        <div className="flex gap-2 mt-1">
          {project.techStack.map(tech => (
            <span key={tech} className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">[{tech}]</span>
          ))}
        </div>
      </div>

      {/* Difficulty Indicator */}
      <div className="col-span-2">
        <div className="flex items-center gap-2">
          <div className="h-1 w-12 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full ${project.difficulty === 'Insane' ? 'bg-red-500' : 'bg-blue-600'}`}
              style={{ width: project.difficulty === 'Insane' ? '100%' : '60%' }}
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{project.difficulty}</span>
        </div>
      </div>

      {/* Category */}
      <div className="col-span-2 text-[10px] font-mono text-slate-500 uppercase">
        {project.category}
      </div>

      {/* Links */}
      <div className="col-span-2 flex justify-end gap-4">
        {project.figmaUrl && (
          <a href={project.figmaUrl} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:text-pink-500 transition-colors">
            <Figma size={16} />
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:text-blue-400 transition-colors">
          <Github size={16} />
        </a>
        <div className="p-2 text-slate-700 group-hover:text-blue-500 transition-colors">
          <ChevronRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;