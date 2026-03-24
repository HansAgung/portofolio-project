// src/pages/Projects/components/ProjectListDrawer.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, Github, Figma } from 'lucide-react';

const ProjectListDrawer = ({ realm, projects, onClose }) => {
  
  // --- 2. LOGIKA LOCK SCROLL ---
  useEffect(() => {
    if (realm) {
      // Kunci scroll halaman utama saat panel terbuka
      document.body.style.overflow = 'hidden';
    } else {
      // Kembalikan scroll saat panel tertutup
      document.body.style.overflow = 'unset';
    }
    // Cleanup saat komponen unmount
    return () => { document.body.style.overflow = 'unset'; };
  }, [realm]);

  return (
    <AnimatePresence>
      {realm && (
        <>
          {/* Overlay Transparan untuk deteksi klik di luar panel */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45]"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            // --- 1. KECILKAN PROPORSI (top-24 agar di bawah navbar, w-[450px] lebih slim) ---
            className="fixed top-24 right-4 bottom-4 w-full md:w-[450px] bg-[#020617]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-50 p-8 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header Drawer (Dikecilkan fontnya) */}
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <div className="space-y-0.5">
                <h3 className="text-[8px] font-mono tracking-[0.4em] text-blue-500 uppercase opacity-70">[ RECORDS_LOG ]</h3>
                <h2 className="text-xl font-black italic uppercase tracking-tighter text-white">{realm}</h2>
              </div>
              <button onClick={onClose} className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-slate-500 hover:text-white border border-white/5">
                <X size={18} />
              </button>
            </div>

            {/* List Proyek (Area Scrollable Internal) */}
            <div className="flex-grow overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {projects.length === 0 && (
                <div className="text-center text-slate-600 font-mono py-10 uppercase tracking-widest text-[10px] border border-dashed border-white/10 rounded-xl">
                  -- No Data Found --
                </div>
              )}
              
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-900/40 border border-white/5 p-5 rounded-2xl group hover:border-blue-500/30 transition-all"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="max-w-[70%]">
                      {/* Judul Project Dikecilkan */}
                      <h4 className="text-sm font-black uppercase italic tracking-tight text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        <Terminal size={12} className="text-blue-600 flex-shrink-0" />
                        {project.title}
                      </h4>
                      <p className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter mt-0.5">{project.date}</p>
                    </div>
                    <div className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest border ${
                      project.status === 'Completed' 
                        ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-500' 
                        : 'border-slate-700 bg-slate-800 text-slate-500'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Tech Stack & Links */}
                  <div className="flex justify-between items-center gap-4 mt-4 border-t border-white/5 pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-[7px] font-mono text-slate-400 uppercase bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      {project.figmaUrl && (
                        <a href={project.figmaUrl} target="_blank" rel="noreferrer" className="p-1.5 bg-slate-800 rounded-lg hover:text-pink-500 transition-colors border border-white/5">
                          <Figma size={12} />
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 bg-slate-800 rounded-lg hover:text-blue-400 transition-colors border border-white/5">
                        <Github size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Footer inside Drawer */}
            <div className="mt-4 pt-4 border-t border-white/5 text-center opacity-20">
              <p className="text-[7px] font-mono tracking-[0.5em] uppercase">-- End of Log --</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectListDrawer;