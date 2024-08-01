import React from "react";
import { Card } from "flowbite-react";

/* Images */
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
import macBook2 from '../assets/macbook2.jpg'
import macBookAir from '../assets/macbBookAir.jpg'
import iphone from '../assets/iphone.jpg'
import iphone2 from '../assets/iphone2.jpg'
import controller from '../assets/controller.jpg'
import banner from '../assets/banner-46.jpg'
import logitech from '../assets/logitech.jpg'
import iwatch from '../assets/iwatch.jpg'
import oled from '../assets/OLED.jpg'
import iphone15 from '../assets/iphone15.jpg'
import camera from '../assets/camera.jpg'
import watch from '../assets/watchBanner.jpg'




/* Icons */
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { TbCoin } from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { PiCreditCard } from "react-icons/pi";


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
    <div className="mt-10 mx-2">
      <div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-7">
          <div className="relative w-full">
            <img src={image1} alt="" className="rounded-xl w-full"/>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center mt-20">
              <p className="text-white bg-red-600 lg:text-sm sm:text-[11px] px-2 rounded-tr-md rounded-b-md">
                WEEKEND DEAL
              </p>
              <h1 className="text-black font-black lg:text-5xl sm:text-[25px] text-center">
                Best Offers From
                <br />
                Games And More
              </h1>
              <p className="text-black text-md">
                GREAT SAVINGS & FREE DELIVERY
              </p>
              <a
                href="#"
                className="text-gray-50 text-base hover:text-[#0068C8] transition duration-300 mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white"
              >
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="relative w-full">
            <img src={image2} alt="" className="rounded-xl w-full " />
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
      <div className="mt-24 mx-56 mb-5">
        <div>
          <h2 className="text-black font-semibold">Deals of the day</h2>
          <hr />
          <div className="flex space-x-4 mt-8">
            <a
              href="#"
              className="group flex flex-col items-center relative  bg-white border-2 border-blue-400 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-3%</p>
              <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
              <img
                className="object-cover lg:w-[40%] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={xbox}
                alt="Xbox"
              />
              <div className="mb-32 mt-5 pr-5 text-black text-lg flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="rounded-full border h-7 w-7 flex justify-center items-center border-gray-500"><i className=""><CiHeart /></i></p>
                <p className="rounded-full border h-7 w-7 flex justify-center items-center border-gray-500"><i className=""><CiSearch /></i></p>
                <p className="rounded-full border h-7 w-7 flex justify-center items-center border-gray-500"><i className=""><GoStack /></i></p>
                <p className="rounded-full border h-7 w-7 flex justify-center items-center border-gray-500"><i className=""><BsCart3 /></i></p>
              </div>
              <div className="flex flex-col text-sm justify-between leading-normal text-gray-500">
                <p className="mt-3 text-sm hover:text-[#0068C8]">Xbox Series</p>
                <p className=" text-lg text-gray-900 dark:text-white hover:text-[#0068C8]">
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
              <div className="flex flex-col text-sm justify-between leading-normal text-gray-500 hover:text-[#0068C8]">
                <p>Samsung Galaxy</p>
                <h5 className="mb-2 text-lg tracking-tight text-gray-900 dark:text-white hover:text-[#0068C8]">
                  Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB
                </h5>
                <div className="flex text-[#FCC904]">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-red-500 text-xl font-semibold ">
                  $699.99<del className="text-gray-500 text-lg  px-2 font-normal">$949.99</del>
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

      <div className="mt-24 mx-56 mb-5">
        <div>
          <h2 className="text-black font-semibold">Daily Best Sells</h2>
          <hr />
        </div>
        <div className="grid grid-cols-5 gap-4 p-5">
          <div className="flex flex-col gap-4">
            <div className="w-[200px]">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
            <div className="w-[200px]">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={xbox} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-[200px]">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={iphone} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
            <div className="w-[200px]">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={controller} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src={banner} alt="" className="h-[730px] w-[600px] rounded-lg" />
            <div className="absolute bottom-32 left-10">
              <p className="text-white bg-red-600 lg:text-sm sm:text-[11px] px-2 w-28 rounded-tr-md rounded-b-md">SAVE EXTRA</p>
              <h3 className="text-black font-semibold mb-4">15% OFF 
              <br />
                  Order Above
              </h3>
              <a
                href="#"
                className=" text-gray-50 text-base hover:text-[#0068C8] transition duration-300 mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white"
              >SHOP NOW</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-[200px]">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
            <div className="w-[200px]">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={xbox} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-[200px]">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={iphone} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
            <div className="w-[200px]">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={controller} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-24 mb-5">
        <div>
          <div className="flex justify-center items-center gap-7">
            <div className="relative">
              <img src={logitech} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center mt-12">
                <p className="text-bases px-2 rounded-tr-md rounded-b-md">
                  UP TO 15% OFF
                </p>
                <h1 className="text-black font-black text-5xl text-center">
                  Discount 15% On
                  <br />
                  All Electronic
                </h1>
                <a
                  href="#"
                  className="text-gray-50 text-md hover:text-[#0068C8] transition duration-300 mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
            <div className="relative">
              <a href="">
                <img src={iphone2} alt="" className="rounded-xl" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center mt-12">
                  <p className="text-white bg-red-600 text-sm px-2 rounded-tr-md rounded-b-md">
                    MONTH DEAL
                  </p>
                  <h4 className="text-black font-black text-3xl text-center">
                    Latest Special Phones
                  </h4>
                  <p className="text-black text-lg mt-2">
                    SALE! 20% OFF
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 mx-56">
        <div className="flex gap-32">
          <div>
            <p className="text-3xl font-semibold text-black">Trending Products</p>
            <hr className="w-96" />
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={macBook2}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={xbox}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={iwatch}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl font-semibold text-black">New Products</p>
            <hr className="w-96" />
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={macBook2}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={xbox}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={iphone}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl font-semibold text-black">Top Rated</p>
            <hr className="w-96" />
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={macBookAir}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={oled}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row">
                <div className="">
                  <a href="">
                    <img
                      src={iphone15}
                      alt="Laptop"
                      className="h-56 object-cover"
                    />
                  </a>
                </div>
                <div>
                  <div className="">
                    <p className=" text-sm text-gray-600">
                      Laptops
                    </p>
                    <p>
                      MackBook Pro 13.3"<br />
                      16GB/512GB Silver
                    </p>
                    <div className="flex text-[#FCC904]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xl text-red-600">$1,527.00<del className="text-base text-gray-500">$1,795.00</del></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="relative">
          <img src={camera} alt="" className="" />
          <div className="absolute top-0 left-52 w-full h-full flex flex-col justify-start items-start mt-32">
            <p className="text-[#FCC904] px-2 rounded-tr-md rounded-b-md">
              SUPER DEAL ON
            </p>
            <h1 className="text-white font-black text-5xl">
              Get $50 - $100 Off
              <br />
              When Buying Online.
            </h1>
            <a
              href="#"
              className="text-gray-50 text-md hover:text-[#0068C8] transition duration-300 mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <div className="mt-24 mx-56">
        <div>
          <h3 className="text-black font-semibold">Recently Viewed Products</h3>
          <hr />
          <div className="flex">
            <div className="w-[300px]">
              <div className="hover:border-1 w-[250px] h-[290px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="hover:border-1 w-[250px] h-[290px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="hover:border-1 w-[250px] h-[290px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="hover:border-1 w-[250px] h-[290px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="hover:border-1 w-[250px] h-[290px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-gray-900 mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="mt-24 mx-56">
        <div className="relative">
          <img src={watch} alt="" className="rounded-lg" />
          <p className="absolute top-[40%] right-[30%] font-semibold flex justify-center items-center text-2xl text-white">Free Shipping On Order Over $500 - Using code: Freeship</p>
          <p className="absolute border-2 top-3 left-5 w-[93%] h-24 border-dashed border-white rounded-lg"></p>
        </div>
      </div>
      <div className="mt-24 mx-56">
        <div className="flex gap-20">
          <div className="flex items-start">
            <i className="text-8xl text-[#0068C8] mt-3"><TbTruckDelivery /></i>
            <div className="ml-7 text-center py-7 flex flex-col items-start">
              <p className="text-base text-black font-semibold ">FREE DELIVERY</p>
              <p className="text-sm text-black">Free Shiping on all order</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="text-8xl text-[#0068C8] mt-3"><TbCoin /></i>
            <div className="ml-7 text-center py-7 flex flex-col items-start">
              <p className="text-base text-black font-semibold ">RETURNS</p>
              <p className="text-sm text-black">Back guaranted under 7 days</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="text-8xl text-[#0068C8] mt-3"><BsHeadset /></i>
            <div className="ml-7 text-center py-7 flex flex-col items-start">
              <p className="text-base text-black font-semibold ">Support 24/7</p>
              <p className="text-sm text-black">Support online 24 hours a day</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="text-8xl text-[#0068C8] mt-3"><PiCreditCard /></i>
            <div className="ml-7 text-center py-7 flex flex-col items-start">
              <p className="text-base text-black font-semibold ">Payments</p>
              <p className="text-sm text-black">100% payment security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
