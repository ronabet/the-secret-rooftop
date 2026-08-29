import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, MessageCircle, Phone, Sparkles, Calendar, Users, Navigation } from 'lucide-react';
import { BookingFormData } from '../types';
import { VENUE_ADDRESS } from '../data/venueData';

interface ContactFormProps {
  preselectedEventType?: string;
}

const OWNER_WHATSAPP = '972522957958';

const AVAILABLE_ADDONS = [
  'עיצוב פרחים ובלונים',
  'צלם סטילס ווידאו + רחפן',
  'DJ ומערכת מוזיקה',
  'בר אלכוהול מורחב',
  'עמדת קינוחים מעוצבת',
  'סגירת חורף מחוממת',
];

// Event cards use `boutique`; the select option is `private`. Map both so the
// form shows the matching option and WhatsApp still gets the Hebrew label.
const EVENT_TYPE_FORM_VALUES: Record<string, string> = {
  proposal: 'proposal',
  private: 'private',
  boutique: 'private',
  corporate: 'corporate',
  other: 'other',
};

const EVENT_TYPE_LABELS: Record<string, string> = {
  proposal: 'הצעת נישואין (זוגי / אינטימי)',
  private: 'אירוע בוטיק / יום הולדת / ברית',
  boutique: 'אירוע בוטיק / יום הולדת / ברית',
  corporate: 'אירוע חברה / השקה / הרמת כוסית',
  other: 'אירוע אחר / התאמה מיוחדת',
};

