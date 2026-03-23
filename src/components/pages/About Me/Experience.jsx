import React from 'react';

const Experience = () => (
  <section className="space-y-10">
     <h2 className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">[ WORK_EXPERIENCE_LOG ]</h2>
     <div className="border-l border-white/10 ml-4 space-y-12">
        {/* Entry 1: Aleph Labs */}
        <div className="relative pl-8 group">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-600 rounded-full border-4 border-[#020617] group-hover:scale-150 transition-transform" />
          <h3 className="text-xl font-black italic text-white uppercase">iOS Developer Intern — Aleph Labs Indonesia</h3>
          <p className="text-blue-500 font-mono text-xs mb-3 italic">Agustus 2024 — Desember 2024</p>
          <ul className="text-slate-400 text-sm max-w-2xl space-y-2 list-disc list-inside">
            <li>Membangun halaman produk menggunakan arsitektur <span className="text-white">VIPER</span>.</li>
            <li>Mengimplementasikan Unit Test hingga <span className="text-white">63% coverage</span> untuk stabilitas fungsional.</li>
            <li>Berkolaborasi lintas fungsi untuk eksekusi proyek yang terstruktur dan efisien.</li>
          </ul>
        </div>
        
        {/* Tambahkan Entry Pengalaman Lain di Sini sesuai format di atas */}
     </div>
  </section>
);

export default Experience;