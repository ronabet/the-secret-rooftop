import React from 'react';
import { motion } from 'motion/react';
import { Music, Mic2 } from 'lucide-react';
import { VENUE_IMAGES } from '../data/venueData';
import { ResponsiveImage } from './ResponsiveImage';

const STAGE_OPTIONS = ['זמרים', 'נגנים', 'להקות והרכבים', 'DJ', 'הופעות חיות'];

export const StageContent: React.FC = () => {
  return (
    <section
      id="stage"
      aria-label="במה ותוכן מוזיקלי"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 relative overflow-hidden bg-[#fdf9f4]"
    >
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#18281e]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
        >
          <div className="w-full md:w-1/2 text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18281e]/5 text-[#924a29] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#924a29]/15">
              <Music className="w-3.5 h-3.5" />
              <span>במה ומוזיקה</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#18281e] mb-6 font-normal leading-tight">
              במה ותוכן בהתאמה לאירוע
            </h2>

            <p className="font-sans-luxury text-base sm:text-lg text-[#434844] mb-8 leading-relaxed font-light">
              במתחם קיימת במה שניתן לשלב כחלק מהאירוע. בתיאום מראש ניתן להוסיף זמרים, נגנים, להקות, הרכבים חיים או DJ ולהתאים את התוכן לסגנון האירוע ולתקציב.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {STAGE_OPTIONS.map((option) => (
                <span
                  key={option}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#f7f3ee] border border-[#322206]/15 text-xs sm:text-sm text-[#18281e] font-sans-luxury font-medium"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="relative rounded-xl overflow-hidden shadow-md group">
                  <ResponsiveImage
                    image={VENUE_IMAGES.corporate}
                    alt="הבמה במתחם הגג הסודי"
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-[#322206]/20 rounded-xl pointer-events-none" />
                </div>
                <p className="text-[11px] text-[#434844] text-right font-sans-luxury font-light">
                  במה עם הגברה, תאורה ונוף פתוח — מוכנה לנאומים והופעות
                </p>
              </div>

              <div className="space-y-2 mt-6 sm:mt-10">
                <div className="relative rounded-xl overflow-hidden shadow-md group">
                  <ResponsiveImage
                    image={VENUE_IMAGES.djBooth}
                    alt="עמדת DJ במתחם הגג הסודי"
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-[#322206]/20 rounded-xl pointer-events-none" />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 rounded-full border border-white/20">
                    <Mic2 className="w-3.5 h-3.5 text-[#fcdeb5]" />
                  </div>
                </div>
                <p className="text-[11px] text-[#434844] text-right font-sans-luxury font-light">
                  DJ, הרכבים חיים ותוכן מוזיקלי — לפי סגנון האירוע
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
