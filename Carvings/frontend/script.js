// Simple multilingual support (EN, BM, ZH) for all pages

const translations = {
  en: {
    siteTitle: 'Rumah Penghulu Abu Seman – Carving Motifs',
    siteSubtitle: 'Exploring Malay wood carving traditions',
    heroTitle: 'Malay Wood Carving at Rumah Penghulu Abu Seman',
    heroLead1:
      'Malay wood carving is one of the most important elements in Malay Traditional Architecture because it serves both functional purposes (such as ventilation) and decorative purposes.',
    heroLead2:
      'Rumah Penghulu Abu Seman clearly represents this architectural tradition through its wood carvings. These carvings showcase the beauty of traditional Malay craftsmanship and reflect the cultural values of the Malay community.',
    heroLead3:
      'In this website, you can explore four main types of carvings—Flora, Fauna, Cosmos, and Geometric motifs—through 3D models and explanations, as well as share your feedback and try a short quiz.',
    heroNote:
      'This website is designed to be accessed via a QR code placed at the entrance of Rumah Penghulu Abu Seman, allowing visitors to explore the carvings virtually before receiving further explanations from the staff.',
    heroCardTitle: 'Four Types of Carving Motifs',
    heroCardItem1: 'Flora – Plants, leaves, flowers',
    heroCardItem2: 'Fauna – Birds, fish, insects',
    heroCardItem3: 'Cosmos – Sun, moon, stars',
    heroCardItem4: 'Geometric – Shapes and symmetric patterns',
    heroCardFooter:
      'Tap a motif card below to view more details and a 3D model placeholder.',
    motifSectionTitle: 'Carving Motif Categories',
    motifSectionIntro:
      'Select a motif to learn more. A dedicated page will display a 3D model (placeholder for now) together with detailed explanations.',
    motifFloraTitle: 'Flora',
    motifFloraDesc:
      'Flora motifs are inspired by plants, leaves and flowers, which symbolize beauty and harmony with nature. This reflects a close relationship with the natural environment.',
    motifFaunaTitle: 'Fauna',
    motifFaunaDesc:
      'Fauna motifs are inspired by animals such as birds, fish and insects, which symbolize freedom and the dynamic movement of life.',
    motifCosmosTitle: 'Cosmos',
    motifCosmosDesc:
      'Cosmic motifs are inspired by celestial elements such as the sun, moon and stars, which symbolize the connection between humans and the universe. This reflects the spiritual beliefs of Malay culture. We will include 3D models along with explanations of this cosmos carving.',
    motifGeometricTitle: 'Geometric',
    motifGeometricDesc:
      'Geometric motifs are composed of shapes and symmetric patterns such as triangles, circles and squares, which symbolize balance, unity and harmony.',
    interactionTitle: 'Interact With the Exhibition',
    interactionIntro:
      'After exploring the carvings, you are invited to share your thoughts and test your understanding through a feedback form and a short quiz.',
    feedbackTitle: 'Feedback Form',
    feedbackDesc:
      'Share your experience and suggestions. This button will link to a Google Form.',
    quizTitle: 'Carving Quiz',
    quizDesc:
      'Test your understanding of the four motif categories. Take our interactive quiz to check your knowledge.',
    footerText:
      'This page is a digital companion to Rumah Penghulu Abu Seman, inspired by references from Badan Warisan Malaysia.',
    footerTextLead: 'Preserving Cultural Heritage with',
    footerSubtext: 'Traditional Malay Architecture Education Initiative',
    langEnglish: 'English',
    langMalay: 'Melayu',
    langChinese: '中文',

    // Detail pages shared
    backToMain: 'Back to main page',
    modelPlaceholderTitle: '3D Model Placeholder',
    modelPlaceholderBody:
      'A 3D model of this carving motif will be embedded here. You can replace this area with your own 3D viewer or images later.',

    // Detail – Flora
    floraBreadcrumb: 'Flora Motif',
    floraTitle: 'Flora Carving Motifs',
    floraTagline: 'Plants, leaves and flowers surrounding the house.',
    floraIntro1:
      'Flora motifs are inspired by plants, leaves and flowers, which symbolize beauty and harmony with nature.',
    floraIntro2:
      'The use of floral carvings reflects a close relationship with the natural environment and a deep appreciation of Allah’s creations.',
    floraIntro3:
      'In Rumah Penghulu Abu Seman, floral motifs are often carved around window panels, door frames and ventilation panels to soften the solid timber structure.',

    // Detail – Fauna
    faunaBreadcrumb: 'Fauna Motif',
    faunaTitle: 'Fauna Carving Motifs',
    faunaTagline: 'Birds, fish and insects full of movement.',
    faunaIntro1:
      'Fauna motifs are inspired by animals such as birds, fish and insects, which symbolize freedom and the dynamic movement of life.',
    faunaIntro2:
      'In Malay culture, animal forms are often stylised to respect religious sensitivities while still capturing the essence of movement and energy.',
    faunaIntro3:
      'At Rumah Penghulu Abu Seman, these motifs help to animate the façade and bring a sense of liveliness to the timber surfaces.',

    // Detail – Cosmos
    cosmosBreadcrumb: 'Cosmos Motif',
    cosmosTitle: 'Cosmos Carving Motifs',
    cosmosTagline: 'The sun, moon and stars above the rumah.',
    cosmosIntro1:
      'Cosmic motifs are inspired by celestial elements such as the sun, moon and stars, which symbolize the connection between humans and the universe.',
    cosmosIntro2:
      'These carvings reflect the spiritual beliefs of Malay culture, where the cosmos reminds people of the greatness of the Creator and the order of creation.',
    cosmosIntro3:
      'We will include 3D models along with explanations of this cosmos carving to help visitors visualise how the patterns capture light and shadow.',

    // Detail – Geometric
    geometricBreadcrumb: 'Geometric Motif',
    geometricTitle: 'Geometric Carving Motifs',
    geometricTagline: 'Triangles, circles and repeating patterns.',
    geometricIntro1:
      'Geometric motifs are composed of shapes and symmetric patterns such as triangles, circles and squares, which symbolize balance, unity and harmony.',
    geometricIntro2:
      'They are often used to create a sense of order and rhythm across large timber surfaces, complementing flora and fauna carvings.',
    geometricIntro3:
      'In Rumah Penghulu Abu Seman, geometric carvings also enhance ventilation panels while maintaining visual privacy.',

    // Quiz page translations
    quizPageTitle: 'Carving Motifs Quiz',
    quizPageSubtitle: 'Test your knowledge about the four types of carving motifs',
    questionLabel: 'Question',
    q1Text: 'What do Flora motifs symbolize in Malay wood carving?',
    q1OptionA: 'Freedom and dynamic movement',
    q1OptionB: 'Beauty and harmony with nature',
    q1OptionC: 'Connection between humans and the universe',
    q1OptionD: 'Balance, unity and harmony',
    q2Text: 'Which motif category includes animals such as birds, fish and insects?',
    q2OptionA: 'Flora',
    q2OptionB: 'Fauna',
    q2OptionC: 'Cosmos',
    q2OptionD: 'Geometric',
    q3Text: 'Cosmic motifs are inspired by celestial elements. What do they symbolize?',
    q3OptionA: 'The connection between humans and the universe',
    q3OptionB: 'Beauty and harmony with nature',
    q3OptionC: 'Freedom and dynamic movement',
    q3OptionD: 'Balance, unity and harmony',
    q4Text: 'Geometric motifs are composed of shapes and symmetric patterns. Which of these is NOT typically part of geometric motifs?',
    q4OptionA: 'Triangles, circles and squares',
    q4OptionB: 'Symmetric patterns',
    q4OptionC: 'Plants and flowers',
    q4OptionD: 'Repeating patterns',
    submitQuiz: 'Submit Quiz',
    quizResults: 'Quiz Results',
    yourAnswers: 'Your Answers',
    retakeQuiz: 'Retake Quiz',
    correctAnswer: 'Correct',
    incorrectAnswer: 'Incorrect',
    correctAnswerLabel: 'Correct answer:',
    excellentScore: 'Excellent! You have a great understanding of the carving motifs!',
    goodScore: 'Good job! You understand the carving motifs well.',
    averageScore: 'Not bad! Review the motifs to improve your score.',
    lowScore: 'Keep learning! Explore the motif pages to learn more.',
    viewAnalytics: '📊 View Analytics (Google Sheet)',
    userIdLabel: 'Visitor Nickname (optional)',
    userIdPlaceholder: 'Enter your nickname',
    userIdHelp: 'This helps staff review quiz responses in Google Sheets.',
  },

  ms: {
    siteTitle: 'Rumah Penghulu Abu Seman – Motif Ukiran',
    siteSubtitle: 'Meneroka tradisi ukiran kayu Melayu',
    heroTitle: 'Ukiran Kayu Melayu di Rumah Penghulu Abu Seman',
    heroLead1:
      'Ukiran kayu Melayu merupakan salah satu elemen terpenting dalam Seni Bina Tradisional Melayu kerana ia berfungsi untuk tujuan praktikal (seperti pengudaraan) dan juga hiasan.',
    heroLead2:
      'Rumah Penghulu Abu Seman jelas menunjukkan tradisi seni bina ini melalui ukiran kayunya. Ukiran ini menyerlahkan keindahan pertukangan Melayu tradisional dan mencerminkan nilai budaya masyarakat Melayu.',
    heroLead3:
      'Dalam laman ini, anda boleh meneroka empat jenis utama ukiran — motif Flora, Fauna, Kosmos dan Geometri — melalui model 3D dan penerangan, serta memberi maklum balas dan mencuba kuiz ringkas.',
    heroNote:
      'Laman ini direka untuk diakses melalui kod QR yang diletakkan di pintu masuk Rumah Penghulu Abu Seman supaya pengunjung dapat meneroka ukiran secara maya sebelum penerangan lanjut diberikan oleh petugas.',
    heroCardTitle: 'Empat Jenis Motif Ukiran',
    heroCardItem1: 'Flora – Tumbuhan, daun, bunga',
    heroCardItem2: 'Fauna – Burung, ikan, serangga',
    heroCardItem3: 'Kosmos – Matahari, bulan, bintang',
    heroCardItem4: 'Geometri – Bentuk dan corak simetri',
    heroCardFooter:
      'Tekan kad motif di bawah untuk melihat maklumat lanjut dan ruang model 3D.',
    motifSectionTitle: 'Kategori Motif Ukiran',
    motifSectionIntro:
      'Pilih satu motif untuk ketahui dengan lebih lanjut. Halaman khas akan memaparkan model 3D (buat masa ini masih kosong) bersama penerangan terperinci.',
    motifFloraTitle: 'Flora',
    motifFloraDesc:
      'Motif flora diinspirasikan daripada tumbuhan, daun dan bunga yang melambangkan keindahan serta keharmonian dengan alam semula jadi. Ini mencerminkan hubungan rapat dengan persekitaran semula jadi.',
    motifFaunaTitle: 'Fauna',
    motifFaunaDesc:
      'Motif fauna diinspirasikan daripada haiwan seperti burung, ikan dan serangga yang melambangkan kebebasan dan pergerakan hidup yang dinamik.',
    motifCosmosTitle: 'Kosmos',
    motifCosmosDesc:
      'Motif kosmos diinspirasikan daripada unsur cakerawala seperti matahari, bulan dan bintang yang melambangkan hubungan antara manusia dan alam semesta. Ini mencerminkan kepercayaan rohani dalam budaya Melayu. Kami akan menyertakan model 3D bersama penerangan tentang ukiran kosmos ini.',
    motifGeometricTitle: 'Geometri',
    motifGeometricDesc:
      'Motif geometri terdiri daripada bentuk dan corak simetri seperti segi tiga, bulatan dan segi empat yang melambangkan keseimbangan, kesatuan dan keharmonian.',
    interactionTitle: 'Berinteraksi dengan Pameran',
    interactionIntro:
      'Selepas meneroka ukiran, anda dijemput untuk berkongsi pandangan dan menguji pemahaman melalui borang maklum balas dan kuiz ringkas.',
    feedbackTitle: 'Borang Maklum Balas',
    feedbackDesc:
      'Kongsikan pengalaman dan cadangan anda. Butang ini akan dipautkan ke Google Form.',
    quizTitle: 'Kuiz Ukiran',
    quizDesc:
      'Uji pemahaman anda tentang empat kategori motif. Ambil kuiz interaktif kami untuk menguji pengetahuan anda.',
    footerText:
      'Laman ini ialah teman digital kepada Rumah Penghulu Abu Seman, diilhamkan daripada rujukan Badan Warisan Malaysia.',
    footerTextLead: 'Memelihara Warisan Budaya bersama',
    footerSubtext: 'Inisiatif Pendidikan Seni Bina Tradisional Melayu',
    langEnglish: 'Inggeris',
    langMalay: 'Melayu',
    langChinese: 'Cina',

    backToMain: 'Kembali ke laman utama',
    modelPlaceholderTitle: 'Ruang Model 3D',
    modelPlaceholderBody:
      'Model 3D bagi motif ukiran ini akan dimasukkan di sini. Anda boleh menggantikan ruang ini dengan paparan 3D atau imej anda sendiri kemudian.',

    floraBreadcrumb: 'Motif Flora',
    floraTitle: 'Motif Ukiran Flora',
    floraTagline: 'Tumbuhan, daun dan bunga mengelilingi rumah.',
    floraIntro1:
      'Motif flora diinspirasikan daripada tumbuhan, daun dan bunga yang melambangkan keindahan serta keharmonian dengan alam semula jadi.',
    floraIntro2:
      'Penggunaan ukiran flora mencerminkan hubungan rapat dengan alam sekitar dan penghargaan mendalam terhadap ciptaan Allah.',
    floraIntro3:
      'Di Rumah Penghulu Abu Seman, motif flora banyak diukir pada panel tingkap, rangka pintu dan panel pengudaraan untuk melembutkan struktur kayu yang tegap.',

    faunaBreadcrumb: 'Motif Fauna',
    faunaTitle: 'Motif Ukiran Fauna',
    faunaTagline: 'Burung, ikan dan serangga yang bergerak.',
    faunaIntro1:
      'Motif fauna diinspirasikan daripada haiwan seperti burung, ikan dan serangga yang melambangkan kebebasan dan pergerakan hidup yang dinamik.',
    faunaIntro2:
      'Dalam budaya Melayu, bentuk haiwan sering digayakan secara abstrak bagi menghormati sensitiviti agama sambil mengekalkan rasa gerakan dan tenaga.',
    faunaIntro3:
      'Di Rumah Penghulu Abu Seman, motif ini membantu menghidupkan rupa luar rumah dan memberi rasa keceriaan pada permukaan kayu.',

    cosmosBreadcrumb: 'Motif Kosmos',
    cosmosTitle: 'Motif Ukiran Kosmos',
    cosmosTagline: 'Matahari, bulan dan bintang di langit.',
    cosmosIntro1:
      'Motif kosmos diinspirasikan daripada unsur cakerawala seperti matahari, bulan dan bintang yang melambangkan hubungan antara manusia dan alam semesta.',
    cosmosIntro2:
      'Ukiran ini mencerminkan kepercayaan rohani dalam budaya Melayu, di mana kosmos mengingatkan manusia kepada kebesaran Pencipta dan susunan alam.',
    cosmosIntro3:
      'Model 3D akan digunakan bersama penerangan untuk membantu pengunjung melihat bagaimana corak ini memanipulasi cahaya dan bayang.',

    geometricBreadcrumb: 'Motif Geometri',
    geometricTitle: 'Motif Ukiran Geometri',
    geometricTagline: 'Segi tiga, bulatan dan corak berulang.',
    geometricIntro1:
      'Motif geometri terdiri daripada bentuk dan corak simetri seperti segi tiga, bulatan dan segi empat yang melambangkan keseimbangan, kesatuan dan keharmonian.',
    geometricIntro2:
      'Ia sering digunakan untuk mewujudkan rasa tertib dan ritma pada permukaan kayu yang luas, melengkapkan ukiran flora dan fauna.',
    geometricIntro3:
      'Di Rumah Penghulu Abu Seman, ukiran geometri juga memperindah panel pengudaraan sambil mengekalkan privasi visual.',

    // Quiz page translations
    quizPageTitle: 'Kuiz Motif Ukiran',
    quizPageSubtitle: 'Uji pengetahuan anda tentang empat jenis motif ukiran',
    questionLabel: 'Soalan',
    q1Text: 'Apakah yang dilambangkan oleh motif Flora dalam ukiran kayu Melayu?',
    q1OptionA: 'Kebebasan dan pergerakan hidup yang dinamik',
    q1OptionB: 'Keindahan dan keharmonian dengan alam semula jadi',
    q1OptionC: 'Hubungan antara manusia dan alam semesta',
    q1OptionD: 'Keseimbangan, kesatuan dan keharmonian',
    q2Text: 'Kategori motif manakah yang merangkumi haiwan seperti burung, ikan dan serangga?',
    q2OptionA: 'Flora',
    q2OptionB: 'Fauna',
    q2OptionC: 'Kosmos',
    q2OptionD: 'Geometri',
    q3Text: 'Motif kosmos diinspirasikan daripada unsur cakerawala. Apakah yang dilambangkannya?',
    q3OptionA: 'Hubungan antara manusia dan alam semesta',
    q3OptionB: 'Keindahan dan keharmonian dengan alam semula jadi',
    q3OptionC: 'Kebebasan dan pergerakan hidup yang dinamik',
    q3OptionD: 'Keseimbangan, kesatuan dan keharmonian',
    q4Text: 'Motif geometri terdiri daripada bentuk dan corak simetri. Manakah antara berikut BUKAN sebahagian daripada motif geometri?',
    q4OptionA: 'Segi tiga, bulatan dan segi empat',
    q4OptionB: 'Corak simetri',
    q4OptionC: 'Tumbuhan dan bunga',
    q4OptionD: 'Corak berulang',
    submitQuiz: 'Hantar Kuiz',
    quizResults: 'Keputusan Kuiz',
    yourAnswers: 'Jawapan Anda',
    retakeQuiz: 'Cuba Semula',
    correctAnswer: 'Betul',
    incorrectAnswer: 'Salah',
    correctAnswerLabel: 'Jawapan betul:',
    excellentScore: 'Cemerlang! Anda memahami motif ukiran dengan baik!',
    goodScore: 'Bagus! Anda memahami motif ukiran dengan baik.',
    averageScore: 'Boleh tahan! Semak semula halaman motif untuk meningkatkan skor.',
    lowScore: 'Teruskan belajar! Terokai halaman motif untuk mengetahui lebih lanjut.',
    viewAnalytics: '📊 Lihat Analitik (Google Sheet)',
    userIdLabel: 'Nama Samaran Pelawat (pilihan)',
    userIdPlaceholder: 'Masukkan nama samaran anda',
    userIdHelp: 'Ini membantu petugas menyemak respons kuiz dalam Google Sheets.',
  },

  zh: {
    siteTitle: 'Rumah Penghulu Abu Seman – 雕刻图案',
    siteSubtitle: '探索传统马来木雕艺术',
    heroTitle: 'Rumah Penghulu Abu Seman 的马来木雕',
    heroLead1:
      '马来木雕是马来传统建筑中最重要的元素之一，不仅具有装饰作用，也具备实用功能，例如通风与遮阳。',
    heroLead2:
      'Rumah Penghulu Abu Seman 通过丰富的木雕装饰，清楚地展现了这种建筑传统，体现了精湛的马来工艺与深厚的文化价值。',
    heroLead3:
      '在这个网站中，您可以通过四大类图案——植物（Flora）、动物（Fauna）、宇宙（Cosmos）与几何（Geometric）——的说明与3D模型，占先了解这些木雕的意义。',
    heroNote:
      '本网站配合放置在 Rumah Penghulu Abu Seman 入口处的二维码使用，方便访客在讲解前先以数位方式探索这些木雕。',
    heroCardTitle: '四大木雕图案类别',
    heroCardItem1: '植物图案 – 花草树叶',
    heroCardItem2: '动物图案 – 鸟、鱼与昆虫',
    heroCardItem3: '宇宙图案 – 太阳、月亮与星星',
    heroCardItem4: '几何图案 – 各种对称形状与纹样',
    heroCardFooter: '点击下方任一图案卡片以查看详细说明与3D模型预留空间。',
    motifSectionTitle: '木雕图案分类',
    motifSectionIntro:
      '请选择一个图案类别进一步了解。每个页面都会显示一个3D模型预留区（稍后可加入实际模型）以及详细的文字说明。',
    motifFloraTitle: '植物图案',
    motifFloraDesc:
      '植物图案取材自树木、叶片与花朵，象征美感与人与自然的和谐关系，也反映出对周围自然环境的珍惜与依赖。',
    motifFaunaTitle: '动物图案',
    motifFaunaDesc:
      '动物图案源自动物形象，如鸟类、鱼类与昆虫，象征自由以及生命流动的动态感。',
    motifCosmosTitle: '宇宙图案',
    motifCosmosDesc:
      '宇宙图案取材自太阳、月亮与星星等天体，象征人类与宇宙之间的联系，也反映出马来文化中对精神世界的信仰。此类别将搭配3D模型与更深入的解说。',
    motifGeometricTitle: '几何图案',
    motifGeometricDesc:
      '几何图案由三角形、圆形、方形等基本形状与对称纹样组成，象征平衡、统一与和谐。',
    interactionTitle: '与展览互动',
    interactionIntro:
      '在浏览各类木雕之后，欢迎您填写回馈表单并参与小测验，让我们了解您的想法，也测试您对图案的认识。',
    feedbackTitle: '意见反馈表',
    feedbackDesc:
      '分享您的参观感受与建议。此按钮将连结到 Google 表单。',
    quizTitle: '木雕小测验',
    quizDesc:
      '测试您对四大木雕图案类别的了解。参与我们的互动测验来检验您的知识。',
    footerText:
      '本页面为 Rumah Penghulu Abu Seman 的数位补充说明，内容参考马来西亚文物局（Badan Warisan Malaysia）的相关资料。',
    footerTextLead: '以热爱守护文化遗产',
    footerSubtext: '传统马来建筑教育计划',
    langEnglish: '英语',
    langMalay: '马来语',
    langChinese: '中文',

    backToMain: '返回主页面',
    modelPlaceholderTitle: '3D 模型预留区',
    modelPlaceholderBody:
      '此处将嵌入该图案的3D模型。之后您可以用自己的3D浏览器或图片替换这一区块。',

    floraBreadcrumb: '植物图案',
    floraTitle: '植物木雕图案（Flora）',
    floraTagline: '环绕房子的花草树叶纹样。',
    floraIntro1:
      '植物图案取材自树木、叶片与花朵，象征美丽与对大自然的和谐态度。',
    floraIntro2:
      '这些花草纹样也反映了马来社会对真主创造万物的感恩与崇敬。',
    floraIntro3:
      '在 Rumah Penghulu Abu Seman 中，植物图案常被雕刻在窗框、门框与通风板上，让厚重的木结构多了一份柔和的装饰感。',

    faunaBreadcrumb: '动物图案',
    faunaTitle: '动物木雕图案（Fauna）',
    faunaTagline: '充满动感的鸟、鱼与昆虫。',
    faunaIntro1:
      '动物图案源自动物形象，如鸟类、鱼类与昆虫，象征自由以及生命不断流动的活力。',
    faunaIntro2:
      '在马来文化中，动物形象常被抽象化或简化处理，以配合宗教上的考量，同时保留其律动感与生命力。',
    faunaIntro3:
      '在 Rumah Penghulu Abu Seman 中，这类图案为建筑立面增添生气，使木质表面更具节奏感。',

    cosmosBreadcrumb: '宇宙图案',
    cosmosTitle: '宇宙木雕图案（Cosmos）',
    cosmosTagline: '屋顶之上的太阳、月亮与星星。',
    cosmosIntro1:
      '宇宙图案取材自天体，例如太阳、月亮与星星，象征人类与宇宙之间紧密的联系。',
    cosmosIntro2:
      '这些纹样体现了马来文化中的精神信仰，提醒人们思考造物主与整个宇宙的秩序与和谐。',
    cosmosIntro3:
      '透过3D模型与说明，访客可以更清楚地看到这些图案如何在光影中呈现立体层次。',

    geometricBreadcrumb: '几何图案',
    geometricTitle: '几何木雕图案（Geometric）',
    geometricTagline: '三角形、圆形与重复的节奏纹样。',
    geometricIntro1:
      '几何图案由三角形、圆形、方形等基本形状与对称纹样组成，象征平衡、统一与和谐。',
    geometricIntro2:
      '它们常被用来在大面积木墙上制造秩序感与节奏感，与植物和动物图案互相呼应。',
    geometricIntro3:
      '在 Rumah Penghulu Abu Seman 里，几何图案也常出现在通风板，既帮助空气流通，又维持室内隐私。',

    // Quiz page translations
    quizPageTitle: '木雕图案小测验',
    quizPageSubtitle: '测试您对四大类木雕图案的了解',
    questionLabel: '问题',
    q1Text: '在马来木雕中，植物图案（Flora）象征什么？',
    q1OptionA: '自由与生命的动态流动',
    q1OptionB: '美感与人与自然的和谐',
    q1OptionC: '人类与宇宙之间的联系',
    q1OptionD: '平衡、统一与和谐',
    q2Text: '哪一类图案包含鸟类、鱼类与昆虫等动物形象？',
    q2OptionA: '植物图案',
    q2OptionB: '动物图案',
    q2OptionC: '宇宙图案',
    q2OptionD: '几何图案',
    q3Text: '宇宙图案取材自天体元素。它们象征什么？',
    q3OptionA: '人类与宇宙之间的联系',
    q3OptionB: '美感与人与自然的和谐',
    q3OptionC: '自由与生命的动态流动',
    q3OptionD: '平衡、统一与和谐',
    q4Text: '几何图案由形状与对称纹样组成。以下哪一项通常不属于几何图案？',
    q4OptionA: '三角形、圆形与方形',
    q4OptionB: '对称纹样',
    q4OptionC: '植物与花朵',
    q4OptionD: '重复纹样',
    submitQuiz: '提交测验',
    quizResults: '测验结果',
    yourAnswers: '您的答案',
    retakeQuiz: '重新测验',
    correctAnswer: '正确',
    incorrectAnswer: '错误',
    correctAnswerLabel: '正确答案：',
    excellentScore: '优秀！您对木雕图案有很好的理解！',
    goodScore: '很好！您对木雕图案有不错的理解。',
    averageScore: '还可以！建议重新浏览图案页面以提高分数。',
    lowScore: '继续学习！探索图案页面以了解更多。',
    viewAnalytics: '📊 查看分析数据（Google 表格）',
    userIdLabel: '访客昵称（可选）',
    userIdPlaceholder: '请输入您的昵称',
    userIdHelp: '方便工作人员在 Google 表格核对测验结果。',
  },
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document
    .querySelectorAll('[data-i18n-placeholder]')
    .forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

  // Update active state on language buttons (if present on this page)
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Remember user preference per session
  if (window.sessionStorage) {
    sessionStorage.setItem('lang', lang);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // --- Language setup ---
  const storedLang =
    (window.sessionStorage && sessionStorage.getItem('lang')) || 'en';
  applyLanguage(storedLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // --- Quiz card click tracking ---
  const quizCard = document.querySelector("a.action-card.quiz");
  if (quizCard) {
    quizCard.addEventListener("click", async(e) => {
      e.preventDefault(); // Stop immediate navigation

      try {
        const res = await fetch("/save-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ clicked: true })
        });
        const data = await res.json();
        console.log("Click saved:", data);
      } catch (err) {
        console.error("Error saving click:", err);
      } finally {
        // Navigate to quiz page regardless of success/failure
        window.location.href = quizCard.href;
      }
    });
  }
});