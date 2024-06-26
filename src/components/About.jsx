import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
              src={icon}
              alt='web-development'
              className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
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
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>Overview.</h2>
              <a href="https://www.linkedin.com/in/dannycao97/" target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-800">
                  https://www.linkedin.com/in/dannycao97/
              </a>
          </motion.div>

          <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
              Admitted into Zip Code Wilmington’s highly competitive software development
            program accepting less than 10% of applicants; completed over 1000 hours of software
            development projects in an immersive, full-stack training program using Agile and
            Scrum methodologies and test-driven development; gained experience with multiple
            object-oriented programming languages and frameworks.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
  );
};

export default SectionWrapper(About, "about");