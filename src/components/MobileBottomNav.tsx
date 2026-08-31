import React from 'react';
import { Home, Sparkles, Heart, CalendarCheck } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const navItems = [
    {
      id: 'venue',
      label: 'המתחם',
      icon: Home,
    },
    {
      id: 'gallery',
      label: 'גלריה',
      icon: Sparkles,
    },
    {
      id: 'events',
      label: 'אירועים',
      icon: Heart,
    },
    {
      id: 'contact',
      label: 'צרו קשר',
      icon: CalendarCheck,
    },
  ];

  return (
    <nav
      aria-label="ניווט מובייל"
      className="fixed bottom-0 left-0 right-0 w-full z-50 flex justify-around items-center h-18 px-3 md:hidden bg-[#fdf9f4]/95 backdrop-blur-lg text-[#18281e] font-sans-luxury text-[11px] border-t border-[#322206]/15 shadow-2xl"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 transition-all duration-300 cursor-pointer ${
              isActive
                ? 'text-[#924a29] font-bold scale-105 -translate-y-0.5'
                : 'text-[#434844]/70 hover:text-[#18281e]'
            }`}
          >
            <Icon className={`mb-0.5 w-6 h-6 ${isActive ? 'text-[#924a29]' : ''}`} aria-hidden="true" />
            <span className="leading-tight text-[10px] tracking-wide">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
