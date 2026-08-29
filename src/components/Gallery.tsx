import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/venueData';
import { GalleryImage } from '../types';

interface GalleryProps {
  onImageClick: (image: GalleryImage) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'הכל מהגג' },
    { id: 'sunset', label: 'שקיעות ונוף' },
    { id: 'proposals', label: 'הצעות נישואין' },
    { id: 'events', label: 'אירועים וערבים' },
    { id: 'culinary', label: 'קולינריה ובר' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section
      id="gallery"
      aria-label="גלריית תמונות"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-[#fdf9f4]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18281e]/5 text-[#924a29] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#924a29]/15">
              <Camera className="w-3.5 h-3.5" />
              <span>הצצה חיה למתחם</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#18281e] mb-3 font-normal">
              רגעים של קסם
            </h2>
            <p className="font-sans-luxury text-base sm:text-lg text-[#434844] font-light">
              מבחר תמונות מאירועים מרגשים ושקיעות עוצרות נשימה
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans-luxury transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#18281e] text-[#fdf9f4] font-semibold shadow-sm'
                      : 'bg-[#f1ede8] text-[#434844] hover:bg-[#e6e2dd] font-medium'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
                onClick={() => onImageClick(image)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-[#18281e] border border-[#322206]/15"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  decoding="async"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18281e]/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Center View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-right z-10">
                  <h4 className="font-serif-luxury text-base sm:text-lg text-white font-medium drop-shadow-sm">
                    {image.title}
                  </h4>
                  {image.description && (
                    <p className="font-sans-luxury text-xs text-white/80 font-light truncate mt-0.5">
                      {image.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
