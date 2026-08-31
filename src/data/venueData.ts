import { EventType, GalleryImage, FaqItem, HeroSlide } from '../types';
import { getContentImage, getHeroPoster } from './imageManifest';

export const VENUE_IMAGES = {
  hero: getContentImage('rooftop-sunset-stage'),
  experience: getContentImage('rooftop-lounge-seating'),
  proposal: getContentImage('table-skyline-sunset'),
  boutique: getContentImage('rooftop-flower-barrel'),
  corporate: getContentImage('rooftop-stage-lanterns'),
  cheesePlatter: getContentImage('cheese-board'),
  cocktail: getContentImage('wine-cheese-bar'),
  signage: getContentImage('rooftop-signage'),
  barVanDay: getContentImage('bar-van-day'),
  barVanEvening: getContentImage('bar-van-evening'),
  djBooth: getContentImage('dj-booth'),
  tableStringLights: getContentImage('table-string-lights'),
  tableLoungeCushions: getContentImage('table-lounge-cushions'),
  pizzaSlice: getContentImage('pizza-slice'),
};

export const HERO_POSTER = getHeroPoster();

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-sunset',
    kind: 'image',
    image: HERO_POSTER,
    title: 'THE SECRET ROOFTOP',
    subtitle: 'מבט מהגג — נוף פתוח 360° אל העיר, שקיעות קסומות ואירועי בוטיק בלב אשדוד',
  },
  {
    id: 'hero-2',
    kind: 'image',
    image: VENUE_IMAGES.experience,
    title: 'UNIQUE BOHO SPACE',
    subtitle: '600 מ״ר של עץ טבעי, צמחייה עשירה ועיצוב שעת הזהב (Golden Hour)',
  },
  {
    id: 'hero-3',
    kind: 'image',
    image: VENUE_IMAGES.proposal,
    title: 'MARRIAGE PROPOSALS',
    subtitle: 'הרגע המרגש ביותר בחיים שלכם מעוצב ומתוכנן עד הפרט האחרון',
  },
  {
    id: 'hero-4',
    kind: 'image',
    image: VENUE_IMAGES.barVanEvening,
    title: 'EXCLUSIVE GATHERINGS',
    subtitle: 'ערבי קוקטייל והרמות כוסית באווירה אינטימית וייחודית',
  },
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
      'בקבוק שמפניה ייחודי וכוסות קריסטל ממותגות',
      'מערכת שמע מקצועית לשיר הכניסה המרגש',
      'אפשרות לצלם וידאו/סטילס ורחפן בתיאום מראש',
    ],
    features: [
      'בלעדיות מלאה על המתחם',
      'עמדת כיבוד קל וקינוחים מפנקים',
      'ליווי אישי של מפיק צמוד לאורך כל האירוע',
      'גמישות מלאה בתזמון שעת השקיעה המדויקת',
    ],
    startingPrice: 'החל מ-1,900 ₪',
  },
  {
    id: 'boutique',
    title: 'אירועי בוטיק',
    subtitle: 'חגיגות פרטיות ומרגשות',
    description: 'ימי הולדת, בריתות ואירועים פרטיים באווירה ייחודית.',
    image: VENUE_IMAGES.boutique,
    icon: 'celebration',
    capacity: 'עד 150 איש',
    highlights: [
      'עיצוב שולחנות בוהו-שיק עם פרחים טריים ונרות',
      'תפריט חלבי עשיר בהגשה מוקפדת',
      'פינות ישיבה לאונג׳ נמוכות עם כריות נוי ושטיחים',
      'עמדות בופה מעוצבות בסגנון ים-תיכוני',
      'מערכת סאונד מתקדמת ותאורת לילה מרהיבה',
      'נוף פתוח 360° מרהיב אל קו הרקיע של אשדוד',
    ],
    features: [
      'התאמה מלאה לאירועי צהריים או ערב',
      'אופציה ל-DJ ומוזיקה חיה',
      'צוות מלצרים וברמנים אישי ומקצועי',
      'אזור צילום מעוצב (Photo Booth) לאורחים',
    ],
    startingPrice: 'החל מ-180 ₪ לאורח',
  },
  {
    id: 'corporate',
    title: 'ערבי חברה',
    subtitle: 'אירועים עסקיים בסטנדרט ייחודי',
    description: 'גיבוש חברה, השקות והרמות כוסית בסטנדרט הגבוה ביותר.',
    image: VENUE_IMAGES.corporate,
    icon: 'business_center',
    capacity: 'עד 150 איש',
    highlights: [
      'בר קוקטיילים פתוח עם ברמנים מקצועיים',
      'עמדות קבלת פנים ומנות Finger Food מוקפדות',
      'עמדת נאומים, מסך הקרנה ומערכת הגברה מתקדמת',
      'עיצוב ממותג בהתאמה לקונספט החברה',
      'אווירת Golden Hour מושלמת למינגלינג ונטוורקינג',
      'חניה בשפע בחינם והסדרי נגישות במתחם',
    ],
    features: [
      'חשבונית מס מסודרת לעסקים',
      'אפשרות לסדנאות קוקטיילים ובר בהתאמה אישית',
      'תמיכה טכנית לאורך כל האירוע',
      'מתחם VIP מקורה לאירועים בכל עונות השנה',
    ],
    startingPrice: 'חבילות מותאמות אישית',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g-1',
    image: VENUE_IMAGES.hero,
    title: 'הגג בשעת השקיעה',
    category: 'sunset',
    description: 'המתחם הפתוח עם הבמה, שולחנות העץ ותאורת המחרוזות מול קו הרקיע של העיר',
  },
  {
    id: 'g-2',
    image: VENUE_IMAGES.experience,
    title: 'פינות ישיבה בוהו-שיק',
    category: 'events',
    description: 'שולחנות עץ עם כריות רכות, עציצי פאלמה וגרילנדות זוהרות',
  },
  {
    id: 'g-3',
    image: VENUE_IMAGES.proposal,
    title: 'שולחן זוגי מול השקיעה',
    category: 'proposals',
    description: 'שולחן ערוך ליין וגבינות עם תאורה חמה ונוף פתוח אל העיר',
  },
  {
    id: 'g-4',
    image: VENUE_IMAGES.boutique,
    title: 'הפרטים הקטנים של הגג',
    category: 'sunset',
    description: 'עציצי פרחים ממותגים, תאורה חמה ומרחב פתוח לאירועי בוטיק',
  },
  {
    id: 'g-5',
    image: VENUE_IMAGES.corporate,
    title: 'הבמה והמערכת',
    category: 'events',
    description: 'במת עץ עם הגברה, פנסי ראטן ותאורה רכה - מוכנה לנאומים ולמסיבה',
  },
  {
    id: 'g-6',
    image: VENUE_IMAGES.signage,
    title: 'הכניסה לגג הסודי',
    category: 'sunset',
    description: 'שלט המתחם על קיר הבמבוק, בין צמחייה טרופית ותאורת מחרוזות',
  },
  {
    id: 'g-7',
    image: VENUE_IMAGES.barVanEvening,
    title: 'בר הוואן',
    category: 'events',
    description: 'ואן פולקסווגן וינטג׳ שהוסב לבר מלא, מואר בשעת בין הערביים',
  },
  {
    id: 'g-8',
    image: VENUE_IMAGES.barVanDay,
    title: 'הבר תחת הצללית',
    category: 'events',
    description: 'אזור הבר המקורה עם עמדות הגשה, צמחייה ותאורת מחרוזות',
  },
  {
    id: 'g-9',
    image: VENUE_IMAGES.djBooth,
    title: 'עמדת הדיג׳יי',
    category: 'events',
    description: 'עמדת מיקס בחלון הוואן - מוזיקה חיה לאורך כל הערב',
  },
  {
    id: 'g-10',
    image: VENUE_IMAGES.cheesePlatter,
    title: 'מגש הגבינות של הגג',
    category: 'culinary',
    description: 'מבחר גבינות, אגוזים ופירות העונה מוגשים על מגש עץ',
  },
  {
    id: 'g-11',
    image: VENUE_IMAGES.cocktail,
    title: 'כוס יין על הבר',
    category: 'culinary',
    description: 'יין אדום לצד מגש גבינות בפינת הבר של המתחם',
  },
  {
    id: 'g-12',
    image: VENUE_IMAGES.tableStringLights,
    title: 'ערב על הגג',
    category: 'proposals',
    description: 'פיצה טאבון, מגש גבינות ויין על שולחן עץ תחת תאורת מחרוזות',
  },
  {
    id: 'g-13',
    image: VENUE_IMAGES.tableLoungeCushions,
    title: 'שולחן חברים',
    category: 'events',
    description: 'שולחן ערוך לקבוצה עם כריות ישיבה צבעוניות ואווירה חופשית',
  },
  {
    id: 'g-14',
    image: VENUE_IMAGES.pizzaSlice,
    title: 'פיצה חמה מהתנור',
    category: 'culinary',
    description: 'משולש פיצה נמתח עם גבינה נמסה, זיתים ובצל סגול',
  },
];

