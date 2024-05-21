import React from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/genta.jpg";
import { TypeAnimation } from "react-type-animation";
import { delay, motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Genta Arimbawa
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Front End Developer",
                  1000,
                  // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              src={profilepic}
              alt="Genta"
              className="w-[400px] sm:w-[400px] mx-auto h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
