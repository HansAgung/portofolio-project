import { motion } from 'framer-motion';

export default function OrbitHeader() {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-3 mb-0 md:mb-10">
      <h2 className="text-blue-500 font-mono tracking-[0.4em] text-[10px] md:text-xs uppercase opacity-70">[ KNOWLEDGE_ORBIT_SYSTEM ]</h2>
      <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-white">Ilmu <span className="text-blue-600">Daging</span></h1>
      <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-50 mt-4" />
    </motion.div>
  );
}