import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Users, Sparkles, Calendar, Heart, ShieldCheck, PartyPopper, Briefcase } from 'lucide-react';
import { EventType } from '../types';
import { ResponsiveImage } from './ResponsiveImage';

const EVENT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  proposal: Heart,
  boutique: PartyPopper,
  corporate: Briefcase,
};

interface EventDetailModalProps {
  event: EventType | null;
  onClose: () => void;
  onBookEvent: (eventType: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onBookEvent,
}) => {
  if (!event) return null;

  const EventIcon = EVENT_ICONS[event.id] ?? Sparkles;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#fdf9f4] rounded-2xl shadow-2xl border border-[#322206]/20 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-right"
        >
          {/* Hero Image in Modal */}
          <div className="relative h-64 sm:h-72 w-full bg-black">
            <ResponsiveImage
              image={event.image}
              alt={event.title}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18281e] via-[#18281e]/40 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer border border-white/20"
              aria-label="סגור חלון"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Event Header details on top of image */}
            <div className="absolute bottom-6 right-6 left-6 text-white">
              <div className="flex items-center gap-2 text-[#fcdeb5] text-xs font-semibold uppercase tracking-widest mb-1.5">
                <EventIcon className="w-4 h-4" />
                <span>{event.capacity}</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal drop-shadow-md">
                {event.title}
              </h2>
              <p className="text-white/80 font-sans-luxury text-sm font-light mt-1">
                {event.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 font-sans-luxury">
            <div>
              <h3 className="font-serif-luxury text-xl text-[#18281e] mb-2 font-normal">
                אודות האירוע
              </h3>
              <p className="text-[#434844] text-sm sm:text-base font-light leading-relaxed">
                {event.description} אנו דואגים לכל פרט ופרט — החל מהעיצוב המותאם אישית, תאורת שעת הזהב הרומנטית, ועד לחוויה קולינרית מוקפדת ושירות אישי ומסור.
              </p>
            </div>

            {/* Included Highlights */}
            <div>
              <h3 className="font-serif-luxury text-lg text-[#18281e] mb-3 font-normal flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#fea279]" />
                <span>מה כלול בחבילת האירוע:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {event.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-[#f7f3ee] border border-[#18281e]/10 text-xs sm:text-sm text-[#1c1c19]"
                  >
                    <Check className="w-4 h-4 text-[#924a29] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusive Features */}
            <div className="bg-[#fcdeb5]/20 p-4 rounded-xl border border-[#322206]/15">
              <h4 className="font-semibold text-xs text-[#322206] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#924a29]" />
                <span>היתרונות הייחודיים שלנו:</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#434844]">
                {event.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#924a29]"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 sm:p-6 bg-[#f7f3ee] border-t border-[#18281e]/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-right">
              {event.startingPrice && (
                <div className="text-xs text-[#924a29] font-bold">
                  {event.startingPrice}
                </div>
              )}
              <div className="text-[11px] text-[#434844]">
                ייעוץ והתאמה אישית ללא התחייבות
              </div>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onBookEvent(event.id);
                }}
                className="flex-1 sm:flex-none bg-[#18281e] text-[#fdf9f4] px-7 py-3 rounded-lg text-sm font-semibold hover:bg-[#2d3e33] transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#fea279]" />
                <span>בדיקת תאריך פנוי</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
