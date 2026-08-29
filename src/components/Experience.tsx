import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, SunMedium, Compass, Users, CalendarCheck } from 'lucide-react';
import { VENUE_IMAGES, VENUE_STATS } from '../data/venueData';
import { VenueAddressBlock } from './VenueAddressBlock';
import { ResponsiveImage } from './ResponsiveImage';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="venue"
      aria-label="החוויה שלנו"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-[#f7f3ee] relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fea279]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#18281e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 text-right"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18281e]/5 text-[#924a29] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#924a29]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>החוויה והאווירה</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#18281e] mb-6 leading-tight font-normal">
              המקום הסודי שלכם מעל העיר
            </h2>

            <p className="font-sans-luxury text-base sm:text-lg text-[#434844] mb-5 leading-relaxed font-light">
              ברוכים הבאים לגג הסודי – פנינה נסתרת בלב אשדוד. עיצבנו חלל אורגני ויוקרתי המשלב אלמנטים של עץ טבעי, צמחייה עשירה ותאורה רכה המדמה את שעת הזהב.
            </p>

            <p className="font-sans-luxury text-base sm:text-lg text-[#434844] mb-6 leading-relaxed font-light">
              המקום מציע מתחם מרווח של 600 מ״ר באוויר הפתוח — מושלם להצעות נישואין, אירועי בוטיק, ימי הולדת וערבי חברה, עם בר מרשים ונוף 360° אל כל העיר.
            </p>

            <VenueAddressBlock variant="card" className="mb-8" />

            <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#18281e]/10 mb-8">
              {VENUE_STATS.map((stat, idx) => (
                <div key={idx} className="text-center md:text-right">
                  <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#18281e]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#924a29] font-medium font-sans-luxury mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#fdf9f4] border border-[#322206]/15 text-xs text-[#1c1c19] font-medium">
                <SunMedium className="w-3.5 h-3.5 text-[#fea279]" />
                שקיעות Golden Hour
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#fdf9f4] border border-[#322206]/15 text-xs text-[#1c1c19] font-medium">
                <Compass className="w-3.5 h-3.5 text-[#924a29]" />
                נוף פתוח 360°
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#fdf9f4] border border-[#322206]/15 text-xs text-[#1c1c19] font-medium">
                <Users className="w-3.5 h-3.5 text-[#18281e]" />
                עד 150 איש
              </span>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 bg-[#18281e] hover:bg-[#2d3e33] text-[#fdf9f4] font-sans-luxury text-sm font-semibold px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#fea279]" />
              <span>בדיקת תאריך פנוי</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 relative h-[400px] sm:h-[480px] md:h-[520px] rounded-xl overflow-hidden shadow-lg group"
          >
            <ResponsiveImage
              image={VENUE_IMAGES.experience}
              alt="The Secret Rooftop luxury boho space"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-[#322206]/35 rounded-xl pointer-events-none" />
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg text-white text-xs font-sans-luxury border border-white/20">
              פינות הישיבה, הצמחייה ותאורת המחרוזות במתחם הפתוח
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
