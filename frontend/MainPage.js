/**
 * MainPage.js (安全版本)
 * 核心逻辑：多语言切换、页面跳转、管理员权限校验及数据导出 (Supabase)
 * 安全特性：密码验证通过后端 API，前端不存储明文密码
 */

const content = {
    en: {
        mainTitle: "Discover the Legacy of Rumah Penghulu Abu Seman",
        exploreBtn: "Start Exploring",
        introCardTitle: "The Headman's Heritage",
        introText: "The Rumah Penghulu Abu Seman was built in stages between 1910 and the early 1930s. Owned by the local headman of Mukim Bagan Samak, Bandar Baharu, Kedah. Originally located in Kampung Sungai Kechil, this traditional Malay house stands as a testament to the rich architectural heritage and cultural traditions of the region.",
        sectionTitle: "Explore the Traditional Spaces",
        actionTitle: "Your Next Steps", 
        room1: "Rumah Ibu (Main House)", 
        room1Desc: "The main house, serving as the central living and social area for the family.",
        room2: "Rumah Tengah (Middle House)",
        room2Desc: "The middle house, typically connected to the main house and containing additional family rooms.",
        room3: "Bilik Tidur (Sleeping Quarters)",
        room3Desc: "Dedicated sleeping quarters, often adorned with traditional wooden carvings and lattice work.",
        viewDetails: "View Details", 
        quizTitle: "Challenge Yourself!",
        quizText: "Test your knowledge about traditional Malay architecture before providing your feedback.",
        quizBtn: "Start Quiz",
        feedbackTitle: "Help Us Improve",
        feedbackText: "Once you've explored the rooms and tested your knowledge, share your thoughts and experiences with us.",
        feedbackBtn: "Give Feedback",
        credit: "Courtesy of Badan Warisan Malaysia.",
        infoTitle: '<i class="fas fa-question-circle"></i> Do you know?',
        infoText: "The <strong>low arch at the entrance</strong> requires visitors to bow slightly—a gesture reflecting traditional values of <strong>humility and respect</strong>.",
        adminSectionTitle: "Admin Tools",
        adminSectionIntro: "Export quiz data for analysis (admin access only)",
        exportSubmissionsTitle: "Export Submissions",
        exportSubmissionsDesc: "Download all quiz responses as CSV",
        exportStatsTitle: "Export Statistics",
        exportStatsDesc: "Download quiz performance stats as CSV"
    },
    ms: {
        mainTitle: "Warisan Rumah Penghulu Abu Seman",
        exploreBtn: "Mula Teroka",
        introCardTitle: "Warisan Penghulu",
        introText: "Rumah Penghulu Abu Seman dibina secara berperingkat antara 1910 dan awal 1930an. Ia dimiliki oleh penghulu tempatan Mukim Bagan Samak, Bandar Baharu, Kedah. Pada asalnya terletak di Kampung Sungai Kechil, rumah tradisional Melayu ini menjadi bukti kepada warisan seni bina yang kaya dan tradisi budaya rantau ini.",
        sectionTitle: "Terokai Ruang Tradisional",
        actionTitle: "Langkah Seterusnya", 
        room1: "Rumah Ibu (Rumah Utama)", 
        room1Desc: "Rumah utama, berfungsi sebagai ruang tamu dan sosial utama untuk keluarga.",
        room2: "Rumah Tengah (Rumah Tengah)",
        room2Desc: "Rumah tengah, biasanya disambungkan ke rumah utama dan mengandungi bilik keluarga tambahan.",
        room3: "Bilik Tidur (Bilik Beradu)",
        room3Desc: "Tempat tidur yang khusus, sering dihiasi dengan ukiran kayu tradisional dan kekisi.",
        viewDetails: "Lihat Butiran", 
        quizTitle: "Uji Diri Anda!",
        quizText: "Uji pengetahuan anda tentang seni bina tradisional Melayu sebelum memberikan maklum balas.",
        quizBtn: "Mula Kuiz",
        feedbackTitle: "Bantu Kami",
        feedbackText: "Setelah anda meneroka bilik dan menguji pengetahuan anda, kongsi pendapat dan pengalaman anda dengan kami.",
        feedbackBtn: "Maklum Balas",
        credit: "Ihsan Badan Warisan Malaysia.",
        infoTitle: '<i class="fas fa-question-circle"></i> Tahukah anda?',
        infoText: "<strong>Gerbang rendah di pintu masuk</strong> memerlukan pengunjung menundukkan kepala—isyarat yang mencerminkan nilai <strong>kerendahan hati dan hormat</strong>.",
        adminSectionTitle: "Alat Pentadbir",
        adminSectionIntro: "Eksport data kuiz untuk analisis (akses pentadbir sahaja)",
        exportSubmissionsTitle: "Eksport Penyerahan",
        exportSubmissionsDesc: "Muat turun semua respons kuiz sebagai CSV",
        exportStatsTitle: "Eksport Statistik",
        exportStatsDesc: "Muat turun statistik prestasi kuiz sebagai CSV"
    },
    zh: {
        mainTitle: "探索 Rumah Penghulu Abu Seman 的遗产",
        exploreBtn: "开始探索",
        introCardTitle: "地方长官的遗产",
        introText: "Rumah Penghulu Abu Seman 在1910年至1930年代初期分阶段建成。这座传统马来房屋最初位于马来西亚半岛北部的Kampung Sungai Kechil小村庄，见证了该地区丰富的建筑遗产和文化传统。",
        sectionTitle: "探索传统空间",
        actionTitle: "您的后续步骤", 
        room1: "Rumah Ibu (主厅)",
        room1Desc: "主屋，作为家庭的主要生活和社交区域。",
        room2: "Rumah Tengah (中厅)",
        room2Desc: "中屋，通常连接到主屋并包含额外的家庭房间。",
        room3: "Bilik Tidur (卧室)",
        room3Desc: "专用卧室，通常饰有传统木雕和格子窗。",
        viewDetails: "查看详情", 
        quizTitle: "挑战自己！",
        quizText: "测试您对传统马来建筑的了解，然后提供反馈。",
        quizBtn: "开始测验",
        feedbackTitle: "帮助我们改进",
        feedbackText: "在您探索完房间并测试了知识后，请与我们分享您的想法和体验。",
        feedbackBtn: "提供反馈",
        credit: "由马来西亚文化遗产机构提供。",
        infoTitle: '<i class="fas fa-question-circle"></i> 您知道吗？',
        infoText: "<strong>入口处的低矮拱门</strong>要求访客稍微低头—这一姿态反映了传统的<strong>谦逊和尊重</strong>价值观。",
        adminSectionTitle: "管理工具",
        adminSectionIntro: "导出测验数据进行分析（仅限管理员访问）",
        exportSubmissionsTitle: "导出提交",
        exportSubmissionsDesc: "下载所有测验回复为CSV",
        exportStatsTitle: "导出统计",
        exportStatsDesc: "下载测验表现统计为CSV"
    }
};

