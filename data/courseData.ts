export type QuestionType = "multiple_choice" | "fill_blank" | "arrange_words";

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
          { id: "q1-1-1", type: "multiple_choice", question: "字母 'C' 在印尼语中发音为？", options: ["ka", "ce", "si", "se"], correctAnswer: "ce", explanation: "印尼语字母C发音为'ce'，类似中文'切'，例如：Cinta（爱）" },
          { id: "q1-1-2", type: "multiple_choice", question: "'Buku' 是什么意思？", options: ["书", "笔", "桌子", "椅子"], correctAnswer: "书", explanation: "Buku = 书，字母B发音为'be'" },
          { id: "q1-1-3", type: "multiple_choice", question: "以下哪个单词包含字母G？", options: ["Hari", "Foto", "Gula", "Enam"], correctAnswer: "Gula", explanation: "Gula（糖）以字母G开头，发音为'ge'" },
        ]
      },
      {
        id: "lesson-1-2",
        title: "Alfabet I-Z",
        titleChinese: "字母 I-Z",
        description: "掌握印尼语后半部分字母发音",
        xpReward: 10,
        vocabulary: [
          { id: "v1b1", indonesian: "I", chinese: "伊 (i)", pronunciation: "i", example: "Ibu", exampleChinese: "母亲" },
          { id: "v1b2", indonesian: "J", chinese: "叶 (je)", pronunciation: "je", example: "Jalan", exampleChinese: "路/走" },
          { id: "v1b3", indonesian: "K", chinese: "卡 (ka)", pronunciation: "ka", example: "Kopi", exampleChinese: "咖啡" },
          { id: "v1b4", indonesian: "L", chinese: "艾勒 (el)", pronunciation: "el", example: "Laut", exampleChinese: "海" },
          { id: "v1b5", indonesian: "M", chinese: "艾姆 (em)", pronunciation: "em", example: "Makan", exampleChinese: "吃" },
          { id: "v1b6", indonesian: "N", chinese: "艾恩 (en)", pronunciation: "en", example: "Nama", exampleChinese: "名字" },
          { id: "v1b7", indonesian: "O", chinese: "哦 (o)", pronunciation: "o", example: "Orang", exampleChinese: "人" },
          { id: "v1b8", indonesian: "P", chinese: "配 (pe)", pronunciation: "pe", example: "Pintu", exampleChinese: "门" },
        ],
        questions: [
          { id: "q1-b-1", type: "multiple_choice", question: "'Ibu' 是什么意思？", options: ["父亲", "母亲", "孩子", "老师"], correctAnswer: "母亲", explanation: "Ibu = 母亲/妈妈，字母I发音为'i'" },
          { id: "q1-b-2", type: "multiple_choice", question: "字母 'K' 在印尼语中发音为？", options: ["ke", "ka", "ki", "ku"], correctAnswer: "ka", explanation: "印尼语字母K发音为'ka'" },
          { id: "q1-b-3", type: "arrange_words", question: "请排列出'我的名字'的印尼语：", options: ["saya", "Nama", "kamu"], correctAnswer: ["Nama", "saya"], explanation: "Nama saya = 我的名字（nama=名字，saya=我的）" },
        ]
      },
      {
        id: "lesson-1-3",
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
          { id: "q1-2-1", type: "multiple_choice", question: "'Lima' 是数字几？", options: ["三", "四", "五", "六"], correctAnswer: "五", explanation: "Lima = 五，发音为 li-ma" },
          { id: "q1-2-2", type: "multiple_choice", question: "数字'八'用印尼语怎么说？", options: ["Tujuh", "Delapan", "Sembilan", "Sepuluh"], correctAnswer: "Delapan", explanation: "八 = Delapan，发音为 de-la-pan" },
          { id: "q1-2-3", type: "arrange_words", question: "请排列出'三本书'的印尼语表达：", options: ["buku", "Tiga", "orang"], correctAnswer: ["Tiga", "buku"], explanation: "Tiga buku = 三本书（数词在名词前）" },
          { id: "q1-2-4", type: "multiple_choice", question: "'Dua orang' 是什么意思？", options: ["一个人", "两个人", "三个人", "两本书"], correctAnswer: "两个人", explanation: "Dua = 二，orang = 人，Dua orang = 两个人" },
        ]
      },
      {
        id: "lesson-1-4",
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
          { id: "v23b", indonesian: "Lima puluh", chinese: "五十", pronunciation: "li-ma pu-luh", example: "Lima puluh persen", exampleChinese: "百分之五十" },
        ],
        questions: [
          { id: "q1-3-1", type: "multiple_choice", question: "'Dua puluh' 是多少？", options: ["十二", "二十", "二十二", "二十一"], correctAnswer: "二十", explanation: "Dua = 二，puluh = 十，Dua puluh = 二十" },
          { id: "q1-3-2", type: "multiple_choice", question: "印尼语数字规律：belas 表示什么？", options: ["个位", "十位（11-19）", "百位", "千位"], correctAnswer: "十位（11-19）", explanation: "belas 用于11-19，如 sebelas(11), dua belas(12)..." },
          { id: "q1-3-3", type: "multiple_choice", question: "三十五用印尼语怎么说？", options: ["Tiga lima", "Tiga puluh lima", "Lima puluh tiga", "Tiga belas lima"], correctAnswer: "Tiga puluh lima", explanation: "Tiga puluh = 三十，lima = 五，合起来 Tiga puluh lima = 三十五" },
        ]
      },
      {
        id: "lesson-1-5",
        title: "Waktu & Tanggal",
        titleChinese: "时间与日期",
        description: "学习如何用印尼语表达时间和日期",
        xpReward: 15,
        vocabulary: [
          { id: "v1c1", indonesian: "Jam berapa?", chinese: "几点了？", pronunciation: "jam be-ra-pa", example: "Jam berapa sekarang?", exampleChinese: "现在几点了？" },
          { id: "v1c2", indonesian: "Jam satu", chinese: "一点钟", pronunciation: "jam sa-tu", example: "Sekarang jam satu.", exampleChinese: "现在一点钟。" },
          { id: "v1c3", indonesian: "Hari ini", chinese: "今天", pronunciation: "ha-ri i-ni", example: "Hari ini Senin.", exampleChinese: "今天是星期一。" },
          { id: "v1c4", indonesian: "Besok", chinese: "明天", pronunciation: "be-sok", example: "Besok kita bertemu.", exampleChinese: "明天我们见面。" },
          { id: "v1c5", indonesian: "Kemarin", chinese: "昨天", pronunciation: "ke-ma-rin", example: "Kemarin saya sakit.", exampleChinese: "昨天我生病了。" },
          { id: "v1c6", indonesian: "Minggu", chinese: "星期/周", pronunciation: "ming-gu", example: "Minggu depan.", exampleChinese: "下周。" },
          { id: "v1c7", indonesian: "Bulan", chinese: "月份/月亮", pronunciation: "bu-lan", example: "Bulan ini Maret.", exampleChinese: "这个月是三月。" },
          { id: "v1c8", indonesian: "Tahun", chinese: "年", pronunciation: "ta-hun", example: "Tahun ini 2025.", exampleChinese: "今年是2025年。" },
        ],
        questions: [
          { id: "q1-c-1", type: "multiple_choice", question: "如何问'现在几点了'？", options: ["Hari apa sekarang?", "Jam berapa sekarang?", "Tanggal berapa?", "Kapan sekarang?"], correctAnswer: "Jam berapa sekarang?", explanation: "Jam berapa = 几点，sekarang = 现在，Jam berapa sekarang? = 现在几点了？" },
          { id: "q1-c-2", type: "multiple_choice", question: "'Besok' 是什么意思？", options: ["昨天", "今天", "明天", "后天"], correctAnswer: "明天", explanation: "Besok = 明天，Kemarin = 昨天，Hari ini = 今天" },
          { id: "q1-c-3", type: "arrange_words", question: "请排列出'今天是星期一'：", options: ["Senin", "Hari ini", "adalah"], correctAnswer: ["Hari ini", "Senin"], explanation: "Hari ini Senin = 今天是星期一（印尼语可省略'是'）" },
        ]
      },
      {
        id: "lesson-1-6",
        title: "Dialog: Hari Pertama",
        titleChinese: "情景对话：第一天",
        description: "综合运用数字和时间，练习真实对话",
        xpReward: 20,
        vocabulary: [
          { id: "v1d1", indonesian: "Sekarang", chinese: "现在", pronunciation: "se-ka-rang", example: "Sekarang jam tiga.", exampleChinese: "现在三点。" },
          { id: "v1d2", indonesian: "Nanti", chinese: "待会儿/等一下", pronunciation: "nan-ti", example: "Nanti kita makan.", exampleChinese: "待会儿我们吃饭。" },
          { id: "v1d3", indonesian: "Sudah", chinese: "已经", pronunciation: "su-dah", example: "Sudah makan?", exampleChinese: "吃了吗？" },
          { id: "v1d4", indonesian: "Belum", chinese: "还没", pronunciation: "be-lum", example: "Belum, saya lapar.", exampleChinese: "还没，我饿了。" },
          { id: "v1d5", indonesian: "Lapar", chinese: "饿", pronunciation: "la-par", example: "Saya lapar sekali.", exampleChinese: "我非常饿。" },
          { id: "v1d6", indonesian: "Haus", chinese: "渴", pronunciation: "ha-us", example: "Saya haus.", exampleChinese: "我渴了。" },
        ],
        questions: [
          { id: "q1-d-1", type: "multiple_choice", question: "A: 'Sudah makan?' B: '_____, saya lapar.'", options: ["Sudah", "Belum", "Tidak", "Bukan"], correctAnswer: "Belum", explanation: "Belum = 还没有，回答'还没吃，我饿了'" },
          { id: "q1-d-2", type: "multiple_choice", question: "'Saya lapar sekali' 是什么意思？", options: ["我有点饿", "我不饿", "我非常饿", "我已经吃了"], correctAnswer: "我非常饿", explanation: "lapar = 饿，sekali = 非常/很，Saya lapar sekali = 我非常饿" },
          { id: "q1-d-3", type: "arrange_words", question: "请排列出'现在几点了'：", options: ["sekarang", "Jam", "berapa"], correctAnswer: ["Jam", "berapa", "sekarang"], explanation: "Jam berapa sekarang? = 现在几点了？" },
        ]
      },
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
          { id: "q2-1-1", type: "multiple_choice", question: "早上见到朋友应该说？", options: ["Selamat malam", "Selamat pagi", "Selamat sore", "Selamat siang"], correctAnswer: "Selamat pagi", explanation: "Selamat pagi = 早上好，pagi = 早上" },
          { id: "q2-1-2", type: "multiple_choice", question: "'Terima kasih' 是什么意思？", options: ["对不起", "再见", "谢谢", "你好"], correctAnswer: "谢谢", explanation: "Terima kasih = 谢谢，回应可以说 Sama-sama（不客气）" },
          { id: "q2-1-3", type: "multiple_choice", question: "有人说 'Terima kasih'，你应该回答？", options: ["Maaf", "Permisi", "Sama-sama", "Apa kabar"], correctAnswer: "Sama-sama", explanation: "Sama-sama = 不客气，是对谢谢的标准回应" },
          { id: "q2-1-4", type: "multiple_choice", question: "'Sampai jumpa' 是什么意思？", options: ["你好", "谢谢", "对不起", "再见"], correctAnswer: "再见", explanation: "Sampai jumpa = 再见，字面意思是'直到再次相见'" },
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
          { id: "q2-2-1", type: "multiple_choice", question: "如何用印尼语说'我的名字是李明'？", options: ["Nama kamu Li Ming.", "Nama saya Li Ming.", "Saya dari Li Ming.", "Li Ming adalah saya."], correctAnswer: "Nama saya Li Ming.", explanation: "Nama saya + 名字 = 我的名字是...，这是最标准的自我介绍方式" },
          { id: "q2-2-2", type: "multiple_choice", question: "'Saya' 和 'Aku' 都是'我'，区别是？", options: ["没有区别", "Saya正式，Aku非正式", "Aku正式，Saya非正式", "Saya用于男性，Aku用于女性"], correctAnswer: "Saya正式，Aku非正式", explanation: "Saya用于正式场合，Aku用于朋友间的非正式交流" },
          { id: "q2-2-3", type: "multiple_choice", question: "'Saya dari China' 是什么意思？", options: ["我住在中国", "我来自中国", "我喜欢中国", "我去中国"], correctAnswer: "我来自中国", explanation: "dari = 来自/从，Saya dari China = 我来自中国" },
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
          { id: "q2-3-1", type: "multiple_choice", question: "'Kami' 和 'Kita' 都是'我们'，区别是？", options: ["没有区别", "Kami不含听者，Kita含听者", "Kita不含听者，Kami含听者", "Kami是正式，Kita是非正式"], correctAnswer: "Kami不含听者，Kita含听者", explanation: "Kami = 我们（不包括你），Kita = 我们（包括你），这是印尼语的独特区分" },
          { id: "q2-3-2", type: "multiple_choice", question: "印尼语中'他'和'她'如何区分？", options: ["Dia是他，Ia是她", "Ia是他，Dia是她", "没有区分，都用Dia", "用Laki-laki和Perempuan"], correctAnswer: "没有区分，都用Dia", explanation: "印尼语没有性别区分，Dia/Ia 既可以指'他'也可以指'她'" },
        ]
      },
      {
        id: "lesson-2-4",
        title: "Profesi & Hobi",
        titleChinese: "职业与爱好",
        description: "学习职业和爱好词汇，丰富自我介绍",
        xpReward: 15,
        vocabulary: [
          { id: "v2d1", indonesian: "Guru", chinese: "老师", pronunciation: "gu-ru", example: "Saya seorang guru.", exampleChinese: "我是一名老师。" },
          { id: "v2d2", indonesian: "Dokter", chinese: "医生", pronunciation: "dok-ter", example: "Dia seorang dokter.", exampleChinese: "他是一名医生。" },
          { id: "v2d3", indonesian: "Mahasiswa", chinese: "大学生", pronunciation: "ma-ha-sis-wa", example: "Saya mahasiswa.", exampleChinese: "我是大学生。" },
          { id: "v2d4", indonesian: "Pengusaha", chinese: "商人/企业家", pronunciation: "pe-ngu-sa-ha", example: "Ayah saya pengusaha.", exampleChinese: "我父亲是商人。" },
          { id: "v2d5", indonesian: "Suka", chinese: "喜欢", pronunciation: "su-ka", example: "Saya suka membaca.", exampleChinese: "我喜欢阅读。" },
          { id: "v2d6", indonesian: "Hobi saya", chinese: "我的爱好", pronunciation: "ho-bi sa-ya", example: "Hobi saya memasak.", exampleChinese: "我的爱好是做饭。" },
          { id: "v2d7", indonesian: "Olahraga", chinese: "运动", pronunciation: "o-lah-ra-ga", example: "Saya suka olahraga.", exampleChinese: "我喜欢运动。" },
          { id: "v2d8", indonesian: "Musik", chinese: "音乐", pronunciation: "mu-sik", example: "Hobi saya mendengarkan musik.", exampleChinese: "我的爱好是听音乐。" },
        ],
        questions: [
          { id: "q2-d-1", type: "multiple_choice", question: "如何说'我是一名医生'？", options: ["Saya guru.", "Saya dokter.", "Saya mahasiswa.", "Saya pengusaha."], correctAnswer: "Saya dokter.", explanation: "dokter = 医生，Saya dokter = 我是医生（印尼语可省略'是'）" },
          { id: "q2-d-2", type: "multiple_choice", question: "'Hobi saya membaca' 是什么意思？", options: ["我喜欢运动", "我的爱好是阅读", "我是老师", "我喜欢音乐"], correctAnswer: "我的爱好是阅读", explanation: "Hobi saya = 我的爱好，membaca = 阅读" },
          { id: "q2-d-3", type: "arrange_words", question: "请排列出'我的爱好是运动'：", options: ["olahraga", "Hobi saya", "adalah"], correctAnswer: ["Hobi saya", "olahraga"], explanation: "Hobi saya olahraga = 我的爱好是运动" },
        ]
      },
      {
        id: "lesson-2-5",
        title: "Dialog: Berkenalan",
        titleChinese: "情景对话：初次见面",
        description: "练习完整的初次见面对话",
        xpReward: 20,
        vocabulary: [
          { id: "v2e1", indonesian: "Senang berkenalan", chinese: "很高兴认识你", pronunciation: "se-nang ber-ke-na-lan", example: "Senang berkenalan dengan Anda.", exampleChinese: "很高兴认识您。" },
          { id: "v2e2", indonesian: "Begitu juga", chinese: "我也是", pronunciation: "be-gi-tu ju-ga", example: "Begitu juga dengan saya.", exampleChinese: "我也是（很高兴认识你）。" },
          { id: "v2e3", indonesian: "Boleh tahu", chinese: "可以请问", pronunciation: "bo-leh ta-hu", example: "Boleh tahu nama Anda?", exampleChinese: "可以请问您的名字吗？" },
          { id: "v2e4", indonesian: "Sudah lama", chinese: "很久了", pronunciation: "su-dah la-ma", example: "Sudah lama tinggal di sini?", exampleChinese: "在这里住很久了吗？" },
          { id: "v2e5", indonesian: "Baru", chinese: "刚/新", pronunciation: "ba-ru", example: "Saya baru tiba.", exampleChinese: "我刚到。" },
          { id: "v2e6", indonesian: "Selamat datang", chinese: "欢迎", pronunciation: "se-la-mat da-tang", example: "Selamat datang di Indonesia!", exampleChinese: "欢迎来到印度尼西亚！" },
        ],
        questions: [
          { id: "q2-e-1", type: "multiple_choice", question: "初次见面后，如何说'很高兴认识你'？", options: ["Selamat pagi.", "Terima kasih.", "Senang berkenalan dengan Anda.", "Sampai jumpa."], correctAnswer: "Senang berkenalan dengan Anda.", explanation: "Senang berkenalan dengan Anda = 很高兴认识您，是正式场合的礼貌用语" },
          { id: "q2-e-2", type: "multiple_choice", question: "对方说'Senang berkenalan'，你应该回答？", options: ["Maaf.", "Begitu juga.", "Tidak apa-apa.", "Permisi."], correctAnswer: "Begitu juga.", explanation: "Begitu juga = 我也是，表示'我也很高兴认识你'" },
          { id: "q2-e-3", type: "arrange_words", question: "请排列出'欢迎来到印尼'：", options: ["di Indonesia", "Selamat datang", "pergi"], correctAnswer: ["Selamat datang", "di Indonesia"], explanation: "Selamat datang di Indonesia = 欢迎来到印度尼西亚" },
        ]
      },
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
          { id: "q3-1-1", type: "multiple_choice", question: "'Kakak' 是什么意思？", options: ["弟弟/妹妹", "哥哥/姐姐", "父亲", "母亲"], correctAnswer: "哥哥/姐姐", explanation: "Kakak = 哥哥或姐姐（年长的兄弟姐妹），Adik = 弟弟或妹妹（年幼的）" },
          { id: "q3-1-2", type: "multiple_choice", question: "印尼语中'哥哥'和'姐姐'用同一个词，这个词是？", options: ["Adik", "Kakak", "Anak", "Ibu"], correctAnswer: "Kakak", explanation: "印尼语不区分兄弟姐妹的性别，Kakak = 哥哥/姐姐，Adik = 弟弟/妹妹" },
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
          { id: "q3-2-1", type: "multiple_choice", question: "'Nasi goreng' 是什么食物？", options: ["炒面", "炒饭", "炸鸡", "烤鱼"], correctAnswer: "炒饭", explanation: "Nasi = 米饭，goreng = 炒/炸，Nasi goreng = 炒饭，是印尼最著名的食物之一" },
          { id: "q3-2-2", type: "multiple_choice", question: "如何用印尼语说'我喝咖啡'？", options: ["Saya makan kopi.", "Saya minum kopi.", "Saya suka kopi.", "Saya beli kopi."], correctAnswer: "Saya minum kopi.", explanation: "minum = 喝，makan = 吃，Saya minum kopi = 我喝咖啡" },
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
          { id: "q3-3-1", type: "multiple_choice", question: "印尼国旗的颜色是？", options: ["Merah dan biru", "Merah dan putih", "Putih dan hitam", "Biru dan putih"], correctAnswer: "Merah dan putih", explanation: "印尼国旗是红白两色，Merah = 红色，Putih = 白色，dan = 和" },
          { id: "q3-3-2", type: "multiple_choice", question: "'Langit biru' 是什么意思？", options: ["蓝色的海", "蓝色的天空", "蓝色的花", "蓝色的衣服"], correctAnswer: "蓝色的天空", explanation: "Langit = 天空，biru = 蓝色，形容词在名词后面" },
        ]
      },
      {
        id: "lesson-3-4",
        title: "Rumah & Benda",
        titleChinese: "家居与物品",
        description: "学习家居环境和日常物品词汇",
        xpReward: 15,
        vocabulary: [
          { id: "v3d1", indonesian: "Rumah", chinese: "房子/家", pronunciation: "ru-mah", example: "Rumah saya besar.", exampleChinese: "我的房子很大。" },
          { id: "v3d2", indonesian: "Kamar", chinese: "房间", pronunciation: "ka-mar", example: "Kamar tidur.", exampleChinese: "卧室。" },
          { id: "v3d3", indonesian: "Dapur", chinese: "厨房", pronunciation: "da-pur", example: "Ibu di dapur.", exampleChinese: "妈妈在厨房。" },
          { id: "v3d4", indonesian: "Meja", chinese: "桌子", pronunciation: "me-ja", example: "Buku di atas meja.", exampleChinese: "书在桌子上。" },
          { id: "v3d5", indonesian: "Kursi", chinese: "椅子", pronunciation: "kur-si", example: "Duduk di kursi.", exampleChinese: "坐在椅子上。" },
          { id: "v3d6", indonesian: "Pintu", chinese: "门", pronunciation: "pin-tu", example: "Tutup pintu.", exampleChinese: "关门。" },
          { id: "v3d7", indonesian: "Jendela", chinese: "窗户", pronunciation: "jen-de-la", example: "Buka jendela.", exampleChinese: "开窗户。" },
          { id: "v3d8", indonesian: "Kamar mandi", chinese: "浴室/卫生间", pronunciation: "ka-mar man-di", example: "Kamar mandi di sana.", exampleChinese: "卫生间在那边。" },
        ],
        questions: [
          { id: "q3-d-1", type: "multiple_choice", question: "'Kamar mandi' 是什么意思？", options: ["卧室", "厨房", "客厅", "浴室/卫生间"], correctAnswer: "浴室/卫生间", explanation: "Kamar = 房间，mandi = 洗澡，Kamar mandi = 浴室/卫生间" },
          { id: "q3-d-2", type: "multiple_choice", question: "'Buku di atas meja' 是什么意思？", options: ["书在桌子下", "书在桌子上", "书在椅子上", "书在门旁边"], correctAnswer: "书在桌子上", explanation: "di atas = 在...上面，meja = 桌子，Buku di atas meja = 书在桌子上" },
          { id: "q3-d-3", type: "arrange_words", question: "请排列出'关门'：", options: ["Tutup", "buka", "pintu"], correctAnswer: ["Tutup", "pintu"], explanation: "Tutup pintu = 关门（tutup=关，pintu=门）" },
        ]
      },
      {
        id: "lesson-3-5",
        title: "Dialog: Di Rumah",
        titleChinese: "情景对话：在家里",
        description: "练习家庭日常对话场景",
        xpReward: 20,
        vocabulary: [
          { id: "v3e1", indonesian: "Sedang", chinese: "正在", pronunciation: "se-dang", example: "Saya sedang makan.", exampleChinese: "我正在吃饭。" },
          { id: "v3e2", indonesian: "Mau", chinese: "想要/要", pronunciation: "mau", example: "Kamu mau apa?", exampleChinese: "你想要什么？" },
          { id: "v3e3", indonesian: "Tolong", chinese: "请/帮忙", pronunciation: "to-long", example: "Tolong bantu saya.", exampleChinese: "请帮帮我。" },
          { id: "v3e4", indonesian: "Sebentar", chinese: "稍等/一会儿", pronunciation: "se-ben-tar", example: "Tunggu sebentar.", exampleChinese: "稍等一下。" },
          { id: "v3e5", indonesian: "Sudah selesai", chinese: "已经完成了", pronunciation: "su-dah se-le-sai", example: "Sudah selesai makan.", exampleChinese: "已经吃完了。" },
          { id: "v3e6", indonesian: "Bersama", chinese: "一起/共同", pronunciation: "ber-sa-ma", example: "Makan bersama keluarga.", exampleChinese: "和家人一起吃饭。" },
        ],
        questions: [
          { id: "q3-e-1", type: "multiple_choice", question: "'Saya sedang makan' 是什么意思？", options: ["我吃了饭", "我正在吃饭", "我要吃饭", "我不吃饭"], correctAnswer: "我正在吃饭", explanation: "sedang = 正在，Saya sedang makan = 我正在吃饭" },
          { id: "q3-e-2", type: "multiple_choice", question: "如何请别人帮忙？", options: ["Maaf", "Tolong", "Permisi", "Terima kasih"], correctAnswer: "Tolong", explanation: "Tolong = 请/帮忙，用于请求别人帮助" },
          { id: "q3-e-3", type: "arrange_words", question: "请排列出'我们一起吃饭'：", options: ["makan", "Kita", "bersama"], correctAnswer: ["Kita", "makan", "bersama"], explanation: "Kita makan bersama = 我们一起吃饭" },
        ]
      },
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
          { id: "q4-1-1", type: "multiple_choice", question: "印尼语基本句型结构是？", options: ["动词+主语+宾语", "主语+动词+宾语", "宾语+主语+动词", "主语+宾语+动词"], correctAnswer: "主语+动词+宾语", explanation: "印尼语基本句型与英语相同：主语+动词+宾语（SVO），如 Saya makan nasi（我吃米饭）" },
          { id: "q4-1-2", type: "multiple_choice", question: "如何说'我学习印尼语'？", options: ["Bahasa Indonesia belajar saya.", "Saya belajar bahasa Indonesia.", "Belajar saya bahasa Indonesia.", "Saya bahasa Indonesia belajar."], correctAnswer: "Saya belajar bahasa Indonesia.", explanation: "Saya（我）+ belajar（学习）+ bahasa Indonesia（印尼语）= 我学习印尼语" },
          { id: "q4-1-3", type: "arrange_words", question: "请排列出'他喝水'：", options: ["air", "Dia", "minum"], correctAnswer: ["Dia", "minum", "air"], explanation: "Dia minum air = 他喝水（主语+动词+宾语）" },
        ]
      },
      {
        id: "lesson-4-2",
        title: "Kalimat Negatif",
        titleChinese: "否定句",
        description: "学习印尼语否定句的构成",
        xpReward: 15,
        vocabulary: [
          { id: "v110", indonesian: "Tidak", chinese: "不（否定动词/形容词）", pronunciation: "ti-dak", example: "Saya tidak makan.", exampleChinese: "我不吃。" },
          { id: "v111", indonesian: "Bukan", chinese: "不是（否定名词）", pronunciation: "bu-kan", example: "Ini bukan buku saya.", exampleChinese: "这不是我的书。" },
          { id: "v112", indonesian: "Jangan", chinese: "不要（命令否定）", pronunciation: "ja-ngan", example: "Jangan pergi!", exampleChinese: "不要走！" },
          { id: "v113", indonesian: "Belum", chinese: "还没有", pronunciation: "be-lum", example: "Saya belum makan.", exampleChinese: "我还没吃。" },
          { id: "v114", indonesian: "Tidak pernah", chinese: "从不/从来没有", pronunciation: "ti-dak per-nah", example: "Saya tidak pernah ke Bali.", exampleChinese: "我从没去过巴厘岛。" },
        ],
        questions: [
          { id: "q4-2-1", type: "multiple_choice", question: "'Tidak' 和 'Bukan' 的区别是？", options: ["没有区别", "Tidak否定动词/形容词，Bukan否定名词", "Bukan否定动词，Tidak否定名词", "Tidak用于过去，Bukan用于现在"], correctAnswer: "Tidak否定动词/形容词，Bukan否定名词", explanation: "Tidak用于否定动词和形容词（Saya tidak makan），Bukan用于否定名词（Ini bukan buku）" },
          { id: "q4-2-2", type: "multiple_choice", question: "如何说'这不是我的书'？", options: ["Ini tidak buku saya.", "Ini bukan buku saya.", "Ini tidak ada buku.", "Buku saya tidak ini."], correctAnswer: "Ini bukan buku saya.", explanation: "bukan用于否定名词，Ini bukan buku saya = 这不是我的书" },
        ]
      },
      {
        id: "lesson-4-3",
        title: "Kalimat Tanya",
        titleChinese: "疑问句",
        description: "学习印尼语疑问词和疑问句",
        xpReward: 15,
        vocabulary: [
          { id: "v120", indonesian: "Apa", chinese: "什么", pronunciation: "a-pa", example: "Apa ini?", exampleChinese: "这是什么？" },
          { id: "v121", indonesian: "Siapa", chinese: "谁", pronunciation: "si-a-pa", example: "Siapa nama kamu?", exampleChinese: "你叫什么名字？" },
          { id: "v122", indonesian: "Di mana", chinese: "在哪里", pronunciation: "di ma-na", example: "Di mana toilet?", exampleChinese: "厕所在哪里？" },
          { id: "v123", indonesian: "Ke mana", chinese: "去哪里", pronunciation: "ke ma-na", example: "Ke mana kamu pergi?", exampleChinese: "你要去哪里？" },
          { id: "v124", indonesian: "Kapan", chinese: "什么时候", pronunciation: "ka-pan", example: "Kapan kamu datang?", exampleChinese: "你什么时候来？" },
          { id: "v125", indonesian: "Mengapa / Kenapa", chinese: "为什么", pronunciation: "me-nga-pa / ke-na-pa", example: "Kenapa kamu menangis?", exampleChinese: "你为什么哭？" },
          { id: "v126", indonesian: "Bagaimana", chinese: "怎么样/如何", pronunciation: "ba-gai-ma-na", example: "Bagaimana kabarmu?", exampleChinese: "你怎么样？" },
          { id: "v127", indonesian: "Berapa", chinese: "多少", pronunciation: "be-ra-pa", example: "Berapa harganya?", exampleChinese: "多少钱？" },
        ],
        questions: [
          { id: "q4-3-1", type: "multiple_choice", question: "如何问'厕所在哪里'？", options: ["Apa toilet?", "Di mana toilet?", "Ke mana toilet?", "Kapan toilet?"], correctAnswer: "Di mana toilet?", explanation: "Di mana = 在哪里，Di mana toilet? = 厕所在哪里？" },
          { id: "q4-3-2", type: "multiple_choice", question: "'Berapa' 是什么意思？", options: ["什么", "谁", "多少", "为什么"], correctAnswer: "多少", explanation: "Berapa = 多少，常用于询问数量或价格，如 Berapa harganya?（多少钱？）" },
          { id: "q4-3-3", type: "arrange_words", question: "请排列出'你为什么哭'：", options: ["menangis", "Kenapa", "kamu"], correctAnswer: ["Kenapa", "kamu", "menangis"], explanation: "Kenapa kamu menangis? = 你为什么哭？" },
        ]
      },
      {
        id: "lesson-4-4",
        title: "Kata Sifat",
        titleChinese: "形容词",
        description: "学习常用形容词，描述人和事物",
        xpReward: 15,
        vocabulary: [
          { id: "v4d1", indonesian: "Besar", chinese: "大", pronunciation: "be-sar", example: "Rumah ini besar.", exampleChinese: "这房子很大。" },
          { id: "v4d2", indonesian: "Kecil", chinese: "小", pronunciation: "ke-cil", example: "Anjing kecil.", exampleChinese: "小狗。" },
          { id: "v4d3", indonesian: "Cantik / Indah", chinese: "漂亮/美丽", pronunciation: "can-tik / in-dah", example: "Dia cantik sekali.", exampleChinese: "她非常漂亮。" },
          { id: "v4d4", indonesian: "Bagus", chinese: "好/棒", pronunciation: "ba-gus", example: "Bagus sekali!", exampleChinese: "非常棒！" },
          { id: "v4d5", indonesian: "Mahal", chinese: "贵", pronunciation: "ma-hal", example: "Ini terlalu mahal.", exampleChinese: "这太贵了。" },
          { id: "v4d6", indonesian: "Murah", chinese: "便宜", pronunciation: "mu-rah", example: "Harganya murah.", exampleChinese: "价格很便宜。" },
          { id: "v4d7", indonesian: "Cepat", chinese: "快", pronunciation: "ce-pat", example: "Dia berlari cepat.", exampleChinese: "他跑得很快。" },
          { id: "v4d8", indonesian: "Lambat", chinese: "慢", pronunciation: "lam-bat", example: "Jalan lambat.", exampleChinese: "走路慢。" },
        ],
        questions: [
          { id: "q4-d-1", type: "multiple_choice", question: "印尼语形容词的位置是？", options: ["在名词前面", "在名词后面", "在句子开头", "在动词后面"], correctAnswer: "在名词后面", explanation: "印尼语形容词放在名词后面，如 rumah besar（大房子），与中文相反" },
          { id: "q4-d-2", type: "multiple_choice", question: "'Bagus sekali' 是什么意思？", options: ["有点好", "不好", "非常棒", "还可以"], correctAnswer: "非常棒", explanation: "bagus = 好/棒，sekali = 非常，Bagus sekali = 非常棒！" },
        ]
      },
      {
        id: "lesson-4-5",
        title: "Dialog: Percakapan Sehari-hari",
        titleChinese: "情景对话：日常对话",
        description: "综合练习日常生活中的基础对话",
        xpReward: 20,
        vocabulary: [
          { id: "v4e1", indonesian: "Iya / Ya", chinese: "是/对", pronunciation: "i-ya / ya", example: "Iya, benar.", exampleChinese: "是的，对。" },
          { id: "v4e2", indonesian: "Tidak apa-apa", chinese: "没关系", pronunciation: "ti-dak a-pa a-pa", example: "Tidak apa-apa, santai saja.", exampleChinese: "没关系，放轻松。" },
          { id: "v4e3", indonesian: "Benar", chinese: "对/正确", pronunciation: "be-nar", example: "Itu benar.", exampleChinese: "那是对的。" },
          { id: "v4e4", indonesian: "Salah", chinese: "错/不对", pronunciation: "sa-lah", example: "Maaf, saya salah.", exampleChinese: "对不起，我错了。" },
          { id: "v4e5", indonesian: "Mengerti", chinese: "明白/理解", pronunciation: "me-nger-ti", example: "Saya mengerti.", exampleChinese: "我明白了。" },
          { id: "v4e6", indonesian: "Tidak mengerti", chinese: "不明白", pronunciation: "ti-dak me-nger-ti", example: "Maaf, saya tidak mengerti.", exampleChinese: "对不起，我不明白。" },
        ],
        questions: [
          { id: "q4-e-1", type: "multiple_choice", question: "别人道歉时，如何说'没关系'？", options: ["Terima kasih.", "Tidak apa-apa.", "Sama-sama.", "Maaf."], correctAnswer: "Tidak apa-apa.", explanation: "Tidak apa-apa = 没关系，是回应道歉的常用表达" },
          { id: "q4-e-2", type: "multiple_choice", question: "老师讲解后，如何表示'我明白了'？", options: ["Saya tidak tahu.", "Saya mengerti.", "Saya tidak mengerti.", "Saya salah."], correctAnswer: "Saya mengerti.", explanation: "mengerti = 明白/理解，Saya mengerti = 我明白了" },
          { id: "q4-e-3", type: "arrange_words", question: "请排列出'对不起，我不明白'：", options: ["tidak mengerti", "Maaf", "saya"], correctAnswer: ["Maaf", "saya", "tidak mengerti"], explanation: "Maaf, saya tidak mengerti = 对不起，我不明白" },
        ]
      },
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
          { id: "q5-1-1", type: "multiple_choice", question: "'Belok kanan' 是什么意思？", options: ["向左转", "向右转", "直走", "停下"], correctAnswer: "向右转", explanation: "Belok = 转，kanan = 右，Belok kanan = 向右转" },
          { id: "q5-1-2", type: "multiple_choice", question: "如何问'机场在哪里'？", options: ["Ke mana bandara?", "Di mana bandara?", "Apa bandara?", "Kapan bandara?"], correctAnswer: "Di mana bandara?", explanation: "Di mana = 在哪里，bandara = 机场，Di mana bandara? = 机场在哪里？" },
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
          { id: "q5-2-1", type: "multiple_choice", question: "如何说'这太贵了'？", options: ["Ini terlalu murah.", "Ini terlalu mahal.", "Ini tidak bagus.", "Ini tidak ada."], correctAnswer: "Ini terlalu mahal.", explanation: "terlalu = 太，mahal = 贵，Ini terlalu mahal = 这太贵了" },
          { id: "q5-2-2", type: "multiple_choice", question: "'Ada diskon?' 是什么意思？", options: ["有折扣吗？", "多少钱？", "可以便宜吗？", "在哪里付款？"], correctAnswer: "有折扣吗？", explanation: "Ada = 有，diskon = 折扣（来自英语 discount），Ada diskon? = 有折扣吗？" },
        ]
      },
      {
        id: "lesson-5-3",
        title: "Transportasi",
        titleChinese: "交通工具",
        description: "学习交通工具和出行表达",
        xpReward: 15,
        vocabulary: [
          { id: "v5c1", indonesian: "Taksi", chinese: "出租车", pronunciation: "tak-si", example: "Naik taksi ke hotel.", exampleChinese: "坐出租车去酒店。" },
          { id: "v5c2", indonesian: "Bus", chinese: "公共汽车", pronunciation: "bus", example: "Naik bus kota.", exampleChinese: "坐城市公交车。" },
          { id: "v5c3", indonesian: "Ojek", chinese: "摩托车出租（印尼特色）", pronunciation: "o-jek", example: "Pesan ojek online.", exampleChinese: "叫网约摩托车。" },
          { id: "v5c4", indonesian: "Naik", chinese: "乘坐/上车", pronunciation: "na-ik", example: "Naik pesawat.", exampleChinese: "乘坐飞机。" },
          { id: "v5c5", indonesian: "Turun", chinese: "下车", pronunciation: "tu-run", example: "Turun di sini.", exampleChinese: "在这里下车。" },
          { id: "v5c6", indonesian: "Stasiun", chinese: "火车站", pronunciation: "sta-si-un", example: "Di mana stasiun?", exampleChinese: "火车站在哪里？" },
          { id: "v5c7", indonesian: "Tiket", chinese: "票", pronunciation: "ti-ket", example: "Beli tiket bus.", exampleChinese: "买公交票。" },
        ],
        questions: [
          { id: "q5-c-1", type: "multiple_choice", question: "'Ojek' 是什么交通工具？", options: ["出租车", "公共汽车", "摩托车出租", "火车"], correctAnswer: "摩托车出租", explanation: "Ojek 是印尼特色的摩托车出租服务，现在也有 Gojek 等网约摩托车平台" },
          { id: "q5-c-2", type: "multiple_choice", question: "如何说'在这里下车'？", options: ["Naik di sini.", "Turun di sini.", "Berhenti di sini.", "Pergi di sini."], correctAnswer: "Turun di sini.", explanation: "Turun = 下车/下来，Turun di sini = 在这里下车" },
        ]
      },
      {
        id: "lesson-5-4",
        title: "Dialog: Tanya Jalan",
        titleChinese: "情景对话：问路",
        description: "练习在印尼问路和指路的完整对话",
        xpReward: 25,
        vocabulary: [
          { id: "v5d1", indonesian: "Permisi, bisa tanya?", chinese: "打扰一下，可以问一下吗？", pronunciation: "per-mi-si bi-sa ta-nya", example: "Permisi, bisa tanya jalan ke stasiun?", exampleChinese: "打扰一下，可以问去火车站的路吗？" },
          { id: "v5d2", indonesian: "Ikuti jalan ini", chinese: "沿着这条路走", pronunciation: "i-ku-ti ja-lan i-ni", example: "Ikuti jalan ini sampai perempatan.", exampleChinese: "沿着这条路走到十字路口。" },
          { id: "v5d3", indonesian: "Perempatan", chinese: "十字路口", pronunciation: "pe-rem-pa-tan", example: "Belok kiri di perempatan.", exampleChinese: "在十字路口向左转。" },
          { id: "v5d4", indonesian: "Kira-kira", chinese: "大约/估计", pronunciation: "ki-ra ki-ra", example: "Kira-kira berapa menit?", exampleChinese: "大约几分钟？" },
          { id: "v5d5", indonesian: "Jalan kaki", chinese: "步行", pronunciation: "ja-lan ka-ki", example: "Bisa jalan kaki.", exampleChinese: "可以步行去。" },
          { id: "v5d6", indonesian: "Terima kasih banyak", chinese: "非常感谢", pronunciation: "te-ri-ma ka-sih ba-nyak", example: "Terima kasih banyak atas bantuannya.", exampleChinese: "非常感谢您的帮助。" },
        ],
        questions: [
          { id: "q5-d-1", type: "multiple_choice", question: "问路时，礼貌的开场白是？", options: ["Di mana?", "Permisi, bisa tanya?", "Hei, kamu!", "Tolong!"], correctAnswer: "Permisi, bisa tanya?", explanation: "Permisi, bisa tanya? = 打扰一下，可以问一下吗？是礼貌问路的标准开场白" },
          { id: "q5-d-2", type: "multiple_choice", question: "'Kira-kira berapa menit?' 是什么意思？", options: ["这里有几分钟？", "大约几分钟？", "你有几分钟？", "需要几分钟？"], correctAnswer: "大约几分钟？", explanation: "Kira-kira = 大约，berapa menit = 几分钟，合起来 = 大约几分钟？" },
          { id: "q5-d-3", type: "arrange_words", question: "请排列出'在十字路口向左转'：", options: ["kiri", "di perempatan", "Belok"], correctAnswer: ["Belok", "kiri", "di perempatan"], explanation: "Belok kiri di perempatan = 在十字路口向左转" },
        ]
      },
      {
        id: "lesson-5-5",
        title: "Dialog: Di Restoran",
        titleChinese: "情景对话：在餐厅",
        description: "练习在印尼餐厅点餐的完整对话",
        xpReward: 25,
        vocabulary: [
          { id: "v5e1", indonesian: "Meja untuk dua orang", chinese: "两人桌", pronunciation: "me-ja un-tuk du-a o-rang", example: "Saya pesan meja untuk dua orang.", exampleChinese: "我预订两人桌。" },
          { id: "v5e2", indonesian: "Menu", chinese: "菜单", pronunciation: "me-nu", example: "Boleh lihat menunya?", exampleChinese: "可以看菜单吗？" },
          { id: "v5e3", indonesian: "Pesan", chinese: "点餐/预订", pronunciation: "pe-san", example: "Saya mau pesan nasi goreng.", exampleChinese: "我要点炒饭。" },
          { id: "v5e4", indonesian: "Pedas", chinese: "辣", pronunciation: "pe-das", example: "Tidak terlalu pedas.", exampleChinese: "不要太辣。" },
          { id: "v5e5", indonesian: "Minta bon", chinese: "要账单", pronunciation: "min-ta bon", example: "Minta bon, please.", exampleChinese: "请给我账单。" },
          { id: "v5e6", indonesian: "Sudah kenyang", chinese: "已经吃饱了", pronunciation: "su-dah ke-nyang", example: "Saya sudah kenyang.", exampleChinese: "我已经吃饱了。" },
          { id: "v5e7", indonesian: "Enak sekali", chinese: "非常好吃", pronunciation: "e-nak se-ka-li", example: "Makanannya enak sekali!", exampleChinese: "食物非常好吃！" },
        ],
        questions: [
          { id: "q5-e-1", type: "multiple_choice", question: "进入餐厅后，如何说'可以看菜单吗'？", options: ["Minta bon.", "Boleh lihat menunya?", "Saya sudah kenyang.", "Meja untuk dua orang."], correctAnswer: "Boleh lihat menunya?", explanation: "Boleh = 可以，lihat = 看，menunya = 菜单，Boleh lihat menunya? = 可以看菜单吗？" },
          { id: "q5-e-2", type: "multiple_choice", question: "如何说'我要点炒饭，不要太辣'？", options: ["Saya mau pesan nasi goreng, tidak terlalu pedas.", "Saya mau nasi goreng pedas sekali.", "Minta nasi goreng mahal.", "Saya tidak suka nasi goreng."], correctAnswer: "Saya mau pesan nasi goreng, tidak terlalu pedas.", explanation: "pesan = 点餐，tidak terlalu pedas = 不要太辣" },
          { id: "q5-e-3", type: "arrange_words", question: "请排列出'请给我账单'：", options: ["bon", "Minta", "makanan"], correctAnswer: ["Minta", "bon"], explanation: "Minta bon = 请给我账单（minta=请/要，bon=账单）" },
        ]
      },
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
          { id: "q6-1-1", type: "multiple_choice", question: "前缀 me- 的主要功能是？", options: ["构成被动动词", "构成主动动词", "构成名词", "构成形容词"], correctAnswer: "构成主动动词", explanation: "me- 前缀用于构成主动动词，表示主语主动执行的动作，如 membaca（阅读）、menulis（写）" },
          { id: "q6-1-2", type: "multiple_choice", question: "'Membaca' 的词根是？", options: ["Mem", "Baca", "Aca", "Membac"], correctAnswer: "Baca", explanation: "Membaca = me- + baca（读），词根是 baca，加上 me- 前缀变成主动动词" },
          { id: "q6-1-3", type: "multiple_choice", question: "如何说'老师教学生'？", options: ["Guru belajar murid.", "Guru mengajar murid.", "Murid mengajar guru.", "Guru ajar murid."], correctAnswer: "Guru mengajar murid.", explanation: "mengajar = me- + ajar（教），Guru mengajar murid = 老师教学生" },
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
          { id: "q6-2-1", type: "multiple_choice", question: "前缀 ber- 的主要功能是？", options: ["构成主动及物动词", "构成表示状态、活动或拥有的动词", "构成被动动词", "构成名词"], correctAnswer: "构成表示状态、活动或拥有的动词", explanation: "ber- 前缀用于构成不及物动词，表示处于某种状态、进行某种活动，如 bekerja（工作）、bermain（玩耍）" },
          { id: "q6-2-2", type: "multiple_choice", question: "'Mereka berbicara bahasa Inggris' 是什么意思？", options: ["他们学英语", "他们说英语", "他们喜欢英语", "他们教英语"], correctAnswer: "他们说英语", explanation: "berbicara = ber- + bicara（说话），Mereka berbicara bahasa Inggris = 他们说英语" },
        ]
      },
      {
        id: "lesson-6-3",
        title: "Awalan ter- & pe-",
        titleChinese: "前缀 ter- 与 pe-",
        description: "学习被动/最高级前缀 ter- 和名词化前缀 pe-",
        xpReward: 20,
        vocabulary: [
          { id: "v6c1", indonesian: "Terbesar", chinese: "最大的", pronunciation: "ter-be-sar", example: "Indonesia adalah negara terbesar di ASEAN.", exampleChinese: "印尼是东盟最大的国家。" },
          { id: "v6c2", indonesian: "Terbaik", chinese: "最好的", pronunciation: "ter-ba-ik", example: "Ini yang terbaik.", exampleChinese: "这是最好的。" },
          { id: "v6c3", indonesian: "Terlambat", chinese: "迟到/太晚", pronunciation: "ter-lam-bat", example: "Maaf, saya terlambat.", exampleChinese: "对不起，我迟到了。" },
          { id: "v6c4", indonesian: "Terjadi", chinese: "发生", pronunciation: "ter-ja-di", example: "Apa yang terjadi?", exampleChinese: "发生了什么？" },
          { id: "v6c5", indonesian: "Pelajar", chinese: "学生", pronunciation: "pe-la-jar", example: "Dia seorang pelajar.", exampleChinese: "他是一名学生。" },
          { id: "v6c6", indonesian: "Penjual", chinese: "卖家/商贩", pronunciation: "pen-ju-al", example: "Penjual buah.", exampleChinese: "卖水果的商贩。" },
          { id: "v6c7", indonesian: "Pembeli", chinese: "买家/顾客", pronunciation: "pem-be-li", example: "Pembeli itu ramah.", exampleChinese: "那位顾客很友好。" },
        ],
        questions: [
          { id: "q6-c-1", type: "multiple_choice", question: "ter- 前缀用于形容词时表示什么？", options: ["比较级（更...）", "最高级（最...）", "否定（不...）", "过去时（曾经...）"], correctAnswer: "最高级（最...）", explanation: "ter- + 形容词 = 最高级，如 terbesar（最大的）、terbaik（最好的）" },
          { id: "q6-c-2", type: "multiple_choice", question: "'Penjual' 和 'Pembeli' 分别是什么意思？", options: ["买家和卖家", "卖家和买家", "老师和学生", "父亲和母亲"], correctAnswer: "卖家和买家", explanation: "Penjual = pe- + jual（卖）= 卖家，Pembeli = pe- + beli（买）= 买家" },
          { id: "q6-c-3", type: "arrange_words", question: "请排列出'发生了什么'：", options: ["terjadi", "Apa", "yang"], correctAnswer: ["Apa", "yang", "terjadi"], explanation: "Apa yang terjadi? = 发生了什么？" },
        ]
      },
      {
        id: "lesson-6-4",
        title: "Kata Kerja Berimbuhan",
        titleChinese: "带词缀的动词",
        description: "综合练习 me- 和 ber- 前缀动词的运用",
        xpReward: 25,
        vocabulary: [
          { id: "v6d1", indonesian: "Menelepon", chinese: "打电话", pronunciation: "me-ne-le-pon", example: "Saya menelepon ibu.", exampleChinese: "我给妈妈打电话。" },
          { id: "v6d2", indonesian: "Menggunakan", chinese: "使用", pronunciation: "meng-gu-na-kan", example: "Saya menggunakan komputer.", exampleChinese: "我使用电脑。" },
          { id: "v6d3", indonesian: "Berbelanja", chinese: "购物", pronunciation: "ber-be-lan-ja", example: "Ibu berbelanja di pasar.", exampleChinese: "妈妈在市场购物。" },
          { id: "v6d4", indonesian: "Berolahraga", chinese: "运动/锻炼", pronunciation: "ber-o-lah-ra-ga", example: "Saya berolahraga setiap pagi.", exampleChinese: "我每天早上运动。" },
          { id: "v6d5", indonesian: "Merencanakan", chinese: "计划/安排", pronunciation: "me-ren-ca-na-kan", example: "Kami merencanakan liburan.", exampleChinese: "我们计划假期。" },
        ],
        questions: [
          { id: "q6-d-1", type: "multiple_choice", question: "如何说'我每天早上运动'？", options: ["Saya olahraga setiap pagi.", "Saya berolahraga setiap pagi.", "Saya main olahraga pagi.", "Saya suka pagi olahraga."], correctAnswer: "Saya berolahraga setiap pagi.", explanation: "berolahraga = ber- + olahraga，setiap pagi = 每天早上" },
          { id: "q6-d-2", type: "multiple_choice", question: "'Menggunakan' 的词根是？", options: ["Guna", "Menggu", "Nakan", "Gunakan"], correctAnswer: "Guna", explanation: "Menggunakan = me- + guna（用）+ -kan，词根是 guna（用处/使用）" },
        ]
      },
      {
        id: "lesson-6-5",
        title: "Dialog: Di Kantor",
        titleChinese: "情景对话：在办公室",
        description: "练习职场中使用带前缀动词的对话",
        xpReward: 25,
        vocabulary: [
          { id: "v6e1", indonesian: "Rapat", chinese: "会议", pronunciation: "ra-pat", example: "Ada rapat jam berapa?", exampleChinese: "会议几点开始？" },
          { id: "v6e2", indonesian: "Menghadiri", chinese: "出席/参加", pronunciation: "meng-ha-di-ri", example: "Saya menghadiri rapat.", exampleChinese: "我出席会议。" },
          { id: "v6e3", indonesian: "Mengirim", chinese: "发送/寄", pronunciation: "me-ngi-rim", example: "Tolong kirim email ini.", exampleChinese: "请发送这封邮件。" },
          { id: "v6e4", indonesian: "Melaporkan", chinese: "汇报/报告", pronunciation: "me-la-por-kan", example: "Saya melaporkan hasilnya.", exampleChinese: "我汇报结果。" },
          { id: "v6e5", indonesian: "Bekerja sama", chinese: "合作", pronunciation: "be-ker-ja sa-ma", example: "Kita harus bekerja sama.", exampleChinese: "我们必须合作。" },
        ],
        questions: [
          { id: "q6-e-1", type: "multiple_choice", question: "如何说'我出席会议'？", options: ["Saya rapat.", "Saya menghadiri rapat.", "Saya ada rapat.", "Saya di rapat."], correctAnswer: "Saya menghadiri rapat.", explanation: "menghadiri = me- + hadiri（出席），Saya menghadiri rapat = 我出席会议" },
          { id: "q6-e-2", type: "multiple_choice", question: "'Kita harus bekerja sama' 是什么意思？", options: ["我们一起工作", "我们必须合作", "我们喜欢工作", "我们在工作"], correctAnswer: "我们必须合作", explanation: "harus = 必须，bekerja sama = 合作，Kita harus bekerja sama = 我们必须合作" },
        ]
      },
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
          { id: "q7-1-1", type: "multiple_choice", question: "后缀 -kan 的主要功能是？", options: ["将动词变为名词", "表示使动或为他人做某事", "表示被动", "表示正在进行"], correctAnswer: "表示使动或为他人做某事", explanation: "-kan 后缀表示为他人做某事或使某人/某物处于某种状态，如 memberikan（给予）、membuatkan（为...做）" },
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
          { id: "q7-2-1", type: "multiple_choice", question: "'Makanan' 的词根是什么？", options: ["Maka", "Makan", "Makana", "Kan"], correctAnswer: "Makan", explanation: "Makanan = makan（吃）+ -an，-an 后缀将动词名词化，makan（吃）→ makanan（食物）" },
          { id: "q7-2-2", type: "multiple_choice", question: "后缀 -an 的主要功能是？", options: ["构成主动动词", "将动词或形容词名词化", "表示使动", "构成被动动词"], correctAnswer: "将动词或形容词名词化", explanation: "-an 后缀将动词或形容词变为名词，如 makan（吃）→ makanan（食物），minum（喝）→ minuman（饮料）" },
        ]
      },
      {
        id: "lesson-7-3",
        title: "Akhiran -i",
        titleChinese: "后缀 -i",
        description: "学习表示方向或重复动作的后缀 -i",
        xpReward: 20,
        vocabulary: [
          { id: "v7c1", indonesian: "Mengunjungi", chinese: "拜访/参观", pronunciation: "me-nun-jung-i", example: "Saya mengunjungi teman.", exampleChinese: "我拜访朋友。" },
          { id: "v7c2", indonesian: "Menemani", chinese: "陪伴", pronunciation: "me-ne-ma-ni", example: "Dia menemani saya.", exampleChinese: "他陪伴我。" },
          { id: "v7c3", indonesian: "Mempelajari", chinese: "学习/研究", pronunciation: "mem-pe-la-ja-ri", example: "Saya mempelajari bahasa Indonesia.", exampleChinese: "我学习印尼语。" },
          { id: "v7c4", indonesian: "Mengisi", chinese: "填写/填充", pronunciation: "me-ngi-si", example: "Tolong isi formulir ini.", exampleChinese: "请填写这份表格。" },
          { id: "v7c5", indonesian: "Menghormati", chinese: "尊重", pronunciation: "meng-hor-ma-ti", example: "Kita harus menghormati orang tua.", exampleChinese: "我们必须尊重长辈。" },
        ],
        questions: [
          { id: "q7-c-1", type: "multiple_choice", question: "后缀 -i 的主要功能是？", options: ["名词化", "表示为他人做", "表示动作指向某人/某地", "表示最高级"], correctAnswer: "表示动作指向某人/某地", explanation: "-i 后缀表示动作指向某个对象或地点，如 mengunjungi（拜访）、menemani（陪伴）" },
          { id: "q7-c-2", type: "multiple_choice", question: "'Mempelajari' 和 'Belajar' 有什么区别？", options: ["没有区别", "Mempelajari 更正式，表示深入学习某科目", "Belajar 更正式", "Mempelajari 用于过去"], correctAnswer: "Mempelajari 更正式，表示深入学习某科目", explanation: "Belajar = 学习（一般），Mempelajari = 深入研究/学习某个具体科目，更正式" },
        ]
      },
      {
        id: "lesson-7-4",
        title: "Kata Berimbuhan Kompleks",
        titleChinese: "复合词缀词",
        description: "学习同时带有前缀和后缀的复杂词汇",
        xpReward: 25,
        vocabulary: [
          { id: "v7d1", indonesian: "Memberitahukan", chinese: "通知/告知", pronunciation: "mem-be-ri-ta-hu-kan", example: "Tolong beritahukan saya.", exampleChinese: "请通知我。" },
          { id: "v7d2", indonesian: "Memperkenalkan", chinese: "介绍", pronunciation: "mem-per-ke-nal-kan", example: "Boleh saya memperkenalkan diri?", exampleChinese: "我可以自我介绍吗？" },
          { id: "v7d3", indonesian: "Menyelesaikan", chinese: "完成/解决", pronunciation: "me-nye-le-sai-kan", example: "Saya menyelesaikan pekerjaan.", exampleChinese: "我完成了工作。" },
          { id: "v7d4", indonesian: "Mengembangkan", chinese: "发展/开发", pronunciation: "me-ngem-bang-kan", example: "Mengembangkan bisnis.", exampleChinese: "发展业务。" },
        ],
        questions: [
          { id: "q7-d-1", type: "multiple_choice", question: "如何说'我可以自我介绍吗'？", options: ["Saya perkenalan.", "Boleh saya memperkenalkan diri?", "Nama saya siapa?", "Saya dari mana?"], correctAnswer: "Boleh saya memperkenalkan diri?", explanation: "memperkenalkan = me- + per- + kenal + -kan，diri = 自己，整句 = 我可以自我介绍吗？" },
          { id: "q7-d-2", type: "multiple_choice", question: "'Menyelesaikan pekerjaan' 是什么意思？", options: ["开始工作", "完成工作", "找工作", "换工作"], correctAnswer: "完成工作", explanation: "menyelesaikan = me- + selesai（完成）+ -kan，pekerjaan = 工作，整句 = 完成工作" },
        ]
      },
      {
        id: "lesson-7-5",
        title: "Dialog: Wawancara Kerja",
        titleChinese: "情景对话：求职面试",
        description: "练习在求职面试中使用正式词缀词汇",
        xpReward: 30,
        vocabulary: [
          { id: "v7e1", indonesian: "Melamar pekerjaan", chinese: "申请工作", pronunciation: "me-la-mar pe-ker-ja-an", example: "Saya ingin melamar pekerjaan ini.", exampleChinese: "我想申请这份工作。" },
          { id: "v7e2", indonesian: "Pengalaman kerja", chinese: "工作经验", pronunciation: "pe-nga-la-man ker-ja", example: "Saya memiliki pengalaman kerja tiga tahun.", exampleChinese: "我有三年工作经验。" },
          { id: "v7e3", indonesian: "Kemampuan", chinese: "能力/技能", pronunciation: "ke-mam-pu-an", example: "Apa kemampuan Anda?", exampleChinese: "您有什么能力/技能？" },
          { id: "v7e4", indonesian: "Bersedia", chinese: "愿意/准备好", pronunciation: "ber-se-di-a", example: "Saya bersedia bekerja keras.", exampleChinese: "我愿意努力工作。" },
          { id: "v7e5", indonesian: "Gaji", chinese: "薪水", pronunciation: "ga-ji", example: "Berapa gaji yang diharapkan?", exampleChinese: "期望薪水是多少？" },
        ],
        questions: [
          { id: "q7-e-1", type: "multiple_choice", question: "面试时如何说'我有三年工作经验'？", options: ["Saya kerja tiga tahun.", "Saya memiliki pengalaman kerja tiga tahun.", "Pengalaman saya tiga.", "Saya tiga tahun kerja."], correctAnswer: "Saya memiliki pengalaman kerja tiga tahun.", explanation: "memiliki = 拥有，pengalaman kerja = 工作经验，tiga tahun = 三年" },
          { id: "q7-e-2", type: "multiple_choice", question: "'Saya bersedia bekerja keras' 是什么意思？", options: ["我喜欢努力工作", "我愿意努力工作", "我已经努力工作了", "我不想努力工作"], correctAnswer: "我愿意努力工作", explanation: "bersedia = 愿意/准备好，bekerja keras = 努力工作" },
        ]
      },
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
          { id: "q8-1-1", type: "multiple_choice", question: "'Jika' 和 'Kalau' 的区别是？", options: ["Jika是正式书面语，Kalau是口语", "Kalau是正式书面语，Jika是口语", "Jika用于过去，Kalau用于未来", "没有区别"], correctAnswer: "Jika是正式书面语，Kalau是口语", explanation: "两者都表示'如果'，但 Jika 更正式，常用于书面语；Kalau 更口语化，日常对话中更常用" },
          { id: "q8-1-2", type: "multiple_choice", question: "'Jika hujan, saya tidak pergi.' 是什么意思？", options: ["我不喜欢下雨。", "如果下雨，我就不去了。", "下雨了，所以我没去。", "我去了，虽然下雨了。"], correctAnswer: "如果下雨，我就不去了。", explanation: "Jika = 如果，hujan = 下雨，tidak pergi = 不去，整句 = 如果下雨，我就不去了" },
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
          { id: "q8-2-1", type: "multiple_choice", question: "'Saya terlambat karena macet.' 是什么意思？", options: ["我迟到了因为堵车。", "堵车所以我迟到了。", "我迟到了，但是没有堵车。", "虽然堵车，我还是准时了。"], correctAnswer: "我迟到了因为堵车。", explanation: "karena = 因为，terlambat = 迟到，macet = 堵车，整句 = 我迟到了因为堵车" },
        ]
      },
      {
        id: "lesson-8-3",
        title: "Kalimat Waktu",
        titleChinese: "时间从句",
        description: "学习表达时间关系的复合句",
        xpReward: 25,
        vocabulary: [
          { id: "v8c1", indonesian: "Ketika / Saat", chinese: "当...时候", pronunciation: "ke-ti-ka / sa-at", example: "Ketika saya tiba, dia sudah pergi.", exampleChinese: "当我到达时，他已经走了。" },
          { id: "v8c2", indonesian: "Sebelum", chinese: "在...之前", pronunciation: "se-be-lum", example: "Cuci tangan sebelum makan.", exampleChinese: "吃饭前洗手。" },
          { id: "v8c3", indonesian: "Sesudah / Setelah", chinese: "在...之后", pronunciation: "se-su-dah / se-te-lah", example: "Setelah makan, saya tidur.", exampleChinese: "吃饭后，我睡觉。" },
          { id: "v8c4", indonesian: "Selama", chinese: "在...期间/持续", pronunciation: "se-la-ma", example: "Selama di Indonesia, saya belajar bahasa.", exampleChinese: "在印尼期间，我学习语言。" },
          { id: "v8c5", indonesian: "Sampai", chinese: "直到", pronunciation: "sam-pai", example: "Tunggu sampai saya datang.", exampleChinese: "等到我来。" },
        ],
        questions: [
          { id: "q8-c-1", type: "multiple_choice", question: "'Sebelum' 和 'Setelah' 的区别？", options: ["Sebelum=之前，Setelah=之后", "Sebelum=之后，Setelah=之前", "两者相同", "都表示期间"], correctAnswer: "Sebelum=之前，Setelah=之后", explanation: "Sebelum = 在...之前，Setelah/Sesudah = 在...之后" },
          { id: "q8-c-2", type: "arrange_words", question: "排列成正确的句子：'saya / Ketika / tiba / dia / sudah / pergi'", options: ["Ketika", "saya", "tiba,", "dia", "sudah", "pergi."], correctAnswer: ["Ketika", "saya", "tiba,", "dia", "sudah", "pergi."], explanation: "Ketika saya tiba, dia sudah pergi. = 当我到达时，他已经走了。" },
        ]
      },
      {
        id: "lesson-8-4",
        title: "Dialog: Di Restoran",
        titleChinese: "对话：在餐厅",
        description: "学习在餐厅点餐的实用对话",
        xpReward: 30,
        vocabulary: [
          { id: "v8d1", indonesian: "Meja untuk dua orang", chinese: "两人桌", pronunciation: "me-ja un-tuk du-a o-rang", example: "Apakah ada meja untuk dua orang?", exampleChinese: "请问有两人桌吗？" },
          { id: "v8d2", indonesian: "Menu", chinese: "菜单", pronunciation: "me-nu", example: "Boleh saya lihat menunya?", exampleChinese: "我可以看一下菜单吗？" },
          { id: "v8d3", indonesian: "Pesan / Memesan", chinese: "点餐/预订", pronunciation: "pe-san / me-me-san", example: "Saya ingin memesan nasi goreng.", exampleChinese: "我想点炒饭。" },
          { id: "v8d4", indonesian: "Tagihan / Bon", chinese: "账单", pronunciation: "ta-gi-han / bon", example: "Minta tagihan, please.", exampleChinese: "请给我账单。" },
          { id: "v8d5", indonesian: "Pedas / Tidak pedas", chinese: "辣/不辣", pronunciation: "pe-das / ti-dak pe-das", example: "Saya tidak suka pedas.", exampleChinese: "我不喜欢辣的。" },
          { id: "v8d6", indonesian: "Enak sekali", chinese: "非常好吃", pronunciation: "e-nak se-ka-li", example: "Makanan ini enak sekali!", exampleChinese: "这道菜非常好吃！" },
        ],
        questions: [
          { id: "q8-d-1", type: "multiple_choice", question: "在餐厅想点餐，应该说？", options: ["Minta tagihan", "Saya ingin memesan", "Enak sekali", "Tidak pedas"], correctAnswer: "Saya ingin memesan", explanation: "Saya ingin memesan = 我想点餐，是点餐时的标准用语" },
          { id: "q8-d-2", type: "multiple_choice", question: "'Tagihan' 是什么意思？", options: ["菜单", "账单", "餐桌", "服务员"], correctAnswer: "账单", explanation: "Tagihan = 账单，结账时使用：Minta tagihan（请给我账单）" },
          { id: "q8-d-3", type: "multiple_choice", question: "如何表达食物很好吃？", options: ["Pedas sekali", "Enak sekali", "Mahal sekali", "Besar sekali"], correctAnswer: "Enak sekali", explanation: "Enak sekali = 非常好吃，sekali 在形容词后表示'非常'" },
        ]
      },
      {
        id: "lesson-8-5",
        title: "Dialog: Bertanya Arah",
        titleChinese: "对话：问路",
        description: "学习问路和指路的实用表达",
        xpReward: 30,
        vocabulary: [
          { id: "v8e1", indonesian: "Di mana...?", chinese: "...在哪里？", pronunciation: "di ma-na", example: "Di mana stasiun kereta?", exampleChinese: "火车站在哪里？" },
          { id: "v8e2", indonesian: "Belok kiri / kanan", chinese: "左转/右转", pronunciation: "be-lok ki-ri / ka-nan", example: "Belok kiri di lampu merah.", exampleChinese: "在红绿灯处左转。" },
          { id: "v8e3", indonesian: "Lurus terus", chinese: "一直走", pronunciation: "lu-rus te-rus", example: "Jalan lurus terus sekitar 500 meter.", exampleChinese: "一直走大约500米。" },
          { id: "v8e4", indonesian: "Dekat / Jauh", chinese: "近/远", pronunciation: "de-kat / ja-uh", example: "Apakah jauh dari sini?", exampleChinese: "离这里远吗？" },
          { id: "v8e5", indonesian: "Seberang / Sebelah", chinese: "对面/旁边", pronunciation: "se-be-rang / se-be-lah", example: "Di seberang jalan.", exampleChinese: "在马路对面。" },
        ],
        questions: [
          { id: "q8-e-1", type: "multiple_choice", question: "问'火车站在哪里'应该说？", options: ["Di mana stasiun kereta?", "Berapa jauh stasiun?", "Saya mau ke stasiun.", "Stasiun dekat sini."], correctAnswer: "Di mana stasiun kereta?", explanation: "Di mana = 在哪里，stasiun kereta = 火车站，这是标准问路句式" },
          { id: "q8-e-2", type: "multiple_choice", question: "'Belok kanan' 是什么意思？", options: ["左转", "右转", "直走", "停下"], correctAnswer: "右转", explanation: "Belok = 转，kanan = 右，kiri = 左，所以 belok kanan = 右转" },
          { id: "q8-e-3", type: "arrange_words", question: "排列成正确的问路句：'di / mana / hotel / Di / ini?'", options: ["Di", "mana", "hotel", "ini?"], correctAnswer: ["Di", "mana", "hotel", "ini?"], explanation: "Di mana hotel ini? = 这家酒店在哪里？" },
        ]
      },
    ]
  },
  // ============ 进阶单元 9 ============
  {
    id: "unit-9",
    title: "Bahasa Lisan & Formal",
    titleChinese: "口语与正式语",
    description: "区分印尼语口语与书面正式语的差异",
    icon: "🎙️",
    color: "#7C3AED",
    stage: "intermediate",
    lessons: [
      {
        id: "lesson-9-1",
        title: "Bahasa Gaul",
        titleChinese: "印尼语口语俚语",
        description: "学习日常生活中常用的口语表达",
        xpReward: 25,
        vocabulary: [
          { id: "v9a1", indonesian: "Gue / Gw", chinese: "我（口语）", pronunciation: "gue", example: "Gue mau pergi.", exampleChinese: "我要走了。（口语）" },
          { id: "v9a2", indonesian: "Lo / Lu", chinese: "你（口语）", pronunciation: "lo", example: "Lo mau ikut?", exampleChinese: "你要一起来吗？（口语）" },
          { id: "v9a3", indonesian: "Gimana", chinese: "怎么样（口语）", pronunciation: "gi-ma-na", example: "Gimana kabarnya?", exampleChinese: "你好吗？（口语）" },
          { id: "v9a4", indonesian: "Udah / Sudah", chinese: "已经（口语/正式）", pronunciation: "u-dah", example: "Gue udah makan.", exampleChinese: "我已经吃了。（口语）" },
          { id: "v9a5", indonesian: "Enggak / Tidak", chinese: "不/没有（口语/正式）", pronunciation: "eng-gak", example: "Enggak, saya tidak mau.", exampleChinese: "不，我不要。" },
          { id: "v9a6", indonesian: "Nih / Ini", chinese: "这个（口语/正式）", pronunciation: "nih", example: "Nih, buat lo.", exampleChinese: "这个，给你的。（口语）" },
        ],
        questions: [
          { id: "q9-a-1", type: "multiple_choice", question: "口语中'我'的说法是？", options: ["Saya", "Aku", "Gue", "Kami"], correctAnswer: "Gue", explanation: "Gue/Gw 是雅加达口语中'我'的说法，正式场合应使用 Saya" },
          { id: "q9-a-2", type: "multiple_choice", question: "'Gimana kabarnya?' 的正式说法是？", options: ["Apa kabar?", "Bagaimana kabarnya?", "Kabar baik?", "Gimana?"], correctAnswer: "Bagaimana kabarnya?", explanation: "Gimana 是 Bagaimana（怎么样）的口语缩略形式" },
          { id: "q9-a-3", type: "multiple_choice", question: "'Enggak' 在正式场合应替换为？", options: ["Bukan", "Tidak", "Jangan", "Belum"], correctAnswer: "Tidak", explanation: "Enggak 是口语，正式场合使用 Tidak 表示否定" },
        ]
      },
      {
        id: "lesson-9-2",
        title: "Bahasa Formal",
        titleChinese: "正式书面语",
        description: "学习商务和正式场合的标准用语",
        xpReward: 25,
        vocabulary: [
          { id: "v9b1", indonesian: "Dengan hormat", chinese: "尊敬的（信件开头）", pronunciation: "de-ngan hor-mat", example: "Dengan hormat, saya ingin mengajukan...", exampleChinese: "尊敬的，我想申请..." },
          { id: "v9b2", indonesian: "Mohon", chinese: "请/恳请（正式）", pronunciation: "mo-hon", example: "Mohon maaf atas keterlambatan.", exampleChinese: "请原谅迟到。" },
          { id: "v9b3", indonesian: "Mengajukan", chinese: "提出/申请", pronunciation: "meng-a-ju-kan", example: "Saya mengajukan lamaran kerja.", exampleChinese: "我提交工作申请。" },
          { id: "v9b4", indonesian: "Hormat saya", chinese: "此致敬礼（信件结尾）", pronunciation: "hor-mat sa-ya", example: "Hormat saya, Ahmad.", exampleChinese: "此致敬礼，Ahmad。" },
          { id: "v9b5", indonesian: "Bersama ini", chinese: "随函附上", pronunciation: "ber-sa-ma i-ni", example: "Bersama ini saya lampirkan CV.", exampleChinese: "随函附上我的简历。" },
        ],
        questions: [
          { id: "q9-b-1", type: "multiple_choice", question: "正式信件的开头用语是？", options: ["Halo", "Dengan hormat", "Hai", "Selamat pagi"], correctAnswer: "Dengan hormat", explanation: "Dengan hormat = 尊敬的，是印尼语正式信件的标准开头语" },
          { id: "q9-b-2", type: "multiple_choice", question: "'Mohon' 在正式场合表示？", options: ["感谢", "请/恳请", "祝贺", "介绍"], correctAnswer: "请/恳请", explanation: "Mohon 是正式的请求用语，比 Tolong 更正式，常用于书面语" },
        ]
      },
      {
        id: "lesson-9-3",
        title: "Dialog: Di Kantor",
        titleChinese: "对话：在办公室",
        description: "学习职场常用的印尼语表达",
        xpReward: 30,
        vocabulary: [
          { id: "v9c1", indonesian: "Rapat / Meeting", chinese: "会议", pronunciation: "ra-pat", example: "Rapat dimulai jam sembilan.", exampleChinese: "会议九点开始。" },
          { id: "v9c2", indonesian: "Laporan", chinese: "报告", pronunciation: "la-po-ran", example: "Tolong kirim laporan hari ini.", exampleChinese: "请今天发送报告。" },
          { id: "v9c3", indonesian: "Deadline / Batas waktu", chinese: "截止日期", pronunciation: "dead-line / ba-tas wak-tu", example: "Deadline-nya besok.", exampleChinese: "截止日期是明天。" },
          { id: "v9c4", indonesian: "Izin", chinese: "请假/许可", pronunciation: "i-zin", example: "Saya mau izin tidak masuk.", exampleChinese: "我想请假不来上班。" },
          { id: "v9c5", indonesian: "Presentasi", chinese: "演示/报告", pronunciation: "pre-sen-ta-si", example: "Presentasi saya sudah siap.", exampleChinese: "我的演示已经准备好了。" },
        ],
        questions: [
          { id: "q9-c-1", type: "multiple_choice", question: "'Rapat' 是什么意思？", options: ["报告", "会议", "演示", "请假"], correctAnswer: "会议", explanation: "Rapat = 会议，也可以用 Meeting（借用英语）" },
          { id: "q9-c-2", type: "multiple_choice", question: "如何说'我想请假'？", options: ["Saya mau rapat", "Saya mau izin", "Saya mau laporan", "Saya mau presentasi"], correctAnswer: "Saya mau izin", explanation: "Izin = 许可/请假，Saya mau izin = 我想请假" },
        ]
      },
      {
        id: "lesson-9-4",
        title: "Ungkapan Perasaan",
        titleChinese: "情感表达",
        description: "学习表达各种情绪和感受的词汇",
        xpReward: 25,
        vocabulary: [
          { id: "v9d1", indonesian: "Senang / Bahagia", chinese: "高兴/幸福", pronunciation: "se-nang / ba-ha-gi-a", example: "Saya sangat senang bertemu kamu.", exampleChinese: "我很高兴见到你。" },
          { id: "v9d2", indonesian: "Sedih", chinese: "悲伤/难过", pronunciation: "se-dih", example: "Dia terlihat sedih hari ini.", exampleChinese: "他今天看起来很难过。" },
          { id: "v9d3", indonesian: "Marah", chinese: "生气", pronunciation: "ma-rah", example: "Jangan marah, ini bukan salahmu.", exampleChinese: "别生气，这不是你的错。" },
          { id: "v9d4", indonesian: "Takut", chinese: "害怕", pronunciation: "ta-kut", example: "Saya takut ketinggian.", exampleChinese: "我害怕高处。" },
          { id: "v9d5", indonesian: "Bingung", chinese: "困惑/迷茫", pronunciation: "bi-ngung", example: "Saya bingung dengan soal ini.", exampleChinese: "我对这道题感到困惑。" },
          { id: "v9d6", indonesian: "Kaget / Terkejut", chinese: "惊讶", pronunciation: "ka-get / ter-ke-jut", example: "Saya kaget mendengar berita itu.", exampleChinese: "听到那个消息我很惊讶。" },
        ],
        questions: [
          { id: "q9-d-1", type: "multiple_choice", question: "'Saya sangat senang' 是什么意思？", options: ["我很难过", "我很高兴", "我很生气", "我很害怕"], correctAnswer: "我很高兴", explanation: "Senang = 高兴，sangat = 非常，整句 = 我非常高兴" },
          { id: "q9-d-2", type: "multiple_choice", question: "表达'我很困惑'应该说？", options: ["Saya marah", "Saya takut", "Saya bingung", "Saya sedih"], correctAnswer: "Saya bingung", explanation: "Bingung = 困惑/迷茫，Saya bingung = 我很困惑" },
        ]
      },
      {
        id: "lesson-9-5",
        title: "Dialog: Di Hotel",
        titleChinese: "对话：在酒店",
        description: "学习在酒店入住和咨询的实用对话",
        xpReward: 30,
        vocabulary: [
          { id: "v9e1", indonesian: "Check in / Check out", chinese: "入住/退房", pronunciation: "chek in / chek aut", example: "Saya ingin check in.", exampleChinese: "我想办理入住。" },
          { id: "v9e2", indonesian: "Kamar", chinese: "房间", pronunciation: "ka-mar", example: "Kamar saya di lantai tiga.", exampleChinese: "我的房间在三楼。" },
          { id: "v9e3", indonesian: "Reservasi", chinese: "预订", pronunciation: "re-ser-va-si", example: "Saya sudah reservasi atas nama Ahmad.", exampleChinese: "我已经以 Ahmad 的名字预订了。" },
          { id: "v9e4", indonesian: "Fasilitas", chinese: "设施", pronunciation: "fa-si-li-tas", example: "Apa saja fasilitas yang tersedia?", exampleChinese: "有哪些可用设施？" },
          { id: "v9e5", indonesian: "Sarapan termasuk", chinese: "含早餐", pronunciation: "sa-ra-pan ter-ma-suk", example: "Apakah sarapan termasuk?", exampleChinese: "含早餐吗？" },
        ],
        questions: [
          { id: "q9-e-1", type: "multiple_choice", question: "办理入住应该说？", options: ["Saya ingin check out", "Saya ingin check in", "Saya ingin reservasi", "Saya ingin kamar"], correctAnswer: "Saya ingin check in", explanation: "Check in = 入住，Saya ingin check in = 我想办理入住" },
          { id: "q9-e-2", type: "multiple_choice", question: "'Apakah sarapan termasuk?' 是什么意思？", options: ["早餐在哪里？", "早餐几点？", "含早餐吗？", "早餐多少钱？"], correctAnswer: "含早餐吗？", explanation: "Sarapan = 早餐，termasuk = 包含/含，整句 = 含早餐吗？" },
        ]
      },
    ]
  },
  // ============ 进阶单元 10 ============
  {
    id: "unit-10",
    title: "Budaya & Topik Lanjutan",
    titleChinese: "文化与进阶话题",
    description: "了解印尼文化习俗，掌握进阶话题表达",
    icon: "🏛️",
    color: "#059669",
    stage: "intermediate",
    lessons: [
      {
        id: "lesson-10-1",
        title: "Budaya Indonesia",
        titleChinese: "印尼文化习俗",
        description: "了解印尼的传统文化、节日和礼仪",
        xpReward: 25,
        vocabulary: [
          { id: "v10a1", indonesian: "Batik", chinese: "蜡染布（印尼国宝）", pronunciation: "ba-tik", example: "Batik adalah warisan budaya Indonesia.", exampleChinese: "蜡染布是印尼的文化遗产。" },
          { id: "v10a2", indonesian: "Lebaran / Idul Fitri", chinese: "开斋节", pronunciation: "le-ba-ran", example: "Selamat Lebaran!", exampleChinese: "开斋节快乐！" },
          { id: "v10a3", indonesian: "Gotong royong", chinese: "互助合作精神", pronunciation: "go-tong ro-yong", example: "Gotong royong adalah nilai budaya Indonesia.", exampleChinese: "互助合作是印尼的文化价值观。" },
          { id: "v10a4", indonesian: "Wayang", chinese: "皮影戏", pronunciation: "wa-yang", example: "Pertunjukan wayang sangat menarik.", exampleChinese: "皮影戏表演非常精彩。" },
          { id: "v10a5", indonesian: "Adat istiadat", chinese: "风俗习惯", pronunciation: "a-dat is-ti-a-dat", example: "Setiap daerah punya adat istiadat berbeda.", exampleChinese: "每个地区都有不同的风俗习惯。" },
        ],
        questions: [
          { id: "q10-a-1", type: "multiple_choice", question: "'Batik' 是什么？", options: ["印尼传统舞蹈", "印尼蜡染布", "印尼传统食物", "印尼皮影戏"], correctAnswer: "印尼蜡染布", explanation: "Batik 是印尼著名的蜡染布艺术，已被列为联合国教科文组织非物质文化遗产" },
          { id: "q10-a-2", type: "multiple_choice", question: "'Selamat Lebaran!' 是什么意思？", options: ["新年快乐", "生日快乐", "开斋节快乐", "圣诞快乐"], correctAnswer: "开斋节快乐", explanation: "Lebaran/Idul Fitri 是印尼最重要的节日，即伊斯兰教的开斋节" },
        ]
      },
      {
        id: "lesson-10-2",
        title: "Makanan Indonesia",
        titleChinese: "印尼美食",
        description: "学习印尼著名食物的名称和描述",
        xpReward: 25,
        vocabulary: [
          { id: "v10b1", indonesian: "Nasi goreng", chinese: "炒饭", pronunciation: "na-si go-reng", example: "Nasi goreng adalah makanan favorit saya.", exampleChinese: "炒饭是我最喜欢的食物。" },
          { id: "v10b2", indonesian: "Rendang", chinese: "巴东牛肉", pronunciation: "ren-dang", example: "Rendang berasal dari Sumatera Barat.", exampleChinese: "巴东牛肉来自西苏门答腊。" },
          { id: "v10b3", indonesian: "Sate", chinese: "沙爹（烤串）", pronunciation: "sa-te", example: "Sate ayam sangat lezat.", exampleChinese: "鸡肉沙爹非常美味。" },
          { id: "v10b4", indonesian: "Gado-gado", chinese: "印尼花生酱蔬菜沙拉", pronunciation: "ga-do ga-do", example: "Gado-gado adalah salad khas Indonesia.", exampleChinese: "Gado-gado 是印尼特色沙拉。" },
          { id: "v10b5", indonesian: "Sambal", chinese: "辣椒酱", pronunciation: "sam-bal", example: "Makan tanpa sambal kurang lengkap.", exampleChinese: "吃饭没有辣椒酱不完整。" },
          { id: "v10b6", indonesian: "Es teh manis", chinese: "甜冰茶", pronunciation: "es teh ma-nis", example: "Satu es teh manis, please.", exampleChinese: "一杯甜冰茶，谢谢。" },
        ],
        questions: [
          { id: "q10-b-1", type: "multiple_choice", question: "'Nasi goreng' 是什么食物？", options: ["炒面", "炒饭", "炒蔬菜", "炒肉"], correctAnswer: "炒饭", explanation: "Nasi = 米饭，goreng = 炒，nasi goreng = 炒饭，是印尼最著名的食物之一" },
          { id: "q10-b-2", type: "multiple_choice", question: "'Sambal' 是什么？", options: ["甜酱", "辣椒酱", "花生酱", "酱油"], correctAnswer: "辣椒酱", explanation: "Sambal 是印尼辣椒酱，几乎每道印尼菜都会搭配" },
          { id: "q10-b-3", type: "multiple_choice", question: "Rendang 来自哪里？", options: ["爪哇", "巴厘岛", "西苏门答腊", "加里曼丹"], correctAnswer: "西苏门答腊", explanation: "Rendang 是来自西苏门答腊巴东地区的传统牛肉料理，被评为世界最美味食物之一" },
        ]
      },
      {
        id: "lesson-10-3",
        title: "Dialog: Berbelanja",
        titleChinese: "对话：购物讨价还价",
        description: "学习在传统市场购物和讨价还价",
        xpReward: 30,
        vocabulary: [
          { id: "v10c1", indonesian: "Berapa harganya?", chinese: "多少钱？", pronunciation: "be-ra-pa har-ga-nya", example: "Berapa harganya baju ini?", exampleChinese: "这件衣服多少钱？" },
          { id: "v10c2", indonesian: "Mahal / Murah", chinese: "贵/便宜", pronunciation: "ma-hal / mu-rah", example: "Terlalu mahal, bisa lebih murah?", exampleChinese: "太贵了，能便宜点吗？" },
          { id: "v10c3", indonesian: "Tawar / Menawar", chinese: "讨价还价", pronunciation: "ta-war / me-na-war", example: "Di pasar tradisional bisa menawar.", exampleChinese: "在传统市场可以讨价还价。" },
          { id: "v10c4", indonesian: "Diskon / Potongan harga", chinese: "折扣", pronunciation: "dis-kon", example: "Ada diskon tidak?", exampleChinese: "有折扣吗？" },
          { id: "v10c5", indonesian: "Bungkus / Bawa pulang", chinese: "打包/带走", pronunciation: "bung-kus", example: "Bungkus saja, terima kasih.", exampleChinese: "打包就好，谢谢。" },
        ],
        questions: [
          { id: "q10-c-1", type: "multiple_choice", question: "问价格应该说？", options: ["Di mana harganya?", "Berapa harganya?", "Apa harganya?", "Siapa harganya?"], correctAnswer: "Berapa harganya?", explanation: "Berapa = 多少，harga = 价格，-nya 是后缀，整句 = 多少钱？" },
          { id: "q10-c-2", type: "multiple_choice", question: "想讨价还价说'能便宜点吗'？", options: ["Lebih mahal?", "Bisa lebih murah?", "Ada diskon?", "Berapa harganya?"], correctAnswer: "Bisa lebih murah?", explanation: "Bisa = 可以，lebih = 更，murah = 便宜，整句 = 可以更便宜吗？" },
        ]
      },
      {
        id: "lesson-10-4",
        title: "Topik: Lingkungan",
        titleChinese: "话题：环境与自然",
        description: "学习讨论环境和自然话题的词汇",
        xpReward: 30,
        vocabulary: [
          { id: "v10d1", indonesian: "Lingkungan hidup", chinese: "生态环境", pronunciation: "ling-kung-an hi-dup", example: "Kita harus menjaga lingkungan hidup.", exampleChinese: "我们必须保护生态环境。" },
          { id: "v10d2", indonesian: "Hutan hujan tropis", chinese: "热带雨林", pronunciation: "hu-tan hu-jan tro-pis", example: "Indonesia punya hutan hujan tropis terbesar.", exampleChinese: "印尼拥有最大的热带雨林。" },
          { id: "v10d3", indonesian: "Sampah / Limbah", chinese: "垃圾/废物", pronunciation: "sam-pah / lim-bah", example: "Jangan buang sampah sembarangan.", exampleChinese: "不要乱扔垃圾。" },
          { id: "v10d4", indonesian: "Daur ulang", chinese: "回收利用", pronunciation: "da-ur u-lang", example: "Daur ulang sampah plastik itu penting.", exampleChinese: "回收塑料垃圾很重要。" },
          { id: "v10d5", indonesian: "Perubahan iklim", chinese: "气候变化", pronunciation: "pe-ru-bah-an ik-lim", example: "Perubahan iklim adalah masalah global.", exampleChinese: "气候变化是全球性问题。" },
        ],
        questions: [
          { id: "q10-d-1", type: "multiple_choice", question: "'Hutan hujan tropis' 是什么意思？", options: ["热带沙漠", "热带雨林", "热带草原", "热带海洋"], correctAnswer: "热带雨林", explanation: "Hutan = 森林，hujan = 雨，tropis = 热带，合起来 = 热带雨林" },
          { id: "q10-d-2", type: "multiple_choice", question: "'Daur ulang' 是什么意思？", options: ["垃圾处理", "回收利用", "环境保护", "气候变化"], correctAnswer: "回收利用", explanation: "Daur ulang = 回收利用，是环保的重要概念" },
        ]
      },
      {
        id: "lesson-10-5",
        title: "Ujian Akhir",
        titleChinese: "综合测验",
        description: "综合测验：检验入门到进阶的全部学习成果",
        xpReward: 50,
        vocabulary: [
          { id: "v10e1", indonesian: "Selamat belajar!", chinese: "学习愉快！", pronunciation: "se-la-mat be-la-jar", example: "Selamat belajar bahasa Indonesia!", exampleChinese: "学习印尼语愉快！" },
          { id: "v10e2", indonesian: "Terima kasih banyak", chinese: "非常感谢", pronunciation: "te-ri-ma ka-sih ba-nyak", example: "Terima kasih banyak atas bantuannya.", exampleChinese: "非常感谢您的帮助。" },
          { id: "v10e3", indonesian: "Sampai jumpa lagi", chinese: "再见", pronunciation: "sam-pai jum-pa la-gi", example: "Sampai jumpa lagi besok!", exampleChinese: "明天再见！" },
          { id: "v10e4", indonesian: "Saya bisa berbahasa Indonesia", chinese: "我会说印尼语", pronunciation: "sa-ya bi-sa ber-ba-ha-sa in-do-ne-si-a", example: "Sekarang saya bisa berbahasa Indonesia!", exampleChinese: "现在我会说印尼语了！" },
          { id: "v10e5", indonesian: "Terus berlatih!", chinese: "继续练习！", pronunciation: "te-rus ber-la-tih", example: "Terus berlatih setiap hari!", exampleChinese: "每天继续练习！" },
        ],
        questions: [
          { id: "q10-e-1", type: "multiple_choice", question: "印尼语中'非常感谢'怎么说？", options: ["Terima kasih", "Terima kasih banyak", "Sama-sama", "Maaf"], correctAnswer: "Terima kasih banyak", explanation: "Terima kasih = 谢谢，banyak = 很多，合起来 = 非常感谢" },
          { id: "q10-e-2", type: "multiple_choice", question: "'Sampai jumpa lagi' 是什么意思？", options: ["你好", "再见", "谢谢", "对不起"], correctAnswer: "再见", explanation: "Sampai = 直到，jumpa = 见面，lagi = 再次，合起来 = 再见（下次再见）" },
          { id: "q10-e-3", type: "multiple_choice", question: "以下哪个是正确的印尼语问候？", options: ["Selamat pagi（早上好）", "Nasi goreng（炒饭）", "Terima kasih（谢谢）", "Maaf（对不起）"], correctAnswer: "Selamat pagi（早上好）", explanation: "Selamat pagi = 早上好，是印尼语最基本的问候语之一" },
          { id: "q10-e-4", type: "arrange_words", question: "排列成完整句子：'Indonesia / bisa / berbahasa / Saya'", options: ["Saya", "bisa", "berbahasa", "Indonesia."], correctAnswer: ["Saya", "bisa", "berbahasa", "Indonesia."], explanation: "Saya bisa berbahasa Indonesia. = 我会说印尼语。" },
          { id: "q10-e-5", type: "multiple_choice", question: "完成学习后应该怎么做？", options: ["停止学习", "Terus berlatih（继续练习）", "忘记所学", "不再使用"], correctAnswer: "Terus berlatih（继续练习）", explanation: "Terus berlatih = 继续练习！语言学习需要持续练习才能掌握。恭喜您完成所有课程！" },
        ]
      },
    ]
  },
];

export function getAllVocabulary(): import('./courseData').Vocabulary[] {
  const allVocab: import('./courseData').Vocabulary[] = [];
  courseUnits.forEach(unit => {
    unit.lessons.forEach(lesson => {
      lesson.vocabulary.forEach(vocab => {
        if (!allVocab.find(v => v.indonesian === vocab.indonesian)) {
          allVocab.push(vocab);
        }
      });
    });
  });
  return allVocab;
}

export function getUnitById(unitId: string): Unit | undefined {
  return courseUnits.find(u => u.id === unitId);
}

export function getLessonById(unitId: string, lessonId: string): Lesson | undefined {
  const unit = getUnitById(unitId);
  return unit?.lessons.find(l => l.id === lessonId);
}

export function getBeginnerUnits(): Unit[] {
  return courseUnits.filter(u => u.stage === "beginner");
}

export function getIntermediateUnits(): Unit[] {
  return courseUnits.filter(u => u.stage === "intermediate");
}
