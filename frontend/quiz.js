// quiz.js - 已移除 source 参数逻辑
const CORRECT_ANSWERS = {
  q1: "b",
  q2: "b",
  q3: "b",
  q4: "c",
  q5: "b",
  q6: "b"
};

const translations = {
  en: {
    subtitle: "Exploring Rumah Penghulu Abu Seman",
    "quiz-title": "Layout Quiz",
    "quiz-desc": "Test your knowledge about the layout of Rumah Penghulu Abu Seman",
    "nickname-label": "Visitor Nickname (optional)",
    "nickname-placeholder": "Enter your nickname",
    "nickname-help": "This helps staff review quiz responses in Google Sheets.",
    "question-label": "Question",
    "submit-btn": "Submit Quiz",
    "back-btn": "Back to Main",
    "retake-btn": "Retake Quiz",
    "results-title": "Quiz Results",
    "your-answers": "Your Answers",
    "footer-text": "Preserving Cultural Heritage with",
    "footer-subtext": "Traditional Malay Architecture Education Initiative",
    
    "q1-text": "What is the main function of Rumah Ibu in Rumah Penghulu Abu Seman?",
    "q1-a": "A storage area for kitchen tools",
    "q1-b": "A space for receiving guests and hosting important events",
    "q1-c": "A private bedroom area",
    "q1-d": "A place for crafting wood carvings",
    
    "q2-text": "What is traditionally prepared in Rumah Ibu during a wedding ceremony?",
    "q2-a": "A clay stove",
    "q2-b": "A pelamin decorated with needlework",
    "q2-c": "A brass cooking pot",
    "q2-d": "A set of mengkuang mats",
    
    "q3-text": "Why are the carvings and windows in Rumah Tengah simpler?",
    "q3-a": "Because it is used for formal ceremonies",
    "q3-b": "Because it serves domestic functions",
    "q3-c": "Because it stores expensive furniture",
    "q3-d": "Because it is the highest part of the house",
    
    "q4-text": "What type of traditional stove is mentioned in the Rumah Tengah section?",
    "q4-a": "Metal stove with electric heating",
    "q4-b": "Gas stove made from steel",
    "q4-c": "Wooden box packed with clay and banana stalks",
    "q4-d": "Stone stove fueled by charcoal only",
    
    "q5-text": "Why does this house include beds instead of only mengkuang mats?",
    "q5-a": "Because the family had many guests",
    "q5-b": "Because the penghulu held a respected social position",
    "q5-c": "Because the weather was too cold",
    "q5-d": "Because beds were required for ceremonies",
    
    "q6-text": "Which bed type is found in the penghulu's bedroom?",
    "q6-a": "A simple timber bed",
    "q6-b": "A brass bed with three sides",
    "q6-c": "A stone platform bed",
    "q6-d": "A bamboo foldable bed"
  },
  ms: {
    subtitle: "Meneroka Struktur Rumah Penghulu Abu Seman",
    "quiz-title": "Kuiz Struktur Rumah",
    "quiz-desc": "Uji pengetahuan anda tentang Struktur Rumah Penghulu Abu Seman",
    "nickname-label": "Nama Panggilan Pelawat (pilihan)",
    "nickname-placeholder": "Masukkan nama panggilan anda",
    "nickname-help": "Ini membantu kakitangan menyemak respons kuiz dalam Google Sheets.",
    "question-label": "Soalan",
    "submit-btn": "Hantar Kuiz",
    "back-btn": "Kembali ke Menu Utama",
    "retake-btn": "Ambil Kuiz Semula",
    "results-title": "Keputusan Kuiz",
    "your-answers": "Jawapan Anda",
    "footer-text": "Ihsan Badan Warisan Malaysia dengan",
    "footer-subtext": "Inisiatif Pendidikan Seni Bina Melayu Tradisional",
    
    "q1-text": "Apakah fungsi utama Rumah Ibu dalam Rumah Penghulu Abu Seman?",
    "q1-a": "Kawasan penyimpanan peralatan dapur",
    "q1-b": "Ruang untuk menerima tetamu dan mengadakan acara penting",
    "q1-c": "Kawasan bilik tidur peribadi",
    "q1-d": "Tempat membuat ukiran kayu",

    "q2-text": "Apakah yang biasanya disediakan di Rumah Ibu semasa majlis perkahwinan?",
    "q2-a": "Dapur tanah liat",
    "q2-b": "Pelamin yang dihiasi dengan sulaman",
    "q2-c": "Periuk memasak loyang",
    "q2-d": "Satu set tikar mengkuang",
    
    "q3-text": "Mengapakah ukiran dan tingkap di Rumah Tengah lebih ringkas?",
    "q3-a": "Kerana ia digunakan untuk majlis rasmi",
    "q3-b": "Kerana ia menjalankan fungsi domestik",
    "q3-c": "Kerana ia menyimpan perabot mahal",
    "q3-d": "Kerana ia merupakan bahagian tertinggi rumah",
    
    "q4-text": "Apakah jenis dapur tradisional yang dinyatakan dalam bahagian Rumah Tengah?",
    "q4-a": "Dapur logam dengan pemanasan elektrik",
    "q4-b": "Dapur gas diperbuat daripada keluli",
    "q4-c": "Kotak kayu diisi dengan tanah liat dan batang pisang",
    "q4-d": "Dapur batu menggunakan arang batu sahaja",
    
    "q5-text": "Mengapakah rumah ini mempunyai katil selain daripada tikar mengkuang?",
    "q5-a": "Kerana keluarga mempunyai ramai tetamu",
    "q5-b": "Kerana penghulu memegang kedudukan sosial yang dihormati",
    "q5-c": "Kerana cuaca terlalu sejuk",
    "q5-d": "Kerana katil diperlukan untuk upacara",
    
    "q6-text": "Apakah jenis katil yang terdapat di bilik tidur penghulu?",
    "q6-a": "Katil kayu yang ringkas",
    "q6-b": "Katil loyang dengan tiga sisi",
    "q6-c": "Katil platform batu",
    "q6-d": "Katil buluh boleh lipat"
  },
  zh: {
    subtitle: "探索传统马来房屋结构",
    "quiz-title": "房屋结构测验",
    "quiz-desc": "测试您对 Rumah Penghulu Abu Seman 的了解",
    "nickname-label": "访客昵称（可选）",
    "nickname-placeholder": "输入您的昵称",
    "nickname-help": "这有助于工作人员在 Google Sheets 中查看测验回复。",
    "question-label": "问题",
    "submit-btn": "提交测验",
    "back-btn": "返回主菜单",
    "retake-btn": "重新测验",
    "results-title": "测验结果",
    "your-answers": "您的答案",
    "footer-text": "用心保护文化遗产",
    "footer-subtext": "传统马来建筑教育倡议",
    
    "q1-text": "Rumah Ibu 的主要功能是什么？",
    "q1-a": "厨房工具的储藏区",
    "q1-b": "接待客人和举办重要活动的空间",
    "q1-c": "私人卧室区域",
    "q1-d": "制作木雕的地方",
    
    "q2-text": "在婚礼期间，Rumah Ibu 会准备什么？",
    "q2-a": "陶土炉灶",
    "q2-b": "新人座 （pelamin）",
    "q2-c": "黄铜烹饪锅",
    "q2-d": "一套 mengkuang 席子",
    
    "q3-text": "为什么 Rumah Tengah 的雕刻和窗户比较简单？",
    "q3-a": "因为它用于正式仪式",
    "q3-b": "因为它用于日常生活功能",
    "q3-c": "因为它存放昂贵的家具",
    "q3-d": "因为它是房子最高的部分",
    
    "q4-text": "Rumah Tengah 部分提到的传统炉灶是怎样的？",
    "q4-a": "带电热的金属炉灶",
    "q4-b": "钢制燃气炉",
    "q4-c": "装满泥土和香蕉茎的木箱",
    "q4-d": "仅使用木炭的石头炉灶",
    
    "q5-text": "为什么这间房子除了 mengkuang 席外，还会有床？",
    "q5-a": "因为家里有很多客人",
    "q5-b": "因为 penghulu 拥有受尊敬的社会地位",
    "q5-c": "因为天气太冷",
    "q5-d": "因为仪式需要床",
    
    "q6-text": "Penghulu 的卧房中使用哪一种床？",
    "q6-a": "简单的木床",
    "q6-b": "三面黄铜床",
    "q6-c": "石头平台床",
    "q6-d": "可折叠的竹床"
  }
};

