import React from "react";
import image1 from "../assets/asset-21.jpeg";
import image2 from "../assets/asset-22.jpeg";
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
import xbox from "../assets/xbox.jpg";
import s23 from '../assets/s23.jpg'
import { FaStar } from "react-icons/fa";

const Home = () => {
  const logo = [
    { src: panasonic, alt: "panasonic" },
    { src: sony, alt: "sony" },
    { src: asus, alt: "asus" },
    { src: samsung, alt: "samsung" },
    { src: sanyo, alt: "sanyo" },
    { src: oppo, alt: "oppo" },
    { src: dell, alt: "dell" },
    { src: lenovo, alt: "lenovo" },
    { src: apple, alt: "apple" },
    { src: jbl, alt: "jbl" },
    { src: canon, alt: "canon" },
    { src: intel, alt: "itel" },
  ];

  return (
    <div className="mt-10">
      <div>
        <div className="flex flex-row justify-center items-center gap-7">
          <div className="relative">
            <img src={image1} alt="" className="rounded-xl" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center mt-20">
              <p className="text-white bg-red-600 text-sm px-2 rounded-tr-md rounded-b-md">
                WEEKEND DEAL
              </p>
              <h1 className="text-black font-black text-5xl text-center">
                Best Offers From
                <br />
                Games And More
              </h1>
              <p className="text-black text-md">
                GREAT SAVINGS & FREE DELIVERY
              </p>
              <a
                href="#"
                className="text-gray-50 text-md hover:text-[#0068C8] transition duration-300 mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white"
              >
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={image2} alt="" className="rounded-xl" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center mt-20">
              <p className="text-white bg-red-600 text-sm px-2 rounded-tr-md rounded-b-md">
                NEW PRODUCTS
              </p>
              <h1 className="text-black font-black text-5xl text-center">
                Headphones At
                <br />
                Great Low Prices
              </h1>
              <p className="text-black text-md">
                GREAT SAVINGS & FREE DELIVERY
              </p>
              <a
                href=""
                className="mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white text-gray-50 text-md  hover:text-[#00668C8] transition duration-300"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <div className="grid gap-2 grid-cols-6 p-4 py-2 border-2 border-gray-300 bg-gray-50 rounded-lg ">
          {logo.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 relative border-r border-b border-gray border-collapse mx-34"
            >
              <a href="" className="">
                <img src={logo.src} alt={logo.alt} className="" />
              </a>
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-70"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 container mb-5">
      <div>
        <h2 className="text-black font-semibold">Deals of the day</h2>
        <hr />
        <div className="flex space-x-4">
          <a
            href="#"
            className="flex flex-col items-center relative  bg-white border-2 border-blue-400 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-3%</p>
            <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
            <img
              className="object-cover lg:w-[40%] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={xbox}
              alt="Xbox"
            />
            <div className="flex flex-col text-sm justify-between leading-normal text-gray-500">
              <p className="mt-3 text-sm">Xbox Series</p>
              <p className=" text-lg text-gray-900 dark:text-white">
                Xbox Series S-1TB Gaming All-Digital Console,
                <br />
                4K Streaming Media
              </p>
              <div className="flex text-[#FCC904]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-red-500 text-xl font-semibold ">
                $279.99<del className="text-gray-500 text-lg  px-2 font-normal">$289.99</del>
              </p>
              <p>Sold: 1/35</p>
              <div className="progress h-[50px] rounded">
                <div
                  className="progress-bar w-[95%]"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="flex flex-row space-x-5 mt-4 text-xl">
                <p className="flex flex-col border justify-center items-center bg-[#0068C8] text-white py-2 px-2 rounded-xl">1131 <span>Days</span></p>
                <p className="flex flex-col border justify-center items-center bg-[#0068C8] text-white py-2 px-2 rounded-xl">23 <span>Hours</span></p>
                <p className="flex flex-col border justify-center items-center bg-[#0068C8] text-white py-2 px-2 rounded-xl">46 <span>Mins</span></p>
                <p className="flex flex-col border justify-center items-center bg-[#0068C8] text-white py-2 px-2 rounded-xl">08 <span>Secs</span></p>
              </div>
            </div>
          </a>

          <a
            href="#"
            className="flex flex-col items-center relative  bg-white border-2 border-blue-400 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-26%</p>
            <img
              className="object-cover lg:w-[40%] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={s23}
              alt="Samsung Galaxy"
            />
            <div className="flex flex-col text-sm justify-between leading-normal text-gray-500">
              <p>Samsung Galaxy</p>
              <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB
              </h5>
              <div className="flex text-[#FCC904]">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p>
                $699.99<del>$949.99</del>
              </p>
              <p>Sold: 68/167</p>
              <div className="progress h-[50px] rounded">
                <div
                  className="progress-bar w-[60%]"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="flex flex-row space-x-5 mt-4 text-xl">
                <p className="flex flex-col border justify-center items-center bg-[#0068C8] text-white py-2 px-2 rounded-xl">1153 <span>Days</span></p>
                <p className="flex flex-col border justify-center items-center bg-[#0068C8] text-white py-2 px-2 rounded-xl">23 <span>Hours</span></p>
                <p className="flex flex-col border justify-center items-center bg-[#0068C8] text-white py-2 px-2 rounded-xl">46 <span>Mins</span></p>
                <p className="flex flex-col border justify-center items-center bg-[#0068C8] text-white py-2 px-2 rounded-xl">07 <span>Secs</span></p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            <span className="bg-gray-500 h-2 w-2 rounded-full"></span>
            <span className="bg-gray-300 h-2 w-2 rounded-full"></span>
            <span className="bg-gray-300 h-2 w-2 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
