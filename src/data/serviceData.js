import { Layout, Smartphone, Cpu, Code } from 'lucide-react';
import React from 'react';

export const services = [
//   { 
//     icon: <Layout size={32} />, 
//     title: "UI/UX Design", 
//     desc: "Desain antarmuka modern menggunakan Figma dengan fokus pada estetika dan pengalaman pengguna." 
//   },
//   { 
//     icon: <Code size={32} />, 
//     title: "Web Development", 
//     desc: "Membangun sistem web (Laravel/Next.js) dengan optimasi rendering hingga 30% lebih cepat." 
//   },
//   { 
//     icon: <Smartphone size={32} />, 
//     title: "Mobile Dev", 
//     desc: "Aplikasi Android/iOS (Flutter/React Native) dengan standar arsitektur VIPER." 
//   },
//   { 
//     icon: <Cpu size={32} />, 
//     title: "AI Integration", 
//     desc: "Integrasi cerdas layanan AI ke dalam ekosistem aplikasi web atau mobile kamu." 
//   },
];

export const pricingTiers = [
  {
    name: "Starter Pack",
    price: "5jt",
    features: ["Landing Page / UI Design", "Responsive Design", "Basic SEO", "1 Month Support"],
    recommended: false
  },
  {
    name: "Pro Quest",
    price: "15jt",
    features: ["Multi-page Web/App", "API Integration", "VIPER Architecture", "Testing Coverage 85%"],
    recommended: true
  },
  {
    name: "Ultimate Boss",
    price: "Custom",
    features: ["Enterprise Solutions", "AI Integration", "Cross-platform Mobile", "Priority 24/7 Support"],
    recommended: false
  }
];

export const consultationContent = {
  subtitle: "Punya Permintaan Khusus?",
  description: "Apakah harga atau layanan di atas belum sesuai? Atau kamu punya permintaan spesifik lainnya? Jangan ragu untuk konsultasi langsung.",
  placeholder: "Masukkan No. WhatsApp kamu...",
  buttonText: "Hubungi Hans"
};