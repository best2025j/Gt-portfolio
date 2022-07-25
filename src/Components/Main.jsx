import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaSlack,
  FaWhatsapp,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full text-center h-screen pt-16">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="space-y-2">
          <p className="text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="text-gray-800">
            Hi, I&#39;m <span className="text-[#433ec5]">God&#39;stime</span>
          </h1>
          <h1 className=" text-gray-800">A Front-End Web Developer</h1>
          <p className=" text-gray-600 sm:max-w-screen-[70%] m-auto">
            I’m focused on building responsive front-end web applications while
            i learn back-end technologies later on.
          </p>
          {/* ICONS */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 space-x-1 sm:space-x-3 text-slate-300">
            <a href="http://">
              <div className="rounded-full shadow-lg bg-black shadow-gray-400 p-5 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            {/*  */}

            <a href="http://">
              <div className="rounded-full bg-blue-600 shadow-lg shadow-gray-400 p-5 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="" />
              </div>
            </a>

            {/*  */}

            <a href="http://">
              <div className="rounded-full bg-[#7269da] shadow-lg shadow-gray-400 p-5 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaDiscord className="" />
              </div>
            </a>

            {/*  */}

            <a href="http://">
              <div className="rounded-full bg-green-600 shadow-lg shadow-gray-400 p-5 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaWhatsapp className="" />
              </div>
            </a>

            {/*  */}

            <a href="http://">
              <div className="rounded-full shadow-lg text-black shadow-gray-400 p-5 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaSlack />
              </div>
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Main;
