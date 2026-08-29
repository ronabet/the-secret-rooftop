export interface EventType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  capacity: string;
  highlights: string[];
  features: string[];
  startingPrice?: string;
}

export interface MenuItem {
  name: string;
  description: string;
  tags?: string[];
  isSignature?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: MenuItem[];
}

export interface GalleryImage {
  id: string;
  url: string;
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
  image: string;
  title: string;
  subtitle: string;
};

export type HeroVideoSlide = {
  id: string;
  kind: 'video';
  mp4: string;
  webm: string;
  poster: string;
  posterUrl: string;
  title: string;
  subtitle: string;
};

export type HeroSlide = HeroImageSlide | HeroVideoSlide;
