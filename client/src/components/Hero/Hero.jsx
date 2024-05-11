import React from "react";
import RoundScrolling from "./RoundScrolling";

function Hero() {
  return (
    <div className="h-screen bg-zinc-700 flex items-center justify-start px-10 gap-3 md:gap-16 lg:gap-36 ">
      <div className="nd:w-[10%] hidden md:block bg-red-30">
        <div className="h-60 md:w-20 rounded-[2rem] bg-fuchsia-30 border border-slate-400">

        </div>
      </div>
      <div className="w-[90%] bg-red-00 mt-20   flex flex-col">
        <p className="archivo-black-regular mb-10 text-slate-300 text-4xl md:text-6xl lg:text-8xl lg:leading-[5rem]">Welcome to our <br /> digital Agency where <br /> we meet expertise.</p>
        <div className="flex flex-col md:flex-row  md:gap-10 lg:gap-20">
          <div className="lg:w-[180px] md:w-[150px] hidden md:flex md:h-[150px] lg:h-[180px]  rounded-full bg-slate-500"></div>
          <div className="md:w-[50%] text-xs md:text-base lg:text-xl bg-fuchsia00 text-slate-400"><p>Welcome To Digisorv Where Innovation Meets Digital Excellence. As A Leading Digital Agency, We Specialize In Crafting Compelling Online Experiences That Drive Results. Our Team Of Experts Is Dedicated To Navigating The Dynamic Landscape Of The Digital World.</p></div>
          <div className="w-[100px] h-[100px] mt-5 block md:hidden rounded-full bg-slate-500"></div>
        </div>
      </div>
        {/* <RoundScrolling/> */}

    </div>
  );
}

export default Hero;
