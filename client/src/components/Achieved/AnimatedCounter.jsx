import React, { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { springAnimation } from "../../variants.js"; 


export const AnimatedCounter = ({ value, direction = "up", delay = 0 }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, springAnimation(direction, delay).show.transition);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(direction === "down" ? 0 : value);
      }
    }, [motionValue, isInView, direction, value]);
  
    useEffect(() => {
      return springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
        }
      });
    }, [springValue]);
  
    return <span ref={ref} />;
}
