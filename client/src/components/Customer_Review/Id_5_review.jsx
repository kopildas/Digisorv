import React from 'react'
import { motion } from "framer-motion";
import { fadeIn_2, springAnimation } from "../../variants.js";

function Id_5_review() {
  return (
    <motion.div
    variants={springAnimation("right", 0.1)}
      initial = {{opacity:0, x:50}}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
    className='w-full h-80 bg-fuchsia-00'>
      <div className='w-1/2 h-80 msg_box bg-neutral-600 ml-[8rem] md:ml-[16rem]'>

      </div>
    </motion.div>
  )
}

export default Id_5_review
