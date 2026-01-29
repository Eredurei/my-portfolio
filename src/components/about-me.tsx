import { motion } from "framer-motion";
import { useTranslation } from "../i18n";

export const AboutMe = () => {

    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{once: true, amount: 0.3}}
        >
            <div className="border-t border-white pt-10 max-w-[900px] m-auto">
                <h2>{t("about-me.title")}</h2>
                <div className="flex-col tabs flex flex-wrap justify-between gap-6 mt-6 relative lg:flex-row">
                    <div className="tab lg:w-[30%]">
                        <div className="title flex justify-center items-center gap-2 mb-2 py-5 px-10 border border-white rounded-md shadow-glowBrand">
                            <img className="h-8 mr-2" src="/images/svg/pinMap.svg" alt="" />
                            <h3>{t("about-me.tabTitle1")}</h3>
                        </div>
                        <div className="text px-5">{t("about-me.tabText1")}</div>
                    </div>
                    <div className="tab lg:w-[30%]">
                        <div className="title flex justify-center items-center gap-2 mb-2 py-5 px-10 border border-white rounded-md shadow-glowBrand">
                            <img className="h-8 mr-2" src="/images/svg/flag.svg" alt="" />
                            <h3>{t("about-me.tabTitle2")}</h3>
                        </div>
                        <div className="text px-5">{t("about-me.tabText2")}</div>
                    </div>
                    <div className="tab lg:w-[30%]">
                        <div className="title flex justify-center items-center gap-2 mb-2 py-5 px-10 border border-white rounded-md shadow-glowBrand">
                            <img className="h-8 mr-2" src="/images/svg/communication.svg" alt="" />
                            <h3>{t("about-me.tabTitle3")}</h3>
                        </div>
                        <div className="text px-5">{t("about-me.tabText3")}</div>
                    </div>
                </div>
                <p className="mt-7 lg:px-15">{t("about-me.summary")}</p>
            </div>
        </motion.div>
    )
}

