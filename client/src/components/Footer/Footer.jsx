import React from "react";
import Content from "./Content";

export const Footer = () => {
  return (
    <div 
    className='relative h-[590px] md:h-[360px]'
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
>
    <div className='relative h-[calc(100vh+590px)] md:h-[calc(100vh+360px)] -top-[100vh]'>
        <div className='h-[590px] md:h-[360px] sticky top-[calc(100vh-590px)] md:top-[calc(100vh-360px)] bg-red-300 flex items-end'>
            <Content />
        </div>
    </div>
</div>
  );
};