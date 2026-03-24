// src/data/certificates.js
import cert1 from '../assets/7.jpeg'; 
import cert2 from '../assets/8.jpeg'; // Contoh Landscape
import cert3 from '../assets/9.jpeg';  // Contoh Portrait
import cert4 from '../assets/10.jpeg';  // Contoh Landscape

export const certificateData = [
  {
    id: 1,
    title: "S-Class Web Architect",
    issuer: "Global Tech Institute",
    date: "2025",
    description: "Merancang sistem Enterprise berskala besar.",
    color: "#2563eb",
    image: cert1, // Ganti dengan path gambar Portrait asli
    orientation: 'portrait' // <--- KUNCI RESPONSIVE
  },
  {
    id: 2,
    title: "Mobile Guru Certified",
    issuer: "Mobile Dev Association",
    date: "2024",
    description: "Penguasaan Flutter dan arsitektur VIPER.",
    color: "#00b4d8",
    image: cert2, // Ganti dengan path gambar Landscape asli
    orientation: 'landscape' // <--- KUNCI RESPONSIVE
  },
  {
    id: 3,
    title: "SQL Database Master",
    issuer: "DB Masters Corp",
    date: "2024",
    description: "Optimasi query kompleks dan manajemen inventaris.",
    color: "#eab308",
    image: cert3,
    orientation: 'portrait'
  },
  {
    id: 4,
    title: "ML Specialist",
    issuer: "AI Research Lab",
    date: "2025",
    description: "Implementasi model klasifikasi data riil industri.",
    color: "#a7c957",
    image: cert4,
    orientation: 'landscape'
  },
  // ... tambah data dummy lainnya dengan orientation berbeda
];