export const VENUE_ADDRESS = {
  street: 'היהלומים - מתחם יוקה פארק אשדוד - קומת הגג',
  parking: 'חניה בשפע בחינם',
  full: 'היהלומים - מתחם יוקה פארק אשדוד - קומת הגג | חניה בשפע בחינם',
  mapsUrl: 'https://maps.app.goo.gl/QeLCcBWx2UhxaSiN8',
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'מהי תכולת האורחים המקסימלית במתחם?',
    answer:
      'המתחם משתרע על פני 600 מ״ר ומתאים להצעות נישואין אינטימיות, אירועי בוטיק, ימי הולדת וערבי חברה — עד 150 איש בישיבה או במינגלינג.',
  },
  {
    question: 'מהי רמת הכשרות של התפריט?',
    answer: 'התפריט כשר למהדרין. ניתן לקבל תעודת כשרות מסודרת מראש.',
  },
  {
    question: 'האם המקום פועל גם בחודשי החורף?',
    answer:
      'בהחלט! המתחם מצויד בסגירת חורף שקופה השומרת על הנוף הפתוח 360° אל העיר לצד מערכות חימום נעימות, ומבטיח אירוע חם וקסום בכל מזג אוויר.',
  },
  {
    question: 'איך מגיעים ואיפה חונים?',
    answer:
      'הכתובת: היהלומים - מתחם יוקה פארק אשדוד - קומת הגג. חניה בשפע בחינם במתחם. ניתן לנווט ישירות דרך Google Maps. הגישה לקומת הגג מתאפשרת באמצעות מעלית, ובמתחם קיימים אזורי ישיבה נגישים לכיסאות גלגלים. שירותים נגישים ציבוריים של הבניין נמצאים בקומה שמתחת וניתן להגיע אליהם באמצעות המעלית.',
  },
  {
    question: 'כמה זמן מראש מומלץ לשריין תאריך להצעת נישואין או אירוע?',
    answer:
      'לתאריכי סוף שבוע ולשעות השקיעה המבוקשות, אנו ממליצים לשריין לפחות שבועיים עד חודש מראש על מנת להבטיח את התאריך והשעה המושלמים עבורכם.',
  },
];

export const VENUE_STATS = [
  { label: 'שטח המתחם', value: '600 מ״ר' },
  { label: 'נוף פתוח', value: '360°' },
  { label: 'קיבולת', value: 'עד 150 איש' },
];
