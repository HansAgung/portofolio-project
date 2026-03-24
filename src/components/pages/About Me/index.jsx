import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../../components/Footer';

// Import Section
import HeroBio from './HeroBio';
import TechStack from './TechStack';
import Experience from './Experience';
import Certificates from './Certificates';

const AboutMePage = () => {
  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col font-sans overflow-x-hidden">
      
      {/* Main Container */}
      {/* pt-20 di mobile dan md:pt-0 di desktop (asumsi Navbar kamu sticky) */}
      <main className="grow pt-20 md:pt-0 pb-20 px-6 md:px-20 max-w-7xl mx-auto w-full">
        
        {/* SECTION 1: HERO BIO */}
        {/* Kita beri margin-bottom (mb) yang cukup agar konsol tidak menempel dengan timeline */}
        <div className="mb-32">
           <HeroBio />
        </div>

        {/* SECTION 2: EXPERIENCE (Journey) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Muncul saat 20% konten terlihat
          className="mb-32"
        >
          <Experience />
        </motion.div>

        {/* SECTION 3: CERTIFICATES (Stacked Cards) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-32"
        >
          <Certificates />
        </motion.div>

        {/* SECTION 4: TECH STACK (Arsenal) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-0"
        >
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-blue-500 font-mono tracking-[0.4em] text-[10px] uppercase opacity-70">
              // SKILL_SET_DATABASE
            </h2>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white text-shadow-lg">
              Technical <span className="text-blue-600">Arsenal</span>
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full opacity-50 mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
          </div>
          
          <TechStack />
        </motion.div>
        
      </main>

      <Footer />
    </div>
  );
};

export default AboutMePage;