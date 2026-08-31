import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, CheckCircle, Eye } from 'lucide-react';
import { ACCESSIBILITY_STATEMENT } from '../data/accessibilityData';
import { useDialogFocus } from '../hooks/useDialogFocus';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'rules' | 'accessibility' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  const dialogRef = useDialogFocus(Boolean(type), onClose);

  if (!type) return null;

  const { coordinator } = ACCESSIBILITY_STATEMENT;

  const contentMap = {
    privacy: {
      title: 'מדיניות פרטיות (Privacy Policy)',
      icon: <Shield className="w-5 h-5 text-[#924a29]" aria-hidden="true" />,
      text: (
        <div className="space-y-3 text-sm text-[#434844] font-light leading-relaxed">
          <p>
            אנו ב-The Secret Rooftop מכבדים את פרטיותך ומחויבים להגן על המידע האישי שאתה מוסר לנו בעת השימוש באתר, הזמנת מקום או השארת פרטים ליצירת קשר.
          </p>
          <p>
            <strong>איסוף מידע:</strong> המידע הנאסף (שם, טלפון, תאריך מועדף, סוג אירוע) משמש אך ורק לצורך תיאום פגישות, מתן הצעות מחיר ומתן שירות אישי להפקת האירוע שלכם.
          </p>
          <p>
            <strong>אבטחה:</strong> אנו נוקטים באמצעי זהירות מתקדמים כדי להבטיח את סודיות המידע ולא נעביר פרטים לגורם שלישי ללא הסכמתכם.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'תנאי שימוש (Terms of Service)',
      icon: <FileText className="w-5 h-5 text-[#924a29]" aria-hidden="true" />,
      text: (
        <div className="space-y-3 text-sm text-[#434844] font-light leading-relaxed">
          <p>
            ברוכים הבאים לאתר The Secret Rooftop. השימוש באתר והזמנת שירותים כפופים לתנאים המפורטים להלן.
          </p>
          <p>
            <strong>שריון תאריכים:</strong> שריון סופי של תאריך אירוע ייכנס לתוקף רק לאחר חתימה על הסכם הזמנה מסודר והסדרת המקדמה בהתאם למדיניות המקום.
          </p>
          <p>
            <strong>ביטולים ושינויים:</strong> מדיניות הביטולים והשינויים מפורטת בהסכם ההתקשרות האישי שנחתם מול מפיק האירוע.
          </p>
        </div>
      ),
    },
    rules: {
      title: 'כללי המתחם (Venue Rules)',
      icon: <CheckCircle className="w-5 h-5 text-[#924a29]" aria-hidden="true" />,
      text: (
        <div className="space-y-3 text-sm text-[#434844] font-light leading-relaxed">
          <p>
            על מנת להבטיח חוויית אירוח מושלמת ובטוחה לכלל האורחים, אנו מבקשים להקפיד על הכללים הבאים:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pr-2">
            <li>עישון מותר אך ורק באזורי הלאונג׳ החיצוניים המיועדים לכך.</li>
            <li>השמעת מוזיקה מתבצעת בהתאם לתקנות העירוניות וחוקי הרעש המקומיים.</li>
            <li>חל איסור מוחלט על שימוש בזיקוקים או חומרי בעירה לא מאושרים.</li>
            <li>הכנסת אלכוהול חיצוני מותנית באישור מראש ובתשלום דמי חליצה.</li>
          </ul>
        </div>
      ),
    },
    accessibility: {
      title: 'הצהרת נגישות',
      icon: <Eye className="w-5 h-5 text-[#924a29]" aria-hidden="true" />,
      text: (
        <div className="space-y-4 text-sm text-[#434844] font-light leading-relaxed">
          <p>
            The Secret Rooftop מחויב/ת להנגיש את שירותי האתר והמתחם לכלל הציבור, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998, ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013.
          </p>

          <p>
            <strong>תאריך עדכון אחרון:</strong> {ACCESSIBILITY_STATEMENT.lastUpdated}
          </p>

          <p>
            <strong>רכז/ת נגישות:</strong> {coordinator.name}
            <br />
            <strong>טלפון:</strong>{' '}
            <a href={coordinator.phoneHref} className="text-[#924a29] hover:underline font-medium">
              {coordinator.phone}
            </a>
            <br />
            <strong>וואטסאפ:</strong>{' '}
            <a
              href={coordinator.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#924a29] hover:underline font-medium"
            >
              שליחת פנייה בנושא נגישות
            </a>
          </p>

          <div>
            <strong>תקן יעד:</strong> {ACCESSIBILITY_STATEMENT.standard}
          </div>

          <div>
            <strong>התאמות נגישות באתר:</strong>
            <ul className="list-disc list-inside space-y-1 pr-2 mt-1.5">
              {ACCESSIBILITY_STATEMENT.websiteAdaptations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>מגבלות ידועות באתר:</strong>
            <ul className="list-disc list-inside space-y-1 pr-2 mt-1.5">
              {ACCESSIBILITY_STATEMENT.websiteLimitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>הסדרי נגישות במתחם:</strong>
            <p className="mt-1.5">{ACCESSIBILITY_STATEMENT.venueArrangements}</p>
          </div>

          <div>
            <strong>מגבלות ידועות במתחם:</strong>
            <ul className="list-disc list-inside space-y-1 pr-2 mt-1.5">
              {ACCESSIBILITY_STATEMENT.venueLimitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p>{ACCESSIBILITY_STATEMENT.contactInstructions}</p>
        </div>
      ),
    },
  };

  const current = contentMap[type];
  const titleId = `policy-modal-title-${type}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-[#fdf9f4] rounded-xl shadow-2xl border border-[#322206]/20 p-6 sm:p-8 z-10 text-right max-h-[90vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center pb-4 border-b border-[#18281e]/10 mb-4">
            <div className="flex items-center gap-2">
              {current.icon}
              <h2 id={titleId} className="font-serif-luxury text-lg sm:text-xl text-[#18281e]">
                {current.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-full hover:bg-black/5 text-[#18281e] transition-colors cursor-pointer"
              aria-label="סגור חלון"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="my-4">{current.text}</div>

          <div className="mt-6 pt-4 border-t border-[#18281e]/10 text-left">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#18281e] text-[#fdf9f4] px-5 py-2 rounded font-sans-luxury text-xs font-semibold hover:bg-[#2d3e33] transition-colors cursor-pointer"
            >
              הבנתי, סגור
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
