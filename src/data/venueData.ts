import { EventType, MenuCategory, GalleryImage, FaqItem } from '../types';

export const HERO_SLIDES = [
  {
    id: 'hero-1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQXXUaSrQGYkUU5Ksb5jxbk5Pwz9o8GQ15o4CJw-nkhuSmWBuxR3pH0fEeL3VDiGtu6WKTk-bSj941TcQ0v25H9x7v9rESBGBArhAOVw4pMOtByJQU5_fQZJTXrx6-LHlK_K5P3DEqH59Ciynd1HrHPihaL-FvZXpvtLbgUDJZEOm_UZ8QQkbuiQDJkYmqp697Kb5T8MkEzM_NeMckSDxYSMnJUUxVQnNFbg93owohd_Jhm4yszCtjelSrjivWYifngQ',
    title: 'THE SECRET ROOFTOP',
    subtitle: 'שקיעות קסומות, נוף פנורמי לים ואירועי בוטיק בלתי נשכחים בלב אשדוד',
  },
  {
    id: 'hero-2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIMjwLXJH6TnHP20eQenlZtIzGdI6hs9kzkME_qP6Rcl0e3InWA2yyoV4gdGK_KhdHL6DG5Ryb2gpPBC5BD7zdX9DvcFev-Y9iHWux9VkIFBOwBquggzDrjLMeOqVQslrDBeuhOClx2LRRfWJfxNIgmFjswSGZCqQ6txCm16C48MMKiNT_z5FfBkDfPxRXCS8d-gVKvfMDLcAXbD0Uel_xYvWZPrd2UqCMhBjCp4YGPsAPYshGuTXW',
    title: 'BOHEMIAN LUXURY',
    subtitle: '600 מ״ר של עץ טבעי, צמחייה עשירה ועיצוב שעת הזהב (Golden Hour)',
  },
  {
    id: 'hero-3',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_9wruuSnOpGB7EBC5NNeb7paGI9KY-CxQtjVYJ169qSMemxMVj45-R7d9M4V2tXXUyOgPACE3WMWO5olJo0Fjj7IYTfPEaQB3vS8M5h_5Jlgq8Vt-AAEBo6d02o4bPJ988SdijlNZh4T_Atx3JitmxKG6i7agx44Q8lcnzRoR_Vst0ahj0zJzj4DhWfLoPbf2CDOfW9ysDaFVT5WHGqpL-B7kdJVlFQzWXrmFUaGn2VwDogKchWCWZlz6ebIqRw2cfA',
    title: 'MARRIAGE PROPOSALS',
    subtitle: 'הרגע המרגש ביותר בחיים שלכם מעוצב ומתוכנן עד הפרט האחרון',
  },
  {
    id: 'hero-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm6EciXmcugkIuqxx24MyujFA399kvK2sOhzJEPuoyY5i_s8TrJdkSvMN5Plg0LZSwvPgdtZUOwx-FKFKUAUhLnW6MnuvFvfXsrfLrkQ3m1EGcPUiJu2N59L_eJGI3jGM9CwpJHTTVlyKjvEyhEnHRDTtmPDqfIPomVkWKhTWxDplRhUk6Ww4sMjtqWcALk0lX2Zs8RUNMYoYHxpJ3Aucgj-EYD6Dy0mW_0QRtJ29tx1mJMlX_p4tO',
    title: 'EXCLUSIVE GATHERINGS',
    subtitle: 'ערבי קוקטייל והרמות כוסית באווירה אינטימית ויוקרתית',
  }
];