let currentLang = 'en';

// ===== 语言切换逻辑 =====
function changeLanguage(lang, clickedButton) {
    localStorage.setItem("siteLanguage", lang);
    currentLang = lang;
    document.body.className = lang === 'zh' ? 'lang-zh' : '';
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (clickedButton) clickedButton.classList.add('active');

    const langContent = content[lang];
    
    const elements = {
        'mainTitle': langContent.mainTitle,
        'exploreBtnText': langContent.exploreBtn,
        'introCardTitle': langContent.introCardTitle,
        'introText': langContent.introText,
        'sectionTitle': langContent.sectionTitle,
        'actionTitle': langContent.actionTitle,
        'room1Title': langContent.room1,
        'room1Desc': langContent.room1Desc,
        'room2Title': langContent.room2,
        'room2Desc': langContent.room2Desc,
        'room3Title': langContent.room3,
        'room3Desc': langContent.room3Desc,
        'quizTitle': langContent.quizTitle,
        'quizText': langContent.quizText,
        'quizBtn': langContent.quizBtn,
        'feedbackTitle': langContent.feedbackTitle,
        'feedbackText': langContent.feedbackText,
        'feedbackBtn': langContent.feedbackBtn,
        'creditText': langContent.credit,
        'infoTitle': langContent.infoTitle,
        'infoText': langContent.infoText,
        'adminSectionTitle': langContent.adminSectionTitle,
        'adminSectionIntro': langContent.adminSectionIntro,
        'exportSubmissionsTitle': langContent.exportSubmissionsTitle,
        'exportSubmissionsDesc': langContent.exportSubmissionsDesc,
        'exportStatsTitle': langContent.exportStatsTitle,
        'exportStatsDesc': langContent.exportStatsDesc
    };

    for (let [id, text] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = text; 
    }

    document.querySelectorAll('.view-text').forEach(span => {
        span.textContent = langContent.viewDetails;
    });
}

// ===== 页面导航 =====
function revealContent() {
    const contentContainer = document.getElementById('main-content-container');
    window.scrollTo({
        top: contentContainer.offsetTop,
        behavior: 'smooth'
    });
}

function navigateToRoom(room) {
     window.location.href = room + '.html';
}

function openQuiz() {
    window.location.href = 'quiz.html?lang=' + currentLang;
}

function openFeedback() {
    window.open('https://forms.gle/tARHqgcGQiYoHMES6', '_blank');
}

// ===== 提示卡片逻辑 =====
function toggleInfo() {
    const infoCard = document.getElementById('infoCard');
    if (infoCard) infoCard.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    const infoCard = document.getElementById('infoCard');
    const infoButton = document.querySelector('.info-button');
    if (infoCard && infoButton && !infoCard.contains(e.target) && !infoButton.contains(e.target)) {
        infoCard.classList.remove('show');
    }
});

// ===== ADMIN : Ctrl+Shift+A 激活管理员模式 =====
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        promptAdminPassword();
    }
});

