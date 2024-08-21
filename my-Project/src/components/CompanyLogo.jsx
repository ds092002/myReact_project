import React from "react";

import asus from "../assets/asus.png";
import canon from "../assets/canon.png";
import dell from "../assets/dell.png";
import intel from "../assets/intel.png";
import jbl from "../assets/jbl.png";
import lenovo from "../assets/lenovo.png";
import oppo from "../assets/oppo.png";
import panasonic from "../assets/panasonic.png";
import samsung from "../assets/samsung.png";
import sanyo from "../assets/sanyo.png";
import sony from "../assets/sony.png";
import apple from "../assets/apple.png";

const Company = () => {
  return (
    <div className="grid lg:grid-cols-6 md:max-lg:grid-cols-4 max-md:grid-cols-2 px-12 my-8 mx-auto">
      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
      <a href="">
        <img src={asus} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
      </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
        <a href="">
        <img src={canon} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
        </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
        <a href="">
        <img src={dell} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
        </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
      <a href="">
        <img src={intel} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
      </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
      <a href="">
        <img src={jbl} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
      </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
      <a href="">
        <img src={lenovo} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
      </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
      <a href="">
        <img src={oppo} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
      </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
      <a href="">
        <img src={panasonic} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
      </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
      <a href="">
        <img src={samsung} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
      </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
        <a href="">
        <img src={sanyo} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
      </a>
      </div>

      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
        <a href="">
          <img src={sony} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
        </a>
      </div>
      <div className="border relative border-[#000] h-full w-full flex justify-center items-center px-4 py-4">
        <a href="/">
          <img src={apple} alt="" />
        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
        </a>
      </div>
    </div>
  );
};

export default Company;