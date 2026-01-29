import { motion } from "framer-motion";
import { useTranslation } from "../i18n";
import { LanguageToggle } from "./language-toggle";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header
      initial={{ y:-100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="max-w-[1400px] m-auto block items-center justify-between lg:flex">
        <h1 className="mb-5 lg:mb-0">{t("header.title")}</h1>
        <LanguageToggle />
      </header>
    </motion.header>
  )
}
