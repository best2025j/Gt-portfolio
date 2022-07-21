import React, { useState } from "react";
import image from "../Assets/logo-jira.svg";
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

  return (
    <div className="w-full h-16 shadow-xl fixed z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <img src={image} alt="" className="w-14 h-14" />

        <ul className="hidden md:flex">
          <li className="pl-5 font-bold text-sm">Home</li>
          <li className="pl-5 font-bold text-sm">About</li>
          <li className="pl-5 font-bold text-sm">Skills</li>
          <li className="pl-5 font-bold text-sm">Products</li>
          <li className="pl-5 font-bold text-sm">Contact</li>
        </ul>

        <div onClick={handClick} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/*  */}

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
          <div>
            <div className="flex w-full items-center justify-between">
              <img src={image} className="w-14 h-14" alt="" />

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
                let's build something legendary together
              </p>
            </div>
            <div className="flex flex-col py-4 ">
              <ul className="font-bold space-y-3">
                <li className="text-sm">Home</li>
                <li className="text-sm">About</li>
                <li className="text-sm">Skills</li>
                <li className="text-sm">Products</li>
                <li className="text-sm">Contact</li>
              </ul>
            </div>
          </div>

          <div className="bottom-0  md:bottom-0 sm:-bottom-40 absolute ">
            <p className="uppercase text-blue-700 font-bold">let's connect</p>
            <div className="flex justify-between py-3 space-x-3 text-white">
              <div className="rounded-full shadow-lg bg-black shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                <FaGithub />
              </div>
              <div className="rounded-full bg-blue-600 shadow-lg shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                <FaLinkedinIn className="" />
              </div>
              <div className="rounded-full bg-[#7289da] shadow-lg shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                <FaDiscord className="" />
              </div>
              <div className="rounded-full bg-green-600 shadow-lg shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                <FaWhatsapp className="" />
              </div>
              <div className="rounded-full shadow-lg text-black shadow-gray-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                <FaSlack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
