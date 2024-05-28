import React from "react";
import { motion } from "framer-motion";
import { fadeIn, springAnimation } from "../../variants.js";
import { FaGoogleDrive,FaInstagram,FaTwitter,FaFacebookF } from "react-icons/fa";

function Content() {
  return (
    <div className="w-full flex flex-col h-fit bg-zinc-300 md:px-[4rem] pt-16">
      <div className="w-full h-fit md:h-56 mt-10 md:mt-0 flex flex-col md:flex-row md:items-center md:justify-between text-gray-900 gap-10 px-12 md:px-[4rem]">
        <motion.div
            variants={fadeIn("up", 0.5)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.9 }} className="md:w-[60%] flex flex-col items-start justify-start">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out text-2xl font-bold">
            DIGISORV
          </p>
          <div className="flex gap-2 mt-3">
              <div className=" md:w-10  md:h-10 rounded-full text-gray-800` lg:text-2xl hover:text-blue-500 duration-500 transition ease-in-out"><FaGoogleDrive/></div>
              <div className=" md:w-10  md:h-10 rounded-full text-gray-800` lg:text-2xl hover:text-blue-500 duration-500 transition ease-in-out"><FaInstagram/></div>
              <div className=" md:w-10  md:h-10 rounded-full text-gray-800` lg:text-2xl hover:text-blue-500 duration-500 transition ease-in-out"><FaTwitter/></div>
              <div className=" md:w-10  md:h-10 rounded-full text-gray-800` lg:text-2xl hover:text-blue-500 duration-500 transition ease-in-out"><FaFacebookF/></div>
          </div>
        </motion.div>
        <div className="md:w-[30%] flex flex-col md:flex-row md:items-center md:justify-between">

        <motion.div
            variants={fadeIn("up", 0.4)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.9 }} className="flex flex-col items-start justify-start leading-8 ">
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            About us
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Contact us
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Projects
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Privacy Policy
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Job opportunities
          </p>
        </motion.div>
        {/* end */}
        <motion.div
            variants={fadeIn("up", 0.8)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.9 }} className="flex flex-col items-start justify-start leading-8">
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Blog
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Changelog
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Instructions
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Utility Pages
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Style Guide
          </p>
          <p className="hover:text-blue-500 font-semibold cursor-pointer duration-200 transition ease-in-out">
            Licenses
          </p>
        </motion.div>

        </div>
        {/* end */}
      </div>
      <div className="w-full h-[1px] bg-gray-400 px-[5rem] mt-5 mb-2"></div>
      <div className="w-full flex items-center justify-center lg:px-[5rem] mb-5">
        <p className="text-gray-700 text-xs lg:text-base">
          © 2024 Digital Agency. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Content;
