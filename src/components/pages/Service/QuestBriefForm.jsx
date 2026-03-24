import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Terminal, FileText, CalendarDays, Check, SendHorizontal, Sparkles } from 'lucide-react';

const QuestBriefForm = ({ activeDiscount = 0 }) => {
  const [formData, setFormData] = useState({ projectType: '', specifications: '', deadline: '', clientPhone: '' });

  const handleSendQuest = (e) => {
    e.preventDefault();
    const discountText = activeDiscount > 0 ? `\n*Hasil Hack Diskon:* ${activeDiscount}%` : "";
    const message = encodeURIComponent(`Halo Hans Architect, saya punya Quest Baru!${discountText}\n\n*Tipe:* ${formData.projectType}\n*Detail:* ${formData.specifications}\n*Deadline:* ${formData.deadline}\n*WA:* ${formData.clientPhone}`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-32 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-900/40 border border-white/5 rounded-[3.5rem] p-8 md:p-16 backdrop-blur-xl">
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-flex p-4 bg-blue-600 rounded-3xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <MessageSquare className="text-white" size={32} />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
              Launch Your <span className="text-blue-500">Quest.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Rancang solusi teknis yang tepat untuk kebutuhan bisnismu. Berikan detail misi dan sang Architect akan memberikan blueprint estimasi.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
              <Sparkles size={16} className="text-yellow-500" /> Respond_Time: &lt; 24 Hours
            </div>
            <div className="flex items-center gap-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
              <Check size={16} className="text-blue-500" /> Consultation: 100% Free
            </div>
          </div>
        </div>

        <form onSubmit={handleSendQuest} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 space-y-2">
            <label className="text-[9px] font-mono text-blue-500 uppercase tracking-[0.3em] font-bold">// Type_of_Quest</label>
            <input required onChange={(e) => setFormData({...formData, projectType: e.target.value})} placeholder="Mobile App / Enterprise System / ML Solution" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-bold" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[9px] font-mono text-blue-500 uppercase tracking-[0.3em] font-bold">// Requirements_Brief</label>
            <textarea onChange={(e) => setFormData({...formData, specifications: e.target.value})} placeholder="Sebutkan fitur utama yang diinginkan..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none h-32 resize-none text-xs font-medium" />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-mono text-blue-500 uppercase tracking-[0.3em] font-bold">// Mission_Deadline</label>
            <input onChange={(e) => setFormData({...formData, deadline: e.target.value})} placeholder="Contoh: 3 Bulan" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none text-xs font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-mono text-blue-500 uppercase tracking-[0.3em] font-bold">// Client_WA</label>
            <input required onChange={(e) => setFormData({...formData, clientPhone: e.target.value})} placeholder="08..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none text-xs font-bold" />
          </div>
          <button type="submit" className="md:col-span-2 w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
            Submit Quest Brief <SendHorizontal size={18} />
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default QuestBriefForm;