// ===== 安全的密码验证（通过后端 API）=====
async function promptAdminPassword() {
    const pw = prompt('🔐 Enter admin password:');
    if (!pw) return;
    
    try {
        const response = await fetch('/api/admin/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: pw })
        });
        
        const result = await response.json();
        
        if (result.success) {
            // 存储 token（而不是密码）
            sessionStorage.setItem('adminToken', result.token);
            sessionStorage.setItem('adminTokenExpiry', Date.now() + (result.expiresIn * 1000));
            sessionStorage.setItem('isAdmin', 'true');
            
            showExportButtons();
            alert('✅ Admin access granted!');
            console.log('✅ Token expires in 15 minutes');
        } else {
            alert('❌ Invalid password');
        }
    } catch (err) {
        console.error('❌ Verification failed:', err);
        alert('❌ Verification failed. Please try again.');
    }
}

function showExportButtons() {
    const btn1 = document.getElementById('export-submissions-btn');
    const btn2 = document.getElementById('export-stats-btn');
    if (btn1) {
        btn1.style.display = 'inline-flex';
        btn1.style.opacity = '0';
        setTimeout(() => btn1.style.opacity = '1', 10);
    }
    if (btn2) {
        btn2.style.display = 'inline-flex';
        btn2.style.opacity = '0';
        setTimeout(() => btn2.style.opacity = '1', 10);
    }
}

function checkAdminAccess() {
    const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
    const token = sessionStorage.getItem('adminToken');
    const expiry = parseInt(sessionStorage.getItem('adminTokenExpiry'));
    
    // 检查 token 是否过期
    if (isAdmin && token && expiry > Date.now()) {
        showExportButtons();
    } else if (isAdmin && expiry <= Date.now()) {
        // Token 已过期
        sessionStorage.removeItem('adminToken');
        sessionStorage.removeItem('adminTokenExpiry');
        sessionStorage.removeItem('isAdmin');
        console.log('⏱️ Admin token expired');
    }
}

// ===== ADMIN : 核心导出功能 (使用安全 token) =====
async function exportSubmissions() {
    const token = sessionStorage.getItem('adminToken');
    
    if (!token) {
        alert('❌ Please login first (Ctrl+Shift+A)');
        return;
    }
    
    try {
        console.log('📥 Fetching submissions from Supabase...');
        const { data, error } = await window.supabaseClient
            .from('quiz_responses')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        if (!data || data.length === 0) {
            alert('No submissions found in database.');
            return;
        }

        const cleanedData = data.map(row => ({
            'SubmissionIndex': row.id,
            'Timestamp': new Date(row.created_at).toLocaleString(),
            'visitorID': row.visitor_id,
            'score': row.score,
            'percentage(%)': row.percentage + '%',
            'question1': row.question1,
            'question2': row.question2,
            'question3': row.question3,
            'question4': row.question4,
            'question5': row.question5,
            'question6': row.question6
        }));

        const csv = Papa.unparse(cleanedData);
        downloadCSV(csv, 'quiz_submissions.csv');
        console.log('✅ Submissions exported');
    } catch (err) {
        console.error('❌ Export failed:', err.message);
        alert('Export failed: ' + err.message);
    }
}

async function exportStats() {
    const token = sessionStorage.getItem('adminToken');
    
    if (!token) {
        alert('❌ Please login first (Ctrl+Shift+A)');
        return;
    }
    
    try {
        console.log('📊 Calculating summary stats...');
        
        const { data, error } = await window.supabaseClient
            .from('quiz_responses')
            .select('percentage');

        if (error) throw error;
        if (!data || data.length === 0) {
            alert('No data to calculate stats.');
            return;
        }

        const totalSubmissions = data.length;
        const sumOfPercentages = data.reduce((sum, row) => sum + (parseFloat(row.percentage) || 0), 0);
        const averagePercentage = totalSubmissions > 0 ? (sumOfPercentages / totalSubmissions).toFixed(2) : "0.00";
        
        // 获取点击量数据来计算 completion rate
        let totalClicks = totalSubmissions;
        try {
            const clicksResponse = await fetch('/api/get-clicks');
            const clicksData = await clicksResponse.json();
            totalClicks = clicksData.totalClicks || totalSubmissions;
        } catch (e) {
            console.log('⚠️ 无法获取点击量数据，使用提交数代替');
        }
        
        const completionRate = totalClicks > 0 
            ? ((totalSubmissions / totalClicks) * 100).toFixed(2)
            : "0.00";

        const statsSummary = [{
            'totalSubmissions': totalSubmissions,
            'sumOfPercentages': sumOfPercentages.toFixed(2),
            'averagePercentage': averagePercentage + '%',
            'completionRate': completionRate + '%'
        }];

        const csv = Papa.unparse(statsSummary);
        downloadCSV(csv, 'quiz_stats.csv');
        console.log('✅ Stats exported');
    } catch (err) {
        console.error('❌ Stats export failed:', err);
        alert('Stats export failed: ' + err.message);
    }
}

function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ===== 初始化加载 =====
window.onload = function () {
    const savedLang = localStorage.getItem("siteLanguage") || "en";
    const btn = document.querySelector(`.lang-btn[onclick*="${savedLang}"]`);
    changeLanguage(savedLang, btn);
    
    console.log("✅ MainPage initialized");
};

document.addEventListener('DOMContentLoaded', function() {
    checkAdminAccess();
    console.log("✅ Admin access check completed");
});