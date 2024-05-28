import React from "react";
import { motion } from "framer-motion";
import { fadeIn, springAnimation } from "../../variants.js";

export const Get_in_touch = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center archivo-black-regular  text-zinc-300 flex-col relative overflow-hidden">
      <p className="text-3xl md:text-8xl">LET’S WORK</p>
      <p className="text-3xl md:text-8xl">TOGETHER</p>
      <p className="text-sm md:text-xl">
        Elevate your brand. Click for digital excellence!
      </p>
      <button className="mt-5 px-7 py-3 text-2xl border rounded-3xl">
        Contact Us
      </button>

      <div className="w-full h-24 bg-zinc-00 absolute z-10  bottom-0 flex justify-between overflow-hidden">
        <div className="w-80 h-24 bg-red- flex overflow-hidden">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[35%] h-24 bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
          ></motion.div>
          <motion.div
            variants={springAnimation("left", 0.8)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[15%] hidden md:block h-24 bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
          ></motion.div>
          {/* <motion.div
            variants={springAnimation("left", 0.5)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[15%] h-24 bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
          ></motion.div> */}
        </div>
        <div className="w-[40%] h-24 bg-red- flex relative">
          <motion.div
            variants={springAnimation("left", 0.5)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[15%] h-24  z-10 border-t-[100px] border-t-transparent
            border-r-[75px] border-r-blue-500
            border-b-[0px] border-b-transparent bottom-0"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[15%] hidden md:block h-24 bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
          ></motion.div>
          <motion.div
            variants={springAnimation("up", 0.9)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[15%] h-24 z-10 border-t-[96px] border-t-transparent
            border-r-[75px] border-r-blue-500
            border-b-[0px] border-b-transparent bottom-0 left-[5.1rem] absolute"
          ></motion.div>
        </div>
        <div className="w-80 h-24 bg-red- flex justify-between">
          <div className="w-[60%] h-24 bg-red-00 flex">
          <motion.div
            variants={springAnimation("left", 0.6)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[25%] hidden md:block h-24 bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
          ></motion.div>
          <motion.div
            variants={springAnimation("left", 0.7)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[25%] h-24 hidden md:block bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
          ></motion.div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="w-[30%] h-24 bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
