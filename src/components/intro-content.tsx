import { Button } from "./button";
import { motion } from "framer-motion";
import { useTranslation } from "../i18n";

export const IntroContent = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{once: true, amount: 0.3}}
        >
            <div className="mb-10">
                <div className="max-w-2xl m-auto">
                    <h2 className="font-PirataOne text-2xl mb-2">{t("intro.title")}</h2>
                    <p>
                        {t("intro.summary")}
                        <Button link="https://www.linkedin.com/in/erick-eduardo-moscoso-santos-75161631a/" label={t("button.linkedin")}/>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
