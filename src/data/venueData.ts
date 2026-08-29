import { EventType, MenuCategory, GalleryImage, FaqItem } from '../types';

import rooftopSunsetStage from '../assets/images/rooftop-sunset-stage.jpg';
import rooftopLoungeSeating from '../assets/images/rooftop-lounge-seating.jpg';
import rooftopStageLanterns from '../assets/images/rooftop-stage-lanterns.jpg';
import rooftopSignage from '../assets/images/rooftop-signage.jpg';
import rooftopFlowerBarrel from '../assets/images/rooftop-flower-barrel.jpg';
import barVanDay from '../assets/images/bar-van-day.jpg';
import barVanEvening from '../assets/images/bar-van-evening.jpg';
import djBooth from '../assets/images/dj-booth.jpg';
import tableSkylineSunset from '../assets/images/table-skyline-sunset.jpg';
import tableStringLights from '../assets/images/table-string-lights.jpg';
import tableLoungeCushions from '../assets/images/table-lounge-cushions.jpg';
import cheeseBoard from '../assets/images/cheese-board.jpg';
import wineCheeseBar from '../assets/images/wine-cheese-bar.jpg';
import pizzaSlice from '../assets/images/pizza-slice.jpg';

export const VENUE_IMAGES = {
  hero: rooftopSunsetStage,
  experience: rooftopLoungeSeating,
  proposal: tableSkylineSunset,
  boutique: rooftopFlowerBarrel,
  corporate: rooftopStageLanterns,
  cheesePlatter: cheeseBoard,
  cocktail: wineCheeseBar,
  signage: rooftopSignage,
  barVanDay,
  barVanEvening,
  djBooth,
  tableStringLights,
  tableLoungeCushions,
  pizzaSlice,
};

export const HERO_SLIDES = [
  {
    id: 'hero-1',
    image: rooftopSunsetStage,
    title: 'THE SECRET ROOFTOP',
    subtitle: 'שקיעות קסומות, נוף פתוח 360° אל העיר ואירועי בוטיק בלתי נשכחים בלב אשדוד',
  },
  {
    id: 'hero-2',
    image: rooftopLoungeSeating,
    title: 'BOHEMIAN LUXURY',
    subtitle: '600 מ״ר של עץ טבעי, צמחייה עשירה ועיצוב שעת הזהב (Golden Hour)',
  },
  {
    id: 'hero-3',
    image: tableSkylineSunset,
    title: 'MARRIAGE PROPOSALS',
    subtitle: 'הרגע המרגש ביותר בחיים שלכם מעוצב ומתוכנן עד הפרט האחרון',
  },
  {
    id: 'hero-4',
    image: barVanEvening,
    title: 'EXCLUSIVE GATHERINGS',
    subtitle: 'ערבי קוקטייל והרמות כוסית באווירה אינטימית ויוקרתית',
  }
];