let currentLang = 'en';

function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
}

// Save to Supabase
async function saveQuizToSupabase(username, score, percentage, answers) {
  try {
    if (!window.supabaseClient) {
      console.error('❌ Supabase client not initialized');
      return false;
    }

    const { data, error } = await window.supabaseClient
      .from('quiz_responses')
      .insert([
        {
          visitor_id: username, 
          score: score,
          percentage: percentage,
          question1: answers.q1.toUpperCase(),
          question2: answers.q2.toUpperCase(),
          question3: answers.q3.toUpperCase(),
          question4: answers.q4.toUpperCase(),
          question5: answers.q5.toUpperCase(),
          question6: answers.q6.toUpperCase()
        }
      ])
      .select();

    if (error) {
      console.error('❌ Supabase error:', error.message);
      return false;
    }

    console.log('✅ Quiz saved to Supabase successfully');
    return true;
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    return false;
  }
}

document.getElementById("submit-btn").addEventListener("click", submitQuiz);
document.getElementById("retake-btn").addEventListener("click", resetQuiz);

async function submitQuiz() {
  const visitorID = document.getElementById("user-id-input").value.trim() || 
              `anon-${Math.floor(Math.random() * 1000000)}`;

  const answers = {
    q1: document.querySelector("input[name='q1']:checked")?.value || null,
    q2: document.querySelector("input[name='q2']:checked")?.value || null,
    q3: document.querySelector("input[name='q3']:checked")?.value || null,
    q4: document.querySelector("input[name='q4']:checked")?.value || null,
    q5: document.querySelector("input[name='q5']:checked")?.value || null,
    q6: document.querySelector("input[name='q6']:checked")?.value || null
  };

  if (!answers.q1 || !answers.q2 || !answers.q3 || !answers.q4 || !answers.q5 || !answers.q6) {
    const alerts = {
      en: "Please answer all questions before submitting.",
      ms: "Sila jawab semua soalan sebelum menghantar.",
      zh: "请在提交前回答所有问题。"
    };
    alert(alerts[currentLang]);
    return;
  }

  let score = 0;
  for (let q in CORRECT_ANSWERS) {
    if (answers[q] === CORRECT_ANSWERS[q]) score++;
  }

  const percentage = (score / 6) * 100;

  const saved = await saveQuizToSupabase(visitorID, score, percentage, answers);
  
  if (saved) {
    console.log('✅ Quiz saved successfully');
  } else {
    console.warn('⚠️ Quiz not saved, but showing results');
  }

  showResults(score, answers);
}

