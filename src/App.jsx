import React from 'react';
// Ganti BrowserRouter menjadi HashRouter agar aman dari error 404 saat refresh di GitHub Pages
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/index';
import Service from './components/pages/Service/index';
import AboutMePage from './components/pages/About Me/index';
import Project from './components/pages/Projects/index';
import IlmuDaging from './components/pages/IlmuDaging/index';
import TanyaJawab from './components/pages/IlmuDaging/HansAi';
import ForumIlmu from './components/pages/IlmuDaging/ForumIlmu';

function App() {
  return (
    <Router>
      <div className="bg-[#020617] text-white min-h-screen">
        <Navbar />
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/IlmuDaging" element={<IlmuDaging />} />

          {/* Halaman Detail */}
          <Route path="/IlmuDaging/tanya-jawab" element={<TanyaJawab />} />
          <Route path="/IlmuDaging/forum-ilmu" element={<ForumIlmu />} />

          {/* CATCH-ALL: Jika user nyasar, lempar balik ke Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;