import React from "react";
import RoundScrolling from "./RoundScrolling";
import { motion } from "framer-motion";
import { fadeIn, springAnimation } from "../../variants.js";

function Hero() {
  return (
    <div className="h-screen bg-zinc-700 flex items-center justify-start  gap-3 md:gap-16 lg:gap-36 relative overflow-hidden">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="nd:w-[10%] hidden md:block bg-red-30 ml-20 z-20"
      >
        <div className="h-60 md:w-20 rounded-[2rem] bg-fuchsia-30 border border-slate-400"></div>
      </motion.div>
      <div className="w-[90%] bg-red-00 mt-20   flex flex-col z-20 p-5 md:p-0">
        <motion.p
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="archivo-black-regular mb-10 text-slate-300 text-4xl md:text-6xl lg:text-8xl lg:leading-[5rem]"
        >
          Welcome to our <br /> digital Agency where <br /> we meet expertise.
        </motion.p>
        <div className="flex flex-col md:flex-row  md:gap-10 lg:gap-20">
          <div className="lg:w-[180px] md:w-[150px] hidden md:flex md:h-[150px] lg:h-[180px]  rounded-full bg-slate-500"></div>
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="md:w-[50%] text-xs md:text-base lg:text-xl bg-fuchsia00 text-slate-400"
          >
            <p>
              Welcome To Digisorv Where Innovation Meets Digital Excellence. As
              A Leading Digital Agency, We Specialize In Crafting Compelling
              Online Experiences That Drive Results. Our Team Of Experts Is
              Dedicated To Navigating The Dynamic Landscape Of The Digital
              World.
            </p>
          </motion.div>
          <div className="w-[100px] h-[100px] mt-5 block md:hidden rounded-full bg-slate-500"></div>
        </div>
      </div>
      <div className="w-full md:h-96 bg-zinc-00 absolute z-10  bottom-0 flex flex-col md:flex-row overflow-hidden">
        {/* 1st box */}
        <motion.div
          variants={springAnimation("right", 0.7)}
          initial={{ opacity: 0, x: 50 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="w-[71%] h-60 md:hidden md:h-96 bg-zinc-600  z-10 rounded-r-[15rem] bottom-0"
        ></motion.div>
        <motion.div
          variants={springAnimation("right", 0.7)}
          initial={{ opacity: 0, x: -50 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="w-[71%] h-60 hidden md:block md:h-96 bg-zinc-600  z-10 rounded-r-[15rem] bottom-0"
        ></motion.div>

        {/* 2nd box */}
        <div className="w-full flex items-end justify-end h-60 md:h-96 md:hidden">
        <motion.div
          variants={springAnimation("left", 0.5)}
          initial={{ opacity: 0, x: -20 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="w-[80%] md:w-[15%] flex items-end h-60 md:h-96 md:hidden bg-zinc-500 z-10 rounded-l-[15rem] bottom-0"
        ></motion.div>
        </div>
        <motion.div
          variants={springAnimation("left", 0.5)}
          initial={{ opacity: 0, x: -50 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="w-[15%] h-60 md:h-96  hidden md:block bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
        ></motion.div>

        {/* 3rd box */}
        <motion.div
          variants={springAnimation("right", 0.6)}
          initial={{ opacity: 0, x: 40 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="w-full h-60 md:h-96 bg-zinc-600 md:hidden  z-10 rounded-l-[15rem] bottom-0"
        ></motion.div>
        <motion.div
          variants={springAnimation("right", 0.6)}
          initial={{ opacity: 0, x: -40 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="w-[14%] h-60 md:h-96  hidden md:block bg-zinc-600 z-10 rounded-l-[15rem] bottom-0"
        ></motion.div>
      </div>
      {/* <RoundScrolling/> */}
    </div>
  );
}

export default Hero;
