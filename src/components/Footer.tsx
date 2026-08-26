import React from 'react';
import { ArrowUp, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenRules?: () => void;
  onOpenAccessibility?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenRules,
  onOpenAccessibility,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-16 flex flex-col items-center gap-6 bg-[#f1ede8] text-[#18281e] font-sans-luxury text-base border-t border-[#18281e]/15 mb-20 md:mb-0">
      {/* Brand Title & Official Logo */}
      <div className="flex flex-col items-center text-center">
        <BrandLogo variant="image" size="lg" className="mb-3" />
        <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#18281e] tracking-wider font-normal">
          הגג הסודי • The Secret Rooftop
        </h2>
        <p className="text-xs text-[#924a29] tracking-widest uppercase mt-1">
          הצעות נישואין • אירועי בוטיק • ערבי חברה | אשדוד
        </p>
      </div>

      {/* Social / Contact Quick Badges */}
      <div className="flex items-center gap-4 text-[#18281e]/80">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-9 h-9 rounded-full bg-[#fdf9f4] border border-[#18281e]/15 flex items-center justify-center hover:text-[#924a29] hover:border-[#924a29] transition-colors"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="tel:0522957958"
          aria-label="Phone"
          className="w-9 h-9 rounded-full bg-[#fdf9f4] border border-[#18281e]/15 flex items-center justify-center hover:text-[#924a29] hover:border-[#924a29] transition-colors"
        >
          <Phone className="w-4 h-4" />
        </a>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-9 h-9 rounded-full bg-[#fdf9f4] border border-[#18281e]/15 flex items-center justify-center hover:text-[#924a29] hover:border-[#924a29] transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Footer Legal & Policy Links matching screenshot */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#434844] font-medium pt-2">
        <button
          onClick={onOpenPrivacy}
          className="hover:text-[#924a29] transition-colors cursor-pointer"
        >
          Privacy Policy
        </button>
        <button
          onClick={onOpenTerms}
          className="hover:text-[#924a29] transition-colors cursor-pointer"
        >
          Terms of Service
        </button>
        <button
          onClick={onOpenRules}
          className="hover:text-[#924a29] transition-colors cursor-pointer"
        >
          Venue Rules
        </button>
        <button
          onClick={onOpenAccessibility}
          className="hover:text-[#924a29] transition-colors cursor-pointer"
        >
          Accessibility
        </button>
      </div>

      {/* Copyright Line matching screenshot */}
      <div className="text-[#434844]/80 text-xs text-center font-light mt-1">
        © 2024 The Secret Rooftop Ashdod. Luxury Events &amp; Proposals. All Rights Reserved.
      </div>
    </footer>
  );
};
