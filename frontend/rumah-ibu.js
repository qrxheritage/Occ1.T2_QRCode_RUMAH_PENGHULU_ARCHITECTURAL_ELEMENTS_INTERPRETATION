// Extracted from rumah-ibu.html
const content = {
            en: {
                title: "Rumah Ibu — The Main Living Space of House",
                backBtnText: "Back to Tour",
                intro: "Rumah Ibu is built at the highest floor level and serves as the central area for receiving guests and holding important family events. Traditionally, wedding ceremonies take place here. A decorative wedding dais known as pelamin is prepared with detailed needlework by the bride's relatives for the bride and groom to be seated during the bersanding ceremony. This highlights the Rumah Ibu as a space of social gathering, celebration, and family unity.",
                hotspot1: {
                    title: "Pelamin (Wedding Dais)",
                    points: [
                        "Crafted with detailed needlework by the bride's relatives that need a few weeks to complete.",
                        "During bersanding (wedding ceremony), the groom and bride sit on the dais, with the groom sitting on the right."
                    ]
                },
                hotspot2: {
                    title: "Rumah Ibu",
                    points: [
                        "Elevated main living area for public functions",
                        "Venue for significant ceremonies such as weddings"
                    ]
                },
                question: {
                    title: "Challenge Question",
                    questionText: "Who are in charge of making pelamin? (Wedding Dais)?",
                    options: ["The Groom", "The Bride", "The Groom's parents", "The Bride's relatives"],
                    correctAnswer: 3, // Index 3: "The Bride's relatives"
                    explanation: "The pelamin is traditionally crafted with detailed needlework by the bride's relatives. This important cultural tradition requires several weeks of preparation."
                }
            },
            ms: {
                title: "Rumah Ibu — Ruang Tamu Utama",
                backBtnText: "Kembali ke Jelajah",
                intro: "Rumah Ibu dibina pada aras lantai yang paling tinggi dan berfungsi sebagai ruang utama untuk menerima tetamu serta mengadakan majlis keluarga yang penting. Secara tradisinya, majlis perkahwinan berlangsung di sini. Sebuah pelamin yang dihias indah akan disiapkan dengan hasil kerja tangan yang teliti oleh ahli keluarga pengantin perempuan untuk tempat duduk pengantin lelaki dan perempuan semasa majlis bersanding. Ini menggambarkan Rumah Ibu sebagai ruang untuk perhimpunan sosial, perayaan dan penyatuan keluarga.",
                hotspot1: {
                    title: "Pelamin",
                    points: [
                        "Dihasilkan dengan jahitan halus oleh ahli keluarga pengantin perempuan, yang mengambil masa beberapa minggu untuk disiapkan.",
                        "Semasa majlis bersanding, pengantin lelaki dan perempuan duduk di atas pelamin, dengan pengantin lelaki di sebelah kanan."
                    ]
                },
                hotspot2: {
                    title: "Rumah Ibu",
                    points: [
                        "Ruang utama yang tinggi untuk acara umum",
                        "Tempat berlangsungnya upacara penting seperti majlis perkahwinan"
                    ]
                },
                question: {
                    title: "Soalan Cabaran",
                    questionText: "Siapakah yang bertanggungjawab membuat pelamin?",
                    options: ["Pengantin lelaki", "Pengantin perempuan", "Ibu bapa pengantin lelaki", "Ahli keluarga pengantin perempuann"],
                    correctAnswer: 3,
                    explanation: "Pelamin secara tradisinya direka dengan jahitan terperinci oleh ahli keluarga pengantin perempuan. Tradisi budaya penting ini memerlukan beberapa minggu persediaan."
                }
            },
            zh: {
                title: "Rumah Ibu — 客厅",
                backBtnText: "返回首页",
                intro: "<i>Rumah Ibu</i> 建在整个房屋中最高的楼层，作为接待宾客和举办重要家庭活动的主要空间。传统上，婚礼仪式也在这里举行。由新娘的亲属精心制作、绣工细致的新人座<em>（pelamin）</em>会被布置好，让新人在婚礼的并坐礼<em>（bersanding）</em>仪式中入座接受祝福。这体现了 <i>Rumah Ibu</i> 作为社交、庆典与家庭凝聚的核心空间。",
                hotspot1: { 
                    title: "Pelamin（新人座）",
                    points: [
                        "由新娘的亲属以细致的针线手工制作，通常需要数周才能完成。",
                        "在婚礼仪式中，新郎和新娘坐在新人座上，新郎会坐在右侧"
                    ]
                },
                hotspot2: { 
                    title: "Rumah Ibu",
                    points: [
                        "作为举办公共活动的主要空间（建在整个房屋最高的楼层）",
                        "举办重要仪式的地点，例如婚礼"
                    ]
                },
                question: {
                    title: "挑战问题",
                    questionText: "谁负责制作新人座（pelamin）？",
                    options: ["新郎", "新娘", "新郎的父母", "新娘的亲属"],
                    correctAnswer: 3,
                    explanation: "新人座(Pelamin)传统上由新娘的亲戚精心刺绣制作。这一重要的文化传统需要数周的准备时间。"
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
            } else { // Handle initialization case where clickedButton is null (from DOMContentLoaded)
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
            const hotspotId = hotspot.getAttribute('data-hotspot');
            
            // Hover logic (unchanged)
            hotspot.addEventListener('mouseenter', () => { if (preview) preview.classList.add('show'); });
            hotspot.addEventListener('mouseleave', () => { if (preview) preview.classList.remove('show'); });
            
            // Click logic
            hotspot.addEventListener('click', () => {
                const langContent = content[currentLang];
                
                // Reset panel state
                questionOptions.innerHTML = '';
                explanation.classList.remove('show');
                questionOptions.style.display = 'none';
                infoImage.style.display = 'none';
                infoContent.innerHTML = '';
                infoPanel.classList.remove('quiz-mode'); // Remove quiz class by default
                
                if (hotspotId === '1' || hotspotId === '2') {
                    const data = langContent['hotspot' + hotspotId];
                    infoTitle.textContent = data.title;
                    infoImage.src = (hotspotId === '1') ? 'https://i.imgur.com/WTu5haI.png' : 'https://badanwarisanmalaysia.org/wp-content/uploads/2015/01/rumah-ibu.jpg?w=1024';
                    infoImage.style.display = 'block';
                    infoContent.innerHTML = '<ul>' + data.points.map(p => '<li>' + p + '</li>').join('') + '</ul>';

                } else if (hotspotId === 'question') {
                    const questionData = langContent.question;
                    infoTitle.textContent = questionData.title;
                    infoPanel.classList.add('quiz-mode'); // Add quiz class for distinct style
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

        // Restored and slightly improved handleAnswer function
        function handleAnswer(selectedIndex, questionData) {
            const options = questionOptions.querySelectorAll('.option-btn');
            
            options.forEach((btn, index) => {
                btn.disabled = true; // Disable all options after first click
                
                if (index === questionData.correctAnswer) {
                    btn.classList.add('correct');
                    // If the user selected the correct one, make it visually obvious
                    if (index === selectedIndex) {
                        btn.style.boxShadow = '0 0 15px var(--success-green)'; 
                    }
                } else if (index === selectedIndex) {
                    // If selected option is wrong
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
