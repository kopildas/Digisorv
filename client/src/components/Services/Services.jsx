import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
import {  Square_images } from "./Square_images.jsx";

function Services() {
  return (
    <div className="flex flex-col h-auto bg-zinc-500 px-5 lg:px-16 pt-10 pb-48 lg:py-20">
      <div className="flex lg:items-center lg:justify-around flex-col md:flex-row bg-red-40 gap-2 md:gap-5">
        <p className="archivo-black-regular text-slate-200 text-xl md:text-3xl bg-fuchsia-00 lg:text-5xl md:w-auto">
          OUR SERVICES
        </p>
        <div className="w-auto bg-red-00  flex md:items-center md:justify-center">
          <div className="md:w-32 w-full h-[2px] md:h-1 bg-slate-600"></div>
        </div>
        <div className="md:w-[50%] bg-red-00 flex md:items-center md:justify-center">
          <p className="archivo-black-regular text-slate-200 text-xs md:text-sm lg:text-xl">
            Dive into our expertise in user experience optimization, digital
            strategy, and cutting-edge technology.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-auto bg-red-00 mt-[12rem] md:mt-10 lg:mt-10 archivo-black-regular gap-5">
        <div className="lg:w-1/3 h-[30rem] md:h-96 lg:h-auto bg-fuchsia-00 flex flex-col md:flex-row lg:flex-col justify-center lg:items-end lg:justify-end gap-5 p-5">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="lg:h-1/2 h-full md:w-96 bg-green-00 rounded-3xl border border-gray-700 slide-down-delay four col"
          >
            <div class="box h-full rounded-3xl bg-zinc-00 flex flex-col p-5">
              <div className="w-full h-1/3 bg-green-00 flex items-center justify-between">
                <div className="w-24 h-24 bg-blue-100 rounded-full z-30 ">
                  <img src="https://i.ibb.co/tDv6KFW/output-onlinegiftools-2.gif" alt="" srcset="" className="w-24 h-24 bg-blue-100 rounded-full z-30 bg-blend-multiply p-2" />
                </div>
                <div className="w-20 h-20 bg-blue-00 text-5xl font-bold flex items-center justify-center text-zinc-200 z-30">
                  01
                </div>
              </div>
              <div className="flex items-start justify-start mt-5 z-30">
                <p className="font-bold text-2xl text-zinc-800">
                  Digital Product Design
                </p>
              </div>
              <div className=" mt-10 z-30">
                <p className="font-semibold text-base text-zinc-700 text-left">
                  Creating an effective landing page for a digital agency
                  involves combining visually appealing design.
                </p>
              </div>
              <div className=" mt-5 z-30">
                <p className="font-semibold text-left text-zinc-700 hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
                  Learn more -
                </p>
              </div>
              <div></div>
              <div class="overlay bg-transparent bg-opacity-50"></div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={"show"}
            viewport={{ once: true, amount: 1 }}
            className="lg:h-1/2 h-full md:w-96  bg-green-00 rounded-3xl border border-gray-700 slide-down-delay"
          >
            <div class="box h-full rounded-3xl bg-red-00 flex flex-col p-5">
              <div className="w-full h-1/3 bg-green-00 flex items-center justify-between">
                <div className="w-24 h-24 bg-blue-200 rounded-full z-30">
                <img src="https://i.ibb.co/CzKKr7K/output-onlinegiftools-4.gif" alt="" srcset="" className="w-24 h-24 bg-blue-100 rounded-full z-30 bg-blend-multiply p-2" />
                </div>
                <div className="w-20 h-20 bg-blue-00 text-5xl font-bold flex md:hidden items-center justify-center text-zinc-200 z-30">
                  02
                </div>
                <div className="w-20 h-20 bg-blue-00 text-5xl font-bold hidden md:block items-center justify-center text-zinc-200 z-30">
                  03
                </div>
              </div>
              <div className="flex items-start justify-start mt-5 z-30">
                <p className="font-bold text-2xl text-zinc-800">
                  Seo Digital Marketing
                </p>
              </div>
              <div className=" mt-10 z-30">
                <p className="font-semibold text-base text-zinc-700 text-left">
                  Creating an effective landing page for a digital agency
                  involves combining visually appealing design.
                </p>
              </div>
              <div className=" mt-5 z-30">
                <p className="font-semibold text-left text-zinc-700 hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
                  Learn more -
                </p>
              </div>
              <div></div>
              <div class="overlay bg-transparent bg-opacity-50"></div>
            </div>
          </motion.div>


          
        </div>
        <div className="lg:w-1/3 w-full h-auto p-5 md:p-10 lg:p-5 bg-red-00 mt-[10rem] md:mt-0 hidden lg:block">
          <div className="w-full h-20 md:h-full bg-blue-300 rounded-3xl flex flex-col items-center justify-center gap-14">
            <Square_images img_src={"https://uploads-ssl.webflow.com/66169a745ee0f69fd7a50362/661d5d3fc93d8cad0560b2ed_Service1.svg"}/>
            <Square_images img_src={"https://uploads-ssl.webflow.com/66169a745ee0f69fd7a50362/661d5d3f49aaed7b04aed41d_Service2.svg"}/>
            <Square_images img_src={"https://uploads-ssl.webflow.com/66169a745ee0f69fd7a50362/661d5d3f16a205db89e10fa1_Service3.svg"}/>
            {/* <img src="https://uploads-ssl.webflow.com/66169a745ee0f69fd7a50362/661d5d3fc93d8cad0560b2ed_Service1.svg" alt="" srcset="" /> */}
            {/* <img src="https://uploads-ssl.webflow.com/66169a745ee0f69fd7a50362/661d5d3f49aaed7b04aed41d_Service2.svg" alt="" srcset="" />
            <img src="https://uploads-ssl.webflow.com/66169a745ee0f69fd7a50362/661d5d3f16a205db89e10fa1_Service3.svg" alt="" srcset="" /> */}
            {/* <Square_boxes/> */}
          </div>
        </div>
        <div className="lg:w-1/3 h-96 lg:h-auto bg-fuchsia-00 flex flex-col md:flex-row  lg:flex-col justify-center lg:items-start lg:justify-start gap-5 p-5 mt-[20rem] md:mt-0">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="lg:h-1/2 h-full md:w-96 bg-green-00 rounded-3xl border border-gray-700 slide-down-delay"
          >
            <div class="box h-full rounded-3xl bg-red-00 flex flex-col p-5">
              <div className="w-full h-1/3 bg-green-00 flex items-center justify-between">
                <div className="w-24 h-24 bg-blue-200 rounded-full z-30">
                <img src="https://i.ibb.co/tcBmqk3/output-onlinegiftools-3.gif" alt="" srcset="" className="w-24 h-24 bg-blue-100 rounded-full z-30 bg-blend-multiply p-[6px]" />
                </div>
                <div className="w-20 h-20 bg-blue-00 text-5xl font-bold flex md:hidden items-center justify-center text-zinc-200 z-30">
                  03
                </div>
                <div className="w-20 h-20 bg-blue-00 text-5xl font-bold hidden md:block items-center justify-center text-zinc-200 z-30">
                  02
                </div>
              </div>
              <div className="flex items-start justify-start mt-5 z-30">
                <p className="font-bold text-2xl text-zinc-800">
                  Design & Development
                </p>
              </div>
              <div className=" mt-10 z-30">
                <p className="font-semibold text-base text-zinc-700 text-left">
                  Drive tangible results for your business. From stunning
                  website design and development.
                </p>
              </div>
              <div className=" mt-5 z-30">
                <p className="font-semibold text-left text-zinc-700 hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
                  Learn more -
                </p>
              </div>
              <div></div>
              <div class="overlay bg-transparent bg-opacity-50"></div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="lg:h-1/2 h-full md:w-96  bg-green-00 rounded-3xl border border-gray-700 slide-down-delay"
          >
            <div class="box h-full rounded-3xl bg-red-00 flex flex-col p-5">
              <div className="w-full h-1/3 bg-green-00 flex items-center justify-between">
                <div className="w-24 h-24 bg-blue-200 rounded-full z-30">
                <img src="https://i.ibb.co/28wzVBH/output-onlinegiftools-5.gif" alt="" srcset="" className="w-24 h-24 bg-blue-100 rounded-full z-30 bg-blend-multiply p-2" />
                </div>
                <div className="w-20 h-20 bg-blue-00 text-5xl font-bold flex items-center justify-center text-zinc-200 z-30">
                  04
                </div>
              </div>
              <div className="flex items-start justify-start mt-5 z-30">
                <p className="font-bold text-2xl text-zinc-800">
                  Digital Consultation
                </p>
              </div>
              <div className=" mt-10 z-30">
                <p className="font-semibold text-base text-zinc-700 text-left">
                  Drive tangible results for your business. From stunning
                  website design and development.
                </p>
              </div>
              <div className=" mt-5 z-30">
                <p className="font-semibold text-left text-zinc-700 hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
                  Learn more -
                </p>
              </div>
              <div></div>
              <div class="overlay bg-transparent bg-opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
