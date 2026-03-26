import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../../../components/Footer';
import DiscountGame from './DiscountGame';
import ServiceCard from './ServiceCard';
import PricingTable from './PricingTable';
import QuestBriefForm from './QuestBriefForm';
import BenefitCard from './BenefitCard';

const services = [
  { icon: 'Layout', title: "UI/UX Design", desc: "Desain antarmuka modern menggunakan Figma dengan fokus pada estetika dan pengalaman pengguna." },
  { icon: 'Smartphone', title: "App Dev", desc: "Aplikasi Android/iOS (Flutter/React Native) dengan standar arsitektur VIPER dan testing ketat." },
  { icon: 'Search', title: "Web Dev", desc: "Membangun sistem web (Laravel/Next.js) dengan optimasi rendering hingga 30% lebih cepat." },
  { icon: 'Globe', title: "Cloud Integration", desc: "Infrastruktur cloud yang aman untuk mendukung performa sistem yang skalabel." },
];

const ServicesPage = () => {
  // State global untuk menyimpan persentase diskon (0 - 20)
  const [activeDiscount, setActiveDiscount] = useState(0);

  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col font-sans overflow-x-hidden">
      <main className="flex-grow pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto w-full">
        
        {/* Section Game Diskon */}
        <DiscountGame onWin={(amount) => setActiveDiscount(amount)} />

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-10"
        >
          <h2 className="text-blue-500 font-mono tracking-[0.4em] text-[10px] uppercase opacity-70">[ SELECT_YOUR_QUEST ]</h2>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-white text-shadow-lg">
            Premium <span className="text-blue-600">Services</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-50 mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
        </motion.div>

        {/* List Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>

        <div className="mb-32">
          <h2 className="text-2xl font-black italic uppercase text-center mb-5 tracking-tighter text-white underline decoration-blue-500 underline-offset-8">
            benefits Offer
          </h2>
          <h2 className="text-[10px] font-mono text-blue-500 text-center mb-10 tracking-[0.5em] uppercase opacity-60">
            // CORE_BENEFITS_SYSTEM
          </h2>
          <BenefitCard />
        </div>

        {/* Tabel Harga yang Terkoneksi dengan Diskon */}
        <div id='service-list' className="mt-10 mb:mt-10 mb-32">
          <h2 className="text-2xl font-black italic uppercase text-center mb-12 tracking-tighter text-white underline decoration-blue-500 underline-offset-8">
            Service Packages
          </h2>
          <PricingTable discountPercentage={activeDiscount} />
        </div>

        {/* Form Konsultasi dengan Data Diskon */}
        <QuestBriefForm activeDiscount={activeDiscount} />
        
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;