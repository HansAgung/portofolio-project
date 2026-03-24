import React from 'react';
import Footer from '../../../components/Footer';
import OrbitHeader from './OrbitHeader';
import OrbitSystem from './OrbitSystem';
import OrbitCTA from './OrbitCTA';

const IlmuDagingPage = () => {
  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col font-sans overflow-x-hidden relative">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-[-150px] md:top-[-250px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-b from-blue-900/20 to-[#020617] rounded-full blur-[50px] border border-white/5 opacity-40 z-0" />

      <main className="flex-grow pt-32 pb-20 px-4 md:px-20 max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        <OrbitHeader />
        
        {/* Kontainer Orbit dengan tinggi adaptif */}
        <div className="w-full h-[400px] md:h-[500px] flex justify-center items-center my-10 md:my-0">
          <OrbitSystem />
        </div>

        <OrbitCTA />
      </main>

      <Footer />
    </div>
  );
};

export default IlmuDagingPage;