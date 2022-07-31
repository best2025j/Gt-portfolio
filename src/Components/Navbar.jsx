import React, { useState } from "react";
import image from "../Assets/gt.jpeg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaSlack,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-full h-16 shadow-md bg-white fixed z-[100]">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <a href="/">
          <img src={image} alt="" className="w-14 h-14 rounded-full" />
        </a>

        <ul className="hidden md:flex">
          <li className="pl-4 font-bold text-sm">
            <a href="#home">Home</a>
          </li>
          <li className="pl-4 font-bold text-sm">
            <a href="#about">About</a>
          </li>
          <li className="pl-4 font-bold text-sm">
            <a href="#skills">Skills</a>
          </li>

          <li className="pl-4 font-bold text-sm">
            <a href="#resume">Resume</a>
          </li>
          <li className="pl-4 font-bold text-sm">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div onClick={handClick} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* 
      <div
        className={
          !nav === false
            ? "fixed left-0 top-0 w-full h-screen bg-black/60"
            : "hidden"
        }
      >
        <div
          className={
            !nav === false
              ? "flex relative flex-col items-start justify-between w-[68%] sm:w-[50%] md:w-[40%] sm:overflow-scroll h-screen bg-white easy-in duration-500 p-5"
              : "hidden h-screen bg-white "
          }
        >
         */}

      {/* modal */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen sm:overflow-scroll bg-white p-5 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-5 ease-out duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="/">
                <img src={image} className="w-14 h-14" alt="/" />
              </a>

              {/* MOBILE VEIW */}

              <div
                onClick={handClick}
                className="rounded-full shadow-lg shadow-gray-500 p-2 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>

            <div className="border-b border-gray-400 py-4">
              <p className="w-[90%] sm:w-[90%] md:w-full py-2">
                Let's build something legendary together
              </p>
            </div>

            {/*  */}
            <div className="flex flex-col py-4 ">
              <ul className="font-bold space-y-1">
                <li className="text-sm" onClick={handleClose}>
                  <a href="#home">Home</a>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <a href="#about">About</a>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <a href="#skills">Skills</a>
                </li>

                <li className="text-sm" onClick={handleClose}>
                  <a href="#resume">Resume</a>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottom-0  md:bottom-0 sm:-bottom-40 absolute ">
            <p className="uppercase tracking-widest text-[#5651e5] font-bold">
              Let's Connect
            </p>
            {/* <div className="flex justify-between py-3 space-x-5 text-white"> */}
            <div className="flex items-center justify-between py-3 text-slate-300 space-x-4 w-full sm:w-[80%]">
              <a href="https://github.com/best2025j" onClick={handleClose}>
                <div className="rounded-full shadow-lg bg-black shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                  <FaGithub />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/audu-godstime"
                onClick={handleClose}
              >
                <div className="rounded-full bg-blue-600 shadow-lg shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                  <FaLinkedinIn className="" />
                </div>
              </a>
              <a href="https://" onClick={handleClose}>
                <div className="rounded-full bg-[#7289da] shadow-lg shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                  <FaDiscord className="" />
                </div>
              </a>
              <a href="https://wa.me/09012902537" onClick={handleClose}>
                <div className="rounded-full bg-green-600 shadow-lg shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                  <FaWhatsapp className="" />
                </div>
              </a>
              <a href="http://" onClick={handleClose}>
                <div className="rounded-full shadow-lg text-black shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                  <FaSlack />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