const resolveEventTypeValue = (id?: string) => {
  if (!id) return '';
  return EVENT_TYPE_FORM_VALUES[id] ?? id;
};

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedEventType }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    eventType: resolveEventTypeValue(preselectedEventType),
    estimatedDate: '',
    guestCount: 20,
    addons: [],
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    const next = resolveEventTypeValue(preselectedEventType);
    if (!next) return;
    setFormData((prev) =>
      prev.eventType === next ? prev : { ...prev, eventType: next }
    );
  }, [preselectedEventType]);

  const toggleAddon = (addon: string) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addon)
        ? prev.addons.filter((a) => a !== addon)
        : [...prev.addons, addon],
    }));
  };

  const getWhatsAppMessage = () => {
    const lines = [
      'היי, אני מעוניין/ת בפרטים על הגג הסודי:',
      `*שם:* ${formData.fullName || 'לא צוין'}`,
      `*טלפון:* ${formData.phone || 'לא צוין'}`,
      `*סוג אירוע:* ${EVENT_TYPE_LABELS[formData.eventType] || 'כללי'}`,
      `*תאריך משוער:* ${formData.estimatedDate || 'גמיש'}`,
      `*כמות מוזמנים:* ${formData.guestCount}`,
    ];

    if (formData.addons.length > 0) {
      lines.push(`*תוספות:* ${formData.addons.join(', ')}`);
    }
    if (formData.notes.trim()) {
      lines.push(`*הערות:* ${formData.notes.trim()}`);
    }

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('נא למלא שם מלא ומספר טלפון תקין');
      return;
    }

    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${getWhatsAppMessage()}`;

    // Opening has to happen in the same tick as the click, otherwise it counts as a blocked popup.
    // Passing "noopener" here would make window.open always return null, which would make the
    // fallback below run on success and send this tab to WhatsApp as well.
    const whatsappTab = window.open(whatsappUrl, '_blank');

    if (!whatsappTab) {
      window.location.href = whatsappUrl;
      return;
    }

    whatsappTab.opener = null;
    setIsSuccess(true);
  };

  return (
    <section
      id="contact"
      aria-label="יצירת קשר"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-[#f1ede8] relative overflow-hidden"
    >
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fea279]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18281e]/5 text-[#924a29] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#924a29]/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>בדיקת תאריך פנוי</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#18281e] mb-3 font-normal">
            בואו נפיק לכם אירוע בלתי נשכח
          </h2>

          <p className="font-sans-luxury text-base sm:text-lg text-[#434844] mb-4 font-light">
            השאירו פרטים ונחזור אליכם בהקדם לבדיקת תאריך פנוי ותיאום פגישה.
          </p>

          <div className="font-sans-luxury text-sm text-[#924a29] mb-10 font-medium">
            <p>{VENUE_ADDRESS.full}</p>
            <a
              href={VENUE_ADDRESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#18281e] hover:text-[#924a29] mt-2 transition-colors underline-offset-2 hover:underline"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>ניווט במפות Google</span>
            </a>
          </div>
        </motion.div>

        {/* Form Card matching HTML design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#fdf9f4] p-6 sm:p-10 md:p-12 rounded-xl border border-[#322206]/20 shadow-xl text-right relative"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                  {/* Full Name Field */}
                  <div>
                    <label htmlFor="fullName" className="block font-sans-luxury text-xs text-[#434844] mb-2 uppercase tracking-widest font-semibold">
                      שם מלא
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="ישראל ישראלי"
                      className="w-full bg-transparent border-0 border-b border-[#18281e]/30 focus:border-[#924a29] focus:border-b-2 focus:ring-0 px-0 py-2.5 font-sans-luxury text-[#18281e] transition-colors placeholder:text-gray-400 text-base"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block font-sans-luxury text-xs text-[#434844] mb-2 uppercase tracking-widest font-semibold">
                      טלפון
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="050-0000000"
                      className="w-full bg-transparent border-0 border-b border-[#18281e]/30 focus:border-[#924a29] focus:border-b-2 focus:ring-0 px-0 py-2.5 font-sans-luxury text-[#18281e] transition-colors placeholder:text-gray-400 text-base"
                      dir="ltr"
                    />
                  </div>

                  {/* Event Type Select */}
                  <div>
                    <label
                      id="eventType-label"
                      htmlFor="eventType"
                      className="block font-sans-luxury text-xs text-[#434844] mb-2 uppercase tracking-widest font-semibold"
                    >
                      סוג אירוע
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      aria-labelledby="eventType-label"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#18281e]/30 focus:border-[#924a29] focus:border-b-2 focus:ring-0 px-0 py-2.5 font-sans-luxury text-[#18281e] transition-colors text-base cursor-pointer"
                    >
                      <option value="">בחרו סוג אירוע</option>
                      <option value="proposal">הצעת נישואין (זוגי / אינטימי)</option>
                      <option value="private">אירוע בוטיק / יום הולדת / ברית</option>
                      <option value="corporate">אירוע חברה / השקה / הרמת כוסית</option>
                      <option value="other">אירוע אחר / התאמה מיוחדת</option>
                    </select>
                  </div>

                  {/* Estimated Date Field */}
                  <div>
                    <label htmlFor="estimatedDate" className="block font-sans-luxury text-xs text-[#434844] mb-2 uppercase tracking-widest font-semibold">
                      תאריך משוער
                    </label>
                    <input
                      id="estimatedDate"
                      type="date"
                      value={formData.estimatedDate}
                      onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#18281e]/30 focus:border-[#924a29] focus:border-b-2 focus:ring-0 px-0 py-2.5 font-sans-luxury text-[#18281e] transition-colors text-base"
                    />
                  </div>
                </div>

                {/* Optional Extra Customization Accordion */}
                <div className="mb-8 pt-2 border-t border-[#18281e]/10">
                  <button
                    type="button"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="text-xs font-sans-luxury text-[#924a29] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>{showAdvanced ? 'הסתר הגדרות אירוע מתקדמות' : '+ הוספת כמות מוזמנים ותוספות מבוקשות (אופציונלי)'}</span>
                  </button>

                  {showAdvanced && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 space-y-4 pt-2"
                    >
                      <div>
                        <div className="flex justify-between text-xs text-[#434844] mb-1.5">
                          <label htmlFor="guestCount">כמות אורחים משוערת (עד 150 איש):</label>
                          <strong className="text-[#18281e] font-semibold text-sm">
                            {formData.guestCount} מוזמנים
                          </strong>
                        </div>
                        <input
                          id="guestCount"
                          type="range"
                          min="2"
                          max="150"
                          step="2"
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                          className="w-full accent-[#924a29] cursor-pointer"
                        />
                      </div>

                      <div>
                        <span className="block text-xs text-[#434844] mb-2">תוספות מבוקשות לאירוע:</span>
                        <div className="flex flex-wrap gap-2">
                          {AVAILABLE_ADDONS.map((addon) => {
                            const isSelected = formData.addons.includes(addon);
                            return (
                              <button
                                key={addon}
                                type="button"
                                onClick={() => toggleAddon(addon)}
                                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                                  isSelected
                                    ? 'bg-[#18281e] text-[#fdf9f4] border-[#18281e]'
                                    : 'bg-[#f7f3ee] text-[#434844] border-gray-300 hover:border-[#924a29]'
                                }`}
                              >
                                {isSelected ? '✓ ' : '+ '}{addon}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="notes" className="block text-xs text-[#434844] mb-1">הערות ובקשות מיוחדות:</label>
                        <textarea
                          id="notes"
                          rows={2}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="רעיונות, שעה מועדפת, סגנון מוזיקה..."
                          className="w-full bg-[#f7f3ee] border border-gray-300 rounded p-2.5 text-xs sm:text-sm text-[#18281e] focus:border-[#924a29] focus:outline-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Submit button matching HTML design */}
                <button
                  id="submit-lead-btn"
                  type="submit"
                  className="w-full bg-[#18281e] text-[#fdf9f4] font-sans-luxury text-sm sm:text-base font-semibold py-4 rounded uppercase tracking-widest hover:bg-[#2d3e33] active:scale-[0.99] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#fea279]" />
                  <span>שליחת הפרטים בוואטסאפ</span>
                </button>

                <p className="mt-3 text-center text-xs text-[#434844] font-sans-luxury font-light">
                  הפרטים ייפתחו כהודעת וואטסאפ מוכנה אל הגג הסודי - נותר רק ללחוץ שליחה
                </p>
              </form>
            ) : (
              /* Success confirmation state */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="w-16 h-16 bg-[#25D366]/15 rounded-full flex items-center justify-center mx-auto mb-4 text-[#25D366]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#18281e] mb-2 font-normal">
                  תודה רבה, {formData.fullName}!
                </h3>
                <p className="font-sans-luxury text-sm sm:text-base text-[#434844] max-w-md mx-auto mb-6">
                  הפרטים נפתחו בוואטסאפ כהודעה מוכנה. אחרי שתלחצו שליחה, מנהל האירועים של הגג הסודי יחזור אליך למספר {formData.phone} בתוך זמן קצר.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/${OWNER_WHATSAPP}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-sans-luxury text-sm font-semibold hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>המשך שיחה בוואטסאפ</span>
                  </a>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#f1ede8] text-[#18281e] px-6 py-3 rounded-lg font-sans-luxury text-sm font-medium hover:bg-[#e6e2dd] transition-colors cursor-pointer"
                  >
                    שליחת פנייה נוספת
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
