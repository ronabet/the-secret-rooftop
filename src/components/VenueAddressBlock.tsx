import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { VENUE_ADDRESS } from '../data/venueData';

interface VenueAddressBlockProps {
  className?: string;
  align?: 'right' | 'center';
  variant?: 'plain' | 'card';
}

export const VenueAddressBlock: React.FC<VenueAddressBlockProps> = ({
  className = '',
  align = 'right',
  variant = 'plain',
}) => {
  const alignClass = align === 'center' ? 'text-center justify-center' : 'text-right';
  const containerClass =
    variant === 'card'
      ? 'bg-[#fdf9f4] border border-[#322206]/15 rounded-xl p-4'
      : '';

  return (
    <div className={`flex items-start gap-2 text-sm text-[#434844] ${alignClass} ${containerClass} ${className}`}>
      <MapPin className="w-4 h-4 text-[#924a29] shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-[#18281e]">{VENUE_ADDRESS.street}</p>
        <p className="text-[#924a29] font-medium mt-1">{VENUE_ADDRESS.parking}</p>
        <a
          href={VENUE_ADDRESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#18281e] hover:text-[#924a29] font-medium mt-2 transition-colors underline-offset-2 hover:underline"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>ניווט במפות Google</span>
        </a>
      </div>
    </div>
  );
};
