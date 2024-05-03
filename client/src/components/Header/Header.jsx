import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Toggle_menu from "./Toggle_menu";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [toggle_menu, setToggle_menu] = useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setToggle_menu(!toggle_menu);
  };

  return (
    <nav className="z-10 bg-zinc-700 fixed w-full flex items-center justify-between px-10 py-5 order-b">
      {toggle_menu && <Toggle_menu toggle={toggle} />}
      <div className="w-full flex items-center justify-between bg-zinc-600 px-5 md:px-10 py-4 rounded-3xl">
        <div className="">
          <p
            onClick={() => {
              navigate("/");
            }}
            
            className="w-32 lg:ml-0 cursor-pointer text-4xl text-white"
          >Digisorv</p>
        </div>

        <div className=" gap-10 hidden lg:flex">
          <p
            className="cursor-pointer text-white font-semibold text-2xl hover:text-blue-300 transition-all duration-200 ease-in-out"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p
            className="cursor-pointer text-white font-semibold text-2xl hover:text-blue-300 transition-all duration-200 ease-in-out"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </p>
          <p
            className="cursor-pointer text-white font-semibold text-2xl hover:text-blue-300 transition-all duration-200 ease-in-out"
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </p>
          <p
            className="cursor-pointer text-white font-semibold text-2xl hover:text-blue-300 transition-all duration-200 ease-in-out"
            onClick={() => {
              navigate("/blog");
            }}
          >
            Blog
          </p>
        </div>

        <div className="hidden lg:flex gap-5 border border-shades-3 rounded-3xl font-semibold text-white backdrop-blur-[40px] px-10 py-2 text-shades-8 text-lg text-font">
          <p
            className="cursor-pointer"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact us
          </p>
        </div>

        <div className=' lg:hidden flex'>
          <p className='text-4xl text-shades-8 cursor-pointer' onClick={toggle}><CgMenuRight /></p>
          

        </div>

      </div>
      
    </nav>
  );
}
