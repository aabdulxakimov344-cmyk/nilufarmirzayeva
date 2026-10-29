import { Topic } from '../types';

export const topicsPart3: Topic[] = [
  {
    id: 11,
    numberStr: "11",
    title: {
      uz: "Keynschilik: yalpi talab nazariyasi",
      ru: "Кейнсианство: теория эффективного спроса",
      en: "Keynesian Economics: Theory of Aggregate Demand"
    },
    period: {
      uz: "1936-yil — XX asr o'rtalari",
      ru: "1936 г. — середина XX века",
      en: "1936 – Mid 20th Century"
    },
    scholarsSummary: {
      uz: "Jon Meynard Keyns",
      ru: "Джон Мейнард Кейнс",
      en: "John Maynard Keynes"
    },
    iconName: "Activity",
    shortDesc: {
      uz: "Buyuk Depressiyani yengish, samarali talabni davlat tomonidan rag'batlantirish, multiplikator effekti va zamonaviy makroiqtisodiyot.",
      ru: "Преодоление Великой депрессии, стимулирование совокупного спроса государством, эффект мультипликатора и макроэкономика.",
      en: "Overcoming the Great Depression, government stimulation of effective demand, the multiplier effect, and modern macroeconomics."
    },
    scholars: [
      {
        id: "john-maynard-keynes",
        name: "Jon Meynard Keyns (J.M. Keynes)",
        years: "1883 – 1946",
        country: { uz: "Buyuk Britaniya (Kembrij)", ru: "Великобритания (Кембридж)", en: "Great Britain (Cambridge)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/John_Maynard_Keynes.jpg",
        title: { uz: "Zamonaviy makroiqtisodiyot otasi", ru: "Отец современной макроэкономики", en: "Architect of Modern Macroeconomics" },
        quote: {
          uz: "Uzoq muddatda barchamiz o'lib ketamiz. Inqiroz paytida bozor o'zini-o'zi davolashini kutib o'tirish halokatlidir.",
          ru: "В долгосрочной перспективе все мы мертвы. Ждать самоисцеления рынка в разгар бури бессмысленно.",
          en: "In the long run we are all dead. Economists set themselves too easy, too useless a task if in tempestuous seasons they can only tell us that when the storm is long past the ocean is flat again."
        },
        majorWorks: [
          "Bandlik, foiz va pulning umumiy nazariyasi (1936)",
          "Tinchlikning iqtisodiy oqibatlari (1919)"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "1929–1933 yillardagi Buyuk Depressiya klassik bozor o'zini-o'zi tartibga soladi degan g'oyaning barbod bo'lganini ko'rsatdi. Ingliz iqtisodchisi Jon Meynard Keyns 1936 yildagi «Umumiy nazariya» asari bilan iqtisodiy fanda inqilob qildi: u davlat inqiroz paytida bozorga faol aralashib, investitsiyalar kiritishi va yalpi talabni qo'llab-quvvatlashi lozimligini isbotladi.",
        ru: "Великая депрессия 1930-х годов с ее массовой безработицей сокрушила веру в автоматическое саморегулирование рынков. Джон Мейнард Кейнс доказал, что экономика может надолго застрять в равновесии при недогрузке мощностей, если государство не стимулирует совокупный спрос бюджетными вливаниями.",
        en: "The Great Depression demolished the classical presumption that markets naturally self-equilibrate at full employment. In 1936, John Maynard Keynes proved that modern economies can remain trapped in persistent underemployment without state fiscal stimulus."
      },
      historicalContext: {
        uz: "AQSh va Yevropada zavodlar to'xtagan, ishsizlik 25-30% ga yetgan, tovarlar omborlarda chiriyotgan, odamlar esa nochorlikda yashayotgan edi. Say qonuni («har qanday taklif o'z talabini yaratadi») butunlay ishlamay qoldi.",
        ru: "Крах Уолл-стрит 1929 года, паралич промышленности и нищета миллионов граждан обнажили неспособность классической модели справиться с дефицитом спроса.",
        en: "The Wall Street crash of 1929 and subsequent collapse of trade demonstrated the inadequacy of Say's Law ('supply creates its own demand') in an era of mass deflation."
      },
      coreIdeas: [
        {
          uz: "Samarali yalpi talab: Iqtisodiyotdagi ishlab chiqarish va ish o'rinlari hajmini taklif emas, balki aholi, biznes va davlatning yalpi xarajatlari (talabi) belgilaydi.",
          ru: "Эффективный спрос: Объем национального производства и занятости определяется не совокупным предложением, а величиной платежеспособного спроса.",
          en: "Effective Aggregate Demand: Total output and employment are driven by aggregate spending (consumption + investment + government expenditures + net exports)."
        },
        {
          uz: "Multiplikator effekti: Davlat tomonidan iqtisodiyotga kiritilgan har bir 1 dollar investitsiya zanjirsimon daromad hosil qilib, YaIMni bir necha barobar ko'paytiradi.",
          ru: "Эффект мультипликатора: Первоначальные государственные инвестиции порождают каскад потребительских расходов, многократно умножая национальный доход.",
          en: "Multiplier Effect: An autonomous injection of government investment generates rounds of induced spending, expanding GDP by a multiple of the initial outlay."
        },
        {
          uz: "Faol fiskal (byudjet-soliq) siyosati: Inqiroz paytida davlat byudjet taqchilligidan qo'rqmasdan jamoat ishlarini moliyalashtirishi, yo'llar, to'g'onlar qurib odamlarga ish haqi berishi shart.",
          ru: "Контрциклическая фискальная политика: В периоды спада государство обязано наращивать расходы на инфраструктуру, допуская временный дефицит бюджета.",
          en: "Countercyclical Fiscal Policy: Governments should utilize deficit spending during downturns to finance public works and crowd in private enterprise."
        }
      ],
      significance: {
        uz: "Keyns g'oyalari AQSh prezidenti Ruzveltning «Yangi kursi» (New Deal)ga asos bo'ldi va Ikkinchi jahon urushidan so'ng butun G'arb dunyosida iqtisodiy o'sishning «oltin davri»ni ta'minladi.",
        ru: "Кейнсианство легло в основу антикризисной политики «Нового курса» Ф.Д. Рузвельта и определило экономический расцвет Запада 1950–1960-х годов.",
        en: "Keynesian thought underpinned FDR's New Deal and the post-WWII Bretton Woods monetary framework, creating unprecedented prosperity in the mid-20th century."
      }
    },
    keyTerms: [
      {
        term: { uz: "Yalpi talab (AD)", ru: "Совокупный спрос (AD)", en: "Aggregate Demand (AD)" },
        definition: {
          uz: "Mamlakatda ma'lum vaqtda barcha xaridorlar (aholi, korxonalar, davlat) tomonidan xarid qilinishi kutilayotgan umumiy tovarlar hajmi.",
          ru: "Общий объем спроса на товары и услуги, предъявляемый домохозяйствами, бизнесом и государством.",
          en: "The total expenditure on domestic goods and services in an economy across households, firms, and the state."
        }
      },
      {
        term: { uz: "Multiplikator", ru: "Мультипликатор", en: "Multiplier" },
        definition: {
          uz: "Boshlang'ich investitsiya oshganda milliy daromadning necha baravar ko'p o'sishini ko'rsatuvchi raqamli koeffitsient.",
          ru: "Числовой коэффициент, показывающий отношение прироста национального дохода к вызвавшему его приросту инвестиций.",
          en: "The coefficient measuring the multiple by which total output increases in response to an autonomous boost in spending."
        }
      },
      {
        term: { uz: "Likvidlikka ustunlik", ru: "Предпочтение ликвидности", en: "Liquidity Preference" },
        definition: {
          uz: "Insonlarning noaniqlik va qo'rquv sababli o'z boyligini aksiya yoki mulkda emas, balki naqd pul shaklida saqlashga moyilligi.",
          ru: "Стремление людей хранить часть активов в абсолютно ликвидной денежной форме.",
          en: "The desire to hold cash money rather than illiquid interest-bearing assets due to economic uncertainty."
        }
      }
    ],
    famousWorks: [
      {
        title: "The General Theory of Employment, Interest and Money",
        year: "1936",
        author: "John Maynard Keynes",
        description: {
          uz: "Makroiqtisodiyotga asos solgan va davlatning iqtisodiyotdagi rolini inqilobiy o'zgartirgan asar.",
          ru: "Труд, совершивший революцию в экономической мысли XX века.",
          en: "The revolutionary manifesto founding modern macroeconomics and fiscal intervention."
        }
      }
    ],
    interestingFact: {
      uz: "Keyns nihoyatda serqirra inson bo'lgan: u Angliya bankining direktori, Kembrij kolleji moliya mudiri bo'lish bilan birga, mashhur balerina Lidiya Lopuxovaga uylangan, san'at asarlari to'plagan va o'z birja spekulyatsiyalari orqali shaxsiy millionlab boylik orttirgan.",
      ru: "Кейнс успешно сочетал науку с биржевой торговлей, сколотив состояние на валютных спекуляциях, управлял финансами Кембриджа и создал Британский совет по делам искусств.",
      en: "Keynes was an art collector, bursar of King's College Cambridge, chairman of an insurance company, and a wildly successful financial trader."
    },
    quiz: [
      {
        question: {
          uz: "Keyns bo'yicha inqiroz va ishsizlikning bosh sababi nima?",
          ru: "Что Кейнс назвал главной причиной экономических спадов и массовой безработицы?",
          en: "According to Keynes, what is the primary cause of recessions and mass unemployment?"
        },
        options: {
          uz: ["Yetarli yalpi talabning yo'qligi (samarali talab tanqisligi)", "Oltin zahiralarining kamligi", "Ishchilarning haddan tashqari ko'p ishlashi", "Aholining tug'ilish darajasi"],
          ru: ["Недостаток платежеспособного совокупного спроса", "Нехватка золотых слитков", "Слишком высокая производительность", "Рост рождаемости"],
          en: ["Deficiency of aggregate effective demand", "Shortage of gold bullion", "Workers laboring excessive hours", "High fertility rates"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Keyns korxonalar tovar ishlab chiqarsa-da, uni sotib oluvchi xaridorlik qobiliyati yetishmagani uchun ishlab chiqarish to'xtashini isbotlagan.",
          ru: "Бизнес сокращает выпуск и увольняет людей не из-за нехватки мощностей, а из-за отсутствия покупательского спроса.",
          en: "Firms curtail production and lay off workers primarily because consumer and business spending is insufficient to absorb capacity."
        }
      },
      {
        question: {
          uz: "Davlat investitsiyalarining bir necha barobar YaIM o'sishiga olib kelishi qanday ataladi?",
          ru: "Как называется эффект, при котором прирост государственных инвестиций умножает итоговый национальный доход?",
          en: "What term describes how an initial injection of public investment multiplies total national output?"
        },
        options: {
          uz: ["Multiplikator effekti", "Maltus tuzog'i", "Renta farqi", "Say qonuni"],
          ru: ["Эффект мультипликатора", "Мальтузианская ловушка", "Дифференциальная рента", "Закон Сэя"],
          en: ["Multiplier Effect", "Malthusian Trap", "Differential Rent", "Say's Law"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Multiplikator har bir sarflangan dollar boshqa fuqarolarning daromadiga aylanib, takroriy xarajatlar to'lqinini yaratishini ko'rsatadi.",
          ru: "Деньги, выплаченные рабочим на стройке, тратятся в магазинах, стимулируя другие отрасли.",
          en: "Injected wages are continually spent in retail, cascading through industries to expand national income."
        }
      },
      {
        question: {
          uz: "Keynsning mashhur iqtisodiy asari nechanchi yilda nashr qilingan?",
          ru: "В каком году вышла эпохальная «Общая теория» Кейнса?",
          en: "In what year was Keynes's landmark 'General Theory' published?"
        },
        options: {
          uz: ["1936", "1914", "1945", "1890"],
          ru: ["1936", "1914", "1945", "1890"],
          en: ["1936", "1914", "1945", "1890"]
        },
        correctIndex: 0,
        explanation: {
          uz: "«Bandlik, foiz va pulning umumiy nazariyasi» 1936 yilda chop etilgan va zamonaviy makroiqtisodiyotning poydevori hisoblanadi.",
          ru: "Выход книги в 1936 году положил начало «Кейнсианской революции» в экономической политике.",
          en: "Published in 1936, it inaugurated the 'Keynesian Revolution' in economic statecraft."
        }
      }
    ]
  },
  {
    id: 12,
    numberStr: "12",
    title: {
      uz: "Monetarizm: Milton Fridman",
      ru: "Монетаризм: Милтон Фридман",
      en: "Monetarism: Milton Friedman"
    },
    period: {
      uz: "1960 — 1980-yillar",
      ru: "1960–1980-е годы",
      en: "1960s – 1980s"
    },
    scholarsSummary: {
      uz: "Milton Fridman («Chikago maktabi»)",
      ru: "Милтон Фридман («Чикагская школа»)",
      en: "Milton Friedman ('Chicago School')"
    },
    iconName: "DollarSign",
    shortDesc: {
      uz: "«Inflyatsiya doimo va har yerda monetar hodisadir», pul massasini qat'iy nazorat qilish va davlatning iqtisodiyotga aralashuvini cheklash.",
      ru: "«Инфляция всегда и везде есть монетарный феномен»: контроль денежной массы и критика кейнсианства.",
      en: "Inflation is always and everywhere a monetary phenomenon; monetary rules over discretionary fiscal deficits."
    },
    scholars: [
      {
        id: "milton-friedman",
        name: "Milton Fridman (Milton Friedman)",
        years: "1912 – 2006",
        country: { uz: "AQSh (Chikago)", ru: "США (Чикаго)", en: "United States (Chicago)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Milton_Friedman.jpg",
        title: { uz: "Nobel mukofoti laureati (1976), monetarizm yetakchisi", ru: "Лауреат Нобелевской премии (1976)", en: "Nobel Laureate (1976) & Monetarist Leader" },
        quote: {
          uz: "Inflyatsiya — har doim va hamma joyda faqatgina pul hodisasidir; u pul massasi ishlab chiqarishdan tezroq o'sganda yuzaga keladi.",
          ru: "Инфляция всегда и везде является денежным феноменом, возникающим из-за опережающего роста денежной массы.",
          en: "Inflation is always and everywhere a monetary phenomenon in the sense that it is and can be produced only by a more rapid increase in the quantity of money than in output."
        },
        majorWorks: [
          "Amerika Qo'shma Shtatlarining monetar tarixi: 1867–1960 (1963)",
          "Kapitalizm va erkinlik (1962)"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "1970-yillarda G'arb mamlakatlarida bir vaqtning o'zida ham ishsizlik, ham yuqori inflyatsiya («stagflyatsiya») kuzatildi. Keynschilik bu inqiroz oldida ojiz qolgan paytda, Chikago universiteti professori Milton Fridman boshchiligidagi monetarizm maktabi maydonga chiqdi.",
        ru: "Кризис 1970-х годов со стагфляцией (одновременным застоем производства и галопирующей инфляцией) дискредитировал кейнсианское стимулирование. Монетаристская школа Милтона Фридмана доказала, что манипулирование госбюджетом лишь дестабилизирует экономику, а главным регулятором должно стать управление предложением денег.",
        en: "The 1970s stagflation crisis disproved standard Keynesian trade-offs. Milton Friedman and the Chicago School demonstrated that discretionary budget deficits fuel inflation, arguing that monetary stability is the prime prerequisite for growth."
      },
      historicalContext: {
        uz: "Neft inqirozlari va pul bosib chiqarish natijasida AQSh va Britaniyada inflyatsiya 15-20% gacha yetdi. Margaret Tetcher va Ronald Reygan iqtisodiy siyosatlarida monetarizm asosiy qoidaga aylandi.",
        ru: "Нефтяной шок 1973 года и безудержная эмиссия привели к двузначной инфляции в США и Европе, потребовав жесткой рестрикционной политики.",
        en: "OPEC oil supply shocks and loose fiat printing generated runaway double-digit inflation in the 1970s, prompting Margaret Thatcher and Ronald Reagan to implement monetarist remedies."
      },
      coreIdeas: [
        {
          uz: "Pul miqdori nazariyasi (MV = PY): Muomaladagi pul massasi (M) narxlar darajasini (P) va nominal yalpi mahsulotni to'g'ridan-to'g'ri belgilaydi.",
          ru: "Количественная теория денег (MV = PY): Динамика денежной массы является решающим фактором уровня цен и колебаний деловой активности.",
          en: "Quantity Theory of Money (Equation of Exchange MV = PY): The money supply (M) is the fundamental determinant of price levels and nominal output."
        },
        {
          uz: "«Monetar qoida»: Markaziy bank ixtiyoriy ravishda pul chiqarishni to'xtatishi va pul massasini har yili iqtisodiy o'sish sur'atiga mos holda qat'iy 3–5% ga oshirishi lozim.",
          ru: "«Денежное правило» Фридмана: Стабильный прирост денежной массы в темпе 3–5% в год вместо спонтанных интервенций регулятора.",
          en: "The K-Percent Monetary Rule: Central banks should expand the money supply at a steady, predictable annual rate (3–5%) matching long-run potential output."
        },
        {
          uz: "Tabiiy ishsizlik darajasi: Hukumat sun'iy ravishda ishsizlikni tabiiy darajasidan pastga tushirishga urinsa, u faqat surunkali inflyatsiyani keltirib chiqaradi.",
          ru: "Естественный уровень безработицы: Попытки снизить безработицу ниже естественного структурного уровня порождают лишь раскручивание инфляционной спирали.",
          en: "Natural Rate of Unemployment: Attempting to force unemployment below its structural baseline through easy credit yields accelerating inflation."
        }
      ],
      significance: {
        uz: "Monetarizm bugungi kunda barcha yetakchi Markaziy banklarning (AQSh Federal Rezervi, Yevropa Markaziy Banki, O'zbekiston Markaziy Banki) inflyatsion targetlash siyosatiga asos bo'ldi.",
        ru: "Монетаризм заложил современную практику таргетирования инфляции и независимости центральных банков во всем мире.",
        en: "Monetarism established the global consensus on central bank independence and modern inflation-targeting frameworks."
      }
    },
    keyTerms: [
      {
        term: { uz: "Stagflyatsiya", ru: "Стагфляция", en: "Stagflation" },
        definition: {
          uz: "Iqtisodiy turg'unlik (o'sishning to'xtashi) va yuqori ishsizlikning kuchli inflyatsiya bilan bir vaqtda sodir bo'lishi.",
          ru: "Сочетание экономического застоя (падения выпуска) с одновременным ростом цен и безработицы.",
          en: "The simultaneous occurrence of economic stagnation, high unemployment, and substantial price inflation."
        }
      },
      {
        term: { uz: "Pul massasi (M2)", ru: "Денежная масса", en: "Money Supply" },
        definition: {
          uz: "Muomalada bo'lgan naqd pullar, bank omonatlari va likvid hisob-kitob vositalarining umumiy yig'indisi.",
          ru: "Совокупность наличных денег и безналичных банковских депозитов в экономике.",
          en: "The total volume of currency notes, coins, and liquid bank deposits circulating in an economy."
        }
      },
      {
        term: { uz: "Inflyatsion targetlash", ru: "Таргетирование инфляции", en: "Inflation Targeting" },
        definition: {
          uz: "Markaziy bank tomonidan inflyatsiyaning aniq maqsadli ko'rsatkichini (masalan, 5%) e'lon qilish va unga foiz stavkalari orqali erishish siyosati.",
          ru: "Политика центрального банка по удержанию инфляции в заранее объявленном целевом коридоре.",
          en: "A central banking policy committed to achieving an explicit publicly stated target inflation rate."
        }
      }
    ],
    famousWorks: [
      {
        title: "A Monetary History of the United States, 1867–1960",
        year: "1963",
        author: "Milton Friedman, Anna Schwartz",
        description: {
          uz: "Buyuk Depressiyaning bosh sababi bozor emas, balki Federal Rezervning pul massasini 30% ga qisqartirib yuborishi bo'lganini isbotlagan tadqiqot.",
          ru: "Фундаментальный труд, доказавший, что Великую депрессию вызвала пагубная политика сжатия денежной массы ФРС.",
          en: "The landmark volume proving the Great Depression was caused by the Federal Reserve choking the money supply by a third."
        }
      }
    ],
    interestingFact: {
      uz: "2002 yilda Milton Fridmanning 90 yoshlik yubileyida AQSh Federal Rezervi rahbari Ben Bernanke rasman minbarga chiqib: «Milton va Anna, siz haqsiz! Biz (Federal Rezerv) Buyuk Depressiyani keltirib chiqardik. Biz juda pushaymonmiz, lekin siz tufayli buni boshqa hech qachon takrorlamaymiz!» deb tan olgan.",
      ru: "В 2002 году на 90-летии Фридмана будущий глава ФРС Бен Бернанке заявил: «Касательно Великой депрессии: вы правы. Это сделали мы. Нам очень жаль. Благодаря вам мы больше этого не повторим».",
      en: "At Milton Friedman's 90th birthday celebration in 2002, future Fed Chairman Ben Bernanke publicly stated: 'Regarding the Great Depression. You're right, we did it. We're very sorry. But thanks to you, we won't do it again.'"
    },
    quiz: [
      {
        question: {
          uz: "Milton Fridmanning eng mashhur iqtisodiy shiori qanday?",
          ru: "Какой афоризм Милтона Фридмана стал хрестоматийным?",
          en: "What is Milton Friedman's most famous axiom regarding prices?"
        },
        options: {
          uz: ["«Inflyatsiya doimo va hamma joyda pul hodisasidir»", "«Barcha boylik faqat yerda yaratiladi»", "«Davlat barcha korxonalarga egalik qilishi shart»", "«Oltin yagona boylikdir»"],
          ru: ["«Инфляция всегда и везде есть денежный феномен»", "«Земля — единственный источник богатства»", "«Государство должно владеть всеми фабриками»", "«Золото — единственное богатство»"],
          en: ["'Inflation is always and everywhere a monetary phenomenon'", "'All wealth springs from land alone'", "'The state must own all enterprises'", "'Gold is the only real wealth'"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Fridman narxlarning o'sishi har doim muomaladagi pul massasining tovarlar massasiga nisbatan ko'payib ketishi oqibati ekanini ta'kidlagan.",
          ru: "По Фридману, чрезмерная эмиссия необеспеченных денег неизбежно обесценивает их покупательную способность.",
          en: "Friedman showed that persistent price inflation cannot happen without excess expansion of the money supply relative to real output."
        }
      },
      {
        question: {
          uz: "Monetaristlar fikricha Markaziy bank qanday qoidaga («Monetar qoida») amal qilishi kerak?",
          ru: "Какого «денежного правила» рекомендовал придерживаться Фридман?",
          en: "What does Friedman's 'Monetary Rule' recommend for central banks?"
        },
        options: {
          uz: ["Pul massasini har yili qat'iy 3–5% atrofida bir maromda oshirib borish", "Har kuni yangi pullar bosib chiqarish", "Barcha pullarni bekor qilish", "Faqat oltin tangalar zarb qilish"],
          ru: ["Ежегодно равномерно наращивать денежную массу на 3–5%", "Ежедневно печатать триллионы", "Отменить бумажные деньги", "Вернуться исключительно к золоту"],
          en: ["Expand the money supply predictably by 3–5% annually", "Print unlimited discretionary currency", "Abolish paper fiat currency entirely", "Rely strictly on minted gold coins"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Oldindan bashorat qilinadigan barqaror pul o'sishi bozorga ishonch bag'ishlaydi va kutilmagan inflyatsion tebranishlarni yo'qotadi.",
          ru: "Стабильный прирост предложения денег устраняет непредсказуемость и поддерживает ценовую стабильность.",
          en: "Stable predictable monetary expansion eliminates speculation and anchors inflation expectations."
        }
      },
      {
        question: {
          uz: "1970-yillarda Keynschilikka zarba bergan qaysi kutilmagan inqiroz monetarizmning g'alabasiga yo'l ochdi?",
          ru: "Какое явление 1970-х годов спутало карты кейнсианцам и привело к триумфу монетаризма?",
          en: "What 1970s macroeconomic phenomenon paralyzed Keynesian policies and propelled monetarism?"
        },
        options: {
          uz: ["Stagflyatsiya (bir vaqtning o'zida ham turg'unlik, ham inflyatsiya)", "Deflyatsiya", "Giperinflyatsiyaning mutlaq to'xtashi", "Oltin standarti tiklanishi"],
          ru: ["Стагфляция (одновременная стагнация и высокая инфляция)", "Глубокая дефляция", "Полная ликвидация инфляции", "Возврат к золотому стандарту"],
          en: ["Stagflation (coexisting stagnation and high inflation)", "Severe deflation", "Complete eradication of inflation", "Restoration of the classical gold standard"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Keyns nazariyasida inflyatsiya va ishsizlik bir vaqtda baland bo'lishi mumkin emas deb hisoblangan, biroq stagflyatsiya amalda yuz berdi.",
          ru: "Стагфляция доказала невозможность бесконечного стимулирования спроса без инфляционного взрыва.",
          en: "Classical Phillips Curve assumptions broke down when both joblessness and inflation spiked in tandem."
        }
      }
    ]
  },
  {
    id: 13,
    numberStr: "13",
    title: {
      uz: "Institutsionalizm: Veblen va Kouz",
      ru: "Институционализм: Веблен и Коуз",
      en: "Institutional Economics: Thorstein Veblen and Ronald Coase"
    },
    period: {
      uz: "XIX asr oxiri — XX asr",
      ru: "Конец XIX — XX век",
      en: "Late 19th – 20th Century"
    },
    scholarsSummary: {
      uz: "Torsteyn Veblen, Ronald Kouz, Jon Kommons",
      ru: "Торстейн Веблен, Рональд Коуз, Джон Коммонс",
      en: "Thorstein Veblen, Ronald Coase, John R. Commons"
    },
    iconName: "Briefcase",
    shortDesc: {
      uz: "Qoidalar, an'analar va qonunlarning (institutlarning) iqtisodiyotdagi o'rni, ko'rgazmali iste'mol («Veblen effekti») va tranzaksion xarajatlar.",
      ru: "Роль институтов, права и привычек в экономике, «демонстративное потребление» и трансакционные издержки.",
      en: "The primacy of social institutions, property rights, conspicuous consumption (Veblen Good), and transaction costs."
    },
    scholars: [
      {
        id: "thorstein-veblen",
        name: "Torsteyn Veblen (Thorstein Veblen)",
        years: "1857 – 1929",
        country: { uz: "AQSh", ru: "США", en: "United States" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Thorstein_Veblen.jpg",
        title: { uz: "Eski institutsionalizm asoschisi", ru: "Основатель классического институционализма", en: "Founder of Institutional Economics" },
        quote: {
          uz: "Boy tabaqalar tovarlarni ularning foydaliligi uchun emas, balki atrofdagilarga o'z boyligi va yuqori mavqeini ko'z-ko'z qilish uchun xarid qiladilar.",
          ru: "Потребление напоказ служит средством утверждения социального статуса и престижа в глазах окружающих.",
          en: "Conspicuous consumption of valuable goods is a means of reputability to the gentleman of leisure."
        },
        majorWorks: ["Bekorchilar sinfi nazariyasi (The Theory of the Leisure Class, 1899)"]
      },
      {
        id: "ronald-coase",
        name: "Ronald Kouz (Ronald Coase)",
        years: "1910 – 2013",
        country: { uz: "Buyuk Britaniya / AQSh", ru: "Великобритания / США", en: "United Kingdom / United States" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Ronald_Coase.jpg",
        title: { uz: "Nobel mukofoti laureati (1991), Neoinstitutsionalist", ru: "Лауреат Нобелевской премии (1991)", en: "Nobel Laureate (1991) & Pioneer of Transaction Costs" },
        quote: {
          uz: "Agar tranzaksion xarajatlar nolga teng bo'lsa, mulk huquqlari qanday taqsimlanganidan qat'i nazar, bozor resurslarni samarali joylashtiradi.",
          ru: "Если трансакционные издержки равны нулю, окончательное размещение ресурсов эффективно независимо от распределения прав собственности.",
          en: "If transaction costs are zero, the ultimate result which maximizes the value of production is independent of the legal position."
        },
        majorWorks: [
          "Firma tabiati (The Nature of the Firm, 1937)",
          "Ijtimoiy xarajatlar muammosi (The Problem of Social Cost, 1960)"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "Institutsionalizm an'anaviy iqtisodchilarning insonni faqat «foyda ketidan quvuvchi sovuqqon hisob-kitob mashinasi» deb hisoblashiga qarshi chiqdi. Ular iqtisodiy jarayonlarni qonunlar, urf-odatlar, davlat idoralari, kasaba uyushmalari va psixologik omillar (institutlar)siz tushunib bo'lmasligini isbotladilar.",
        ru: "Институционализм бросил вызов неоклассической абстракции об «экономическом человеке». Мыслители этого направления показали, что реальные сделки определяются нормами права, традициями, контрактами и организациями (институтами), формирующими правила игры в обществе.",
        en: "Institutionalism rejected neoclassical abstractions of atomistic rational agents. It demonstrated that real-world economic interactions are governed by social rules, legal structures, custom, and organizations that shape the 'rules of the game'."
      },
      historicalContext: {
        uz: "XIX asr oxiridagi «Yovvoyi G'arb» kapitalizmi, korporatsiyalarning vujudga kelishi va Rokfeller, Morgan kabi magnatlarning bozorlarni egallab olishi institutsional tahlilni talab qildi.",
        ru: "Эпоха американских трестов и баронов-разбойников показала, что реальная власть принадлежит корпоративным институтам, а не мифической совершенной конкуренции.",
        en: "The Gilded Age of American trusts, monopolies, and corporate power proved that real economic outcomes hinged on legal leverage rather than frictionless market textbook models."
      },
      coreIdeas: [
        {
          uz: "«Veblen effekti» (Ko'rgazmali iste'mol): Ba'zi qimmatbaho brend tovarlarning narxi oshgani sari, boylarning o'z mavqeini ko'rsatish istagi tufayli unga bo'lgan talab kamaymaydi, balki aksincha oshadi.",
          ru: "«Эффект Веблена»: Рост цен на предметы роскоши ведет не к падению, а к росту спроса ради демонстрации статуса.",
          en: "Veblen Good & Conspicuous Consumption: Higher prices for luxury items enhance their prestige value, increasing demand among elites."
        },
        {
          uz: "Tranzaksion xarajatlar (Kouz): Bozor bepul emas; axborot izlash, muzokaralar olib borish, shartnoma tuzish va ularning bajarilishini nazorat qilish katta xarajatlarni talab qiladi.",
          ru: "Трансакционные издержки: Затраты на поиск информации, заключение контрактов и защиту прав собственности объясняют существование фирм.",
          en: "Transaction Costs: Market exchange is not frictionless; search, bargaining, contracting, and enforcement costs justify the existence of hierarchical firms."
        },
        {
          uz: "«Kouz teoremasi»: Mulk huquqlari aniq belgilangan va tranzaksion xarajatlar past bo'lgan taqdirda, tashqi ta'sirlar (eksternaliyalar) xususiy muzokaralar yo'li bilan samarali hal qilinadi.",
          ru: "Теорема Коуза: При четком определении прав собственности и нулевых издержках стороны найдут взаимовыгодный оптимум без вмешательства государства.",
          en: "Coase Theorem: If property rights are clearly defined and transaction costs are negligible, private parties can negotiate efficient solutions to externalities."
        }
      ],
      significance: {
        uz: "Neoinstitutsionalizm davlat boshqaruvi, korrupsiyaga qarshi kurash, xususiy mulkni himoya qilish va mustaqil sud tizimining iqtisodiy o'sishdagi hal qiluvchi ahamiyatini ilmiy isbotladi.",
        ru: "Институциональный подход лег в основу современных теорий институционального развития, антикоррупционных реформ и теории контрактов.",
        en: "Institutionalism established that robust property rights, impartial rule of law, and low transaction barriers are the true determinants of long-term economic prosperity."
      }
    },
    keyTerms: [
      {
        term: { uz: "Institutlar", ru: "Институты", en: "Institutions" },
        definition: {
          uz: "Jamiyatdagi o'yin qoidalari — insonlar o'rtasidagi munosabatlarni tartibga soluvchi rasmiy qonunlar va norasmiy urf-odatlar.",
          ru: "Правила игры в обществе, включая формальные законы и неформальные традиции.",
          en: "The formal rules, informal norms, and enforcement mechanisms that structure human interactions."
        }
      },
      {
        term: { uz: "Tranzaksion xarajatlar", ru: "Трансакционные издержки", en: "Transaction Costs" },
        definition: {
          uz: "Bozor bitimlarini amalga oshirish bilan bog'liq xarajatlar (axborot qidirish, huquqshunoslar xizmati, shartnoma tuzish).",
          ru: "Издержки сбора информации, ведения переговоров, измерения качества и правового принуждения.",
          en: "The costs incurred in making an economic exchange, including search, negotiation, and contract enforcement."
        }
      },
      {
        term: { uz: "Veblen effekti", ru: "Эффект Веблена", en: "Veblen Effect" },
        definition: {
          uz: "Tovarning narxi qanchalik baland bo'lsa, uning ijtimoiy nufuzi oshishi sababli unga talabning ko'payishi hodisasi.",
          ru: "Парадоксальный рост спроса на товар при повышении его цены из-за престижности покупки.",
          en: "An apparent anomaly where consumer demand increases as prices rise because of the status it confers."
        }
      }
    ],
    famousWorks: [
      {
        title: "The Nature of the Firm",
        year: "1937",
        author: "Ronald Coase",
        description: {
          uz: "Firma nima uchun kerakligini tranzaksion xarajatlarni tejash mexanizmi orqali tushuntirgan klassik maqola.",
          ru: "Статья, обосновавшая возникновение фирм необходимостью минимизировать трансакционные издержки рынка.",
          en: "The foundational paper explaining firm emergence as a transaction-cost-economizing mechanism."
        }
      }
    ],
    interestingFact: {
      uz: "Ronald Kouz o'zining «Firma tabiati» maqolasini atigi 27 yoshida yozgan, ammo Shvetsiya Qirollik Fanlar akademiyasi unga ushbu kashfiyoti uchun oradan roppa-rosa 54 yil o'tib, 1991 yilda 81 yoshida Iqtisodiyot bo'yicha Nobel mukofotini topshirgan!",
      ru: "Рональд Коуз опубликовал статью о трансакционных издержках в 1937 году, а Нобелевскую премию за нее получил спустя 54 года — в 1991 году в возрасте 81 года.",
      en: "Ronald Coase wrote his ground-breaking paper on firm theory at age 27, but was awarded the Nobel Memorial Prize 54 years later in 1991 at the age of 81."
    },
    quiz: [
      {
        question: {
          uz: "«Ko'rgazmali iste'mol» (Conspicuous consumption) tushunchasini fanga kim kiritgan?",
          ru: "Кто ввел понятие «демонстративное потребление»?",
          en: "Who coined the concept of 'conspicuous consumption'?"
        },
        options: {
          uz: ["Torsteyn Veblen", "Milton Fridman", "Adam Smit", "Leon Valras"],
          ru: ["Торстейн Веблен", "Милтон Фридман", "Адам Смит", "Леон Вальрас"],
          en: ["Thorstein Veblen", "Milton Friedman", "Adam Smith", "Léon Walras"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Torsteyn Veblen o'zining «Bekorchilar sinfi nazariyasi» (1899) asarida boylarning maqtanish uchun sarflaydigan xarajatlarini ochib bergan.",
          ru: "Веблен показал, что покупка роскоши преследует цель подтвердить социальный статус.",
          en: "In 'The Theory of the Leisure Class' (1899), Veblen diagnosed ostentatious spending as a status competition mechanism."
        }
      },
      {
        question: {
          uz: "Ronald Kouz bo'yicha korxona (firma)larning vujudga kelishiga asosiy sabab nima?",
          ru: "Какова главная причина существования фирм согласно Рональду Коузу?",
          en: "According to Ronald Coase, what is the primary economic rationale for the existence of firms?"
        },
        options: {
          uz: ["Bozordagi tranzaksion (shartnoma tuzish, ma'lumot izlash) xarajatlarini tejash", "Faqat soliq to'lamaslik", "Hukumatning majburlashi", "Bozorda monopol bo'lish istagi"],
          ru: ["Экономия на трансакционных издержках поиска и заключения контрактов", "Уклонение от налогов", "Принуждение государства", "Стремление к монополии"],
          en: ["Economizing on market transaction, search, and bargaining costs", "Evading taxation", "Direct government coercion", "Monopoly power"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Agar har bir mayda ish uchun bozor orqali yangi shartnoma tuzilsa, xarajatlar haddan oshib ketadi; firma ichidagi buyruqlar esa bu xarajatlarni tejaydi.",
          ru: "Внутри фирмы трансакции координируются административно, что дешевле бесконечных рыночных сделок.",
          en: "Internal hierarchical coordination spares firms the continuous frictions of outside market contracting."
        }
      },
      {
        question: {
          uz: "Institutsionalistlar nuqtai nazaridan iqtisodiy taraqqiyot garovi nima?",
          ru: "Что с точки зрения институционализма является фундаментом экономического процветания?",
          en: "What serves as the bedrock of sustained economic development from an institutionalist standpoint?"
        },
        options: {
          uz: ["Samarali institutlar: xususiy mulk himoyasi, qonun ustuvorligi va adolatli sud", "Faqat pul bosib chiqarish", "Barcha importni to'xtatish", "Aholini ko'paytirish"],
          ru: ["Эффективные институты: защита собственности, верховенство права и суды", "Печатание денег", "Запрет импорта", "Увеличение населения"],
          en: ["Effective institutions: secure property rights, the rule of law, and fair courts", "Unconstrained money printing", "Complete import embargoes", "Rapid population expansion"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Qonun ustuvor bo'lgan, mulk daxlsiz saqlangan mamlakatlardagina investitsiya kiritiladi va boylik ko'payadi.",
          ru: "Без надежных институтов прав собственности предприниматели не инвестируют в будущее.",
          en: "Economies thrive only where credible legal constraints protect investments against arbitrary expropriation."
        }
      }
    ]
  },
  {
    id: 14,
    numberStr: "14",
    title: {
      uz: "Zamonaviy iqtisodiy nazariyalar",
      ru: "Современные экономические теории",
      en: "Contemporary Economic Theories"
    },
    period: {
      uz: "XX asr oxiri — XXI asr",
      ru: "Конец XX — XXI век",
      en: "Late 20th – 21st Century"
    },
    scholarsSummary: {
      uz: "Pol Samuelson, Daniel Kaneman, Joseph Stiglits, Fridrix Hayek, Pol Krugman",
      ru: "Пол Самуэльсон, Даниэль Канеман, Джозеф Стиглиц, Фридрих Хайек, Пол Кругман",
      en: "Paul Samuelson, Daniel Kahneman, Joseph Stiglitz, Friedrich Hayek, Paul Krugman"
    },
    iconName: "BrainCircuit",
    shortDesc: {
      uz: "Xulq-atvor iqtisodiyoti (Behavioral Economics), axborot asimmetriyasi, yangi iqtisodiy geografiya va neoklassik sintez.",
      ru: "Поведенческая экономика, асимметрия информации, новая экономическая география и неоклассический синтез.",
      en: "Behavioral economics, information asymmetry, the new economic geography, and dynamic general equilibrium."
    },
    scholars: [
      {
        id: "daniel-kahneman",
        name: "Daniel Kaneman (Daniel Kahneman)",
        years: "1934 – 2024",
        country: { uz: "Isroil / AQSh", ru: "Израиль / США", en: "Israel / United States" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Daniel_Kahneman_%28cropped%29.jpg",
        title: { uz: "Nobel mukofoti laureati (2002), xulq-atvor iqtisodiyoti asoschisi", ru: "Лауреат Нобелевской премии (2002)", en: "Nobel Laureate (2002) & Behavioral Pioneer" },
        quote: {
          uz: "Insonlar har doim ham oqilona qaror qabul qilmaydi: yo'qotish azobi xuddi shunday miqdordagi yutuq keltirgan quvonchdan ikki barobar kuchliroqdir.",
          ru: "Боль от потери психологически в два раза сильнее, чем радость от эквивалентного выигрыша.",
          en: "Losses loom larger than gains. Human beings are systematically bounded in rationality."
        },
        majorWorks: [
          "Fikrlash: sekin va tez (Thinking, Fast and Slow, 2011)",
          "Istiqbollar nazariyasi (Prospect Theory, 1979)"
        ]
      },
      {
        id: "joseph-stiglitz",
        name: "Jozef Stiglits (Joseph Stiglitz)",
        years: "1943 yilda tug'ilgan",
        country: { uz: "AQSh (Kolumbiya universiteti)", ru: "США (Колумбийский университет)", en: "United States (Columbia University)" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Joseph_Stiglitz_2011.jpg",
        title: { uz: "Nobel mukofoti laureati (2001), axborot iqtisodiyoti yetakchisi", ru: "Лауреат Нобелевской премии (2001)", en: "Nobel Laureate (2001) & Information Economics Pioneer" },
        quote: {
          uz: "Ko'rinmas qo'l ko'rinmaydi, chunki u aslida mavjud emas. Axborot assimetrik bo'lgan bozorlar o'z-o'zidan samarali ishlay olmaydi.",
          ru: "Причина, по которой невидимая рука часто кажется невидимой, заключается в том, что ее зачастую просто нет.",
          en: "The reason that the invisible hand often seems invisible is that it is often not there."
        },
        majorWorks: [
          "Globallashuv va uning noroziliklari (2002)",
          "Axborot asimmetriyasi nazariyasi"
        ]
      },
      {
        id: "friedrich-hayek",
        name: "Fridrix Avgust fon Hayek (F.A. Hayek)",
        years: "1899 – 1992",
        country: { uz: "Avstriya / Buyuk Britaniya", ru: "Австрия / Великобритания", en: "Austria / United Kingdom" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Friedrich_Hayek_portrait.jpg",
        title: { uz: "Nobel mukofoti laureati (1974), erkin jamiyat faylasufi", ru: "Лауреат Нобелевской премии (1974)", en: "Nobel Laureate (1974) & Market Order Theorist" },
        quote: {
          uz: "Bozor narxlari — bu millionlab insonlar ongidagi tarqoq bilimlarni birlashtiruvchi eng buyuk telekommunikatsiya tizimidir.",
          ru: "Цены — это механизм передачи рассеянного знания, который никакой Госплан заменить не в силах.",
          en: "The marvel is that in a case like that of a scarcity of one raw material, without an order being issued, millions of people are made to use the resources more sparingly."
        },
        majorWorks: [
          "Qullik sari yo'l (The Road to Serfdom, 1944)",
          "Jamiyatda bilimlardan foydalanish (1945)"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "XXI asr arafasida iqtisodiyot fani psixologiya, matematika, axborot texnologiyalari va geografiya bilan chambarchas tutashdi. Yangi nazariyalar insonning mutlaq mantiqiy emasligini (Xulq-atvor iqtisodiyoti) hamda bozor ishtirokchilari o'rtasidagi axborot tengsizligini (Stiglits) ilmiy isbotlab berdi.",
        ru: "Современная экономическая наука синтезирует микро- и макроуровни с психологией принятия решений и теорией игр. Открытия Д. Канемана доказали ограниченность человеческой рациональности, а Дж. Стиглиц объяснил сбои рынков из-за асимметрии информации.",
        en: "Modern economic theory bridges behavioral psychology, information theory, and network science. Daniel Kahneman demonstrated cognitive biases in decision-making, while Joseph Stiglitz analyzed pervasive market failures caused by asymmetric information."
      },
      historicalContext: {
        uz: "2008 yilgi global moliyaviy inqiroz, raqamli iqtisodiyotning paydo bo'lishi (kriptovalyutalar, AI, platformalar) hamda dunyodagi tengsizlikning kuchayishi iqtisodiy fikrga yangi talablarni qo'ydi.",
        ru: "Крах ипотечного рынка 2008 года и цифровизация экономики заставили пересмотреть ортодоксальные модели эффективных рынков в пользу поведенческого регулирования.",
        en: "The 2008 Great Recession, algorithmic platform markets, and mounting income polarization exposed limitations in orthodox models and elevated behavioral policy nudges."
      },
      coreIdeas: [
        {
          uz: "Xulq-atvor iqtisodiyoti (Behavioral Economics): Insonlar kognitiv buzilishlar, his-tuyg'ular va yo'qotishdan qo'rqish (Loss Aversion) ta'sirida qaror qabul qiladilar.",
          ru: "Поведенческая экономика: Люди подвержены когнитивным искажениям, эвристикам и боязни потерь, часто действуя вопреки рациональной выгоде.",
          en: "Behavioral Economics: Systematic cognitive biases, heuristics, and loss aversion shape actual choices contrary to traditional hyper-rational utility models."
        },
        {
          uz: "Axborot asimmetriyasi (Asymmetric Information): Bozor bitimlarida sotuvchi va xaridor teng ma'lumotga ega bo'lmaydi (masalan, ikkilamchi avtomobil bozori — «limonlar nazariyasi»), bu esa bozor inqiroziga olib kelishi mumkin.",
          ru: "Асимметрия информации: Неравенство доступа к информации между продавцом и покупателем ведет к отрицательному отбору и провалам рынка.",
          en: "Asymmetric Information: Unequal access to knowledge between buyers and sellers creates adverse selection and moral hazard, leading to market breakdowns."
        },
        {
          uz: "Yangi iqtisodiy geografiya (Pol Krugman): Korxonalarning nima uchun Kremniy vodiysi kabi yirik texnologik klasterlarga to'planishini miqyos samarasi orqali tushuntiradi.",
          ru: "Новая экономическая география: Концентрация инновационных кластеров и урбанизация под действием эффекта масштаба и транспортных издержек.",
          en: "New Economic Geography (Krugman): Industrial clustering and spatial economic concentrations driven by increasing returns to scale and transport costs."
        }
      ],
      significance: {
        uz: "Zamonaviy iqtisodiyot raqamli platformalar, sun'iy intellekt, «turtki berish» (Nudge) siyosati va global ekologik resurslarni boshqarishning asosiy dasturidir.",
        ru: "Современные модели определяют политику государственного регулирования цифровых гигантов, «умных подсказок» (Nudge) и зеленой экономики.",
        en: "These modern insights direct modern antitrust enforcement against digital platforms, behavioral nudge architectures, and climate transition finance."
      }
    },
    keyTerms: [
      {
        term: { uz: "Kognitiv buzilish", ru: "Когнитивное искажение", en: "Cognitive Bias" },
        definition: {
          uz: "Inson miyasining axborotni qayta ishlashida yo'l qo'yadigan muntazam xatoliklari (masalan, yo'qotishdan haddan ortiq qo'rqish).",
          ru: "Систематические отклонения в поведении и восприятии, влияющие на принятие финансовых решений.",
          en: "Systematic patterns of deviation from rational judgment in human decision-making."
        }
      },
      {
        term: { uz: "Axborot asimmetriyasi", ru: "Асимметрия информации", en: "Asymmetric Information" },
        definition: {
          uz: "Bitim ishtirokchilaridan birining ikkinchisiga qaraganda tovar sifati haqida ancha ko'proq ma'lumotga ega bo'lishi.",
          ru: "Положение, при котором одна сторона сделки осведомлена о качестве блага значительно лучше другой.",
          en: "A transaction circumstance where one party possesses greater material knowledge than the other."
        }
      },
      {
        term: { uz: "Nudge («Turtki» nazariyasi)", ru: "Теория «подталкивания» (Nudge)", en: "Nudge Theory" },
        definition: {
          uz: "Insonlarga majburlashsiz, tanlov arxitekturasini o'zgartirish orqali sog'lom va foydali iqtisodiy qaror qabul qilishga ko'maklashish usuli.",
          ru: "Концепция мягкого побуждения людей к более рациональным решениям через архитектуру выбора.",
          en: "Altering choice architecture to predictably nudge human behavior toward optimal outcomes without mandates."
        }
      }
    ],
    famousWorks: [
      {
        title: "Thinking, Fast and Slow",
        year: "2011",
        author: "Daniel Kahneman",
        description: {
          uz: "Inson miyasining tezkor hissiy va sekin mantiqiy qaror qabul qilish tizimlarini tushuntirgan bestseller asar.",
          ru: "Бестселлер о двух системах мышления и иллюзиях рациональности.",
          en: "The global bestseller unpacking dual-process cognitive heuristics in judgment and decision-making."
        }
      }
    ],
    interestingFact: {
      uz: "Daniel Kaneman iqtisodchi emas, balki psixolog bo'lgan! U hayotida bitta ham iqtisodiyot kursi tinglamaganini tan olgan, ammo shunga qaramay 2002 yilda Iqtisodiyot bo'yicha Nobel mukofotini qo'lga kiritgan birinchi professional psixolog bo'ldi.",
      ru: "Даниэль Канеман был профессиональным психологом и признавался, что никогда в жизни не слушал курса экономики, но стал лауреатом Нобелевской премии по экономике.",
      en: "Daniel Kahneman was a psychologist who never completed a formal university course in economics, yet won the 2002 Nobel Memorial Prize in Economics."
    },
    quiz: [
      {
        question: {
          uz: "Daniel Kaneman kashf etgan «yo'qotishdan qo'rqish» (Loss Aversion) hodisasi nimani anglatadi?",
          ru: "В чем суть феномена неприятия потерь (Loss Aversion) по Канеману?",
          en: "What does Daniel Kahneman's concept of 'Loss Aversion' demonstrate?"
        },
        options: {
          uz: ["100 dollar yo'qotish keltirgan og'riq 100 dollar topish keltirgan quvonchdan ancha kuchliroq bo'lishini", "Odamlar har doim tavakkal qilishni yaxshi ko'rishini", "Inflyatsiyaning yo'qolishini", "Barcha odamlar pullarini bankka qo'yishini"],
          ru: ["Психологическая боль от потери суммы сильнее радости от аналогичного выигрыша", "Любовь людей к постоянному риску", "Исчезновение инфляции", "Отказ от наличных денег"],
          en: ["The psychological pain of losing an amount is far greater than the pleasure of gaining it", "Humans universally crave gambling risk", "Elimination of price inflation", "Complete reliance on digital cash"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Tadqiqotlar shuni ko'rsatadiki, yo'qotish hissi insonga taxminan 2-2.5 barobar ko'proq ruhiy og'riq beradi.",
          ru: "Канеман и Тверски доказали асимметрию восприятия рисков: потери ранят человека вдвое сильнее радости равного дохода.",
          en: "Empirical experiments demonstrate humans value avoiding losses approximately twice as much as acquiring equivalent gains."
        }
      },
      {
        question: {
          uz: "Jozef Stiglits bo'yicha qaysi omil erkin bozorning «ko'rinmas qo'li» samarali ishlashiga to'sqinlik qiladi?",
          ru: "Какой фактор, по Стиглицу, нарушает работу «невидимой руки» свободного рынка?",
          en: "According to Joseph Stiglitz, what pervasive factor disrupts the free market's 'invisible hand'?"
        },
        options: {
          uz: ["Axborot asimmetriyasi (tomonlar birdek ma'lumotga ega emasligi)", "Ortiqcha oltin zahiralari", "Savdoning to'liq erkinligi", "Yangi zavodlar qurilishi"],
          ru: ["Асимметрия информации между участниками сделки", "Избыток золотых резервов", "Свобода мировой торговли", "Строительство новых фабрик"],
          en: ["Asymmetric information (uneven distribution of knowledge among parties)", "Surplus gold reserves", "Universal tariff-free trade", "Rapid factory construction"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Sotuvchi va xaridor o'rtasida axborot tengsiz bo'lsa, bozor eng yaxshi mahsulotlarni siqib chiqarib, «limonlar» (yomon tovarlar) qolishiga olib kelishi mumkin.",
          ru: "Неполнота информации ведет к провалам рыночного механизма и требует регулирования.",
          en: "Information gaps produce adverse selection, frequently causing unmonitored markets to misallocate resources."
        }
      },
      {
        question: {
          uz: "Fridrix Hayek erkin bozor narxlarini qanday muhim vazifani bajaruvchi tizim deb bilgan?",
          ru: "Чем, по мнению Фридриха Хайека, являются рыночные цены?",
          en: "How did Friedrich Hayek conceptualize the core role of free market prices?"
        },
        options: {
          uz: ["Millionlab odamlarning tarqoq bilimlarini uzatuvchi axborot telekommunikatsiyasi tizimi", "Faqat boylarni boyitish vositasi", "Davlatning majburiy buyrug'i", "Tasodifiy raqamlar yig'indisi"],
          ru: ["Механизмом передачи рассеянного в обществе знания и координации планов", "Способом обогащения элит", "Государственным приказом", "Случайными числами"],
          en: ["A distributed information telecommunication network coordinating dispersed local knowledge", "A vehicle exclusively for enriching oligarchs", "Mandatory state directives", "Random speculative digits"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Hayek hech bir davlat idorasi millionlab insonlarning xohish-istagini narx mexanizmidan yaxshiroq jamlay olmasligini isbotlagan.",
          ru: "Хайек доказал превосходство рыночного ценообразования над централизованным госпланированием.",
          en: "Hayek established that decentralized price signals aggregate dispersed human preferences vastly better than any central planner."
        }
      }
    ]
  },
  {
    id: 15,
    numberStr: "15",
    title: {
      uz: "O'zbekistonda iqtisodiy fikr tarixi",
      ru: "История экономической мысли в Узбекистане",
      en: "History of Economic Thought in Uzbekistan"
    },
    period: {
      uz: "Qadimgi davrdan hozirgi kunga qadar",
      ru: "С древности до современности",
      en: "From Antiquity to Modern Day"
    },
    scholarsSummary: {
      uz: "Amir Temur, Alisher Navoiy, Mahmudxo'ja Behbudiy, Abdurauf Fitrat, Islom Karimov, Shavkat Mirziyoyev",
      ru: "Амир Темур, Алишер Навои, Махмудходжа Бехбудий, Абдурауф Фитрат, Ислам Каримов, Шавкат Мирзиёев",
      en: "Amir Timur, Alisher Navoi, Mahmudkhoja Behbudi, Abdurauf Fitrat, Islam Karimov, Shavkat Mirziyoyev"
    },
    iconName: "Globe",
    shortDesc: {
      uz: "Temuriylar renessansi, Jadidlar islohoti, Mustaqillik davridagi «O'zbek modeli» va «Yangi O'zbekiston» taraqqiyot strategiyasi.",
      ru: "Тимуридский Ренессанс, модернизация джадидов, «Узбекская модель» перехода к рынку и реформы «Нового Узбекистана».",
      en: "The Timurid Renaissance, Jadid modernization, the 'Uzbek Model' of transition, and 'New Uzbekistan' reforms."
    },
    scholars: [
      {
        id: "mahmudxoja-behbudiy",
        name: "Mahmudxo'ja Behbudiy",
        years: "1875 – 1919",
        country: { uz: "Samarqand / Turkiston", ru: "Самарканд / Туркестан", en: "Samarkand / Turkestan" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Mahmudkhoja_Behbudiy.jpg",
        title: { uz: "Jadidchilik harakati otasi, ma'rifatparvar", ru: "Лидер джадидизма и реформатор", en: "Leader of Central Asian Jadid Enlightenment" },
        quote: {
          uz: "Dunyoda turmoq uchun dunyoviy fan va ilm lozimdur, zamona ilmidan bebahra millat boshqalarga qul bo'lur.",
          ru: "Чтобы выжить в мире, необходимы светские знания и наука; нация без передовой науки станет рабом других.",
          en: "To endure in this modern world, contemporary science, commerce, and knowledge are imperative; a nation devoid of science is subjugated."
        },
        majorWorks: ["Padarkush dramasi", "Turkiston madaniy xaritasi", "«Oyna» jurnali maqolalari"]
      },
      {
        id: "abdurauf-fitrat",
        name: "Abdurauf Fitrat",
        years: "1886 – 1938",
        country: { uz: "Buxoro / O'zbekiston", ru: "Бухара / Узбекистан", en: "Bukhara / Uzbekistan" },
        portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Abdurauf_Fitrat.jpg",
        title: { uz: "Jadid olimi, ilk iqtisodiy darslik muallifi", ru: "Просветитель, автор первого учебника экономики", en: "Jadid Thinker & Author of Economic Treatises" },
        quote: {
          uz: "Millatning boyligi va taraqqiyoti zamonaviy sanoat, erkin tadbirkorlik va tejamkorlik ustiga quriladi.",
          ru: "Богатство и свобода нации зиждятся на современной индустрии, торговле и финансовой грамотности.",
          en: "National independence and abundance are anchored upon modern industry, free commerce, and financial prudence."
        },
        majorWorks: ["Munozara (1909)", "Rahbari najot (1915)", "Oila yoki oila boshqarish tartiblari (1916)"]
      },
      {
        id: "shavkat-mirziyoyev",
        name: "Shavkat Mirziyoyev",
        years: "1957 yilda tug'ilgan",
        country: { uz: "O'zbekiston Respublikasi", ru: "Республика Узбекистан", en: "Republic of Uzbekistan" },
        portraitUrl: "",
        title: { uz: "O'zbekiston Respublikasi Prezidenti", ru: "Президент Республики Узбекистан", en: "President of the Republic of Uzbekistan" },
        quote: {
          uz: "Inson qadri uchun — iqtisodiyot xalqqa xizmat qilishi kerak. Biznesga erkinlik berish va xususiy mulk daxlsizligi — islohotlarimizning qat'iy ustuvor yo'nalishidir.",
          ru: "Во имя чести и достоинства человека — экономика должна служить народу. Свобода бизнеса — гарант прогресса.",
          en: "For human dignity — the economy must serve the people. Free entrepreneurship and sanctity of private property are our unwavering priority."
        },
        majorWorks: [
          "Yangi O'zbekiston taraqqiyot strategiyasi (2022–2026)",
          "O'zbekiston — 2030 strategiyasi"
        ]
      }
    ],
    detail: {
      introduction: {
        uz: "O'zbekiston hududi qadimdan jahon savdosining chorrahasi va boy iqtisodiy an'analar maskani bo'lib kelgan. Sohibqiron Amir Temurning adolatli soliq tizimidan boshlab, XX asr boshidagi Jadidlar ma'rifatparvarlik dasturi hamda mustaqillik davridagi chuqur bozor islohotlarigacha bo'lgan yo'l o'ziga xos boy tarixiy merosga egadir.",
        ru: "Земля Узбекистана испокон веков находилась на перекрестке глобальных торговых путей. От налогового законодательства Амира Темура и дидактических трудов Алишера Навои до модернизационных манифестов джадидов и глубоких рыночных трансформаций XXI века — отечественная экономическая мысль накопила уникальный опыт.",
        en: "Uzbekistan has stood at the crossroads of continental commerce for millennia. From Amir Timur's fiscal ordinances and Navoi's institutional foundations to the Jadid enlightenment and contemporary free-market liberalization under the 'New Uzbekistan' framework, economic thought has flourished."
      },
      historicalContext: {
        uz: "Mustaqillikka erishilgach, 1991 yilda rejali komandir iqtisodiyotdan ijtimoiy yo'naltirilgan bozor iqtisodiyotiga bosqichma-bosqich o'tish («O'zbek modeli») amalga oshirildi. 2017 yildan esa valyuta bozorini erkinlashtirish, soliq islohotlari va xususiy tadbirkorlikni jadal rivojlantirishga qaratilgan yangi bosqich boshlandi.",
        ru: "После обретения суверенитета в 1991 году страна реализовала собственную модель эволюционного перехода к рынку. С 2017 года масштабные реформы Нового Узбекистана открыли экономику: либерализация валютного рынка, снижение налогов и защита инвесторов.",
        en: "Following 1991 independence, Uzbekistan instituted its phased transition model. Since 2017, the 'New Uzbekistan' reforms enacted currency convertibility, streamlined tax codes, and accelerated WTO accession and industrial integration."
      },
      coreIdeas: [
        {
          uz: "Jadidlar iqtisodiy merosi: Mahmudxo'ja Behbudiy, Fitrat va Munavvarqori Abdurashidxonov xalqni zamonaviy hisob-kitob, bank ishi, savdo-sanoat shirkatlari («Tujjor», «Barakat») tuzishga va milliy boylik yaratishga chaqirganlar.",
          ru: "Экономическая программа джадидов: Призыв к созданию национальных торговых домов, акционерных обществ, внедрению двойной бухгалтерии и банковского дела.",
          en: "Jadid Economic Program: Pioneering modern corporate joint-stock enterprises ('Tujjor'), double-entry bookkeeping, modern banking, and vernacular commercial colleges."
        },
        {
          uz: "Bozorga o'tishning «O'zbek modeli» 5 tamoyili: Iqtisodiyotning mafkuradan xoliligi, davlatning bosh islohotchilik roli, qonun ustuvorligi, kuchli ijtimoiy siyosat, bosqichma-bosqich islohotlar.",
          ru: "5 принципов эволюционного перехода к рынку: Деидеологизация, государство-главный реформатор, верховенство закона, сильная социальная защита, поэтапность.",
          en: "The 5 Pillars of Market Transition: De-ideologization, the state as prime reformer, rule of law, robust social safety nets, and gradual evolution."
        },
        {
          uz: "«Yangi O'zbekiston» iqtisodiy strategiyasi: Konvertatsiya va valyuta erkinligi, qulay investitsiya muhiti, kambag'allikni qisqartirish, «Yashil iqtisodiyot» va raqamli texnologiyalarni joriy etish.",
          ru: "Стратегия «Новый Узбекистан»: Полная конвертация валюты, сокращение бедности через поддержку малого бизнеса, цифровая трансформация и зеленая энергетика.",
          en: "New Uzbekistan Strategy: Full currency liberalization, proactive poverty alleviation via micro-entrepreneurship, green energy transitions, and digital public services."
        }
      ],
      significance: {
        uz: "O'zbekistonda iqtisodiy fikr tarixi milliy o'zlikni anglash, xususiy tadbirkorlik an'analarini tiklash va mamlakatni jahonning rivojlangan iqtisodiyotlari qatoriga olib chiqish uchun mustahkam poydevordir.",
        ru: "Изучение национальной школы экономической мысли укрепляет преемственность реформ и служит ориентиром для устойчивого суверенного развития.",
        en: "Studying Uzbekistan's economic legacy fortifies institutional resilience and informs ongoing integration into global supply networks."
      }
    },
    keyTerms: [
      {
        term: { uz: "Jadidchilik", ru: "Джадидизм", en: "Jadidism" },
        definition: {
          uz: "XIX asr oxiri — XX asr boshlarida Turkistonda yuzaga kelgan ma'rifatparvarlik, zamonaviy maktablar, sanoat va taraqqiyot harakati.",
          ru: "Модернизационное общественно-политическое и культурное движение мусульманских просветителей в Центральной Азии.",
          en: "The Muslim modernist and reform movement in Central Asia advocating contemporary sciences, vernacular press, and industrial enterprise."
        }
      },
      {
        term: { uz: "Yangi O'zbekiston", ru: "Новый Узбекистан", en: "New Uzbekistan" },
        definition: {
          uz: "2017 yildan boshlangan, inson qadrini ustuvor deb biluvchi, erkin bozor va ochiq tashqi siyosatga asoslangan taraqqiyot bosqichi.",
          ru: "Масштабная программа всесторонней модернизации государства, общества и экономики с 2017 года.",
          en: "The comprehensive reform paradigm instituted in 2017 emphasizing human dignity, entrepreneurship, and global openness."
        }
      },
      {
        term: { uz: "Valyuta erkinligi (Konvertatsiya)", ru: "Свободная конвертируемость", en: "Currency Convertibility" },
        definition: {
          uz: "2017 yil sentyabrida O'zbekistonda amalga oshirilgan, milliy valyutani erkin bozor kursi asosida ayirboshlashga o'tish islohoti.",
          ru: "Историческая реформа сентября 2017 года, обеспечившая свободный обмен сума по единому рыночному курсу.",
          en: "The landmark September 2017 reform establishing unified market-driven currency exchange for the Uzbek Som."
        }
      }
    ],
    famousWorks: [
      {
        title: "Oila yoki oila boshqarish tartiblari",
        year: "1916",
        author: "Abdurauf Fitrat",
        description: {
          uz: "Oila iqtisodiyoti, daromad va xarajatlar muvozanati, tejamkorlik va millat farovonligining oilaviy asoslarini yoritgan asar.",
          ru: "Труд о рациональном ведении семейного бюджета, финансовой дисциплине и воспитании трудолюбия.",
          en: "Treatise exploring household budgeting, financial discipline, and domestic resource optimization."
        }
      },
      {
        title: "Yangi O'zbekiston taraqqiyot strategiyasi",
        year: "2022",
        author: "Shavkat Mirziyoyev",
        description: {
          uz: "Mamlakatni barqaror iqtisodiy o'sish, xususiy mulk himoyasi va xalq farovonligiga olib chiquvchi davlat strategiyasi.",
          ru: "Программный документ долгосрочного социально-экономического развития страны.",
          en: "The authoritative state blueprint detailing structural modernization, private property guarantees, and welfare."
        }
      }
    ],
    interestingFact: {
      uz: "1910-yillarda Turkiston jadidlari «Tujjor» (Savdogarlar) nomli dastlabki milliy aksiyadorlik jamiyatini tuzib, o'zbek paxtasi va ipak mahsulotlarini xorijga to'g'ridan-to'g'ri mustaqil sotish orqali xalq boyligini o'zida saqlashga uringanlar.",
      ru: "В начале XX века джадиды создали первое национальное акционерное общество «Туджор», чтобы напрямую торговать хлопком на мировых биржах и инвестировать прибыль в школы.",
      en: "In the 1910s, Turkestan Jadid intellectuals founded the 'Tujjor' joint-stock commercial house to export regional cotton directly to world markets and fund vernacular schools with the dividends."
    },
    quiz: [
      {
        question: {
          uz: "Turkiston jadidlarining yetakchisi Mahmudxo'ja Behbudiy qaysi jurnal orqali zamonaviy iqtisodiy va madaniy bilimlarni targ'ib qilgan?",
          ru: "Через какой известный журнал Махмудходжа Бехбудий распространял передовые знания?",
          en: "Through which celebrated journal did Mahmudkhoja Behbudi promote modern economic and civic literacy?"
        },
        options: {
          uz: ["«Oyna» jurnali", "«Turkiston viloyatining gazeti»", "«Sadoi Farg'ona»", "«Al-Izoh»"],
          ru: ["Журнал «Ойна» (Зеркало)", "«Туркестанские ведомости»", "«Голос Ферганы»", "«Аль-Изох»"],
          en: ["'Oyna' (The Mirror) Journal", "'Turkestan Provincial Gazette'", "'Sadoi Farghona'", "'Al-Izoh'"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Behbudiy 1913–1915 yillarda Samarqandda «Oyna» jurnalini nashr etib, unda savdo, sanoat, bank va hisob-kitob bo'yicha turkum maqolalar berib borgan.",
          ru: "Журнал «Ойна» служил рупором просвещения, призывая к освоению современных коммерческих навыков.",
          en: "Published in Samarkand from 1913 to 1915, 'Oyna' championed scientific enterprise, trade partnerships, and accounting."
        }
      },
      {
        question: {
          uz: "O'zbekistonda valyuta bozorining erkinlashtirilishi (konvertatsiya ochilishi) qaysi yilda amalga oshirildi?",
          ru: "В каком году в Узбекистане была введена свободная конвертация национальной валюты?",
          en: "In what year was full foreign currency convertibility established in Uzbekistan?"
        },
        options: {
          uz: ["2017-yil", "1991-yil", "2005-yil", "2010-yil"],
          ru: ["2017 год", "1991 год", "2005 год", "2010 год"],
          en: ["2017", "1991", "2005", "2010"]
        },
        correctIndex: 0,
        explanation: {
          uz: "2017 yil sentyabr oyida Prezident Shavkat Mirziyoyev farmoni bilan valyutani erkin bozor narxida almashtirish yo'lga qo'yildi va bu iqtisodiyotning ochilishiga kuchli turtki berdi.",
          ru: "В сентябре 2017 года была запущена унификация обменного курса, ставшая прорывом для инвестиций.",
          en: "In September 2017, historic currency reforms unified exchange rates, igniting foreign investment and trade."
        }
      },
      {
        question: {
          uz: "Jadid mutafakkiri Abdurauf Fitratning oila byudjeti va daromadlar tejamkorligiga bag'ishlangan mashhur asari qaysi?",
          ru: "Какое произведение Абдурауфа Фитрата посвящено бережливости и семейной экономике?",
          en: "Which work by Abdurauf Fitrat focused on domestic budgeting, thrift, and household economy?"
        },
        options: {
          uz: ["«Oila yoki oila boshqarish tartiblari»", "«Qutadg'u bilig»", "«Kapital»", "«Siyosiy iqtisod traktati»"],
          ru: ["«Семья или порядок управления семьей»", "«Благодатное знание»", "«Капитал»", "«Трактат политэкономии»"],
          en: ["'Oila yoki oila boshqarish tartiblari' (The Family and Its Management)", "'Qutadghu Bilig'", "'Das Kapital'", "'Treatise on Political Economy'"]
        },
        correctIndex: 0,
        explanation: {
          uz: "Fitrat 1916 yilda yozilgan bu asarida oilaviy daromadlarni hisob-kitob qilish, isrofgarchilikka yo'l qo'ymaslik va farzandlarni mehnatsevar qilib tarbiyalashni ko'rsatgan.",
          ru: "В книге подробно рассматриваются вопросы семейного бюджета, недопустимости расточительства и трудового воспитания.",
          en: "Fitrat's 1916 work analyzed household capital preservation, waste prevention, and vocational discipline."
        }
      }
    ]
  }
];
