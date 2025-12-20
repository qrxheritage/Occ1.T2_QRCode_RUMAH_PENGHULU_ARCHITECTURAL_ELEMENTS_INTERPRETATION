const content = {
            en: {
                title: "Bilik Tidur — Bedroom",
                backBtnText: "Back to Tour",
                intro: "In traditional Malay homes, family members usually sleep on mengkuang mats placed on the floor. However, because the penghulu held a respected social position, this house includes beds. One of the bedrooms features a three-sided brass bed, while another is furnished with a simpler timber bed. This reflects the penghulu's status and the blend of practicality and formality in the home.",
                hotspot1: {
                    title: "Three-sided brass bed",
                    points: [
                        "For the penghulu",
                        "Simple timber bed (secondary bedroom)"
                    ]
                },
                question: {
                    title: "Challenge Question",
                    questionText: "Who used the three-sided brass bed in Rumah Tengah?",
                    options: ["Secondary family members", "Guests", "The penghulu", "Servants"],
                    correctAnswer: 2,
                    explanation: "The three-sided brass bed was for the penghulu, reflecting their respected social position in the community."
                }
            },
            ms: {
                title: "Bilik Tidur",
                backBtnText: "Kembali ke Jelajah",
                intro: "Dalam rumah tradisional Melayu, ahli keluarga biasanya tidur di atas tikar mengkuang yang diletakkan di atas lantai. Namun, kerana penghulu memegang kedudukan sosial yang dihormati, rumah ini turut mempunyai katil. Salah satu bilik tidur mempunyai katil tembaga tiga sisi, manakala bilik lain dilengkapi dengan katil kayu yang lebih sederhana. Ini menunjukkan status penghulu dan gabungan sifat praktikal serta formal dalam rumah tersebut.",
                hotspot1: {
                    title: "Katil tembaga tiga sisi",
                    points: [
                        "Untuk penghulu",
                        "Katil kayu ringkas (bilik tidur sekundar)"
                    ]
                },
                question: {
                    title: "Soalan Cabaran",
                    questionText: "Siapakah yang menggunakan Katil tembaga tiga sisi di Rumah Tengah?",
                    options: ["Ahli keluarga sekunder", "Tetamu", "Penghulu", "Hamba"],
                    correctAnswer: 2,
                    explanation: "Katil tembaga tiga sisi adalah untuk penghulu, mencerminkan kedudukan sosial mereka yang dihormati dalam masyarakat."
                }
            },
            zh: {
                title: "Bilik Tidur — 寝室",
                backBtnText: "返回首页",
                intro: "在传统马来房屋中，家庭成员通常睡在螺旋棕榈<em>(Mengkuang)</em>垫上放在地板上。然而，由于村长<em>（penghulu）</em>拥有受人尊敬的社会地位，这座房屋配有床。其中一间卧室有三面黄铜床，另一间则配有简单木床。这体现了<em>penghulu</em>的身份地位，以及实用与正式的结合。",
                hotspot1: {
                    title: "三面黄铜床",
                    points: [
                        "供村长使用",
                        "简单的木床（次卧）"
                    ]
                },
                question: {
                    title: "挑战问题",
                    questionText: "三面黄铜床是谁使用的？",
                    options: ["次要家庭成员", "客人", "村长", "仆人"],
                    correctAnswer: 2,
                    explanation: "三面黄铜床是供penghulu（村长）使用的，反映了他们在社区中受尊敬的社会地位。"
                }
            }
        };

        let currentLang = 'en';

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
                    infoImage.style.display = 'none';
                    infoContent.innerHTML = 
                        '<p style="font-weight: bold; color: #333; margin-bottom: 10px;">' + langContent.hotspot1.points[0] + '</p>' +
                        '<img src="https://i.imgur.com/Pnp0OAa.png" style="width: 100%; border-radius: 8px; margin-bottom: 25px;">' +
                        '<p style="font-weight: bold; color: #333; margin-bottom: 10px;">' + langContent.hotspot1.points[1] + '</p>' +
                        '<img src="https://i.imgur.com/8cWPBhX.png" style="width: 100%; border-radius: 8px; margin-bottom: 15px;">';
                } else if (hotspotId === 'question') {
                    infoTitle.textContent = langContent.question.title;
                    infoImage.style.display = 'none';
                    infoContent.innerHTML = '';
                    questionOptions.style.display = 'grid';
                    
                    langContent.question.options.forEach((option, index) => {
                        const btn = document.createElement('button');
                        btn.className = 'option-btn';
                        btn.textContent = option;
                        btn.addEventListener('click', () => handleAnswer(index, langContent.question));
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
