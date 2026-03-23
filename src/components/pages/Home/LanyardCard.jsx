import React from 'react';
import Atropos from 'atropos/react';
import { motion } from 'framer-motion';

const LanyardCard = ({ data, isFlipped, onFlip }) => {
  const Icon = data.icon;

  return (
    <div className="w-[320px] h-[480px]" style={{ perspective: 1000 }}>
      <Atropos className="w-full h-full" activeOffset={40} shadowScale={1.05}>
        <motion.div
          className="w-full h-full relative shadow-2xl cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 200, damping: 20 }}
          onClick={onFlip}
        >
          {/* SISI DEPAN (Logo Hans) */}
          <div 
            className="absolute inset-0 w-full h-full bg-slate-800 rounded-3xl border-2 border-slate-700 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              <span className="text-4xl font-black">H</span>
            </div>
            <div className="mt-6 text-slate-500 font-mono text-[10px] tracking-[0.4em] uppercase">Security Encrypted</div>
          </div>

          {/* SISI BELAKANG (Info Card) */}
          <div 
            className={`absolute inset-0 w-full h-full ${data.color} rounded-3xl flex flex-col items-center justify-between p-8`}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="mt-8 flex flex-col items-center" data-atropos-offset="10">
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-4 border border-white/30 shadow-xl">
                <Icon size={40} color="white" />
              </div>
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">{data.type}</h2>
            </div>

            <div className="text-center" data-atropos-offset="5">
              <p className="text-lg font-bold">{data.label}</p>
              <p className="text-xs opacity-70 mt-1">{data.desc}</p>
            </div>

            <a 
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-white text-slate-900 rounded-xl font-black text-sm uppercase tracking-widest text-center hover:scale-[1.02] transition-transform"
              data-atropos-offset="15"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Profile
            </a>
          </div>
        </motion.div>
      </Atropos>
    </div>
  );
};

export default LanyardCard;