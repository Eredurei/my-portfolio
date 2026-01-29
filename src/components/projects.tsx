import React from "react"
import { motion } from "framer-motion";
import { useTranslation } from "../i18n";

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation, Autoplay } from "swiper/modules"

export const Projects: React.FC = () => {
    const images = [
        { name: "carnall-hall.webp", url: "https://www.innatcarnallhall.com" },
        { name: "elements-by-the-sea.webp", url: "https://www.elementsbythesea.com" },
        { name: "junipine.webp", url: "https://www.junipine.com" },
        { name: "shooters.webp", url: "https://www.shooterswaterfront.com" },
        { name: "sky-rock.webp", url: "https://www.skyrocksedona.com" },
        { name: "southall.webp", url: "https://www.southalltn.com" },
        { name: "wave.webp", url: "https://www.weddingsatwave.com" },
    ]

    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{once: true, amount: 0.3}}
        >
            <section className="proyects-section py-8">
                <h2 className="mb-2">{t("projects.title")}</h2>
                <p className="max-w-[600px] m-auto mt-2 mb-6">{t("projects.summary")}</p>
                <div className="w-full max-w-4xl mx-auto relative">
                    <div className="gradient h-full w-[101%] -left-1 absolute z-10 pointer-events-none bg-[linear-gradient(90deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.5)_20%,rgba(13,13,13,0)_50%,rgba(13,13,13,0.5)_80%,rgba(13,13,13,1)_100%)]"></div>
                    <div className="custom-prev">
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="cursor-pointer h-fit absolute left-0 top-0 bottom-0 m-auto z-10 lg:-left-12">
                                <img className="h-10" src="/images/svg/arrow-prev.svg" alt="" />
                        </motion.div>
                    </div>
                    <div className="custom-next">
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="cursor-pointer h-fit absolute right-0 top-0 bottom-0 m-auto z-10 lg:-right-12">
                                    <img className="h-10" src="/images/svg/arrow-next.svg" alt="" />
                        </motion.div>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop
                        spaceBetween={20}
                        centeredSlides={true}
                        breakpoints={{
                            340: {
                                slidesPerView: 1.5,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2.1,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {images.map((img) => (
                            <SwiperSlide key={img.name}>
                                <a href={img.url} target="_blank" rel="noopener noreferrer" className="block w-full h-64">
                                    <img src={`/images/project-slider/${img.name}`} alt={img.name} className="w-full h-64 object-cover rounded" />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </motion.div>
    )
}
