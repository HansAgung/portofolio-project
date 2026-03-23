export const projects = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: [
    "Gema Enterprise", "MathPlay Gasing", "HKBP Palmarum App", 
    "E-Commerce VIPER", "Finance Tracker", "AI Chatbot Bridge",
    "Point of Sale System", "Inventory Manager", "Portfolio v2", "Health Sync Mobile"
  ][i % 10] + ` v.${(i + 1) * 0.1}`,
  category: i % 2 === 0 ? "Mobile Development" : "Web Development",
  techStack: i % 2 === 0 ? ["Flutter", "Dart", "Firebase"] : ["Laravel", "PHP", "MySQL"],
  difficulty: ["Easy", "Medium", "Hard", "Insane"][i % 4],
  githubUrl: "https://github.com/hansagung",
  figmaUrl: i % 3 === 0 ? "https://figma.com" : null,
  status: i < 5 ? "Completed" : "Archived",
  date: "2024 - 2026"
}));