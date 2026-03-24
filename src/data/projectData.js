// src/pages/Projects/data/projectData.js
export const projects = Array.from({ length: 20 }, (_, i) => {
  const categories = ["Web Development", "Mobile Development", "Machine Learning"];
  const category = categories[i % 3]; // Bagi rata 3 kategori
  
  return {
    id: i + 1,
    title: [
      "Gema Enterprise", "MathPlay Gasing", "NeuralHans AI", 
      "E-Commerce VIPER", "Finance Tracker", "Face Recognition",
      "Point of Sale", "Inventory Manager", "Object Detection", "Health Sync Mobile"
    ][i % 10] + ` v.${(i + 1) * 0.1}`,
    category: category,
    techStack: category === "Web Development" 
      ? ["Laravel", "PHP", "MySQL"]
      : category === "Mobile Development"
      ? ["Flutter", "Dart", "Firebase"]
      : ["Python", "TensorFlow", "OpenCV"], // Tech stack untuk ML
    difficulty: ["Easy", "Medium", "Hard", "Insane"][i % 4],
    githubUrl: "https://github.com/hansagung",
    figmaUrl: i % 4 === 0 ? "https://figma.com" : null,
    status: i < 5 ? "Completed" : "Archived",
    date: "2024 - 2026"
  };
});