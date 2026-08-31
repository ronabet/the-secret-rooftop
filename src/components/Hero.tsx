import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronUp, CalendarCheck, Pause, Play } from 'lucide-react';
import { HERO_SLIDES } from '../data/venueData';
import { HeroSlide } from '../types';
import { ResponsiveImage } from './ResponsiveImage';
import logoImage from '../assets/images/secret_rooftop_logo_1787736669250.webp';

interface HeroProps {
  onCheckAvailability: () => void;
}

const HeroBackground: React.FC<{ slide: HeroSlide }> = ({ slide }) => {
  const isLcp = slide.id === 'hero-sunset';

  return (
    <ResponsiveImage
      key={slide.id}
      image={slide.image}
      alt={slide.subtitle}
      sizes="100vw"
      className="absolute inset-0 w-full h-full object-cover object-center brightness-110 contrast-[1.02] hero-slide-enter"
      loading={isLcp ? 'eager' : 'lazy'}
      fetchPriority={isLcp ? 'high' : 'auto'}
    />
  );
};

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  const activeSlide = HERO_SLIDES[currentSlide];
  const shouldAutoRotate = !isPaused && !prefersReducedMotion;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!shouldAutoRotate) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [shouldAutoRotate]);

  useEffect(() => {
    const nextSlide = HERO_SLIDES[(currentSlide + 1) % HERO_SLIDES.length];
    const img = new Image();
    img.src = nextSlide.image.src;
    if (nextSlide.image.srcSet) {
      img.srcset = nextSlide.image.srcSet;
    }
  }, [currentSlide]);

  useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = `תמונה ${currentSlide + 1} מתוך ${HERO_SLIDES.length}: ${activeSlide.subtitle}`;
    }
  }, [currentSlide, activeSlide.subtitle]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  return (
    <section
      id="hero"
      aria-label="ראש העמוד"
      className="relative w-full flex flex-col items-center justify-between bg-black overflow-hidden select-none
        h-[calc(100svh-var(--site-top-chrome,6.75rem))] max-h-[calc(100svh-var(--site-top-chrome,6.75rem))]
        md:max-h-[880px]
        pt-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:pt-6 md:pb-6"
    >
      <div
        ref={liveRegionRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      <div
        className="absolute inset-0 z-0"
        aria-roledescription="carousel"
        aria-label="תמונות מהמתחם"
      >
        <HeroBackground key={activeSlide.id} slide={activeSlide} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45 pointer-events-none" />
      </div>

      <div className="relative z-10 flex-1 min-h-0 w-full text-center flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center hero-content-enter">
          <div className="relative mb-2.5 sm:mb-4 group">
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-1 bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
              <img
                src={logoImage}
                alt="הגג הסודי לוגו רשמי"
                width={256}
                height={256}
                className="w-full h-full object-contain rounded-full bg-[#fdf9f4]"
                decoding="async"
              />
            </div>
            <div className="absolute -inset-1 bg-[#fcdeb5]/20 rounded-full blur-md -z-10" aria-hidden="true" />
          </div>

          <h1 className="font-serif-luxury text-[2.35rem] leading-none sm:text-6xl md:text-7xl text-white tracking-[0.14em] sm:tracking-[0.2em] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] uppercase select-none font-normal">
            הגג הסודי
          </h1>

          <p className="font-serif-luxury text-white text-sm sm:text-xl md:text-2xl mt-2 sm:mt-3 tracking-[0.3em] sm:tracking-[0.4em] uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] font-light text-[#fcdeb5]">
            SECRET ROOFTOP
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-4 mt-3 sm:mt-4 text-white/95 text-[10px] sm:text-sm font-sans-luxury tracking-wide drop-shadow border border-white/25 py-1.5 px-3 sm:py-2 sm:px-6 bg-black/25 backdrop-blur-sm rounded-full max-w-[min(100%,22rem)] sm:max-w-none">
            <span className="font-medium text-[#fcdeb5]">💍 הצעות נישואין</span>
            <span className="text-white/40 hidden sm:inline" aria-hidden="true">•</span>
            <span className="font-medium text-white">✨ אירועי בוטיק וימי הולדת</span>
            <span className="text-white/40 hidden sm:inline" aria-hidden="true">•</span>
            <span className="font-medium text-white">🍸 ערבי חברה וקוקטייל</span>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full flex flex-col items-center gap-3 shrink-0 px-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 sm:gap-2.5" role="group" aria-label="בחירת תמונה">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`עבור לתמונה ${index + 1} מתוך ${HERO_SLIDES.length}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`transition-all duration-300 cursor-pointer h-2 rounded-full ${
                    isActive
                      ? 'w-7 sm:w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                      : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={togglePause}
            aria-pressed={isPaused}
            aria-label={isPaused ? 'המשך הקרוסלה' : 'עצור את הקרוסלה'}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-black/35 hover:bg-black/50 backdrop-blur-md border border-white/30 text-white rounded-full text-xs font-sans-luxury font-medium transition-colors cursor-pointer"
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">המשך</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">עצור</span>
              </>
            )}
          </button>
        </div>

        <button
          type="button"
          id="hero-reserve-cta"
          onClick={onCheckAvailability}
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-white/25 hover:bg-white/35 backdrop-blur-md border border-white/35 text-white rounded-full text-xs sm:text-sm font-sans-luxury font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4 text-[#fcdeb5]" aria-hidden="true" />
          <span>בדיקת תאריך פנוי</span>
          <ChevronUp className="w-4 h-4 opacity-80 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};
