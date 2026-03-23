import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Layout, Smartphone, Search, Globe, MessageSquare, CalendarDays, FileText, Wrench } from 'lucide-react';
import Footer from '../../../components/Footer'; // Pastikan path footer benar

// --- 1. DATA (Menggunakan data layanan dari CV kamu) ---
const services = [
  { icon: <Layout size={32} />, title: "UI/UX Design", desc: "Desain antarmuka modern menggunakan Figma dengan fokus pada estetika dan pengalaman pengguna." },
  { icon: <Smartphone size={32} />, title: "App Dev", desc: "Aplikasi Android/iOS (Flutter/React Native) dengan standar arsitektur VIPER dan testing ketat." },
  { icon: <Search size={32} />, title: "Web Dev", desc: "Membangun sistem web (Laravel/Next.js) dengan optimasi rendering hingga 30% lebih cepat." },
  { icon: <Globe size={32} />, title: "Cloud Integration", desc: "Infrastruktur cloud yang aman untuk mendukung performa sistem yang skalabel." },
];

const pricingTiers = [
  {
    name: "Starter Pack",
    price: "5jt",
    features: ["Landing Page / UI Design", "Responsive Design", "Basic SEO", "1 Bulan Support"],
    recommended: false
  },
  {
    name: "Pro Quest",
    price: "15jt",
    features: ["Multi-page Web/App", "API Integration", "VIPER Architecture", "Testing Coverage 85%"],
    recommended: true
  },
  {
    name: "Ultimate Boss",
    price: "Custom",
    features: ["Enterprise Solutions", "AI Integration", "Cross-platform Mobile", "Priority 24/7 Support"],
    recommended: false
  }
];

