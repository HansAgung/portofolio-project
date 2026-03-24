import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Zap, RefreshCcw, Lock, Unlock } from 'lucide-react';

const DiscountGame = ({ onWin }) => {
  const [gameState, setGameState] = useState('IDLE');
  const [slots, setSlots] = useState(['?', '?', '?']);
  const [finalDiscount, setFinalDiscount] = useState(0);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%";

  const getRandomChar = useCallback(() => {
    return characters[Math.floor(Math.random() * characters.length)];
  }, [characters]);

  const startDecryption = () => {
    setGameState('DECRYPTING');
    setFinalDiscount(0);

    // Probabilitas: 2% (20%), 13% (10%), 35% (5%), 50% (Zonk)
    const rng = Math.random() * 100;
    let winAmount = 0;
    if (rng <= 2) winAmount = 20;
    else if (rng <= 15) winAmount = 10;
    else if (rng <= 50) winAmount = 5;
    else winAmount = 0;

    let iterations = 0;
    const interval = setInterval(() => {
      setSlots([getRandomChar(), getRandomChar(), getRandomChar()]);
      iterations++;

      if (iterations >= 25) {
        clearInterval(interval);
        if (winAmount === 20) setSlots(['$', '$', '$']);
        else if (winAmount === 10) setSlots(['7', '7', '7']);
        else if (winAmount === 5) setSlots(['#', '#', '#']);
        else setSlots(['X', 'E', 'R']);

        setFinalDiscount(winAmount);
        setGameState('RESULT');
        onWin(winAmount); // Kirim ke parent (index.jsx)
      }
    }, 80);
  };

  return (
    <div className="w-full bg-black/60 border border-blue-500/20 rounded-[3rem] p-10 mb-20 relative overflow-hidden backdrop-blur-xl font-mono">
      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        <div className="space-y-2">
          <h3 className="text-blue-500 text-[10px] tracking-[0.5em] uppercase opacity-70 flex items-center justify-center gap-2">
            <Terminal size={14} /> [ SYSTEM_DECRYPT_V4 ]
          </h3>
          <h2 className="text-2xl md:text-4xl font-black italic uppercase text-white tracking-tighter">
            Mainkan ini untuk diskon tambahan, <span className="text-blue-500">SEMANGATT!!</span>
          </h2>
          <p className="text-slate-500 text-[9px] uppercase tracking-widest leading-relaxed">
            Root Access (20% Off) Probability: 0.02 // Database status: Secured
          </p>
        </div>

        <div className="flex gap-4">
          {slots.map((char, index) => (
            <motion.div
              key={index}
              animate={gameState === 'DECRYPTING' ? { y: [0, -5, 0] } : {}}
              className={`w-20 h-28 md:w-24 md:h-32 rounded-2xl flex items-center justify-center text-4xl md:text-5xl font-black border-2 transition-all duration-300 ${
                gameState === 'RESULT' && finalDiscount === 20 ? 'border-yellow-500 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)] bg-yellow-500/5' : 'border-blue-500/20 text-blue-400 bg-white/5'
              }`}
            >
              {char}
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {gameState === 'IDLE' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={startDecryption}
              className="px-10 py-4 bg-blue-600 text-white font-black uppercase text-xs tracking-widest rounded-2xl flex items-center gap-3 shadow-xl shadow-blue-600/20"
            >
              <Zap size={16} fill="white" /> Execute Bypass
            </motion.button>
          )}

          {gameState === 'RESULT' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
              <div className={`flex items-center gap-4 px-6 py-3 rounded-2xl border ${finalDiscount > 0 ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                {finalDiscount > 0 ? <Unlock className="text-emerald-500" size={18}/> : <Lock className="text-red-500" size={18}/>}
                <span className="text-lg font-black italic text-white uppercase">{finalDiscount}% Discount Applied</span>
              </div>
              <button onClick={() => { setGameState('IDLE'); setSlots(['?', '?', '?']); onWin(0); }} className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-white underline underline-offset-4">
                <RefreshCcw size={10} className="inline mr-1" /> Re-Initialize Session
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DiscountGame;