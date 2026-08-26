import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Lightbox Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl max-h-[90vh] z-10 flex flex-col items-center"
        >
          <button
            onClick={onClose}
            className="absolute -top-12 left-0 sm:left-auto sm:-right-12 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="סגור תמונה"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={image.url}
            alt={image.title}
            className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl border border-white/20"
            referrerPolicy="no-referrer"
          />

          <div className="w-full text-right mt-4 px-2 text-white">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal drop-shadow">
              {image.title}
            </h3>
            {image.description && (
              <p className="font-sans-luxury text-sm text-white/80 font-light mt-1">
                {image.description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
