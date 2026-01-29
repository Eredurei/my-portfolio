interface Props {
    label: string;
    link: string;
}

import { motion } from "framer-motion";

export const Button = ({ label, link }: Props) => {
    return (
        <motion.button
            className="block m-auto mt-6"
            whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            <a target="_blank" href={link} className="bg-secondaryColor cursor-pointer text-BgColor py-4 px-6 uppercase font-bold tracking-wider shadow-2xl">
                <span>{label}</span>
            </a>
        </motion.button>
    )
}