export const VENUE_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQXXUaSrQGYkUU5Ksb5jxbk5Pwz9o8GQ15o4CJw-nkhuSmWBuxR3pH0fEeL3VDiGtu6WKTk-bSj941TcQ0v25H9x7v9rESBGBArhAOVw4pMOtByJQU5_fQZJTXrx6-LHlK_K5P3DEqH59Ciynd1HrHPihaL-FvZXpvtLbgUDJZEOm_UZ8QQkbuiQDJkYmqp697Kb5T8MkEzM_NeMckSDxYSMnJUUxVQnNFbg93owohd_Jhm4yszCtjelSrjivWYifngQ',
  experience: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIMjwLXJH6TnHP20eQenlZtIzGdI6hs9kzkME_qP6Rcl0e3InWA2yyoV4gdGK_KhdHL6DG5Ryb2gpPBC5BD7zdX9DvcFev-Y9iHWux9VkIFBOwBquggzDrjLMeOqVQslrDBeuhOClx2LRRfWJfxNIgmFjswSGZCqQ6txCm16C48MMKiNT_z5FfBkDfPxRXCS8d-gVKvfMDLcAXbD0Uel_xYvWZPrd2UqCMhBjCp4YGPsAPYshGuTXW',
  proposal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_9wruuSnOpGB7EBC5NNeb7paGI9KY-CxQtjVYJ169qSMemxMVj45-R7d9M4V2tXXUyOgPACE3WMWO5olJo0Fjj7IYTfPEaQB3vS8M5h_5Jlgq8Vt-AAEBo6d02o4bPJ988SdijlNZh4T_Atx3JitmxKG6i7agx44Q8lcnzRoR_Vst0ahj0zJzj4DhWfLoPbf2CDOfW9ysDaFVT5WHGqpL-B7kdJVlFQzWXrmFUaGn2VwDogKchWCWZlz6ebIqRw2cfA',
  boutique: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZH0GIUZFWkFZt3IBJGg_-TCqT44ADM8oRhgy1SlCfV0EvBKy2WE9bjFB9vF3YQsGrQwZKd4WQ82nxQ--6FIZCrqqLgly0okbzU0JXdIjfsImENE8sQ8GTbHLBvn-TPHePFOiXR2fyJmdaowvprGEkauzfxym_ot1wzhxtucZtfxhViOPT6If5l6E9JMoMpDLvRvL-Z1qLS9QL27f-DcWOLWM49PL1nd9vMTmH4QQAMfF0aFSKrF-c',
  corporate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm6EciXmcugkIuqxx24MyujFA399kvK2sOhzJEPuoyY5i_s8TrJdkSvMN5Plg0LZSwvPgdtZUOwx-FKFKUAUhLnW6MnuvFvfXsrfLrkQ3m1EGcPUiJu2N59L_eJGI3jGM9CwpJHTTVlyKjvEyhEnHRDTtmPDqfIPomVkWKhTWxDplRhUk6Ww4sMjtqWcALk0lX2Zs8RUNMYoYHxpJ3Aucgj-EYD6Dy0mW_0QRtJ29tx1mJMlX_p4tO',
  cheesePlatter: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Rnn1qpk-2oNVaiJHm1dxB9eO9NjxuwVECFM0sIYVb9bYVFWmI8lMrPtEdacFUQEdLbT6XXbnkOzwpX2TeR0aGFE-VwInupzpb4_S9NO0jNaaDPzdbIWHVlHAmafD1JBCXsKTW2rXEG7sfDfNaEcUyBTF6qsWBILXVXsfA3wWyCUljs5hgP1VC_fo4XUkCWiH2PHj-zVOA1H_gRt_xbTDFLO8Tqb3tErnj05lVZtppzzyAjtlPMqR',
  cocktail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHNC2rNajBDpEuB3HEDj6xMVVnjXxGihwQzBDfomz66HjBsK6816RxQTpyhHemH2gpNQGTdghkYeBMB5m7u4xCd4Dg1hA-ONSoSFEB0YHTbM--k7xLBXp_DmYMpxHXnEB1lO_rhje4lnJ6H-kP29sE6SoJ-zCf5Cx35IZ62PR7MfroCS1Ymrkp2xeLxng7nIGPwx_2d9DXxZxvzK84u2v0OHu02VVsNMCtr7munSKlV63RfvRNCGg',
};

