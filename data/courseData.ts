export type QuestionType = "multiple_choice" | "arrange_words" | "fill_blank" | "match_pairs";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

export interface Vocabulary {
  id: string;
  indonesian: string;
  chinese: string;
  pronunciation: string;
  example?: string;
  exampleChinese?: string;
}

export interface Lesson {
  id: string;
  title: string;
  titleChinese: string;
  description: string;
  xpReward: number;
  vocabulary: Vocabulary[];
  questions: Question[];
}

export interface Unit {
  id: string;
  title: string;
  titleChinese: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  stage: "beginner" | "intermediate";
}

export const courseUnits: Unit[] = [
  // ============ 入门阶段 ============
  {
    id: "unit-1",
    title: "Alfabet & Angka",
    titleChinese: "字母与数字",
    description: "学习印尼语字母发音规则和基础数字",
    icon: "🔤",
    color: "#FF6B35",
    stage: "beginner",
    lessons: [
      {
        id: "lesson-1-1",
        title: "Alfabet Indonesia",
        titleChinese: "印尼语字母",
        description: "掌握印尼语26个字母的发音",
        xpReward: 10,
        vocabulary: [
          { id: "v1", indonesian: "A", chinese: "啊 (a)", pronunciation: "a", example: "Anak", exampleChinese: "孩子" },
          { id: "v2", indonesian: "B", chinese: "贝 (be)", pronunciation: "be", example: "Buku", exampleChinese: "书" },
          { id: "v3", indonesian: "C", chinese: "切 (ce)", pronunciation: "ce", example: "Cinta", exampleChinese: "爱" },
          { id: "v4", indonesian: "D", chinese: "得 (de)", pronunciation: "de", example: "Dua", exampleChinese: "二" },
          { id: "v5", indonesian: "E", chinese: "额 (e)", pronunciation: "e", example: "Enam", exampleChinese: "六" },
          { id: "v6", indonesian: "F", chinese: "艾夫 (ef)", pronunciation: "ef", example: "Foto", exampleChinese: "照片" },
          { id: "v7", indonesian: "G", chinese: "给 (ge)", pronunciation: "ge", example: "Gula", exampleChinese: "糖" },
          { id: "v8", indonesian: "H", chinese: "哈 (ha)", pronunciation: "ha", example: "Hari", exampleChinese: "天/日" },
        ],
        questions: [
          {
            id: "q1-1-1",
            type: "multiple_choice",
            question: "字母 'C' 在印尼语中发音为？",
            options: ["ka", "ce", "si", "se"],
            correctAnswer: "ce",
            explanation: "印尼语字母C发音为'ce'，类似中文'切'，例如：Cinta（爱）"
          },
          {
            id: "q1-1-2",
            type: "multiple_choice",
            question: "'Buku' 是什么意思？",
            options: ["书", "笔", "桌子", "椅子"],
            correctAnswer: "书",
            explanation: "Buku = 书，字母B发音为'be'"
          },
          {
            id: "q1-1-3",
            type: "multiple_choice",
            question: "以下哪个单词包含字母G？",
            options: ["Hari", "Foto", "Gula", "Enam"],
            correctAnswer: "Gula",
            explanation: "Gula（糖）以字母G开头，发音为'ge'"
          },
        ]
      },
      {
        id: "lesson-1-2",
        title: "Angka 1-10",
        titleChinese: "数字 1-10",
        description: "学习印尼语基础数字一到十",
        xpReward: 10,
        vocabulary: [
          { id: "v9", indonesian: "Satu", chinese: "一", pronunciation: "sa-tu", example: "Satu buku", exampleChinese: "一本书" },
          { id: "v10", indonesian: "Dua", chinese: "二", pronunciation: "du-a", example: "Dua orang", exampleChinese: "两个人" },
          { id: "v11", indonesian: "Tiga", chinese: "三", pronunciation: "ti-ga", example: "Tiga hari", exampleChinese: "三天" },
          { id: "v12", indonesian: "Empat", chinese: "四", pronunciation: "em-pat", example: "Empat bulan", exampleChinese: "四个月" },
          { id: "v13", indonesian: "Lima", chinese: "五", pronunciation: "li-ma", example: "Lima menit", exampleChinese: "五分钟" },
          { id: "v14", indonesian: "Enam", chinese: "六", pronunciation: "e-nam", example: "Enam tahun", exampleChinese: "六年" },
          { id: "v15", indonesian: "Tujuh", chinese: "七", pronunciation: "tu-juh", example: "Tujuh hari", exampleChinese: "七天" },
          { id: "v16", indonesian: "Delapan", chinese: "八", pronunciation: "de-la-pan", example: "Delapan jam", exampleChinese: "八小时" },
          { id: "v17", indonesian: "Sembilan", chinese: "九", pronunciation: "sem-bi-lan", example: "Sembilan bulan", exampleChinese: "九个月" },
          { id: "v18", indonesian: "Sepuluh", chinese: "十", pronunciation: "se-pu-luh", example: "Sepuluh orang", exampleChinese: "十个人" },
        ],
        questions: [
          {
            id: "q1-2-1",
            type: "multiple_choice",
            question: "'Lima' 是数字几？",
            options: ["三", "四", "五", "六"],
            correctAnswer: "五",
            explanation: "Lima = 五，发音为 li-ma"
          },
          {
            id: "q1-2-2",
            type: "multiple_choice",
            question: "数字'八'用印尼语怎么说？",
            options: ["Tujuh", "Delapan", "Sembilan", "Sepuluh"],
            correctAnswer: "Delapan",
            explanation: "八 = Delapan，发音为 de-la-pan"
          },
          {
            id: "q1-2-3",
            type: "arrange_words",
            question: "请排列出'三本书'的印尼语表达：",
            options: ["buku", "Tiga", "orang"],
            correctAnswer: ["Tiga", "buku"],
            explanation: "Tiga buku = 三本书（数词在名词前）"
          },
          {
            id: "q1-2-4",
            type: "multiple_choice",
            question: "'Dua orang' 是什么意思？",
            options: ["一个人", "两个人", "三个人", "两本书"],
            correctAnswer: "两个人",
            explanation: "Dua = 二，orang = 人，Dua orang = 两个人"
          },
        ]
      },
      {
        id: "lesson-1-3",
        title: "Angka 11-100",
        titleChinese: "数字 11-100",
        description: "学习印尼语十一到一百的数字规律",
        xpReward: 15,
        vocabulary: [
          { id: "v19", indonesian: "Sebelas", chinese: "十一", pronunciation: "se-be-las", example: "Sebelas orang", exampleChinese: "十一个人" },
          { id: "v20", indonesian: "Dua belas", chinese: "十二", pronunciation: "du-a be-las", example: "Dua belas bulan", exampleChinese: "十二个月" },
          { id: "v21", indonesian: "Dua puluh", chinese: "二十", pronunciation: "du-a pu-luh", example: "Dua puluh tahun", exampleChinese: "二十年" },
          { id: "v22", indonesian: "Tiga puluh", chinese: "三十", pronunciation: "ti-ga pu-luh", example: "Tiga puluh menit", exampleChinese: "三十分钟" },
          { id: "v23", indonesian: "Seratus", chinese: "一百", pronunciation: "se-ra-tus", example: "Seratus ribu", exampleChinese: "十万" },
        ],
        questions: [
          {
            id: "q1-3-1",
            type: "multiple_choice",
            question: "'Dua puluh' 是多少？",
            options: ["十二", "二十", "二十二", "二十一"],
            correctAnswer: "二十",
            explanation: "Dua = 二，puluh = 十，Dua puluh = 二十"
          },
          {
            id: "q1-3-2",
            type: "multiple_choice",
            question: "印尼语数字规律：belas 表示什么？",
            options: ["个位", "十位（11-19）", "百位", "千位"],
            correctAnswer: "十位（11-19）",
            explanation: "belas 用于11-19，如 sebelas(11), dua belas(12)..."
          },
        ]
      }
    ]
  },
  {
    id: "unit-2",
    title: "Perkenalan",
    titleChinese: "自我介绍",
    description: "学习问候语和基本自我介绍",
    icon: "👋",
    color: "#0EA5E9",
    stage: "beginner",
    lessons: [
      {
        id: "lesson-2-1",
        title: "Salam & Sapaan",
        titleChinese: "问候语",
        description: "学习印尼语日常问候表达",
        xpReward: 10,
        vocabulary: [
          { id: "v30", indonesian: "Selamat pagi", chinese: "早上好", pronunciation: "se-la-mat pa-gi", example: "Selamat pagi, Pak!", exampleChinese: "早上好，先生！" },
          { id: "v31", indonesian: "Selamat siang", chinese: "午安", pronunciation: "se-la-mat si-ang", example: "Selamat siang, Bu!", exampleChinese: "午安，女士！" },
          { id: "v32", indonesian: "Selamat sore", chinese: "下午好", pronunciation: "se-la-mat so-re", example: "Selamat sore semua!", exampleChinese: "大家下午好！" },
          { id: "v33", indonesian: "Selamat malam", chinese: "晚上好", pronunciation: "se-la-mat ma-lam", example: "Selamat malam!", exampleChinese: "晚上好！" },
          { id: "v34", indonesian: "Halo", chinese: "你好", pronunciation: "ha-lo", example: "Halo, apa kabar?", exampleChinese: "你好，最近怎么样？" },
          { id: "v35", indonesian: "Apa kabar?", chinese: "你好吗？", pronunciation: "a-pa ka-bar", example: "Apa kabar hari ini?", exampleChinese: "今天怎么样？" },
          { id: "v36", indonesian: "Baik", chinese: "好/很好", pronunciation: "ba-ik", example: "Saya baik, terima kasih.", exampleChinese: "我很好，谢谢。" },
          { id: "v37", indonesian: "Terima kasih", chinese: "谢谢", pronunciation: "te-ri-ma ka-sih", example: "Terima kasih banyak!", exampleChinese: "非常感谢！" },
          { id: "v38", indonesian: "Sama-sama", chinese: "不客气", pronunciation: "sa-ma sa-ma", example: "Sama-sama!", exampleChinese: "不客气！" },
          { id: "v39", indonesian: "Permisi", chinese: "打扰一下/借过", pronunciation: "per-mi-si", example: "Permisi, boleh saya lewat?", exampleChinese: "打扰一下，我可以过去吗？" },
          { id: "v40", indonesian: "Maaf", chinese: "对不起", pronunciation: "ma-af", example: "Maaf, saya terlambat.", exampleChinese: "对不起，我迟到了。" },
          { id: "v41", indonesian: "Sampai jumpa", chinese: "再见", pronunciation: "sam-pai jum-pa", example: "Sampai jumpa besok!", exampleChinese: "明天见！" },
        ],
        questions: [
          {
            id: "q2-1-1",
            type: "multiple_choice",
            question: "早上见到朋友应该说？",
            options: ["Selamat malam", "Selamat pagi", "Selamat sore", "Selamat siang"],
            correctAnswer: "Selamat pagi",
            explanation: "Selamat pagi = 早上好，pagi = 早上"
          },
          {
            id: "q2-1-2",
            type: "multiple_choice",
            question: "'Terima kasih' 是什么意思？",
            options: ["对不起", "再见", "谢谢", "你好"],
            correctAnswer: "谢谢",
            explanation: "Terima kasih = 谢谢，回应可以说 Sama-sama（不客气）"
          },
          {
            id: "q2-1-3",
            type: "multiple_choice",
            question: "有人说 'Terima kasih'，你应该回答？",
            options: ["Maaf", "Permisi", "Sama-sama", "Apa kabar"],
            correctAnswer: "Sama-sama",
            explanation: "Sama-sama = 不客气，是对谢谢的标准回应"
          },
          {
            id: "q2-1-4",
            type: "multiple_choice",
            question: "'Sampai jumpa' 是什么意思？",
            options: ["你好", "谢谢", "对不起", "再见"],
            correctAnswer: "再见",
            explanation: "Sampai jumpa = 再见，字面意思是'直到再次相见'"
          },
        ]
      },
      {
        id: "lesson-2-2",
        title: "Memperkenalkan Diri",
        titleChinese: "自我介绍",
        description: "学习如何用印尼语介绍自己",
        xpReward: 15,
        vocabulary: [
          { id: "v50", indonesian: "Nama saya", chinese: "我的名字是", pronunciation: "na-ma sa-ya", example: "Nama saya Budi.", exampleChinese: "我的名字是布迪。" },
          { id: "v51", indonesian: "Saya", chinese: "我（正式）", pronunciation: "sa-ya", example: "Saya dari Indonesia.", exampleChinese: "我来自印度尼西亚。" },
          { id: "v52", indonesian: "Aku", chinese: "我（非正式）", pronunciation: "a-ku", example: "Aku suka makan.", exampleChinese: "我喜欢吃东西。" },
          { id: "v53", indonesian: "Kamu", chinese: "你（非正式）", pronunciation: "ka-mu", example: "Kamu dari mana?", exampleChinese: "你从哪里来？" },
          { id: "v54", indonesian: "Anda", chinese: "您（正式）", pronunciation: "an-da", example: "Anda tinggal di mana?", exampleChinese: "您住在哪里？" },
          { id: "v55", indonesian: "Dia", chinese: "他/她", pronunciation: "di-a", example: "Dia guru saya.", exampleChinese: "他/她是我的老师。" },
          { id: "v56", indonesian: "Dari", chinese: "来自/从", pronunciation: "da-ri", example: "Saya dari China.", exampleChinese: "我来自中国。" },
          { id: "v57", indonesian: "Tinggal di", chinese: "住在", pronunciation: "ting-gal di", example: "Saya tinggal di Jakarta.", exampleChinese: "我住在雅加达。" },
          { id: "v58", indonesian: "Umur saya", chinese: "我的年龄", pronunciation: "u-mur sa-ya", example: "Umur saya dua puluh tahun.", exampleChinese: "我二十岁。" },
          { id: "v59", indonesian: "Pekerjaan", chinese: "职业/工作", pronunciation: "pe-ker-ja-an", example: "Pekerjaan saya guru.", exampleChinese: "我的职业是老师。" },
        ],
        questions: [
          {
            id: "q2-2-1",
            type: "multiple_choice",
            question: "如何用印尼语说'我的名字是李明'？",
            options: ["Nama kamu Li Ming.", "Nama saya Li Ming.", "Saya dari Li Ming.", "Li Ming adalah saya."],
            correctAnswer: "Nama saya Li Ming.",
            explanation: "Nama saya + 名字 = 我的名字是...，这是最标准的自我介绍方式"
          },
          {
            id: "q2-2-2",
            type: "multiple_choice",
            question: "'Saya' 和 'Aku' 都是'我'，区别是？",
            options: ["没有区别", "Saya正式，Aku非正式", "Aku正式，Saya非正式", "Saya用于男性，Aku用于女性"],
            correctAnswer: "Saya正式，Aku非正式",
            explanation: "Saya用于正式场合，Aku用于朋友间的非正式交流"
          },
          {
            id: "q2-2-3",
            type: "multiple_choice",
            question: "'Saya dari China' 是什么意思？",
            options: ["我住在中国", "我来自中国", "我喜欢中国", "我去中国"],
            correctAnswer: "我来自中国",
            explanation: "dari = 来自/从，Saya dari China = 我来自中国"
          },
        ]
      },
      {
        id: "lesson-2-3",
        title: "Kata Ganti Orang",
        titleChinese: "人称代词",
        description: "掌握印尼语所有人称代词",
        xpReward: 15,
        vocabulary: [
          { id: "v60", indonesian: "Saya / Aku", chinese: "我", pronunciation: "sa-ya / a-ku", example: "Saya makan nasi.", exampleChinese: "我吃米饭。" },
          { id: "v61", indonesian: "Kamu / Anda", chinese: "你/您", pronunciation: "ka-mu / an-da", example: "Kamu mau ke mana?", exampleChinese: "你要去哪里？" },
          { id: "v62", indonesian: "Dia / Ia", chinese: "他/她", pronunciation: "di-a / i-a", example: "Dia cantik.", exampleChinese: "她很漂亮。" },
          { id: "v63", indonesian: "Kami", chinese: "我们（不含听者）", pronunciation: "ka-mi", example: "Kami pergi ke sekolah.", exampleChinese: "我们去学校。（不包括你）" },
          { id: "v64", indonesian: "Kita", chinese: "我们（含听者）", pronunciation: "ki-ta", example: "Kita makan bersama.", exampleChinese: "我们一起吃饭。（包括你）" },
          { id: "v65", indonesian: "Kalian", chinese: "你们", pronunciation: "ka-li-an", example: "Kalian dari mana?", exampleChinese: "你们从哪里来？" },
          { id: "v66", indonesian: "Mereka", chinese: "他们/她们", pronunciation: "me-re-ka", example: "Mereka teman saya.", exampleChinese: "他们是我的朋友。" },
        ],
        questions: [
          {
            id: "q2-3-1",
            type: "multiple_choice",
            question: "'Kami' 和 'Kita' 都是'我们'，区别是？",
            options: [
              "没有区别",
              "Kami不含听者，Kita含听者",
              "Kita不含听者，Kami含听者",
              "Kami是正式，Kita是非正式"
            ],
            correctAnswer: "Kami不含听者，Kita含听者",
            explanation: "Kami = 我们（不包括你），Kita = 我们（包括你），这是印尼语的独特区分"
          },
          {
            id: "q2-3-2",
            type: "multiple_choice",
            question: "印尼语中'他'和'她'如何区分？",
            options: ["Dia是他，Ia是她", "Ia是他，Dia是她", "没有区分，都用Dia", "用Laki-laki和Perempuan"],
            correctAnswer: "没有区分，都用Dia",
            explanation: "印尼语没有性别区分，Dia/Ia 既可以指'他'也可以指'她'"
          },
        ]
      }
    ]
  },
  {
    id: "unit-3",
    title: "Kehidupan Sehari-hari",
    titleChinese: "日常生活",
    description: "学习家庭、食物、颜色等日常词汇",
    icon: "🏠",
    color: "#22C55E",
    stage: "beginner",
    lessons: [
      {
        id: "lesson-3-1",
        title: "Keluarga",
        titleChinese: "家庭成员",
        description: "学习家庭成员的称呼",
        xpReward: 10,
        vocabulary: [
          { id: "v70", indonesian: "Ayah / Bapak", chinese: "父亲/爸爸", pronunciation: "a-yah / ba-pak", example: "Ayah saya dokter.", exampleChinese: "我的父亲是医生。" },
          { id: "v71", indonesian: "Ibu", chinese: "母亲/妈妈", pronunciation: "i-bu", example: "Ibu memasak di dapur.", exampleChinese: "妈妈在厨房做饭。" },
          { id: "v72", indonesian: "Kakak", chinese: "哥哥/姐姐", pronunciation: "ka-kak", example: "Kakak saya perempuan.", exampleChinese: "我的姐姐是女生。" },
          { id: "v73", indonesian: "Adik", chinese: "弟弟/妹妹", pronunciation: "a-dik", example: "Adik saya masih kecil.", exampleChinese: "我的弟弟/妹妹还小。" },
          { id: "v74", indonesian: "Kakek", chinese: "爷爷/外公", pronunciation: "ka-kek", example: "Kakek saya sudah tua.", exampleChinese: "我的爷爷已经老了。" },
          { id: "v75", indonesian: "Nenek", chinese: "奶奶/外婆", pronunciation: "ne-nek", example: "Nenek pandai memasak.", exampleChinese: "奶奶很会做饭。" },
          { id: "v76", indonesian: "Suami", chinese: "丈夫", pronunciation: "su-a-mi", example: "Suami saya bekerja di kantor.", exampleChinese: "我丈夫在办公室工作。" },
          { id: "v77", indonesian: "Istri", chinese: "妻子", pronunciation: "is-tri", example: "Istri saya guru.", exampleChinese: "我妻子是老师。" },
          { id: "v78", indonesian: "Anak", chinese: "孩子", pronunciation: "a-nak", example: "Saya punya dua anak.", exampleChinese: "我有两个孩子。" },
        ],
        questions: [
          {
            id: "q3-1-1",
            type: "multiple_choice",
            question: "'Kakak' 是什么意思？",
            options: ["弟弟/妹妹", "哥哥/姐姐", "父亲", "母亲"],
            correctAnswer: "哥哥/姐姐",
            explanation: "Kakak = 哥哥或姐姐（年长的兄弟姐妹），Adik = 弟弟或妹妹（年幼的）"
          },
          {
            id: "q3-1-2",
            type: "multiple_choice",
            question: "印尼语中'哥哥'和'姐姐'用同一个词，这个词是？",
            options: ["Adik", "Kakak", "Anak", "Ibu"],
            correctAnswer: "Kakak",
            explanation: "印尼语不区分兄弟姐妹的性别，Kakak = 哥哥/姐姐，Adik = 弟弟/妹妹"
          },
        ]
      },
      {
        id: "lesson-3-2",
        title: "Makanan & Minuman",
        titleChinese: "食物与饮料",
        description: "学习常见食物和饮料词汇",
        xpReward: 10,
        vocabulary: [
          { id: "v80", indonesian: "Nasi", chinese: "米饭", pronunciation: "na-si", example: "Saya makan nasi.", exampleChinese: "我吃米饭。" },
          { id: "v81", indonesian: "Mie", chinese: "面条", pronunciation: "mi-e", example: "Mie goreng enak sekali.", exampleChinese: "炒面非常好吃。" },
          { id: "v82", indonesian: "Ayam", chinese: "鸡肉/鸡", pronunciation: "a-yam", example: "Ayam goreng.", exampleChinese: "炸鸡。" },
          { id: "v83", indonesian: "Ikan", chinese: "鱼", pronunciation: "i-kan", example: "Ikan bakar.", exampleChinese: "烤鱼。" },
          { id: "v84", indonesian: "Sayur", chinese: "蔬菜", pronunciation: "sa-yur", example: "Makan sayur itu sehat.", exampleChinese: "吃蔬菜很健康。" },
          { id: "v85", indonesian: "Buah", chinese: "水果", pronunciation: "bu-ah", example: "Buah mangga manis.", exampleChinese: "芒果很甜。" },
          { id: "v86", indonesian: "Air", chinese: "水", pronunciation: "a-ir", example: "Minum air putih.", exampleChinese: "喝白开水。" },
          { id: "v87", indonesian: "Kopi", chinese: "咖啡", pronunciation: "ko-pi", example: "Kopi Indonesia terkenal.", exampleChinese: "印尼咖啡很有名。" },
          { id: "v88", indonesian: "Teh", chinese: "茶", pronunciation: "teh", example: "Teh manis.", exampleChinese: "甜茶。" },
          { id: "v89", indonesian: "Enak", chinese: "好吃/美味", pronunciation: "e-nak", example: "Makanan ini enak!", exampleChinese: "这食物很好吃！" },
        ],
        questions: [
          {
            id: "q3-2-1",
            type: "multiple_choice",
            question: "'Nasi goreng' 是什么食物？",
            options: ["炒面", "炒饭", "炸鸡", "烤鱼"],
            correctAnswer: "炒饭",
            explanation: "Nasi = 米饭，goreng = 炒/炸，Nasi goreng = 炒饭，是印尼最著名的食物之一"
          },
          {
            id: "q3-2-2",
            type: "multiple_choice",
            question: "如何用印尼语说'我喝咖啡'？",
            options: ["Saya makan kopi.", "Saya minum kopi.", "Saya suka kopi.", "Saya beli kopi."],
            correctAnswer: "Saya minum kopi.",
            explanation: "minum = 喝，makan = 吃，Saya minum kopi = 我喝咖啡"
          },
        ]
      },
      {
        id: "lesson-3-3",
        title: "Warna",
        titleChinese: "颜色",
        description: "学习印尼语颜色词汇",
        xpReward: 10,
        vocabulary: [
          { id: "v90", indonesian: "Merah", chinese: "红色", pronunciation: "me-rah", example: "Bendera Indonesia merah putih.", exampleChinese: "印尼国旗是红白色。" },
          { id: "v91", indonesian: "Putih", chinese: "白色", pronunciation: "pu-tih", example: "Baju putih.", exampleChinese: "白色衬衫。" },
          { id: "v92", indonesian: "Hitam", chinese: "黑色", pronunciation: "hi-tam", example: "Kucing hitam.", exampleChinese: "黑猫。" },
          { id: "v93", indonesian: "Biru", chinese: "蓝色", pronunciation: "bi-ru", example: "Langit biru.", exampleChinese: "蓝天。" },
          { id: "v94", indonesian: "Hijau", chinese: "绿色", pronunciation: "hi-jau", example: "Pohon hijau.", exampleChinese: "绿树。" },
          { id: "v95", indonesian: "Kuning", chinese: "黄色", pronunciation: "ku-ning", example: "Pisang kuning.", exampleChinese: "黄香蕉。" },
          { id: "v96", indonesian: "Oranye", chinese: "橙色", pronunciation: "o-ran-ye", example: "Jeruk oranye.", exampleChinese: "橙色的橘子。" },
          { id: "v97", indonesian: "Ungu", chinese: "紫色", pronunciation: "un-gu", example: "Bunga ungu.", exampleChinese: "紫色的花。" },
        ],
        questions: [
          {
            id: "q3-3-1",
            type: "multiple_choice",
            question: "印尼国旗的颜色是？",
            options: ["Merah dan biru", "Merah dan putih", "Putih dan hitam", "Biru dan putih"],
            correctAnswer: "Merah dan putih",
            explanation: "印尼国旗是红白两色，Merah = 红色，Putih = 白色，dan = 和"
          },
          {
            id: "q3-3-2",
            type: "multiple_choice",
            question: "'Langit biru' 是什么意思？",
            options: ["蓝色的海", "蓝色的天空", "蓝色的花", "蓝色的衣服"],
            correctAnswer: "蓝色的天空",
            explanation: "Langit = 天空，biru = 蓝色，形容词在名词后面"
          },
        ]
      }
    ]
  },
  {
    id: "unit-4",
    title: "Kalimat Dasar",
    titleChinese: "基础句型",
    description: "掌握印尼语基本句型结构",
    icon: "💬",
    color: "#A855F7",
    stage: "beginner",
    lessons: [
      {
        id: "lesson-4-1",
        title: "Kalimat Positif",
        titleChinese: "肯定句",
        description: "学习印尼语基本肯定句结构",
        xpReward: 15,
        vocabulary: [
          { id: "v100", indonesian: "Makan", chinese: "吃", pronunciation: "ma-kan", example: "Saya makan nasi.", exampleChinese: "我吃米饭。" },
          { id: "v101", indonesian: "Minum", chinese: "喝", pronunciation: "mi-num", example: "Dia minum air.", exampleChinese: "他喝水。" },
          { id: "v102", indonesian: "Pergi", chinese: "去", pronunciation: "per-gi", example: "Kami pergi ke pasar.", exampleChinese: "我们去市场。" },
          { id: "v103", indonesian: "Datang", chinese: "来", pronunciation: "da-tang", example: "Mereka datang terlambat.", exampleChinese: "他们来晚了。" },
          { id: "v104", indonesian: "Tidur", chinese: "睡觉", pronunciation: "ti-dur", example: "Anak itu tidur.", exampleChinese: "那个孩子睡觉了。" },
          { id: "v105", indonesian: "Kerja", chinese: "工作", pronunciation: "ker-ja", example: "Ayah kerja di kantor.", exampleChinese: "爸爸在办公室工作。" },
          { id: "v106", indonesian: "Belajar", chinese: "学习", pronunciation: "be-la-jar", example: "Saya belajar bahasa Indonesia.", exampleChinese: "我学习印尼语。" },
          { id: "v107", indonesian: "Suka", chinese: "喜欢", pronunciation: "su-ka", example: "Saya suka makan.", exampleChinese: "我喜欢吃东西。" },
        ],
        questions: [
          {
            id: "q4-1-1",
            type: "multiple_choice",
            question: "印尼语基本句型结构是？",
            options: ["动词+主语+宾语", "主语+动词+宾语", "宾语+主语+动词", "主语+宾语+动词"],
            correctAnswer: "主语+动词+宾语",
            explanation: "印尼语基本句型与英语相同：主语+动词+宾语（SVO），如 Saya makan nasi（我吃米饭）"
          },
          {
            id: "q4-1-2",
            type: "multiple_choice",
            question: "如何说'我学习印尼语'？",
            options: [
              "Bahasa Indonesia belajar saya.",
              "Saya belajar bahasa Indonesia.",
              "Belajar saya bahasa Indonesia.",
              "Saya bahasa Indonesia belajar."
            ],
            correctAnswer: "Saya belajar bahasa Indonesia.",
            explanation: "Saya（我）+ belajar（学习）+ bahasa Indonesia（印尼语）= 我学习印尼语"
          },
          {
            id: "q4-1-3",
            type: "arrange_words",
            question: "排列出'他们来晚了'：",
            options: ["Mereka", "datang", "terlambat"],
            correctAnswer: ["Mereka", "datang", "terlambat"],
            explanation: "Mereka datang terlambat = 他们来晚了"
          },
        ]
      },
      {
        id: "lesson-4-2",
        title: "Kalimat Negatif",
        titleChinese: "否定句",
        description: "学习 tidak 和 bukan 的区别与用法",
        xpReward: 15,
        vocabulary: [
          { id: "v110", indonesian: "Tidak", chinese: "不（动词/形容词否定）", pronunciation: "ti-dak", example: "Saya tidak makan.", exampleChinese: "我不吃。" },
          { id: "v111", indonesian: "Bukan", chinese: "不是（名词否定）", pronunciation: "bu-kan", example: "Ini bukan buku saya.", exampleChinese: "这不是我的书。" },
          { id: "v112", indonesian: "Belum", chinese: "还没有", pronunciation: "be-lum", example: "Saya belum makan.", exampleChinese: "我还没吃。" },
          { id: "v113", indonesian: "Jangan", chinese: "不要（命令否定）", pronunciation: "ja-ngan", example: "Jangan pergi!", exampleChinese: "不要走！" },
        ],
        questions: [
          {
            id: "q4-2-1",
            type: "multiple_choice",
            question: "'Tidak' 和 'Bukan' 的区别是？",
            options: [
              "没有区别",
              "Tidak否定动词/形容词，Bukan否定名词",
              "Bukan否定动词/形容词，Tidak否定名词",
              "Tidak是口语，Bukan是书面语"
            ],
            correctAnswer: "Tidak否定动词/形容词，Bukan否定名词",
            explanation: "Tidak用于否定动词和形容词（如：tidak makan, tidak baik），Bukan用于否定名词（如：bukan guru）"
          },
          {
            id: "q4-2-2",
            type: "multiple_choice",
            question: "'Dia bukan guru' 是什么意思？",
            options: ["他不是老师", "他不去学校", "他不喜欢老师", "他没有老师"],
            correctAnswer: "他不是老师",
            explanation: "bukan + 名词 = 不是...，Dia bukan guru = 他不是老师"
          },
          {
            id: "q4-2-3",
            type: "multiple_choice",
            question: "如何说'我还没吃'？",
            options: ["Saya tidak makan.", "Saya bukan makan.", "Saya belum makan.", "Saya jangan makan."],
            correctAnswer: "Saya belum makan.",
            explanation: "belum = 还没有，表示某事尚未发生但将来可能会发生"
          },
        ]
      },
      {
        id: "lesson-4-3",
        title: "Kalimat Tanya",
        titleChinese: "疑问句",
        description: "学习印尼语常用疑问词",
        xpReward: 15,
        vocabulary: [
          { id: "v120", indonesian: "Apa", chinese: "什么", pronunciation: "a-pa", example: "Apa ini?", exampleChinese: "这是什么？" },
          { id: "v121", indonesian: "Siapa", chinese: "谁", pronunciation: "si-a-pa", example: "Siapa nama kamu?", exampleChinese: "你叫什么名字？" },
          { id: "v122", indonesian: "Di mana", chinese: "在哪里", pronunciation: "di ma-na", example: "Di mana toilet?", exampleChinese: "厕所在哪里？" },
          { id: "v123", indonesian: "Ke mana", chinese: "去哪里", pronunciation: "ke ma-na", example: "Kamu mau ke mana?", exampleChinese: "你要去哪里？" },
          { id: "v124", indonesian: "Dari mana", chinese: "从哪里来", pronunciation: "da-ri ma-na", example: "Kamu dari mana?", exampleChinese: "你从哪里来？" },
          { id: "v125", indonesian: "Kapan", chinese: "什么时候", pronunciation: "ka-pan", example: "Kapan kamu datang?", exampleChinese: "你什么时候来？" },
          { id: "v126", indonesian: "Mengapa / Kenapa", chinese: "为什么", pronunciation: "me-nga-pa / ke-na-pa", example: "Kenapa kamu sedih?", exampleChinese: "你为什么难过？" },
          { id: "v127", indonesian: "Bagaimana", chinese: "怎么样/如何", pronunciation: "ba-gai-ma-na", example: "Bagaimana kabar kamu?", exampleChinese: "你怎么样？" },
          { id: "v128", indonesian: "Berapa", chinese: "多少", pronunciation: "be-ra-pa", example: "Berapa harganya?", exampleChinese: "多少钱？" },
        ],
        questions: [
          {
            id: "q4-3-1",
            type: "multiple_choice",
            question: "问'厕所在哪里'应该用哪个疑问词？",
            options: ["Apa", "Siapa", "Di mana", "Kapan"],
            correctAnswer: "Di mana",
            explanation: "Di mana = 在哪里，询问地点。Di mana toilet? = 厕所在哪里？"
          },
          {
            id: "q4-3-2",
            type: "multiple_choice",
            question: "'Berapa harganya?' 是什么意思？",
            options: ["这是什么？", "多少钱？", "在哪里？", "什么时候？"],
            correctAnswer: "多少钱？",
            explanation: "Berapa = 多少，harga = 价格，-nya = 它的，Berapa harganya? = 它多少钱？"
          },
          {
            id: "q4-3-3",
            type: "multiple_choice",
            question: "'Di mana' 和 'Ke mana' 的区别是？",
            options: [
              "没有区别",
              "Di mana问静态位置，Ke mana问移动方向",
              "Ke mana问静态位置，Di mana问移动方向",
              "Di mana是正式，Ke mana是非正式"
            ],
            correctAnswer: "Di mana问静态位置，Ke mana问移动方向",
            explanation: "Di mana = 在哪里（静态），Ke mana = 去哪里（动态移动）"
          },
        ]
      }
    ]
  },
  {
    id: "unit-5",
    title: "Perjalanan & Belanja",
    titleChinese: "出行与购物",
    description: "学习旅行和购物相关词汇",
    icon: "🛍️",
    color: "#F59E0B",
    stage: "beginner",
    lessons: [
      {
        id: "lesson-5-1",
        title: "Arah & Tempat",
        titleChinese: "方向与地点",
        description: "学习方向词和常见地点",
        xpReward: 15,
        vocabulary: [
          { id: "v130", indonesian: "Kiri", chinese: "左", pronunciation: "ki-ri", example: "Belok kiri.", exampleChinese: "向左转。" },
          { id: "v131", indonesian: "Kanan", chinese: "右", pronunciation: "ka-nan", example: "Belok kanan.", exampleChinese: "向右转。" },
          { id: "v132", indonesian: "Lurus", chinese: "直走", pronunciation: "lu-rus", example: "Jalan terus lurus.", exampleChinese: "一直往前走。" },
          { id: "v133", indonesian: "Dekat", chinese: "近/附近", pronunciation: "de-kat", example: "Hotel itu dekat sini.", exampleChinese: "那家酒店在附近。" },
          { id: "v134", indonesian: "Jauh", chinese: "远", pronunciation: "ja-uh", example: "Masih jauh.", exampleChinese: "还很远。" },
          { id: "v135", indonesian: "Pasar", chinese: "市场", pronunciation: "pa-sar", example: "Pergi ke pasar.", exampleChinese: "去市场。" },
          { id: "v136", indonesian: "Toko", chinese: "商店", pronunciation: "to-ko", example: "Toko tutup.", exampleChinese: "商店关门了。" },
          { id: "v137", indonesian: "Restoran", chinese: "餐厅", pronunciation: "res-to-ran", example: "Makan di restoran.", exampleChinese: "在餐厅吃饭。" },
          { id: "v138", indonesian: "Hotel", chinese: "酒店", pronunciation: "ho-tel", example: "Menginap di hotel.", exampleChinese: "住在酒店。" },
          { id: "v139", indonesian: "Bandara", chinese: "机场", pronunciation: "ban-da-ra", example: "Pergi ke bandara.", exampleChinese: "去机场。" },
        ],
        questions: [
          {
            id: "q5-1-1",
            type: "multiple_choice",
            question: "'Belok kanan' 是什么意思？",
            options: ["向左转", "向右转", "直走", "停下"],
            correctAnswer: "向右转",
            explanation: "Belok = 转，kanan = 右，Belok kanan = 向右转"
          },
          {
            id: "q5-1-2",
            type: "multiple_choice",
            question: "如何问'机场在哪里'？",
            options: [
              "Ke mana bandara?",
              "Di mana bandara?",
              "Apa bandara?",
              "Kapan bandara?"
            ],
            correctAnswer: "Di mana bandara?",
            explanation: "Di mana = 在哪里，bandara = 机场，Di mana bandara? = 机场在哪里？"
          },
        ]
      },
      {
        id: "lesson-5-2",
        title: "Belanja",
        titleChinese: "购物",
        description: "学习购物场景常用表达",
        xpReward: 20,
        vocabulary: [
          { id: "v140", indonesian: "Berapa harganya?", chinese: "多少钱？", pronunciation: "be-ra-pa har-ga-nya", example: "Berapa harganya ini?", exampleChinese: "这个多少钱？" },
          { id: "v141", indonesian: "Mahal", chinese: "贵", pronunciation: "ma-hal", example: "Ini terlalu mahal.", exampleChinese: "这太贵了。" },
          { id: "v142", indonesian: "Murah", chinese: "便宜", pronunciation: "mu-rah", example: "Harganya murah.", exampleChinese: "价格很便宜。" },
          { id: "v143", indonesian: "Diskon", chinese: "折扣", pronunciation: "dis-kon", example: "Ada diskon?", exampleChinese: "有折扣吗？" },
          { id: "v144", indonesian: "Mau beli", chinese: "想买", pronunciation: "mau be-li", example: "Saya mau beli ini.", exampleChinese: "我想买这个。" },
          { id: "v145", indonesian: "Boleh", chinese: "可以/允许", pronunciation: "bo-leh", example: "Boleh saya coba?", exampleChinese: "我可以试试吗？" },
          { id: "v146", indonesian: "Bayar", chinese: "付款", pronunciation: "ba-yar", example: "Bayar di kasir.", exampleChinese: "在收银台付款。" },
          { id: "v147", indonesian: "Kembalian", chinese: "找零", pronunciation: "kem-ba-li-an", example: "Kembaliannya berapa?", exampleChinese: "找零多少？" },
        ],
        questions: [
          {
            id: "q5-2-1",
            type: "multiple_choice",
            question: "如何说'这太贵了'？",
            options: [
              "Ini terlalu murah.",
              "Ini terlalu mahal.",
              "Ini tidak bagus.",
              "Ini tidak ada."
            ],
            correctAnswer: "Ini terlalu mahal.",
            explanation: "terlalu = 太，mahal = 贵，Ini terlalu mahal = 这太贵了"
          },
          {
            id: "q5-2-2",
            type: "multiple_choice",
            question: "'Ada diskon?' 是什么意思？",
            options: ["有折扣吗？", "多少钱？", "可以便宜吗？", "在哪里付款？"],
            correctAnswer: "有折扣吗？",
            explanation: "Ada = 有，diskon = 折扣（来自英语 discount），Ada diskon? = 有折扣吗？"
          },
        ]
      }
    ]
  },
  // ============ 进阶阶段 ============
  {
    id: "unit-6",
    title: "Awalan (Prefiks)",
    titleChinese: "前缀系统",
    description: "掌握印尼语核心前缀的用法",
    icon: "🔧",
    color: "#EF4444",
    stage: "intermediate",
    lessons: [
      {
        id: "lesson-6-1",
        title: "Awalan me-",
        titleChinese: "前缀 me-",
        description: "学习最重要的主动动词前缀 me-",
        xpReward: 20,
        vocabulary: [
          { id: "v150", indonesian: "Membaca", chinese: "阅读", pronunciation: "mem-ba-ca", example: "Saya membaca buku.", exampleChinese: "我阅读书。" },
          { id: "v151", indonesian: "Menulis", chinese: "写作", pronunciation: "me-nu-lis", example: "Dia menulis surat.", exampleChinese: "他写信。" },
          { id: "v152", indonesian: "Mendengar", chinese: "听", pronunciation: "men-de-ngar", example: "Saya mendengar musik.", exampleChinese: "我听音乐。" },
          { id: "v153", indonesian: "Melihat", chinese: "看", pronunciation: "me-li-hat", example: "Kami melihat film.", exampleChinese: "我们看电影。" },
          { id: "v154", indonesian: "Memasak", chinese: "做饭", pronunciation: "me-ma-sak", example: "Ibu memasak nasi.", exampleChinese: "妈妈做饭。" },
          { id: "v155", indonesian: "Mengajar", chinese: "教", pronunciation: "me-nga-jar", example: "Guru mengajar murid.", exampleChinese: "老师教学生。" },
          { id: "v156", indonesian: "Membeli", chinese: "买", pronunciation: "mem-be-li", example: "Saya membeli baju.", exampleChinese: "我买衣服。" },
          { id: "v157", indonesian: "Menjual", chinese: "卖", pronunciation: "men-ju-al", example: "Dia menjual buah.", exampleChinese: "他卖水果。" },
        ],
        questions: [
          {
            id: "q6-1-1",
            type: "multiple_choice",
            question: "前缀 me- 的主要功能是？",
            options: ["构成被动动词", "构成主动动词", "构成名词", "构成形容词"],
            correctAnswer: "构成主动动词",
            explanation: "me- 前缀用于构成主动动词，表示主语主动执行的动作，如 membaca（阅读）、menulis（写）"
          },
          {
            id: "q6-1-2",
            type: "multiple_choice",
            question: "'Membaca' 的词根是？",
            options: ["Mem", "Baca", "Aca", "Membac"],
            correctAnswer: "Baca",
            explanation: "Membaca = me- + baca（读），词根是 baca，加上 me- 前缀变成主动动词"
          },
          {
            id: "q6-1-3",
            type: "multiple_choice",
            question: "如何说'老师教学生'？",
            options: [
              "Guru belajar murid.",
              "Guru mengajar murid.",
              "Murid mengajar guru.",
              "Guru ajar murid."
            ],
            correctAnswer: "Guru mengajar murid.",
            explanation: "mengajar = me- + ajar（教），Guru mengajar murid = 老师教学生"
          },
        ]
      },
      {
        id: "lesson-6-2",
        title: "Awalan ber-",
        titleChinese: "前缀 ber-",
        description: "学习表示状态和活动的前缀 ber-",
        xpReward: 20,
        vocabulary: [
          { id: "v160", indonesian: "Berbicara", chinese: "说话", pronunciation: "ber-bi-ca-ra", example: "Mereka berbicara bahasa Inggris.", exampleChinese: "他们说英语。" },
          { id: "v161", indonesian: "Berjalan", chinese: "走路", pronunciation: "ber-ja-lan", example: "Saya berjalan ke kantor.", exampleChinese: "我走路去办公室。" },
          { id: "v162", indonesian: "Bekerja", chinese: "工作", pronunciation: "be-ker-ja", example: "Ayah bekerja setiap hari.", exampleChinese: "爸爸每天工作。" },
          { id: "v163", indonesian: "Belajar", chinese: "学习", pronunciation: "be-la-jar", example: "Kita belajar bersama.", exampleChinese: "我们一起学习。" },
          { id: "v164", indonesian: "Bermain", chinese: "玩耍", pronunciation: "ber-ma-in", example: "Anak-anak bermain di taman.", exampleChinese: "孩子们在公园玩耍。" },
          { id: "v165", indonesian: "Bertemu", chinese: "见面", pronunciation: "ber-te-mu", example: "Kita bertemu besok.", exampleChinese: "我们明天见面。" },
        ],
        questions: [
          {
            id: "q6-2-1",
            type: "multiple_choice",
            question: "前缀 ber- 的主要功能是？",
            options: [
              "构成主动及物动词",
              "构成表示状态、活动或拥有的动词",
              "构成被动动词",
              "构成名词"
            ],
            correctAnswer: "构成表示状态、活动或拥有的动词",
            explanation: "ber- 前缀用于构成不及物动词，表示处于某种状态、进行某种活动，如 bekerja（工作）、bermain（玩耍）"
          },
          {
            id: "q6-2-2",
            type: "multiple_choice",
            question: "'Mereka berbicara bahasa Inggris' 是什么意思？",
            options: [
              "他们学英语",
              "他们说英语",
              "他们喜欢英语",
              "他们教英语"
            ],
            correctAnswer: "他们说英语",
            explanation: "berbicara = ber- + bicara（说话），Mereka berbicara bahasa Inggris = 他们说英语"
          },
        ]
      }
    ]
  },
  {
    id: "unit-7",
    title: "Akhiran (Sufiks)",
    titleChinese: "后缀系统",
    description: "掌握印尼语核心后缀的用法",
    icon: "⚙️",
    color: "#8B5CF6",
    stage: "intermediate",
    lessons: [
      {
        id: "lesson-7-1",
        title: "Akhiran -kan",
        titleChinese: "后缀 -kan",
        description: "学习使动用法后缀 -kan",
        xpReward: 20,
        vocabulary: [
          { id: "v170", indonesian: "Memberikan", chinese: "给予/交给", pronunciation: "mem-be-ri-kan", example: "Dia memberikan hadiah.", exampleChinese: "他给了礼物。" },
          { id: "v171", indonesian: "Mengatakan", chinese: "说/告诉", pronunciation: "me-nga-ta-kan", example: "Dia mengatakan kebenaran.", exampleChinese: "他说了实话。" },
          { id: "v172", indonesian: "Membuatkan", chinese: "为...做", pronunciation: "mem-bu-at-kan", example: "Ibu membuatkan kue.", exampleChinese: "妈妈为（我们）做蛋糕。" },
          { id: "v173", indonesian: "Menyanyikan", chinese: "唱（歌）", pronunciation: "me-nya-nyi-kan", example: "Dia menyanyikan lagu.", exampleChinese: "他唱歌。" },
        ],
        questions: [
          {
            id: "q7-1-1",
            type: "multiple_choice",
            question: "后缀 -kan 的主要功能是？",
            options: [
              "将动词变为名词",
              "表示使动或为他人做某事",
              "表示被动",
              "表示正在进行"
            ],
            correctAnswer: "表示使动或为他人做某事",
            explanation: "-kan 后缀表示为他人做某事或使某人/某物处于某种状态，如 memberikan（给予）、membuatkan（为...做）"
          },
        ]
      },
      {
        id: "lesson-7-2",
        title: "Akhiran -an",
        titleChinese: "后缀 -an",
        description: "学习名词化后缀 -an",
        xpReward: 20,
        vocabulary: [
          { id: "v180", indonesian: "Makanan", chinese: "食物", pronunciation: "ma-ka-nan", example: "Makanan Indonesia enak.", exampleChinese: "印尼食物很好吃。" },
          { id: "v181", indonesian: "Minuman", chinese: "饮料", pronunciation: "mi-nu-man", example: "Minuman apa yang kamu suka?", exampleChinese: "你喜欢什么饮料？" },
          { id: "v182", indonesian: "Pelajaran", chinese: "课程/功课", pronunciation: "pe-la-ja-ran", example: "Pelajaran bahasa Indonesia.", exampleChinese: "印尼语课程。" },
          { id: "v183", indonesian: "Tulisan", chinese: "文字/书写", pronunciation: "tu-li-san", example: "Tulisannya bagus.", exampleChinese: "他的字写得很好。" },
          { id: "v184", indonesian: "Bacaan", chinese: "读物/阅读材料", pronunciation: "ba-ca-an", example: "Bacaan yang menarik.", exampleChinese: "有趣的读物。" },
        ],
        questions: [
          {
            id: "q7-2-1",
            type: "multiple_choice",
            question: "'Makanan' 的词根是什么？",
            options: ["Maka", "Makan", "Makana", "Kan"],
            correctAnswer: "Makan",
            explanation: "Makanan = makan（吃）+ -an，-an 后缀将动词名词化，makan（吃）→ makanan（食物）"
          },
          {
            id: "q7-2-2",
            type: "multiple_choice",
            question: "后缀 -an 的主要功能是？",
            options: [
              "构成主动动词",
              "将动词或形容词名词化",
              "表示使动",
              "构成被动动词"
            ],
            correctAnswer: "将动词或形容词名词化",
            explanation: "-an 后缀将动词或形容词变为名词，如 makan（吃）→ makanan（食物），minum（喝）→ minuman（饮料）"
          },
        ]
      }
    ]
  },
  {
    id: "unit-8",
    title: "Kalimat Kompleks",
    titleChinese: "复杂句型",
    description: "学习表达复杂逻辑关系的句型",
    icon: "🧩",
    color: "#0EA5E9",
    stage: "intermediate",
    lessons: [
      {
        id: "lesson-8-1",
        title: "Kalimat Syarat",
        titleChinese: "条件句",
        description: "学习 jika/kalau 引导的条件句",
        xpReward: 25,
        vocabulary: [
          { id: "v190", indonesian: "Jika / Kalau", chinese: "如果", pronunciation: "ji-ka / ka-lau", example: "Jika hujan, saya tidak pergi.", exampleChinese: "如果下雨，我就不去了。" },
          { id: "v191", indonesian: "Maka", chinese: "那么/则", pronunciation: "ma-ka", example: "Kalau kamu mau, maka ayo.", exampleChinese: "如果你想要，那就走吧。" },
          { id: "v192", indonesian: "Asalkan", chinese: "只要", pronunciation: "a-sal-kan", example: "Asalkan kamu rajin, pasti bisa.", exampleChinese: "只要你勤奋，一定能做到。" },
        ],
        questions: [
          {
            id: "q8-1-1",
            type: "multiple_choice",
            question: "'Jika' 和 'Kalau' 的区别是？",
            options: [
              "Jika是正式书面语，Kalau是口语",
              "Kalau是正式书面语，Jika是口语",
              "Jika用于过去，Kalau用于未来",
              "没有区别"
            ],
            correctAnswer: "Jika是正式书面语，Kalau是口语",
            explanation: "两者都表示'如果'，但 Jika 更正式，常用于书面语；Kalau 更口语化，日常对话中更常用"
          },
          {
            id: "q8-1-2",
            type: "multiple_choice",
            question: "'Jika hujan, saya tidak pergi.' 是什么意思？",
            options: [
              "我不喜欢下雨。",
              "如果下雨，我就不去了。",
              "下雨了，所以我没去。",
              "我去了，虽然下雨了。"
            ],
            correctAnswer: "如果下雨，我就不去了。",
            explanation: "Jika = 如果，hujan = 下雨，tidak pergi = 不去，整句 = 如果下雨，我就不去了"
          },
        ]
      },
      {
        id: "lesson-8-2",
        title: "Sebab-Akibat",
        titleChinese: "因果关系",
        description: "学习表达原因和结果的句型",
        xpReward: 25,
        vocabulary: [
          { id: "v200", indonesian: "Karena", chinese: "因为", pronunciation: "ka-re-na", example: "Saya terlambat karena macet.", exampleChinese: "我迟到了因为堵车。" },
          { id: "v201", indonesian: "Sehingga", chinese: "所以/因此", pronunciation: "se-hing-ga", example: "Dia sakit sehingga tidak masuk.", exampleChinese: "他生病了所以没来。" },
          { id: "v202", indonesian: "Oleh karena itu", chinese: "因此/所以", pronunciation: "o-leh ka-re-na i-tu", example: "Oleh karena itu, saya minta maaf.", exampleChinese: "因此，我请求原谅。" },
          { id: "v203", indonesian: "Akibatnya", chinese: "结果/因此", pronunciation: "a-ki-bat-nya", example: "Akibatnya, dia gagal ujian.", exampleChinese: "结果，他考试不及格。" },
        ],
        questions: [
          {
            id: "q8-2-1",
            type: "multiple_choice",
            question: "'Saya terlambat karena macet.' 是什么意思？",
            options: [
              "我迟到了因为堵车。",
              "堵车所以我迟到了。",
              "我迟到了，但是没有堵车。",
              "虽然堵车，我还是准时了。"
            ],
            correctAnswer: "我迟到了因为堵车。",
            explanation: "karena = 因为，terlambat = 迟到，macet = 堵车，整句 = 我迟到了因为堵车"
          },
        ]
      }
    ]
  },
  {
    id: "unit-9",
    title: "Bahasa Formal & Informal",
    titleChinese: "正式与口语",
    description: "区分书面语与日常口语的差异",
    icon: "🎭",
    color: "#10B981",
    stage: "intermediate",
    lessons: [
      {
        id: "lesson-9-1",
        title: "Perbedaan Formal & Informal",
        titleChinese: "正式与非正式对比",
        description: "学习常见正式与口语词汇的对应关系",
        xpReward: 25,
        vocabulary: [
          { id: "v210", indonesian: "Saya → Gue/Aku", chinese: "我（正式→口语）", pronunciation: "sa-ya / gue / a-ku", example: "Gue mau pergi. (口语)", exampleChinese: "我要走了。（口语）" },
          { id: "v211", indonesian: "Kamu → Lo/Elu", chinese: "你（正式→口语）", pronunciation: "ka-mu / lo / e-lu", example: "Lo mau ke mana? (口语)", exampleChinese: "你要去哪里？（口语）" },
          { id: "v212", indonesian: "Tidak → Nggak/Enggak", chinese: "不（正式→口语）", pronunciation: "ti-dak / ng-gak", example: "Gue nggak mau. (口语)", exampleChinese: "我不想要。（口语）" },
          { id: "v213", indonesian: "Jika → Kalo", chinese: "如果（正式→口语）", pronunciation: "ji-ka / ka-lo", example: "Kalo mau, bilang aja. (口语)", exampleChinese: "如果想要，说一声就好。（口语）" },
          { id: "v214", indonesian: "Sudah → Udah", chinese: "已经（正式→口语）", pronunciation: "su-dah / u-dah", example: "Udah makan belum? (口语)", exampleChinese: "吃了吗？（口语）" },
          { id: "v215", indonesian: "Dengan → Sama", chinese: "和/与（正式→口语）", pronunciation: "de-ngan / sa-ma", example: "Pergi sama siapa? (口语)", exampleChinese: "和谁去？（口语）" },
        ],
        questions: [
          {
            id: "q9-1-1",
            type: "multiple_choice",
            question: "在正式场合（如工作面试），应该使用哪个词表示'我'？",
            options: ["Gue", "Lo", "Saya", "Aku"],
            correctAnswer: "Saya",
            explanation: "Saya 是正式的第一人称代词，适合正式场合。Gue/Aku 是非正式口语，适合朋友间使用"
          },
          {
            id: "q9-1-2",
            type: "multiple_choice",
            question: "'Gue nggak mau' 的正式说法是？",
            options: [
              "Aku tidak mau.",
              "Saya tidak mau.",
              "Saya bukan mau.",
              "Aku bukan mau."
            ],
            correctAnswer: "Saya tidak mau.",
            explanation: "Gue → Saya（正式），nggak → tidak（正式），Gue nggak mau = Saya tidak mau = 我不想要"
          },
        ]
      }
    ]
  },
  {
    id: "unit-10",
    title: "Budaya & Topik Lanjutan",
    titleChinese: "文化与进阶",
    description: "深入了解印尼文化，提升综合理解力",
    icon: "🏝️",
    color: "#F97316",
    stage: "intermediate",
    lessons: [
      {
        id: "lesson-10-1",
        title: "Budaya Indonesia",
        titleChinese: "印尼文化",
        description: "了解印尼的传统文化与习俗",
        xpReward: 30,
        vocabulary: [
          { id: "v220", indonesian: "Batik", chinese: "蜡染布（印尼传统布料）", pronunciation: "ba-tik", example: "Batik adalah warisan budaya Indonesia.", exampleChinese: "蜡染布是印尼的文化遗产。" },
          { id: "v221", indonesian: "Wayang", chinese: "皮影戏", pronunciation: "wa-yang", example: "Pertunjukan wayang sangat menarik.", exampleChinese: "皮影戏表演非常有趣。" },
          { id: "v222", indonesian: "Gamelan", chinese: "甘美兰音乐", pronunciation: "ga-me-lan", example: "Gamelan adalah musik tradisional Jawa.", exampleChinese: "甘美兰是爪哇传统音乐。" },
          { id: "v223", indonesian: "Lebaran / Idul Fitri", chinese: "开斋节", pronunciation: "le-ba-ran / i-dul fit-ri", example: "Selamat Lebaran!", exampleChinese: "开斋节快乐！" },
          { id: "v224", indonesian: "Gotong royong", chinese: "互助合作精神", pronunciation: "go-tong ro-yong", example: "Gotong royong adalah nilai budaya Indonesia.", exampleChinese: "互助合作是印尼的文化价值观。" },
          { id: "v225", indonesian: "Bhinneka Tunggal Ika", chinese: "多元一体（印尼国家格言）", pronunciation: "bhin-ne-ka tung-gal i-ka", example: "Bhinneka Tunggal Ika artinya berbeda-beda tetapi tetap satu.", exampleChinese: "多元一体意思是虽然不同但仍是一体。" },
        ],
        questions: [
          {
            id: "q10-1-1",
            type: "multiple_choice",
            question: "印尼国家格言 'Bhinneka Tunggal Ika' 的意思是？",
            options: [
              "团结就是力量",
              "多元一体",
              "独立自由",
              "和平繁荣"
            ],
            correctAnswer: "多元一体",
            explanation: "Bhinneka Tunggal Ika 来自古爪哇语，意为'虽然不同但仍是一体'，体现印尼多民族统一的精神"
          },
          {
            id: "q10-1-2",
            type: "multiple_choice",
            question: "'Batik' 是什么？",
            options: [
              "印尼传统舞蹈",
              "印尼传统蜡染布料",
              "印尼传统乐器",
              "印尼传统食物"
            ],
            correctAnswer: "印尼传统蜡染布料",
            explanation: "Batik 是印尼传统蜡染布料，已被列入联合国教科文组织非物质文化遗产名录"
          },
        ]
      }
    ]
  }
];

export const getUnitById = (id: string): Unit | undefined => {
  return courseUnits.find(unit => unit.id === id);
};

export const getLessonById = (unitId: string, lessonId: string): Lesson | undefined => {
  const unit = getUnitById(unitId);
  return unit?.lessons.find(lesson => lesson.id === lessonId);
};

export const getBeginnerUnits = (): Unit[] => {
  return courseUnits.filter(unit => unit.stage === "beginner");
};

export const getIntermediateUnits = (): Unit[] => {
  return courseUnits.filter(unit => unit.stage === "intermediate");
};
