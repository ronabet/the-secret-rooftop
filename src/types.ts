import type { ImageVariantSet } from './data/imageManifest';

export interface EventType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: ImageVariantSet;
  icon: string;
  capacity: string;
  highlights: string[];
  features: string[];
  startingPrice?: string;
}

export interface GalleryImage {
  id: string;
  image: ImageVariantSet;
  title: string;
  category: 'all' | 'proposals' | 'sunset' | 'events' | 'culinary';
  description?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  eventType: string;
  estimatedDate: string;
  guestCount: number;
  addons: string[];
  notes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type HeroImageSlide = {
  id: string;
  kind: 'image';
  image: ImageVariantSet;
  title: string;
  subtitle: string;
};

export type HeroVideoSlide = {
  id: string;
  kind: 'video';
  poster: ImageVariantSet;
  mp4Src: string;
  webmSrc: string;
  title: string;
  subtitle: string;
};

export type HeroSlide = HeroImageSlide | HeroVideoSlide;
