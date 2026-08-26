import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Wine, Award, ChefHat, Sparkles } from 'lucide-react';
import { VENUE_IMAGES } from '../data/venueData';

interface CulinaryProps {
  onOpenMenu: () => void;
}

export const Culinary: React.FC<CulinaryProps> = ({ onOpenMenu }) => {
  return (
    <section
      id="culinary"
      aria-label="קולינריה"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 relative overflow-hidden bg-[#f7f3ee]"
    >
      {/* Decorative organic background aura */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#fea279]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#18281e]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Main Glass Card matching HTML design */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#fcdeb5]/20 border border-[#322206]/20 rounded-2xl p-6 sm:p-10 md:p-14 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.04)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text & Culinary Highlights (Hebrew Right) */}
            <div className="w-full md:w-1/2 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18281e]/5 text-[#924a29] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#924a29]/15">
                <ChefHat className="w-3.5 h-3.5" />
                <span>שף & מיקסולוגיה</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#18281e] mb-6 font-normal leading-tight">
                חוויה קולינרית עשירה
              </h2>

              <p className="font-sans-luxury text-base sm:text-lg text-[#434844] mb-8 leading-relaxed font-light">
                אנו מציעים תפריט חלבי עשיר ומוקפד, המוכן מחומרי הגלם הטריים והאיכותיים ביותר. המנות מוגשות בעיצוב אלגנטי המשתלב עם האווירה היוקרתית של המקום.
              </p>

              {/* 3 Iconic Bullets matching HTML */}
              <ul className="space-y-4 font-sans-luxury text-base sm:text-lg text-[#1c1c19] mb-8">
                <li className="flex items-center gap-3.5 p-2.5 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="w-10 h-10 rounded-full bg-[#924a29]/10 flex items-center justify-center text-[#924a29] shrink-0">
                    <span className="material-symbols-outlined text-xl">restaurant</span>
                  </span>
                  <div>
                    <strong className="font-semibold block text-[#18281e]">תפריט חלבי עשיר ומגוון</strong>
                    <span className="text-xs sm:text-sm text-[#434844] font-light">גבינות בוטיק, דגים טריים, פוקאצ׳ות טאבון ומנות גורמה</span>
                  </div>
                </li>

                <li className="flex items-center gap-3.5 p-2.5 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="w-10 h-10 rounded-full bg-[#924a29]/10 flex items-center justify-center text-[#924a29] shrink-0">
                    <span className="material-symbols-outlined text-xl">local_bar</span>
                  </span>
                  <div>
                    <strong className="font-semibold block text-[#18281e]">בר אלכוהול פרימיום תוצרת חוץ</strong>
                    <span className="text-xs sm:text-sm text-[#434844] font-light">קוקטיילים מעוצבים, יינות מובחרים ומשקאות איכות</span>
                  </div>
                </li>

                <li className="flex items-center gap-3.5 p-2.5 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="w-10 h-10 rounded-full bg-[#924a29]/10 flex items-center justify-center text-[#924a29] shrink-0">
                    <span className="material-symbols-outlined text-xl">tapas</span>
                  </span>
                  <div>
                    <strong className="font-semibold block text-[#18281e]">עמדות קבלת פנים מעוצבות</strong>
                    <span className="text-xs sm:text-sm text-[#434844] font-light">מנות ביס אלגנטיות, פינגר פוד וקינוחי פטיפורים</span>
                  </div>
                </li>
              </ul>

              {/* Action button */}
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  id="culinary-open-menu-btn"
                  onClick={onOpenMenu}
                  className="bg-[#18281e] hover:bg-[#2d3e33] text-[#fdf9f4] font-sans-luxury text-sm font-semibold px-7 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <Utensils className="w-4 h-4 text-[#fea279]" />
                  <span>צפייה בתפריט המלא</span>
                </button>

                <div className="text-xs text-[#434844] font-sans-luxury flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#924a29]" />
                  <span>כשרות מהדרין / רבנות</span>
                </div>
              </div>
            </div>

            {/* Staggered Images (Matching HTML design) */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative rounded-xl overflow-hidden shadow-md group">
                    <img
                      src={VENUE_IMAGES.cheesePlatter}
                      alt="מגש גבינות של הגג הסודי"
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 border border-[#322206]/20 rounded-xl pointer-events-none" />
                  </div>
                  <p className="text-[11px] text-[#434844] text-right font-sans-luxury font-light">
                    אירוח שף: גבינות מובחרות ופירות העונה
                  </p>
                </div>

                <div className="space-y-2 mt-6 sm:mt-10">
                  <div className="relative rounded-xl overflow-hidden shadow-md group">
                    <img
                      src={VENUE_IMAGES.cocktail}
                      alt="כוס יין על הבר של הגג הסודי"
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 border border-[#322206]/20 rounded-xl pointer-events-none" />
                  </div>
                  <p className="text-[11px] text-[#434844] text-right font-sans-luxury font-light">
                    בר מלא: יינות, קוקטיילים ומשקאות מול השקיעה
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
