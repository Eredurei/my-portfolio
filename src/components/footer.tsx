import { motion } from "framer-motion";
import { useTranslation } from "../i18n";

export const Footer = () => {

    const { t } = useTranslation();
    
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{once: true, amount: 0.3}}
        >
            <footer className="bg-primaryColor text-BgColor text-center p-6 pb-10 mt-10 relative overflow-x-hidden">
                <h2 className="mb-4">{t("footer.title")}</h2>
                <a className="flex justify-center mb-2" href="tel:+573008910776">
                    <img className="h-6 mr-2" src="/images/svg/phone.svg" alt="" />
                    300 891 0776
                </a>
                <a className="flex justify-center mb-2" href="mailto:erick.edu.moscoso@gmail.com">
                    <img className="h-6 mr-2" src="/images/svg/mail.svg" alt="" />
                    erick.edu.moscoso@gmail.com
                </a>
                <p>&copy; {new Date().getFullYear()} Erick Moscoso.</p>
                <img className="h-[80px] w-80 absolute top-0 -left-32 lg:-left-20 lg:h-[200px]" src="/images/svg/flower-element-5.svg" alt="" />
                <img className="h-[80px] w-80 absolute top-0 -right-32 lg:-right-20 lg:h-[200px]" src="/images/svg/flower-element-6.svg" alt="" />
            </footer>
        </motion.div>
    )
}
