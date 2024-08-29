import React from "react";
import { Card } from "flowbite-react";
import Company from "../components/CompanyLogo";
import DealOfTheDay from "../components/DealOfTheDay";

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
            <img src={image1} alt="" className="rounded-xl w-96 h-96 lg:w-full lg:h-full"/>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center mt-10 lg:mt-20">
              <p className="text-[#fff] bg-red-600 lg:text-sm text-[12px] px-2 rounded-tr-md rounded-b-md">
                WEEKEND DEAL
              </p>
              <h1 className="text-black font-black lg:text-5xl sm:text-[25px] text-center">
                Best Offers From
                <br />
                Games And More
              </h1>
              <p className="text-black text-sm lg:text-base">
                GREAT SAVINGS & FREE DELIVERY
              </p>
              <a
                href="#"
                className="text-gray-50 text-sm lg:text-base hover:text-[#0068C8] transition duration-300 mt-1 lg:mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white"
              >
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="relative w-full">
            <img src={image2} alt="" className="rounded-xl w-96 h-96 lg:w-full lg:h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center mt-10 lg:mt-20">
              <p className="text-[#fff] bg-red-600 lg:text-sm text-[12px] px-2 rounded-tr-md rounded-b-md">
                NEW PRODUCTS
              </p>
              <h1 className="text-black font-black lg:text-5xl sm:text-[25px] text-center">
                Headphones At
                <br />
                Great Low Prices
              </h1>
              <p className="text-black text-sm lg:text-base">
                GREAT SAVINGS & FREE DELIVERY
              </p>
              <a
                href=""
                className="text-gray-50 text-sm lg:text-base hover:text-[#0068C8] transition duration-300 mt-1 lg:mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center">
      <Company/>
      </div>

      {/* Deal Of The Day */}
      <div className="mt-24 lg:mx-56 mb-5">
        <div>
          <h2 className="text-black font-bold ">Deals of the day</h2>
          <hr className="w-full lg:w-full"/>
          <div className="flex justify-center mt-4">
            <DealOfTheDay/>
          </div>
        </div>
      </div>

      {/* Daily Best Sells */}
      <div className="mt-24 mx-56 mb-5">
        <div>
          <h2 className="text-black font-semibold">Daily Best Sells</h2>
          <hr />
        </div>
        <div className="grid grid-cols-5 gap-2 p-5">
          <div className="flex flex-col gap-2">
            <div className="w-[200px] border">
              <div className="hover:border-1 w-[250px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className=" rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
            <div className="w-[200px] border">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={xbox} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
            <div className="w-[200px] border">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={iphone} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
            <div className="w-[200px] border">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={controller} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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

          <div className="relative border">
            <img src={banner} alt="" className="h-[730px] w-[600px] rounded-lg" />
            <div className="absolute bottom-32 left-10">
              <p className="text-[#fff] bg-red-600 lg:text-sm sm:text-[11px] px-2 w-28 rounded-tr-md rounded-b-md">SAVE EXTRA</p>
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

          <div className="flex flex-col border gap-4">
            <div className="w-[200px] border">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
            <div className="w-[200px] border">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={xbox} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
          <div className="flex flex-col border gap-4">
            <div className="w-[200px] border">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={iphone} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
            <div className="w-[200px] border">
              <div className="hover:border-1 w-[200px] h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={controller} alt="Laptop" className="h-[100%] w-[100%] rounded-t-md object-cover mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
                  <p className="text-[#fff] bg-red-600 text-sm px-2 rounded-tr-md rounded-b-md">
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
            <h1 className="text-[#fff] font-black text-5xl">
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
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
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
          <p className="absolute top-[40%] right-[30%] font-semibold flex justify-center items-center text-2xl text-[#fff]">Free Shipping On Order Over $500 - Using code: Freeship</p>
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
