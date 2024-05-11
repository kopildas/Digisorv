import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col h-fit bg-zinc-300 px-5 md:px-[4rem] pt-16">
      

      <div className="w-full h-fit md:h-56 mt-10 md:mt-0 flex flex-col md:flex-row items-center justify-between text-gray-900 gap-10 px-[4rem]">
        <div className="flex flex-col items-center justify-center">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">About us</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Contact us</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Projects</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Privacy Policy</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Job opportunities</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Utility Pages</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Style Guide</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Licenses</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Blog</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Changelog</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Instructions</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400 px-[5rem] mt-5 mb-2"></div>
      <div className="w-full flex items-center justify-center lg:px-[5rem] mb-5">
        <p className="text-gray-700 text-xs lg:text-base">© 2024 Digital Agency. All Rights Reserved.</p>
      </div>
    </div>
  );
};