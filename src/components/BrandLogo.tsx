import React from 'react';
import logoImage from '../assets/images/secret_rooftop_logo_1787736669250.webp';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'badge' | 'image' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  // If variant is image, render the authentic generated logo image directly
  if (variant === 'image') {
    const sizeClasses = {
      sm: 'w-12 h-12',
      md: 'w-20 h-20',
      lg: 'w-32 h-32',
      xl: 'w-48 h-48',
      hero: 'w-64 h-64 sm:w-80 sm:h-80',
    };

    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
        <img
          src={logoImage}
          alt="הגג הסודי - Secret Rooftop Logo"
          width={256}
          height={256}
          className="w-full h-full object-contain rounded-full drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Dimension scaling
  const sizeMap = {
    sm: { width: 140, height: 140, scale: 0.65 },
    md: { width: 220, height: 220, scale: 0.9 },
    lg: { width: 300, height: 300, scale: 1.1 },
    xl: { width: 380, height: 380, scale: 1.3 },
    hero: { width: 440, height: 440, scale: 1.45 },
  };

  const isWhite = variant === 'white';
  const strokeColor = isWhite ? '#ffffff' : '#18281e';
  const textColor = isWhite ? '#ffffff' : '#18281e';
  const accentColor = isWhite ? '#fcdeb5' : '#924a29';
  const secondaryText = isWhite ? 'rgba(255,255,255,0.85)' : '#434844';

  if (variant === 'badge' || variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
        {/* Crisp circular emblem icon */}
        <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border border-[#18281e]/15 shadow-sm bg-[#fdf9f4]">
          <img
            src={logoImage}
            alt=""
            width={256}
            height={256}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Typography */}
        <div className="flex flex-col text-right">
          <span className="font-serif-luxury font-bold text-lg sm:text-xl text-[#18281e] leading-tight tracking-wide">
            הגג הסודי
          </span>
          <span className="font-sans-luxury text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#924a29] font-semibold leading-none">
            SECRET ROOFTOP
          </span>
        </div>
      </div>
    );
  }

  // Full Rich Logo with Wreath, Typography, Skyline, Lock, and the 3 Core Tenets
  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      {/* High-res authentic image badge with soft vignette border */}
      <div className="relative rounded-full overflow-hidden shadow-xl border-2 border-[#18281e]/10 bg-[#fdf9f4] p-1.5 transition-transform duration-300 hover:scale-105">
        <img
          src={logoImage}
          alt="הגג הסודי - Secret Rooftop"
          width={256}
          height={256}
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
