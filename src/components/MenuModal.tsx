import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Utensils, Wine, Sparkles, Check, Download, Phone } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/venueData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEventInquiry: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onSelectEventInquiry,
}) => {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0].id);

  if (!isOpen) return null;

  const currentCategory = MENU_CATEGORIES.find((c) => c.id === activeTab) || MENU_CATEGORIES[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#fdf9f4] rounded-2xl shadow-2xl border border-[#322206]/20 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-right"
        >
          {/* Modal Header */}
          <div className="bg-[#18281e] text-[#fdf9f4] p-6 sm:p-8 flex justify-between items-center relative">
            <div>
              <div className="flex items-center gap-2 text-[#fcdeb5] text-xs font-semibold uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>חוויית אירוח קולינרית מול הים</span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl text-white font-normal">
                תפריט השף & בר הקוקטיילים
              </h2>
              <p className="text-white/75 text-xs sm:text-sm font-sans-luxury mt-1 font-light">
                כשרות מהדרין / רבנות • חומרי גלם מקומיים טריים • בר תוצרת חוץ
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="סגור תפריט"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex border-b border-[#18281e]/15 bg-[#f1ede8] overflow-x-auto px-4 sm:px-8 py-2 gap-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 sm:px-6 py-3 rounded-lg text-xs sm:text-sm font-sans-luxury transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#18281e] text-[#fdf9f4] font-semibold shadow-sm'
                      : 'text-[#434844] hover:bg-white/50 font-medium'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">
                    {cat.icon}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Category Description Banner */}
          <div className="bg-[#fcdeb5]/25 px-6 sm:px-8 py-3 border-b border-[#322206]/10 text-xs sm:text-sm text-[#322206]">
            {currentCategory.description}
          </div>

          {/* Menu Items List */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {currentCategory.items.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl border transition-all ${
                    item.isSignature
                      ? 'bg-[#f7f3ee] border-[#fea279]/50 shadow-sm'
                      : 'bg-white/60 border-[#18281e]/10 hover:border-[#18281e]/25'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h3 className="font-serif-luxury text-lg sm:text-xl text-[#18281e] font-normal">
                      {item.name}
                    </h3>
                    {item.isSignature && (
                      <span className="text-[10px] bg-[#fea279]/30 text-[#783616] font-bold px-2 py-0.5 rounded-full shrink-0 border border-[#fea279]/40">
                        Signature
                      </span>
                    )}
                  </div>

                  <p className="font-sans-luxury text-xs sm:text-sm text-[#434844] font-light leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#18281e]/5 text-[#18281e] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-[#f7f3ee] border-t border-[#18281e]/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-xs text-[#434844] text-center sm:text-right">
              ניתן לבצע התאמות צמחוניות, טבעוניות וללא גלוטן לפי דרישה.
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onSelectEventInquiry();
                }}
                className="flex-1 sm:flex-none bg-[#18281e] text-[#fdf9f4] px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#2d3e33] transition-colors cursor-pointer text-center"
              >
                קבלת הצעת מחיר והתאמת תפריט
              </button>
              <button
                onClick={onClose}
                className="bg-[#fdf9f4] border border-gray-300 text-[#434844] px-4 py-2.5 rounded-lg text-xs sm:text-sm hover:bg-gray-100 transition-colors cursor-pointer"
              >
                סגור
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
