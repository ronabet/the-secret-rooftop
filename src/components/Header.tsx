import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle, MapPin, Calendar, Utensils, Heart, Sparkles, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'המתחם', href: '#venue' },
    { label: 'סוגי אירועים', href: '#events' },
    { label: 'קולינריה ובר', href: '#culinary' },
    { label: 'גלריה', href: '#gallery' },
    { label: 'שאלות נפוצות', href: '#faq' },
    { label: 'צרו קשר', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileDrawerOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#3b2314] text-[#fdf9f4] text-center py-2 px-4 text-xs sm:text-sm font-sans-luxury tracking-wide flex items-center justify-center gap-2 border-b border-[#fea279]/20 relative z-50">
        <span className="w-2 h-2 rounded-full bg-[#fea279] animate-warm-pulse hidden sm:inline-block"></span>
        <span>הבית לאירועים שלכם - מחכים לכם ברופטופ!</span>
        <span className="text-[#fea279] text-xs font-semibold px-2 py-0.5 rounded bg-black/30 border border-[#fea279]/30">אשדוד</span>
      </div>

      {/* Main Header */}
      <header
        className={`w-full sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fdf9f4]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#18281e]/10'
            : 'bg-[#f5f1e7] py-3 border-b border-black/5 shadow-sm'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-none transition-transform hover:scale-[1.02]"
            aria-label="The Secret Rooftop"
          >
            <BrandLogo variant="badge" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#434844] hover:text-[#18281e] font-sans-luxury text-sm font-medium transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#924a29] hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Direct Phone / Contact quick action */}
            <a
              href="tel:0522957958"
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#18281e] hover:text-[#924a29] transition-colors py-1.5 px-3 rounded border border-[#18281e]/15 font-sans-luxury"
            >
              <Phone className="w-3.5 h-3.5 text-[#924a29]" />
              <span className="font-semibold">052-295-7958</span>
            </a>

            <div className="w-px h-6 bg-black/20 mx-0.5 hidden md:block"></div>

            {/* Mobile Drawer Trigger Button */}
            <button
              id="header-drawer-toggle"
              onClick={() => setIsMobileDrawerOpen(true)}
              aria-label="פתח תפריט ניווט"
              className="p-1.5 text-[#18281e] hover:opacity-75 transition-opacity cursor-pointer focus:outline-none flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[#18281e] text-3xl">
                menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Side Navigation Drawer */}
      <AnimatePresence>
        {isMobileDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-[#fdf9f4] z-50 shadow-2xl flex flex-col justify-between border-l border-[#18281e]/15 p-6 overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex justify-between items-center pb-5 border-b border-[#18281e]/10">
                  <BrandLogo variant="badge" />
                  <button
                    onClick={() => setIsMobileDrawerOpen(false)}
                    className="p-2 rounded-full hover:bg-black/5 text-[#18281e] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation links */}
                <div className="py-6 space-y-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-right py-3 px-4 rounded-lg text-[#1c1c19] hover:bg-[#f1ede8] font-sans-luxury text-base font-medium transition-colors flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <span className="text-[#924a29] opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        ←
                      </span>
                    </button>
                  ))}

                  <button
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onOpenMenu();
                    }}
                    className="w-full text-right py-3 px-4 rounded-lg bg-[#f1ede8] text-[#18281e] font-sans-luxury text-base font-semibold transition-colors flex items-center justify-between mt-3"
                  >
                    <span className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-[#924a29]" />
                      צפייה בתפריטי שף ובר
                    </span>
                    <span className="text-xs bg-[#ccb474] text-black px-2 py-0.5 rounded font-bold">
                      תפריטים
                    </span>
                  </button>
                </div>

                {/* Venue Quick Info Box */}
                <div className="bg-[#f7f3ee] p-4 rounded-xl border border-[#322206]/15 space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-[#434844]">
                    <MapPin className="w-4 h-4 text-[#924a29] shrink-0 mt-0.5" />
                    <span>מתחם הגג הסודי, טיילת אשדוד מול הים התיכון</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#434844]">
                    <Clock className="w-4 h-4 text-[#924a29] shrink-0 mt-0.5" />
                    <span>אירועים בתיאום מראש: 16:00 - 01:00 (כולל שעת הזהב)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#434844]">
                    <Sparkles className="w-4 h-4 text-[#924a29] shrink-0 mt-0.5" />
                    <span>600 מ״ר | כשרות מהדרין | חניה צמודה | נגישות מלאה</span>
                  </div>
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="space-y-3 pt-4 border-t border-[#18281e]/10">
                <button
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#18281e] text-[#fdf9f4] py-3.5 rounded-lg font-sans-luxury font-semibold text-sm hover:bg-[#2d3e33] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#fea279]" />
                  <span>בדיקת זמינות ותיאום פגישה</span>
                </button>

                <a
                  href="https://wa.me/972522957958?text=שלום%2C%20אשמח%20לקבל%20פרטים%20על%20אירוע%20בגג%20הסודי"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366]/15 text-[#18281e] hover:bg-[#25D366]/25 border border-[#25D366]/30 py-3 rounded-lg font-sans-luxury font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>התייעצות מהירה בוואטסאפ</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
