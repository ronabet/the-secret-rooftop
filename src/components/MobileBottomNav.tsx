import React from 'react';

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
      label: 'VENUE',
      icon: 'roofing',
      href: '#venue',
    },
    {
      id: 'gallery',
      label: 'GALLERY',
      icon: 'auto_awesome',
      href: '#gallery',
    },
    {
      id: 'events',
      label: 'EVENTS',
      icon: 'favorite',
      href: '#events',
    },
    {
      id: 'contact',
      label: 'CONTACT',
      icon: 'event_available',
      href: '#contact',
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 w-full z-50 flex justify-around items-center h-18 px-3 md:hidden bg-[#fdf9f4]/95 backdrop-blur-lg text-[#18281e] font-sans-luxury text-[11px] uppercase tracking-widest border-t border-[#322206]/15 shadow-2xl"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 transition-all duration-300 cursor-pointer ${
              isActive
                ? 'text-[#924a29] font-bold scale-105 -translate-y-0.5'
                : 'text-[#434844]/70 hover:text-[#18281e]'
            }`}
          >
            <span
              className={`material-symbols-outlined mb-0.5 text-2xl ${
                isActive ? 'fill-1 text-[#924a29]' : ''
              }`}
            >
              {item.icon}
            </span>
            <span className="leading-tight text-[10px] tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
