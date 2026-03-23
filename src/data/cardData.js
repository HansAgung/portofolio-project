import { Instagram, Linkedin, Globe, Github } from 'lucide-react';

export const cardData = [
  {
    id: 1,
    type: 'Instagram',
    color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
    icon: Instagram,
    label: "@hans_dev",
    desc: "Visualizing Code & Design",
    link: "https://instagram.com/hans"
  },
  {
    id: 2,
    type: 'LinkedIn',
    color: 'bg-gradient-to-br from-[#0077b5] to-[#00a0dc]',
    icon: Linkedin,
    label: "Hans Developer",
    desc: "Professional Network",
    link: "https://linkedin.com/in/hans"
  },
  {
    id: 3,
    type: 'Portfolio',
    color: 'bg-gradient-to-br from-[#1e293b] to-[#0f172a]',
    icon: Globe,
    label: "Main Projects",
    desc: "Explore my work history",
    link: "https://hans-portofolio.github.io"
  }
];