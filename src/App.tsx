import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { EventType, GalleryImage } from './types';
import { MessageCircle } from 'lucide-react';

const Experience = lazy(() => import('./components/Experience').then((m) => ({ default: m.Experience })));
const EventTypes = lazy(() => import('./components/EventTypes').then((m) => ({ default: m.EventTypes })));
const Culinary = lazy(() => import('./components/Culinary').then((m) => ({ default: m.Culinary })));
const Gallery = lazy(() => import('./components/Gallery').then((m) => ({ default: m.Gallery })));
const ContactForm = lazy(() => import('./components/ContactForm').then((m) => ({ default: m.ContactForm })));
const FaqSection = lazy(() => import('./components/FaqSection').then((m) => ({ default: m.FaqSection })));
const EventDetailModal = lazy(() =>
  import('./components/EventDetailModal').then((m) => ({ default: m.EventDetailModal }))
);
const LightboxModal = lazy(() =>
  import('./components/LightboxModal').then((m) => ({ default: m.LightboxModal }))
);
const PolicyModal = lazy(() => import('./components/PolicyModal').then((m) => ({ default: m.PolicyModal })));

const SectionFallback = ({ id, minHeight }: { id: string; minHeight: string }) => (
  <div id={id} className={`${minHeight} bg-[#f7f3ee]`} aria-hidden="true" />
);

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | 'rules' | 'accessibility' | null>(null);
  const [preselectedEventType, setPreselectedEventType] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('venue');

  useEffect(() => {
    const sections = ['venue', 'events', 'gallery', 'contact'];
    const observed = new Map<string, IntersectionObserverEntry>();
    const attached = new Map<string, Element>();

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

    const attach = () => {
      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (!el) return;
        if (attached.get(sectionId) === el) return;
        const previous = attached.get(sectionId);
        if (previous) observer.unobserve(previous);
        observer.observe(el);
        attached.set(sectionId, el);
      });
    };

    attach();
    const interval = window.setInterval(attach, 250);
    const timeout = window.setTimeout(() => window.clearInterval(interval), 10000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
      observer.disconnect();
    };
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

        <Suspense fallback={<SectionFallback id="venue" minHeight="min-h-[480px]" />}>
          <Experience onOpenBooking={() => scrollToSection('contact')} />
        </Suspense>

        <Suspense fallback={<SectionFallback id="events" minHeight="min-h-[640px]" />}>
          <EventTypes onSelectEvent={(event) => setSelectedEvent(event)} />
        </Suspense>

        <Suspense fallback={<SectionFallback id="culinary" minHeight="min-h-[480px]" />}>
          <Culinary />
        </Suspense>

        <Suspense fallback={<SectionFallback id="gallery" minHeight="min-h-[640px]" />}>
          <Gallery onImageClick={(image) => setSelectedImage(image)} />
        </Suspense>

        <Suspense fallback={<SectionFallback id="contact" minHeight="min-h-[560px]" />}>
          <ContactForm preselectedEventType={preselectedEventType} />
        </Suspense>

        <Suspense fallback={<SectionFallback id="faq" minHeight="min-h-[400px]" />}>
          <FaqSection />
        </Suspense>
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
