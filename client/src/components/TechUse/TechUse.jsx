import React from 'react';
import TechScroll from './TechScroll';

export const TechUse = () => {
  const backgroundGradient = {
    backgroundImage: "radial-gradient(100% 100% at 100% 65%, #b4c6f2, #ffffff)"
  };

  const textGradient = {
    background: "radial-gradient(100% 100% at 100% 65%, #d2d2d2, #424245)",
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <div className='w-full h-auto flex flex-col md:flex-row md:-mt-24 lg:mt-8'>
      <div 
        className='md:w-[30%] h-auto archivo-black-regular font-extrabold lg:text-left text-center text-5xl md:text-2xl lg:text-7xl gap-5 p-5 pl-10 '
        style={backgroundGradient}
      >
        <p style={textGradient}>Tech</p>
        <p style={textGradient}>stack</p>
        <p style={textGradient}>we use</p>
        <p className='text-lg text-zinc-00 font-semibold mt-2' style={textGradient}>For growing your business</p>
      </div>
      <div 
        className='md:w-[70%] h-auto hidden md:block'
        
        style={{backgroundImage:"radial-gradient(100% 100% at 0% 65%, #b4c6f2, #ffffff)"}}
      >
        <div className="w-full h-full flex  items-center justify-center">
          <TechScroll />
        </div>
      </div>
      <div 
        className='md:w-[70%] h-full md:hidden'
        
        style={{backgroundImage:"radial-gradient(80% 100% at 80% 50%, #b4c6f2, #ffffff)"}}
      >
        <div className="w-full h-full">
          <TechScroll />
        </div>
      </div>
    </div>
  );
}

export default TechUse;