// --- 2. SUB-KOMPONEN (ServiceCard) ---
const ServiceCard = ({ icon, title, desc, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/50 transition-all group backdrop-blur-sm h-full"
  >
    <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-black italic uppercase tracking-tighter mb-3 text-white">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

// --- 3. SUB-KOMPONEN (PricingTable) ---
const PricingTable = ({ tiers }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    {tiers.map((tier, idx) => (
      <div 
        key={idx}
        className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 ${
          tier.recommended ? 'border-blue-600 bg-blue-600/5 scale-105 z-10 shadow-2xl shadow-blue-900/20' : 'border-white/10 bg-slate-900/30'
        }`}
      >
        {tier.recommended && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] text-white font-black py-1.5 px-6 rounded-full uppercase tracking-[0.2em]">
            Most Popular
          </span>
        )}
        <h3 className="text-blue-500 font-mono text-xs mb-2 uppercase tracking-widest">{tier.name}</h3>
        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-4xl font-black italic text-white">IDR {tier.price}</span>
          <span className="text-slate-500 text-[10px] uppercase font-bold">/project</span>
        </div>
        <ul className="space-y-4 mb-8">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-xs text-slate-300 font-bold uppercase tracking-tight">
              <Check size={14} className="text-blue-500" /> {f}
            </li>
          ))}
        </ul>
        <button className={`w-full py-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
          tier.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
        }`}>
          Choose Plan
        </button>
      </div>
    ))}
  </div>
);

// --- 4. SUB-KOMPONEN (DetailedConsultationForm) ---
const DetailedConsultationForm = () => {
  // Nomor WA kamu (pake kode negara, tanpa '+')
  const MY_WA_NUMBER = "6281234567890"; // GANTI DENGAN NOMOR WA KAMU

  // State untuk menampung input form
  const [formData, setFormData] = useState({
    projectType: '',
    specifications: '',
    deadline: '',
    clientPhone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSendQuest = (e) => {
    e.preventDefault();
    
    // Validasi sederhana
    if (!formData.projectType || !formData.clientPhone) {
      alert("Tipe Proyek dan Nomor WA wajib diisi!");
      return;
    }

    // Menyusun Pesan WA yang Rapi
    const message = encodeURIComponent(
`Halo Hans Architect, saya ingin mengajukan Custom Quest (Proyek).

--- QUEST_BRIEF ---
*Tipe Proyek:* ${formData.projectType || 'Tidak disebutkan'}
*Spesifikasi:* ${formData.specifications || 'Tidak disebutkan'}
*Deadline Misi:* ${formData.deadline || 'Tidak disebutkan'}

--- CONTACT_INFO ---
*No. WA Klien:* ${formData.clientPhone}

Mohon review Misi ini dan berikan estimasi resource (biaya & waktu). Terima kasih!`
    );

    // Buka WhatsApp API
    window.open(`https://wa.me/${MY_WA_NUMBER}?text=${message}`, '_blank');
  };

  const inputClass = "w-full px-6 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-sans text-sm text-white placeholder:text-slate-600 transition-all";
  const labelClass = "flex items-center gap-2 text-xs font-mono text-blue-500 uppercase tracking-widest mb-2 opacity-80";

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mt-32 p-8 md:p-12 bg-gradient-to-br from-blue-900/10 to-slate-900 border border-blue-500/10 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-black/30"
    >
      {/* Glow Effect */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 space-y-12">
        {/* Header Form */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <MessageSquare className="mx-auto text-blue-500" size={40} />
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none text-white">
            Custom Project Brief
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Tipe proyek, budget, atau deadline di atas tidak sesuai? Jangan khawatir. Isi detail misi (proyek) kamu di bawah ini, dan saya akan merancang solusi teknis yang tepat untukmu.
          </p>
        </div>

        {/* Form Sebenarnya */}
        <form onSubmit={handleSendQuest} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* 1. Jenis Hal yang Mau Dibuat */}
          <div className="md:col-span-2 relative">
            <label htmlFor="projectType" className={labelClass}>
              <Wrench size={14} /> // Jenis_Proyek
            </label>
            <input 
              type="text" 
              id="projectType"
              name="projectType"
              placeholder="Contoh: Aplikasi E-Commerce Berbasis Flutter / Sistem Kasir Laravel"
              value={formData.projectType}
              onChange={handleInputChange}
              className={inputClass}
              required
            />
          </div>

          {/* 2. Spesifikasi */}
          <div className="md:col-span-2 relative">
            <label htmlFor="specifications" className={labelClass}>
              <FileText size={14} /> // Spesifikasi_&_Fitur_Utama
            </label>
            <textarea 
              id="specifications"
              name="specifications"
              placeholder="Jelaskan alur, fitur utama (misal: Payment Gateway, Chat), atau teknologi yang diinginkan..."
              value={formData.specifications}
              onChange={handleInputChange}
              className={`${inputClass} h-32 resize-none`}
            />
          </div>

          {/* 3. Deadline */}
          <div className="relative">
            <label htmlFor="deadline" className={labelClass}>
              <CalendarDays size={14} /> // Deadline_Misi
            </label>
            <input 
              type="text" 
              id="deadline"
              name="deadline"
              placeholder="Contoh: 3 Bulan / Akhir Tahun Ini"
              value={formData.deadline}
              onChange={handleInputChange}
              className={inputClass}
            />
          </div>

          {/* 4. Nomor WA */}
          <div className="relative">
            <label htmlFor="clientPhone" className={labelClass}>
              < Check size={14} /> // No_WA_Klien (Untuk Kontak Balik)
            </label>
            <input 
              type="tel" 
              id="clientPhone"
              name="clientPhone"
              placeholder="Contoh: 08123456789"
              value={formData.clientPhone}
              onChange={handleInputChange}
              className={inputClass}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-8">
            <button type="submit" className="px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl transition-all active:scale-95 flex items-center gap-3 mx-auto shadow-blue-600/30">
              Submit Quest Brief <MessageSquare size={16} />
            </button>
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] mt-4">
              // Sang Architect akan meninjau Misi dalam 24 Jam
            </p>
          </div>

        </form>
      </div>
    </motion.section>
  );
};

// --- 5. KOMPONEN UTAMA (ServicesPage) ---
const ServicesPage = () => {
  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col font-sans overflow-x-hidden">
      <main className="flex-grow pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-20"
        >
          <h2 className="text-blue-500 font-mono tracking-[0.4em] text-xs uppercase opacity-70">
            [ SELECT_YOUR_QUEST ]
          </h2>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-white">
            Premium <span className="text-blue-600">Services</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-50 mt-4" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-32">
            <h2 className="text-2xl font-black italic uppercase text-center mb-12 tracking-tighter text-white">Service Packages</h2>
            <PricingTable tiers={pricingTiers} />
        </div>

        {/* Detailed Consultation Form Section (Quest Brief) */}
        <DetailedConsultationForm />
        
      </main>
      
      {/* Footer Global */}
      <Footer />
    </div>
  );
};

export default ServicesPage;