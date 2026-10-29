import { Topic } from '../types';

export const topicsPart1: Topic[] = [
  {
    id: 1,
    numberStr: "01",
    title: {
      uz: "Iqtisodiy ta'limotlar tarixining predmeti va usullari",
      ru: "Предмет и методы истории экономических учений",
      en: "Subject Matter and Methods of the History of Economic Thought"
    },
    period: {
      uz: "Metodologik asoslar (Umumiy davr)",
      ru: "Методологические основы (Общий период)",
      en: "Methodological Foundations (General)"
    },
    scholarsSummary: {
      uz: "Aristotel, Adam Smit, Karl Marks, Yozef Shumpeter",
      ru: "Аристотель, Адам Смит, Карл Маркс, Йозеф Шумпетер",
      en: "Aristotle, Adam Smith, Karl Marx, Joseph Schumpeter"
    },
    iconName: "Compass",
    shortDesc: {
      uz: "Iqtisodiy tafakkurning shakllanish qonuniyatlari, evolyutsion va inqilobiy yondashuvlar, iqtisodiy tahlil usullari.",
      ru: "Закономерности формирования экономической мысли, эволюционный и революционный подходы, методы анализа.",
      en: "Evolutionary and paradigm-shift patterns in economic thought and foundational analytical methodology."
    },
    scholars: [
      {
        id: "aristotle-intro",
        name: "Aristotel (Aristotle)",
        years: "Mil. avv. 384 – 322",
        country: { uz: "Qadimgi Yunoniston (Afina)", ru: "Древняя Греция (Афины)", en: "Ancient Greece (Athens)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
        title: { uz: "Qadimgi dunyo qomuschisi", ru: "Энциклопедист античности", en: "Ancient Polymath & Philosopher" },
        quote: {
          uz: "Iqtisodiyot — bu inson uchun zarur bo'lgan haqiqiy boyliklarni yaratish san'atidir.",
          ru: "Экономика есть искусство приобретения необходимых для жизни благ.",
          en: "The art of acquisition is natural when directed to providing the necessities of life."
        },
        majorWorks: ["Nikomax axloqi", "Siyosat (Politika)"]
      },
      {
        id: "smith-intro",
        name: "Adam Smit (Adam Smith)",
        years: "1723 – 1790",
        country: { uz: "Shotlandiya / Buyuk Britaniya", ru: "Шотландия / Великобритания", en: "Scotland / Great Britain" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adam_Smith_The_Muir_portrait.jpg",
        title: { uz: "Klassik siyosiy iqtisod otasi", ru: "Отец классической политэкономии", en: "Father of Modern Economics" },
        quote: {
          uz: "Ko'rinmas qo'l har bir shaxsiy manfaatni umumiy jamiyat boyligiga xizmat qildiradi.",
          ru: "Невидимая рука рынка направляет личный интерес на благо всего общества.",
          en: "Led by an invisible hand to promote an end which was no part of his intention."
        },
        majorWorks: ["Xalqlar boyligi (1776)", "Axloqiy hissiyotlar nazariyasi (1759)"]
      }
    ],
    detail: {
      introduction: {
        uz: "Iqtisodiy ta'limotlar tarixi fani insoniyat jamiyatining turli bosqichlarida iqtisodiy hodisalar, qonunlar, tovar-pul munosabatlari va bozor mexanizmlari haqidagi qarashlarning kelib chiqishi, rivojlanishi va bir-birining o'rnini egallashini tadqiq etadi. Bu fan orqali bugungi zamonaviy iqtisodiyotdagi inflyatsiya, soliq, erkin savdo, pul-kredit siyosati kabi tushunchalarning qanday evolyutsiya bosqichlarini bosib o'tganligini anglab yetish mumkin.",
        ru: "История экономических учений изучает генезис, становление и смену парадигм и взглядов на экономические процессы, стоимость, рынок и государственное регулирование на различных этапах цивилизации. Эта фундаментальная дисциплина объясняет корни современных макро- и микроэкономических теорий.",
        en: "The history of economic thought studies the genesis, evolution, and replacement of theories explaining value, markets, money, and state intervention across human civilization. It provides essential context for modern economic principles."
      },
      historicalContext: {
        uz: "Iqtisodiy fikrlar ibtidoiy jamoa tuzumi inqirozidan boshlab qadimgi sivilizatsiyalar (Misr, Bobil, Yunoniston, Xitoy, Hindiston)da axloqiy va huquqiy me'yorlar shaklida paydo bo'lgan. XVII-XVIII asrlarga kelib, kapitalizmning vujudga kelishi bilan alohida mustaqil fanga aylandi.",
        ru: "Экономическая мысль зародилась в форме этико-правовых заповедей древних цивилизаций (Египет, Месопотамия, Греция, Восток), а с развитием мануфактур и рыночных отношений в XVII–XVIII вв. оформилась в самостоятельную науку.",
        en: "Economic thought originated as moral and legal codes in ancient civilizations before solidifying into an autonomous academic science during the 17th and 18th centuries with the rise of commercial capitalism."
      },
      coreIdeas: [
        {
          uz: "Kumulyativ (uzluksiz to'planish) va paradigmal (inqilobiy o'zgarishlar) rivojlanish tamoyili.",
          ru: "Кумулятивный (накопительный) и парадигмальный (революционный) принципы развития науки.",
          en: "Cumulative accumulation and paradigm shift models in scientific evolution."
        },
        {
          uz: "Tarixiy va mantiqiy usullarning uyg'unligi: nazariyani o'z davrining moddiy sharoitlari bilan bog'liq holda o'rganish.",
          ru: "Единство исторического и логического методов: анализ теорий в контексте материальных условий их эпохи.",
          en: "Unity of historical and logical methods: evaluating doctrines within their material context."
        },
        {
          uz: "Iqtisodiyot va xrematistika farqi (tabiiy ehtiyojlar qondirilishi vs. boylik to'plash hissi).",
          ru: "Различие экономики и хрематистики (удовлетворение потребностей против неограниченного обогащения).",
          en: "Distinction between economics (genuine wealth provision) and chrematistics (speculative accumulation)."
        }
      ],
      significance: {
        uz: "O'tmishdagi iqtisodiy tajriba va nazariyalarni bilmasdan turib zamonaviy global inqirozlarni bartaraf etish, oqilona pul va soliq siyosatini ishlab chiqish mumkin emas.",
        ru: "Без знания предыстории экономических концепций невозможно разработать эффективные антикризисные меры и сбалансированную государственную политику.",
        en: "Understanding the genealogy of economic concepts is indispensable for crafting effective modern policy and comprehending market fluctuations."
      }
    },
    keyTerms: [
      {
        term: { uz: "Paradigma", ru: "Парадигма", en: "Paradigm" },
        definition: {
          uz: "Muayyan davrda ilmiy jamoatchilik tomonidan e'tirof etilgan nazariy qoidalar va tadqiqot usullari tizimi.",
          ru: "Принятая научным сообществом система теоретических взглядов и стандартов исследования.",
          en: "A universally recognized scientific framework that provides model problems and solutions to a community."
        }
      },
      {
        term: { uz: "Ekonomiks", ru: "Экономикс", en: "Economics" },
        definition: {
          uz: "Cheklangan resurslardan cheksiz inson ehtiyojlarini samarali qondirish yo'llarini o'rganuvchi fan.",
          ru: "Наука о рациональном использовании редких ресурсов для удовлетворения безграничных потребностей.",
          en: "The study of how individuals and societies allocate scarce resources to satisfy unlimited desires."
        }
      },
      {
        term: { uz: "Iqtisodiy qonun", ru: "Экономический закон", en: "Economic Law" },
        definition: {
          uz: "Iqtisodiy hodisalar va jarayonlar o'rtasidagi barqaror, doimiy takrorlanuvchi sabab-oqibat aloqadorligi.",
          ru: "Существенные, устойчивые, повторяющиеся причинно-следственные связи экономических явлений.",
          en: "Persistent, regular cause-and-effect relationships governing economic behaviors and outcomes."
        }
      }
    ],
    famousWorks: [
      {
        title: "The History of Economic Analysis",
        year: "1954",
        author: "Joseph Schumpeter",
        description: {
          uz: "Iqtisodiy nazariyalar evolyutsiyasining eng to'liq va monumental ensiklopedik asari.",
          ru: "Фундаментальный монументальный труд по развитию аналитических инструментов экономической мысли.",
          en: "A monumental encyclopedic assessment of analytical techniques and theoretical milestones."
        }
      }
    ],
    interestingFact: {
      uz: "Iqtisodiyot («Oikonomia») so'zi qadimgi yunoncha «oikos» (uy, xo'jalik) va «nomos» (qonun, qoida) so'zlaridan tashkil topgan bo'lib, dastlab «uy xo'jaligini oqilona boshqarish qonunlari» ma'nosini anglatgan.",
      ru: "Слово «экономика» происходит от греческих «ойкос» (дом, домохозяйство) и «номос» (закон), изначально означая «искусство ведения домашнего хозяйства».",
      en: "The term 'economics' traces back to Greek 'oikonomia' (oikos = house, nomos = law), originally signifying household stewardship."
    },
    quiz: [
      {
        question: {
          uz: "«Oikonomia» atamasini fanga dastlab kim kiritgan deb hisoblanadi?",
          ru: "Кто впервые ввел термин «экономика» в научный оборот?",
          en: "Who is credited with first introducing the term 'Oikonomia'?"
        },
        options: {
          uz: ["Ksenofont", "Adam Smit", "Karl Marks", "Jon Meynard Keyns"],
          ru: ["Ксенофонт", "Адам Смит", "Карл Маркс", "Джон Мейнард Кейнс"],
          en: ["Xenophon", "Adam Smith", "Karl Marx", "John Maynard Keynes"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Qadimgi yunon faylasufi Ksenofont (mil. avv. 430–354) o'zining «Oikonomikos» (Uy xo'jaligi haqida) asarida bu atamani ilk bor mukammal qo'llagan.",
          ru: "Древнегреческий мыслитель Ксенофонт озаглавил свой трактат «Ойкономикос» (Домострой).",
          en: "Ancient Greek philosopher Xenophon titled his foundational dialogue 'Oeconomicus'."
        }
      },
      {
        question: {
          uz: "Aristotel bo'yicha boylik orttirishning «xrematistika» turi nima bilan ajralib turadi?",
          ru: "Чем по Аристотелю характеризуется «хрематистика»?",
          en: "How did Aristotle define 'chrematistics' in contrast to natural economy?"
        },
        options: {
          uz: ["Moddiy ehtiyojlarni qondirish bilan", "Faqat pul to'plash va chayqovchilikka asoslangani bilan", "Dehqonchilik mehnati bilan", "Hunarmandchilik bilan"],
          ru: ["Удовлетворением естественных потребностей", "Безудержным накоплением денег и ростовщичеством", "Земледелием", "Ремесленным трудом"],
          en: ["Fulfilling natural sustenance", "Unchecked accumulation of money and speculative trade", "Agricultural labor", "Artisan production"]
        },
        correctIndex: 1,
        explanation: {
          uz: "Aristotel tabiiy xo'jalik (iqtisodiyot)ni ma'qullagan, ammo chayqovchilik va sudxo'rlik orqali cheksiz pul to'plashni (xrematistika) qoralagan.",
          ru: "Аристотель осуждал хрематистику как противоестественное искусство наживы через торговлю деньгами.",
          en: "Aristotle condemned chrematistics as an unnatural pursuit of endless financial gains detached from genuine human needs."
        }
      },
      {
        question: {
          uz: "Iqtisodiy ta'limotlar tarixini o'rganishda 'tarixiy va mantiqiy usul' nimani anglatadi?",
          ru: "Что означает сочетание исторического и логического методов?",
          en: "What does the combination of historical and logical methods entail?"
        },
        options: {
          uz: ["Faqat sanalarni yodlashni", "Nazariyalarni ularning davri va mantiqiy mohiyati bilan yaxlit o'rganishni", "Faqat matematik formulalardan foydalanishni", "Faqat zamonaviy g'oyalarni ko'rib chiqishni"],
          ru: ["Заучивание дат", "Изучение концепций в контексте их исторической эпохи и внутренней логики", "Применение только высшей математики", "Игнорирование прежних взглядов"],
          en: ["Rote memorization of dates", "Analyzing doctrines through both their historical context and internal theoretical coherence", "Restricting study to pure mathematics", "Discarding older perspectives"]
        },
        correctIndex: 1,
        explanation: {
          uz: "Tarixiy-mantiqiy usul har bir nazariyaning paydo bo'lish davri sharoitlarini uning mantiqiy xulosalari bilan bog'liq holda o'rganadi.",
          ru: "Данный метод позволяет увидеть объективные предпосылки возникновения каждой теории.",
          en: "It evaluates theoretical insights in relation to the concrete historical realities that inspired them."
        }
      }
    ]
  },
  {
    id: 2,
    numberStr: "02",
    title: {
      uz: "Qadimgi dunyo va O'rta Osiyo iqtisodiy fikri",
      ru: "Экономическая мысль Древнего мира и Средней Азии",
      en: "Economic Thought of the Ancient World and Central Asia"
    },
    period: {
      uz: "Mil. avv. VIII asr — Milodiy XV asr",
      ru: "VIII в. до н.э. — XV в. н.э.",
      en: "8th Century BCE – 15th Century CE"
    },
    scholarsSummary: {
      uz: "Ksenofont, Aristotel, Forobiy, Ibn Sino, Al-Xorazmiy, Yusuf Xos Hojib, Alisher Navoiy, Amir Temur",
      ru: "Ксенофонт, Аристотель, Аль-Фараби, Ибн Сина, Аль-Хорезми, Юсуф Баласагуни, Алишер Навои, Амир Темур",
      en: "Xenophon, Aristotle, Al-Farabi, Ibn Sina, Al-Khwarizmi, Yusuf Balasaguni, Alisher Navoi, Amir Timur"
    },
    iconName: "Landmark",
    shortDesc: {
      uz: "Qadimgi Yunoniston, Rim va Sharq Uyg'onish davrida adolatli davlat, halol mehnat, pulning vazifalari va boshqaruv qonunlari.",
      ru: "Справедливое государство, честный труд, функции денег и законы управления в античной философии и Восточном Ренессансе.",
      en: "Virtue, fair taxation, division of labor, and statecraft in Ancient Greek and Eastern Renaissance philosophy."
    },
    scholars: [
      {
        id: "al-khwarizmi",
        name: "Muhammad ibn Muso al-Xorazmiy",
        years: "783 – 850",
        country: { uz: "Xorazm / Abbosiylar xalifaligi", ru: "Хорезм / Халифат Аббасидов", en: "Khwarazm / Abbasid Caliphate" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Al-Khwarizmi_portrait.jpg",
        title: { uz: "Algebra va hisob-kitob asoschisi", ru: "Основоположник алгебры и алгоритмов", en: "Father of Algebra & Algorithms" },
        quote: {
          uz: "Hisob-kitob va mezoniy aniqlik savdo, meros taqsimoti va iqtisodiy adolatning ustunidir.",
          ru: "Точный расчет и мера лежат в основе торговли, раздела наследства и справедливости.",
          en: "Algorithmic precision underpins equitable trade, estate partition, and commercial justice."
        },
        majorWorks: ["Al-Jabr val-Muqobala", "Hind hisobi haqida kitob"]
      },
      {
        id: "al-farabi",
        name: "Abu Nasr Forobiy (Al-Farabi)",
        years: "870 – 950",
        country: { uz: "Forob (O'tror) / Shosh", ru: "Отрар / Ближний Восток", en: "Farab / Central Asia & Middle East" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/Al-Farabi.jpg",
        title: { uz: "Ikkinchi muallim (Muallim us-Soniy)", ru: "Второй учитель (после Аристотеля)", en: "The Second Teacher" },
        quote: {
          uz: "Fozil shahar aholisi umumiy saodat va farovonlikka o'zaro hamkorlik va mehnat orqali erishadi.",
          ru: "Жители добродетельного города достигают блага через взаимное сотрудничество и труд.",
          en: "Citizens of the virtuous city attain supreme happiness through mutual cooperation and industry."
        },
        majorWorks: ["Fozil odamlar shahri", "Baxt-saodatga erishuv yo'llari"]
      },
      {
        id: "ibn-sina",
        name: "Abu Ali ibn Sino (Avicenna)",
        years: "980 – 1037",
        country: { uz: "Buxoro / Eron", ru: "Бухара / Восток", en: "Bukhara / Persia" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Avicenna_1271.jpg",
        title: { uz: "Tibbiyot va tafakkur sultoni", ru: "Великий врач и энциклопедист", en: "Prince of Physicians & Thinker" },
        quote: {
          uz: "Har bir kishi o'z xonadoni va daromadini tejamkorlik va tartib bilan tasarruf etmog'i lozim.",
          ru: "Каждый должен управлять доходами и хозяйством с бережливостью и порядком.",
          en: "Prudent management of household wealth and moderation protects family dignity."
        },
        majorWorks: ["Kitob ash-Shifo", "Donishnoma", "Tadbiri manzil"]
      },
      {
        id: "yusuf-khos-hojib",
        name: "Yusuf Xos Hojib",
        years: "1019 – 1086",
        country: { uz: "Bolosog'un / Qoraxoniylar davlati", ru: "Баласагун / Караханиды", en: "Balasagun / Karakhanid State" },
        portraitUrl: "",
        title: { uz: "Davlat boshqaruvi mutafakkiri", ru: "Мыслитель государственного управления", en: "Master of Royal Statecraft" },
        quote: {
          uz: "Xalq boy bo'lsa — xoqon boy bo'ladi, adolatli soliq elni obod qiladi.",
          ru: "Богат народ — богат правитель; справедливая подать процветание несет.",
          en: "When the people prosper, the sovereign thrives; just tribute enriches the realm."
        },
        majorWorks: ["Qutadg'u bilig (Saodatga eltuvchi bilim)"]
      },
      {
        id: "amir-temur",
        name: "Amir Temur (Tamerlane)",
        years: "1336 – 1405",
        country: { uz: "Movarounnahr (Samarqand)", ru: "Мовароуннахр (Самарканд)", en: "Mawarannahr (Samarkand)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Amir_Timur_portrait.jpg",
        title: { uz: "Buyuk sarkarda va davlat arbobi", ru: "Великий государственный деятель", en: "Grand Monarch & Empire Builder" },
        quote: {
          uz: "Davlat qudrati — adolatda va xalqning obodligida. Bir dehqon qashshoqlashsa, butun saltanat zaiflashadi.",
          ru: "Сила государства — в справедливости и достатке народа. Нищета дехканина ослабляет державу.",
          en: "The strength of empire rests in justice and broad-based prosperity; ruined farmers weaken the realm."
        },
        majorWorks: ["Temur tuzuklari"]
      },
      {
        id: "alisher-navoiy",
        name: "Alisher Navoiy",
        years: "1441 – 1501",
        country: { uz: "Hirot / Temuriylar davlati", ru: "Герат / Государство Тимуридов", en: "Herat / Timurid Renaissance" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Alisher_Navoi.jpg",
        title: { uz: "Shoir, mutafakkir va saxovat homiysi", ru: "Поэт, гуманист и государственный деятель", en: "Polymath, Poet & Benefactor" },
        quote: {
          uz: "Naf'ing agar xalqqa yetmas, bilki, sen odam emassan.",
          ru: "Если ты не приносишь пользы людям, то не достоин звания человека.",
          en: "He who brings no benefit to his fellows is scarcely worthy of the human name."
        },
        majorWorks: ["Vaqfiya", "Mahbub ul-qulub", "Xamsa"]
      }
    ],
    detail: {
      introduction: {
        uz: "Qadimgi Sharq va Yunoniston iqtisodiy tafakkuri quldorlik va ilk feodalizm sharoitida vujudga keldi. O'rta Osiyoda esa IX-XV asrlarda yuz bergan Sharq Renessansi davrida buyuk allomalar iqtisodiy farovonlik, adolatli soliqlar, savdo yo'llarini himoya qilish va vaqf mulklarini boshqarish bo'yicha yuksak qonun-qoidalarni yaratdilar.",
        ru: "Экономическая мысль Древнего мира и Центральной Азии формировалась под влиянием этики, правовых норм и запросов государственного управления. В эпоху Восточного Ренессанса (IX–XV вв.) ученые Мавераннахра внесли бесценный вклад в теорию финансов, налогообложения, благотворительных вакфов и международной торговли на Шелковом пути.",
        en: "Ancient Mediterranean philosophy and the Islamic Golden Age in Central Asia (9th–15th centuries) fostered deep examinations of public revenue, civic cooperation, ethical commerce along the Silk Road, and endowment governance."
      },
      historicalContext: {
        uz: "Buyuk Ipak yo'lining markazida joylashgan O'rta Osiyo shaharlari (Samarqand, Buxoro, Marv, Xiva) jahon savdosi, qishloq xo'jaligi sug'orish tizimlari va hunarmandchilikning yirik markazlariga aylandi. Bu esa moliya, hisob va soliq qonunchiligini talab etdi.",
        ru: "Города Шелкового пути являлись глобальными транспортными и финансовыми узлами. Развитие ирригации, ремесел и караванной торговли стимулировало теоретическое осмысление денежного обращения и налогового бремени.",
        en: "Situated at the nexus of the Silk Road, Mawarannahr's thriving urban trading hubs required sophisticated legal codes, equitable fiscal collection, and advanced accounting tools."
      },
      coreIdeas: [
        {
          uz: "Ksenofont va Aristotel: Mehnat taqsimotining ahamiyati va tovarning ikki xil (iste'mol va ayirboshlash) qiymati.",
          ru: "Ксенофонт и Аристотель: Разделение труда и дуальная природа товара (потребительная и меновая стоимость).",
          en: "Xenophon & Aristotle: Benefits of specialized labor and the distinction between use-value and exchange-value."
        },
        {
          uz: "Al-Xorazmiy: Savdo shartnomalari, meros bo'linishi va yer o'lchovlarining matematik algoritmlari.",
          ru: "Аль-Хорезми: Математические алгоритмы торговых расчетов, пропорционального раздела имущества и межевания.",
          en: "Al-Khwarizmi: Rigorous algebraic mechanics for estate apportionment, commercial partnership, and survey valuation."
        },
        {
          uz: "Amir Temur tuzuklari: Dehqonlarga soliq imtiyozlari berish, tashlandiq yerlarni o'zlashtirganlarni 3 yilgacha soliqdan ozod qilish orqali mamlakatni obod etish.",
          ru: "Уложения Тимура: Прогрессивное налогообложение, освобождение от податей на 3 года за освоение целинных земель.",
          en: "Institutes of Timur: Fiscal relief, 3-year tax holidays for land reclamation, and state-guaranteed caravan safety."
        },
        {
          uz: "Alisher Navoiyning «Vaqfiya» asari: Xayriya va vaqf mulklaridan tushgan daromadlarni shifoxonalar, madrasalar va ko'priklarni moliyalashtirishga yo'naltirish mexanizmi.",
          ru: "«Вакфия» Алишера Навои: Механизм перераспределения доходов через вакфы на строительство больниц, медресе и мостов.",
          en: "Navoi's 'Vaqfiya': Systematic fiscal reinvestment of endowment surplus into hospitals, academies, and public infrastructure."
        }
      ],
      significance: {
        uz: "O'rta Osiyo mutafakkirlarining iqtisodiy qarashlari adolat, ijtimoiy himoya va davlatning iqtisodiy taraqqiyotdagi tartibga soluvchi rolini ilgari surganligi bilan butun jahon sivilizatsiyasiga ulkan hissa bo'lib qo'shildi.",
        ru: "Труды мыслителей Востока заложили морально-этические и правовые ориентиры для концепции социальной справедливости и роли государства в экономике.",
        en: "Central Asian scholastic perspectives wedded ethical equity with civic infrastructure, proving crucial to the development of public finance."
      }
    },
    keyTerms: [
      {
        term: { uz: "Vaqf", ru: "Вакф", en: "Waqf" },
        definition: {
          uz: "Jamoat ehtiyojlari (madrasa, masjid, shifoxona) uchun ajratilgan va sotilmaydigan doimiy xayriya mulki.",
          ru: "Неотчуждаемое благотворительное имущество, доходы от которого идут на общественные нужды.",
          en: "An inalienable charitable endowment under Islamic law, typically donating land or revenue to education and healthcare."
        }
      },
      {
        term: { uz: "Xiroj va Ushtur (Zakor)", ru: "Харадж и Ушр", en: "Kharaj and Ushr" },
        definition: {
          uz: "Qishloq xo'jaligi hosilidan olinadigan asosiy yer va hosil soliqlari.",
          ru: "Основные поземельные и натуральные подати с урожая в средневековом мусульманском праве.",
          en: "Traditional land and agricultural produce taxes levied in medieval Islamic empires."
        }
      },
      {
        term: { uz: "Fozil jamiyat", ru: "Добродетельный город", en: "Virtuous City" },
        definition: {
          uz: "Forobiy ta'limotida barcha a'zolari umumiy baxt va odil mehnat uchun hamkorlik qiladigan adolatli tuzum.",
          ru: "Концепция идеального социума Аль-Фараби, основанного на солидарности, труде и стремлении к благу.",
          en: "Al-Farabi's utopian commonwealth where citizens achieve mutual flourishing through honest cooperative endeavor."
        }
      }
    ],
    famousWorks: [
      {
        title: "Temur tuzuklari",
        year: "XIV asr",
        author: "Amir Temur",
        description: {
          uz: "Davlat boshqaruvi, qo'shin ta'minoti, xalqqa soliq solish va adolat tamoyillari bayon etilgan nodir qo'llanma.",
          ru: "Уникальный кодекс законов об управлении империей, налогообложении и защите подданных.",
          en: "Timur's seminal regulatory treatise codifying public administration, equitable revenue, and commerce security."
        }
      },
      {
        title: "Qutadg'u bilig",
        year: "1069",
        author: "Yusuf Xos Hojib",
        description: {
          uz: "Turkiy xalqlarning ilk yozma davlat va iqtisodiy siyosat manbasi.",
          ru: "Первый тюркский дидактический трактат о справедливом правлении и народном достатке.",
          en: "The foremost Turkic didactic guide to virtuous governance, treasury stewardship, and societal balance."
        }
      }
    ],
    interestingFact: {
      uz: "Amir Temur davrida Ipak yo'lida savdogarlarning xavfsizligi shu darajada yuqori ediki, bir savdogar oltin tovoqni boshiga qo'yib Xitoy chegarasidan to O'rtayer dengizigacha hech qanday talafotsiz yetib borgan degan tarixiy naql mavjud.",
      ru: "При Амире Темуре на Шелковом пути поддерживался такой порядок, что купец с золотом мог пройти от Персии до Китая без опасения грабежа.",
      en: "Under Amir Timur's stringent decree, caravan routes were so secure that historians recounted merchants carrying trays of gold unmolested across entire provinces."
    },
    quiz: [
      {
        question: {
          uz: "Amir Temur yangi o'zlashtirilgan yerlar uchun dehqonlarga qanday imtiyoz bergan?",
          ru: "Какую налоговую льготу предоставлял Амир Темур дехканам за освоение новых земель?",
          en: "What fiscal concession did Amir Timur grant farmers cultivating virgin lands?"
        },
        options: {
          uz: ["Birinchi uch yil davomida soliqdan to'liq ozod qilgan", "Darhol ikki barobar soliq solgan", "Faqat oltin bilan to'lashni talab qilgan", "Hosilning yarmini tortib olgan"],
          ru: ["Освобождал от всех налогов на первые три года", "Сразу облагал двойной податью", "Требовал выплаты только золотом", "Забирал половину урожая"],
          en: ["Total tax exemption for the first three years", "Immediate double assessment", "Mandated payment in bullion only", "Confiscation of 50% harvest"]
        },
        correctIndex: 0,
        explanation: {
          uz: "«Temur tuzuklari»da qayd etilishicha, kim qarovsiz yerni obod qilib ekin eksa, uch yilgacha undan xiroj olinmagan.",
          ru: "Согласно «Уложениям Темура», поднявшие целину освобождались от податей на три года для стимулирования хозяйства.",
          en: "Timur codified that anyone restoring fallow soil was granted a three-year tax holiday to stimulate agriculture."
        }
      },
      {
        question: {
          uz: "Alisher Navoiy o'zining qaysi asarida vaqf mulklari va daromadlar taqsimotini bayon qilgan?",
          ru: "В каком труде Алишер Навои описал порядок распределения доходов вакфного имущества?",
          en: "In which treatise did Alisher Navoi detail the administration and distribution of endowment funds?"
        },
        options: {
          uz: ["«Vaqfiya»", "«Lison ut-tayr»", "«Muhokamat ul-lug'atayn»", "«Xamsa»"],
          ru: ["«Вакфия»", "«Язык птиц»", "«Суждение о двух языках»", "«Хамса»"],
          en: ["'Vaqfiya'", "'Lison ut-tayr'", "'Muhokamat ul-lughatayn'", "'Khamsa'"]
        },
        correctIndex: 0,
        explanation: {
          uz: "1481 yilda yozilgan «Vaqfiya» asari Navoiy barpo ettirgan xayriya inshootlari, ularning moliyaviy manbalari va hisoboti haqidagi nodir iqtisodiy-huquqiy hujjatdir.",
          ru: "Трактат «Вакфия» подробно регламентирует финансовое обеспечение больниц, медресе и бесплатных столовых.",
          en: "Authored in 1481, the 'Vaqfiya' is a remarkable legal and financial document regulating public welfare foundations."
        }
      },
      {
        question: {
          uz: "«Fozil odamlar shahri» asarida adolatli ijtimoiy-iqtisodiy tuzumni kim tasvirlagan?",
          ru: "Кто описал справедливое общество в трактате «О взглядах жителей добродетельного города»?",
          en: "Who authored 'The Virtuous City' outlining a cooperative and just socio-economic order?"
        },
        options: {
          uz: ["Abu Nasr Forobiy", "Ibn Sino", "Aristotel", "Beruniy"],
          ru: ["Абу Наср Аль-Фараби", "Ибн Сина", "Аристотель", "Беруни"],
          en: ["Abu Nasr Al-Farabi", "Ibn Sina", "Aristotle", "Al-Biruni"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Sharqning 'Ikkinchi muallimi' Abu Nasr Forobiy fozil jamiyatda insonlar o'zaro hamjihatlik va mehnat orqali baxt-saodatga erishishini ko'rsatgan.",
          ru: "Аль-Фараби сформулировал концепцию гармоничного социума, где каждый труд служит всеобщему процветанию.",
          en: "Al-Farabi demonstrated that universal happiness in a virtuous city springs from collective solidarity and honest labor."
        }
      }
    ]
  },
  {
    id: 3,
    numberStr: "03",
    title: {
      uz: "Merkantilizm: erta va yetuk davrlari",
      ru: "Меркантилизм: ранний и поздний этапы",
      en: "Mercantilism: Early and Mature Stages"
    },
    period: {
      uz: "XV asr oxiri — XVII asr o'rtalari",
      ru: "Конец XV — середина XVII века",
      en: "Late 15th Century – Mid 17th Century"
    },
    scholarsSummary: {
      uz: "Tomas Man, Antuan Monkretyen, Jan-Batist Kolber, Uilyam Stafford",
      ru: "Томас Ман, Антуан Монкретьен, Жан-Батист Кольбер, Уильям Стаффорд",
      en: "Thomas Mun, Antoine de Montchrétien, Jean-Baptiste Colbert, William Stafford"
    },
    iconName: "Coins",
    shortDesc: {
      uz: "Boylikning manbai tashqi savdo va qimmatbaho metallarda deb bilgan ilk burjua iqtisodiy ta'limoti va protektsionizm siyosati.",
      ru: "Первая буржуазная школа: отождествление богатства с золотом и серебром, активный торговый баланс и протекционизм.",
      en: "The doctrine identifying national wealth with gold bullion, positive trade balances, and state-sponsored protectionism."
    },
    scholars: [
      {
        id: "thomas-mun",
        name: "Tomas Man (Thomas Mun)",
        years: "1571 – 1641",
        country: { uz: "Angliya (London)", ru: "Англия (Лондон)", en: "England (London)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Thomas_Mun.jpg",
        title: { uz: "Yetuk merkantilizm nazariyotchisi", ru: "Теоретик зрелого меркантилизма", en: "Director of East India Company & Theorist" },
        quote: {
          uz: "Biz boshqa xalqlarga o'zimiz ulardan sotib olgandan ko'ra ko'proq qiymatdagi tovar sotishimiz shart.",
          ru: "Мы должны ежегодно продавать иностранцам на большую сумму, чем покупаем у них.",
          en: "The ordinary means therefore to increase our wealth and treasure is by Foreign Trade, wherein we must ever observe this rule: to sell more to strangers yearly than we consume of theirs in value."
        },
        majorWorks: ["Angliyaning tashqi savdodagi boyligi (1664)"]
      },
      {
        id: "antoine-montchretien",
        name: "Antuan Monkretyen (Antoine de Montchrétien)",
        years: "1575 – 1621",
        country: { uz: "Fransiya", ru: "Франция", en: "France" },
        portraitUrl: "",
        title: { uz: "«Siyosiy iqtisod» atamasi muallifi", ru: "Автор термина «политическая экономия»", en: "Coined 'Political Economy'" },
        quote: {
          uz: "Faqatgina davlat homiyligidagi milliy sanoat va savdo mamlakatni qudratli qiladi.",
          ru: "Лишь мануфактуры и торговля под опекой короля приумножают славу державы.",
          en: "State patronage over national industry and commerce alone guarantees sovereign grandeur."
        },
        majorWorks: ["Siyosiy iqtisod traktati (1615)"]
      },
      {
        id: "jean-baptiste-colbert",
        name: "Jan-Batist Kolber (Jean-Baptiste Colbert)",
        years: "1619 – 1683",
        country: { uz: "Fransiya", ru: "Франция", en: "France" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Jean-Baptiste_Colbert.jpg",
        title: { uz: "Fransiya moliya vaziri (Kolbertizm)", ru: "Министр финансов Людовика XIV", en: "French Controller-General of Finances" },
        quote: {
          uz: "Savdo — bu butun dunyo boyligi ustidan hukmronlik qilish uchun olib boriladigan urushdir.",
          ru: "Торговля — это война между всеми нациями за долю мирового богатства.",
          en: "Trade is a continuous and bitter war of wits and tariffs for universal bullion."
        },
        majorWorks: ["Qirollik manufakturalari va flot nizomi"]
      }
    ],
    detail: {
      introduction: {
        uz: "Merkantilizm (italyancha «mercante» — savdogar) kapitalizmning dastlabki to'planish davrida, ya'ni Buyuk geografik kashfiyotlardan so'ng paydo bo'lgan ilk mustaqil iqtisodiy nazariyadir. Merkantilistlar boylik ishlab chiqarishda emas, balki muomala sohasida, aniqrog'i tashqi savdoda vujudga keladi deb hisoblaganlar.",
        ru: "Меркантилизм стал первой систематической экономической доктриной эпохи первоначального накопления капитала и Великих географических открытий. Мыслители этой школы утверждали, что истинное богатство нации заключается в монетарном золоте и серебре, а источником его прироста служит сфера внешнеторгового обращения.",
        en: "Mercantilism emerged during the Commercial Revolution following the Age of Discovery as the first cohesive doctrine of rising capitalism, asserting that national wealth consists of precious metal reserves accumulated through trade surpluses."
      },
      historicalContext: {
        uz: "Yevropa monarxiyalari kuchli armiya va dengiz flotini ta'minlash uchun xazinaga ko'p oltin talab qilar edi. Ispaniya, Angliya, Fransiya va Gollandiya o'rtasida mustamlakalar va savdo yo'llari uchun shafqatsiz raqobat boshlandi.",
        ru: "Европейские короны нуждались в постоянных денежных поступлениях для финансирования армий и флотов. Возникла острая конкуренция за колониальные рынки и монопольные торговые пути.",
        en: "Rising European absolutist states required endless specie to maintain standing armies, navies, and colonial networks, instigating aggressive commercial warfare."
      },
      coreIdeas: [
        {
          uz: "Erta merkantilizm (Monetar tizim): Mamlakatdan oltin va kumushni olib chiqishni qat'iy taqiqlash, 'pul balansi' siyosati.",
          ru: "Ранний меркантилизм (Монетарная система): Запрет на вывоз звонкой монеты, политика жесткого «денежного баланса».",
          en: "Early Mercantilism (Bullionism): Total prohibition of bullion export and rigid administrative hoarding."
        },
        {
          uz: "Yetuk merkantilizm: 'Faol savdo balansi' siyosati — tovar eksporti importdan doimo ko'p bo'lishini ta'minlash.",
          ru: "Зрелый меркантилизм: Доктрина «активного торгового баланса» — превышение экспорта над импортом.",
          en: "Mature Mercantilism: Fostering a positive balance of trade—exporting higher value manufactured goods than raw imports."
        },
        {
          uz: "Protektsionizm: Milliy ishlab chiqaruvchilarni himoya qilish uchun import tovarlariga yuqori bojlar qo'yish.",
          ru: "Протекционизм: Высокие таможенные пошлины на ввоз готовой продукции и субсидирование отечественного производства.",
          en: "Rigid Protectionism: Imposing protective tariffs on foreign manufactures while subsidizing export-oriented domestic factories."
        }
      ],
      significance: {
        uz: "Merkantilizm iqtisodiy tahlilni muomala sohasidan boshlab berdi va 1615 yilda fanga «Siyosiy iqtisod» atamasining kirib kelishiga sabab bo'ldi.",
        ru: "Меркантилизм положил начало анализу макроэкономических связей и ввел в оборот категорию «Политическая экономия».",
        en: "Mercantilism catalyzed the emergence of political economy as a statecraft science focused on fiscal solvency and industrial strength."
      }
    },
    keyTerms: [
      {
        term: { uz: "Faol savdo balansi", ru: "Активный торговый баланс", en: "Favorable Trade Balance" },
        definition: {
          uz: "Mamlakatdan chetga chiqarilgan tovarlar qiymati chetdan kiritilgan tovarlar qiymatidan ortiq bo'lishi holati.",
          ru: "Превышение стоимости экспортируемых товаров над импортируемыми.",
          en: "A state where exports exceed imports in monetary value, pulling precious metals into the domestic treasury."
        }
      },
      {
        term: { uz: "Protektsionizm", ru: "Протекционизм", en: "Protectionism" },
        definition: {
          uz: "Davlatning ichki bozorni xorijiy raqobatdan bojxona to'siqlari va subsidiyalar orqali himoya qilish siyosati.",
          ru: "Экономическая политика защиты национального рынка от иностранной конкуренции с помощью тарифов.",
          en: "Government tariff and quota policies aimed at safeguarding domestic industries against foreign competition."
        }
      },
      {
        term: { uz: "Kolbertizm", ru: "Кольбертизм", en: "Colbertism" },
        definition: {
          uz: "Fransiyada Jan-Batist Kolber tomonidan yurgizilgan, manufakturalar va dengiz savdosini davlat hisobidan rivojlantirish modeli.",
          ru: "Французская версия меркантилизма, сделавшая ставку на развитие королевских мануфактур и флота.",
          en: "The French variant of mercantilism emphasizing state-chartered luxury manufactures and state naval power."
        }
      }
    ],
    famousWorks: [
      {
        title: "England's Treasure by Forraign Trade",
        year: "1664",
        author: "Thomas Mun",
        description: {
          uz: "Yetuk merkantilizmning manifesti bo'lib, iqtisodiy qudrat garovi faol savdo balansi ekanini isbotlab bergan.",
          ru: "Классический манифест зрелого меркантилизма, обосновавший роль торгового баланса.",
          en: "The quintessential text of mature mercantilism demonstrating trade balance over crude coin hoarding."
        }
      },
      {
        title: "Traité de l'économie politique",
        year: "1615",
        author: "Antoine de Montchrétien",
        description: {
          uz: "Fanga ilk bor «Siyosiy iqtisod» nomini bergan va davlat boshqaruvining iqtisodiy qoidalarini yoritgan asar.",
          ru: "Труд, впервые давший науке имя «Политическая экономия».",
          en: "The seminal work that coined the name 'Political Economy' for state economic science."
        }
      }
    ],
    interestingFact: {
      uz: "Erta merkantilizm davrida chet ellik savdogarlar Angliyada tovar sotgach, olgan pullarini o'zlari bilan olib ketmasliklari uchun maxsus qirollik nazoratchilari («nadziratellar») tayinlangan bo'lib, ular barcha pulni ingliz tovarlariga sarflashga majbur qilingan.",
      ru: "В Англии при раннем меркантилизме действовал закон об истрачении: иностранец был обязан потратить всю выручку на покупку английских товаров под надзором королевского пристава.",
      en: "Under early English bullionist laws, foreign merchants were accompanied by royal hosts ensuring that every coin received from imports was re-spent entirely on domestic English goods."
    },
    quiz: [
      {
        question: {
          uz: "Fanga «Siyosiy iqtisod» (Political Economy) atamasini ilk bor qaysi olim kiritgan?",
          ru: "Кто впервые ввел термин «Политическая экономия» в научный обиход?",
          en: "Who authored the 1615 treatise that introduced the term 'Political Economy'?"
        },
        options: {
          uz: ["Antuan Monkretyen", "Adam Smit", "Tomas Man", "Jan-Batist Kolber"],
          ru: ["Антуан де Монкретьен", "Адам Смит", "Томас Ман", "Жан-Батист Кольбер"],
          en: ["Antoine de Montchrétien", "Adam Smith", "Thomas Mun", "Jean-Baptiste Colbert"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Fransuz iqtisodchisi Antuan Monkretyen 1615 yilda o'zining «Siyosiy iqtisod traktati» asari bilan bu atamani ilk bor fanga kiritgan.",
          ru: "Антуан де Монкретьен опубликовал в 1615 году «Трактат политической экономии».",
          en: "Antoine de Montchrétien coined the term in his 1615 'Traité de l'économie politique'."
        }
      },
      {
        question: {
          uz: "Yetuk merkantilizmning asosiy tamoyili nima edi?",
          ru: "Каков был главный постулат развитого (позднего) меркантилизма?",
          en: "What was the governing tenet of mature mercantilism championed by Thomas Mun?"
        },
        options: {
          uz: ["Faol savdo balansiga erishish (eksport importdan ko'p bo'lishi)", "Pulni chetga chiqarishni mutlaq taqiqlash", "Qishloq xo'jaligiga yagona soliq solish", "Barcha soliqlarni bekor qilish"],
          ru: ["Достижение активного торгового баланса (экспорт превышает импорт)", "Абсолютный запрет на вывоз денег", "Единый налог на земледелие", "Отмена всех пошлин"],
          en: ["Achieving a favorable balance of trade (exports exceeding imports)", "Total prohibition of bullion export", "Single land tax", "Abolishing all tariffs"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Tomas Man va uning safdoshlari oltinni ushlab o'tirmay, undan xomashyo olib, qimmatroq mahsulot eksport qilish orqali umumiy faol savdo balansiga erishishni yoqlaganlar.",
          ru: "Поздний меркантилизм разрешал вывоз денег при условии, что итоговый торговый баланс будет положительным.",
          en: "Mun advocated exporting money when necessary to procure raw goods that could be manufactured and re-exported at far greater profit."
        }
      },
      {
        question: {
          uz: "Merkantilistlar nuqtai nazaridan haqiqiy milliy boylik nimadan iborat?",
          ru: "Что меркантилисты считали истинным воплощением национального богатства?",
          en: "What did mercantilists consider to be the truest embodiment of national wealth?"
        },
        options: {
          uz: ["Oltin, kumush va xazina zahiralari", "Unumdor yer va bug'doy zaxiralari", "Aholining bilim va malakasi", "Fabrika va stanoklar soni"],
          ru: ["Золото, серебро и монетарные резервы", "Плодородная земля и зерно", "Знания и квалификация граждан", "Количество фабрик и станков"],
          en: ["Gold, silver, and monetary bullion", "Fertile acreage and grain stores", "Human education and craftsmanship", "Number of industrial factories"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Merkantilizm ta'limoti bo'yicha davlatning qudrati va boyligi uning omborlaridagi tovarlar bilan emas, balki to'plangan oltin va kumush miqdori bilan o'lchangan.",
          ru: "Для меркантилистов лишь драгоценные металлы являлись универсальным и абсолютным богатством.",
          en: "To mercantilist eyes, gold and silver bullion represented the definitive index of sovereign strength and wealth."
        }
      }
    ]
  },
  {
    id: 4,
    numberStr: "04",
    title: {
      uz: "Fiziokratizm: F. Kene va iqtisodiy jadval",
      ru: "Физиократия: Ф. Кенэ и экономическая таблица",
      en: "Physiocracy: François Quesnay and the Tableau Économique"
    },
    period: {
      uz: "XVIII asr o'rtalari (1750 — 1770-yillar)",
      ru: "Середина XVIII века (1750–1770 гг.)",
      en: "Mid 18th Century (1750s – 1770s)"
    },
    scholarsSummary: {
      uz: "Fransua Kene, Ann Rober Jak Tyurgo, Viktor Mirabo",
      ru: "Франсуа Кенэ, Анн Робер Жак Тюрго, Виктор Мирабо",
      en: "François Quesnay, Anne-Robert-Jacques Turgot, Victor de Riqueti, Marquis de Mirabeau"
    },
    iconName: "Wheat",
    shortDesc: {
      uz: "Boylikning yagona manbai qishloq xo'jaligi mehnati ekanini ilgari surgan va birinchi bo'lib makroiqtisodiy takror ishlab chiqarish modelini yaratgan fransuz maktabi.",
      ru: "Школа «власти природы»: сельское хозяйство как единственный источник чистого продукта и первая макроэкономическая модель кругооборота.",
      en: "The 'Rule of Nature' school identifying agricultural surplus as the sole source of wealth and creating the first macroeconomic circular flow model."
    },
    scholars: [
      {
        id: "francois-quesnay",
        name: "Fransua Kene (François Quesnay)",
        years: "1694 – 1774",
        country: { uz: "Fransiya (Versal)", ru: "Франция (Версаль)", en: "France (Versailles)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Francois_Quesnay.jpg",
        title: { uz: "Fiziokratizm asoschisi, qirol shifokori", ru: "Основатель физиократии, лейб-медик", en: "Founder of Physiocracy & Royal Physician" },
        quote: {
          uz: "Yer — boylikning yagona manbaidir, faqat qishloq xo'jaligi sof mahsulot yaratadi.",
          ru: "Земля — единственное первоначало богатства, лишь земледелие производит чистый продукт.",
          en: "Poor peasants, poor kingdom; poor kingdom, poor king. Agriculture alone produces a genuine net product."
        },
        majorWorks: ["Iqtisodiy jadval (Tableau économique, 1758)"]
      },
      {
        id: "jacques-turgot",
        name: "Ann Rober Jak Tyurgo (A.R.J. Turgot)",
        years: "1727 – 1781",
        country: { uz: "Fransiya", ru: "Франция", en: "France" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Anne_Robert_Jacques_Turgot.jpg",
        title: { uz: "Fransiya moliya bosh nazoratchisi", ru: "Генеральный контролер финансов Франции", en: "Finance Minister & Reformer" },
        quote: {
          uz: "Erkinlik — savdo va sanoatning qon tomiridir. Iqtisodiyotga xalaqit bermang!",
          ru: "Свобода — дыхание торговли. Дайте делам идти своим чередом (Laissez faire)!",
          en: "Freedom of commerce is the natural engine of abundance; remove internal tolls and let nature balance."
        },
        majorWorks: ["Boyliklarning shakllanishi va taqsimoti haqida mulohazalar (1766)"]
      }
    ],
    detail: {
      introduction: {
        uz: "Fiziokratizm (yunoncha «physis» — tabiat va «kratos» — hokimiyat, ya'ni «tabiat hokimiyati») XVIII asr o'rtalarida Fransiyada merkantilizmga keskin qarshi ravishda shakllandi. Fransua Kene inson tanasidagi qon aylanish tizimiga o'xshash qilib, jamiyatda umumiy mahsulot va pullarning sinflar o'rtasida aylanib yurishini ko'rsatib berdi.",
        ru: "Физиократия возникла во Франции как резкая реакция на кольбертизм и истощение деревни. Врач Франсуа Кенэ уподобил экономический кругооборот движению крови в живом организме, впервые в истории создав абстрактную макроэкономическую модель общественного воспроизводства.",
        en: "Physiocracy ('Rule of Nature') arose in 18th-century France challenging mercantilism. Physician François Quesnay applied anatomical analogies of blood circulation to depict the annual circular flow of goods and money across social classes."
      },
      historicalContext: {
        uz: "Lyudovik XIV va XV davrida savdoga berilgan imtiyozlar hamda haddan ziyod og'ir soliqlar oqibatida Fransiya qishloq xo'jaligi va dehqonlari xonavayron bo'lgan edi. Fiziokratlar mamlakatni qayta tiklashning birdan-bir yo'li yerga e'tibor qaratish ekanini tushundilar.",
        ru: "Чрезмерные налоги и регламентация цен на зерно довели французское крестьянство до нищеты. Физиократы выдвинули программу возрождения аграрного сектора через свободу цен и единый поземельный налог.",
        en: "French rural decay under mercantilist export curbs and oppressive royal levies prompted the Physiocrats to call for agrarian deregulation and capital investment in cultivation."
      },
      coreIdeas: [
        {
          uz: "Sof mahsulot nazariyasi: Faqat tabiat (yer) mehnati sarflangan xarajatlardan ortiqcha yangi boylik («produit net») hosil qiladi. Sanoat va savdo esa shunchaki shaklni o'zgartiradi («unumiz sinf»).",
          ru: "Теория «чистого продукта»: Только земля порождает избыток над затратами (produit net). Промышленность лишь меняет форму материи («бесплодный класс»).",
          en: "Net Product doctrine: Only agriculture yields a true physical surplus beyond initial seed and subsistence costs; manufacturing merely alters shape."
        },
        {
          uz: "Jamiyatning uchta sinfi: 1) Hosildor sinf (dehqonlar va fermerlar), 2) Mulkdorlar sinfi (yer egalari va qirol), 3) Unumsiz sinf (hunarmandlar, sanoatchilar va savdogarlar).",
          ru: "Три класса общества: производительный (фермеры), собственники (землевладельцы) и бесплодный (ремесленники и торговцы).",
          en: "Three-class schema: Productive class (farmers), Proprietary class (landlords and sovereign), and Sterile class (artisans and merchants)."
        },
        {
          uz: "Laissez-faire (Lese-fer) tamoyili: «Laissez faire, laissez passer» — «Iqtisodiy faoliyatga erkinlik bering, tovarlar erkin o'tsin» shiori.",
          ru: "Принцип Laissez-faire: «Предоставьте делам естественный ход, позвольте вещам двигаться свободно» — невмешательство государства.",
          en: "Laissez-faire, laissez-passer: Absolute commercial liberty, removal of state grain monopolies, and unhindered internal transit."
        }
      ],
      significance: {
        uz: "Fransua Kenening «Iqtisodiy jadval»i bugungi zamonaviy Makroiqtisodiy input-output (Xarajatlar-Natijalar) balanslari va YaIM hisob-kitoblarining dastlabki prototipi hisoblanadi.",
        ru: "«Экономическая таблица» Кенэ стала предтечей современных балансовых моделей межотраслевого баланса В. Леонтьева и национального счетоводства.",
        en: "Quesnay's Tableau is celebrated as the historic direct forerunner of modern national income accounting and Leontief input-output matrices."
      }
    },
    keyTerms: [
      {
        term: { uz: "Sof mahsulot (Produit net)", ru: "Чистый продукт", en: "Net Product (Produit Net)" },
        definition: {
          uz: "Qishloq xo'jaligida ishlab chiqarish sarf-xarajatlaridan ortib qolgan yangi qo'shilgan moddiy boylik.",
          ru: "Излишек стоимости, созданный в земледелии сверх понесенных затрат труда и семян.",
          en: "The surplus agricultural output remaining after deducting all replacement production and subsistence costs."
        }
      },
      {
        term: { uz: "Laissez-faire", ru: "Laissez-faire", en: "Laissez-faire" },
        definition: {
          uz: "Davlatning xususiy tadbirkorlik va bozor narxlariga aralashmasligi, erkin raqobat tamoyili.",
          ru: "Доктрина невмешательства государства в рыночные процессы и свободную конкуренцию.",
          en: "The fundamental policy of strict non-interference by government in economic affairs and market operations."
        }
      },
      {
        term: { uz: "Iqtisodiy jadval", ru: "Экономическая таблица", en: "Tableau Économique" },
        definition: {
          uz: "Yillik yalpi mahsulotning uch ijtimoiy sinf o'rtasida natural va pul shaklida qayta taqsimlanishining ilk sxemasi.",
          ru: "Первая в истории схема воспроизводства и кругооборота совокупного общественного продукта.",
          en: "The first graphical depiction of annual economic reproduction and circular flow between socioeconomic classes."
        }
      }
    ],
    famousWorks: [
      {
        title: "Tableau économique",
        year: "1758",
        author: "François Quesnay",
        description: {
          uz: "Sinflar o'rtasida tovar va pul oqimlarining yillik aylanmasini hisoblab bergan asar.",
          ru: "Знаменитая таблица, показавшая кругооборот капитала и общественного продукта.",
          en: "The founding text illustrating macro reproduction and dynamic equilibrium."
        }
      }
    ],
    interestingFact: {
      uz: "Fransua Kene asl kasbi bo'yicha mashhur jarroh va qirol Lyudovik XV ning ma'shuqasi Madam de Pompadurning shaxsiy shifokori bo'lgan. U iqtisodiyotdagi pul va tovarlar aylanishini aynan inson tanasidagi qon tomirlari tizimi bilan qiyoslab yaratgan.",
      ru: "Франсуа Кенэ был придворным хирургом маркизы де Помпадур. Модель кругооборота товаров и денег он создал, напрямую вдохновившись открытием кровообращения Уильяма Гарвея.",
      en: "François Quesnay was physician to Madame de Pompadour and Louis XV; his famous macroeconomic diagram was directly inspired by William Harvey's discovery of blood circulation."
    },
    quiz: [
      {
        question: {
          uz: "Fiziokratlar ta'limotiga ko'ra «sof mahsulot» jamiyatning qaysi sohasida yaratiladi?",
          ru: "В какой сфере, по мнению физиократов, создается «чистый продукт»?",
          en: "According to the Physiocrats, in which sector is the 'net product' exclusively produced?"
        },
        options: {
          uz: ["Faqat qishloq xo'jaligida (yerda)", "Tashqi savdo va dengizchilikda", "To'qimachilik fabrikalarida", "Bank va sudxo'rlikda"],
          ru: ["Исключительно в сельском хозяйстве", "В международной торговле", "На текстильных мануфактурах", "В банковской сфере"],
          en: ["Exclusively in agriculture and cultivation", "In foreign maritime trade", "In textile factories", "In banking and finance"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Fiziokratlar faqat yer va tabiat inson sarflaganidan ortiqcha ne'mat bera oladi, sanoat esa shunchaki shaklni o'zgartiradi deb ishonganlar.",
          ru: "Кенэ утверждал, что промышленность лишь трансформирует форму сырья, а умножает материю только природа.",
          en: "Physiocrats insisted nature alone multiplies physical substance, whereas industry merely alters shapes sterilely."
        }
      },
      {
        question: {
          uz: "F. Kene o'zining «Iqtisodiy jadval»ida hunarmand va sanoatchilarni qaysi sinfga kiritgan?",
          ru: "К какому классу Кенэ отнес промышленников и ремесленников в «Экономической таблице»?",
          en: "To which social class did Quesnay assign industrial manufacturers and artisans?"
        },
        options: {
          uz: ["«Unumsiz (steril) sinf»", "«Hosildor sinf»", "«Mulkdorlar sinfi»", "«Hukmron sinf»"],
          ru: ["«Бесплодный класс» (la classe stérile)", "«Производительный класс»", "«Класс собственников»", "«Правящий класс»"],
          en: ["'Sterile Class' (la classe stérile)", "'Productive Class'", "'Proprietary Class'", "'Ruling Class'"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Kene sanoatchilar va savdogarlarni «unumsiz sinf» deb atagan, chunki ular yangi sof mahsulot yaratmay, faqat xarajatlarini qoplaydi deb hisoblangan.",
          ru: "По определению Кенэ, данный класс возмещает лишь свои издержки, не создавая чистого прироста богатства.",
          en: "He labeled them 'sterile' not as an insult, but because they simply reproduced equivalent value rather than yielding a net natural surplus."
        }
      },
      {
        question: {
          uz: "Mashhur «Laissez faire, laissez passer» shiorining ma'nosi nima?",
          ru: "Что означает знаменитый лозунг «Laissez faire, laissez passer»?",
          en: "What does the famous maxim 'Laissez faire, laissez passer' advocate?"
        },
        options: {
          uz: ["Iqtisodiy faoliyatga erkinlik bering, xalaqit bermang", "Barcha korxonalarni davlat nazoratiga oling", "Bojxona to'lovlarini ikki barobar oshiring", "Tashqi savdoni butunlay taqiqlang"],
          ru: ["Предоставьте свободу экономической деятельности, не вмешивайтесь", "Национализируйте предприятия", "Увеличьте вдвое таможенные пошлины", "Запретите внешнюю торговлю"],
          en: ["Allow freedom of economic enterprise; do not interfere", "Nationalize all enterprises", "Double import tariffs", "Ban international trade"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Bu shior davlatning iqtisodiyotga asossiz aralashuviga qarshi va erkin bozor raqobatini himoya qilishga qaratilgan edi.",
          ru: "Лозунг призывал снять все внутренние таможни, монополии и дать законам природы направлять рынок.",
          en: "It called for eliminating internal toll barriers and monopolies, allowing market forces to organize commerce naturally."
        }
      }
    ]
  },
  {
    id: 5,
    numberStr: "05",
    title: {
      uz: "Klassik siyosiy iqtisod: Adam Smit",
      ru: "Классическая политическая экономия: Адам Смит",
      en: "Classical Political Economy: Adam Smith"
    },
    period: {
      uz: "1776-yil — XVIII asr oxiri",
      ru: "1776 г. — конец XVIII века",
      en: "1776 – Late 18th Century"
    },
    scholarsSummary: {
      uz: "Adam Smit («Xalqlar boyligi»)",
      ru: "Адам Смит («Богатство народов»)",
      en: "Adam Smith ('The Wealth of Nations')"
    },
    iconName: "Scale",
    shortDesc: {
      uz: "Mehnat qiymat nazariyasi, bozorning «ko'rinmas qo'li», erkin raqobat va mehnat taqsimotining iqtisodiy taraqqiyotdagi o'rni.",
      ru: "Трудовая теория стоимости, «невидимая рука» рынка, совершенная конкуренция и разделение труда.",
      en: "Labor theory of value, the 'invisible hand', division of labor, and the foundations of free market capitalism."
    },
    scholars: [
      {
        id: "adam-smith-hero",
        name: "Adam Smit (Adam Smith)",
        years: "1723 – 1790",
        country: { uz: "Shotlandiya / Buyuk Britaniya", ru: "Шотландия / Великобритания", en: "Scotland / Great Britain" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adam_Smith_The_Muir_portrait.jpg",
        title: { uz: "Zamonaviy iqtisodiyot fanining otasi", ru: "Отец современной экономической науки", en: "Father of Modern Economics" },
        quote: {
          uz: "Biz non, go'sht yoki pivoni qassob yo novvoyning saxovatidan emas, ularning o'z manfaatini ko'zlashidan kutamiz.",
          ru: "Не от благожелательности мясника, пивовара или булочника ожидаем мы получить свой обед, а от соблюдения ими своих собственных интересов.",
          en: "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest."
        },
        majorWorks: [
          "Xalqlar boyligining tabiati va sabablari to'g'risida tadqiqot (1776)",
          "Axloqiy his-tuyg'ular nazariyasi (1759)"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "Shotland olimi Adam Smit 1776 yilda nashr etilgan o'zining «Xalqlar boyligi» asari bilan iqtisodiyotni yaxlit va mustaqil ilmiy fanga aylantirdi. U merkantilistlarning oltin haqidagi hamda fiziokratlarning faqat yer haqidagi cheklangan qarashlarini rad etib, har qanday insoniy mehnat boylikning chinakam manbai ekanini isbotladi.",
        ru: "Выход книги Адама Смита «Исследование о природе и причинах богатства народов» в 1776 году ознаменовал рождение экономической науки как целостной теоретической системы. Смит объединил анализ разделения труда, теории стоимости, денег и роли государства в единую гармоничную картину.",
        en: "Adam Smith's 1776 magnum opus 'The Wealth of Nations' established economics as a coherent, autonomous science. Smith showed that labor in general—not merely agriculture or bullion—constitutes the foundational wealth of all nations."
      },
      historicalContext: {
        uz: "Angliyada sanoat to'ntarishi (inqilobi) boshlanayotgan davr edi. Manufakturalardan yirik fabrikalarga o'tish, par mashinasining ixtiro qilinishi va erkin savdoga bo'lgan kuchli talab yangi nazariy asosni talab qilardi.",
        ru: "Эпоха кануна Промышленной революции в Великобритании требовала слома феодальных гильдейских ограничений и открытия мировой торговли.",
        en: "The dawn of the British Industrial Revolution demanded the abolition of archaic mercantile monopolies and tariffs to unleash factory productivity."
      },
      coreIdeas: [
        {
          uz: "«Ko'rinmas qo'l» (Invisible hand) mexanizmi: Har bir kishi faqat o'z shaxsiy manfaatini ko'zlab harakat qilar ekan, bozor raqobati vositasida jamiyat uchun ham eng maqbul natijaga erishiladi.",
          ru: "Концепция «невидимой руки»: Преследуя собственную выгоду, индивид направляется рыночной конкуренцией к общему благу эффективнее, чем при государственном плане.",
          en: "The 'Invisible Hand': Individual self-interest channeled through competitive markets unintentionally promotes collective prosperity."
        },
        {
          uz: "Mehnat taqsimoti: Ishlab chiqarish jarayonini mayda operatsiyalarga bo'lish unumdorlikni yuzlab baravarga oshiradi (mashhur to'g'nog'ich ishlab chiqarish misoli).",
          ru: "Разделение труда: Расчленение производства на простые операции колоссально повышает производительность (пример булавочной мануфактуры).",
          en: "Division of Labor: Deconstructing manufacturing into specialized repetitive tasks multiplies output exponentially (the famous pin factory case)."
        },
        {
          uz: "Mehnat qiymat nazariyasi: Tovar qiymatining asosi uni ishlab chiqarish uchun sarflangan ijtimoiy zaruriy mehnat miqdori bilan belgilanadi.",
          ru: "Трудовая теория стоимости: Меновая стоимость товаров определяется количеством труда, затраченного на их производство.",
          en: "Labor Theory of Value: The exchange value of commodities is rooted in the quantity of labor required for their production."
        },
        {
          uz: "Davlatning roli — «Tungi qorovul»: Davlat iqtisodiy jarayonlarga aralashmasligi, faqat mudofaa, odil sud va umumiy jamoat inshootlarini (yo'llar, ko'priklar) ta'minlashi lozim.",
          ru: "Государство как «ночной сторож»: Функции государства ограничены внешней безопасностью, правопорядком и поддержанием инфраструктуры.",
          en: "The 'Night-Watchman State': Restricting sovereign activity to defense, impartial justice, and essential public works."
        }
      ],
      significance: {
        uz: "Adam Smit erkin bozor iqtisodiyotining (kapitalizmning) buyuk me'mori bo'lib, uning asari bugungi kunda ham barcha iqtisodiy ta'limotlarning boshlang'ich nuqtasi sanaladi.",
        ru: "Смит заложил основы экономической теории рыночной системы, сформулировав принципы ценообразования, налогообложения и международной торговли.",
        en: "Smith's ideas formed the bedrock of classical liberal economic theory, establishing the core mechanics of pricing, competition, and public finance."
      }
    },
    keyTerms: [
      {
        term: { uz: "Ko'rinmas qo'l", ru: "Невидимая рука", en: "Invisible Hand" },
        definition: {
          uz: "Bozor narxlari va raqobat vositasida shaxsiy manfaatlarni butun jamiyat boyligini oshirishga yo'naltiruvchi ob'ektiv kuch.",
          ru: "Стихийный рыночный механизм координации индивидуальных интересов на благо общества.",
          en: "The uncoordinated price mechanism whereby individual self-seeking actions advance societal welfare."
        }
      },
      {
        term: { uz: "Mehnat taqsimoti", ru: "Разделение труда", en: "Division of Labor" },
        definition: {
          uz: "Mehnatning alohida operatsiyalarga va ixtisoslashuvga ajralishi natijasida unumdorlikning keskin oshishi.",
          ru: "Дифференциация производственной деятельности, ведущая к росту производительности.",
          en: "The specialization of cooperative labor in specific tasks, driving productivity gains."
        }
      },
      {
        term: { uz: "Homo Economicus", ru: "Человек экономический", en: "Economic Man" },
        definition: {
          uz: "O'z shaxsiy moddiy manfaatini maksimal darajada oshirishga intiluvchi oqilona iqtisodiy shaxs konsepsiyasi.",
          ru: "Модель рационального человека, стремящегося к максимизации личной выгоды при минимальных издержках.",
          en: "The model of human behavior as rational actors seeking to maximize self-interest and utility."
        }
      }
    ],
    famousWorks: [
      {
        title: "An Inquiry into the Nature and Causes of the Wealth of Nations",
        year: "1776",
        author: "Adam Smith",
        description: {
          uz: "Zamonaviy iqtisodiyot fanining poydevori hisoblangan buyuk asar.",
          ru: "Фундаментальный труд, ставший библией классического капитализма.",
          en: "The foundational bible of classical economics and free market theory."
        }
      }
    ],
    interestingFact: {
      uz: "Adam Smit o'zining to'g'nog'ich ishlab chiqarish misolida ko'rsatganidek: agar bir ishchi yolg'iz o'zi to'g'nog'ich yasasa, kuniga zo'rg'a 20 ta yasashi mumkin; agar mehnat 18 ta alohida bosqichga bo'linib, 10 nafar ishchi ixtisoslashsa, ular birgalikda kuniga 48 000 ta to'g'nog'ich ishlab chiqaradi!",
      ru: "В примере со швейными булавками Смит подсчитал: один рабочий без разделения труда сделает от силы 20 булавок в день; при разделении же на 18 операций бригада из 10 человек выпускала 48 000 булавок в день!",
      en: "In his famous pin factory illustration, Smith showed that while one craftsman could scarcely make 20 pins a day, 10 workers dividing 18 distinct steps produced over 48,000 pins daily."
    },
    quiz: [
      {
        question: {
          uz: "Adam Smitning mashhur «Xalqlar boyligi» asari nechanchi yilda nashr etilgan?",
          ru: "В каком году вышел в свет главный труд Адама Смита «Богатство народов»?",
          en: "In what landmark year was Adam Smith's 'The Wealth of Nations' published?"
        },
        options: {
          uz: ["1776", "1789", "1848", "1615"],
          ru: ["1776", "1789", "1848", "1615"],
          en: ["1776", "1789", "1848", "1615"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Asar 1776 yilda Londonda chop etilgan va bu sana iqtisodiyot fanining mustaqil ilmiy tug'ilish yili deb e'tirof etiladi.",
          ru: "Книга вышла в 1776 году, совпав с годом принятия Декларации независимости США.",
          en: "Published in 1776, coincidentally the same year as the US Declaration of Independence."
        }
      },
      {
        question: {
          uz: "Adam Smit bo'yicha bozor iqtisodiyotini tartibga soluvchi «ko'rinmas qo'l» nima?",
          ru: "Что Адам Смит понимал под метафорой «невидимой руки»?",
          en: "What does Adam Smith's metaphor of the 'Invisible Hand' represent?"
        },
        options: {
          uz: ["Erkin narxlar va bozor raqobati mexanizmi", "Hukumatning yashirin buyruqlari", "Xayriya jamg'armalari yordami", "Markaziy bank foiz stavkasi"],
          ru: ["Механизм рыночной конкуренции и ценообразования", "Тайные правительственные распоряжения", "Благотворительные пожертвования", "Ставку центрального банка"],
          en: ["Free price mechanisms and competitive market forces", "Secret state government directives", "Philanthropic donations", "Central bank interest rates"]
        },
        correctIndex: 0,
        explanation: {
          uz: "«Ko'rinmas qo'l» — bu bozor qatnashchilarining o'z shaxsiy manfaatini ko'zlashi natijasida erkin narxlar va raqobat orqali jamiyat ehtiyojlarining qondirilishidir.",
          ru: "Свободная конкуренция заставляет производителей удовлетворять запросы покупателей по наилучшей цене.",
          en: "It signifies competitive market forces guiding self-interested agents to coordinate socially optimal production."
        }
      },
      {
        question: {
          uz: "Adam Smit davlatning iqtisodiyotdagi roliga qanday munosabatda bo'lgan?",
          ru: "Какой роли придерживался Адам Смит относительно участия государства в экономике?",
          en: "What role did Adam Smith assign to the state in the economy?"
        },
        options: {
          uz: ["«Tungi qorovul» — faqat mudofaa, odil sud va zarur infratuzilmani ta'minlash", "Barcha narxlarni qat'iy belgilash", "Xususiy mulkni taqiqlash", "Tashqi savdoga to'liq monopol bo'lish"],
          ru: ["«Ночной сторож» — охрана собственности, правосудие и инфраструктура", "Жесткое директивное ценообразование", "Запрет частной собственности", "Монополия на внешнюю торговлю"],
          en: ["'Night-watchman' — protecting property, defense, justice, and infrastructure", "Setting rigid price ceilings", "Abolishing private property", "State monopoly over trade"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Smit davlat ishlab chiqarish va narx belgilashga aralashmasligi, faqat xavfsizlik va adolatni kafolatlashi kerakligini ta'kidlagan.",
          ru: "Смит выступал против государственного диктата, признавая за властью лишь защитные и правовые функции.",
          en: "Smith strictly opposed state price-fixing, endorsing only defense, impartial laws, and public works."
        }
      }
    ]
  }
];
