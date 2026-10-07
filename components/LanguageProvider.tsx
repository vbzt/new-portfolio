"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { isLocale, type Locale } from "@/lib/portfolio";

const LanguageContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void } | null>(null);
const storageKey = "portfolio-language";
const changeEvent = "portfolio-language-change";

function getLocale(): Locale {
  const saved = window.localStorage.getItem(storageKey);
  return saved && isLocale(saved) ? saved : "pt";
}

function getDefaultLocale(): Locale {
  return "pt";
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getLocale, getDefaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  function setLocale(next: Locale) {
    if (next === locale) return;
    window.localStorage.setItem(storageKey, next);
    window.dispatchEvent(new Event(changeEvent));
  }

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
