import React from "react";
import RoundScrolling from "./RoundScrolling";
import { motion } from "framer-motion";
import { fadeIn, springAnimation } from "../../variants.js";
import { IoIosArrowRoundDown } from "react-icons/io";

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
          className="archivo-black-regular mb-10 text-slate-300 text-4xl md:text-6xl lg:text-8xl lg:leading-[6.5rem]"
        >
          Welcome to our <br /> digital <span className="bg-blue-500"><motion.span
          variants={fadeIn("up", 0.8)}
          initial={{ opacity: 0, y: -50 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }} >A</motion.span></span>gency where <br /> we meet expertise.
        </motion.p>
        <div className="flex flex-col md:flex-row  md:gap-10 lg:gap-20">
          {/* round circle with text */}
          <div className="lg:w-[135px] md:w-[120px] hidden md:flex items-center justify-center md:h-[120px] lg:h-[135px]  rounded-full bg-slate-300 relative ">
            <img src="https://i.ibb.co/2Zrjw1H/inkpx-curved-text.png" alt="" className="text absolute p-2"/>
            <div className="w-[5rem] h-[5rem] bg-blue-500 rounded-full flex items-center justify-center border border-zinc-800">
                <IoIosArrowRoundDown className="text-6xl text-zinc-700 "/>
            </div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="md:w-[50%] text-xs md:text-base lg:text-xl  bg-fuchsia-30 text-slate-400"
          >
            <p>
            At Digisorv, we transform your online presence with tailored web development, engaging content, and effective digital marketing strategies. Our passionate team is committed to helping your business thrive in the digital world.
            </p>
          </motion.div>
          <div className="w-[100px] h-[100px] mt-5  md:hidden rounded-full bg-slate-300 relative flex items-center justify-center">
          <img src="https://i.ibb.co/2Zrjw1H/inkpx-curved-text.png" alt="" className="text absolute p-1"/>
            <div className="w-[3.5rem] h-[3.5rem] bg-blue-500 rounded-full flex items-center justify-center border border-zinc-800">
                <IoIosArrowRoundDown className="text-4xl text-zinc-700 "/>
            </div>
          </div>
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
