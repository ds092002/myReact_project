import React from "react";
import logo from "../assets/asset-0.png";
import '../index.css'

import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black w-full py-1 text-sm font-semibold">
        <nav className="flex justify-between">
          <ul className="flex items-center space-x-6 ml-52">
            <li><a href="" className="text-white">English</a></li>
            <li><a href="" className="text-white">USD</a></li>
            <li><a href="" className="text-white">Free Shipping On All Orders Over $100</a></li>
          </ul>
          <ul className="flex items-center justify-between space-x-5 mr-52">
            <li className="text-[#FCC904] space-x-2"><i class="fa-solid fa-bolt-lightning"></i><a href="" className="text-[#FCC904]">Flash Sale</a></li>
            <li><a href="" className="text-white">Track Order</a></li>
            <li><a href="" className="text-white">About</a></li>
            <li><a href="" className="text-white">Contact</a></li>
            <li><a href="" className="text-white">Blog</a></li>
          </ul>
        </nav>
      </div>
      <nav>
        <div className="bg-white border-b">
          <div className=" mx-60 flex items-center justify-between py-8">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-12" />
            </div>
            <div className="flex-grow ml-24">
              <div className="flex items-center rounded-lg overflow-hidden w-[810px] border-[#0068C8] border-2 bg-gray-100">
                <select
                  name=""
                  id=""
                  className="focus h-full px-7  bg-gray-100 text-gray-700 border-0 border-[#0068C8]"
                >
                  <option className="">All Categories</option>
                  <option>Camera</option>
                  <option>&nbsp;&nbsp;Accessories</option>
                  <option>&nbsp;&nbsp;Camera & Lenses</option>
                  <option>&nbsp;&nbsp;Drones</option>
                  <option>&nbsp;&nbsp;Security Cameras</option>
                  <option>Games</option>
                  <option>&nbsp;&nbsp;Accessories</option>
                  <option>&nbsp;&nbsp;Playstation 4</option>
                  <option>&nbsp;&nbsp;Playstation 5</option>
                  <option>&nbsp;&nbsp;Xbox Series</option>
                  <option>Headphones</option>
                  <option>&nbsp;&nbsp;AirPods</option>
                  <option>&nbsp;&nbsp;Gaming Headsets</option>
                  <option>&nbsp;&nbsp;Kids' Headphones</option>
                  <option>&nbsp;&nbsp;Wireless Earbuds</option>
                  <option>Iwatch</option>
                  <option>Laptops & Desktops</option>
                  <option>&nbsp;&nbsp;Accessories</option>
                  <option>&nbsp;&nbsp;Laptops</option>
                  <option>&nbsp;&nbsp;Monitors</option>
                  <option>Smart Home</option>
                  <option>SmartPhone</option>
                  <option>&nbsp;&nbsp;IPhone</option>
                  <option>&nbsp;&nbsp;Prepaid Phone</option>
                  <option>&nbsp;&nbsp;Samsung Galaxy</option>
                  <option>&nbsp;&nbsp;Unlocked Phones</option>
                  <option>Speakers</option>
                  <option>&nbsp;&nbsp;Bluetooth Speakers</option>
                  <option>&nbsp;&nbsp;Portable Speakers</option>
                  <option>&nbsp;&nbsp;Professional Speakers</option>
                  <option>&nbsp;&nbsp;Waterproof Speakers</option>
                  <option>Tablets</option>
                  <option>Television</option>
                  <option>&nbsp;&nbsp;55" TVs</option>
                  <option>&nbsp;&nbsp;65" TVs</option>
                  <option>&nbsp;&nbsp;OLED TVs</option>
                  <opt>&nbsp;&nbsp;QLED TVs</opt>
                </select>
                <span className="h-9 w-1 bg-gray-300 z-40"></span>
                <input
                  type="text"
                  className="focus w-[710px] px-4 py-2.5 bg-gray-100 text-gray-700 border-none"
                  placeholder="Search for products"
                />
                <button className="bg-[#0068C8] py-2.5 w-36 px-[30px] text-[16px] text-white font-semibold">SEARCH</button>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-9">
                <a href="d-flex align-items-center">
                  <i className=" text-4xl relative text-black">
                    <CiHeart />
                    <span className="bg-[#0068C8] h-4 w-4 text-white text-[10px] rounded-full flex justify-center items-center absolute top-[-1px] right-[-6px] z-20 text-center">
                      0
                    </span>
                  </i>
                </a>
                <a href="#" className="flex items-center space-x-1 d-flex align-items-center">
                  <i className="text-3xl text-black">
                    <FiUser />
                  </i>
                  <div className="flex flex-col ml-2">
                    <span className="text-[#848484] text-[12px]">
                      My Account
                    </span>
                    <span className="text-sm font-bold text-black">Login</span>
                  </div>

                </a>
                <a href="#" class="flex items-center space-x-1 d-flex align-items-center">
                  <i className="text-3xl relative text-black">
                    <BsCart3 />
                    <span className="bg-[#0068C8] h-4 w-4 text-white text-[10px] rounded-full flex justify-center items-center absolute top-[-1px] right-[-6px] z-20 text-center">
                      0
                    </span>
                  </i>
                  <div className="flex flex-col ml-2">
                    <span className="text-[#848484] text-[12px]">My Cart</span>
                    <span className="text-sm font-bold text-black">$0.00</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>
      <nav>
        <div className=" mx-60 flex items-center justify-between py-4">
          <div className="flex items-center border-r">
            <a href="" className="text-2xl"><IoMenuOutline /></a>
            <select
                  name=""
                  id=""
                  className="focus:outline-none h-full px-7  text-gray-700 border-0 border-[#0068C8]"
                >
                  <option className="">All Categories</option>
                  <option>Smartphone</option>
                  <option>Laptops</option>
                  <option>Camera</option>
                  <option>Headphones</option>
                  <option>PC Games</option>
                  <option>Tablets</option>
                  <option>Television</option>
                  <option>Smartwatches</option>
                  <option>Speakers</option>
                  <option>Kids Electronics</option>
                  <option>Tech Gift</option>
                </select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
