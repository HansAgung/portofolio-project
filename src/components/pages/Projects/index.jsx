// src/pages/Projects/index.jsx
import React, { useState } from 'react';
import RealmMap from './RealmMap';
import ProjectListDrawer from './ProjectListDrawer';
import { projects } from '../../../data/projectData';
import Footer from '../../../components/Footer';

const ProjectsPage = () => {
  const [selectedRealm, setSelectedRealm] = useState(null);

  // Filter proyek berdasarkan wilayah yang dipilih
  const filteredProjects = projects.filter(p => p.category === selectedRealm);

  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col font-sans overflow-x-hidden relative">
      <main className="flex-grow pt-32 pb-20 px-6 md:px-10 w-full flex flex-col items-center relative z-10">
        
        {/* Realm Map Section */}
        <RealmMap onRealmClick={setSelectedRealm} />
        
      </main>

      {/* Drawer/Modal yang muncul saat wilayah diklik */}
      <ProjectListDrawer 
        realm={selectedRealm} 
        projects={filteredProjects} 
        onClose={() => setSelectedRealm(null)} 
      />

      <Footer />
    </div>
  );
};

export default ProjectsPage;