import React from "react";
import macBook2 from "../assets/macbook2.jpg";
import { FaStar, FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const DailyBestSell = () => {
  return (
    <div className="w-[200px]">
      <div className="group relative hover:border-1 h-[210px] hover:border-[#0068C8] rounded-lg flex justify-center items-center">
        <a href="" className="relative w-full h-full z-30">
          <img
            src={macBook2} 
            alt="Laptop"
            className="h-full w-full rounded-t-md object-cover"
          />
          
          <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">
            -15%
          </p>
          <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">
            HOT
          </p>
        </a>

        <div className="absolute translate group-hover:-translate-y-2 translate-y-1 right-0 top-4 flex flex-col items-center gap-2 z-50 opacity-0 group-hover:!opacity-100 p-2 rounded-lg transition duration-500">
        <NavLink to="/whishlist">
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Add to Wishlist"
          >
            <FaHeart className="" />
          </button>
        </NavLink>
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            aria-label="Quick View"
          >
            <FaSearch className="" />
          </button>
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            aria-label="Add to Compare"
          >
            <RiStackLine className="" />
          </button>
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            aria-label="Add to Cart"
          >
            <FaShoppingCart className="" />
          </button>
        </div>
      </div>

      <div className="p-2">
        <div className="flex flex-col">
          <a href="" className="inline-flex items-center text-sm text-gray-500">
            Laptops
          </a>
          <a
            href=""
            className="text-base text-gray-900 mt-2 hover:text-[#0068C8]"
          >
            MacBook Pro 13.3"
            <br />
            16GB/512GB Silver
          </a>
        </div>
        <div className="flex text-[#FCC904]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <div className="mt-2">
          <p className="text-red-600 text-xl font-semibold">
            $1527.00{" "}
            <del className="text-base text-gray-500 font-normal">$1795.00</del>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyBestSell;
