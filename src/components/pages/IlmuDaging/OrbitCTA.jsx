import { motion } from 'framer-motion';

export default function OrbitCTA() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center space-y-8 max-w-4xl z-10 pt-16 border-t border-white/5 mt-0 md:mt-0">
      <h1 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">Architecture of <span className="text-blue-600">Pure Talent</span></h1>
      <p className="text-slate-400 text-xs md:text-md leading-relaxed max-w-2xl mx-auto px-6">Saya mengintegrasikan keahlian teknis tingkat lanjut dari dunia <span className="text-white font-bold">ML Laboratory</span> untuk membangun sistem digital yang skalabel.</p>
      <button className="px-8 md:px-12 py-4 md:py-5 bg-blue-600 text-white font-black uppercase text-[10px] rounded-full">Let's Collaborate →</button>
    </motion.div>
  );
}