export const EVENT_TYPES: EventType[] = [
  {
    id: 'proposal',
    title: 'הצעות נישואין',
    subtitle: 'הרגע המושלם מול השקיעה',
    description: 'רגע קסום ואינטימי מול השקיעה, עם עיצוב אישי ומרגש.',
    image: VENUE_IMAGES.proposal,
    icon: 'favorite',
    capacity: 'זוגי עד 30 אורחים',
    highlights: [
      'שער פרחים רומנטי מעוצב ותאורת לד חמה',
      'שטיח כניסה ונרות מעוצבים לאורך המסלול',
      'אותיות ענק מוארות MARRY ME או WILL YOU MARRY ME',
      'בקבוק שמפניה יוקרתי וכוסות קריסטל ממותגות',
      'מערכת שמע מקצועית לשיר הכניסה המרגש',
      'אפשרות לצלם וידאו/סטילס ורחפן בתיאום מראש'
    ],
    features: [
      'בלעדיות מלאה על המתחם',
      'עמדת כיבוד קל וקינוחים מפנקים',
      'ליווי אישי של מפיק צמוד לאורך כל האירוע',
      'גמישות מלאה בתזמון שעת השקיעה המדויקת'
    ],
    startingPrice: 'החל מ-1,900 ₪'
  },
  {
    id: 'boutique',
    title: 'אירועי בוטיק',
    subtitle: 'חגיגות פרטיות ומרגשות',
    description: 'ימי הולדת, בריתות ואירועים פרטיים באווירה יוקרתית.',
    image: VENUE_IMAGES.boutique,
    icon: 'celebration',
    capacity: '20 עד 120 אורחים',
    highlights: [
      'עיצוב שולחנות בוהו-שיק עם פרחים טריים ונרות',
      'תפריט שף חלבי עשיר בהגשה אלגנטית',
      'פינות ישיבה לאונג׳ נמוכות עם כריות נוי ושטיחים',
      'עמדות בופה מעוצבות בסגנון ים-תיכוני',
      'מערכת סאונד מתקדמת ותאורת לילה מרהיבה',
      'נוף פנורמי מרהיב אל חוף הים והמרינה של אשדוד'
    ],
    features: [
      'התאמה מלאה לאירועי צהריים או ערב',
      'אופציה ל-DJ ומוזיקה חיה',
      'צוות מלצרים וברמנים אישי ומקצועי',
      'אזור צילום מעוצב (Photo Booth) לאורחים'
    ],
    startingPrice: 'החל מ-180 ₪ לאורח'
  },
  {
    id: 'corporate',
    title: 'ערבי חברה',
    subtitle: 'אירועים עסקיים בסטנדרט פרימיום',
    description: 'גיבוש חברה, השקות והרמות כוסית בסטנדרט הגבוה ביותר.',
    image: VENUE_IMAGES.corporate,
    icon: 'business_center',
    capacity: '30 עד 150 אורחים',
    highlights: [
      'בר קוקטיילים פתוח עם מיקסולוגים מקצועיים',
      'עמדות קבלת פנים ומנות Finger Food מוקפדות',
      'עמדת נאומים, מסך הקרנה ומערכת הגברה מתקדמת',
      'עיצוב אלגנטי וממותג בהתאמה לקונספט החברה',
      'אווירת Golden Hour מושלמת למינגלינג ונטוורקינג',
      'חניה מרווחת ונגישות מלאה לאורחים'
    ],
    features: [
      'חשבונית מס מסודרת לעסקים',
      'אפשרות לסדנאות קוקטיילים וחוויית מיקסולוגיה',
      'תמיכה טכנית לאורך כל האירוע',
      'מתחם VIP מקורה לאירועים בכל עונות השנה'
    ],
    startingPrice: 'חבילות מותאמות אישית'
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'dairy-gourmet',
    name: 'תפריט שף חלבי',
    description: 'חומרי גלם מקומיים וטריים, גבינות בוטיק מובחרות ומאפים חמים מהטאבון',
    icon: 'restaurant',
    items: [
      {
        name: 'פלטת גבינות בוטיק ופירות העונה',
        description: 'גאודה הולנדית מיושנת, קממבר כמהין, פטה כבשים מעודנת, אגוזים מקורמלים, תאנים טריות וקרקרים בעבודת יד',
        tags: ['גבינות בוטיק', 'Signature'],
        isSignature: true,
      },
      {
        name: 'ברוסקטת עגבניות שרי צלויות ובוראטה',
        description: 'בוראטה טרייה מנוקדת בשמן זית כתית מעולה, בלסמי מצומצם 8 שנים ועלי בזיליקום רעננים',
        tags: ['איטלקי קלאסי'],
      },
      {
        name: 'סביצ׳ה דג ים ים-תיכוני',
        description: 'נתחי מוסר ים טרי, קוביות מנגו, צ׳ילי אדום, כוסברה וקרם אבוקדו על טוסטון קראנצ׳י',
        tags: ['דגים טריים', 'מומלץ'],
        isSignature: true,
      },
      {
        name: 'רביולי ארטישוק ירושלמי ברוטב חמאת מרווה',
        description: 'בצק פסטה טרי במילוי קטיפתי, שקדים קלויים ופתיתי פרמז׳ן גרנה פדנו',
        tags: ['חם', 'איטלקי'],
      },
      {
        name: 'סלט עלים רענן עם גבינת ברי ואגסים מקורמלים',
        description: 'מיקס חסות פריכות, רוקט, אגוזי מלך קלויים וויניגרט הדרים ודבש פרחי בר',
        tags: ['צמחוני'],
      },
      {
        name: 'פוקאצ׳ות חמות מטאבון אבן',
        description: 'רוזמרין, מלח אטלנטי, שום קונפי ומטבל עגבניות מיובשות ושמן זית זך',
        tags: ['נאפה במקום'],
      }
    ]
  },
  {
    id: 'cocktails-bar',
    name: 'בר קוקטיילים & אלכוהול פרימיום',
    description: 'מיקסולוגיה מול השקיעה עם תוצרת חוץ מובחרת וסירופים ביתיים',
    icon: 'local_bar',
    items: [
      {
        name: 'Golden Hour Sunset Spritz',
        description: 'אפרול, פרוסקו איטלקי מובחר, סודה פרימיום, תפוז דם ונגיעת רוזמרין מעושן',
        tags: ['Signature Drink'],
        isSignature: true,
      },
      {
        name: 'The Secret Rooftop Mule',
        description: 'וודקה בלוגה פרימיום, מיץ ליים סחוט טרי, בירת ג׳ינג׳ר חריפה ונענע רעננה בכוס נחושת',
        tags: ['מרענן'],
      },
      {
        name: 'Smoky Mezcal Passion',
        description: 'מזקל מעושן, מחית פסיפלורה טבעית, סירופ אגבה אורגני ומלח צ׳ילי ורוד',
        tags: ['מעושן & אקזוטי'],
        isSignature: true,
      },
      {
        name: 'French Lavender Gin & Tonic',
        description: 'ג׳ין הנדריקס, ליקר לבנדר עדין, מי טוניק בוטניים, פרוסות מלפפון וגרגרי ערער',
        tags: ['אלגנטי'],
      },
      {
        name: 'מרתף יינות שף',
        description: 'מבחר יינות לבנים, אדומים ורוזה ממיטב היקבים בישראל ובעולם (שרדונה, סוביניון בלאן, קברנה סוביניון, גראנש)',
        tags: ['יינות מובחרים'],
      }
    ]
  },
  {
    id: 'welcome-stations',
    name: 'עמדות קבלת פנים & פינגר פוד',
    description: 'מנות ביס מעוצבות להגשה מסתובבת ועמדות שוק חיות',
    icon: 'tapas',
    items: [
      {
        name: 'עמדת טאפאס ים תיכונית',
        description: 'ארנצ׳יני כמהין ופרמז׳ן, קרואסונים פריכים במילוי סלמון מעושן ומסקרפונה, טארטלטים במילוי קרם חציל שרוף ופטה',
        tags: ['קבלת פנים'],
        isSignature: true,
      },
      {
        name: 'עמדת סושי פיוז׳ן צמחוני ודגים',
        description: 'רולים מיוחדים בהרכבה חיה: סלמון אבוקדו, טונה אדומה קראנץ׳, וסושי בטטה קריספי',
        tags: ['טרי במקום'],
      },
      {
        name: 'מיני קינוחים ופטיפורים',
        description: 'טארטלט לימון ומרנג איטלקי שרוף, מוס שוקולד בלגי אישי, פבלובה פירות יער וקאפקייקס פיסטוק עשיר',
        tags: ['מתוקים'],
      }
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g-1',
    url: VENUE_IMAGES.hero,
    title: 'הגג בשעת השקיעה',
    category: 'sunset',
    description: 'מבט פנורמי על מתחם הדק מעץ, התאורה הרכה ורצועת החוף',
  },
  {
    id: 'g-2',
    url: VENUE_IMAGES.experience,
    title: 'פינות ישיבה בוהו-שיק',
    category: 'events',
    description: 'ריהוט קלוע, כריות נוי רכות, צמחייה עשירה וגרילנדות זוהרות',
  },
  {
    id: 'g-3',
    url: VENUE_IMAGES.proposal,
    title: 'עיצוב הצעת נישואין',
    category: 'proposals',
    description: 'שער פרחים לבן ומואר, נרות רומנטיים ואווירה בלתי נשכחת',
  },
  {
    id: 'g-4',
    url: VENUE_IMAGES.boutique,
    title: 'שולחן אירוע בוטיק מעוצב',
    category: 'events',
    description: 'סידורי פרחים עדינים, מפיות פשתן ונוף מרהיב לים התיכון',
  },
  {
    id: 'g-5',
    url: VENUE_IMAGES.corporate,
    title: 'אירוע חברה ומינגלינג',
    category: 'events',
    description: 'הרמת כוסית אלגנטית תחת שמי הלילה של אשדוד',
  },
  {
    id: 'g-6',
    url: VENUE_IMAGES.cheesePlatter,
    title: 'אירוח קולינרי מוקפד',
    category: 'culinary',
    description: 'מגש גבינות בוטיק, תאנים טריות וקרקרים ביתיים',
  },
  {
    id: 'g-7',
    url: VENUE_IMAGES.cocktail,
    title: 'קוקטייל פרימיום',
    category: 'culinary',
    description: 'משקאות מיקסולוגיה ייחודיים בכוסות קריסטל',
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'מהי תכולת האורחים המקסימלית במתחם?',
    answer: 'המתחם משתרע על פני 600 מ״ר ויכול להכיל החל מאירועים אינטימיים ורומנטיים ל-2 אורחים (הצעות נישואין) ועד לאירועי בוטיק וערבי חברה של 150 אורחים בישיבה או במינגלינג.',
  },
  {
    question: 'מהי רמת הכשרות של התפריט?',
    answer: 'כל חומרי הגלם והתפריט החלבי שלנו כשרים למהדרין / כשרות רבנות בהתאמה לדרישות האירוע. ניתן לקבל תעודת כשרות מסודרת מראש.',
  },
  {
    question: 'האם המקום פועל גם בחודשי החורף?',
    answer: 'בהחלט! המתחם מצויד בסגירת חורף שקופה פנורמית השומרת על הנוף המדהים לים לצד מערכות חימום נעימות, ומבטיח אירוע חם וקסום בכל מזג אוויר.',
  },
  {
    question: 'האם יש חניה מסודרת ונגישות לבעלי מוגבלויות?',
    answer: 'כן, בסמוך למתחם קיימת חניה מרווחת ללא תשלום, והמתחם כולו נגיש באופן מלא עם מעלית מהירה ונוחה ישירות לקומת הגג.',
  },
  {
    question: 'כמה זמן מראש מומלץ לשריין תאריך להצעת נישואין או אירוע?',
    answer: 'לתאריכי סוף שבוע ולשעות השקיעה המבוקשות, אנו ממליצים לשריין לפחות שבועיים עד חודש מראש על מנת להבטיח את התאריך והשעה המושלמים עבורכם.',
  }
];

export const VENUE_STATS = [
  { label: 'שטח המתחם', value: '600 מ״ר' },
  { label: 'נוף פנורמי', value: '180° לים' },
  { label: 'קיבולת אורחים', value: 'עד 150' },
  { label: 'אירועים שהופקו', value: '500+' },
];
