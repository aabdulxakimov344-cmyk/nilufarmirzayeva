import { Topic } from '../types';

export const topicsPart2: Topic[] = [
  {
    id: 6,
    numberStr: "06",
    title: {
      uz: "D. Rikardo: qiymat va renta nazariyasi",
      ru: "Д. Рикардо: теория стоимости и земельной ренты",
      en: "David Ricardo: Theory of Value, Rent, and Comparative Advantage"
    },
    period: {
      uz: "XIX asr boshi (1810 — 1823-yillar)",
      ru: "Начало XIX века (1810–1823 гг.)",
      en: "Early 19th Century (1810s – 1823)"
    },
    scholarsSummary: {
      uz: "Devid Rikardo",
      ru: "Давид Рикардо",
      en: "David Ricardo"
    },
    iconName: "TrendingUp",
    shortDesc: {
      uz: "Differensial yer rentasi, xalqaro savdoda nisbiy ustunlik nazariyasi va daromadlarning sinflar o'rtasida taqsimlanishi qonuniyatlari.",
      ru: "Дифференциальная земельная рента, закон сравнительных преимуществ во внешней торговле и распределение доходов.",
      en: "Differential ground rent, the law of comparative advantage in international trade, and distribution dynamics."
    },
    scholars: [
      {
        id: "david-ricardo",
        name: "Devid Rikardo (David Ricardo)",
        years: "1772 – 1823",
        country: { uz: "Buyuk Britaniya (London)", ru: "Великобритания (Лондон)", en: "Great Britain (London)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/David_ricardo.jpg",
        title: { uz: "Klassik maktabning yirik nazariyotchisi", ru: "Крупнейший теоретик классической школы", en: "Master of Classical Economic Theory" },
        quote: {
          uz: "Iqtisodiy tahlilning asosiy vazifasi — yer egalari, kapitalistlar va ishchilar o'rtasida hosil qilingan mahsulotning taqsimlanish qonunlarini aniqlashdir.",
          ru: "Главная задача политической экономии — определить законы, управляющие распределением дохода между классами.",
          en: "To determine the laws which regulate this distribution is the principal problem in Political Economy."
        },
        majorWorks: [
          "Siyosiy iqtisod va soliqqa tortish tamoyillari (1817)",
          "Don qonunlarining foydaga ta'siri to'g'risida tajriba (1815)"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "London birjasining muvaffaqiyatli moliyachisi Devid Rikardo klassik siyosiy iqtisodning eng qat'iy mantiqiy tizimini barpo etdi. U qiymatning mehnat nazariyasini eng yuqori ilmiy cho'qqiga olib chiqdi va iqtisodiyotda daromadlar (renta, foyda, ish haqi) qanday taqsimlanishini aniqlab berdi.",
        ru: "Давид Рикардо придал классической политэкономии строгий дедуктивный характер. Он последовательно выводил все экономические категории (цену, прибыль, заработную плату, ренту) из единого принципа трудовой стоимости и сформулировал фундаментальные законы распределения.",
        en: "Financier David Ricardo endowed classical economics with rigorous deductive method. Deriving all categories from labor value, he elucidated how total output is partitioned among landlords, capitalists, and laborers."
      },
      historicalContext: {
        uz: "Napoléon urushlaridan so'ng Angliyada «Don qonunlari» (Corn Laws) qabul qilingan bo'lib, g'allaga baland import bojlari qo'yilishi natijasida non narxi oshgan, bu esa yer egalariga katta renta keltirib, sanoatchilar foydasini kamaytirgan edi.",
        ru: "После Наполеоновских войн в Англии обострилась борьба вокруг «Хлебных законов», взвинчивавших цены на зерно ради обогащения лендлордов в ущерб промышленникам.",
        en: "Post-Napoleonic Britain experienced fierce political struggle over the protectionist Corn Laws, which inflated grain prices to the benefit of aristocratic landlords while squeezing industrial profits."
      },
      coreIdeas: [
        {
          uz: "Differensial yer rentasi nazariyasi: Renta unumdorligi va joylashuvi yaxshiroq bo'lgan yerlardan olinadi; eng yomon yerlarda esa renta hosil bo'lmaydi.",
          ru: "Теория дифференциальной ренты: Рента возникает из-за естественных различий в плодородии и местоположении участков земли.",
          en: "Differential Rent: Rent arises from differences in the fertility and locational advantage of land brought under cultivation."
        },
        {
          uz: "Nisbiy ustunlik nazariyasi (Comparative Advantage): Hatto bir mamlakat barcha tovarlarni ishlab chiqarishda ustun bo'lsa ham, nisbiy xarajatlari kamroq bo'lgan tovarlarga ixtisoslashish orqali xalqaro savdoda har ikki tomon yutadi.",
          ru: "Теория сравнительных преимуществ: Странам выгодно торговать, даже если одна из них производит все товары дешевле, специализируясь на относительно меньших издержках.",
          en: "Comparative Advantage: Nations gain mutually from international trade by specializing in goods where their opportunity costs are lowest."
        },
        {
          uz: "Foyda va ish haqi o'rtasidagi teskari mutanosiblik: Ish haqining oshishi muqarrar ravishda tadbirkor (kapitalist) foydasining kamayishiga olib keladi.",
          ru: "Обратная зависимость прибыли и зарплаты: Доля прибыли падает при возрастании издержек на заработную плату.",
          en: "Inverse relation between wages and profit: Rising wage expenses diminish the residual profit of industrial capital."
        }
      ],
      significance: {
        uz: "Rikardoning nisbiy ustunlik nazariyasi bugungi kunga qadar Jahon Savdo Tashkiloti (JST) va erkin global savdoning nazariy negizi bo'lib xizmat qiladi.",
        ru: "Теория сравнительных преимуществ Рикардо по сей день остается краеугольным камнем свободной международной торговли и ВТО.",
        en: "Ricardo's law of comparative advantage remains the foundational intellectual justification for free international trade."
      }
    },
    keyTerms: [
      {
        term: { uz: "Nisbiy ustunlik", ru: "Сравнительное преимущество", en: "Comparative Advantage" },
        definition: {
          uz: "Mamlakatning muayyan tovarni boshqa mamlakatlarga nisbatan kamroq muqobil xarajat bilan ishlab chiqarish qobiliyati.",
          ru: "Способность страны производить товар с меньшими альтернативными издержками по сравнению с партнерами.",
          en: "The ability of an economy to produce a particular good at a lower relative opportunity cost than trading partners."
        }
      },
      {
        term: { uz: "Differensial renta", ru: "Дифференциальная рента", en: "Differential Rent" },
        definition: {
          uz: "Hosildorligi yoki joylashuvi qulay bo'lgan yerlardan olinadigan qo'shimcha soflik daromadi.",
          ru: "Добавочный доход, получаемый владельцем более плодородного или выгодно расположенного участка земли.",
          en: "Surplus return accruing to superior or more conveniently situated agricultural soil."
        }
      },
      {
        term: { uz: "Don qonunlari", ru: "Хлебные законы", en: "Corn Laws" },
        definition: {
          uz: "1815–1846 yillarda Buyuk Britaniyada chetdan don olib kirishni cheklovchi protektsionistik qonunlar.",
          ru: "Протекционистские тарифы на импорт зерна в Великобритании в 1815–1846 годах.",
          en: "Tariff acts enforced in the UK between 1815 and 1846 restricting grain imports to protect domestic land rents."
        }
      }
    ],
    famousWorks: [
      {
        title: "On the Principles of Political Economy and Taxation",
        year: "1817",
        author: "David Ricardo",
        description: {
          uz: "Renta, soliqlar, nisbiy ustunlik va qiymat qonunlarini mantiqiy asoslagan mashhur asar.",
          ru: "Главный труд Рикардо, заложивший основы аналитической политэкономии.",
          en: "Ricardo's seminal treatise formalizing value, rent distribution, and international trade."
        }
      }
    ],
    interestingFact: {
      uz: "Devid Rikardo professional iqtisodchi emas, balki birja dileri edi. U 1815 yilda Vaterloo jangi arafasida o'zining aql-idroki bilan birja obligatsiyalarini xarid qilib, bir kunda o'sha davr hisobi bilan 1 million funt sterlingdan ortiq ulkan boylik orttirgan.",
      ru: "Рикардо заработал колоссальное состояние на Лондонской бирже во время битвы при Ватерлоо, сыграв на правительственных облигациях, после чего ушел в науку.",
      en: "Ricardo made a legendary fortune on the London Stock Exchange in 1815 by trading British government securities on the outcome of the Battle of Waterloo."
    },
    quiz: [
      {
        question: {
          uz: "Devid Rikardoning xalqaro savdodagi eng buyuk kashfiyoti qaysi nazariya hisoblanadi?",
          ru: "Какая теория Д. Рикардо стала величайшим вкладом в теорию международной торговли?",
          en: "Which doctrine represents David Ricardo's most celebrated contribution to trade theory?"
        },
        options: {
          uz: ["Nisbiy (qiyosiy) ustunlik nazariyasi", "Monetarizm", "Eksportni taqiqlash nazariyasi", "Yerga yagona soliq solish"],
          ru: ["Теория сравнительных преимуществ", "Монетаризм", "Запрет экспорта", "Единый земельный налог"],
          en: ["Theory of Comparative Advantage", "Monetarism", "Bullion Export Prohibition", "Single Land Tax"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Rikardo mamlakatlar nisbiy xarajatlari kamroq bo'lgan sohalarga ixtisoslashganda umumiy jahon mahsuloti ko'payishini isbotlagan.",
          ru: "Рикардо доказал, что взаимная торговля выгодна даже при абсолютном превосходстве одной из стран во всех отраслях.",
          en: "He proved that countries mutually benefit when each specializes where its opportunity costs are lowest."
        }
      },
      {
        question: {
          uz: "Rikardo bo'yicha differensial yer rentasi nima sababli paydo bo'ladi?",
          ru: "Из-за чего, согласно Рикардо, возникает дифференциальная рента?",
          en: "According to Ricardo, what causes differential ground rent to emerge?"
        },
        options: {
          uz: ["Yerlarning unumdorligi va bozorga yaqinligidagi tabiiy farqlar tufayli", "Faqat yer egalarining qat'iy talabi tufayli", "Yerni bepul tarqatish oqibatida", "Sun'iy o'g'itlar yetishmasligidan"],
          ru: ["Из-за различий в естественном плодородии и близости участков к рынку сбыта", "Из-за каприза землевладельцев", "Из-за бесплатной раздачи наделов", "Из-за нехватки удобрений"],
          en: ["Differences in natural fertility and proximity to consumer markets", "Mere landlord whim", "Free land redistribution", "Shortage of chemical fertilizers"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Yaxshiroq va qulayroq joylashgan yerlardan kamroq xarajat bilan hosil olinadi, narx esa eng yomon yerdagi xarajat bilan belgilanadi, natijada farq renta bo'ladi.",
          ru: "Рыночная цена формируется на худших землях, а на лучших возникает добавочный дифференциальный доход.",
          en: "Since market price reflects production costs on the marginal (worst) plot, better plots yield differential surplus."
        }
      },
      {
        question: {
          uz: "Rikardo Angliyadagi qaysi qonunlarning bekor qilinishini qat'iy himoya qilgan?",
          ru: "Отмену каких законов активно отстаивал Давид Рикардо в парламенте?",
          en: "Which British protectionist legislation did Ricardo vehemently seek to abolish?"
        },
        options: {
          uz: ["«Don qonunlari» (Corn Laws)", "«Oltin qonunlari»", "«Soliq kodeksi»", "«Bankrotlik to'g'risida qonun»"],
          ru: ["«Хлебные законы» (Corn Laws)", "«Закон о золотом запасе»", "«Налоговый кодекс»", "«Закон о банкротстве»"],
          en: ["The 'Corn Laws'", "Gold Reserve Acts", "General Tax Code", "Bankruptcy Law"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Rikardo Don qonunlari non narxini asossiz oshirib, sanoat rivojiga to'sqinlik qilayotganini tushuntirgan.",
          ru: "Рикардо доказывал, что дорогая пшеница снижает норму прибыли капитала и тормозит прогресс промышленности.",
          en: "He demonstrated that artificially dear grain elevated subsistence wages and suppressed manufacturing profits."
        }
      }
    ]
  },
  {
    id: 7,
    numberStr: "07",
    title: {
      uz: "T.R. Maltus: aholi nazariyasi",
      ru: "Т.Р. Мальтус: теория народонаселения",
      en: "Thomas Robert Malthus: Theory of Population"
    },
    period: {
      uz: "1798-yil — XIX asr o'rtalari",
      ru: "1798 г. — середина XIX века",
      en: "1798 – Mid 19th Century"
    },
    scholarsSummary: {
      uz: "Tomas Robert Maltus",
      ru: "Томас Роберт Мальтус",
      en: "Thomas Robert Malthus"
    },
    iconName: "Users",
    shortDesc: {
      uz: "Aholining geometrik progressiyada, oziq-ovqat mahsulotlarining esa arifmetik progressiyada o'sishi haqidagi bahsli nazariya.",
      ru: "Закон народонаселения: геометрический рост численности людей против арифметического роста производства продовольствия.",
      en: "The controversial postulate that population expands geometrically while subsistence expands only arithmetically."
    },
    scholars: [
      {
        id: "thomas-malthus",
        name: "Tomas Robert Maltus (Thomas Malthus)",
        years: "1766 – 1834",
        country: { uz: "Angliya", ru: "Англия", en: "England" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Thomas_Robert_Malthus.jpg",
        title: { uz: "Ruhoniy, demograf va iqtisodchi", ru: "Демограф и священник", en: "Pioneer Demographer & Cleric" },
        quote: {
          uz: "Aholi soni o'sishi geometrik progressiyada, yashash vositalari esa arifmetik progressiyada ko'payadi.",
          ru: "Население имеет тенденцию расти в геометрической прогрессии, тогда как средства существования — лишь в арифметической.",
          en: "Population, when unchecked, increases in a geometrical ratio. Subsistence increases only in an arithmetical ratio."
        },
        majorWorks: [
          "Aholi qonuni to'g'risida tajriba (1798)",
          "Siyosiy iqtisod tamoyillari (1820)"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "Tomas Robert Maltus 1798 yilda e'lon qilgan o'zining «Aholi qonuni to'g'risida tajriba» kitobi bilan butun Yevropa ijtimoiy tafakkurini larzaga soldi. U insoniyatning ko'payish tezligi tabiatning oziq-ovqat berish imkoniyatlaridan ancha ilgarilab ketishini ta'kidladi.",
        ru: "Томас Роберт Мальтус сформулировал демографическую теорию, вызвавшую бурную дискуссию. По его расчетам, биологическая способность человечества к размножению опережает возможности сельского хозяйства наращивать производство продовольствия.",
        en: "Thomas Robert Malthus electrified intellectual discourse with his 1798 essay. He argued that unchecked biological fecundity vastly outpaces the Earth's agricultural capacity to produce sustenance."
      },
      historicalContext: {
        uz: "Angliyada kambag'allarga yordam ko'rsatish tizimi («Kambag'allar to'g'risidagi qonunlar») aholi sonining ko'payishi bilan xazinaga og'ir yuk bo'lib tushayotgan, shaharlarda ishchilar kvartallari qashshoqlikda yashayotgan edi.",
        ru: "Критика английских «Законов о бедных», которые, по мнению Мальтуса, поощряли безответственную рождаемость без наличия средств к пропитанию.",
        en: "The escalating fiscal burden of the English 'Poor Laws' and rampant urban destitution motivated Malthus's stark demographic critique."
      },
      coreIdeas: [
        {
          uz: "Aholi va oziq-ovqat nomutanosibligi: Aholi har 25 yilda 2 barobar ko'payadi (1, 2, 4, 8, 16...), oziq-ovqat esa asta-sekin arifmetik tarzda (1, 2, 3, 4, 5...) o'sadi.",
          ru: "Диспропорция роста: Население удваивается каждые 25 лет (геометрический ряд), а урожайность растет линейно (арифметический ряд).",
          en: "Malthusian Divergence: Population doubles every 25 years geometrically (1, 2, 4, 8...), whereas subsistence increases arithmetically (1, 2, 3, 4...)."
        },
        {
          uz: "Aholini cheklovchi omillar: Faol to'siqlar (ochlik, epidemiyalar, urushlar) va oldini oluvchi to'siqlar (kech turmush qurish, axloqiy tiyilish).",
          ru: "Факторы сдерживания: Разрушительные (голод, болезни, войны) и предупредительные (поздние браки, воздержание).",
          en: "Checks to Population: Positive checks (starvation, pestilence, warfare) and preventive checks (delayed marriage, moral restraint)."
        },
        {
          uz: "Yetarli talab nazariyasi: Maltus tovarlarning ortiqcha ishlab chiqarilish inqirozlarini tahlil qilib, «ishlab chiqarmaydigan iste'molchilar» (mulkdorlar) yalpi talabni ta'minlashda kerakligini aytgan.",
          ru: "Теория недопотребления: Мальтус указал на риск перепроизводства при нехватке платежеспособного спроса.",
          en: "Underconsumption Hypothesis: Anticipating Keynes, Malthus noted that productive workers alone cannot absorb aggregate output without solvent third-party demand."
        }
      ],
      significance: {
        uz: "Maltusning qarashlari zamonaviy demografiya fani, resurslar cheklanganligi haqidagi ekologik xulosalar va Charlz Darvinning evolyutsiya nazariyasiga bevosita ta'sir ko'rsatdi.",
        ru: "Идеи Мальтуса заложили базу современной демографии и повлияли на Чарльза Дарвина при создании теории естественного отбора.",
        en: "Malthus catalyzed modern demographic studies, ecological carrying-capacity models, and directly inspired Charles Darwin's concept of natural selection."
      }
    },
    keyTerms: [
      {
        term: { uz: "Maltuschilik tuzog'i", ru: "Мальтузианская ловушка", en: "Malthusian Trap" },
        definition: {
          uz: "Texnologik o'sish natijasida hosil bo'lgan daromadning aholi soni ko'payishi bilan yutib yuborilishi va turmush darajasining yana pasayishi.",
          ru: "Ситуация, когда рост производства нивелируется демографическим взрывом, оставляя уровень жизни на грани выживания.",
          en: "A condition where technological gains result in population expansion rather than higher sustained per-capita income."
        }
      },
      {
        term: { uz: "Geometrik progressiya", ru: "Геометрическая прогрессия", en: "Geometric Progression" },
        definition: {
          uz: "Har bir keyingi hadi oldingisidan muayyan baravar (masalan, 2 barobar) ko'payib boruvchi raqamlar qatori.",
          ru: "Последовательность чисел, где каждый член возрастает путем умножения на постоянное число.",
          en: "An exponential numerical sequence where each term multiplies by a constant ratio."
        }
      },
      {
        term: { uz: "Tuproq unumdorligining pasayishi qonuni", ru: "Закон убывающего плодородия почвы", en: "Law of Diminishing Returns" },
        definition: {
          uz: "Muayyan yer maydoniga qo'shimcha mehnat va kapital sarflash natijasida olinadigan qo'shimcha hosilning kamayib borishi.",
          ru: "Тенденция к снижению предельной отдачи при последовательном вложении труда в фиксированный участок земли.",
          en: "The principle that sequential additions of variable inputs to fixed land yield progressively smaller marginal returns."
        }
      }
    ],
    famousWorks: [
      {
        title: "An Essay on the Principle of Population",
        year: "1798",
        author: "Thomas Robert Malthus",
        description: {
          uz: "Aholi va oziq-ovqat mutanosibligini o'rgangan dunyoga mashhur asar.",
          ru: "Книга, положившая начало демографической науке и жарким спорам.",
          en: "The world-famous essay inaugurating demographic analysis and limits to growth."
        }
      }
    ],
    interestingFact: {
      uz: "Tomas Maltusning aynan shu asarini o'qigan Charlz Darvin o'z kundaligida yozishicha, hayvonlar va o'simliklar dunyosidagi «yashash uchun kurash» va «tabiiy tanlanish» haqidagi fikr unga aynan Maltusning aholi nazariyasini tahlil qilgandan so'ng kelgan.",
      ru: "Чарльз Дарвин признавал, что идея естественного отбора и борьбы за выживание осенила его именно при чтении трактата Мальтуса о перенаселении.",
      en: "Charles Darwin credited Malthus's 'Essay on Population' with giving him the pivotal breakthrough for the theory of natural selection."
    },
    quiz: [
      {
        question: {
          uz: "Maltus bo'yicha aholi soni qanday progressiyada o'sadi?",
          ru: "В какой прогрессии, согласно теории Мальтуса, возрастает численность населения?",
          en: "In what mathematical progression does population tend to grow according to Malthus?"
        },
        options: {
          uz: ["Geometrik progressiyada (1, 2, 4, 8...)", "Arifmetik progressiyada (1, 2, 3, 4...)", "O'zgarmas doimiy tarzda", "Faqat pasayib boradi"],
          ru: ["В геометрической прогрессии (1, 2, 4, 8...)", "В арифметической прогрессии (1, 2, 3, 4...)", "Остается неизменной", "Снижается"],
          en: ["Geometric progression (1, 2, 4, 8...)", "Arithmetic progression (1, 2, 3, 4...)", "Remains constant", "Declines steadily"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Maltus aholining tabiiy ko'payish biologik qobiliyati geometrik o'sishga moyil deb hisoblagan.",
          ru: "При отсутствии сдерживающих факторов население способно удваиваться каждые четверть века.",
          en: "Malthus posited that biological reproduction doubles population exponentially in unchecked circumstances."
        }
      },
      {
        question: {
          uz: "Maltus aholining haddan tashqari ko'payishini oldini oluvchi «ogohlantiruvchi» chora deb nimani hisoblagan?",
          ru: "Что Мальтус относил к нравственным «предупредительным» мерам ограничения роста населения?",
          en: "What did Malthus advocate as a moral 'preventive' check on population explosion?"
        },
        options: {
          uz: ["Kech turmush qurish va axloqiy tiyilish", "Urushlar boshlash", "Epidemiyalar tarqatish", "Majburiy ko'chirish"],
          ru: ["Поздние браки и моральное воздержание", "Военные конфликты", "Эпидемии", "Принудительное переселение"],
          en: ["Delayed marriage and moral self-restraint", "Inciting wars", "Spreading epidemics", "Forced deportation"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Ruhoniy bo'lgan Maltus xalqni o'z iqtisodiy imkoniyatini hisobga olib, kechroq oila qurishga chaqirgan.",
          ru: "Мальтус призывал создавать семьи только тогда, когда родители способны материально прокормить потомство.",
          en: "As an Anglican minister, Malthus urged citizens to marry only when economically capable of supporting offspring."
        }
      },
      {
        question: {
          uz: "«Maltuschilik tuzog'i» (Malthusian Trap) atamasi nimani ifodalaydi?",
          ru: "Что в исторической экономике называют «мальтузианской ловушкой»?",
          en: "What phenomenon does the 'Malthusian Trap' describe in economic history?"
        },
        options: {
          uz: ["Hosil va daromad ko'payishi bilan aholi ham ko'payib, turmush darajasi yana pasayib qolishini", "Barcha qishloq xo'jaligining barbod bo'lishini", "Soliqlarning 100% ga yetishini", "Faqat oltin zaxirasi qolishini"],
          ru: ["Поглощение технологического роста демографическим приростом на грани прожиточного минимума", "Полный крах аграрного сектора", "Рост налогов до 100%", "Исчезновение бумажных денег"],
          en: ["Output gains being swallowed by subsequent population booms, keeping living standards near subsistence", "Total ruin of farming", "Tax rates reaching 100%", "Paper money eradication"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Sanoat inqilobigacha insoniyat ming yillar davomida bu tuzoqda yashagan: ishlab chiqarish oshsa, aholi ko'payib, yana qashshoqlik darajasiga tushgan.",
          ru: "До индустриализации любой рост производительности вел лишь к росту ртов, но не дохода на душу.",
          en: "Prior to industrialization, productivity increases led to higher births, diluting per capita welfare back to subsistence."
        }
      }
    ]
  },
  {
    id: 8,
    numberStr: "08",
    title: {
      uz: "Marksistik siyosiy iqtisod: Kapital",
      ru: "Марксистская политическая экономия: Капитал",
      en: "Marxian Political Economy: Das Kapital"
    },
    period: {
      uz: "1848 — 1880-yillar",
      ru: "1848–1880-е годы",
      en: "1848 – 1880s"
    },
    scholarsSummary: {
      uz: "Karl Marks, Fridrix Engels",
      ru: "Карл Маркс, Фридрих Энгельс",
      en: "Karl Marx, Friedrich Engels"
    },
    iconName: "Hammer",
    shortDesc: {
      uz: "Qo'shimcha qiymat nazariyasi, yollanma mehnat ekspluatatsiyasi, kapitalning to'planishi va ishlab chiqarish vositalariga jamoat mulki.",
      ru: "Теория прибавочной стоимости, капиталистическая эксплуатация, накопление капитала и неизбежность социализации.",
      en: "Surplus value, exploitation of wage labor, accumulation of capital, and dialectical materialist economics."
    },
    scholars: [
      {
        id: "karl-marx",
        name: "Karl Marks (Karl Marx)",
        years: "1818 – 1883",
        country: { uz: "Germaniya / Buyuk Britaniya", ru: "Германия / Великобритания", en: "Germany / Great Britain" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg",
        title: { uz: "Ilmiy sotsializm va «Kapital» muallifi", ru: "Создатель научного коммунизма", en: "Philosopher & Author of Das Kapital" },
        quote: {
          uz: "Kapital o'zining tabiatiga ko'ra qo'shimcha qiymatni so'rib olishga intiluvchi vampir kabidir.",
          ru: "Капитал — это мертвый труд, который, как вампир, оживает лишь тогда, когда всасывает живой труд.",
          en: "Capital is dead labour, that, vampire-like, only lives by sucking living labour, and lives the more, the more labour it sucks."
        },
        majorWorks: [
          "Kapital (Das Kapital, 1867)",
          "Kommunistik partiya manifesti (1848)"
        ]
      },
      {
        id: "friedrich-engels",
        name: "Fridrix Engels (Friedrich Engels)",
        years: "1820 – 1895",
        country: { uz: "Germaniya / Angliya", ru: "Германия / Англия", en: "Germany / England" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Friedrich_Engels_portrait_%28cropped%29.jpg",
        title: { uz: "Marksning yaqin do'sti va safdoshi", ru: "Мыслитель и соратник Маркса", en: "Social Theorist & Collaborator" },
        quote: {
          uz: "Insoniyat siyosat, din va san'at bilan shug'ullanishdan oldin, yashash uchun yeb-ichish va kiyinish imkoniga ega bo'lishi lozim.",
          ru: "Люди в первую очередь должны есть, пить, иметь жилище и одеваться, прежде чем заниматься политикой и наукой.",
          en: "Mankind must first of all eat, drink, have shelter and clothing, before it can pursue politics, science, and art."
        },
        majorWorks: ["Angliyada ishchilar sinfining ahvoli (1845)", "Anti-Dyuring (1878)"]
      }
    ],
    detail: {
      introduction: {
        uz: "Karl Marks va Fridrix Engels XIX asr o'rtalarida klassik siyosiy iqtisodning mehnat qiymat nazariyasini tahlil qilib, kapitalistik tizimning ichki ziddiyatlarini fosh etuvchi yangi iqtisodiy ta'limotni yaratdilar. Ular 1867 yilda nashr etilgan «Kapital» asarida qo'shimcha qiymat mexanizmini kashf etdilar.",
        ru: "Марксизм переосмыслил классическую теорию с позиций материалистической диалектики. В монументальном труде «Капитал» Маркс исследовал природу товара, прибавочной стоимости и неизбежные кризисы перепроизводства, обусловленные погоней за прибылью.",
        en: "Karl Marx and Friedrich Engels synthesized classical value theory through historical materialism. In 'Das Kapital' (1867), Marx diagnosed the extraction of surplus value as the engine and structural crisis point of bourgeois capitalism."
      },
      historicalContext: {
        uz: "Yevropada sanoat inqilobi g'alaba qozonib, 12-14 soatlik ish kuni, ayollar va bolalar mehnati keng tarqalgan, ishchilar qashshoqlikda yashayotgan va davriy iqtisodiy inqirozlar (1825, 1847) ro'y berayotgan davr edi.",
        ru: "Жестокие условия труда на фабриках Викторианской Англии, пауперизация пролетариата и кризисы перепроизводства породили мощное рабочее движение.",
        en: "Brutal factory conditions during the high Victorian era, rampant child labor, and recurring cyclical recessions stimulated organized proletarian resistance."
      },
      coreIdeas: [
        {
          uz: "Qo'shimcha qiymat nazariyasi: Ishchi o'z ish kuchi qiymatidan (ish haqidan) ko'proq qiymat yaratadi; bu ortiqcha qismni («m» — Mehrwert) kapitalist bepul o'zlashtiradi.",
          ru: "Прибавочная стоимость: Рабочий производит стоимость, превышающую стоимость его рабочей силы; разницу безвозмездно присваивает капиталист.",
          en: "Surplus Value (Mehrwert): Labor power creates value beyond its reproduction wage; this unpaid surplus value is appropriated by capital."
        },
        {
          uz: "Tovarning ikki tomonlama xarakteri: Mehnatning abstrak va aniq mehnatga bo'linishi tovarning iste'mol qiymati va ayirboshlash qiymatini hosil qiladi.",
          ru: "Двойственный характер труда: Абстрактный труд создает стоимость, а конкретный труд — потребительную стоимость товара.",
          en: "Dual nature of labor: Concrete labor produces use-value, while abstract human labor produces economic value."
        },
        {
          uz: "Foyda normasining pasayish tendentsiyasi: Mashinalar ulushi (doimiy kapital) oshishi bilan tirik mehnat nisbati kamayadi va umumiy foyda normasi pasayishga yuz tutadi.",
          ru: "Закон тенденции нормы прибыли к понижению: Рост органического строения капитала ведет к падению средней нормы отдачи.",
          en: "Tendency of the Rate of Profit to Fall: Increasing mechanization (organic composition of capital) exerts downward pressure on average profits."
        }
      ],
      significance: {
        uz: "Marksizm butun XX asr jahon siyosati, sotsialistik davlatlar vujudga kelishi va zamonaviy ijtimoiy himoya qonunchiligiga bevosita poydevor bo'ldi.",
        ru: "Марксизм оказал решающее влияние на мировую историю XX века, создание социального законодательства и критику финансового капитализма.",
        en: "Marxian economics altered global history, laying the theoretical basis for 20th-century socialist states and accelerating labor-protection laws."
      }
    },
    keyTerms: [
      {
        term: { uz: "Qo'shimcha qiymat", ru: "Прибавочная стоимость", en: "Surplus Value" },
        definition: {
          uz: "Yollanma ishchining mehnati bilan yaratilgan va kapitalist tomonidan bepul o'zlashtiriladigan qiymat.",
          ru: "Стоимость, создаваемая неоплаченным трудом наемного рабочего сверх стоимости его рабочей силы.",
          en: "The surplus value created by uncompensated labor over and above the subsistence cost of labor power."
        }
      },
      {
        term: { uz: "Doimiy va o'zgaruvchan kapital", ru: "Постоянный и переменный капитал", en: "Constant and Variable Capital" },
        definition: {
          uz: "Doimiy kapital («c») — mashina va xomashyo; o'zgaruvchan kapital («v») — ish kuchi sotib olishga sarflangan mablag'.",
          ru: "Постоянный капитал идет на средства производства, а переменный — на наем рабочей силы.",
          en: "Constant capital represents machinery and raw materials; variable capital denotes wage outlays generating surplus."
        }
      },
      {
        term: { uz: "Ish kuchi", ru: "Рабочая сила", en: "Labor Power" },
        definition: {
          uz: "Insonning moddiy ne'matlar yaratishga qodir jismoniy va aqliy qobiliyatlari yig'indisi (kapitalizmda tovar).",
          ru: "Способность человека к труду, становящаяся товаром при капиталистических отношениях.",
          en: "The aggregate mental and physical capabilities of a human, transformed into a commodity under capitalism."
        }
      }
    ],
    famousWorks: [
      {
        title: "Das Kapital. Kritik der politischen Ökonomie",
        year: "1867",
        author: "Karl Marx",
        description: {
          uz: "Kapitalistik ishlab chiqarish usulining anatomiyasini ochib bergan ko'p jildlik monumental asar.",
          ru: "Фундаментальный труд, детально исследовавший механизм капиталистического способа производства.",
          en: "The master critique of political economy dissecting the capitalist mode of production."
        }
      }
    ],
    interestingFact: {
      uz: "Karl Marks umrining deyarli 30 yilini Londondagi Britaniya muzeyi kutubxonasida («British Museum Reading Room») o'tkazib, har kuni ertalabdan kechgacha iqtisodiy jurnallar va hukumat hisobotlarini o'qib, «Kapital» asarini yozgan.",
      ru: "Маркс провел более 30 лет в читальном зале Британского музея в Лондоне, изучая горы синих книг фабричных инспекций для написания «Капитала».",
      en: "Marx worked for three decades in the British Museum Reading Room, tirelessly sifting through factory inspector reports to construct 'Das Kapital'."
    },
    quiz: [
      {
        question: {
          uz: "Karl Marks ta'limotida «qo'shimcha qiymat» manbai nima?",
          ru: "Что является единственным источником прибавочной стоимости по Марксу?",
          en: "What is the sole source of surplus value according to Karl Marx?"
        },
        options: {
          uz: ["Yollanma ishchining to'lanmagan ortiqcha mehnati", "Fabrika stanoklari va texnologiya", "Bozorda tovarlarni qimmatroq sotish", "Bank kredit foizi"],
          ru: ["Неоплаченный прибавочный труд наемного рабочего", "Техника и фабричные станки", "Торговая наценка на рынке", "Банковский процент"],
          en: ["Unpaid surplus labor of the wage worker", "High-tech factory machinery", "Commercial trading markups", "Bank credit interest"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Marks mashinalar o'z qiymatini shunchaki yangi mahsulotga o'tkazishini, yangi qiymatni esa faqat insonning tirik mehnati yaratishini isbotlagan.",
          ru: "Машины лишь переносят свою стоимость на продукт, а создает новую стоимость только живой труд.",
          en: "Constant capital merely transfers existing value, while living human labor power alone creates fresh value."
        }
      },
      {
        question: {
          uz: "Karl Marksning bosh asari qaysi?",
          ru: "Как называется главный экономический труд Карла Маркса?",
          en: "What is Karl Marx's primary economic opus?"
        },
        options: {
          uz: ["«Kapital» (Das Kapital)", "«Xalqlar boyligi»", "«Siyosiy iqtisod traktati»", "«Umumiy nazariya»"],
          ru: ["«Капитал» (Das Kapital)", "«Богатство народов»", "«Трактат политэкономии»", "«Общая теория»"],
          en: ["'Das Kapital'", "'The Wealth of Nations'", "'Treatise on Political Economy'", "'The General Theory'"]
        },
        correctIndex: 0,
        explanation: {
          uz: "«Kapital» asarining 1-jildi 1867 yilda Gamburgda nashr etilgan; 2- va 3-jildlarini Marks vafotidan so'ng Engels tayyorlab chop ettirgan.",
          ru: "Первый том «Капитала» вышел в 1867 году, последующие тома издал Фридрих Энгельс.",
          en: "Volume 1 was published in 1867; Volumes 2 and 3 were edited and published posthumously by Engels."
        }
      },
      {
        question: {
          uz: "Kapitalizmda insonning qaysi qobiliyati tovar sifatida bozorga chiqadi?",
          ru: "Что в условиях капитализма становится товаром, продаваемым наемным работником?",
          en: "What becomes a traded commodity sold by wage laborers under capitalism?"
        },
        options: {
          uz: ["Ish kuchi (mehnat qilish qobiliyati)", "Faqat tayyor mahsulot", "Oila a'zolari", "Ijtimoiy obro'"],
          ru: ["Рабочая сила (способность к труду)", "Готовый товар", "Члены семьи", "Социальный статус"],
          en: ["Labor power (the capacity to labor)", "Finished consumer goods", "Family dependents", "Social standing"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Ishchi o'z mehnatini emas, balki muayyan vaqt davomida mehnat qilish qobiliyatini (ish kuchini) sotadi.",
          ru: "Рабочий продает не результат труда, а свою рабочую силу на определенное рабочее время.",
          en: "The laborer sells not realized labor, but the temporary capacity to work (labor power)."
        }
      }
    ]
  },
  {
    id: 9,
    numberStr: "09",
    title: {
      uz: "Neoklassik maktab: chegaraviy tahlil",
      ru: "Неоклассическая школа: маржинальный анализ",
      en: "Neoclassical School: The Marginal Revolution"
    },
    period: {
      uz: "1870 — 1890-yillar",
      ru: "1870–1890-е годы",
      en: "1870s – 1890s"
    },
    scholarsSummary: {
      uz: "Karl Menger, Leon Valras, Uilyam Stenli Jevons",
      ru: "Карл Менгер, Леон Вальрас, Уильям Стэнли Джевонс",
      en: "Carl Menger, Léon Walras, William Stanley Jevons"
    },
    iconName: "BarChart3",
    shortDesc: {
      uz: "Marjinal inqilob: chegaraviy naflilik nazariyasi, subyektiv baholash, umumiy iqtisodiy muvozanat va matematik modellar.",
      ru: "Маржиналистская революция: предельная полезность, субъективная ценность, общее равновесие и математические методы.",
      en: "The Marginal Revolution: subjective value, marginal utility, general equilibrium, and mathematical modeling."
    },
    scholars: [
      {
        id: "carl-menger",
        name: "Karl Menger (Carl Menger)",
        years: "1840 – 1921",
        country: { uz: "Avstriya (Vena)", ru: "Австрия (Вена)", en: "Austria (Vienna)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Carl_Menger.jpg",
        title: { uz: "Avstriya maktabi asoschisi", ru: "Основатель австрийской школы", en: "Founder of Austrian School of Economics" },
        quote: {
          uz: "Tovarning qiymati unga sarflangan mehnat bilan emas, balki iste'molchining unga bergan subyektiv bahosi va nafliligi bilan belgilanadi.",
          ru: "Ценность вещи определяется не затратами труда, а тем значением, которое придает ей потребитель.",
          en: "Value is not inherent in goods, no property of them, but merely the importance that we first attribute to the satisfaction of our needs."
        },
        majorWorks: ["Siyosiy iqtisod asoslari (1871)"]
      },
      {
        id: "leon-walras",
        name: "Leon Valras (Léon Walras)",
        years: "1834 – 1910",
        country: { uz: "Fransiya / Shveysariya (Lozanna)", ru: "Франция / Швейцария (Лозанна)", en: "France / Switzerland (Lausanne)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Leon_Walras.jpg",
        title: { uz: "Umumiy muvozanat nazariyasi otasi", ru: "Создатель теории общего равновесия", en: "Pioneer of General Equilibrium" },
        quote: {
          uz: "Iqtisodiyot barcha bozorlardagi talab va taklif tengligini ifodalovchi o'zaro bog'liq tenglamalar tizimidir.",
          ru: "Рыночная экономика — это система взаимосвязанных рынков, стремящихся к общему равновесию цен.",
          en: "Pure economics is essentially the theory of the determination of prices under a hypothetical regime of perfectly free competition."
        },
        majorWorks: ["Sof siyosiy iqtisod elementlari (1874)"]
      },
      {
        id: "william-jevons",
        name: "Uilyam Stenli Jevons (William Stanley Jevons)",
        years: "1835 – 1882",
        country: { uz: "Buyuk Britaniya (Manchester)", ru: "Великобритания (Манчестер)", en: "Great Britain (Manchester)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/William_Stanley_Jevons.jpg",
        title: { uz: "Ingliz marjinalizm yetakchisi", ru: "Лидер британского маржинализма", en: "British Marginalist & Logician" },
        quote: {
          uz: "Iqtisodiyot, agar u aniq fan bo'lishni istasa, shubhasiz matematik tilda so'zlashi kerak.",
          ru: "Политическая экономия должна быть математической наукой, исследующей максимизацию удовольствия.",
          en: "Value depends entirely upon utility. Economics must be a mathematical science."
        },
        majorWorks: ["Siyosiy iqtisod nazariyasi (1871)"]
      }
    ],
    detail: {
      introduction: {
        uz: "1870-yillarda bir vaqtning o'zida bir-biridan mustaqil ravishda uch mamlakatda (Menger — Avstriyada, Jevons — Angliyada, Valras — Shveysariyada) iqtisodiyot fanida haqiqiy inqilob — «Marjinal inqilob» yuz berdi. Ular klassiklarning xarajatlarga asoslangan obyektiv qiymat nazariyasidan voz kechib, chegaraviy naflilikka (marginal utility) asoslangan subyektiv tahlilni kashf qildilar.",
        ru: "В 1870-е годы произошла «Маржиналистская революция». К. Менгер, У.С. Джевонс и Л. Вальрас независимо друг от друга сместили фокус анализа с издержек производства на поведение потребителя и предельные величины (прирост полезности от последней единицы блага).",
        en: "In the 1870s, Carl Menger, W.S. Jevons, and Léon Walras independently sparked the 'Marginal Revolution'. They replaced production cost theories with subjective consumer valuation and differential incremental utility."
      },
      historicalContext: {
        uz: "Klassik maktabning «olmos va suv paradoksi»ni (suv hayot uchun nihoyatda zarur bo'lsa-da, nega arzon, olmos esa shunchaki bezak bo'lsa-da, nega qimmat?) tushuntirishda ojiz qolishi yangi nazariyaga ehtiyoj tug'dirdi.",
        ru: "Парадокс Адама Смита о воде и алмазе долго оставался загадкой. Лишь анализ предельной полезности объяснил ценообразование дефицитных благ.",
        en: "Classical economics struggled to explain the Diamond-Water Paradox: why is vital water cheap while ornamental diamonds cost fortunes? Marginal utility unlocked the answer."
      },
      coreIdeas: [
        {
          uz: "Chegaraviy naflilik (Marginal Utility): Ne'matning qiymati uning umumiy miqdori bilan emas, balki inson eng oxirgi iste'mol qilgan (eng kam qadrli) birligining nafliligi bilan baholanadi.",
          ru: "Предельная полезность: Ценность блага определяется полезностью последней доступной единицы, удовлетворяющей наименее настоятельную потребность.",
          en: "Marginal Utility: Economic value is governed not by total utility, but by the utility of the marginal (last) unit consumed."
        },
        {
          uz: "Kamayib boruvchi chegaraviy naflilik qonuni (Gossenning 1-qonuni): Iste'mol qilinayotgan har bir keyingi birlik ne'mat insonga oldingisidan kamroq lazzat (naflilik) keltiradi.",
          ru: "Закон убывающей предельной полезности (1-й закон Госсена): По мере насыщения потребности ценность каждой последующей порции блага падает.",
          en: "Diminishing Marginal Utility (Gossen's First Law): As consumption expands, each incremental unit satisfies a progressively less urgent want."
        },
        {
          uz: "Umumiy iqtisodiy muvozanat (Valras): Barcha bozorlardagi (tovar, mehnat, kapital) talab va taklif bir vaqtning o'zida narxlar tizimi orqali muvozanatga keladi.",
          ru: "Общее экономическое равновесие Вальраса: Согласование спроса и предложения на всех рынках одновременно через систему уравнений цен.",
          en: "Walrasian General Equilibrium: Simultaneous market clearing across goods, labor, and assets mediated by system-wide equilibrium prices."
        }
      ],
      significance: {
        uz: "Marjinalizm bugungi Mikroiqtisodiyotning, iste'molchi xatti-harakati tahlilining, talab egri chiziqlarining va optimallashtirish modellarining asosiy poydevoriga aylandi.",
        ru: "Маржинализм заложил фундамент современной микроэкономики, теории потребительского выбора и математического анализа рынков.",
        en: "The marginalist framework forms the direct mathematical core of modern microeconomics, utility theory, and optimization analysis."
      }
    },
    keyTerms: [
      {
        term: { uz: "Chegaraviy naflilik", ru: "Предельная полезность", en: "Marginal Utility" },
        definition: {
          uz: "Iste'mol qilingan mahsulotning qo'shimcha (oxirgi) bir birligidan olinadigan qo'shimcha qoniqish.",
          ru: "Прирост общей полезности при потреблении одной дополнительной единицы блага.",
          en: "The additional satisfaction gained from consuming one incremental unit of a commodity."
        }
      },
      {
        term: { uz: "Marjinalizm", ru: "Маржинализм", en: "Marginalism" },
        definition: {
          uz: "Iqtisodiy hodisalarni umumiy emas, balki chegaraviy (qo'shilgan) kattaliklar orqali o'rganuvchi nazariy yo'nalish.",
          ru: "Школа мысли, исследующая экономические процессы на основе предельных приращений величин.",
          en: "The analytical paradigm emphasizing incremental adjustments and marginal calculus."
        }
      },
      {
        term: { uz: "Umumiy muvozanat", ru: "Общее равновесие", en: "General Equilibrium" },
        definition: {
          uz: "Barcha tarmoqlar va bozorlarda bir vaqtning o'zida talab va taklif tenglashgan holat.",
          ru: "Состояние экономики, при котором все взаимосвязанные рынки одновременно сбалансированы.",
          en: "A state where aggregate demand equals aggregate supply simultaneously across all interconnected markets."
        }
      }
    ],
    famousWorks: [
      {
        title: "Grundsätze der Volkswirtschaftslehre",
        year: "1871",
        author: "Carl Menger",
        description: {
          uz: "Subyektiv qiymat va ehtiyojlar shkalasini yaratgan Avstriya maktabining dasturiy asari.",
          ru: "«Основания политической экономии» — манифест субъективной ценности благ.",
          en: "Foundational work establishing subjective valuation and hierarchy of goods."
        }
      }
    ],
    interestingFact: {
      uz: "«Olmos va suv paradoksi» marjinalizm yordamida juda oson yechilgan: yer yuzida suv ko'p bo'lgani uchun uning eng oxirgi (chegaraviy) qultumi deyarli hech qanday naflilik bermaydi, shuning uchun suv arzon; olmos esa nihoyatda kamyob bo'lgani uchun har bir donasining chegaraviy nafliligi beqiyos balanddir!",
      ru: "Парадокс воды и алмаза разрешился просто: воды в мире много, поэтому ее предельная порция имеет нулевую ценность; алмазы же редки, и ценность их предельного кристалла колоссальна.",
      en: "The Diamond-Water Paradox was cleanly solved: water is abundant, so its marginal utility is negligible; diamonds are rare, rendering the marginal utility of each jewel sky-high."
    },
    quiz: [
      {
        question: {
          uz: "Marjinal inqilob (Marginal Revolution) qaysi yillarda sodir bo'ldi?",
          ru: "В какое десятилетие произошла Маржиналистская революция?",
          en: "In which decade did the Marginal Revolution occur?"
        },
        options: {
          uz: ["1870-yillar", "1776-yil", "1930-yillar", "1980-yillar"],
          ru: ["1870-е годы", "1776 год", "1930-е годы", "1980-е годы"],
          en: ["1870s", "1776", "1930s", "1980s"]
        },
        correctIndex: 0,
        explanation: {
          uz: "1871–1874 yillarda Menger, Jevons va Valras deyarli bir vaqtda o'zlarining inqilobiy marjinal asarlarini chop etdilar.",
          ru: "В 1871–1874 гг. вышли труды Менгера, Джевонса и Вальраса, изменившие экономику.",
          en: "Between 1871 and 1874, Menger, Jevons, and Walras published their pioneering breakthroughs."
        }
      },
      {
        question: {
          uz: "Gossenning 1-qonuni (Kamayib boruvchi chegaraviy naflilik) nimani tushuntiradi?",
          ru: "Что утверждает первый закон Госсена?",
          en: "What does Gossen's First Law state?"
        },
        options: {
          uz: ["Iste'mol qilingan har bir qo'shimcha ne'matning nafliligi kamayib borishini", "Barcha narxlarning doimiy o'sishini", "Ish haqining faqat pasayishini", "Soliqlarning bekor qilinishini"],
          ru: ["Снижение полезности каждой последующей единицы потребляемого блага", "Непрерывный рост цен", "Падение реальной зарплаты", "Отмену налогов"],
          en: ["The diminishing utility of each successive unit consumed", "Persistent price inflation", "Uniform wage cuts", "Abolition of taxation"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Masalan, chanqagan kishi uchun 1-stakan suv bebahodir, 2-stakan yoqimli, 3-stakanning nafliligi esa deyarli nolga tushadi.",
          ru: "Для жаждущего первый стакан воды бесценен, а четвертый уже не приносит удовольствия.",
          en: "For a thirsty traveler, the first glass is priceless, while subsequent glasses deliver rapidly diminishing satisfaction."
        }
      },
      {
        question: {
          uz: "Umumiy iqtisodiy muvozanatning matematik modelini ilk bor kim taklif qilgan?",
          ru: "Кто впервые построил математическую модель общего экономического равновесия?",
          en: "Who pioneered the mathematical model of general economic equilibrium?"
        },
        options: {
          uz: ["Leon Valras", "Adam Smit", "Karl Marks", "Tomas Maltus"],
          ru: ["Леон Вальрас", "Адам Смит", "Карл Маркс", "Томас Мальтус"],
          en: ["Léon Walras", "Adam Smith", "Karl Marx", "Thomas Malthus"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Lozanna maktabi vakili Leon Valras o'zaro bog'liq tenglamalar orqali barcha bozorlar barobar muvozanatga kelishini matematik tarzda ko'rsatib berdi.",
          ru: "Вальрас описал равновесие всех рынков через замкнутую систему линейных уравнений.",
          en: "Walras modeled multi-market simultaneous equilibrium via a comprehensive system of interdependent equations."
        }
      }
    ]
  },
  {
    id: 10,
    numberStr: "10",
    title: {
      uz: "Alfred Marshall: talab-taklif sintezi",
      ru: "Альфред Маршалл: синтез спроса и предложения",
      en: "Alfred Marshall: The Neo-Classical Synthesis"
    },
    period: {
      uz: "1890 — 1920-yillar",
      ru: "1890–1920-е годы",
      en: "1890s – 1920s"
    },
    scholarsSummary: {
      uz: "Alfred Marshall",
      ru: "Альфред Маршалл",
      en: "Alfred Marshall"
    },
    iconName: "Maximize2",
    shortDesc: {
      uz: "«Marshall qaychisi»: talab va taklif qonuni, muvozanat narxi, talab egiluvchanligi (elastiklik) va qisqa/uzoq muddatli davrlar.",
      ru: "«Ножницы Маршалла»: закон спроса и предложения, равновесная цена, эластичность и факторы времени.",
      en: "The 'Marshallian Scissors': intersecting supply and demand curves, equilibrium price, elasticity, and time horizons."
    },
    scholars: [
      {
        id: "alfred-marshall",
        name: "Alfred Marshall (Alfred Marshall)",
        years: "1842 – 1924",
        country: { uz: "Buyuk Britaniya (Kembrij)", ru: "Великобритания (Кембридж)", en: "Great Britain (Cambridge)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Alfred_Marshall.jpg",
        title: { uz: "Kembrij maktabi rahbari, «Ekonomiks» asoschisi", ru: "Глава кембриджской школы, создатель «Экономикс»", en: "Founder of Modern Microeconomic Diagrams" },
        quote: {
          uz: "Biz qog'ozni qaychining yuqori tig'i kesyaptimi yoki pastkisi deb bahslashmaganimiz kabi, narxni ham talab yoki taklif belgilaydi deb ajrata olmaymiz.",
          ru: "Мы могли бы с равным основанием спорить о том, регулируется ли стоимость полезностью или издержками, как и о том, разрезает ли кусок бумаги верхнее или нижнее лезвие ножниц.",
          en: "We might as reasonably dispute whether it is the upper or the under blade of a pair of scissors that cuts a piece of paper, as whether value is governed by utility or cost of production."
        },
        majorWorks: [
          "Ekonomiks tamoyillari (Principles of Economics, 1890)",
          "Sanoat va savdo (1919)"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "Kembrij universiteti professori Alfred Marshall klassik maktabning xarajatlar nazariyasi bilan neoklassiklarning chegaraviy naflilik nazariyasini mukammal birlashtirib, iqtisodiy fanga yangi «Ekonomiks» nomini berdi. U 1890 yilda mashhur «Marshall qaychisi» (talab va taklif kesishgan nuqta) modelini yaratdi.",
        ru: "Альфред Маршалл блестяще примирил два непримиримых лагеря: классиков (ставивших во главу угла издержки производства) и маржиналистов (признававших лишь полезность). Его графический крест «спрос — предложение» стал главным символом современной микроэкономики.",
        en: "Alfred Marshall synthesized classical supply costs with marginalist utility demand in his 1890 masterpiece 'Principles of Economics', christening the discipline 'Economics' and establishing the iconic supply-demand intersection."
      },
      historicalContext: {
        uz: "XIX asr oxirida monopoliyalarning kuchayishi, yirik korporatsiyalar davri va bozor narxlarining tez o'zgarishi alohida tovarlar bozorida amaliy qaror qabul qilish uchun qulay grafik va formulalarni talab qildi.",
        ru: "Бурный индустриальный рост на рубеже XIX–XX веков потребовал от экономистов практических инструментов анализа эластичности спроса и краткосрочного равновесия.",
        en: "Late 19th-century corporate growth required analytical tools that businesses could operationalize to forecast pricing responses and price elasticity."
      },
      coreIdeas: [
        {
          uz: "«Marshall qaychisi» va muvozanat narxi: Qog'ozni qaychining ikkala tig'i birdek kesgani kabi, bozor narxini ham talab (iste'molchi nafliligi) va taklif (ishlab chiqaruvchi xarajatlari) birgalikda belgilaydi.",
          ru: "«Ножницы Маршалла»: Цена равновесия формируется на пересечении кривой спроса (определяемой полезностью) и кривой предложения (определяемой издержками).",
          en: "Marshallian Scissors: Market equilibrium settles where consumer willingness-to-pay (marginal utility) equals producer marginal cost."
        },
        {
          uz: "Talab egiluvchanligi (Elastiklik): Narxning o'zgarishi natijasida talab qilinayotgan tovar miqdorining qay darajada o'zgarishini o'lchash koeffitsienti.",
          ru: "Ценовая эластичность спроса: Мера чувствительности объема покупок к изменению рыночной цены блага.",
          en: "Price Elasticity of Demand: Quantitative coefficient calibrating the responsiveness of quantity demanded to changes in market price."
        },
        {
          uz: "Vaqt omilining roli: Qisqa muddatli davrda narxga asosan talab (naflilik) ta'sir ko'rsatadi; uzoq muddatli davrda esa taklif va ishlab chiqarish xarajatlari hal qiluvchi rol o'ynaydi.",
          ru: "Фактор времени: В мгновенном и краткосрочном периоде доминирует спрос; в долгосрочном — издержки производства предложения.",
          en: "Period Analysis: In the ultra-short term, demand fluctuations dominate price; over long horizons, costs of production dictate supply."
        }
      ],
      significance: {
        uz: "Alfred Marshallning kitobi yarim asrdan ortiq vaqt davomida butun dunyo universitetlarining asosiy darsligi bo'lib xizmat qildi va bugungi mikroiqtisodiy grafiklar uning mevasidir.",
        ru: "Учебник Маршалла «Принципы экономической науки» заложил базовый аппарат преподавания экономики на столетие вперед.",
        en: "Marshall's textbook codified microeconomics for universities globally, cementing standard diagrams for consumer and producer surplus."
      }
    },
    keyTerms: [
      {
        term: { uz: "Muvozanat narxi", ru: "Равновесная цена", en: "Equilibrium Price" },
        definition: {
          uz: "Bozorda talab hajmi taklif hajmiga to'liq teng bo'ladigan narx darajasi.",
          ru: "Цена, при которой объем спроса точно равен объему рыночного предложения.",
          en: "The market clearing price where quantity demanded perfectly equals quantity supplied."
        }
      },
      {
        term: { uz: "Talab egiluvchanligi (Elastiklik)", ru: "Эластичность спроса", en: "Elasticity of Demand" },
        definition: {
          uz: "Narx 1% ga o'zgarganda talab miqdorining necha foizga o'zgarishini ko'rsatuvchi mezon.",
          ru: "Процентное изменение величины спроса при изменении цены товара на 1%.",
          en: "The percentage change in quantity demanded resulting from a one percent change in price."
        }
      },
      {
        term: { uz: "Iste'molchi ortiqchaligi (Surplus)", ru: "Излишек потребителя", en: "Consumer Surplus" },
        definition: {
          uz: "Iste'molchining tovar uchun to'lashga rozi bo'lgan maksimal bahosi bilan uning amaldagi bozor narxi o'rtasidagi ijobiy farq.",
          ru: "Разница между максимальной ценой, которую покупатель готов был заплатить, и фактической рыночной ценой.",
          en: "The monetary difference between the total amount consumers are willing to pay and the actual price paid."
        }
      }
    ],
    famousWorks: [
      {
        title: "Principles of Economics",
        year: "1890",
        author: "Alfred Marshall",
        description: {
          uz: "Klassik va marjinalist g'oyalarni sintez qilgan, mikroiqtisodiyotning poydevori bo'lgan durdona asar.",
          ru: "Эпохальный учебник, ставший библией неоклассического направления.",
          en: "The epochal textbook that established neoclassical synthesis and modern microeconomics."
        }
      }
    ],
    interestingFact: {
      uz: "Alfred Marshall o'z kitobida murakkab matematik tenglamalarni matn ichida bermagan, ularni faqat sahifa tagidagi izohlarga yoki kitob oxiridagi ilovalarga joylashtirgan. U o'z shogirdlariga: «Matematikadan iqtisodiy mantiqni tekshirish uchun foydalaning, so'ngra tenglamalarni yoqib yuboring va xulosani oddiy xalq tilida ifodalang!» deb o'rgatgan.",
      ru: "Маршалл был блестящим математиком, но намеренно убирал формулы в сноски, советуя: «Переведи математику на живой язык, проиллюстрируй примерами из жизни, а формулы сожги».",
      en: "Though a trained mathematician, Marshall relegated formulas to appendices, advising: 'Use mathematics as shorthand language, then translate to English and burn the mathematics'."
    },
    quiz: [
      {
        question: {
          uz: "«Marshall qaychisi» nimani ifodalaydi?",
          ru: "Что в экономической теории символизируют «ножницы Маршалла»?",
          en: "What do the 'Marshallian Scissors' signify in price theory?"
        },
        options: {
          uz: ["Bozor narxining talab va taklif kesishuvida birgalikda shakllanishini", "Zavodlarda matolarni bichish texnologiyasini", "Faqat ishlab chiqaruvchi xarajatlarini", "Davlatning soliq qirqishlarini"],
          ru: ["Формирование рыночной цены совместным действием спроса и предложения", "Технологию раскроя ткани", "Исключительно издержки производства", "Снижение налогов"],
          en: ["Equilibrium price determination through the intersection of supply and demand", "Industrial fabric cutting", "Solely production costs", "Government tax deductions"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Marshall narxni faqat xarajatlar yoki faqat naflilik emas, balki talab va taklifning o'zaro tutashgan nuqtasi belgilashini tushuntirgan.",
          ru: "Подобно двум лезвиям ножниц, спрос и предложение обоюдно определяют цену равновесия.",
          en: "Just as both blades of a pair of scissors cut paper, supply and demand jointly determine market price."
        }
      },
      {
        question: {
          uz: "Narx o'zgarishiga nisbatan xaridorlar talabining qanchalik tez ta'sirlanishini o'lchovchi tushuncha nima?",
          ru: "Какое понятие отражает степень чувствительности покупателей к колебанию цен?",
          en: "What concept measures the degree of consumer sensitivity to changes in price?"
        },
        options: {
          uz: ["Talab egiluvchanligi (Elastiklik)", "Inflyatsiya darajasi", "Renta normasining pasayishi", "Amortizatsiya"],
          ru: ["Эластичность спроса", "Темп инфляции", "Снижение земельной ренты", "Амортизация"],
          en: ["Elasticity of demand", "Inflation rate", "Diminishing ground rent", "Depreciation allowance"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Marshall fanga talab elastikligi koeffitsientini kiritgan bo'lib, u narx oshganda yoki pasayganda xaridorlar xatti-harakatini aniqlashga xizmat qiladi.",
          ru: "Маршалл впервые математически формализовал коэффициент ценовой эластичности спроса.",
          en: "Marshall introduced the elasticity coefficient to calculate consumer responsiveness."
        }
      },
      {
        question: {
          uz: "Alfred Marshall o'zining mashhur kitobiga qanday nom bergan?",
          ru: "Как назывался фундаментальный труд Альфреда Маршалла 1890 года?",
          en: "What is the title of Alfred Marshall's 1890 masterpiece?"
        },
        options: {
          uz: ["«Ekonomiks tamoyillari» (Principles of Economics)", "«Kapital»", "«Xalqlar boyligi»", "«Siyosiy iqtisod traktati»"],
          ru: ["«Принципы экономической науки» (Principles of Economics)", "«Капитал»", "«Богатство народов»", "«Трактат политэкономии»"],
          en: ["'Principles of Economics'", "'Das Kapital'", "'The Wealth of Nations'", "'Treatise on Political Economy'"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Marshall fanni 'Siyosiy iqtisod' (Political Economy) deb emas, balki sof tahliliy fan sifatida 'Ekonomiks' (Economics) deb atadi.",
          ru: "Маршалл утвердил в англоязычном мире название дисциплины как Economics вместо Political Economy.",
          en: "Marshall shifted academic terminology from 'Political Economy' to 'Economics'."
        }
      }
    ]
  }
];
