import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { GalleryImage } from '../types';
import { useDialogFocus } from '../hooks/useDialogFocus';

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  const dialogRef = useDialogFocus(Boolean(image), onClose);

  if (!image) return null;

  const titleId = `lightbox-title-${image.id}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
          aria-hidden="true"
        />

        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl max-h-[90vh] z-10 flex flex-col items-center"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-12 left-0 sm:left-auto sm:-right-12 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="סגור תמונה"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          <img
            src={image.image.fullSrc}
            srcSet={image.image.srcSet}
            sizes="(max-width: 1024px) 100vw, 896px"
            alt={image.title}
            width={image.image.width}
            height={image.image.height}
            className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl border border-white/20"
            referrerPolicy="no-referrer"
            decoding="async"
          />

          <div className="w-full text-right mt-4 px-2 text-white">
            <p id={titleId} className="font-serif-luxury text-xl sm:text-2xl font-normal drop-shadow">
              {image.title}
            </p>
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