export const EVENT_TYPES: EventType[] = [
  {
    id: 'proposal',
    title: 'הצעות נישואין',
    subtitle: 'הרגע המושלם מול השקיעה',
    description: 'רגע קסום ואינטימי מול השקיעה, עם עיצוב אישי ומרגש.',
    image: VENUE_IMAGES.proposal,
    icon: 'favorite',
    capacity: 'עד 150 איש',
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
    capacity: 'עד 150 איש',
    highlights: [
      'עיצוב שולחנות בוהו-שיק עם פרחים טריים ונרות',
      'תפריט שף חלבי עשיר בהגשה אלגנטית',
      'פינות ישיבה לאונג׳ נמוכות עם כריות נוי ושטיחים',
      'עמדות בופה מעוצבות בסגנון ים-תיכוני',
      'מערכת סאונד מתקדמת ותאורת לילה מרהיבה',
      'נוף פתוח 360° מרהיב אל קו הרקיע של אשדוד'
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
    capacity: 'עד 150 איש',
    highlights: [
      'בר קוקטיילים פתוח עם מיקסולוגים מקצועיים',
      'עמדות קבלת פנים ומנות Finger Food מוקפדות',
      'עמדת נאומים, מסך הקרנה ומערכת הגברה מתקדמת',
      'עיצוב אלגנטי וממותג בהתאמה לקונספט החברה',
      'אווירת Golden Hour מושלמת למינגלינג ונטוורקינג',
      'חניה בשפע בחינם ונגישות מלאה לאורחים'
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
    description: 'תפריט חלבי המתחלף בהתאם לביקוש, לאופי האירוע ולמספר האורחים',
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
    description: 'המתחם הפתוח עם הבמה, שולחנות העץ ותאורת המחרוזות מול קו הרקיע של העיר',
  },
  {
    id: 'g-2',
    url: VENUE_IMAGES.experience,
    title: 'פינות ישיבה בוהו-שיק',
    category: 'events',
    description: 'שולחנות עץ עם כריות רכות, עציצי פאלמה וגרילנדות זוהרות',
  },
  {
    id: 'g-3',
    url: VENUE_IMAGES.proposal,
    title: 'שולחן זוגי מול השקיעה',
    category: 'proposals',
    description: 'שולחן ערוך ליין וגבינות עם תאורה חמה ונוף פתוח אל העיר',
  },
  {
    id: 'g-4',
    url: VENUE_IMAGES.boutique,
    title: 'הפרטים הקטנים של הגג',
    category: 'sunset',
    description: 'עציצי פרחים ממותגים, תאורה חמה ומרחב פתוח לאירועי בוטיק',
  },
  {
    id: 'g-5',
    url: VENUE_IMAGES.corporate,
    title: 'הבמה והמערכת',
    category: 'events',
    description: 'במת עץ עם הגברה, פנסי ראטן ותאורה רכה - מוכנה לנאומים ולמסיבה',
  },
  {
    id: 'g-6',
    url: VENUE_IMAGES.signage,
    title: 'הכניסה לגג הסודי',
    category: 'sunset',
    description: 'שלט המתחם על קיר הבמבוק, בין צמחייה טרופית ותאורת מחרוזות',
  },
  {
    id: 'g-7',
    url: VENUE_IMAGES.barVanEvening,
    title: 'בר הוואן',
    category: 'events',
    description: 'ואן פולקסווגן וינטג׳ שהוסב לבר מלא, מואר בשעת בין הערביים',
  },
  {
    id: 'g-8',
    url: VENUE_IMAGES.barVanDay,
    title: 'הבר תחת הצללית',
    category: 'events',
    description: 'אזור הבר המקורה עם עמדות הגשה, צמחייה ותאורת מחרוזות',
  },
  {
    id: 'g-9',
    url: VENUE_IMAGES.djBooth,
    title: 'עמדת הדיג׳יי',
    category: 'events',
    description: 'עמדת מיקס בחלון הוואן - מוזיקה חיה לאורך כל הערב',
  },
  {
    id: 'g-10',
    url: VENUE_IMAGES.cheesePlatter,
    title: 'מגש הגבינות של הגג',
    category: 'culinary',
    description: 'מבחר גבינות, אגוזים ופירות העונה מוגשים על מגש עץ',
  },
  {
    id: 'g-11',
    url: VENUE_IMAGES.cocktail,
    title: 'כוס יין על הבר',
    category: 'culinary',
    description: 'יין אדום לצד מגש גבינות בפינת הבר של המתחם',
  },
  {
    id: 'g-12',
    url: VENUE_IMAGES.tableStringLights,
    title: 'ערב על הגג',
    category: 'proposals',
    description: 'פיצה טאבון, מגש גבינות ויין על שולחן עץ תחת תאורת מחרוזות',
  },
  {
    id: 'g-13',
    url: VENUE_IMAGES.tableLoungeCushions,
    title: 'שולחן חברים',
    category: 'events',
    description: 'שולחן ערוך לקבוצה עם כריות ישיבה צבעוניות ואווירה חופשית',
  },
  {
    id: 'g-14',
    url: VENUE_IMAGES.pizzaSlice,
    title: 'פיצה חמה מהתנור',
    category: 'culinary',
    description: 'משולש פיצה נמתח עם גבינה נמסה, זיתים ובצל סגול',
  }
];

export const VENUE_ADDRESS = {
  street: 'היהלומים - מתחם יוקה פארק אשדוד - קומת הגג',
  parking: 'חניה בשפע בחינם',
  full: 'היהלומים - מתחם יוקה פארק אשדוד - קומת הגג | חניה בשפע בחינם',
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'מהי תכולת האורחים המקסימלית במתחם?',
    answer: 'המתחם משתרע על פני 600 מ״ר ומתאים להצעות נישואין אינטימיות, אירועי בוטיק, ימי הולדת וערבי חברה — עד 150 איש בישיבה או במינגלינג.',
  },
  {
    question: 'מהי רמת הכשרות של התפריט?',
    answer: 'התפריט כשר למהדרין. ניתן לקבל תעודת כשרות מסודרת מראש.',
  },
  {
    question: 'האם המקום פועל גם בחודשי החורף?',
    answer: 'בהחלט! המתחם מצויד בסגירת חורף שקופה השומרת על הנוף הפתוח 360° אל העיר לצד מערכות חימום נעימות, ומבטיח אירוע חם וקסום בכל מזג אוויר.',
  },
  {
    question: 'איך מגיעים ואיפה חונים?',
    answer: 'הכתובת: היהלומים - מתחם יוקה פארק אשדוד - קומת הגג. חניה בשפע בחינם במתחם. המקום נגיש במלואו עם מעלית ישירות לקומת הגג.',
  },
  {
    question: 'כמה זמן מראש מומלץ לשריין תאריך להצעת נישואין או אירוע?',
    answer: 'לתאריכי סוף שבוע ולשעות השקיעה המבוקשות, אנו ממליצים לשריין לפחות שבועיים עד חודש מראש על מנת להבטיח את התאריך והשעה המושלמים עבורכם.',
  }
];

export const VENUE_STATS = [
  { label: 'שטח המתחם', value: '600 מ״ר' },
  { label: 'נוף פתוח', value: '360°' },
  { label: 'קיבולת', value: 'עד 150 איש' },
];
