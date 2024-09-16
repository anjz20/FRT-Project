import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import anjaliPic from "../assets/anjpic.jpg"; // Importing the image

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Something about myself</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      {/* Adding the image here */}
      <div className="flex justify-between items-justify gap-20 text-justify flex-row mt-6">
        <img
          src={anjaliPic}
          alt="Anjali"
          className="w-50 h-80 object-cover"
        />
        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <p>
            Dedicated Front-end developer. Capable to solve working problems. Passionate about learning & development to reach the target. Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
          </p>
          <p>
            My passion for solving complex problems and creating innovative solutions drives me to stay up-to-date with the latest technologies and trends in the industry.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 mt-4 text-center translate-y-[50%] sm:translate-y-[0%] sm:mb-2 md:text-left">
            <h2 className="font-medium">
              <span className="mr-2 text-tertiary text-red-800-[17px] max w-3xl leading-[60px]">Name : </span>
              "Anjali Sharma"
            </h2>

            <h2 className="font-medium">
              <span className="mr-2 text-tertiary text-red-800-[17px] max w-3xl leading-[60px]">Phone : </span>
              "+91 9348273590"
            </h2>

            <h2 className="font-medium">
              <span className="mr-2 text-tertiary text-red-800-[17px] max w-3xl leading-[60px]">Email : </span>
              "anjalisharma7978@gmail.com"
            </h2>

            <h2 className="font-medium">
              <span className="mr-2 text-tertiary text-red-800-[17px] max w-3xl leading-[60px]">Address : </span>
              "Cuttack, Odisha, India"
            </h2>
          </div>

         
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
