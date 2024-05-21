import React from "react";
import aboutimg from "../assets/about4.jpeg";
import { ABOUT_TEXT } from "../constants";
import { delay, motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center my-20 text-4xl"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <img src={aboutimg} alt="about" className="rounded-2xl w-[500px]" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-8 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
