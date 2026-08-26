import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES } from '../data/venueData';
import logoImage from '../assets/images/secret_rooftop_logo_1787736669250.jpg';

interface HeroProps {
  onScrollToVenue: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToVenue }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full flex flex-col items-center justify-between bg-black overflow-hidden select-none
        h-[calc(100svh-var(--site-top-chrome,6.75rem))] max-h-[calc(100svh-var(--site-top-chrome,6.75rem))]
        md:max-h-[880px]
        pt-4 pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:pt-6 md:pb-6"
    >
      {/* Background Images with Cross-Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={HERO_SLIDES[currentSlide].id}
            src={HERO_SLIDES[currentSlide].image}
            alt="The Secret Rooftop sunset view"
            initial={{ opacity: 0.2, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Subtle Atmospheric Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/75 pointer-events-none" />
      </div>

      {/* Hero Center Branding — flex-1 keeps CTA pinned to the bottom of the first screen */}
      <div className="relative z-10 flex-1 min-h-0 w-full text-center flex flex-col items-center justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          {/* Authentic Circular Brand Logo Seal */}
          <div className="relative mb-2.5 sm:mb-5 group">
            <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
              <img
                src={logoImage}
                alt="הגג הסודי לוגו רשמי"
                className="w-full h-full object-contain rounded-full bg-[#fdf9f4]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle Golden Glow */}
            <div className="absolute -inset-1 bg-[#fcdeb5]/20 rounded-full blur-md -z-10" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif-luxury text-[2.35rem] leading-none sm:text-7xl md:text-8xl text-white tracking-[0.14em] sm:tracking-[0.2em] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] uppercase select-none font-normal">
            הגג הסודי
          </h1>

          {/* Subtitle: SECRET ROOFTOP */}
          <p className="font-serif-luxury text-white text-sm sm:text-xl md:text-2xl mt-2 sm:mt-4 tracking-[0.3em] sm:tracking-[0.4em] uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] font-light text-[#fcdeb5]">
            SECRET ROOFTOP
          </p>

          {/* Event types pill banner */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-4 mt-3 sm:mt-4 text-white/95 text-[10px] sm:text-sm font-sans-luxury tracking-wide drop-shadow border border-white/25 py-1.5 px-3 sm:py-2 sm:px-6 bg-black/35 backdrop-blur-md rounded-full max-w-[min(100%,22rem)] sm:max-w-none">
            <span className="font-medium text-[#fcdeb5]">💍 הצעות נישואין</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="font-medium text-white">✨ אירועי בוטיק וימי הולדת</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="font-medium text-white">🍸 ערבי חברה וקוקטייל</span>
          </div>

          {/* Slide specific subtle caption */}
          <p className="text-white/80 text-xs sm:text-sm font-sans-luxury tracking-wider mt-3 max-w-md text-center drop-shadow hidden sm:block">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom controls — always inside the first viewport, above mobile bottom nav */}
      <div className="relative z-20 w-full flex flex-col items-center gap-3 shrink-0 px-4">
        {/* Image Carousel Dots */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`עבור לתמונה ${index + 1}`}
                className={`transition-all duration-300 cursor-pointer h-2 rounded-full ${
                  isActive
                    ? 'w-7 sm:w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            );
          })}
        </div>

        {/* CTA — visible without scrolling on all screen sizes */}
        <button
          id="hero-reserve-cta"
          onClick={onScrollToVenue}
          className="inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full text-xs sm:text-sm font-sans-luxury font-medium tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group cursor-pointer"
        >
          <span className="material-symbols-outlined text-white text-base group-hover:-translate-y-0.5 transition-transform duration-300">
            expand_less
          </span>
          <span>להזמנת מקום</span>
        </button>
      </div>
    </section>
  );
};
