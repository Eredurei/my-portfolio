import { motion } from "framer-motion";
import { useTranslation } from "../i18n";

export const Experience = () => {

    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{once: true, amount: 0.3}}
        >
            <div className="max-w-[900px] m-auto text-left pb-10 border-b border-primaryColor lg:px-15">
                <h2>{t("experience.title")}</h2>
                <p className="mt-2">{t("experience.summary")}</p>
                <div className="tab mt-5 bg-secondaryColor p-5 rounded-md text-BgColor font-bold">
                    <img className="h-8 mb-2" src="/images/svg/dev.svg" alt="" />
                    <div className="title">{t("experience.tabTitle")}</div>
                    <div className="date text-xs mt-1">04/2021 - 11/2025</div>
                </div>
                <ul className=" mt-5 text-xs leading-5 list-disc list-inside pl-5">
                    <li>{t("experience.list1")}</li>
                    <li>{t("experience.list2")}</li>
                    <li>{t("experience.list3")}</li>
                    <li>{t("experience.list4")}</li>
                </ul>
            </div>
        </motion.div>
    )
}
