import React from 'react'
import { motion } from "framer-motion";
import { fadeIn_2, springAnimation } from "../../variants.js";

function Id_2_review() {
  return (
    <motion.div
    variants={springAnimation("right", 0.1)}
      initial = {{opacity:0, x:-50}}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }} className='w-full h-80 bg-fuchsia-00'>
      <div className='w-1/2 h-80  msg_box_2 bg-neutral-600 ml-7 md:ml-10'>

      </div>
    </motion.div>
  )
}

export default Id_2_review
