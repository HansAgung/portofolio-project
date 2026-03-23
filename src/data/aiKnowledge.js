export const HANS_AI_KNOWLEDGE = {
  "siapa kamu": "Saya adalah HANS.AI, asisten virtual yang diprogram oleh Hans Agung. Saya di sini untuk menjawab pertanyaan dasar tentang penciptanya.",
  "siapa hans agung": "Hans Agung adalah seorang Software Engineer berbakat yang fokus pada pengembangan Mobile (Flutter, VIPER, Clean Architecture) dan Web System (Laravel, PHP).",
  "apa keahlian hans": "Hans ahli dalam arsitektur aplikasi (VIPER/Clean), optimasi performa (rendering 30% lebih cepat), dan testing coverage tinggi (85%).",
  "apa hobinya": "Hans Agung sangat menyukai coding, mengeksplorasi teknologi baru seperti Machine Learning, dan berkontribusi dalam organisasi teknologi.",
  "di mana hans tinggal": "Hans Agung saat ini tinggal di South Jakarta, Jakarta, Indonesia.",
  "kapan hans ultah": "Informasi tanggal ulang tahun Hans Agung bersifat pribadi, namun dia selalu merayakan rilis proyeknya dengan antusias!",
  "apa proyek terakhirnya": "Beberapa proyek utamanya termasuk Gema Enterprise (Sistem Inventaris PHP Native) dan HKBP Palmarum App (Mobile Flutter).",
  "halo": "Halo! Ada yang bisa saya bantu tentang Hans Agung?",
  "default": "Maaf, database saya belum memiliki informasi mengenai hal tersebut. Coba tanyakan: 'Siapa Hans Agung?', 'Apa keahliannya?', atau 'Di mana Hans tinggal?'"
};

export const getAiResponse = (userMessage) => {
  const cleanMessage = userMessage.toLowerCase().trim();
  for (const key in HANS_AI_KNOWLEDGE) {
    if (cleanMessage.includes(key)) return HANS_AI_KNOWLEDGE[key];
  }
  return HANS_AI_KNOWLEDGE["default"];
};