import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, springAnimation } from "../../variants.js";

export const Square_images = ({img_src}) => {
  return (
    <div className='w-full h-auto bg-green-00 flex items-center justify-center '>
        <motion.div
          variants={springAnimation("down", 0.5)}
          initial={{ opacity: 0, y: -100 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" z-10 rounded-l-[15rem] bottom-0"
        >
            <img src={img_src} alt="" srcset="" />
        </motion.div>
    </div>
  )
}
