const content = {
            en: {
                title: "Rumah Tengah — Middle Room",
                backBtnText: "Back to Tour",
                intro: "The Rumah Tengah serves as a domestic area where women traditionally carry out household chores. Its floor is lower than that of the Rumah Ibu, and separate stairways connect the two sections. Carvings and windows in this area are simpler and less ornate, reflecting its domestic function.",
                hotspot1: {
                    title: "Dapur (Kitchen)",
                    points: [
                        "Traditional stoves were made from elevated wooden boxes packed with clay and banana stalks for insulation.",
                        "Small fires using coconut husks or wood were placed under clay pots"
                    ]
                },
                hotspot2: {
                    title: "Cooking Utensils",
                    points: [
                        "Cooking utensils like the kuali (wok) were made from brass or iron."
                    ]
                },
                question: {
                    title: "Challenge Question",
                    questionText: "What material was used to insulate traditional clay stoves in the dapur?",
                    options: ["Sand", "Coconut shell", "Clay and banana stalks", "Metal plates"],
                    correctAnswer: 2,
                    explanation: "Traditional stoves were made from elevated wooden boxes packed with clay and banana stalks for insulation."
                }
            },
            ms: {
                title: "Rumah Tengah — Ruang Domestik",
                backBtnText: "Kembali ke Jelajah",
                intro: "Rumah Tengah berfungsi sebagai ruang domestik di mana wanita secara tradisinya menjalankan kerja-kerja rumah. Lantai di sini lebih rendah daripada Rumah Ibu, dan tangga berasingan menghubungkan kedua-dua bahagian. Ukiran dan tingkap di kawasan ini lebih sederhana dan kurang hiasan, mencerminkan fungsi domestiknya.",
                hotspot1: {
                    title: "Dapur",
                    points: [
                        "Dapur tradisional diperbuat daripada kotak kayu yang dinaikkan dan diisi dengan tanah liat dan pelepah pisang sebagai penebat.",
                        "Api kecil menggunakan kulit kelapa atau kayu diletakkan di bawah periuk tanah liat."
                    ]
                },
                hotspot2: {
                    title: "Alat Memasak",
                    points: [
                        "Alat memasak seperti kuali diperbuat daripada tembaga atau besi."
                    ]
                },
                question: {
                    title: "Soalan Cabaran",
                    questionText: "Apakah bahan yang digunakan untuk menebat dapur tanah liat tradisional?",
                    options: ["Pasir", "Tempurung kelapa", "Tanah liat dan pelepah pisang", "Plat logam"],
                    correctAnswer: 2,
                    explanation: "Dapur tradisional diperbuat daripada kotak kayu yang dinaikkan dan diisi dengan tanah liat dan pelepah pisang sebagai penebat."
                }
            },
            zh: {
                title: "Rumah Tengah — 中间房",
                backBtnText: "返回首页",
                intro: "<i>Rumah Tengah</i> 是一个家庭生活区，传统上由女性进行日常家务。其地板低于 <i>Rumah Ibu</i>，两部分之间有独立的楼梯连接。此区域的雕刻和窗户较为简朴，装饰性不强，体现了其家庭功能。",
                hotspot1: { 
                    title: "Dapur (厨房)",
                    points: [
                        "传统炉灶由高架木箱制成，填充粘土和香蕉杆作为隔热材料。",
                        "用椰壳或木材点小火置于陶锅下"
                    ]
                },
                hotspot2: { 
                    title: "烹饪用具",
                    points: [
                        "烹饪用具如 kuali（炒锅） 多为 黄铜或铁制。"
                    ]
                },
                question: {
                    title: "挑战问题",
                    questionText: "传统厨房的黏土炉灶使用什么材料作为隔热？",
                    options: ["沙子", "椰子壳", "粘土和香蕉杆", "金属板"],
                    correctAnswer: 2,
                    explanation: "传统炉灶由高架木箱制成，填充粘土和香蕉杆作为隔热材料。"
                }
            }
        };

        let currentLang = 'en';

        // Helper function to get language from URL query
        function getQueryLang() {
            const params = new URLSearchParams(window.location.search);
            return params.get('lang');
        }

        function changeLanguage(lang, clickedButton) {
            localStorage.setItem("siteLanguage", lang);
            currentLang = lang;
            
            // Update body class for Chinese font
            document.body.className = lang === 'zh' ? 'lang-zh' : '';
            
            // Update active button classes
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            if (clickedButton) {
                clickedButton.classList.add('active');
            } else { 
                 const initialBtn = document.querySelector(`.lang-btn[onclick*="${lang}"]`);
                 if (initialBtn) initialBtn.classList.add('active');
            }

            // Update content
            const langContent = content[lang];
            document.getElementById('pageTitle').textContent = langContent.title;
            document.getElementById('introText').innerHTML = langContent.intro;
            
            // Optional: Update back button text if it exists
            const backBtnTextEl = document.getElementById('backBtnText');
            if (backBtnTextEl) backBtnTextEl.textContent = langContent.backBtnText;
            
            // Update preview text
            document.getElementById('preview1').textContent = langContent.hotspot1.title;
            document.getElementById('preview2').textContent = langContent.hotspot2.title;

            // Close panel and reset quiz state if language changes while panel is open
            if (infoPanel.classList.contains('active')) {
                closePanel();
            }
        }

        const hotspots = document.querySelectorAll('.hotspot');
        const infoPanel = document.getElementById('infoPanel');
        const overlay = document.getElementById('overlay');
        const closeBtn = document.getElementById('closeBtn');
        const infoTitle = document.getElementById('infoTitle');
        const infoImage = document.getElementById('infoImage');
        const infoContent = document.getElementById('infoContent');
        const questionOptions = document.getElementById('questionOptions');
        const explanation = document.getElementById('explanation');
        const explanationText = document.getElementById('explanationText');

        hotspots.forEach(hotspot => {
            const preview = hotspot.querySelector('.hotspot-preview');
            
            hotspot.addEventListener('mouseenter', () => {
                if (preview) {
                    preview.classList.add('show');
                }
            });
            
            hotspot.addEventListener('mouseleave', () => {
                if (preview) {
                    preview.classList.remove('show');
                }
            });
            
            hotspot.addEventListener('click', () => {
                const hotspotId = hotspot.getAttribute('data-hotspot');
                const langContent = content[currentLang];
                
                // Reset panel content
                questionOptions.innerHTML = '';
                explanation.classList.remove('show');
                questionOptions.style.display = 'none';
                infoImage.style.display = 'none';
                infoContent.innerHTML = '';
                
                if (hotspotId === '1') {
                    infoTitle.textContent = langContent.hotspot1.title;
                    infoImage.src = 'https://i.imgur.com/odV3sHi.png';
                    infoImage.style.display = 'block';
                    infoContent.innerHTML = '<ul>' + langContent.hotspot1.points.map(p => '<li>' + p + '</li>').join('') + '</ul>';
                } else if (hotspotId === '2') {
                    infoTitle.textContent = langContent.hotspot2.title;
                    infoImage.src = 'https://i.imgur.com/EuXioQu.png';
                    infoImage.style.display = 'block';
                    infoContent.innerHTML = '<ul>' + langContent.hotspot2.points.map(p => '<li>' + p + '</li>').join('') + '</ul>';
                } else if (hotspotId === 'question') {
                    const questionData = langContent.question;
                    infoTitle.textContent = questionData.title;
                    infoPanel.classList.add('quiz-mode');
                    infoContent.innerHTML = '<p>' + questionData.questionText + '</p>';
                    questionOptions.style.display = 'grid';
                    
                    questionData.options.forEach((option, index) => {
                        const btn = document.createElement('button');
                        btn.className = 'option-btn';
                        btn.textContent = option;
                        // Attach the modified answer handler
                        btn.addEventListener('click', () => handleAnswer(index, questionData));
                        questionOptions.appendChild(btn);
                    });
                }
                
                infoPanel.classList.add('active');
                overlay.classList.add('active');
            });
        });

        function handleAnswer(selectedIndex, questionData) {
            const options = questionOptions.querySelectorAll('.option-btn');
            
            options.forEach((btn, index) => {
                btn.disabled = true; // Disable all options after first click
                
                if (index === questionData.correctAnswer) {
                    btn.classList.add('correct');
                    if (index === selectedIndex) {
                        btn.style.boxShadow = '0 0 15px var(--success-green)'; 
                    }
                } else if (index === selectedIndex) {
                    btn.classList.add('incorrect');
                }
            });
            
            explanationText.textContent = questionData.explanation;
            explanation.classList.add('show');
        }

        function closePanel() {
            infoPanel.classList.remove('active');
            infoPanel.classList.remove('quiz-mode');
            overlay.classList.remove('active');
        }

        closeBtn.addEventListener('click', closePanel);
        overlay.addEventListener('click', closePanel);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closePanel();
            }
        });

        // Initialize language
        document.addEventListener('DOMContentLoaded', () => {
            const urlLang = getQueryLang();
            const savedLang = localStorage.getItem("siteLanguage");
            const initialLang = urlLang || savedLang || "en";
            
            const btn = document.querySelector(`.lang-btn[onclick*="${initialLang}"]`);
            changeLanguage(initialLang, btn);
        });
