import React from 'react';
import HeroGamified from './HeroGamified';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import Footer from '../../Footer';

const HomePage = () => {
  return (
    /* Container utama menggunakan snapped scrolling agar user 
       merasa seperti berpindah level saat melakukan scroll.
    */
    <div className="w-full bg-[#020617] h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      
      {/* SECTION 1: HERO */}
      <section id="hero" className="h-screen w-full snap-start">
        <HeroGamified />
      </section>

      {/* SECTION 2: ABOUT (RUBIK) */}
      <section id="about" className="h-screen w-full snap-start">
        <AboutSection />
      </section>

      {/* SECTION 3: SKILLS */}
      <section id="skills" className="h-screen w-full snap-start">
        <SkillsSection />
      </section>
      
    <Footer />
    </div>
  );
};

export default HomePage;