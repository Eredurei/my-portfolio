import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";

type Locale = "en" | "es";

const translations: Record<Locale, Record<string, any>> = {
  en,
  es,
};

interface I18nContextValue {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getNested(obj: Record<string, any>, path: string) {
  return path.split(".").reduce((acc, part) => (acc && acc[part] ? acc[part] : undefined), obj);
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Locale>(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "es" || stored === "en") return stored;
    } catch (e) {}
    return (navigator.language && navigator.language.startsWith("es")) ? "es" : "en";
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }, [lang]);

  const setLang = (l: Locale) => setLangState(l);

  const t = (key: string) => {
    const value = getNested(translations[lang], key) || getNested(translations.en, key);
    return typeof value === "string" ? value : key;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}

export default I18nProvider;
