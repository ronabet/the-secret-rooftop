import React, { useEffect, useId, useRef } from 'react';
import {
  Accessibility,
  X,
  Type,
  Contrast,
  Link2,
  AlignJustify,
  PauseCircle,
  MousePointer2,
  RotateCcw,
  FileText,
  Minus,
  Plus,
} from 'lucide-react';
import { useAccessibilityPreferences } from '../context/AccessibilityContext';

interface AccessibilityWidgetProps {
  onOpenStatement: () => void;
}

type ToggleKey =
  | 'highContrast'
  | 'grayscale'
  | 'highlightLinks'
  | 'readableFont'
  | 'stopAnimations'
  | 'largeCursor'
  | 'increasedSpacing';

const TOGGLE_OPTIONS: Array<{
  key: ToggleKey;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    key: 'highContrast',
    label: 'ניגודיות גבוהה',
    description: 'רקע כהה וטקסט בהיר',
    icon: Contrast,
  },
  {
    key: 'grayscale',
    label: 'גווני אפור',
    description: 'הסרת צבעים מהמסך',
    icon: Contrast,
  },
  {
    key: 'highlightLinks',
    label: 'הדגשת קישורים',
    description: 'סימון ברור של כל הקישורים',
    icon: Link2,
  },
  {
    key: 'readableFont',
    label: 'גופן קריא',
    description: 'מעבר לגופן פשוט וברור',
    icon: Type,
  },
  {
    key: 'increasedSpacing',
    label: 'ריווח שורות',
    description: 'מרווח גדול יותר בין שורות',
    icon: AlignJustify,
  },
  {
    key: 'stopAnimations',
    label: 'עצירת הנפשות',
    description: 'הפחתת תנועה ואנימציות',
    icon: PauseCircle,
  },
  {
    key: 'largeCursor',
    label: 'סמן עכבר מוגדל',
    description: 'סמן גדול וברור יותר',
    icon: MousePointer2,
  },
];

export const AccessibilityWidget: React.FC<AccessibilityWidgetProps> = ({ onOpenStatement }) => {
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const { preferences, increaseFont, decreaseFont, togglePreference, resetPreferences } =
    useAccessibilityPreferences();

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const firstControl = panelRef.current?.querySelector<HTMLElement>('button, a');
    firstControl?.focus();
  }, [isOpen]);

  const fontScaleLabel =
    preferences.fontScale === 0 ? 'רגיל' : preferences.fontScale === 1 ? 'גדול' : 'גדול מאוד';

  return (
    <div className="a11y-widget fixed z-[46] right-5 bottom-22 md:bottom-6 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-label="תפריט נגישות"
          className="w-[min(100vw-2.5rem,22rem)] rounded-2xl border border-[#18281e]/15 bg-[#fdf9f4] shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#18281e]/10 bg-[#f7f3ee]">
            <div className="flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-[#924a29]" aria-hidden="true" />
              <h2 className="font-sans-luxury text-sm font-semibold text-[#18281e]">תפריט נגישות</h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/5 text-[#18281e] cursor-pointer"
              aria-label="סגור תפריט נגישות"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="p-4 space-y-4 max-h-[min(70vh,32rem)] overflow-y-auto">
            <div className="rounded-xl border border-[#18281e]/10 bg-white p-3">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div>
                  <p className="font-sans-luxury text-sm font-semibold text-[#18281e]">גודל טקסט</p>
                  <p className="font-sans-luxury text-xs text-[#434844]">נוכחי: {fontScaleLabel}</p>
                </div>
                <Type className="w-4 h-4 text-[#924a29]" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={decreaseFont}
                  disabled={preferences.fontScale === 0}
                  aria-label="הקטנת טקסט"
                  className="flex-1 inline-flex items-center justify-center gap-1 py-2 rounded-lg border border-[#18281e]/15 text-sm font-sans-luxury font-medium hover:bg-[#f7f3ee] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                  <span>A-</span>
                </button>
                <button
                  type="button"
                  onClick={increaseFont}
                  disabled={preferences.fontScale === 2}
                  aria-label="הגדלת טקסט"
                  className="flex-1 inline-flex items-center justify-center gap-1 py-2 rounded-lg border border-[#18281e]/15 text-sm font-sans-luxury font-medium hover:bg-[#f7f3ee] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                  <span>A+</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {TOGGLE_OPTIONS.map(({ key, label, description, icon: Icon }) => {
                const isActive = preferences[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => togglePreference(key)}
                    aria-pressed={isActive}
                    className={`w-full text-right rounded-xl border px-3 py-2.5 transition-colors cursor-pointer ${
                      isActive
                        ? 'border-[#924a29] bg-[#fcdeb5]/35'
                        : 'border-[#18281e]/10 bg-white hover:bg-[#f7f3ee]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-sans-luxury text-sm font-semibold text-[#18281e]">{label}</p>
                        <p className="font-sans-luxury text-xs text-[#434844] mt-0.5">{description}</p>
                      </div>
                      <Icon className="w-4 h-4 text-[#924a29] shrink-0 mt-0.5" aria-hidden="true" />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  onOpenStatement();
                  setIsOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#18281e]/15 bg-white hover:bg-[#f7f3ee] font-sans-luxury text-sm font-medium text-[#18281e] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#924a29]" aria-hidden="true" />
                <span>הצהרת נגישות</span>
              </button>

              <button
                type="button"
                onClick={resetPreferences}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#18281e] hover:bg-[#2d3e33] text-[#fdf9f4] font-sans-luxury text-sm font-semibold cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>איפוס הגדרות</span>
              </button>
            </div>

            <p className="font-sans-luxury text-[11px] text-[#434844] leading-relaxed">
              תפריט זה מאפשר התאמות אישיות לגלישה. הוא משלים את ההנגשה הטכנית של האתר ואינו מחליף אותה.
            </p>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="dialog"
        aria-label={isOpen ? 'סגור תפריט נגישות' : 'פתח תפריט נגישות'}
        className="a11y-widget-trigger bg-[#18281e] text-[#fdf9f4] p-3.5 rounded-full shadow-2xl hover:bg-[#2d3e33] active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        <Accessibility className="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
  );
};
