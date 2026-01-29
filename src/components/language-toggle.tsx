import { useTranslation } from "../i18n";

export const LanguageToggle = () => {
  const { lang, setLang } = useTranslation();

  const toggle = () => setLang(lang === "es" ? "en" : "es");

  return (
        <button
            onClick={toggle}
            className="bg-BgColor cursor-pointer text-primaryColor py-2 px-6 uppercase font-bold tracking-wider shadow-2xl"
            aria-label="Toggle language"
            >
            {lang === "es" ? "ES" : "EN"}
        </button>
  );
};
