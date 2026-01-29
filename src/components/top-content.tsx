import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export const Topcontent = () => {
    return (
        <div className="topContent h-full max-w-[1400px] max-h-[1080px] m-auto flex justify-center items-top relative gap-10 lg:flex-row lg:items-center lg:h-fit">
            <div className="topContentLeft mt-15 h-[76%] w-full lg:w-[70%] lg:h-[calc(100%-40px)]">
                <motion.div
                    className="topContentLeftImage h-full bg-primaryColor relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    >
                        <Parallax className="h-[80%] lg:h-[calc(100%-150px)]" speed={-10}>
                            <img className="-mt-10 h-full object-cover" src="/images/IDG_20251116_150649_745.JPG" alt="top-image" />
                        </Parallax>
                        <h1 className="principal m-auto w-fit text-primaryColor -mt-5 mix-blend-difference leading-none text-center text-[105px] font-PirataOne lg:text-[145px]">
                            Erick &nbsp; Moscoso
                        </h1>
                </motion.div>
            </div>
            <motion.div
                className="topContentRight w-full h-[0] pt-0 opacity-0 absolute lg:w-[30%] lg:h-full lg:relative lg:pt-5 top-0 right-0"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img className="w-full h-full object-cover object-[0_-100px] lg:object-top" src="/images/IDG_20260103_154849_588.JPG" alt="top-image" />
            </motion.div>
        </div>
    )
}
