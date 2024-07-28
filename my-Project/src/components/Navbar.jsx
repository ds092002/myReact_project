import React from "react";
import logo from "../assets/asset-0.png";

const Navbar = () => {
  return (
    <div>
    <div className="bg-black w-full py-2 text-white text-sm font-semibold">
        <nav className="flex justify-between">
        <ul className="flex items-center space-x-6 ml-52">
          <li><a href="">English</a></li>
          <li><a href="">USD</a></li>
          <li><a href="">Free Shipping On All Orders Over $100</a></li>
        </ul>
        <ul className="flex items-center justify-between space-x-5 mr-52">
          <li className="text-yellow-500 space-x-2"><i class="fa-solid fa-bolt-lightning"></i><a href="">Flash Sale</a></li>
          <li><a href="">Track Order</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Blog</a></li>
        </ul>
        </nav>
    </div>
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-42" />
        </div>
        <div className="flex-grow ml-24">
          <div className="flex items-center rounded-lg shadow-md overflow-hidden w-[800px] border-[#0068C8] border-2 bg-gray-100">
            <select className="h-full px-7 py-[12px] bg-white border-r border-gray-300 text-gray-700 focus:outline-none">
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
              <option>&nbsp;&nbsp;Blutooth Speakers</option>
              <option>&nbsp;&nbsp;Portable Speakers</option>
              <option>&nbsp;&nbsp;Professional Speakers</option>
              <option>&nbsp;&nbsp;Waterproof Speakers</option>
              <option>Tablets</option>
              <option>Television</option>
              <option>&nbsp;&nbsp;55" TVs</option>
              <option>&nbsp;&nbsp;65" TVs</option>
              <option>&nbsp;&nbsp;OLED TVs</option>
              <option>&nbsp;&nbsp;QLED TVs</option>
            </select>
            <input
              type="text"
              className="w-[800px] px-4 py-3 text-gray-700 focus:outline-none"
              placeholder="Search for products"
            />
            <button className="px-6 py-3 bg-[#0068C8] text-white font-semibold rounded-rb-lg">
              SEARCH
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-20">
            <a href="">
              <i className="fa-regular fa-heart text-3xl relative">
                <span className="bg- bg-[#0068C8] h-4 w-4 text-white text-[10px] rounded-full flex justify-center items-center absolute top-[-1px] right-[-6px] z-20 text-center">
                  0
                </span>
              </i>
            </a>
            <a href="#" className="flex items-center space-x-1">
              <i class="fa-regular fa-user text-3xl"></i>
              <div className="flex flex-col">
                <span className="text-[#848484] text-[12px] ml-2">
                  My Account
                </span>
                <span className="text-sm font-bold ml-2">Login</span>
              </div>
            </a>
            <a href="#" class="flex items-center space-x-1">
              <i class="fa-solid fa-cart-shopping text-3xl relative">
                <span className="bg- bg-[#0068C8] h-4 w-4 text-white text-[10px] rounded-full flex justify-center items-center absolute top-[-1px] right-[-6px] z-20 text-center">
                  0
                </span>
              </i>
              <div className="flex flex-col">
                <span className="text-[#848484] ml-2 text-[12px]">My Cart</span>
                <span className="text-sm font-bold ml-2">$0.00</span>
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
