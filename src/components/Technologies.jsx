import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiCodeigniter } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { animate, delay, motion } from "framer-motion";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack
      </motion.h1>

      <div className="my-12">
        {/* <h2 className="mb-6 text-center text-3xl font-bold">Proficient</h2> */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiHtml5 className="text-5xl text-orange-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiCss3 className="text-5xl text-blue-500 " />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaPhp className="text-5xl text-purple-500 " />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiJavascript1 className="text-5xl text-yellow-400 " />
          </motion.div>

          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <GrMysql className="text-5xl text-blue-300 " />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiCodeigniter className="text-5xl text-red-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BsBootstrap className="text-5xl text-purple-600" />
          </motion.div>
        </motion.div>
      </div>

      <div className="my-12">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-3xl font-semibold"
        >
          Still Learnig
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiTailwindCssLine className="text-5xl text-blue-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaLaravel className="text-5xl text-red-500 " />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
