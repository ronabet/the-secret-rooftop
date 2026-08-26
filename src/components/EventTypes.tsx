import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { EVENT_TYPES } from '../data/venueData';
import { EventType } from '../types';

interface EventTypesProps {
  onSelectEvent: (event: EventType) => void;
}

export const EventTypes: React.FC<EventTypesProps> = ({ onSelectEvent }) => {
  return (
    <section
      id="events"
      aria-label="סוגי אירועים"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-[#fdf9f4]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18281e]/5 text-[#924a29] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#924a29]/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>התאמה אישית מלאה</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#18281e] mb-3 font-normal">
              אירועים בלתי נשכחים
            </h2>
            <p className="font-sans-luxury text-base sm:text-lg text-[#434844] font-light">
              התפאורה המושלמת לכל רגע חשוב
            </p>
          </motion.div>
        </div>

        {/* 3-Column Bento Cards (4:5 Aspect Ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {EVENT_TYPES.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onClick={() => onSelectEvent(event)}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#322206]/20 bg-[#18281e]"
            >
              {/* Event Background Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay matching HTML spec */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18281e]/95 via-[#18281e]/45 to-transparent transition-opacity duration-300 group-hover:from-[#18281e]/95 group-hover:via-[#18281e]/60" />

              {/* Top Tag badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-black/45 backdrop-blur-md border border-white/20 text-[#fcdeb5] text-[11px] font-sans-luxury font-medium px-3 py-1 rounded-full">
                  {event.capacity}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-right z-10 flex flex-col justify-end">
                {/* Title & Material Symbol Icon */}
                <div className="flex items-center gap-2.5 mb-2 text-[#fcdeb5]">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl text-[#fea279]">
                    {event.icon}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal drop-shadow">
                    {event.title}
                  </h3>
                </div>

                {/* Subtitle / Description */}
                <p className="font-sans-luxury text-sm sm:text-base text-white/85 leading-relaxed font-light transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 mb-3">
                  {event.description}
                </p>

                {/* Action CTA on Hover */}
                <div className="flex items-center justify-between pt-3 border-t border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                  <span className="text-xs font-sans-luxury text-[#fcdeb5] font-semibold flex items-center gap-1">
                    <span>פרטי חבילה וסגנונות עיצוב</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                  {event.startingPrice && (
                    <span className="text-xs text-white/70 font-sans-luxury">
                      {event.startingPrice}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
