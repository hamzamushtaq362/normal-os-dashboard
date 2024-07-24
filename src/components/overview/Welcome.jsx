import React from "react";
import { FaDownload, FaUpload } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-8 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4 ">
          <BsStars size={40} className="text-purple-600 animate-pulse" />
          <span className="text-3xl font-semibold font-manrope animate-slideIn">
            Welcome Raven Force
          </span>
        </div>

        <button className="flex items-center gap-2 bg-white rounded-xl px-5 py-4 shadow-2xl text-gray-700 font-manrope ">
          <FaDownload /> Download
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Message write"
            className="w-full py-3 px-8 rounded-full shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent font-manrope"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <FaUpload className="h-5 w-5 text-purple-600" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
