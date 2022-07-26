import React from "react";
import image from "../Assets/logo-jira.svg";

const ProjectItem = () => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img className="rounded-xl group-hover:opacity-10" src={image} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">yaah...</h3>
        <p className="pb-4 pt-2 text-white text-center">sweet</p>
        <a href="/">
          <p className="text-center py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;