import { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    year: "Mil. avv. IV asr",
    era: { uz: "Qadimgi Dunyo", ru: "Античность", en: "Ancient World" },
    title: {
      uz: "Aristotel va «Oikonomika»",
      ru: "Аристотель и «Экономика»",
      en: "Aristotle & Oikonomia"
    },
    description: {
      uz: "Tabiiy iqtisodiyot va foyda ketidan quvuvchi xrematistika o'rtasidagi farq ilk bor asoslandi.",
      ru: "Введено разграничение между истинной экономикой (удовлетворением нужд) и хрематистикой (наживой).",
      en: "The foundational boundary between natural household provision and speculative chrematistics was established."
    },
    topicId: 1,
    scholar: "Aristotel"
  },
  {
    year: "IX — X asrlar",
    era: { uz: "Sharq Uyg'onishi", ru: "Восточный Ренессанс", en: "Eastern Renaissance" },
    title: {
      uz: "Al-Xorazmiy va Forobiy ta'limotlari",
      ru: "Труды Аль-Хорезми и Аль-Фараби",
      en: "Al-Khwarizmi & Al-Farabi"
    },
    description: {
      uz: "Savdo-sotiq hisob-kitoblarining algebraik asoslari va adolatli «Fozil shahar» ijtimoiy modeli yaratildi.",
      ru: "Алгебраические алгоритмы торговых расчетов и философская концепция добродетельного города.",
      en: "Algebraic foundations for commercial accounts and the cooperative 'Virtuous City' model."
    },
    topicId: 2,
    scholar: "Forobiy, Al-Xorazmiy"
  },
  {
    year: "XIV asr oxiri",
    era: { uz: "Temuriylar Davri", ru: "Эпоха Тимуридов", en: "Timurid Era" },
    title: {
      uz: "«Temur tuzuklari» va soliq islohoti",
      ru: "«Уложения Тимура» и налоговая реформа",
      en: "Institutes of Timur & Fiscal Reform"
    },
    description: {
      uz: "Ipak yo'li savdosi himoyasi, dehqonlarga uch yillik soliq imtiyozi va adolatli davlat boshqaruvi kodeksi.",
      ru: "Безопасность Шелкового пути, трехлетние налоговые каникулы за освоение земель и законность.",
      en: "Silk Road trade safety, 3-year tax holidays for farmers, and codified justice."
    },
    topicId: 2,
    scholar: "Amir Temur"
  },
  {
    year: "1615-yil",
    era: { uz: "Merkantilizm Davri", ru: "Эпоха Меркантилизма", en: "Mercantilist Era" },
    title: {
      uz: "«Siyosiy iqtisod» atamasining tug'ilishi",
      ru: "Рождение термина «Политическая экономия»",
      en: "Coining of 'Political Economy'"
    },
    description: {
      uz: "Antuan Monkretyen o'z traktatida fanga birinchi marta «Siyosiy iqtisod» nomini berdi.",
      ru: "Антуан де Монкретьен опубликовал первый в истории «Трактат политической экономии».",
      en: "Antoine de Montchrétien published the first treatise dedicated to 'Political Economy'."
    },
    topicId: 3,
    scholar: "Antuan Monkretyen"
  },
  {
    year: "1758-yil",
    era: { uz: "Fiziokratizm", ru: "Физиократия", en: "Physiocracy" },
    title: {
      uz: "Fransua Kene: «Iqtisodiy jadval»",
      ru: "Франсуа Кенэ: «Экономическая таблица»",
      en: "François Quesnay: Tableau Économique"
    },
    description: {
      uz: "Iqtisodiyotda boylik va tovarlar aylanishining birinchi makroiqtisodiy sxemasi yaratildi.",
      ru: "Первая в науке макроэкономическая модель кругооборота товаров и денег между классами.",
      en: "First macroeconomic diagram depicting circular flow of reproduction between social classes."
    },
    topicId: 4,
    scholar: "Fransua Kene"
  },
  {
    year: "1776-yil",
    era: { uz: "Klassik Siyosiy Iqtisod", ru: "Классическая политэкономия", en: "Classical Economics" },
    title: {
      uz: "Adam Smit va «Xalqlar boyligi»",
      ru: "Адам Смит и «Богатство народов»",
      en: "Adam Smith: The Wealth of Nations"
    },
    description: {
      uz: "Bozorning «ko'rinmas qo'li», mehnat taqsimoti va erkin raqobat iqtisodiyot mustaqil faniga asos bo'ldi.",
      ru: "«Невидимая рука» рынка, разделение труда и теоретический манифест свободного капитализма.",
      en: "The 'invisible hand', division of labor, and competitive free trade established economics as an autonomous science."
    },
    topicId: 5,
    scholar: "Adam Smit"
  },
  {
    year: "1817-yil",
    era: { uz: "Klassik Maktab Cho'qqisi", ru: "Расцвет классицизма", en: "Classical Apex" },
    title: {
      uz: "Devid Rikardo: Nisbiy ustunlik va renta",
      ru: "Давид Рикардо: Сравнительные преимущества и рента",
      en: "David Ricardo: Comparative Advantage & Rent"
    },
    description: {
      uz: "Differensial yer rentasi va xalqaro savdoda qiyosiy xarajatlar qonuni kashf qilindi.",
      ru: "Теория дифференциальной ренты и закон сравнительных издержек во внешней торговле.",
      en: "Differential ground rent and the law of comparative advantage in global commerce."
    },
    topicId: 6,
    scholar: "Devid Rikardo"
  },
  {
    year: "1867-yil",
    era: { uz: "Marksizm", ru: "Марксизм", en: "Marxism" },
    title: {
      uz: "Karl Marks: «Kapital»ning 1-jildi",
      ru: "Карл Маркс: Первый том «Капитала»",
      en: "Karl Marx: Das Kapital Volume 1"
    },
    description: {
      uz: "Qo'shimcha qiymat siri va yollanma mehnatning ekspluatatsiya qilinishi anatomiyasi yoritildi.",
      ru: "Раскрыт механизм извлечения прибавочной стоимости и противоречий накопления капитала.",
      en: "Surplus value extraction and internal structural contradictions of capital accumulation."
    },
    topicId: 8,
    scholar: "Karl Marks"
  },
  {
    year: "1871-yil",
    era: { uz: "Marjinal Inqilob", ru: "Маржинальная революция", en: "Marginal Revolution" },
    title: {
      uz: "Chegaraviy naflilik nazariyasi",
      ru: "Теория предельной полезности",
      en: "Theory of Marginal Utility"
    },
    description: {
      uz: "Menger, Jevons va Valras narxning subyektiv baholanishini va marjinal tahlilni boshlab berdilar.",
      ru: "Менгер, Джевонс и Вальрас доказали зависимость цены от предельной субъективной полезности.",
      en: "Menger, Jevons, and Walras pioneered incremental utility and mathematical equilibrium."
    },
    topicId: 9,
    scholar: "Karl Menger, Leon Valras"
  },
  {
    year: "1890-yil",
    era: { uz: "Neoklassik Sintez", ru: "Неоклассический синтез", en: "Neoclassical Synthesis" },
    title: {
      uz: "Alfred Marshall: «Marshall qaychisi»",
      ru: "Альфред Маршалл: «Принципы экономикс»",
      en: "Alfred Marshall: Principles of Economics"
    },
    description: {
      uz: "Talab va taklif qonunlari birlashtirildi, muvozanat narxi va elastiklik tushunchalari kiritildi.",
      ru: "Синтез спроса и предложения, графический крест цен и эластичность.",
      en: "Unification of supply and demand curves, equilibrium price, and elasticity metrics."
    },
    topicId: 10,
    scholar: "Alfred Marshall"
  },
  {
    year: "1936-yil",
    era: { uz: "Keynschilik Inqilobi", ru: "Кейнсианская революция", en: "Keynesian Revolution" },
    title: {
      uz: "Keyns: «Umumiy nazariya»",
      ru: "Дж.М. Кейнс: «Общая теория»",
      en: "Keynes: The General Theory"
    },
    description: {
      uz: "Davlatning inqirozga qarshi faol aralashuvi va yalpi talabni investitsiyalar bilan qo'llab-quvvatlash tizimi.",
      ru: "Обоснование государственного стимулирования совокупного спроса и преодоления депрессий.",
      en: "Anti-crisis state fiscal stimulus and aggregate demand management to defeat depression."
    },
    topicId: 11,
    scholar: "Jon Meynard Keyns"
  },
  {
    year: "1960 — 1980-yillar",
    era: { uz: "Monetarizm", ru: "Монетаризм", en: "Monetarism" },
    title: {
      uz: "Milton Fridman va Chikago maktabi",
      ru: "Милтон Фридман и денежное правило",
      en: "Milton Friedman & The Monetary Rule"
    },
    description: {
      uz: "Inflyatsiyaning pul omili ekani isbotlandi, «monetar qoida» va erkin bozor qayta tiklandi.",
      ru: "Торжество количественной теории денег и отказ от инфляционного бюджетного накачивания.",
      en: "Quantity theory of money reaffirmed; inflation branded a purely monetary phenomenon."
    },
    topicId: 12,
    scholar: "Milton Fridman"
  },
  {
    year: "2002 — Hozirgi davr",
    era: { uz: "Xulq-atvor va Axborot Iqtisodiyoti", ru: "Поведенческая экономика", en: "Behavioral & Information Economics" },
    title: {
      uz: "Kaneman, Stiglits va Raqamli Asr",
      ru: "Канеман, Стиглиц и цифровой век",
      en: "Kahneman, Stiglitz & Digital Era"
    },
    description: {
      uz: "Inson psixologiyasi, axborot asimmetriyasi va raqamli bozorlar zamonaviy iqtisodiyotni yangiladi.",
      ru: "Анализ когнитивных искажений, асимметрии данных и платформенной экономики.",
      en: "Cognitive heuristics, asymmetric information, platform economics, and green transitions."
    },
    topicId: 14,
    scholar: "Daniel Kaneman, Jozef Stiglits"
  },
  {
    year: "2017 — 2030-yillar",
    era: { uz: "Yangi O'zbekiston", ru: "Новый Узбекистан", en: "New Uzbekistan" },
    title: {
      uz: "Erkin bozor va Yangi O'zbekiston islohotlari",
      ru: "Реформы Нового Узбекистана",
      en: "New Uzbekistan Market Modernization"
    },
    description: {
      uz: "Valyuta konvertatsiyasi, tadbirkorlik erkinligi, xususiy mulk kafolati va raqamli modernizatsiya.",
      ru: "Свободная конвертация, защита частной собственности, сокращение бедности и цифровизация.",
      en: "Currency convertibility, entrepreneurship guarantees, poverty reduction, and digital transition."
    },
    topicId: 15,
    scholar: "Shavkat Mirziyoyev"
  }
];
