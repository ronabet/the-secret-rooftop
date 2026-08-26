import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { EventTypes } from './components/EventTypes';
import { Culinary } from './components/Culinary';
import { Gallery } from './components/Gallery';
import { ContactForm } from './components/ContactForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MenuModal } from './components/MenuModal';
import { EventDetailModal } from './components/EventDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { PolicyModal } from './components/PolicyModal';
import { EventType, GalleryImage } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | 'rules' | 'accessibility' | null>(null);
  const [preselectedEventType, setPreselectedEventType] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('venue');

  // Track scroll position to highlight bottom mobile navigation items
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['venue', 'events', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookEventFromModal = (eventTypeId: string) => {
    setPreselectedEventType(eventTypeId);
    scrollToSection('contact');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#fdf9f4] text-[#1c1c19] flex flex-col antialiased selection:bg-[#fcdeb5] selection:text-[#271901] text-right">
      {/* Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenBooking={() => scrollToSection('contact')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onScrollToVenue={() => scrollToSection('venue')} />

        {/* 2. Venue & Experience Section ("אווירה פריזאית מעל העיר") */}
        <Experience onOpenBooking={() => scrollToSection('contact')} />

        {/* 3. Event Types / Bento Grid ("אירועים בלתי נשכחים") */}
        <EventTypes onSelectEvent={(event) => setSelectedEvent(event)} />

        {/* 4. Culinary & Bar Section ("חוויה קולינרית עשירה") */}
        <Culinary onOpenMenu={() => setIsMenuOpen(true)} />

        {/* 5. Photo Gallery ("רגעים של קסם") */}
        <Gallery onImageClick={(image) => setSelectedImage(image)} />

        {/* 6. Lead Capture & Booking Form ("בואו נפיק לכם אירוע בלתי נשכח") */}
        <ContactForm preselectedEventType={preselectedEventType} />

        {/* 7. FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPolicyModalType('privacy')}
        onOpenTerms={() => setPolicyModalType('terms')}
        onOpenRules={() => setPolicyModalType('rules')}
        onOpenAccessibility={() => setPolicyModalType('accessibility')}
      />

      {/* Mobile Bottom Navigation Bar matching HTML design */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={(sectionId) => {
          setActiveSection(sectionId);
          scrollToSection(sectionId);
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/972522957958?text=שלום%2C%20הגעתי%20דרך%20אתר%20הגג%20הסודי%20ואשמח%20לפרטים"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="צ'אט בוואטסאפ"
        className="fixed bottom-22 md:bottom-6 left-5 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-sans-luxury text-xs font-semibold px-0 group-hover:px-2">
          וואטסאפ ישיר
        </span>
      </a>

      {/* Interactive Modals */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectEventInquiry={() => scrollToSection('contact')}
      />

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onBookEvent={handleBookEventFromModal}
      />

      <LightboxModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}
