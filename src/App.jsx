import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/index';
import Service from './components/pages/Service/index';
import AboutMePage from './components/pages/About Me/index';
import Project from './components/pages/Projects/index';
import IlmuDaging from './components/pages/IlmuDaging/index';
import TanyaJawab from './components/pages/IlmuDaging/HansAi';

function App() {
  return (
    <Router>
      <div className="bg-[#020617] text-white min-h-screen">
        <Navbar />
        <Routes>
          {/* Ini untuk halaman utama */}
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/IlmuDaging" element={<IlmuDaging />} />

          {/* Ini untuk halaman selanjutnya */}
          <Route path ="/IlmuDaging/tanya-jawab" element={<TanyaJawab />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;