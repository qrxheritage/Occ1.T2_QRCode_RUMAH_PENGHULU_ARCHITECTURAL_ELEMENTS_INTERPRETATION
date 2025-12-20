// Extracted from UserPage.html
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
            }
    };

    let currentLang = 'en';
    
    function changeLanguage(lang, clickedButton) {
        localStorage.setItem("siteLanguage", lang);
        
        currentLang = lang;
        document.body.className = lang === 'zh' ? 'lang-zh' : '';
        
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        clickedButton.classList.add('active');

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
        };

        for (let [id, text] of Object.entries(elements)) {
            const el = document.getElementById(id);
            if (el) el.innerHTML = text; 
        }

        document.querySelectorAll('.view-text').forEach(span => {
            span.textContent = langContent.viewDetails;
        });
    }
    
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
        window.location.href = 'quiz.html?lang=' + currentLang + '&source=UserPage.html';
    }

    function openFeedback() {
        window.open('https://forms.gle/tARHqgcGQiYoHMES6', '_blank');
    }

    // ===== Info Card =====
    function toggleInfo() {
        const infoCard = document.getElementById('infoCard');
        infoCard.classList.toggle('show');
    }

    document.addEventListener('click', (e) => {
        const infoCard = document.getElementById('infoCard');
        const infoButton = document.querySelector('.info-button');
        if (infoCard && infoButton && !infoCard.contains(e.target) && !infoButton.contains(e.target)) {
            infoCard.classList.remove('show');
        }
    });

    window.onload = function () {
        const savedLang = localStorage.getItem("siteLanguage") || "en";
        const btn = document.querySelector(`.lang-btn[onclick*="${savedLang}"]`);
        if (btn) {
            changeLanguage(savedLang, btn);
        }
        
        console.log("✅ UserPage loaded");
        };
