import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { EventTypes } from './components/EventTypes';
import { Culinary } from './components/Culinary';
import { ContactForm } from './components/ContactForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { EventType, GalleryImage } from './types';
import { MessageCircle } from 'lucide-react';

const Gallery = lazy(() => import('./components/Gallery').then((m) => ({ default: m.Gallery })));
const EventDetailModal = lazy(() =>
  import('./components/EventDetailModal').then((m) => ({ default: m.EventDetailModal }))
);
const LightboxModal = lazy(() =>
  import('./components/LightboxModal').then((m) => ({ default: m.LightboxModal }))
);
const PolicyModal = lazy(() => import('./components/PolicyModal').then((m) => ({ default: m.PolicyModal })));

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | 'rules' | 'accessibility' | null>(null);
  const [preselectedEventType, setPreselectedEventType] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('venue');

  useEffect(() => {
    const sections = ['venue', 'events', 'gallery', 'contact'];
    const observed = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          observed.set(entry.target.id, entry);
        });

        let bestSection = 'venue';
        let bestRatio = 0;

        for (const sectionId of sections) {
          const entry = observed.get(sectionId);
          if (entry?.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestSection = sectionId;
          }
        }

        setActiveSection(bestSection);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5] }
    );

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
      <Header onOpenBooking={() => scrollToSection('contact')} />

      <main className="flex-1">
        <Hero onCheckAvailability={() => scrollToSection('contact')} />
        <Experience onOpenBooking={() => scrollToSection('contact')} />
        <EventTypes onSelectEvent={(event) => setSelectedEvent(event)} />
        <Culinary />

        <Suspense fallback={<div className="py-16 sm:py-24 bg-[#fdf9f4]" aria-hidden="true" />}>
          <Gallery onImageClick={(image) => setSelectedImage(image)} />
        </Suspense>

        <ContactForm preselectedEventType={preselectedEventType} />
        <FaqSection />
      </main>

      <Footer
        onOpenPrivacy={() => setPolicyModalType('privacy')}
        onOpenTerms={() => setPolicyModalType('terms')}
        onOpenRules={() => setPolicyModalType('rules')}
        onOpenAccessibility={() => setPolicyModalType('accessibility')}
      />

      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={(sectionId) => {
          setActiveSection(sectionId);
          scrollToSection(sectionId);
        }}
      />

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

      <Suspense fallback={null}>
        {selectedEvent && (
          <EventDetailModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            onBookEvent={handleBookEventFromModal}
          />
        )}

        {selectedImage && (
          <LightboxModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}

        {policyModalType && (
          <PolicyModal type={policyModalType} onClose={() => setPolicyModalType(null)} />
        )}
      </Suspense>
    </div>
  );
}
