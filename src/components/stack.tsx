import { motion } from "framer-motion";

export const Stack = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{once: true, amount: 0.3}}
        >
            <div className="mt-10 border-primaryColor border-b pb-10 max-w-[900px] m-auto">
                <h2 className="mb-8">Tech Stack</h2>
                <div className="max-w-[400px] m-auto mt-5 stack flex flex-wrap justify-between gap-6 mt-6">
                    <img className="h-17" src="/images/svg/php.svg" alt="" />
                    <img className="h-17" src="/images/svg/javascript.svg" alt="" />
                    <img className="h-17" src="/images/svg/html5.svg" alt="" />
                    <img className="h-17" src="/images/svg/css3.svg" alt="" />
                    <img className="h-17" src="/images/svg/git.svg" alt="" />
                    <img className="h-17" src="/images/svg/ai.svg" alt="" />
                    <img className="h-17" src="/images/svg/react.svg" alt="" />
                    <img className="h-17" src="/images/svg/tailwind.svg" alt="" />
                </div>
            </div>
        </motion.div>
    )
}
