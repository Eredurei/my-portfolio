import {Header, Topcontent, IntroContent, AboutMe, Experience, Stack, Projects, Footer} from "./components"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

function App() {
  return (
    <main>
      <ParallaxProvider>
      <section className="bg-primaryColor text-BgColor text-center p-[20px] text-2xl h-screen 3xl:h-fit">
        <Header/>
        <Topcontent/>
      </section>
      <section className="text-primaryColor leading-[2] text-center p-10 m-auto overflow-x-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{once: true, amount: 0.3}}
        >
          <Parallax className="h-[100px] w-80 -left-[20px] absolute lg:left-0 lg:h-[300px]" speed={-13}>
              <img className="h-full" src="/images/svg/flower-element-1.svg" alt="" />
          </Parallax>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{once: true, amount: 0.3}}
        >
          <Parallax className="absolute -right-[20px] h-[100px] lg:h-[300px]" speed={10}>
              <img className="h-full -scale-x-100" src="/images/svg/flower-element-2.svg" alt="" />
          </Parallax>
        </motion.div>
        <IntroContent/>
        <AboutMe/>
        <div className="divider h-30 w-full mt-10 mb-10 bg-[url('/images/experience-image.jpg')] bg-fixed bg-bottom"></div>
        <Experience/>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{once: true, amount: 0.3}}
        >
          <Parallax className="h-[200px] absolute -left-0 lg:h-[500px]" speed={10}>
              <img className="h-full -scale-x-100 rotate-[30deg]" src="/images/svg/flower-element-3.svg" alt="" />
          </Parallax>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{once: true, amount: 0.3}}
        >
          <Parallax className="h-[100px] absolute -right-0 lg:h-[300px]" speed={-10}>
              <img className="h-full" src="/images/svg/flower-element-4.svg" alt="" />
          </Parallax>
        </motion.div>
        <Stack/>
        <Projects/>
      </section>
      <Footer/>
      </ParallaxProvider>
    </main>
  )
}

export default App
