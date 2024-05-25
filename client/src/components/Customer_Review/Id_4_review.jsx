import React from 'react'
import { motion } from "framer-motion";
import { fadeIn_2, springAnimation } from "../../variants.js";

function Id_4_review() {
  return (
    <motion.div
    variants={springAnimation("left", 0.1)}
      initial = {{opacity:0, x:50}}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
    className='w-full h-80 bg-fuchsia-00'>
      <div className='w-1/2 h-80 msg_box_4 bg-neutral-600 ml-[6rem] md:ml-[10rem]'>

      </div>
    </motion.div>
  )
}

export default Id_4_review
