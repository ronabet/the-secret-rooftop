import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/venueData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="שאלות נפוצות"
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-[#f7f3ee] border-t border-[#18281e]/10"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18281e]/5 text-[#924a29] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#924a29]/15">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>מידע חשוב</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#18281e] mb-3 font-normal">
            שאלות ותשובות
          </h2>
          <p className="font-sans-luxury text-sm sm:text-base text-[#434844] font-light">
            כל מה שחשוב לדעת לקראת האירוע שלכם בגג הסודי
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#fdf9f4] rounded-xl border border-[#322206]/15 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-right p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer hover:bg-[#f1ede8]/50 transition-colors"
                >
                  <span className="font-sans-luxury text-base sm:text-lg font-semibold text-[#18281e]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#924a29] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-right font-sans-luxury text-sm sm:text-base text-[#434844] font-light leading-relaxed border-t border-black/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
