import { motion } from "framer-motion";
import { styles } from "../styles";
import animatedgif from '../assets/animated.gif'
import anjali from '../assets/anjpic.jpg'
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-5 rounded-full bg-[#7e56d4]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          
        </div>

       <div className="flex flex-row justify-between items-center gap-20">
      <div>
      <h2 className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hi, I'm <span className="text-[#915EFF]"></span>
          </h2>
          <h3 className={`${styles.heroHeadText} mt-2 text-white`}>
            Anjali Sharma <span className="text-[#9d84d4]"></span>
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Front-End Developer <br className="sm:block hidden" />
          </p>
          <div className="text-neutral max-w-xl mb-4 font-medium translate-y-[10%] sm:translate-y-0%">
            <p>
              As a Frontend Developer, I am dedicated to delivering high-quality web applications that cater to my clients' needs. With a strong background in
              full-stack development, I excel in leveraging technologies like React.js, Next.js, TypeScript, MongoDB, Express.js, and Node.js to build scalable and resilient web solutions.
            </p>
            <br className="sm:block hidden" />
          </div>
      </div>
          <div><img src={animatedgif} alt="" width={400}/></div>
       </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
