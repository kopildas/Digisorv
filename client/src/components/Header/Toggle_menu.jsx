import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Icon_Magnetic from "../Home/Hero/Icon_Magnetic";

export default function Toggle_menu({ toggle }) {
  const navigate = useNavigate();

  const toggle_close = () => {
    toggle();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-80 h-screen bg-shades-4 drop-shadow-md flex flex-col z-[101]"
    >
      <div
        className="w-full flex items-center justify-center p-4 cursor-pointer"
        onClick={toggle_close}
      >
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="flex-1 items-start justify-start text-shades-1 hover:text-shades-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-8 md:w-8 w-16 h-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.div>

        {/* <motion.p
            whileTap={{ scale: 0.75 }}
            className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-base text-gray-600"
          >
            Clear <RiRefreshFill />
          </motion.p> */}
      </div>

      <div className="b bg-red-00 -mt-10 md:-mt-0 w-full h-full flex items-center justify-center">
        <div className="b bg-green-00 w-96 h-96 flex flex-col items-center justify-center text-4xl font-bold text-font gap-5 text-shades-7">
          <p className="cursor-pointer hover:text-shades-6 transition ease-in-out duration-150 hover:bg-[#d5812d5d] w-full flex items-center justify-center"
          onClick={() => {
            navigate("/");
          }}>
            {" "}
            <>Home</>
          </p>
          <p className="cursor-pointer hover:text-shades-6 transition ease-in-out duration-150 hover:bg-[#d5812d5d] w-full flex items-center justify-center"
          onClick={() => {
            navigate("/about");
          }}>
            {" "}
            <>Info</>
          </p>
          <p className="cursor-pointer hover:text-shades-6 transition ease-in-out duration-150 hover:bg-[#d5812d5d] w-full flex items-center justify-center"
          onClick={() => {
            navigate("/projects");
          }}>
            {" "}
            <>Projects</>
          </p>
          <p className="cursor-pointer hover:text-shades-6 transition ease-in-out duration-150 hover:bg-[#d5812d5d] w-full flex items-center justify-center"
          onClick={() => {
            navigate("/contact");
          }}>
            {" "}
            <>Contact</>
          </p>
        </div>
      </div>
    </motion.div>
  );
}