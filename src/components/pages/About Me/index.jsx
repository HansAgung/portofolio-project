import React from 'react';
import { motion } from 'framer-motion';
import HeroBio from './HeroBio';
import TechStack from './TechStack';
import Experience from './Experience';

const AboutMePage = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 min-h-screen bg-[#020617] text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto space-y-24"
      >
        <HeroBio />
        <TechStack />
        <Experience />
      </motion.div>
    </div>
  );
};

export default AboutMePage;