import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Beaker, Globe, BrainCircuit, Terminal, Cpu, Database, CassetteTape, PhoneCall, PhoneIcon, Smartphone } from 'lucide-react';
import Footer from '../../../components/Footer';
// import HansAi from './HansAi';
import { title } from 'framer-motion/client';

const IlmuDagingPage = () => {
  const navigate = useNavigate();
  // Data Kartu (Tech Stack asli dari CV Hans)
  const orbitItems = [
    { icon: <BrainCircuit size={30} />, title: "ML Lab", tech: "Python, TensorFlow", color: "border-blue-500", glow: "shadow-blue-900/40" },
    { icon: <Smartphone size={30} />, title: "Mobile Dev", tech: "Flutter, VIPER", color: "border-pink-500", glow: "shadow-pink-900/40" },
    { icon: <Terminal size={30} />, title: "Web System", tech: "Laravel, PHP", color: "border-green-500", glow: "shadow-green-900/40" },
    { icon: <Cpu size={30} />, title: "Backend API", tech: "Go, Rest API", color: "border-purple-500", glow: "shadow-purple-900/40" },
    { icon: <Database size={30} />, title: "Cloud Arch", tech: "AWS, Docker", color: "border-cyan-500", glow: "shadow-cyan-900/40" },
    { icon: <Globe size={30} />, title: "Info Tech", tech: "Industry News", color: "border-white", glow: "shadow-white/20" },
    { icon: <CassetteTape size={30} />, title: "Legacy Sys", tech: "Java, Kotlin", color: "border-yellow-500", glow: "shadow-yellow-900/40" },
  ];

  const totalItems = orbitItems.length;
  // Jari-jari Elips (Proporsi Saturnus)
  const radiusX = 450; // Lebar elips
  const radiusY = 120; // Tinggi elips (tipis agar terlihat pipih seperti cincin)

  const handlerCardClick = (title) =>{
    if (title === 'ML Lab'){
      navigate('/IlmuDaging/tanya-jawab');
    }
  }

  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col font-sans overflow-x-hidden relative">
      
      {/* BACKGROUND DECORATION (DECORATIVE PLANET) */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-slate-900 to-[#020617] rounded-full blur-[20px] border border-white/5 opacity-40 z-0" />

      <main className="flex-grow pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* HEADER SECTION (GAMIFIED STYLE) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 mb-20"
        >
          <h2 className="text-blue-500 font-mono tracking-[0.4em] text-xs uppercase opacity-70">
            [ KNOWLEDGE_ORBIT_SYSTEM ]
          </h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
            Ilmu <span className="text-blue-600">Daging</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-50 mt-4" />
        </motion.div>

        {/* SATURN'S RING ORBIT CONTAINER */}
        <div className="relative w-full h-[450px] flex justify-center items-center mb-16 mt-[-50px]">
          
          {orbitItems.map((item, index) => {
            // Menghitung sudut awal setiap kartu agar tersebar merata
            const startAngle = (index / totalItems) * Math.PI * 2;

            return (
              <motion.div
                key={index}
                onClick={() => handlerCardClick(item.title)}
                className={`absolute w-60 p-6 bg-slate-900/80 border ${item.color} ${item.glow} shadow-2xl rounded-[2rem] backdrop-blur-sm cursor-pointer group flex flex-col items-center text-center`}
                style={{
                  // Posisi X dan Y menggunakan rumus elips (sin/cos)
                  x: Math.cos(startAngle) * radiusX,
                  y: Math.sin(startAngle) * radiusY,
                }}
                animate={{
                  // Animasi rotasi berputar terus-menerus
                  x: Array.from({ length: 37 }, (_, i) => Math.cos(startAngle + (i * Math.PI * 2) / 36) * radiusX),
                  y: Array.from({ length: 37 }, (_, i) => Math.sin(startAngle + (i * Math.PI * 2) / 36) * radiusY),
                  // Mengatur Scale & Z-Index berdasarkan posisi Y (depan vs belakang)
                  scale: Array.from({ length: 37 }, (_, i) => {
                    const currentY = Math.sin(startAngle + (i * Math.PI * 2) / 36) * radiusY;
                    return 0.75 + (0.25 * (currentY + radiusY)) / (2 * radiusY); // Scale dari 0.75 ke 1.0
                  }),
                  zIndex: Array.from({ length: 37 }, (_, i) => {
                    const currentY = Math.sin(startAngle + (i * Math.PI * 2) / 36) * radiusY;
                    return currentY > 0 ? 50 : 10; // Depan (zIndex 50), Belakang (zIndex 10)
                  }),
                  // Sedikit meredup saat di belakang
                  opacity: Array.from({ length: 37 }, (_, i) => {
                    const currentY = Math.sin(startAngle + (i * Math.PI * 2) / 36) * radiusY;
                    return currentY > 0 ? 1 : 0.6; // Depan (opacity 1), Belakang (opacity 0.6)
                  }),
                }}
                transition={{
                  duration: 40, // Kecepatan rotasi (lambat agar elegan)
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.1, // Sedikit membesar saat di-hover
                  transition: { duration: 0.3 }
                }}
              >
                {/* Konten Kartu (Gamified) */}
                <div className={`p-4 bg-white/5 rounded-2xl mb-5 group-hover:scale-110 transition-transform ${item.color} border border-dashed opacity-70 group-hover:opacity-100`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-black italic uppercase tracking-tight text-white mb-2 group-hover:text-blue-400 Transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full group-hover:text-slate-300">
                  {item.tech}
                </p>

                {/* Nomor Urut (Decorative) */}
                <div className="absolute top-4 right-5 text-[9px] font-mono text-slate-700 opacity-50">
                  REF_0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION (CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl z-10 pt-16 border-t border-white/5"
        >
          <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-white">
            Architecture of <span className="text-blue-600">Pure Talent</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-medium py-3 bg-blue-600/5 px-6 rounded-3xl border border-blue-950/20">
            Saya mengintegrasikan keahlian teknis tingkat lanjut dari dunia <span className="text-white font-bold">ML Laboratory</span> dengan update industri <span className="text-white font-bold">Info Tech</span> untuk membangun sistem digital yang skalabel dan efisien.
          </p>
          
          <button className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all active:scale-95 group">
            Let's Collaborate 
            <motion.span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</motion.span>
          </button>
        </motion.div>
        
      </main>

      <Footer />
    </div>
  );
};

export default IlmuDagingPage;