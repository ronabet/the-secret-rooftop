import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type FontScale = 0 | 1 | 2;

export type AccessibilityPreferences = {
  fontScale: FontScale;
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
  stopAnimations: boolean;
  largeCursor: boolean;
  increasedSpacing: boolean;
};

const STORAGE_KEY = 'secret-rooftop-a11y-preferences';

export const DEFAULT_A11Y_PREFERENCES: AccessibilityPreferences = {
  fontScale: 0,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  stopAnimations: false,
  largeCursor: false,
  increasedSpacing: false,
};

type AccessibilityContextValue = {
  preferences: AccessibilityPreferences;
  setFontScale: (scale: FontScale) => void;
  increaseFont: () => void;
  decreaseFont: () => void;
  togglePreference: (key: Exclude<keyof AccessibilityPreferences, 'fontScale'>) => void;
  resetPreferences: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

function loadPreferences(): AccessibilityPreferences {
  if (typeof window === 'undefined') return DEFAULT_A11Y_PREFERENCES;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_A11Y_PREFERENCES;
    return { ...DEFAULT_A11Y_PREFERENCES, ...JSON.parse(stored) };
  } catch {
    return DEFAULT_A11Y_PREFERENCES;
  }
}

function applyPreferences(preferences: AccessibilityPreferences) {
  const root = document.documentElement;

  root.classList.toggle('a11y-font-lg', preferences.fontScale === 1);
  root.classList.toggle('a11y-font-xl', preferences.fontScale === 2);
  root.classList.toggle('a11y-high-contrast', preferences.highContrast);
  root.classList.toggle('a11y-grayscale', preferences.grayscale);
  root.classList.toggle('a11y-highlight-links', preferences.highlightLinks);
  root.classList.toggle('a11y-readable-font', preferences.readableFont);
  root.classList.toggle('a11y-stop-animations', preferences.stopAnimations);
  root.classList.toggle('a11y-large-cursor', preferences.largeCursor);
  root.classList.toggle('a11y-line-spacing', preferences.increasedSpacing);
}

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(loadPreferences);

  useEffect(() => {
    applyPreferences(preferences);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  const setFontScale = useCallback((fontScale: FontScale) => {
    setPreferences((prev) => ({ ...prev, fontScale }));
  }, []);

  const increaseFont = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      fontScale: Math.min(2, prev.fontScale + 1) as FontScale,
    }));
  }, []);

  const decreaseFont = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      fontScale: Math.max(0, prev.fontScale - 1) as FontScale,
    }));
  }, []);

  const togglePreference = useCallback(
    (key: Exclude<keyof AccessibilityPreferences, 'fontScale'>) => {
      setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    []
  );

  const resetPreferences = useCallback(() => {
    setPreferences(DEFAULT_A11Y_PREFERENCES);
  }, []);

  const value = useMemo(
    () => ({
      preferences,
      setFontScale,
      increaseFont,
      decreaseFont,
      togglePreference,
      resetPreferences,
    }),
    [preferences, setFontScale, increaseFont, decreaseFont, togglePreference, resetPreferences]
  );

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

export function useAccessibilityPreferences() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibilityPreferences must be used within AccessibilityProvider');
  }
  return context;
}
