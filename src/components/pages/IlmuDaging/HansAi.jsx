import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, SendHorizontal, Sparkles, ArrowLeft, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAiResponse } from '../../../data/aiKnowledge';

const HansAi = () => {
  const navigate = useNavigate();
  // Kita buat state messages kosong di awal untuk memisahkan Welcome Screen
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userTxt = input;
    setMessages(prev => [...prev, { sender: 'user', text: userTxt }]);
    setInput('');

    setTimeout(() => {
      const resp = getAiResponse(userTxt);
      setMessages(prev => [...prev, { sender: 'ai', text: resp }]);
    }, 600);
  };

  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* Background Glow yang lebih cerah di bagian atas */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 px-6 md:px-20 py-6 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-all font-mono text-[10px] uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={16} /> [ TERMINATE_SESSION ]
        </button>
        <div className="flex items-center gap-3">
          <Cpu size={16} className="text-blue-500 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Hans_AI_v2.0</span>
        </div>
      </header>

      {/* MAIN CHAT AREA */}
      <div className="flex-grow pt-40 pb-44 w-full max-w-4xl mx-auto px-6 overflow-y-auto overflow-x-hidden custom-scrollbar">
        
        {/* WELCOME SCREEN (Hanya tampil jika belum ada chat) */}
        {messages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center py-10 space-y-8"
          >
            {/* Animasi Icon Bot Terpusat */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full" />
              <div className="relative p-8 bg-gradient-to-br from-white to-blue-100 rounded-[2.5rem] shadow-2xl shadow-blue-500/20">
                <Bot size={50} className="text-blue-600" />
              </div>
            </motion.div>

            {/* Teks Sambutan Cerah (White/Light Blue) */}
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 leading-none">
                Selamat Datang di <br />
                <span className="text-blue-500 italic">HANS.AI Enterprise</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-md mx-auto">
                Sistem asisten virtual strategis. Apa yang ingin Anda ketahui tentang <span className="text-white border-b border-blue-500">Hans Agung</span> hari ini?
              </p>
            </div>

            {/* Hint Teks */}
            <div className="flex items-center gap-3 text-[9px] font-mono text-blue-500/60 uppercase tracking-[0.4em]">
              <Sparkles size={12} className="animate-spin-slow" /> Awaiting_Instruction...
            </div>
          </motion.div>
        )}

        {/* CHAT BUBBLES (Muncul setelah user mengetik) */}
        <div className="space-y-10">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-6 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border ${
                  msg.sender === 'ai' ? 'bg-blue-600/10 border-blue-500/20 text-blue-400' : 'bg-slate-800 border-white/10 text-white'
                }`}>
                  {msg.sender === 'ai' ? <Bot size={20} /> : <User size={20} />}
                </div>

                <div className={`flex flex-col space-y-2 max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-6 rounded-[2rem] text-[15px] leading-relaxed ${
                    msg.sender === 'ai' 
                    ? 'bg-blue-900/10 border border-blue-500/10 text-blue-50 rounded-tl-none' 
                    : 'bg-white text-black font-medium rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* FLOATING INPUT */}
      <div className="fixed bottom-0 w-full bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent pb-12 px-6">
        <div className="max-w-3xl mx-auto relative group">
          <div className="relative flex items-center shadow-2xl">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
              placeholder="Berikan perintah strategis..." 
              className="w-full px-8 py-6 bg-slate-900/80 border border-white/10 rounded-[2rem] outline-none focus:border-blue-500/50 focus:bg-slate-900 transition-all text-sm text-white placeholder:text-slate-700 backdrop-blur-md"
            />
            <button 
              onClick={handleSendMessage} 
              className="absolute right-3 p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl transition-all shadow-lg active:scale-95 disabled:opacity-30"
              disabled={!input.trim()}
            >
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HansAi;