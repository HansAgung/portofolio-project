import React from 'react';

const HeroBio = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
    <div className="md:col-span-2 space-y-6">
      <h2 className="text-blue-500 font-mono tracking-widest text-sm">[ ABOUT_THE_ENGINEER ]</h2>
      <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none">
        HANS <span className="text-blue-600 font-light">AGUNG</span>
      </h1>
      <p className="text-lg text-slate-400 leading-relaxed border-l-4 border-blue-600 pl-6">
        Software Engineer yang berbasis di Pekanbaru, spesialis dalam pengembangan 
        <span className="text-white font-bold"> Mobile (Flutter, iOS)</span> dan <span className="text-white font-bold"> Web (Laravel, Go)</span>. 
        Berfokus pada peningkatan performa sistem dan skalabilitas melalui penerapan unit testing yang ketat.
      </p>
    </div>
    
    <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
       <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <h1 className="text-8xl font-black italic">H</h1>
       </div>
       <p className="text-blue-500 font-mono text-xs mb-4">// KEY_METRICS</p>
       <div className="space-y-4">
          <div>
            <h3 className="text-3xl font-black">30%</h3>
            <p className="text-[10px] uppercase text-slate-500 tracking-tighter">Faster Page Rendering</p>
          </div>
          <div>
            <h3 className="text-3xl font-black">85%</h3>
            <p className="text-[10px] uppercase text-slate-500 tracking-tighter">Unit Test Coverage (Payments)</p>
          </div>
       </div>
    </div>
  </section>
);

export default HeroBio;