async function resetQuiz() {
  try {
    await fetch("/api/track-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    console.log("✅ Retake tracked");
  } catch (err) {
    console.error("Failed to register retake:", err);
  }
  document.getElementById("results-container").classList.add("hidden");
  document.getElementById("quiz-content").classList.remove("hidden");
  document.querySelectorAll("input[type=radio]").forEach(r => (r.checked = false));
  document.getElementById("user-id-input").value = "";
}

function showResults(score, answers) {
  document.getElementById("quiz-content").classList.add("hidden");
  document.getElementById("results-container").classList.remove("hidden");

  document.getElementById("score-display").textContent = `${score}/6`;

  const messages = {
    en: {
      6: "Perfect! You got all correct!",
      5: "Excellent work!",
      4: "Great job!",
      3: "Good try!",
      2: "Keep learning!",
      1: "Keep learning!",
      0: "Try again!"
    },
    ms: {
      6: "Sempurna! Anda betul semua!",
      5: "Kerja yang cemerlang!",
      4: "Bagus!",
      3: "Cuba yang baik!",
      2: "Teruskan belajar!",
      1: "Teruskan belajar!",
      0: "Cuba lagi!"
    },
    zh: {
      6: "完美！全部答对！",
      5: "非常好！",
      4: "做得好！",
      3: "不错！",
      2: "继续学习！",
      1: "继续学习！",
      0: "再试一次！"
    }
  };

  document.getElementById("results-message").textContent = messages[currentLang][score];

  const correctLabels = {
    en: "Correct",
    ms: "Betul",
    zh: "正确"
  };
  
  const wrongLabels = {
    en: "Wrong (Correct:",
    ms: "Salah (Betul:",
    zh: "错误（正确答案："
  };

  const answersList = document.getElementById("answers-list");
  let html = '';
  for (let i = 1; i <= 6; i++) {
    const q = `q${i}`;
    const isCorrect = answers[q] === CORRECT_ANSWERS[q];
    const correctLabel = correctLabels[currentLang];
    const wrongLabel = wrongLabels[currentLang];
    
    html += `
      <p><strong>Q${i}:</strong> ${translations[currentLang][`answer-label-${currentLang}`] || 'Your answer'}: ${answers[q].toUpperCase()} —
        ${isCorrect ? `✔ ${correctLabel}` : `✖ ${wrongLabel} ${CORRECT_ANSWERS[q].toUpperCase()})`}
      </p>
    `;
  }
  answersList.innerHTML = html;
}

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const lang = btn.getAttribute('data-lang');
    updateLanguage(lang);
  });
});

// Initialize on page load
window.onload = function() {
  // Track visit
  fetch("/api/track-click", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  }).catch(err => console.error("Failed to track visit:", err));

  // Get language from URL or localStorage
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  if (langParam && (langParam === 'en' || langParam === 'ms' || langParam === 'zh')) {
    const targetBtn = document.querySelector(`.lang-btn[data-lang="${langParam}"]`);
    if (targetBtn) {
      targetBtn.click(); 
    }
  }
};

// Back to main page (always returns to index.html)
function goBackToMain() {
  window.location.href = 'index.html';
}